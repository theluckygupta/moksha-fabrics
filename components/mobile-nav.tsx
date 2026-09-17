"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobileNavWrap">
      <button
        className="mobileNavButton"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span>{open ? "Close" : "Menu"}</span>
        <span aria-hidden="true">{open ? "×" : "☰"}</span>
      </button>
      {open ? (
        <nav id="mobile-navigation" className="mobileNavPanel" aria-label="Mobile navigation">
          <Link href="/fabrics" onClick={() => setOpen(false)}>Fabrics</Link>
          <Link href="/guides" onClick={() => setOpen(false)}>Buyer Guides</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      ) : null}
    </div>
  );
}
