import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="pageHero notFound">
        <p className="eyebrow">404 · Page not found</p>
        <h1>That fabric page isn’t on the roll.</h1>
        <p className="lead">The page may have moved, or the catalogue entry may not have been added yet.</p>
        <div className="actions">
          <Link className="button buttonDark" href="/fabrics">Browse fabrics</Link>
          <Link className="textLink" href="/">Back to home →</Link>
        </div>
      </section>
    </main>
  );
}
