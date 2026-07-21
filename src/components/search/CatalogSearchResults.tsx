/**
 * CatalogSearchResults — grouped results for the dedicated search route.
 *
 * Each result links to its final destination: lens-name and patent matches
 * open a lens page, while inventor matches open the corresponding author page.
 */

import { Link } from "react-router";
import type { ReactNode } from "react";
import type { Theme } from "../../types/theme.js";
import { searchCatalog } from "../../utils/catalog/searchCatalog.js";

interface CatalogSearchResultsProps {
  query: string;
  theme: Theme;
}

interface ResultSectionProps {
  title: string;
  count: number;
  theme: Theme;
  children: ReactNode;
}

const RESULT_LIMIT = 40;

function ResultSection({ title, count, theme: t, children }: ResultSectionProps) {
  if (count === 0) return null;
  return (
    <section style={{ marginTop: "1.5rem" }}>
      <h2
        style={{
          fontSize: "1rem",
          color: t.title,
          borderBottom: `1px solid ${t.panelBorder}`,
          paddingBottom: "0.4rem",
          marginBottom: "0.5rem",
        }}
      >
        {title}
        <span style={{ color: t.label, fontSize: "0.72rem", marginLeft: "0.5rem", fontWeight: 400 }}>({count})</span>
      </h2>
      {children}
      {count > RESULT_LIMIT && (
        <p style={{ color: t.muted, fontSize: "0.72rem" }}>Showing the first {RESULT_LIMIT}; refine your search.</p>
      )}
    </section>
  );
}

const resultLinkStyle = (t: Theme): React.CSSProperties => ({
  display: "block",
  color: t.descLinkColor,
  textDecoration: "none",
  padding: "0.55rem 0.7rem",
  marginBottom: "0.2rem",
  borderRadius: 5,
  background: t.panelBg,
  border: `1px solid ${t.panelBorder}`,
  fontSize: "0.82rem",
});

export default function CatalogSearchResults({ query, theme: t }: CatalogSearchResultsProps) {
  const trimmedQuery = query.trim();
  const results = searchCatalog(trimmedQuery);
  const total = results.lenses.length + results.patents.length + results.authors.length;

  if (!trimmedQuery) {
    return (
      <p style={{ color: t.muted, fontSize: "0.82rem", lineHeight: 1.6 }}>
        Enter a lens name, a published patent number, or an inventor name to search the catalog.
      </p>
    );
  }

  if (total === 0) {
    return (
      <p aria-live="polite" style={{ color: t.muted, fontSize: "0.82rem" }}>
        No results for “{trimmedQuery}”. Try a shorter name or enter the patent number without punctuation.
      </p>
    );
  }

  return (
    <div aria-live="polite">
      <p style={{ color: t.muted, fontSize: "0.75rem", margin: 0 }}>
        {total} {total === 1 ? "match" : "matches"} for “{trimmedQuery}”
      </p>

      <ResultSection title="Lens names" count={results.lenses.length} theme={t}>
        {results.lenses.slice(0, RESULT_LIMIT).map((match) => (
          <Link key={match.key} to={`/lens/${match.key}`} style={resultLinkStyle(t)}>
            <span>{match.data.name}</span>
            {match.data.specs?.length ? (
              <span style={{ color: t.label, fontSize: "0.7rem", marginLeft: "0.5rem" }}>
                — {match.data.specs.slice(0, 2).join(", ")}
              </span>
            ) : null}
          </Link>
        ))}
      </ResultSection>

      <ResultSection title="Patent numbers" count={results.patents.length} theme={t}>
        {results.patents.slice(0, RESULT_LIMIT).map((match) => (
          <Link key={match.key} to={`/lens/${match.key}`} style={resultLinkStyle(t)}>
            <span>{match.data.patentNumber}</span>
            <span style={{ color: t.label, fontSize: "0.7rem", marginLeft: "0.5rem" }}>— {match.data.name}</span>
          </Link>
        ))}
      </ResultSection>

      <ResultSection title="Authors" count={results.authors.length} theme={t}>
        {results.authors.slice(0, RESULT_LIMIT).map(({ author }) => (
          <Link key={author.slug} to={`/authors/${author.slug}`} style={resultLinkStyle(t)}>
            <span>{author.name}</span>
            <span style={{ color: t.label, fontSize: "0.7rem", marginLeft: "0.5rem" }}>
              — {author.patentCount} {author.patentCount === 1 ? "patent" : "patents"}
            </span>
          </Link>
        ))}
      </ResultSection>
    </div>
  );
}
