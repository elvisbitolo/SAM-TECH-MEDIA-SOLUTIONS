# Samtech Cyber Café

A modern, responsive marketing website for Samtech Cyber Café, built with Next.js 16 and React 19. The site showcases the café's gaming stations, services and gallery, and lets visitors send a pre-filled booking request directly on WhatsApp.

## Features

- Responsive layout for mobile, tablet and desktop
- Animated hero, scroll reveal effects, marquee ticker and image lightbox
- Mobile navigation with accessible toggle
- Service and "how it works" sections
- Vercel Web Analytics integration for production traffic insights
- Booking form that opens WhatsApp with the visitor's details pre-filled
- Contact links for call, WhatsApp, email and location
- SEO metadata, generated favicon, Open Graph image, `sitemap.xml` and `robots.txt`
- Reduced-motion and no-JavaScript fallbacks for reveal animations

## Tech stack

- Next.js 16 (App Router, Cache Components)
- React 19
- Plain CSS with global custom properties
- `next/image` for optimized local images
- ESLint 9 with `eslint-config-next`

## Getting started

Prerequisites: Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```text
src/app/
  components/
    booking-form.js    WhatsApp booking form (client component)
    gallery.js         Photo grid and lightbox (client component)
    reveal.js          Scroll reveal wrapper (client component)
    site-header.js     Sticky header and mobile menu (client component)
  globals.css          Design tokens, layout and responsive styles
  layout.js            Root layout and metadata
  page.js              Homepage sections and content
  site-config.js       Business contact details and WhatsApp helper
  site-url.js          Production domain used by metadata, robots and sitemap
  robots.js            Generated robots.txt pointing to the sitemap
  sitemap.js           Generated sitemap.xml with the production domain
  icon.png             Favicon generated from public/logo.png
  opengraph-image.png  Social preview generated from public/computers.png
public/
  logo.png             Brand logo
  computers.png        Gaming floor photo
  storefront.png       Storefront photo
  3.png                Additional café photo
```

## Customization

### Business details

Edit `src/app/site-config.js` to change the phone number, email, location, opening hours and LinkedIn URL. The WhatsApp link is generated from `business.phone`, so updating it there updates every CTA on the site.

### Content and hours

Section copy, service cards and steps live in `src/app/page.js`. Opening hours are sample values — replace them with confirmed business information before publishing.

### Images

Replace the four files in `public/` with your own photos, keeping the filenames or updating their references in `src/app/page.js`, `src/app/components/gallery.js` and `src/app/components/site-header.js`. If you change the logo or hero photo, refresh `src/app/icon.png` and `src/app/opengraph-image.png` as well.

### Site URL

Social metadata, `robots.txt` and `sitemap.xml` default to `https://samtech-cyber-cafe.vercel.app`. Set `NEXT_PUBLIC_SITE_URL` in your environment if you deploy to a different domain:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com npm run build
```

## Deployment

The project is ready for Vercel. Connect the repository, add `NEXT_PUBLIC_SITE_URL` as an environment variable if needed, enable Web Analytics in the Vercel dashboard, and deploy with the default Next.js settings. Verify lint and build locally first:

```bash
npm run lint && npm run build
```
