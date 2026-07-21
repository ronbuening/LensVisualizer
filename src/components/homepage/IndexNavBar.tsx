/**
 * IndexNavBar — compact secondary navigation beneath homepage action cards.
 *
 * Surfaces the remaining catalog and content indexes without competing with
 * the four primary homepage actions.
 */

import { Link } from "react-router";
import type { Theme } from "../../types/theme.js";

interface IndexNavBarProps {
  theme: Theme;
}

const INDEX_LINKS = [
  { label: "Mounts", to: "/mounts" },
  { label: "Formats", to: "/formats" },
  { label: "Authors", to: "/authors" },
  { label: "Articles", to: "/articles" },
] as const;

export default function IndexNavBar({ theme: t }: IndexNavBarProps) {
  return (
    <nav
      aria-label="Catalog indexes"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "0.45rem 1rem",
        background: t.panelBg,
        border: `1px solid ${t.panelBorder}`,
        borderRadius: 7,
        padding: "0.7rem 1rem",
        marginBottom: "2.5rem",
        fontSize: "0.75rem",
      }}
    >
      <span style={{ color: t.label, textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "0.68rem" }}>
        Browse indexes
      </span>
      {INDEX_LINKS.map((item) => (
        <Link key={item.to} to={item.to} style={{ color: t.descLinkColor, textDecoration: "none" }}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
