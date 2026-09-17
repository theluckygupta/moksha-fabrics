import Link from "next/link";

export const metadata = {
  title: "Dyed Fabrics",
  description: "Dyed textile fabric sourcing from Surat for fashion, garment and wholesale requirements.",
};

export default function DyedFabricsPage() {
  return <main><section className="pageHero"><div className="container"><p className="eyebrow">Fabric category · Surat</p><h1>Dyed Fabrics</h1><p className="lead">A focused category for buyers sourcing dyed textile fabrics with defined colour and performance requirements.</p><div className="actions"><Link className="button buttonDark" href="/contact">Discuss a dyed fabric</Link><Link className="textLink" href="/fabrics">Browse catalogue →</Link></div></div></section><section className="section prose"><div className="container"><h2>What buyers should confirm</h2><p>Colour reference, fabric composition, construction, width, weight, finish and quantity are useful starting points. Colour matching and production tolerances should be confirmed against an approved sample where required.</p><h2>Wholesale enquiries</h2><p>For bulk sourcing, provide your approximate quantity and delivery timeline along with the fabric requirements so the enquiry can be assessed accurately.</p><div className="list"><div><span>Colour</span><strong>Reference / approved sample</strong></div><div><span>Fabric</span><strong>Composition / width / weight</strong></div><div><span>Commercial</span><strong>Quantity / delivery timeline</strong></div></div></div></section></main>;
}
