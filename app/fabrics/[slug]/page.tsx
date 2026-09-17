import Link from "next/link";
import { notFound } from "next/navigation";
import EnquiryForm from "@/components/enquiry-form";
import { fabrics, getFabric } from "@/lib/fabrics";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return fabrics.map((fabric) => ({ slug: fabric.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const fabric = getFabric(slug);
  if (!fabric) return {};
  return {
    title: `${fabric.name} from Surat`,
    description: `${fabric.description} Explore sourcing information and indicative specifications from Moksha Fabrics, Surat.`,
    alternates: { canonical: `/fabrics/${fabric.slug}` },
  };
}

export default async function FabricPage({ params }: Props) {
  const { slug } = await params;
  const fabric = getFabric(slug);
  if (!fabric) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: fabric.name,
        description: fabric.description,
        about: { "@type": "Thing", name: fabric.name },
        isPartOf: { "@type": "WebSite", name: "Moksha Fabrics" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://mokshafabrics.com/" },
          { "@type": "ListItem", position: 2, name: "Fabrics", item: "https://mokshafabrics.com/fabrics" },
          { "@type": "ListItem", position: 3, name: fabric.name, item: `https://mokshafabrics.com/fabrics/${fabric.slug}` },
        ],
      },
    ],
  };

  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <p className="eyebrow"><Link href="/fabrics">Fabrics</Link> · Surat · B2B sourcing</p>
          <h1>{fabric.name}</h1>
          <p className="lead">{fabric.description}</p>
          <div className="actions"><Link className="button buttonDark" href="#enquiry">Enquire about this fabric</Link><Link className="textLink" href="/fabrics">← All fabrics</Link></div>
        </div>
      </section>

      <section className="section">
        <div className="container detailGrid">
          <div>
            <div style={{ position: "relative", minHeight: "420px", overflow: "hidden", background: "linear-gradient(145deg,#d8f1f3,#8ddce5 55%,#245967)", border: "1px solid var(--line)" }}>
              {fabric.imageUrl ? <img src={fabric.imageUrl} alt={fabric.imageAlt || fabric.name} style={{ display: "block", position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} /> : null}
              <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(23,63,75,0.04), rgba(23,63,75,0.62))" }} />
              <span style={{ position: "absolute", left: "20px", bottom: "18px", color: "white", fontSize: "10px", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase" }}>Reference imagery</span>
            </div>
            <p className="mutedSmall" style={{ marginTop: "10px" }}>Demo/reference image — replace with actual Moksha Fabrics photography before publication as a product image.</p>
          </div>
          <div>
            <p className="eyebrow">Typical application</p>
            <h2>Built around the end use.</h2>
            <p className="lead">{fabric.application}</p>
            <div className="specPanel" style={{ marginTop: "35px" }}>
              <p className="eyebrow">Sourcing notes</p>
              {fabric.specifications.map((item) => <div className="specRow" key={item}><span>{item}</span><span>{fabric.status === "Indicative specification" ? "Indicative" : "Catalogue"}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="enquiry">
        <div className="container enquirySection">
          <div><p className="eyebrow">Fabric enquiry</p><h2>Request {fabric.name}.</h2><p className="lead">Tell us your quantity and requirements. We’ll take the conversation to WhatsApp so you can discuss availability, samples and exact specifications directly.</p></div>
          <EnquiryForm fabricName={fabric.name} />
        </div>
      </section>

      <section className="band"><div className="container band-inner"><div><p className="eyebrow">Specification-led sourcing</p><h2>Need a different construction, width, GSM, finish or quantity?</h2><p className="lead">Browse the catalogue or contact Moksha Fabrics for a more specific sourcing discussion.</p><Link className="button buttonDark" href="/contact">Start a general enquiry →</Link></div><div className="list"><div><span>Fabric</span><strong>{fabric.name}</strong></div><div><span>Category</span><strong>{fabric.category}</strong></div><div><span>Application</span><strong>{fabric.application}</strong></div></div></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
