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
    description: `${fabric.description} Explore sourcing information and specifications from Moksha Fabrics, Surat.`,
    alternates: { canonical: `https://mokshafabrics.com/fabrics/${fabric.slug}` },
  };
}

export default async function FabricPage({ params }: Props) {
  const { slug } = await params;
  const fabric = getFabric(slug);
  if (!fabric) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: fabric.name,
    description: fabric.description,
    url: `https://mokshafabrics.com/fabrics/${fabric.slug}`,
    about: { "@type": "Thing", name: fabric.name },
    isPartOf: { "@type": "WebSite", name: "Moksha Fabrics", url: "https://mokshafabrics.com" },
  };

  return (
    <main>
      <section className="pageHero">
        <p className="eyebrow">Moksha Fabrics · Surat</p>
        <h1>{fabric.name}</h1>
        <p className="lead">{fabric.description}</p>
        <div className="actions"><Link className="button buttonDark" href="#enquiry">Enquire about this fabric</Link><Link className="textLink" href="/fabrics">← All fabrics</Link></div>
      </section>

      <section className="section">
        <div className="detailGrid">
          <div><p className="eyebrow">Typical application</p><h2>Built around the end use.</h2><p className="lead">{fabric.application}</p></div>
          <div className="specPanel"><p className="eyebrow">Sourcing notes</p>{fabric.specifications.map((item) => <div className="specRow" key={item}><span>{item}</span><span>{fabric.status === "Indicative specification" ? "Indicative" : "Catalogue"}</span></div>)}</div>
        </div>
      </section>

      <section className="section" id="enquiry">
        <div className="container enquirySection">
          <div><p className="eyebrow">Fabric enquiry</p><h2>Request {fabric.name}.</h2><p className="lead">Tell us your quantity and requirements. We’ll take the conversation to WhatsApp so you can discuss availability, samples and exact specifications directly.</p></div>
          <EnquiryForm fabricName={fabric.name} />
        </div>
      </section>

      <section className="band">
        <p className="eyebrow">Specification-led sourcing</p>
        <h2>Need a different construction, width, GSM, finish or quantity?</h2>
        <p className="lead">Browse the catalogue or contact Moksha Fabrics for a more specific sourcing discussion.</p>
        <Link className="button buttonDark" href="/contact">Start a general enquiry →</Link>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
