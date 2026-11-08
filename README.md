# Ebenezer Ojeba — Portfolio

Personal portfolio of Ebenezer Ojeba, Full-Stack Software Developer (OJ Tech Solution, Lagos, Nigeria).
Live at https://ebenezerojeba.vercel.app

Plain HTML, CSS and vanilla JavaScript. No framework, no build step. Vercel serves the `public/` folder as-is.

## Structure

```
public/
  index.html                 Homepage
  about/index.html           About, experience, education
  services/index.html        Services overview
  services/<service>/        One page per service (8)
  projects/index.html        All projects
  projects/<project>/        One case study per project (7)
  contact/index.html         Contact + project enquiry form
  404.html                   Not-found page (served automatically by Vercel)
  style.css                  All styles (design tokens at the top)
  script.js                  Menu, scroll reveal, enquiry forms
  sitemap.xml, robots.txt, llms.txt, site.webmanifest
  assets/img/                Optimised WebP/JPG images, icons, Open Graph images
  assets/fonts/              Self-hosted Ysabeau font
  images/, *.pdf             Original assets, kept so old links keep working
vercel.json                  Security/cache headers and trailing-slash URLs only
```

## Contact form

The enquiry forms work in two modes, set at the top of `public/script.js`:

- `FORM_ENDPOINT = ""` (default): submitting opens WhatsApp with the enquiry filled in. The visitor presses Send.
- `FORM_ENDPOINT = "https://formspree.io/f/<your-id>"`: enquiries are emailed to you. Success is shown only when the service confirms delivery; failures show an error with a WhatsApp fallback.

To enable email: create a free form at https://formspree.io, copy its endpoint into `FORM_ENDPOINT`, deploy, then send a test enquiry.

## Editing

- Each page is a standalone HTML file. The header and footer are repeated in every file; update all of them when you change navigation.
- When you add, remove or rename a page, update `public/sitemap.xml` and `public/llms.txt`.
- After changing `style.css` or `script.js`, bump the `?v=` value on their `<link>`/`<script>` tags so browsers fetch the new version.
- Keep the `<title>`, meta description, canonical URL, Open Graph tags and JSON-LD of a page accurate when you edit it.

## Search Console

To verify with the HTML tag method, add this inside `<head>` of `public/index.html`:

```html
<meta name="google-site-verification" content="YOUR_CODE">
```

Then submit `https://ebenezerojeba.vercel.app/sitemap.xml` in Google Search Console.

## Local preview

Any static server works, for example:

```
npx serve public
```
