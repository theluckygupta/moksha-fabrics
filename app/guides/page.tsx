import Link from "next/link";

const guides = [
  { slug: "how-to-source-fabric-wholesale-from-surat", title: "How to Source Fabric Wholesale from Surat", description: "A practical buyer guide covering quality checks, specifications, sampling, quantities and supplier communication." },
  { slug: "fabric-gsm-guide", title: "Fabric GSM Guide for Buyers", description: "Understand GSM, how it affects fabric weight and handle, and which questions to ask before placing a bulk order." },
  { slug: "fabric-width-guide", title: "Fabric Width Guide", description: "Learn why finished width matters for garment planning, cutting efficiency and commercial fabric sourcing." },
];

export const metadata = {
  title: "Textile Fabric Guides for Buyers",
  description: "Practical guides for sourcing textile fabrics from Surat, including wholesale buying, GSM and fabric width.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <p className="eyebrow">Moksha Fabrics · Buyer resources</p>
          <h1>Textile fabric guides for better buying decisions.</h1>
          <p className="lead">Practical, specification-led resources for wholesalers, garment manufacturers, boutiques and fashion businesses sourcing fabric from Surat.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="cardGrid">
            {guides.map((guide, index) => (
              <article className="card" key={guide.slug}>
                <span className="card-no">0{index + 1}</span>
                <div><h2>{guide.title}</h2><p>{guide.description}</p></div>
                <Link className="card-link" href={`/guides/${guide.slug}`}>Read guide <span>↗</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="band"><div className="container band-inner"><div><p className="eyebrow">Source fabrics</p><h2>Looking for a specific textile quality?</h2><p className="lead">Browse the Moksha Fabrics catalogue or send your requirements for a direct sourcing conversation.</p><Link className="button buttonDark" href="/fabrics">Browse fabrics →</Link></div><div className="list"><div><span>Location</span><strong>Surat, Gujarat</strong></div><div><span>Market</span><strong>B2B textile sourcing</strong></div><div><span>Enquiry</span><strong>WhatsApp</strong></div></div></div></section>
    </main>
  );
}
