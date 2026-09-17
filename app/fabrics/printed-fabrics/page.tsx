import Link from "next/link";

export const metadata = {
  title: "Printed Fabrics",
  description: "Printed textile fabric sourcing from Surat for fashion, garment and wholesale applications.",
};

export default function PrintedFabricsPage() {
  return <main><section className="pageHero"><div className="container"><p className="eyebrow">Fabric category · Surat</p><h1>Printed Fabrics</h1><p className="lead">A dedicated sourcing category for printed textile fabrics used across fashion, dress material and garment applications.</p><div className="actions"><Link className="button buttonDark" href="/contact">Discuss a print requirement</Link><Link className="textLink" href="/fabrics">Browse catalogue →</Link></div></div></section><section className="section prose"><div className="container"><h2>What to specify when sourcing</h2><p>For a useful quotation or sample discussion, share the base fabric or composition if known, print style, width, required quantity, colour direction and intended garment.</p><h2>Applications</h2><p>Printed fabrics can be developed for dresses, ethnicwear, tops, skirts, coordinated sets and other fashion products, depending on construction and finish.</p><div className="list"><div><span>Base</span><strong>Composition / construction</strong></div><div><span>Print</span><strong>Design / colour direction</strong></div><div><span>Commercial</span><strong>Quantity / delivery</strong></div></div></div></section></main>;
}
