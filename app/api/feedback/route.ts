import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      rating,
      categories = [],
      comment = "",
      name = "",
      contact = "",
      branch = "BiBiChik SS2",
    } = body;

    if (!rating) {
      return NextResponse.json(
        { error: "Rating is required" },
        { status: 400 }
      );
    }

    if (rating <= 3 && categories.length === 0 && !comment.trim()) {
      return NextResponse.json(
        { error: "Please select a category or write a comment." },
        { status: 400 }
      );
    }

    const result = await resend.emails.send({
      from: "BiBiChik Feedback <onboarding@resend.dev>",
      to: process.env.FEEDBACK_EMAIL!,
      subject: `BiBiChik SS2 Feedback - ${rating} Star Review`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color:#62A496;">New BiBiChik Customer Feedback</h2>

          <p><strong>Branch:</strong> ${branch}</p>
          <p><strong>Rating:</strong> ${rating} / 5</p>

          <p><strong>Areas to improve:</strong></p>
          <p>${categories.length ? categories.join(", ") : "None selected"}</p>

          <p><strong>Comment:</strong></p>
          <p>${comment || "No comment"}</p>

          <p><strong>Name:</strong> ${name || "Not provided"}</p>
          <p><strong>Contact:</strong> ${contact || "Not provided"}</p>

          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        </div>
      `,
    });

    if (result.error) {
      console.error(result.error);

      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}