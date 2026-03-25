/**
 * QuickNavCards — navigation card grid for the homepage.
 *
 * Three cards linking to the lens library, makers index, and the
 * interactive viewer (first lens in the catalog).
 */

import { Link } from "react-router";
import type { Theme } from "../../types/theme.js";
import { CATALOG_KEYS, LENS_CATALOG } from "../../utils/lensCatalog.js";
import { deriveMaker } from "../../utils/lensMetadata.js";
import useMediaQuery from "../../utils/useMediaQuery.js";

interface QuickNavCardsProps {
  theme: Theme;
}

function countMakers(): number {
  const slugs = new Set<string>();
  for (const key of CATALOG_KEYS) {
    slugs.add(deriveMaker(LENS_CATALOG[key].name, LENS_CATALOG[key].maker).slug);
  }
  return slugs.size;
}

interface CardDef {
  title: string;
  subtitle: string;
  to: string;
}

export default function QuickNavCards({ theme: t }: QuickNavCardsProps) {
  const isWide = useMediaQuery("(min-width: 720px)");
  const makerCount = countMakers();
  const firstLens = CATALOG_KEYS[0];

  const cards: CardDef[] = [
    { title: "Lens Library", subtitle: `${CATALOG_KEYS.length} interactive diagrams`, to: "/lenses" },
    { title: "Browse by Maker", subtitle: `${makerCount} manufacturers`, to: "/makers" },
    {
      title: "Open Viewer",
      subtitle: firstLens ? LENS_CATALOG[firstLens].name : "Explore a lens",
      to: firstLens ? `/lens/${firstLens}` : "/lenses",
    },
  ];

  const cardStyle = (hoverable: boolean): React.CSSProperties => ({
    flex: isWide ? 1 : undefined,
    background: t.panelBg,
    border: `1px solid ${t.panelBorder}`,
    borderRadius: 8,
    padding: isWide ? "1.25rem 1.5rem" : "1rem 1.25rem",
    textDecoration: "none",
    display: "block",
    transition: "border-color 0.2s, box-shadow 0.2s",
    ...(hoverable ? {} : {}),
  });

  return (
    <section
      style={{
        display: "flex",
        flexDirection: isWide ? "row" : "column",
        gap: isWide ? "1rem" : "0.75rem",
        margin: "0 0 2.5rem",
      }}
    >
      {cards.map((card) => (
        <Link key={card.to} to={card.to} style={cardStyle(true)}>
          <div style={{ fontSize: "0.9rem", fontWeight: 600, color: t.descLinkColor, marginBottom: "0.35rem" }}>
            {card.title}
          </div>
          <div style={{ fontSize: "0.75rem", color: t.muted, lineHeight: 1.4 }}>{card.subtitle}</div>
        </Link>
      ))}
    </section>
  );
}
