# BiBiChik website

BiBiChik is a Next.js 16, React 19, and TypeScript website. English pages are at the root URL; Simplified Chinese pages use `/zh`. Both languages share page components and a translation dictionary in `lib/i18n.ts`. The original lunch and dinner menu artwork remains unchanged.

## Run locally

Use Node.js 22.x and npm.

```sh
npm install
npm run dev
npm run build
npm run start
```

`npm run dev` uses the Next.js development server (port 3000 by default). `npm run start` serves the production build.

## Deploy to GoDaddy Node.js Hosting

Upload the contents of this directory as a ZIP with `package.json` at the ZIP root. Select Node.js 22. The install command is `npm install`, the build command is `npm run build`, and the start command is `npm start`. GoDaddy supplies `PORT`; Next.js `next start` reads it automatically. Keep this as a Node.js application rather than a static export. Do not upload `node_modules`, `.next`, `.git`, or local `.env` files. No application secrets or extra environment variables are currently required.

## Pages

Home, Our Story, Our Flavours, Menu, Lunch Menu, Dinner Menu, Visit Us, Privacy Policy, and Terms & Conditions have English and Simplified Chinese routes. The header language switch keeps visitors on the equivalent page. The menu viewer uses the original supplied PDF images and supports buttons, arrow keys, mobile swipes, and enlarged reading.

## Business content

The contact form composes an email only when a verified recipient is configured in `lib/business.ts`; the current site does not silently store or send enquiries. Privacy and terms pages remain preview copy pending approved business policies.
