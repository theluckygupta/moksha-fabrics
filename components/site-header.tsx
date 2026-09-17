import Image from "next/image";
import Link from "next/link";
import MobileNav from "@/components/mobile-nav";

export default function SiteHeader() {
  return (
    <header className="siteHeader">
      <div className="container nav">
        <Link className="brand" href="/" aria-label="Moksha Fabrics home">
          <Image className="brandLogo" src="/logo.svg" alt="Moksha Fabrics" width={48} height={48} priority />
          <span className="brandText">
            <strong>Moksha Fabrics</strong>
            <small>Textiles · Surat</small>
          </span>
        </Link>
        <nav className="links" aria-label="Main navigation">
          <Link href="/fabrics">Fabrics</Link>
          <Link href="/guides">Buyer Guides</Link>
          <Link href="/about">About</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="headerActions">
          <Link className="navCta" href="/contact">Enquire</Link>
          <MobileNav />
        </div>
      </div>
      <style>{`
        .brandLogo{width:48px;height:48px;object-fit:contain;flex:0 0 auto}
        .headerActions{display:flex;align-items:center;gap:10px}
        .mobileNavWrap{display:none;position:relative}
        .mobileNavButton{border:1px solid var(--ink);background:var(--white);color:var(--ink);min-height:40px;padding:0 11px;display:flex;align-items:center;gap:9px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;cursor:pointer}
        .mobileNavPanel{position:absolute;right:0;top:48px;width:190px;background:var(--white);border:1px solid var(--line);box-shadow:var(--shadow);padding:8px;display:flex;flex-direction:column;z-index:30}
        .mobileNavPanel a{padding:13px 12px;font-size:13px;border-bottom:1px solid var(--line)}
        .mobileNavPanel a:last-child{border-bottom:0}
        .mobileNavPanel a:hover{background:var(--cream)}
        @media(max-width:800px){.mobileNavWrap{display:block}.headerActions{margin-left:auto}.navCta{display:none!important}}
      `}</style>
    </header>
  );
}
