"use client";
import {useState,type FormEvent} from 'react';
import {business} from '@/lib/business';
export default function ContactForm(){const[status,setStatus]=useState('');function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();if(!business.contactEmail){setStatus('Online enquiries are not available yet. Your message has not been sent.');return}const d=new FormData(e.currentTarget);const subject=encodeURIComponent('BiBiChik enquiry from '+d.get('name'));const body=encodeURIComponent(`Name: ${d.get('name')}
Phone: ${d.get('phone')}
Email: ${d.get('email')}

${d.get('message')}`);window.location.href=`mailto:${business.contactEmail}?subject=${subject}&body=${body}`;setStatus('Your email app will open with your enquiry. Please send it there to complete your message.')}return <form onSubmit={submit} className="contact-form"><div className="form-fields"><label>Name<input name="name" autoComplete="name" required maxLength={120}/></label><label>Phone<input name="phone" type="tel" autoComplete="tel" maxLength={40}/></label><label>Email<input name="email" type="email" autoComplete="email" required maxLength={180}/></label></div><label>Message<textarea name="message" rows={5} required maxLength={4000}/></label>{!business.contactEmail&&<p className="form-note" id="contact-note">Online enquiries and table bookings are coming soon. A contact address has not yet been confirmed.</p>}<button className="button" disabled={!business.contactEmail} aria-describedby={!business.contactEmail?'contact-note':undefined}>Send message</button><p role="status">{status}</p></form>}
