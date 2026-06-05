/**
 * SidebarLayout — places a navigational sidebar beside the main content on wide
 * viewports and stacks it above the content on narrow ones.
 *
 * Side-by-side (default ≥1200 px): a flex row with the content flexing and the
 * sidebar in its own sticky column. Because the sidebar occupies a real column
 * (rather than floating in the page's outer margin) it never overlaps the text,
 * so it works in viewports as narrow as ~1200 px. Stacked (narrower): the
 * sidebar renders in-flow above the content, capped to a readable width.
 *
 * Inline styles only. The media-query hook starts `false` on the server and the
 * first client render, so the stacked layout is what gets prerendered (in-flow,
 * crawlable links) and the first client render matches it — no hydration
 * mismatch — before flipping to the side-by-side layout on wide screens.
 *
 * Pass `sidebar={null}` (e.g. when there are no items) to render the content
 * full-width with no reserved column.
 */

import { useEffect, useState } from "react";

interface SidebarLayoutProps {
  /** The sidebar panel, or `null`/`false` to render the content full-width. */
  sidebar: React.ReactNode;
  children: React.ReactNode;
  /** Viewport width at which the sidebar moves into its own column. */
  sideBySideQuery?: string;
  /** Sidebar column width on wide screens. */
  sidebarWidth?: number;
  /** Gap between the content and the sidebar column. */
  gap?: number;
  /** Sticky offset from the viewport top; clears the site header. */
  offsetTop?: number;
  /** Max width of the stacked (narrow) sidebar so it stays readable. */
  stackedMaxWidth?: number;
}

/** Returns `false` on the server and first client render, then tracks `query`. */
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

export default function SidebarLayout({
  sidebar,
  children,
  sideBySideQuery = "(min-width: 1200px)",
  sidebarWidth = 200,
  gap = 28,
  offsetTop = 88,
  stackedMaxWidth = 360,
}: SidebarLayoutProps) {
  const sideBySide = useMediaQueryMatch(sideBySideQuery);

  if (!sidebar) return <>{children}</>;

  if (sideBySide) {
    return (
      <div style={{ display: "flex", alignItems: "flex-start", gap }}>
        <div style={{ flex: "1 1 0", minWidth: 0 }}>{children}</div>
        <aside style={{ position: "sticky", top: offsetTop, width: sidebarWidth, flexShrink: 0 }}>{sidebar}</aside>
      </div>
    );
  }

  return (
    <>
      <div style={{ marginBottom: "1.5rem", maxWidth: stackedMaxWidth }}>{sidebar}</div>
      {children}
    </>
  );
}
