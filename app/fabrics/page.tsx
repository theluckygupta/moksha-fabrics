import Link from "next/link";
import FabricCatalogue from "@/components/fabric-catalogue";
import { fabrics } from "@/lib/fabrics";

export const metadata = {
  title: "Fabric Catalogue",
  description:
    "Explore Moksha Fabrics qualities from Surat, including rayon, cambric, georgette, crepe, dyed and ready-for-dyeing fabric options for B2B buyers.",
};

const catalogueFabrics = fabrics.filter((fabric) => fabric.status === "Indicative specification");

export default function FabricsPage() {
  return (
    <main>
      <section className="pageHero">
        <p className="eyebrow">Fabric catalogue · Surat</p>
        <h1>Find the fabric quality that fits your range.</h1>
        <p className="lead">
          Browse Moksha Fabrics qualities by name, category or application. Use the catalogue as a starting point, then confirm the exact lot specification, availability and quantity with our team.
        </p>
        <div className="hero-meta"><span>12 / LISTED QUALITIES</span><span>B2B / BULK SOURCING</span><span>SURAT / INDIA</span></div>
      </section>

      <section className="section catalogueSection">
        <div className="container">
          <div className="section-head">
            <div><div className="eyebrow">Browse qualities</div><h2>Our working fabric range.</h2></div>
            <p>Trade names and indicative specifications are shown for discovery. Exact composition, width, GSM, construction and finish should be confirmed against the available lot before an order is placed.</p>
          </div>
          <FabricCatalogue fabrics={catalogueFabrics} />
        </div>
      </section>

      <section className="band">
        <div className="container band-inner">
          <div><p className="eyebrow">Need something specific?</p><h2>Have a fabric reference, sample or target specification?</h2><p className="lead">Send the fabric name or reference along with your required quantity and intended application. We can discuss the appropriate sourcing route.</p><Link className="button buttonDark" href="/contact">Start an enquiry</Link></div>
          <div className="list"><div><span>Useful details</span><strong>Fabric name</strong></div><div><span>Specification</span><strong>Width / GSM / finish</strong></div><div><span>Commercial</span><strong>Required quantity</strong></div><div><span>Application</span><strong>Garment / dress material</strong></div></div>
        </div>
      </section>
    </main>
  );
}
