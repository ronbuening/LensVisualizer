/**
 * QuickNavCards — navigation card grid for the homepage.
 *
 * Cards linking to the lens library, makers index, the interactive viewer
 * (most recently added lens) and the lens builder (badged as new), then a
 * full-width Start Here card for readers new to lens design.
 */

import { Link } from "react-router";
import type { Theme } from "../../types/theme.js";
import { SUMMARY_KEYS, LENS_SUMMARIES, RECENT_LENS_KEYS } from "../../utils/catalog/lensSummaries.js";
import { deriveMaker } from "../../utils/catalog/lensMetadata.js";
import { canonicalPagePath } from "../../utils/seo/siteUrls.js";
import { panelCard } from "../../utils/style/styles.js";
import { ENABLE_LENS_BUILDER } from "../../utils/featureFlags.js";

interface QuickNavCardsProps {
  theme: Theme;
}

function countMakers(): number {
  return new Set(SUMMARY_KEYS.map((key) => deriveMaker(LENS_SUMMARIES[key].name, LENS_SUMMARIES[key].maker).slug)).size;
}

interface CardDef {
  title: string;
  subtitle: string;
  to: string;
  /** Badge the card as a newly released feature. */
  isNew?: boolean;
}

const START_HERE: CardDef = {
  title: "Start Here",
  subtitle: "New to lens design? Begin with the basics",
  to: "/articles/start-here",
};

export default function QuickNavCards({ theme: t }: QuickNavCardsProps) {
  const makerCount = countMakers();
  const viewerLens = RECENT_LENS_KEYS.length > 0 ? RECENT_LENS_KEYS[0].key : SUMMARY_KEYS[0];

  const cards: CardDef[] = [
    { title: "Lens Library", subtitle: `${SUMMARY_KEYS.length} interactive diagrams`, to: "/lenses" },
    { title: "Browse by Maker", subtitle: `${makerCount} manufacturers`, to: "/makers" },
    {
      title: "Open Viewer",
      subtitle: viewerLens ? LENS_SUMMARIES[viewerLens].name : "Explore a lens",
      to: viewerLens ? `/lens/${viewerLens}` : "/lenses",
    },
    ...(ENABLE_LENS_BUILDER
      ? [
          {
            title: "Lens Builder",
            subtitle: "Design your own lens and trace it live",
            to: "/lens-builder",
            isNew: true,
          },
        ]
      : []),
  ];

  const cardStyle = (card: CardDef): React.CSSProperties => ({
    ...panelCard(t, { borderRadius: 8 }),
    ...(card.isNew ? { borderColor: t.toggleActiveBorder } : {}),
    padding: "clamp(1rem, 2vw, 1.25rem) clamp(1.25rem, 2.5vw, 1.5rem)",
    textDecoration: "none",
    display: "block",
    transition: "border-color 0.2s, box-shadow 0.2s",
  });

  const titleStyle: React.CSSProperties = { fontSize: "0.9rem", fontWeight: 600, color: t.descLinkColor };
  const subtitleStyle: React.CSSProperties = { fontSize: "0.75rem", color: t.muted, lineHeight: 1.4 };

  return (
    <section
      style={{
        display: "grid",
        /* 340px minimum caps this at two columns inside the 960px page
           container — pure CSS replaces the old JS breakpoint, so the
           prerendered layout is already correct at every viewport. */
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
        gap: "1rem",
        margin: "0 0 0.75rem",
      }}
    >
      {cards.map((card) => (
        <Link key={card.to} to={canonicalPagePath(card.to)} style={cardStyle(card)}>
          <div style={{ ...titleStyle, marginBottom: "0.35rem" }}>
            {card.title}
            {card.isNew && (
              <span
                style={{
                  marginLeft: "0.5rem",
                  padding: "1px 6px",
                  borderRadius: 3,
                  background: t.toggleActiveBg,
                  color: t.toggleActiveText,
                  fontSize: "0.6rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  verticalAlign: "middle",
                }}
              >
                New
              </span>
            )}
          </div>
          <div style={subtitleStyle}>{card.subtitle}</div>
        </Link>
      ))}
      {/* Spans every column so the beginner path reads as one action beneath the grid. */}
      <Link
        to={canonicalPagePath(START_HERE.to)}
        style={{
          ...cardStyle(START_HERE),
          gridColumn: "1 / -1",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "baseline",
          justifyContent: "center",
          gap: "0.25rem 0.75rem",
          textAlign: "center",
        }}
      >
        <span style={titleStyle}>{START_HERE.title}</span>
        <span style={subtitleStyle}>{START_HERE.subtitle} →</span>
      </Link>
    </section>
  );
}
