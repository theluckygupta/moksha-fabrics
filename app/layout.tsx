import type { Metadata } from "next";
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
    description:
      "Source quality textile fabrics from Surat with Moksha Fabrics.",
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
  description: "Textile fabric manufacturer and supplier based in Surat, Gujarat, India.",
  areaServed: "India",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
        {children}
      </body>
    </html>
  );
}
