/**
 * PatentDetailCard — detail panel shown below the map for a selected patent.
 *
 * Visually mirrors AuthorPage's local PatentCard (panel chrome, number/year
 * header, assignee + inventor lines, divider, lens links). The difference is
 * intent: names here recenter the relationship map instead of linking to author
 * pages, so this stays a separate component rather than a shared extraction.
 */

import { Link } from "react-router";
import { getAuthorByName } from "../../utils/catalog/authorCatalog.js";
import { getAssigneeByName } from "../../utils/catalog/assigneeCatalog.js";
import { LENS_LINK_BASE_STYLE } from "../../utils/style/pageStyles.js";
import type { Theme } from "../../types/theme.js";
import type { GraphPatentNode, PartyRef, PartyRole } from "../../utils/catalog/relationshipGraph.js";

interface PatentDetailCardProps {
  patent: GraphPatentNode;
  centerRef: PartyRef;
  theme: Theme;
  onFocusParty: (ref: PartyRef) => void;
  onClose: () => void;
}

export default function PatentDetailCard({
  patent,
  centerRef,
  theme: t,
  onFocusParty,
  onClose,
}: PatentDetailCardProps) {
  const isCenter = (name: string, role: PartyRole) => role === centerRef.role && name === centerRef.name;

  const renderParty = (name: string, role: PartyRole, index: number) => {
    const meta = role === "author" ? getAuthorByName(name) : getAssigneeByName(name);
    const separator = index > 0 ? ", " : "";
    if (isCenter(name, role) || !meta) {
      return (
        <span key={`${role}:${name}`}>
          {separator}
          {name}
        </span>
      );
    }
    return (
      <span key={`${role}:${name}`}>
        {separator}
        <button
          type="button"
          onClick={() => onFocusParty({ role, name, slug: meta.slug })}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            font: "inherit",
            color: t.descLinkColor,
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          {name}
        </button>
      </span>
    );
  };

  return (
    <article
      style={{
        position: "relative",
        background: t.panelBg,
        border: `1px solid ${t.panelBorder}`,
        borderRadius: 6,
        padding: "0.85rem",
        marginTop: "1rem",
      }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close patent details"
        style={{
          position: "absolute",
          top: "0.5rem",
          right: "0.6rem",
          background: "none",
          border: "none",
          color: t.muted,
          cursor: "pointer",
          fontSize: "0.85rem",
        }}
      >
        Close
      </button>

      <h3 style={{ color: t.title, fontSize: "0.95rem", margin: "0 0 0.35rem", paddingRight: "3rem" }}>
        {patent.patentNumber}
        {patent.patentYear !== undefined && (
          <span style={{ color: t.label, fontSize: "0.7rem", marginLeft: "0.5rem", fontWeight: 400 }}>
            {patent.patentYear}
          </span>
        )}
      </h3>

      {patent.assignees.length > 0 && (
        <p style={{ color: t.muted, fontSize: "0.72rem", margin: "0.2rem 0" }}>
          Assignee: {patent.assignees.map((name, index) => renderParty(name, "assignee", index))}
        </p>
      )}

      {patent.authors.length > 0 && (
        <p style={{ color: t.muted, fontSize: "0.72rem", margin: "0.2rem 0 0.55rem" }}>
          Inventors: {patent.authors.map((name, index) => renderParty(name, "author", index))}
        </p>
      )}

      <div style={{ borderTop: `1px solid ${t.panelDivider}`, paddingTop: "0.35rem" }}>
        {patent.lenses.map((lens) => (
          <Link key={lens.key} to={`/lens/${lens.key}`} style={{ ...LENS_LINK_BASE_STYLE, color: t.descLinkColor }}>
            {lens.name}
            {lens.specs?.length ? (
              <span style={{ color: t.label, fontSize: "0.68rem", marginLeft: "0.5rem" }}>
                — {lens.specs.slice(0, 2).join(", ")}
              </span>
            ) : null}
          </Link>
        ))}
      </div>
    </article>
  );
}
