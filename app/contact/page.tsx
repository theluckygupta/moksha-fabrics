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
        <div className="contact-grid">
          <a className="contact-card" href="tel:+919783123977"><small>Phone / WhatsApp</small><strong>+91 97831 23977</strong></a>
          <a className="contact-card" href="tel:+919427135652"><small>Phone / WhatsApp</small><strong>+91 94271 35652</strong></a>
          <a className="contact-card" href="mailto:mokshafabrics.mf@gmail.com"><small>Email</small><strong>mokshafabrics.mf@gmail.com</strong></a>
          <div className="contact-card"><small>Business address</small><strong>I/2657-58, Radha Krishna Textile Market, Ring Road, Surat - 395002, Gujarat, India</strong></div>
        </div>
      </section>
    </main>
  );
}
