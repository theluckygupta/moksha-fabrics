const fabrics = [
  { no: "01", name: "Printed Fabrics", href: "/fabrics/printed-fabrics", text: "Fashion-focused printed textiles for dress materials, garments, boutiques and contemporary collections." },
  { no: "02", name: "Dress Material Fabrics", href: "/fabrics/dress-material-fabrics", text: "Fabric options for flowing silhouettes, coordinated sets and everyday-to-occasion wear." },
  { no: "03", name: "Synthetic & Blended", href: "/fabrics/synthetic-blended-fabrics", text: "Practical constructions for buyers looking for versatility, consistency and commercial value." },
  { no: "04", name: "Dyed Fabrics", href: "/fabrics/dyed-fabrics", text: "Solid and custom-dyed fabric options for manufacturers and fashion businesses." },
];

const organization = {
  "@context": "https://schema.org", "@type": "LocalBusiness", name: "Moksha Fabrics",
  url: "https://mokshafabrics.com", address: { "@type": "PostalAddress", addressLocality: "Surat", addressRegion: "Gujarat", addressCountry: "IN" },
  areaServed: "India", knowsAbout: ["Textile fabrics", "Fabric manufacturing", "Textile wholesale", "Surat textile industry"]
};

export default function Home() {
  return <>
    <header className="container nav">
      <a className="logo" href="#top" aria-label="Moksha Fabrics home">Moksha Fabrics<span>Textiles · Surat</span></a>
      <nav className="links" aria-label="Main navigation"><a href="/fabrics">Fabrics</a><a href="/about">About</a><a href="/faq">FAQ</a><a href="/contact">Contact</a></nav>
    </header>

    <main id="top">
      <section className="container hero">
        <div><div className="eyebrow">Textile manufacturer · Surat, Gujarat</div><h1>Fabric made for the way fashion moves.</h1><p className="lead">Moksha Fabrics connects fashion businesses, garment manufacturers and wholesale buyers with textile fabric from Surat — built around quality, consistency and practical sourcing.</p><div className="actions"><a className="btn primary" href="/fabrics">Explore fabrics</a><a className="btn" href="/contact">Start an enquiry</a></div><div className="hero-meta"><span>01 / B2B SOURCING</span><span>02 / SURAT TEXTILES</span><span>03 / PAN-INDIA SUPPLY</span></div></div>
        <div className="fabric-art" aria-label="Abstract woven textile detail"><span>TEXTILE<br/>STUDIO</span></div>
      </section>

      <section className="section" id="fabrics"><div className="container"><div className="section-head"><div><div className="eyebrow">Fabric catalogue</div><h2>A focused range for commercial fashion.</h2></div><p>Explore the main categories below. Detailed specifications, availability and bulk requirements can be discussed directly with Moksha Fabrics.</p></div><div className="grid">{fabrics.map(f=><article className="card" key={f.no}><div><div className="card-no">{f.no}</div><h3>{f.name}</h3><p>{f.text}</p></div><a href={f.href} className="card-link">View category <span>↗</span></a></article>)}</div><div className="catalogue-more"><a className="text-link" href="/fabrics">View the complete fabric catalogue →</a></div></div></section>

      <section className="band" id="about"><div className="container band-inner"><div><div className="eyebrow">Why Surat</div><h2>At the heart of India’s textile trade.</h2><p className="lead">Surat’s textile ecosystem brings together manufacturing, processing, weaving, printing, dyeing and wholesale distribution at remarkable scale. Moksha Fabrics is built to make that sourcing relationship simpler for buyers.</p><a className="text-link" href="/about">Learn about Moksha Fabrics →</a></div><div className="list"><div><span>Location</span><strong>Surat, Gujarat</strong></div><div><span>Market</span><strong>India & wholesale</strong></div><div><span>Focus</span><strong>Textile fabrics</strong></div><div><span>Approach</span><strong>Specification-led</strong></div></div></div></section>

      <section className="section" id="sourcing"><div className="container"><div className="section-head"><div><div className="eyebrow">B2B sourcing</div><h2>From requirement to supply.</h2></div><p>Give us the details that matter. The clearer the specification, the easier it is to identify a suitable fabric and plan the next step.</p></div><div className="grid process-grid"><article className="card"><div><div className="card-no">01 / REQUIREMENT</div><h3>Define the fabric</h3><p>Share the look, hand-feel, construction or reference you are trying to source.</p></div></article><article className="card"><div><div className="card-no">02 / DISCUSSION</div><h3>Match the specification</h3><p>Discuss construction, processing, width, quantity and commercial requirements.</p></div></article><article className="card"><div><div className="card-no">03 / SUPPLY</div><h3>Move to production</h3><p>Once specifications are agreed, move forward with samples, quantities and supply planning.</p></div></article></div></div></section>

      <section className="container" id="contact"><div className="cta"><div className="eyebrow">Start a conversation</div><h2>Looking for fabric from Surat?</h2><p>Send your requirement and we’ll build the next step around the fabric, quantity and application you have in mind.</p><a className="btn" href="/contact">Send a fabric enquiry</a></div></section>
    </main>

    <footer className="container"><span>© {new Date().getFullYear()} Moksha Fabrics</span><span>Textile fabric · Surat, Gujarat, India</span></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organization)}} />
  </>;
}
