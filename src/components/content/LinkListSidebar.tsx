/**
 * LinkListSidebar — a small navigational panel listing related pages as links.
 *
 * Reuses the article table-of-contents panel format (`ArticleTOC`): a bordered panel with an
 * uppercase heading and a list of links with a left-border hover indicator. Items whose `to` starts
 * with `#` are in-page anchors (smooth-scroll to the matching element id); all other `to` values are
 * router paths. An item may instead contain child links, in which case it renders as an accessible
 * expand/collapse button. Used for the maker→mounts and mount→makers cross-links and the lens-library
 * group-navigation sidebar.
 *
 * This component renders only the panel; placement (sticky column on wide screens vs. stacked above
 * the content on narrow ones) is owned by `SidebarLayout`. The panel and its links render in-flow and
 * are crawlable in the prerendered HTML. Returns `null` when there are no items.
 */

import { useState } from "react";
import { Link } from "react-router";
import type { Theme } from "../../types/theme.js";
import { canonicalPagePath } from "../../utils/seo/siteUrls.js";

export interface LinkListSidebarItem {
  /** Stable React key + hover id. */
  id: string;
  label: string;
  /** Router path (e.g. `/mounts/nikon-f`) or in-page anchor (e.g. `#group-maker-nikon`). */
  to?: string;
  /** Optional second-level links revealed by clicking this item's expand/collapse button. */
  children?: LinkListSidebarItem[];
}

interface LinkListSidebarProps {
  /** Uppercase panel heading, e.g. "Mounts" or "Makers". */
  title: string;
  items: LinkListSidebarItem[];
  theme: Theme;
  /** Accessible label for the nav region (defaults to `title`). */
  ariaLabel?: string;
  /** Pixel offset from the viewport top used when smooth-scrolling to an `#anchor` item. */
  offsetTop?: number;
}

export default function LinkListSidebar({ title, items, theme: t, ariaLabel, offsetTop = 88 }: LinkListSidebarProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set());

  if (items.length === 0) return null;

  const toggleExpanded = (id: string) => {
    setExpanded((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // In-page `#anchor` items smooth-scroll to the target id (offset to clear the header); route items use Link.
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    const el = typeof document !== "undefined" ? document.getElementById(to.slice(1)) : null;
    if (!el) return;
    e.preventDefault();
    const top = el.getBoundingClientRect().top + window.scrollY - offsetTop;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", to);
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

  return (
    <nav aria-label={ariaLabel ?? title} style={panelStyle}>
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
        {items.map((item) => {
          const active = hovered === item.id;
          const hasChildren = (item.children?.length ?? 0) > 0;
          const isExpanded = expanded.has(item.id);
          const itemTo = item.to;
          const isAnchor = itemTo?.startsWith("#") ?? false;
          const linkStyle: React.CSSProperties = {
            display: "block",
            fontSize: 12,
            lineHeight: 1.45,
            padding: "3px 6px",
            borderLeft: `2px solid ${active ? t.descLinkColor : "transparent"}`,
            color: active ? t.descLinkColor : t.descText,
            textDecoration: "none",
            fontWeight: active ? 600 : 400,
            transition: "color 0.15s, border-color 0.15s",
          };
          const hoverHandlers = {
            onMouseEnter: () => setHovered(item.id),
            onMouseLeave: () => setHovered(null),
          };
          return (
            <li key={item.id} style={{ margin: "2px 0" }}>
              {hasChildren ? (
                <>
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={`sidebar-children-${item.id}`}
                    onClick={() => toggleExpanded(item.id)}
                    style={{
                      ...linkStyle,
                      width: "100%",
                      background: "transparent",
                      borderTop: "none",
                      borderRight: "none",
                      borderBottom: "none",
                      textAlign: "left",
                      cursor: "pointer",
                      fontFamily: "inherit",
                    }}
                    {...hoverHandlers}
                  >
                    <span aria-hidden="true" style={{ display: "inline-block", width: 14 }}>
                      {isExpanded ? "▾" : "▸"}
                    </span>
                    {item.label}
                  </button>
                  <ul
                    id={`sidebar-children-${item.id}`}
                    hidden={!isExpanded}
                    style={{ listStyle: "none", padding: 0, margin: "2px 0 5px" }}
                  >
                    {item.children?.map((child) => {
                      const childTo = child.to;
                      if (!childTo) return null;
                      const childActive = hovered === child.id;
                      const childStyle: React.CSSProperties = {
                        display: "block",
                        fontSize: 11,
                        lineHeight: 1.4,
                        padding: "3px 6px 3px 20px",
                        borderLeft: `2px solid ${childActive ? t.descLinkColor : "transparent"}`,
                        color: childActive ? t.descLinkColor : t.descText,
                        textDecoration: "none",
                        transition: "color 0.15s, border-color 0.15s",
                      };
                      const childHoverHandlers = {
                        onMouseEnter: () => setHovered(child.id),
                        onMouseLeave: () => setHovered(null),
                      };
                      return (
                        <li key={child.id} style={{ margin: "1px 0" }}>
                          {childTo.startsWith("#") ? (
                            <a
                              href={childTo}
                              onClick={(e) => handleAnchorClick(e, childTo)}
                              style={childStyle}
                              {...childHoverHandlers}
                            >
                              {child.label}
                            </a>
                          ) : (
                            <Link to={canonicalPagePath(childTo)} style={childStyle} {...childHoverHandlers}>
                              {child.label}
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </>
              ) : isAnchor && itemTo ? (
                <a href={itemTo} onClick={(e) => handleAnchorClick(e, itemTo)} style={linkStyle} {...hoverHandlers}>
                  {item.label}
                </a>
              ) : itemTo ? (
                <Link to={canonicalPagePath(itemTo)} style={linkStyle} {...hoverHandlers}>
                  {item.label}
                </Link>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
