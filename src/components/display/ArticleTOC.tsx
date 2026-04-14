/**
 * ArticleTOC — floating table-of-contents sidebar for long-form markdown articles.
 *
 * Consumes the same raw markdown passed to ReactMarkdown, extracts H2/H3 headings,
 * and renders a sticky outline with scrollspy-based active-section tracking. Pair
 * with `rehype-slug` on the markdown render path so heading IDs match the slugs
 * generated here (both use github-slugger).
 *
 * Opt in per-article via the `toc: true` frontmatter flag.
 */

import { useEffect, useMemo, useRef, useState } from "react";
import GithubSlugger from "github-slugger";
import type { Theme } from "../../types/theme.js";

export interface TOCHeading {
  /** 2 or 3 — h2 vs h3 nesting level */
  level: 2 | 3;
  /** Display text (markdown inline syntax stripped) */
  text: string;
  /** Slug ID matching rehype-slug's output */
  id: string;
}

export interface ArticleTOCProps {
  /** Raw markdown source (same string passed to ReactMarkdown) */
  markdown: string;
  theme: Theme;
  /** Sidebar heading label */
  title?: string;
  /** Don't render the TOC if fewer than this many headings are found */
  minHeadings?: number;
  /** Pixel offset from viewport top for the sticky position (clears site header) */
  offsetTop?: number;
  /** Pixel width of the sidebar panel on wide screens */
  width?: number;
  /** Media query that gates docked (wide) vs collapsible (narrow) layout */
  wideQuery?: string;
}

/**
 * Pure markdown → headings extractor. Exported for unit testing.
 * Skips fenced code blocks so `## ` inside ``` blocks isn't misread.
 */
export function extractTOCHeadings(markdown: string): TOCHeading[] {
  const slugger = new GithubSlugger();
  const out: TOCHeading[] = [];
  let inFence = false;
  let fenceChar = "";
  for (const line of markdown.split(/\r?\n/)) {
    const fenceMatch = line.match(/^(`{3,}|~{3,})/);
    if (fenceMatch) {
      if (!inFence) {
        inFence = true;
        fenceChar = fenceMatch[1][0];
      } else if (fenceMatch[1][0] === fenceChar) {
        inFence = false;
      }
      continue;
    }
    if (inFence) continue;
    const headingMatch = line.match(/^(#{2,3})\s+(.+?)\s*#*\s*$/);
    if (!headingMatch) continue;
    const level = headingMatch[1].length as 2 | 3;
    const text = stripInlineMarkdown(headingMatch[2]);
    if (!text) continue;
    out.push({ level, text, id: slugger.slug(text) });
  }
  return out;
}

/** Strip common inline markdown syntax so heading text reads cleanly. */
function stripInlineMarkdown(raw: string): string {
  return raw
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/_([^_]+)_/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .trim();
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

/** Track the currently-visible heading via IntersectionObserver. */
function useActiveHeading(ids: string[], offsetTop: number): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined" || ids.length === 0) return;
    const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        }
        if (visible.size > 0) {
          let topId: string | null = null;
          let topY = Infinity;
          for (const id of visible.keys()) {
            const rect = document.getElementById(id)?.getBoundingClientRect();
            if (rect && rect.top < topY) {
              topY = rect.top;
              topId = id;
            }
          }
          if (topId) setActiveId(topId);
        }
      },
      { rootMargin: `-${offsetTop}px 0px -60% 0px`, threshold: [0, 1] },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [ids, offsetTop]);
  return activeId;
}

export default function ArticleTOC({
  markdown,
  theme: t,
  title = "On this page",
  minHeadings = 3,
  offsetTop = 80,
  width = 220,
  wideQuery = "(min-width: 1200px)",
}: ArticleTOCProps) {
  const headings = useMemo(() => extractTOCHeadings(markdown), [markdown]);
  const isWide = useMediaQueryMatch(wideQuery);
  const [narrowOpen, setNarrowOpen] = useState(false);
  const headingIds = useMemo(() => headings.map((h) => h.id), [headings]);
  const activeId = useActiveHeading(headingIds, offsetTop);
  const panelRef = useRef<HTMLElement>(null);

  if (headings.length < minHeadings) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const top = el.getBoundingClientRect().top + window.scrollY - offsetTop;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
    if (!isWide) setNarrowOpen(false);
  };

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
    <nav aria-label={title} ref={panelRef} style={panelStyle}>
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
        {title}
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {headings.map((h) => {
          const isActive = h.id === activeId;
          return (
            <li
              key={h.id}
              style={{
                margin: "2px 0",
                paddingLeft: h.level === 3 ? 12 : 0,
              }}
            >
              <a
                href={`#${h.id}`}
                onClick={(e) => handleClick(e, h.id)}
                style={{
                  display: "block",
                  fontSize: h.level === 2 ? 12 : 11,
                  lineHeight: 1.45,
                  padding: "3px 6px",
                  borderLeft: `2px solid ${isActive ? t.descLinkColor : "transparent"}`,
                  color: isActive ? t.descLinkColor : t.descText,
                  textDecoration: "none",
                  fontWeight: isActive ? 600 : 400,
                  transition: "color 0.15s, border-color 0.15s",
                }}
              >
                {h.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );

  if (isWide) {
    return (
      <aside
        style={{
          position: "fixed",
          top: offsetTop,
          right: 24,
          width,
          zIndex: 20,
        }}
      >
        {list}
      </aside>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setNarrowOpen((open) => !open)}
        aria-expanded={narrowOpen}
        aria-label={narrowOpen ? "Close table of contents" : "Open table of contents"}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 21,
          padding: "10px 14px",
          borderRadius: 24,
          border: `1px solid ${t.panelBorder}`,
          background: t.panelBg,
          color: t.descLinkColor,
          fontSize: 12,
          fontFamily: "'JetBrains Mono','SF Mono','Fira Code', monospace",
          fontWeight: 600,
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        {narrowOpen ? "Close" : "Contents"}
      </button>
      {narrowOpen && (
        <aside
          style={{
            position: "fixed",
            bottom: 72,
            right: 24,
            left: 24,
            maxWidth: 360,
            marginLeft: "auto",
            zIndex: 20,
          }}
        >
          {list}
        </aside>
      )}
    </>
  );
}
