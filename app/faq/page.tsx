import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fabric Supplier FAQ",
  description:
    "Answers to common questions about sourcing textile fabrics from Surat, enquiries, fabric development and wholesale supply.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  ["What does Moksha Fabrics supply?", "Moksha Fabrics is structured around textile fabric sourcing for fashion businesses, garment manufacturers, boutiques, wholesalers and other commercial buyers. The catalogue is being organized by fabric type so buyers can identify the right category before making an enquiry."],
  ["Why source textile fabric from Surat?", "Surat is a major textile manufacturing and trading centre with an extensive ecosystem covering weaving, processing, printing, dyeing, finishing and wholesale distribution. This makes the city an important sourcing base for a wide range of fabrics."],
  ["Can I enquire about a fabric that is not listed?", "Yes. A catalogue page is a starting point, not a limitation. Buyers can contact Moksha Fabrics with the fabric type, intended use, approximate quantity and any required construction, finish or colour details."],
  ["Does Moksha Fabrics work with wholesale buyers?", "The site is designed for B2B textile sourcing, including wholesale and commercial buyers. Availability, minimum quantities, pricing and development requirements should be confirmed for the specific fabric enquiry."],
  ["Can fabrics be developed to a specific requirement?", "Custom development can involve construction, composition, weight, finish, print or colour requirements. Feasibility depends on the requested specification and production requirements, so each development enquiry should be evaluated individually."],
];

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <main className="section narrow-page">
      <p className="eyebrow">Buying guide · Surat textiles</p>
      <h1>Frequently asked questions about fabric sourcing.</h1>
      <p className="lead">A practical starting point for buyers researching textile fabrics, wholesale sourcing and custom development from Surat.</p>
      <div className="faq-list">
        {faqs.map(([question, answer]) => (
          <details key={question} className="faq-item">
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
