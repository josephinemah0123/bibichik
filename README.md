# BiBiChik website

Responsive Next.js 16, React 19, TypeScript and Tailwind CSS website based on the supplied BiBiChik CI and page references.

## Run

Use Node.js 22.13 or newer.

```sh
npm ci
npm run dev
npm run build
```

Development runs at http://127.0.0.1:5173. The production export is in `out/` and can be hosted on a static web host. Sites hosting is configured in `.openai/hosting.json`.

## Pages

Home, Our Story, Our Flavours, Visit Us, Menu, Lunch Menu, Dinner Menu, Privacy Policy and Terms & Conditions.

## Menu reader

- Separate 27-page lunch and 22-page dinner menus, reproduced directly from the supplied PDFs.
- Original English/Chinese names, prices, photography and artwork preserved.
- Desktop spreads, 650ms page turns, arrow-key navigation, mobile single-page swipes, enlarged reading dialog and original PDF links.
- Opens at the first interior page; the original cover remains available with Previous.
- Respects reduced-motion preferences.

## Business details to complete

- Add verified locations to `locations` in `components/site.tsx`. It is intentionally empty. The mockup branch details have not been treated as verified business data.
- Add a real recipient in `lib/business.ts` to enable email-app enquiry composition. For direct delivery, connect a real server/form service before replacing that flow. The current website does not collect, save or claim to send messages.
- Add approved social links, opening hours and phone numbers.
- Replace the clearly marked privacy/terms placeholders with approved business policies.
- The Book a Table link goes to the contact section. No reservation is confirmed by this preview.

## Assets

Brand logo and emblem were extracted from the supplied CI PDF. Editorial photographs and book imagery were cropped from the supplied website references. Menu images and PDFs are kept separately under `public/menus/lunch`, `public/menus/dinner`, and `public/menus/*.pdf`. No new prices, addresses or restaurant photography were invented.

The original menu PDFs use blue/mint page artwork. Their artwork was preserved rather than recolouring or rewriting the menu contents. Rasterized source pages are not a searchable or screen-reader text menu.

## Validation

- Production build and TypeScript check passed.
- All nine content routes returned HTTP 200.
- Desktop and mobile layouts checked for horizontal overflow.
- Keyboard turns, button turns, mobile swipes, enlarged reading dialog, mobile navigation and source PDF links checked.
- `navigate_menu_page` WebMCP registration, valid navigation and invalid-page rejection checked in an API harness. Native WebMCP was unavailable in the local test browser.

The project retains unused bundled starter utilities and components. They are not rendered by the website.
