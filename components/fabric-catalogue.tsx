"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Fabric } from "@/lib/fabrics";

const whatsappNumber = "919783123977";

export default function FabricCatalogue({ fabrics }: { fabrics: Fabric[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(fabrics.map((fabric) => fabric.category)))],
    [fabrics]
  );

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return fabrics.filter((fabric) => {
      const matchesCategory = category === "All" || fabric.category === category;
      const searchable = `${fabric.name} ${fabric.category} ${fabric.description} ${fabric.application} ${fabric.specifications.join(" ")}`.toLowerCase();
      return matchesCategory && (!normalized || searchable.includes(normalized));
    });
  }, [category, fabrics, query]);

  return (
    <div className="catalogueBrowser">
      <div className="catalogueTools" aria-label="Catalogue filters">
        <label className="catalogueSearch">
          <span className="srOnly">Search fabrics</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search fabric, category or application" type="search" />
        </label>
        <div className="filterList" role="group" aria-label="Filter by category">
          {categories.map((item) => (
            <button className={category === item ? "filterButton active" : "filterButton"} key={item} onClick={() => setCategory(item)} type="button" aria-pressed={category === item}>{item}</button>
          ))}
        </div>
      </div>

      <div className="catalogueCount" aria-live="polite"><span>{filtered.length} {filtered.length === 1 ? "quality" : "qualities"}</span><span>Demo imagery · Replace with actual Moksha Fabrics photography</span></div>

      <div className="productGrid">
        {filtered.map((fabric, index) => {
          const whatsappText = `Hello Moksha Fabrics, I would like to enquire about ${fabric.name}. Please share availability, exact specifications and pricing.`;
          return (
            <article className="productCard" key={fabric.slug}>
              <div className="productVisual">
                {fabric.imageUrl ? <img className="productImage" src={fabric.imageUrl} alt={fabric.imageAlt || fabric.name} loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.88 }} onError={(event) => { event.currentTarget.style.display = "none"; }} /> : null}
                {fabric.imageUrl ? <div className="productVisualShade" aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(23,63,75,0.08), rgba(23,63,75,0.68))" }} /> : null}
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{fabric.name}</strong>
              </div>
              <div className="productBody">
                <p className="productCategory">{fabric.category}</p>
                <h2>{fabric.name}</h2>
                <p>{fabric.description}</p>
                <div className="productMeta"><span>Application</span><strong>{fabric.application}</strong></div>
                <div className="productTags">{fabric.specifications.slice(0, 3).map((specification) => <span key={specification}>{specification}</span>)}</div>
                <div className="productActions">
                  <Link className="productLink" href={`/fabrics/${fabric.slug}`}>View details <span>↗</span></Link>
                  <a className="whatsappLink" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`} target="_blank" rel="noopener noreferrer">WhatsApp enquiry</a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="emptyState"><h2>No matching fabric found.</h2><p>Try another fabric name, category or application.</p><button className="filterButton active" onClick={() => { setQuery(""); setCategory("All"); }} type="button">Reset filters</button></div>
      )}
    </div>
  );
}
