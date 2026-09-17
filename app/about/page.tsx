export const metadata = {
  title: "About Moksha Fabrics",
  description: "Learn about Moksha Fabrics and its Surat textile sourcing focus.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="pageHero">
        <p className="eyebrow">About · Surat, Gujarat</p>
        <h1>A textile business built around better sourcing.</h1>
        <p className="lead">Moksha Fabrics is developing a focused textile platform for fashion businesses, garment manufacturers, wholesalers and boutiques looking to source fabrics from Surat.</p>
      </section>
      <section className="section prose">
        <h2>What we focus on</h2>
        <p>Our catalogue is being structured around useful fabric information rather than a collection of generic product listings. Buyers should be able to understand a fabric category, its likely applications and what information to share when requesting a quotation or sample.</p>
        <h2>Why Surat matters</h2>
        <p>Surat is one of India's major textile manufacturing and trading centres. Moksha Fabrics is positioned within that ecosystem, with a focus on making textile sourcing clearer and easier for buyers.</p>
        <h2>For buyers</h2>
        <p>Whether you are developing a new collection, replenishing wholesale stock or comparing fabric options, the next step is a specific enquiry based on your required construction, finish, quantity and application.</p>
      </section>
    </main>
  );
}
