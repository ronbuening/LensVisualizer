/**
 * PatentDetailCard — detail panel shown below the map for a selected patent.
 *
 * Visually mirrors AuthorPage's local PatentCard (panel chrome, number/year
 * header, assignee + inventor lines, divider, lens links). The difference is
 * intent: names here recenter the relationship map instead of linking to author
 * pages, so this stays a separate component rather than a shared extraction.
 */

import LensEntryLink from "../content/LensEntryLink.js";
import PatentNumberLink from "../content/PatentNumberLink.js";
import PatentPartyList from "../content/PatentPartyList.js";
import { getAuthorByName } from "../../utils/catalog/authorCatalog.js";
import { getAssigneeByName } from "../../utils/catalog/assigneeCatalog.js";
import type { Theme } from "../../types/theme.js";
import type { GraphPatentNode, PartyRef } from "../../utils/catalog/relationshipGraph.js";
import type { PatentPartyRole } from "../../types/catalog.js";
import { panelCard } from "../../utils/style/styles.js";

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
  const isCenter = (name: string, role: PatentPartyRole) => role === centerRef.role && name === centerRef.name;

  const renderParty = (name: string, role: PatentPartyRole) => {
    const meta = role === "author" ? getAuthorByName(name) : getAssigneeByName(name);
    if (isCenter(name, role) || !meta) {
      return <span>{name}</span>;
    }
    return (
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
    );
  };

  return (
    <article
      style={{
        position: "relative",
        ...panelCard(t),
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
        <PatentNumberLink patentNumber={patent.patentNumber} color={t.descLinkColor} />
        {patent.patentYear !== undefined && (
          <span style={{ color: t.label, fontSize: "0.7rem", marginLeft: "0.5rem", fontWeight: 400 }}>
            {patent.patentYear}
          </span>
        )}
      </h3>

      {patent.assignees.length > 0 && (
        <p style={{ color: t.muted, fontSize: "0.72rem", margin: "0.2rem 0" }}>
          Assignee: <PatentPartyList names={patent.assignees} renderName={(name) => renderParty(name, "assignee")} />
        </p>
      )}

      {patent.authors.length > 0 && (
        <p style={{ color: t.muted, fontSize: "0.72rem", margin: "0.2rem 0 0.55rem" }}>
          Inventors: <PatentPartyList names={patent.authors} renderName={(name) => renderParty(name, "author")} />
        </p>
      )}

      <div style={{ borderTop: `1px solid ${t.panelDivider}`, paddingTop: "0.35rem" }}>
        {patent.lenses.map((lens) => (
          <LensEntryLink
            key={lens.key}
            lensKey={lens.key}
            text={lens.name}
            specs={lens.specs}
            theme={t}
            metaStyle={{ fontSize: "0.68rem" }}
          />
        ))}
      </div>
    </article>
  );
}
