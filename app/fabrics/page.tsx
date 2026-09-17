import Link from "next/link";

const categories = [
  ["Printed Fabrics", "Printed textile fabrics for fashion, garment and wholesale applications.", "/fabrics/printed-fabrics"],
  ["Dress Material Fabrics", "Fabric options suited to dress materials, ethnicwear and fashion collections.", "/fabrics/dress-material-fabrics"],
  ["Synthetic & Blended", "Synthetic and blended constructions selected for practical fashion applications.", "/fabrics/synthetic-blended-fabrics"],
  ["Dyed Fabrics", "Dyed textile fabrics for buyers looking for consistent colour and flexible sourcing.", "/fabrics/dyed-fabrics"],
];

export const metadata = {
  title: "Fabrics",
  description: "Explore Moksha Fabrics' textile fabric categories from Surat, Gujarat, for wholesalers, garment manufacturers, boutiques and fashion businesses.",
};

export default function FabricsPage() {
  return (
    <main>
      <section className="pageHero">
        <p className="eyebrow">Fabric catalogue · Surat</p>
        <h1>Textile fabrics for fashion businesses.</h1>
        <p className="lead">Browse our core fabric categories and use them as a starting point for sourcing, sampling and product development.</p>
      </section>
      <section className="section">
        <div className="cardGrid">
          {categories.map(([title, description, href]) => (
            <Link className="card" href={href} key={href}>
              <span className="cardIndex">0{categories.findIndex((item) => item[2] === href) + 1}</span>
              <h2>{title}</h2>
              <p>{description}</p>
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
