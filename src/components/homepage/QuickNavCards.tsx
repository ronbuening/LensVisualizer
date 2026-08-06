/**
 * QuickNavCards — navigation card grid for the homepage.
 *
 * Three cards linking to the lens library, makers index, and the
 * interactive viewer (first lens in the catalog).
 */

import { Link } from "react-router";
import type { Theme } from "../../types/theme.js";
import { SUMMARY_KEYS, LENS_SUMMARIES, RECENT_LENS_KEYS } from "../../utils/catalog/lensSummaries.js";
import { deriveMaker } from "../../utils/catalog/lensMetadata.js";
import { canonicalPagePath } from "../../utils/seo/siteUrls.js";
import { panelCard } from "../../utils/style/styles.js";

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
}

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
    { title: "Start Here", subtitle: "New to lens design? Begin with the basics", to: "/articles/start-here" },
  ];

  const cardStyle = (): React.CSSProperties => ({
    ...panelCard(t, { borderRadius: 8 }),
    padding: "clamp(1rem, 2vw, 1.25rem) clamp(1.25rem, 2.5vw, 1.5rem)",
    textDecoration: "none",
    display: "block",
    transition: "border-color 0.2s, box-shadow 0.2s",
  });

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
        <Link key={card.to} to={canonicalPagePath(card.to)} style={cardStyle()}>
          <div style={{ fontSize: "0.9rem", fontWeight: 600, color: t.descLinkColor, marginBottom: "0.35rem" }}>
            {card.title}
          </div>
          <div style={{ fontSize: "0.75rem", color: t.muted, lineHeight: 1.4 }}>{card.subtitle}</div>
        </Link>
      ))}
    </section>
  );
}
