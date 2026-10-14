/** Sourced alternate-name and contract-manufacturer details for one lens. */

import type { LensData } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";
import { compactLensRelationshipSummary } from "../../utils/catalog/lensRelationships.js";

interface LensIdentityRelationsProps {
  lens: Pick<LensData, "name" | "maker" | "lensMounts" | "aliases" | "manufacturedBy">;
  theme?: Theme;
  compact?: boolean;
}

const KIND_LABELS = {
  rebrand: "Rebrand",
  "regional-name": "Regional name",
  "cosmetic-variant": "Cosmetic variant",
} as const;

export default function LensIdentityRelations({ lens, theme: t, compact = false }: LensIdentityRelationsProps) {
  const summary = compactLensRelationshipSummary(lens);
  if (!summary) return null;

  const textColor = t?.desc ?? "#ccc";
  const mutedColor = t?.muted ?? "#999";
  const linkColor = t?.descLinkColor ?? "#7ec8e3";
  const borderColor = t?.panelBorder ?? "#333";

  if (compact) {
    return (
      <p
        style={{
          color: mutedColor,
          fontSize: 10,
          lineHeight: 1.4,
          letterSpacing: "0.03em",
          margin: "4px 0 0",
        }}
      >
        {summary}
      </p>
    );
  }

  const sources = (items: readonly { label: string; url: string }[]) => (
    <span style={{ display: "inline-flex", flexWrap: "wrap", gap: "0.35rem", marginLeft: "0.35rem" }}>
      {items.map((source) => (
        <a
          key={source.url}
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: linkColor, textDecoration: "none", borderBottom: `1px solid ${linkColor}60` }}
        >
          {source.label} ↗
        </a>
      ))}
    </span>
  );

  return (
    <section
      aria-label="Alternate names and manufacturing"
      style={{ borderBottom: `1px solid ${borderColor}`, paddingBottom: "1rem", marginBottom: "1rem" }}
    >
      <h2 style={{ color: t?.title ?? "#e0e0e0", fontSize: "0.95rem", margin: "0 0 0.6rem" }}>Product identity</h2>
      {lens.aliases?.map((alias) => (
        <p
          key={`${alias.maker}:${alias.name}`}
          style={{ color: textColor, fontSize: "0.78rem", lineHeight: 1.6, margin: "0.35rem 0" }}
        >
          <strong>{alias.name}</strong>
          <span style={{ color: mutedColor }}> — {KIND_LABELS[alias.kind]}</span>
          {alias.note && <span> · {alias.note}</span>}
          {sources(alias.sources)}
        </p>
      ))}
      {lens.manufacturedBy?.map((manufacturer) => {
        const entity = manufacturer.entity ?? manufacturer.maker;
        return (
          <p
            key={`${manufacturer.maker}:${entity}`}
            style={{ color: textColor, fontSize: "0.78rem", lineHeight: 1.6, margin: "0.35rem 0" }}
          >
            Manufactured by <strong>{entity}</strong>
            {manufacturer.entity && manufacturer.entity !== manufacturer.maker && (
              <span style={{ color: mutedColor }}> ({manufacturer.maker})</span>
            )}
            {manufacturer.note && <span> · {manufacturer.note}</span>}
            {sources(manufacturer.sources)}
          </p>
        );
      })}
    </section>
  );
}
