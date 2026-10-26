# Hundred Bit — Website

Next.js 14 (static export) · TypeScript · Tailwind CSS · Framer Motion · PHP contact mailer

## Run locally
```bash
npm install
cp .env.example .env.local   # contact details
npm run dev                  # http://localhost:3000 (PHP form not available here)
npm run build                # outputs ./out
```

## Add real project screenshots
1. `npm i -D playwright && npx playwright install chromium`
2. `npm run screenshots` captures Tarini925 and KSSB Global into `public/projects/<folder>/desktop.png` + `mobile.png`
   (or drop your own files there; use the same names).
3. In `src/data/projects.ts` set `imageReady: true` for each project that has images.
   Until then the site shows the branded "PROJECT PREVIEW COMING SOON" placeholder, so no broken images.
4. Thara Thai Spa: add its verified `liveUrl`, set `status: "live"`, add screenshots.
   PG Management System: add dashboard / residents / payments / reports screenshots (names in the data file).

## Add a new project
Append an object to `src/data/projects.ts` (two hidden empty slots are already there). It appears in the
homepage (if `featured`), `/work`, its own `/work/<slug>` case study, and the sitemap automatically.

## Testimonials
`src/data/testimonials.ts` — add real, approved entries with `verified: true`. Until then clearly labelled
placeholders show. Set `SHOW_PLACEHOLDER_TESTIMONIALS = false` in `src/data/site.ts` to hide the section instead.

## Contact form (PHP, emails you directly)
The form posts to `public/api/contact.php`, which sends the enquiry straight to your inbox with PHP `mail()`.
No database or third-party backend. Before building:
1. Open `public/api/contact.php` and set `TO_EMAIL` (your inbox) and `FROM_EMAIL` (an address on your own domain, e.g. `no-reply@yourdomain.com`).
2. Built-in protection: honeypot field, minimum-fill-time check, per-IP rate limit, validation and header-injection stripping.
3. If emails land in spam, create the `FROM_EMAIL` mailbox in your hosting panel and enable SPF/DKIM for the domain (your host has a one-click option). If your host blocks `mail()`, switch to PHPMailer with SMTP.
4. Testing locally: `npm run build`, then `npm run preview:php` (needs PHP installed) and open http://localhost:8000. `next dev` cannot run PHP, so the form only works on the built site; `mail()` also won't deliver from a laptop without a mail setup.

## WhatsApp
Set `NEXT_PUBLIC_WHATSAPP_NUMBER` (digits with country code). Without it the button links to `/contact`.

## Deploy to PHP hosting (cPanel, Hostinger, etc.)
This project is a static export, so it needs PHP hosting rather than Vercel (Vercel does not run PHP).
1. `cp .env.example .env.local` and fill in your contact details (they are baked in at build time).
2. Edit `TO_EMAIL` / `FROM_EMAIL` in `public/api/contact.php`.
3. `npm install && npm run build` creates the `out/` folder.
4. Upload everything inside `out/` (including the hidden `.htaccess`) to `public_html/`.
5. Visit `https://yourdomain.com/api/contact.php` once: a JSON "Method not allowed" reply means PHP is running. Then send a test enquiry.
Any change to content means rebuild and re-upload `out/`.

## Logo files (`public/brand/`)
`logo-wordmark.png` (header) and `logo-wordmark-light.png` (footer, white version) come from your wordmark upload.
`logo-mark*` and the favicon come from your first logo. The `-light` versions only swap dark navy to white.
Note: screenshots use plain `<img>`-style output (no image optimizer in a static export), so export them as WebP at about 1600px wide.

## Before launch
- Replace the three starter articles in `src/data/posts.ts` with your own, and have the Privacy/Terms text reviewed.
- Official tech-stack logos are not included; the stack is shown as text chips. Add licensed SVGs if you want logos.
- Run Lighthouse on the deployed site; the 90+/95+ targets are goals, not verified here.
