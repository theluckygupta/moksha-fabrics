import Link from "next/link";

export const metadata = {
  title: "Dress Material Fabrics",
  description: "Dress material fabric sourcing from Surat for ethnicwear, fashion and wholesale buyers.",
};

export default function DressMaterialFabricsPage() {
  return <main><section className="pageHero"><div className="container"><p className="eyebrow">Fabric category · Surat</p><h1>Dress Material Fabrics</h1><p className="lead">Fabric options for dress-material collections, ethnicwear and fashion businesses sourcing from Surat.</p><div className="actions"><Link className="button buttonDark" href="/contact">Discuss your requirement</Link><Link className="textLink" href="/fabrics">Browse catalogue →</Link></div></div></section><section className="section prose"><div className="container"><h2>For collection development</h2><p>Choose fabric according to the garment silhouette, drape, opacity, comfort, print or dye requirement and target price point. Final suitability depends on the actual construction and finish.</p><h2>For wholesale sourcing</h2><p>When requesting availability, include your expected quantity, required colours or designs and delivery requirements so the enquiry can be assessed efficiently.</p><div className="list"><div><span>End use</span><strong>Dress materials / ethnicwear</strong></div><div><span>Selection</span><strong>Drape / hand / finish</strong></div><div><span>Commercial</span><strong>Quantity / delivery</strong></div></div></div></section></main>;
}
