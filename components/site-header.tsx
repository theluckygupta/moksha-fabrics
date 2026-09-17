import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="siteHeader">
      <div className="container nav">
        <Link className="brand" href="/" aria-label="Moksha Fabrics home">
          <span className="brandMark">MF</span>
          <span className="brandText">
            <strong>Moksha Fabrics</strong>
            <small>Textiles · Surat</small>
          </span>
        </Link>
        <nav className="links" aria-label="Main navigation">
          <Link href="/fabrics">Fabrics</Link>
          <Link href="/about">About</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link className="navCta" href="/contact">Enquire</Link>
      </div>
    </header>
  );
}
