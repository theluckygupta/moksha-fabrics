import Link from "next/link";

export const metadata = {
  title: "Synthetic & Blended Fabrics",
  description: "Synthetic and blended textile fabrics for fashion and garment applications from Surat.",
};

export default function SyntheticBlendedFabricsPage() {
  return <main><section className="pageHero"><div className="container"><p className="eyebrow">Fabric category · Surat</p><h1>Synthetic &amp; Blended Fabrics</h1><p className="lead">A sourcing category for synthetic and blended constructions selected for practical fashion applications.</p><div className="actions"><Link className="button buttonDark" href="/contact">Discuss a construction</Link><Link className="textLink" href="/fabrics">Browse catalogue →</Link></div></div></section><section className="section prose"><div className="container"><h2>Choosing a construction</h2><p>Composition, yarn, weave or knit, weight, width, hand feel, drape and finishing can all affect how a synthetic or blended fabric performs. Specific specifications should be confirmed against the available fabric.</p><h2>Applications</h2><p>Depending on construction and finish, these fabrics may suit dresses, tops, ethnicwear, uniforms, fashion separates and other garment categories.</p><div className="list"><div><span>Material</span><strong>Composition / blend</strong></div><div><span>Performance</span><strong>Weight / drape / finish</strong></div><div><span>Commercial</span><strong>Quantity / delivery</strong></div></div></div></section></main>;
}
