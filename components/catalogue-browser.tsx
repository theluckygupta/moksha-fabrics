"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Fabric } from "@/lib/fabrics";

const categoryLabels = ["All", "Dress Material Fabrics", "Dyed / RFD Fabrics", "Rayon Fabrics", "Cotton Fabrics", "Georgette Fabrics", "Crepe Fabrics", "Crush / Textured Fabrics", "Checks / RFD Fabrics"];

export default function CatalogueBrowser({ fabrics }: { fabrics: Fabric[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return fabrics.filter((fabric) => {
      const matchesCategory = category === "All" || fabric.category === category;
      const haystack = `${fabric.name} ${fabric.category} ${fabric.description} ${fabric.application}`.toLowerCase();
      return matchesCategory && (!term || haystack.includes(term));
    });
  }, [fabrics, query, category]);

  return (
    <div className="catalogueBrowser">
      <div className="catalogueTools">
        <label className="catalogueSearch">
          <span className="srOnly">Search fabrics</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search fabric name, category or application…" />
        </label>
        <div className="filterList" aria-label="Fabric categories">
          {categoryLabels.map((label) => (
            <button className={`filterButton${category === label ? " active" : ""}`} type="button" key={label} onClick={() => setCategory(label)}>{label}</button>
          ))}
        </div>
      </div>
      <div className="catalogueCount"><span>{filtered.length} {filtered.length === 1 ? "quality" : "qualities"}</span><span>Exact width, GSM, composition and availability are confirmed per lot.</span></div>
      {filtered.length ? (
        <div className="productGrid">
          {filtered.map((fabric, index) => (
            <article className="productCard" key={fabric.slug}>
              <div className="productVisual">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{fabric.name}</strong>
              </div>
              <div className="productBody">
                <p className="productCategory">{fabric.category}</p>
                <h2>{fabric.name}</h2>
                <p>{fabric.description}</p>
                <div className="productMeta"><span>Application</span><strong>{fabric.application}</strong></div>
                <div className="productTags">{fabric.specifications.slice(0, 3).map((spec) => <span key={spec}>{spec}</span>)}</div>
                <Link className="productLink" href={`/fabrics/${fabric.slug}`}>View quality <span>↗</span></Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="emptyState"><h2>No matching fabric found.</h2><p>Try another fabric name or reset the category filter.</p><button className="button buttonDark" type="button" onClick={() => { setQuery(""); setCategory("All"); }}>Reset catalogue</button></div>
      )}
    </div>
  );
}
