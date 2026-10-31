# PROfix Appliance Care

Professional appliance repair website for PROfix — a Kenyan startup offering HVAC, refrigeration, and home appliance services.

## Tech Stack

- **Next.js 15** (App Router, TypeScript, Turbopack)
- **Tailwind CSS 4**
- **Zod** (booking validation)
- **Lucide React** (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Set `NEXT_PUBLIC_SITE_URL` in production so canonical URLs, Open Graph tags and the sitemap point at the live domain.

## Project Structure

```
src/
├── app/                  # Routes: home, services, appliances, brands, areas,
│   │                     # pricing, commercial, about, faq, blog, contact, book
│   ├── api/book/         # Booking endpoint (validation + rate limit)
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── booking/          # Multi-step BookingWizard (/book)
│   ├── home/             # Homepage sections
│   ├── layout/           # TopBar, Header, Footer, WhatsApp chat button
│   └── marketing/        # Shared PageHero
├── content/              # Services, appliances, brands, areas, blog posts (with slugs)
├── lib/
│   ├── constants.ts      # Site info, nav, FAQ, packages, testimonials, stats
│   ├── book-url.ts       # Builds prefilled /book links
│   ├── seo.ts            # Per-page metadata helper
│   ├── validators.ts     # Zod schemas (Kenyan phone, booking payload)
│   └── whatsapp.ts       # WhatsApp message/link helpers
└── styles/tokens.css     # Brand color tokens
```

Anything with its own page lives in `src/content/`; everything else lives in `src/lib/constants.ts`.

## Booking Flow

CTAs link to `/book` with query params (see `buildBookUrl`) to prefill the wizard. The wizard saves a draft in `localStorage`, posts to `/api/book`, and offers a prefilled WhatsApp hand-off.

> `/api/book` currently only validates and returns a reference — it does not store or forward bookings yet.

## Brand Colors

Defined in `src/styles/tokens.css` and mirrored in the Tailwind `@theme` in `src/app/globals.css`.

- **Brand blue:** `#0056D2` — CTAs, icons, links
- **Deep navy:** `#0B172A` — headings, footer, dark sections
- **WhatsApp green:** `#25D366`

Note: the Tailwind `orange-*` scale is remapped to the brand blue, so `bg-orange-500` renders blue.

## Next Steps

- [ ] Deliver bookings: email notification (Resend) and storage (Supabase/Neon)
- [ ] Replace placeholder testimonials and stats with real reviews and numbers
- [ ] Confirm diagnosis pricing and call-out fees outside central Nairobi
- [ ] Add social profile URLs in `SITE.social` (icons stay hidden until set)
- [ ] Add real technician/team photos and the client logo
- [ ] Admin dashboard for job management; customer & technician login

## Client Assets

Original reference files are in `client-assets/` and `public/images/`.
