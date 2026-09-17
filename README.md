# Moksha Fabrics

Website and SEO foundation for Moksha Fabrics, a textile business based in Surat, Gujarat.

## Stack

- Next.js
- React
- TypeScript
- App Router

## Current website features

- Responsive editorial-style homepage and navigation
- Mobile menu
- Searchable and filterable fabric catalogue
- Individual fabric detail pages
- WhatsApp enquiry flow with pre-filled fabric requirements
- Category landing pages for printed, dress material, synthetic/blended and dyed fabrics
- FAQ, About, Contact and local SEO landing pages
- Sitemap, robots metadata, Organization structured data and web app manifest
- GitHub Actions type-check and production-build validation

## Catalogue data

Fabric catalogue data lives in `lib/fabrics.ts`. The listed qualities use clearly labelled indicative/demo information until exact Moksha Fabrics lot specifications and photography are verified.

## Final production inputs

1. Confirm the production domain so canonical URLs, sitemap and structured-data URLs can be finalized.
2. Replace demo/reference fabric imagery with approved Moksha Fabrics photography when available.
3. Confirm exact composition, width, GSM, construction and finish for each quality before presenting them as lot-specific specifications.
4. Confirm the preferred enquiry/CRM destination if enquiries should be captured somewhere other than WhatsApp.

## Validation

GitHub Actions runs `npm install`, `npx tsc --noEmit` and `npm run build` on pushes and pull requests to `main`.
