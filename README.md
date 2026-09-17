# Moksha Fabrics

SEO-ready B2B website architecture for Moksha Fabrics, a textile business based in Surat, Gujarat.

## Stack

- Next.js
- React
- TypeScript
- App Router

## Current website features

- Responsive editorial-style homepage and navigation
- Mobile menu and persistent WhatsApp enquiry action
- Searchable and filterable fabric catalogue
- Individual fabric detail pages with breadcrumb structured data
- WhatsApp enquiry flow with pre-filled fabric requirements
- Category landing pages for printed, dress material, synthetic/blended and dyed fabrics
- Buyer-resource hub and original sourcing guides covering wholesale sourcing, GSM and fabric width
- FAQ, About, Contact and Surat-focused commercial landing pages
- Site-wide title, description, canonical, Open Graph and Twitter metadata
- Sitemap, robots metadata, Organization/WebSite structured data and web app manifest
- GitHub Actions type-check and production-build validation

## Catalogue data

Fabric catalogue data lives in `lib/fabrics.ts`. The listed qualities use clearly labelled indicative/demo information until exact Moksha Fabrics lot specifications and photography are verified.

## Final production inputs

1. Confirm the production domain so canonical URLs, sitemap and structured-data URLs can be finalized.
2. Replace demo/reference fabric imagery with approved Moksha Fabrics photography when available.
3. Confirm exact composition, width, GSM, construction and finish for each quality before presenting them as lot-specific specifications.
4. Confirm the preferred enquiry/CRM destination if enquiries should be captured somewhere other than WhatsApp.
5. After the domain is live, verify it in Google Search Console and submit the generated sitemap.
6. Build legitimate industry/local citations and links over time; no ranking position is guaranteed by on-page SEO alone.

## Validation

GitHub Actions runs `npm install`, `npx tsc --noEmit` and `npm run build` on pushes and pull requests to `main`, using Node.js 22.
