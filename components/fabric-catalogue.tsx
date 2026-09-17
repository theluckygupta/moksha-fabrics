"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Fabric } from "@/lib/fabrics";

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
      const searchable = `${fabric.name} ${fabric.category} ${fabric.description} ${fabric.application}`.toLowerCase();
      return matchesCategory && (!normalized || searchable.includes(normalized));
    });
  }, [category, fabrics, query]);

  return (
    <div className="catalogueBrowser">
      <div className="catalogueTools" aria-label="Catalogue filters">
        <label className="catalogueSearch">
          <span className="srOnly">Search fabrics</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search fabric, category or application"
            type="search"
          />
        </label>
        <div className="filterList" role="group" aria-label="Filter by category">
          {categories.map((item) => (
            <button
              className={category === item ? "filterButton active" : "filterButton"}
              key={item}
              onClick={() => setCategory(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="catalogueCount">
        <span>{filtered.length} {filtered.length === 1 ? "quality" : "qualities"}</span>
        <span>Specifications confirmed per lot before order</span>
      </div>

      <div className="productGrid">
        {filtered.map((fabric, index) => (
          <article className="productCard" key={fabric.slug}>
            <div className="productVisual" aria-hidden="true">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{fabric.name}</strong>
            </div>
            <div className="productBody">
              <p className="productCategory">{fabric.category}</p>
              <h2>{fabric.name}</h2>
              <p>{fabric.description}</p>
              <div className="productMeta">
                <span>Application</span>
                <strong>{fabric.application}</strong>
              </div>
              <div className="productTags">
                {fabric.specifications.slice(0, 3).map((specification) => (
                  <span key={specification}>{specification}</span>
                ))}
              </div>
              <Link className="productLink" href={`/fabrics/${fabric.slug}`}>
                View quality details <span>↗</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="emptyState">
          <h2>No matching fabric found.</h2>
          <p>Try another fabric name, category or application.</p>
          <button className="filterButton active" onClick={() => { setQuery(""); setCategory("All"); }} type="button">
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
