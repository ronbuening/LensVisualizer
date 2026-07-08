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
import useMediaQuery from "../../utils/useMediaQuery.js";

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
  const isWide = useMediaQuery("(min-width: 720px)");
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
    background: t.panelBg,
    border: `1px solid ${t.panelBorder}`,
    borderRadius: 8,
    padding: isWide ? "1.25rem 1.5rem" : "1rem 1.25rem",
    textDecoration: "none",
    display: "block",
    transition: "border-color 0.2s, box-shadow 0.2s",
  });

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: isWide ? "1fr 1fr" : "1fr",
        gap: isWide ? "1rem" : "0.75rem",
        margin: "0 0 2.5rem",
      }}
    >
      {cards.map((card) => (
        <Link key={card.to} to={card.to} style={cardStyle()}>
          <div style={{ fontSize: "0.9rem", fontWeight: 600, color: t.descLinkColor, marginBottom: "0.35rem" }}>
            {card.title}
          </div>
          <div style={{ fontSize: "0.75rem", color: t.muted, lineHeight: 1.4 }}>{card.subtitle}</div>
        </Link>
      ))}
    </section>
  );
}
