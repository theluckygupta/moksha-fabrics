import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fabric Supplier in Surat",
  description:
    "Find textile fabric categories for wholesale, garment manufacturing, boutiques and fashion businesses sourcing from Surat.",
  alternates: { canonical: "/textile-fabric-supplier-in-surat" },
};

export default function SupplierPage() {
  return (
    <main className="section narrow-page">
      <p className="eyebrow">B2B · Fabric supply</p>
      <h1>Fabric supplier in Surat for commercial sourcing.</h1>
      <p className="lead">A practical catalogue for buyers looking for textile fabrics from Surat, with category-led discovery and enquiry-first sourcing.</p>
      <div className="prose-block">
        <h2>What to include in a fabric enquiry</h2>
        <p>Fabric name alone is often not enough. Share the end use, composition, construction, approximate GSM or weight when known, width, colour or print direction, quantity and delivery requirement.</p>
        <h2>Browse by fabric type</h2>
        <ul>
          <li><Link href="/fabrics/printed-fabrics">Printed fabrics</Link></li>
          <li><Link href="/fabrics/dress-material-fabrics">Dress material fabrics</Link></li>
          <li><Link href="/fabrics/synthetic-blended-fabrics">Synthetic &amp; blended fabrics</Link></li>
          <li><Link href="/fabrics/dyed-fabrics">Dyed fabrics</Link></li>
        </ul>
        <h2>Wholesale and repeat sourcing</h2>
        <p>For recurring commercial requirements, a clear specification makes it easier to discuss availability, sampling, production requirements, quantity and lead time. Commercial terms should be confirmed for each order.</p>
      </div>
      <div className="button-row"><Link className="button button-dark" href="/contact">Make an enquiry</Link><Link className="button button-light" href="/faq">Read sourcing FAQs</Link></div>
    </main>
  );
}
