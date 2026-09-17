import Link from "next/link";

export default function FabricsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="subnav" aria-label="Fabric categories">
        <div className="container subnav-inner">
          <Link href="/fabrics">All fabrics</Link>
          <Link href="/fabrics/printed-fabrics">Printed</Link>
          <Link href="/fabrics/dress-material-fabrics">Dress material</Link>
          <Link href="/fabrics/synthetic-blended-fabrics">Synthetic &amp; blended</Link>
          <Link href="/fabrics/dyed-fabrics">Dyed</Link>
        </div>
      </nav>
      {children}
    </>
  );
}
