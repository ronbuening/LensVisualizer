/**
 * CatalogSearchBox — shared search entry point for the homepage and /search.
 *
 * Exact, unambiguous submissions open their destination immediately. Broader
 * queries move to the search route, while optional homepage suggestions expose
 * direct lens, patent, and author links as the visitor types.
 */

import { useMemo, useState } from "react";
import type { SubmitEvent } from "react";
import { Link, useNavigate } from "react-router";
import type { Theme } from "../../types/theme.js";
import { exactSearchTarget, searchCatalog } from "../../utils/catalog/searchCatalog.js";
import type { CatalogSearchMatch } from "../../utils/catalog/searchCatalog.js";

interface CatalogSearchBoxProps {
  theme: Theme;
  query?: string;
  onQueryChange?: (query: string) => void;
  heading?: string;
  description?: string;
  showSuggestions?: boolean;
  suggestionLimit?: number;
}

function suggestionDetails(match: CatalogSearchMatch): { label: string; meta: string; to: string } {
  if (match.type === "author") {
    return {
      label: match.author.name,
      meta: `Author · ${match.author.patentCount} ${match.author.patentCount === 1 ? "patent" : "patents"}`,
      to: `/authors/${match.author.slug}`,
    };
  }
  if (match.type === "patent") {
    return {
      label: match.data.patentNumber ?? "Patent",
      meta: `Patent · ${match.data.name}`,
      to: `/lens/${match.key}`,
    };
  }
  return {
    label: match.data.name,
    meta: "Lens",
    to: `/lens/${match.key}`,
  };
}

export default function CatalogSearchBox({
  theme: t,
  query,
  onQueryChange,
  heading,
  description,
  showSuggestions = false,
  suggestionLimit = 8,
}: CatalogSearchBoxProps) {
  const navigate = useNavigate();
  const [internalQuery, setInternalQuery] = useState("");
  const currentQuery = query ?? internalQuery;
  const normalizedQuery = currentQuery.trim();
  const results = useMemo(() => searchCatalog(currentQuery), [currentQuery]);
  const suggestions = useMemo(
    () =>
      [...results.lenses.slice(0, 3), ...results.patents.slice(0, 3), ...results.authors.slice(0, 3)].slice(
        0,
        suggestionLimit,
      ),
    [results, suggestionLimit],
  );

  const setQuery = (value: string) => {
    if (onQueryChange) onQueryChange(value);
    else setInternalQuery(value);
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!normalizedQuery) {
      void navigate("/search");
      return;
    }
    const exactTarget = exactSearchTarget(normalizedQuery);
    void navigate(exactTarget ?? `/search?q=${encodeURIComponent(normalizedQuery)}`);
  };

  return (
    <section
      aria-label="Catalog search"
      style={{
        background: t.panelBg,
        border: `1px solid ${t.panelBorder}`,
        borderRadius: 10,
        padding: "1rem",
        marginBottom: "1.5rem",
        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
      }}
    >
      {heading && (
        <h2 style={{ color: t.title, fontSize: "1rem", margin: "0 0 0.35rem", fontWeight: 600 }}>{heading}</h2>
      )}
      {description && (
        <p style={{ color: t.muted, fontSize: "0.75rem", lineHeight: 1.5, margin: "0 0 0.8rem" }}>{description}</p>
      )}
      <form onSubmit={handleSubmit} role="search" style={{ display: "flex", gap: "0.5rem" }}>
        <label htmlFor="catalog-search-input" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden" }}>
          Search lenses, patents, and authors
        </label>
        <input
          id="catalog-search-input"
          type="search"
          value={currentQuery}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Lens name, patent number, or author"
          autoComplete="off"
          style={{
            flex: 1,
            minWidth: 0,
            background: t.selectorBg,
            color: t.selectorText,
            border: `1px solid ${t.selectorBorder}`,
            borderRadius: 6,
            padding: "0.7rem 0.8rem",
            font: "inherit",
            fontSize: "0.82rem",
            outlineColor: t.sliderAccent,
          }}
        />
        <button
          type="submit"
          style={{
            background: t.toggleActiveBg,
            color: t.toggleActiveText,
            border: `1px solid ${t.toggleActiveBorder}`,
            borderRadius: 6,
            padding: "0.65rem 1rem",
            font: "inherit",
            fontSize: "0.78rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>

      {showSuggestions && normalizedQuery.length > 0 && (
        <div style={{ borderTop: `1px solid ${t.panelDivider}`, marginTop: "0.75rem", paddingTop: "0.5rem" }}>
          {suggestions.length > 0 ? (
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {suggestions.map((match) => {
                const item = suggestionDetails(match);
                const id = match.type === "author" ? `author-${match.author.slug}` : `${match.type}-${match.key}`;
                return (
                  <li key={id}>
                    <Link
                      to={item.to}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "1rem",
                        padding: "0.45rem 0.35rem",
                        color: t.descLinkColor,
                        textDecoration: "none",
                        fontSize: "0.78rem",
                      }}
                    >
                      <span>{item.label}</span>
                      <span style={{ color: t.label, fontSize: "0.68rem", textAlign: "right" }}>{item.meta}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p style={{ color: t.muted, fontSize: "0.75rem", margin: "0.25rem" }}>No catalog matches.</p>
          )}
          <Link
            to={`/search?q=${encodeURIComponent(normalizedQuery)}`}
            style={{ display: "inline-block", color: t.descLinkColor, fontSize: "0.72rem", margin: "0.5rem 0.35rem 0" }}
          >
            View all results →
          </Link>
        </div>
      )}
    </section>
  );
}
