import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mokshafabrics.com"),
  title: {
    default: "Moksha Fabrics | Textile Fabric Manufacturer & Supplier in Surat",
    template: "%s | Moksha Fabrics",
  },
  description:
    "Moksha Fabrics is a Surat, Gujarat textile fabric manufacturer and supplier serving wholesalers, garment manufacturers, boutiques and fashion businesses across India.",
  keywords: [
    "textile fabric manufacturer in Surat",
    "fabric supplier in Surat",
    "textile wholesale Surat",
    "dress material fabric supplier",
    "printed fabric supplier",
    "Surat textile market",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Moksha Fabrics | Surat Textile Fabric Manufacturer & Supplier",
    description: "Source textile fabrics from Surat with Moksha Fabrics.",
    type: "website",
    locale: "en_IN",
    siteName: "Moksha Fabrics",
  },
  robots: { index: true, follow: true },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Moksha Fabrics",
  url: "https://mokshafabrics.com",
  email: "mokshafabrics.mf@gmail.com",
  telephone: "+91 97831 23977",
  description: "Textile fabric manufacturer and supplier based in Surat, Gujarat, India.",
  areaServed: "India",
  address: {
    "@type": "PostalAddress",
    streetAddress: "I/2657-58, Radha Krishna Textile Market, Ring Road",
    addressLocality: "Surat",
    postalCode: "395002",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <footer className="siteFooter">
          <div className="container footerInner">
            <div>
              <strong>Moksha Fabrics</strong>
              <span>Textile fabrics · Surat, Gujarat, India</span>
              <nav className="footerNav" aria-label="Footer navigation">
                <a href="/fabrics">Fabrics</a>
                <a href="/about">About</a>
                <a href="/faq">FAQ</a>
                <a href="/contact">Contact</a>
              </nav>
            </div>
            <div className="footerContact">
              <a href="tel:+919783123977">+91 97831 23977</a>
              <a href="mailto:mokshafabrics.mf@gmail.com">mokshafabrics.mf@gmail.com</a>
            </div>
          </div>
          <div className="container footerBottom">
            <span>© {new Date().getFullYear()} Moksha Fabrics</span>
            <span>I/2657-58, Radha Krishna Textile Market, Ring Road, Surat - 395002</span>
          </div>
        </footer>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      </body>
    </html>
  );
}
