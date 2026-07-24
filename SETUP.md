# Refined Auto Detailing — Website Setup Guide

## Quick Start

### 1. Install Node.js (if not installed)

Go to https://nodejs.org and download the LTS version. Install it.

After installing, open Terminal and verify:
```bash
node --version   # should show v18 or higher
npm --version
```

### 2. Install dependencies

Open Terminal, navigate to this folder, and run:
```bash
cd /Users/nazarprysyazhnyuk/refined-auto-detailing
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser to see the website.

### 4. Build for production

```bash
npm run build
npm start
```npm run dev



---

## Customization Checklist

### Update your real info in `src/lib/utils.ts`:
- Phone number
- Email address
- Instagram/Facebook URLs

### Add your Google verification code in `src/app/layout.tsx`

### Replace placeholder photos:
- All your actual detailing photos are in `public/images/`
- Add more photos and reference them in the gallery page

### Update pricing in `src/components/interactive/QuoteBuilder.tsx`

### Add your real Google Reviews / testimonials in `src/components/home/Testimonials.tsx`

---

## Deploying to Production

### Recommended: Vercel (free, optimized for Next.js)

1. Create account at vercel.com
2. Connect your GitHub repo (push this project to GitHub first)
3. Import the project on Vercel
4. Add your domain: `detailingrefinedautodetailing.com`

### Or: Netlify
Similar process — connect repo, set build command `npm run build`, publish dir `.next`

---

## Site Structure

```
Pages:
/ .......................... Homepage (Hero + all sections)
/about ..................... About page
/services .................. Services overview
/services/interior-detailing
/services/exterior-detailing
/services/full-detail
/services/paint-correction
/services/ceramic-coating
/gallery ................... Photo gallery
/quote ..................... Quote builder (lead capture)
/contact ................... Contact page
/service-areas ............. Service areas overview
/service-areas/marysville
/service-areas/everett
/service-areas/lynnwood
/service-areas/mukilteo
/service-areas/mill-creek
/blog ...................... Blog listing
```

---

## SEO Notes

- All pages have unique title tags and meta descriptions
- Schema.org LocalBusiness markup on layout (all pages)
- Schema.org Service markup on service pages
- Schema.org FAQPage markup on FAQ section
- Sitemap at /sitemap.xml
- Robots.txt at /robots.txt
- All city pages target local search keywords


