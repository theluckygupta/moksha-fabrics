import EnquiryForm from "@/components/enquiry-form";

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
      <section className="section">
        <div className="container contactLayout">
          <div className="contactIntro">
            <p className="eyebrow">Direct enquiry</p>
            <h2>Tell us what you need.</h2>
            <p className="lead">Use the form and continue directly to WhatsApp. Your message will be pre-filled with the information you entered.</p>
            <div className="contact-grid">
              <a className="contact-card" href="https://wa.me/919783123977" target="_blank" rel="noreferrer"><small>WhatsApp</small><strong>+91 97831 23977</strong></a>
              <a className="contact-card" href="tel:+919427135652"><small>Phone / WhatsApp</small><strong>+91 94271 35652</strong></a>
              <a className="contact-card" href="mailto:mokshafabrics.mf@gmail.com"><small>Email</small><strong>mokshafabrics.mf@gmail.com</strong></a>
              <div className="contact-card"><small>Business address</small><strong>I/2657-58, Radha Krishna Textile Market, Ring Road, Surat - 395002, Gujarat, India</strong></div>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </main>
  );
}
