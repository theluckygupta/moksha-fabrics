export const metadata = {
  title: "Contact",
  description: "Contact Moksha Fabrics in Surat for textile fabric sourcing and wholesale enquiries.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="pageHero">
        <p className="eyebrow">Contact · Fabric enquiries</p>
        <h1>Start with what you are looking for.</h1>
        <p className="lead">Share the fabric type, intended application, approximate quantity and any specifications you already have. We can use that information to understand your requirement.</p>
      </section>
      <section className="section prose">
        <h2>What to include</h2>
        <ul>
          <li>Fabric or product category</li>
          <li>Intended use or garment type</li>
          <li>Approximate quantity</li>
          <li>Preferred width, GSM, composition or finish, if known</li>
          <li>Sample or colour requirements</li>
        </ul>
        <div className="notice"><strong>Contact details coming soon.</strong><br />The website will publish Moksha Fabrics&apos; verified phone, email and business address once they are provided.</div>
      </section>
    </main>
  );
}
