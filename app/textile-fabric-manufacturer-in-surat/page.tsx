import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Textile Fabric Manufacturer in Surat",
  description:
    "Explore textile fabric sourcing from Surat across printed, dress material, synthetic, blended and dyed fabric categories.",
  alternates: { canonical: "/textile-fabric-manufacturer-in-surat" },
};

export default function SuratManufacturerPage() {
  return (
    <main className="section narrow-page">
      <p className="eyebrow">Surat · Textile sourcing</p>
      <h1>Textile fabric sourcing in Surat.</h1>
      <p className="lead">Moksha Fabrics connects commercial buyers with textile fabric categories associated with Surat&apos;s manufacturing and processing ecosystem.</p>
      <div className="prose-block">
        <h2>A sourcing base built around textiles</h2>
        <p>Surat has a broad textile ecosystem spanning weaving, processing, dyeing, printing, finishing and trading. For buyers, that ecosystem can make the city useful for sourcing fabrics across multiple constructions and end uses.</p>
        <h2>Fabric categories</h2>
        <p>Browse the catalogue by category rather than relying on a single generic supplier page.</p>
        <ul>
          <li><Link href="/fabrics/printed-fabrics">Printed fabrics</Link> for fashion and garment applications.</li>
          <li><Link href="/fabrics/dress-material-fabrics">Dress material fabrics</Link> for apparel and retail requirements.</li>
          <li><Link href="/fabrics/synthetic-blended-fabrics">Synthetic and blended fabrics</Link> for varied commercial applications.</li>
          <li><Link href="/fabrics/dyed-fabrics">Dyed fabrics</Link> where colour and finishing are central to the requirement.</li>
        </ul>
        <h2>For commercial buyers</h2>
        <p>When making an enquiry, include the intended application, approximate quantity, preferred composition or construction, colour or print requirements and target delivery timeline. These details help turn a broad fabric search into a practical sourcing discussion.</p>
      </div>
      <div className="button-row"><Link className="button button-dark" href="/contact">Start a fabric enquiry</Link><Link className="button button-light" href="/fabrics">Browse fabrics</Link></div>
    </main>
  );
}
