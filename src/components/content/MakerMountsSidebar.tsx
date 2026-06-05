/**
 * MakerMountsSidebar — lists the camera mounts used by a maker, linking to each mount page.
 *
 * Reuses the article table-of-contents panel format (`ArticleTOC`): a bordered panel with an
 * uppercase heading and a list of links with a left-border hover indicator. Unlike the TOC it has no
 * scrollspy — the links navigate to other pages. To keep the maker↔mount links crawlable and
 * SSR-rendered, the panel renders in-flow by default (and on narrow screens) and only becomes the
 * fixed top-right aside on wide screens; the first client render matches the SSR output, so there is
 * no hydration mismatch.
 */

import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { Theme } from "../../types/theme.js";
import type { LensMountMetadata } from "../../utils/catalog/lensTaxonomy.js";

interface MakerMountsSidebarProps {
  mounts: LensMountMetadata[];
  theme: Theme;
  /** Pixel offset from the viewport top for the fixed (wide) position; clears the site header. */
  offsetTop?: number;
  /** Panel width on wide screens. */
  width?: number;
  /** Media query gating the fixed (wide) vs in-flow (narrow) layout. */
  wideQuery?: string;
}

function useMediaQueryMatch(query: string): boolean {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mql = window.matchMedia(query);
    const handler = () => setMatches(mql.matches);
    handler();
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);
  return matches;
}

export default function MakerMountsSidebar({
  mounts,
  theme: t,
  offsetTop = 88,
  width = 220,
  wideQuery = "(min-width: 1200px)",
}: MakerMountsSidebarProps) {
  const isWide = useMediaQueryMatch(wideQuery);
  const [hovered, setHovered] = useState<string | null>(null);

  if (mounts.length === 0) return null;

  const panelStyle: React.CSSProperties = {
    background: t.panelBg,
    border: `1px solid ${t.panelBorder}`,
    borderRadius: 6,
    padding: "12px 14px",
    fontFamily: "'JetBrains Mono','SF Mono','Fira Code', monospace",
    maxHeight: `calc(100vh - ${offsetTop + 40}px)`,
    overflowY: "auto",
    boxShadow: "0 4px 18px rgba(0,0,0,0.25)",
  };

  const list = (
    <nav aria-label="Mounts used by this maker" style={panelStyle}>
      <div
        style={{
          fontSize: 10,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: t.label,
          marginBottom: 8,
          fontWeight: 600,
        }}
      >
        Mounts
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {mounts.map((m) => {
          const active = hovered === m.id;
          return (
            <li key={m.id} style={{ margin: "2px 0" }}>
              <Link
                to={`/mounts/${m.id}`}
                onMouseEnter={() => setHovered(m.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: "block",
                  fontSize: 12,
                  lineHeight: 1.45,
                  padding: "3px 6px",
                  borderLeft: `2px solid ${active ? t.descLinkColor : "transparent"}`,
                  color: active ? t.descLinkColor : t.descText,
                  textDecoration: "none",
                  fontWeight: active ? 600 : 400,
                  transition: "color 0.15s, border-color 0.15s",
                }}
              >
                {m.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );

  if (isWide) {
    return <aside style={{ position: "fixed", top: offsetTop, right: 24, width, zIndex: 20 }}>{list}</aside>;
  }

  return <div style={{ marginBottom: "1.5rem", maxWidth: 360 }}>{list}</div>;
}
