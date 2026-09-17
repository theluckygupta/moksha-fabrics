const fabrics = [
  { no: "01", name: "Printed Fabrics", text: "Fashion-focused printed textiles for dress materials, garments, boutiques and contemporary collections." },
  { no: "02", name: "Dress Material Fabrics", text: "Fabric options selected for flowing silhouettes, coordinated sets and everyday-to-occasion wear." },
  { no: "03", name: "Synthetic & Blended Fabrics", text: "Practical textile constructions for buyers looking for consistency, versatility and commercial value." },
  { no: "04", name: "Dyed Fabrics", text: "Solid and custom-dyed fabric options for manufacturers and fashion businesses." },
  { no: "05", name: "Textile Wholesale", text: "Wholesale sourcing from Surat with specifications, quantities and supply requirements discussed directly." },
  { no: "06", name: "Custom Development", text: "Discuss a fabric requirement with our team for a specification-led sourcing and manufacturing conversation." },
];

const organization = {
  "@context": "https://schema.org", "@type": "LocalBusiness", name: "Moksha Fabrics",
  url: "https://mokshafabrics.com", address: { "@type": "PostalAddress", addressLocality: "Surat", addressRegion: "Gujarat", addressCountry: "IN" },
  areaServed: "India", knowsAbout: ["Textile fabrics", "Fabric manufacturing", "Textile wholesale", "Surat textile industry"]
};

export default function Home() {
  return <>
    <header className="container nav">
      <a className="logo" href="#top">Moksha Fabrics<span>Textiles · Surat</span></a>
      <nav className="links" aria-label="Main navigation"><a href="#fabrics">Fabrics</a><a href="#about">About</a><a href="#sourcing">Sourcing</a><a href="#contact">Contact</a></nav>
    </header>

    <main id="top">
      <section className="container hero">
        <div><div className="eyebrow">Textile manufacturer · Surat, Gujarat</div><h1>Fabric made for the way fashion moves.</h1><p className="lead">Moksha Fabrics connects fashion businesses, garment manufacturers and wholesale buyers with textile fabric from Surat — built around quality, consistency and practical sourcing.</p><div className="actions"><a className="btn primary" href="#fabrics">Explore fabrics</a><a className="btn" href="#contact">Start an enquiry</a></div></div>
        <div className="fabric-art" aria-label="Abstract woven textile detail" />
      </section>

      <section className="section" id="fabrics"><div className="container"><div className="section-head"><div><div className="eyebrow">Our fabric range</div><h2>Textiles for commercial fashion.</h2></div><p>Browse by fabric category and use the site as a starting point for your next sourcing conversation.</p></div><div className="grid">{fabrics.map(f=><article className="card" key={f.no}><div><div className="card-no">{f.no}</div><h3>{f.name}</h3><p>{f.text}</p></div><a href="#contact" className="card-no">ENQUIRE →</a></article>)}</div></div></section>

      <section className="band" id="about"><div className="container band-inner"><div><div className="eyebrow">Why Surat</div><h2>At the heart of India’s textile trade.</h2><p className="lead">Surat’s textile ecosystem brings together manufacturing, processing, weaving, printing, dyeing and wholesale distribution at remarkable scale. Moksha Fabrics is built to make that sourcing relationship simpler for buyers.</p></div><div className="list"><div><span>Location</span><strong>Surat, Gujarat</strong></div><div><span>Market</span><strong>India & wholesale</strong></div><div><span>Focus</span><strong>Textile fabrics</strong></div><div><span>Approach</span><strong>Specification-led</strong></div></div></div></section>

      <section className="section" id="sourcing"><div className="container"><div className="section-head"><div><div className="eyebrow">Sourcing</div><h2>Tell us what you need.</h2></div><p>For bulk requirements, share fabric type, construction, width, GSM, finish, quantity and intended use. We can then discuss suitable options.</p></div><div className="grid"><article className="card"><div><div className="card-no">01 / REQUIREMENT</div><h3>Define the fabric</h3><p>Tell us the look, hand-feel, construction or reference you are trying to source.</p></div></article><article className="card"><div><div className="card-no">02 / DISCUSSION</div><h3>Match the specification</h3><p>Discuss construction, processing, width, quantity and commercial requirements with the team.</p></div></article><article className="card"><div><div className="card-no">03 / SUPPLY</div><h3>Move to production</h3><p>Once specifications are agreed, move forward with samples, quantities and supply planning.</p></div></article></div></div></section>

      <section className="container" id="contact"><div className="cta"><div className="eyebrow">Start a conversation</div><h2>Looking for fabric from Surat?</h2><p>Send your requirement and we’ll build the next step around the fabric, quantity and application you have in mind.</p><a className="btn" href="mailto:hello@mokshafabrics.com?subject=Fabric%20Enquiry">Email Moksha Fabrics</a></div></section>
    </main>

    <footer className="container"><span>© {new Date().getFullYear()} Moksha Fabrics</span><span>Textile fabric · Surat, Gujarat, India</span></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organization)}} />
  </>;
}
