import Link from "next/link";
import { fabricCategories } from "@/data/fabrics";

export const metadata = {
  title: "Fabric Catalogue",
  description: "Explore textile fabric categories from Moksha Fabrics in Surat, Gujarat, for wholesalers, garment manufacturers, boutiques and fashion businesses.",
};

export default function FabricsPage() {
  return (
    <main>
      <section className="pageHero">
        <p className="eyebrow">Fabric catalogue · Surat</p>
        <h1>Textile fabrics for fashion businesses.</h1>
        <p className="lead">Browse core fabric categories for sourcing, sampling, garment production and wholesale requirements.</p>
      </section>
      <section className="section">
        <div className="cardGrid">
          {fabricCategories.map((category, index) => (
            <Link className="card" href={`/fabrics/${category.slug}`} key={category.slug}>
              <span className="cardIndex">{String(index + 1).padStart(2, "0")}</span>
              <h2>{category.name}</h2>
              <p>{category.shortDescription}</p>
              <p className="mutedSmall">{category.buyerUse}</p>
              <span className="textLink">Explore category →</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="band">
        <p className="eyebrow">Need something specific?</p>
        <h2>Tell us the fabric, construction, finish or application you are sourcing.</h2>
        <Link className="button buttonDark" href="/contact">Start an enquiry</Link>
      </section>
    </main>
  );
}
