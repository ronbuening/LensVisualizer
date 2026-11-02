/**
 * UniversalDetailSheet — the universal map's selection details on phones.
 *
 * Below the map, a phone shows the overview and legend before any detail card, so a tapped node appeared to do
 * nothing. This fixed sheet keeps the selection in view instead, above the full-screen map overlay too. Collapsed it
 * is one short row (name, kind, counts, "Details", close) that leaves most of the map usable; expanded it holds the
 * page's existing detail card in a scrolling panel.
 */

import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent, type ReactNode, type RefObject } from "react";
import type { Theme } from "../../types/theme.js";
import {
  isUniversalCorporateEdge,
  type UniversalRelationshipGraph,
  type UniversalRelationshipNode,
} from "../../utils/catalog/universalRelationshipGraph.js";
import { pluralize } from "../../utils/text.js";
import { viewButton } from "./RelationshipViewShared.js";

/** Above the full-screen map overlay (z-index 1000), so a selection made there still shows its details. */
const SHEET_Z_INDEX = 1001;
/** Collapsed height without the safe-area inset. */
const COLLAPSED_HEIGHT = 62;
/** The collapsed sheet's screen height: an in-flow spacer reserves it at the page end, and full screen ends above it. */
export const DETAIL_SHEET_RESERVED_HEIGHT = `calc(${COLLAPSED_HEIGHT}px + env(safe-area-inset-bottom, 0px))`;

interface UniversalDetailSheetProps {
  graph: UniversalRelationshipGraph;
  node: UniversalRelationshipNode;
  theme: Theme;
  /** Clears the selection through the page's selection path. */
  onClose: () => void;
  /** Keyboard selection focuses this heading: the collapsed title, or the card's own heading once expanded. */
  headingRef?: RefObject<HTMLHeadingElement | null>;
  /** The full detail card, mounted only while the sheet is expanded. */
  children: ReactNode;
}

function counted(count: number, noun: string): string {
  return `${count} ${pluralize(count, noun)}`;
}

/** One line naming the node's kind and its key counts, e.g. "Patent · 1998 · 3 inventors · 2 lenses". */
export function universalNodeSummary(graph: UniversalRelationshipGraph, node: UniversalRelationshipNode): string {
  if (node.kind === "patent") {
    const { patent } = node;
    return [
      "Patent",
      patent.patentYear === undefined ? undefined : String(patent.patentYear),
      counted(patent.authors.length, "inventor"),
      counted(patent.lenses.length, "lens"),
    ]
      .filter((part) => part !== undefined)
      .join(" · ");
  }
  if (node.kind === "author") return `Inventor · ${counted(node.patentCount, "patent")}`;
  if (node.kind === "assignee") return `Assignee · ${counted(node.patentCount, "patent")}`;
  if (node.kind === "lens") return "Non-patent catalog model";
  if (node.kind === "maker") {
    // Catalog-maker edges run from each model to its maker.
    const models = graph.edges.filter((edge) => edge.kind === "catalog-maker" && edge.to === node.id).length;
    return `Catalog maker · ${counted(models, "model")}`;
  }
  const links = graph.edges.filter(
    (edge) => isUniversalCorporateEdge(edge.kind) && (edge.from === node.id || edge.to === node.id),
  ).length;
  return `${node.kind === "family" ? "Corporate family" : "Organization"} · ${counted(links, "corporate link")}`;
}

export default function UniversalDetailSheet({
  graph,
  node,
  theme: t,
  onClose,
  headingRef,
  children,
}: UniversalDetailSheetProps) {
  const titleId = useId();
  const bodyId = useId();
  const [expanded, setExpanded] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const summary = useMemo(() => universalNodeSummary(graph, node), [graph, node]);

  // Following a link inside the expanded card replaces it; start the new card at its top.
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
  }, [node.id]);

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== "Escape" || event.nativeEvent.isComposing) return;
    // Keep the key from also leaving the full-screen map, which listens beyond the sheet.
    event.stopPropagation();
    event.preventDefault();
    if (expanded) {
      setExpanded(false);
      toggleRef.current?.focus({ preventScroll: true });
    } else onClose();
  };

  return (
    <>
      <div aria-hidden="true" style={{ height: DETAIL_SHEET_RESERVED_HEIGHT }} />
      <section
        data-map-companion=""
        role={expanded ? "dialog" : "region"}
        aria-labelledby={titleId}
        onKeyDown={onKeyDown}
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: SHEET_Z_INDEX,
          display: "flex",
          flexDirection: "column",
          maxHeight: "70vh",
          boxSizing: "border-box",
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
          background: t.bg,
          color: t.body,
          borderTop: `1px solid ${t.panelBorder}`,
          borderRadius: "10px 10px 0 0",
          boxShadow: "0 -4px 16px rgba(0,0,0,0.25)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            flexShrink: 0,
            minHeight: COLLAPSED_HEIGHT - 1,
            boxSizing: "border-box",
            padding: "8px 12px",
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <h2
              id={titleId}
              ref={expanded ? undefined : headingRef}
              tabIndex={-1}
              style={{
                color: t.title,
                fontSize: "0.9rem",
                lineHeight: 1.3,
                margin: 0,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {node.name}
            </h2>
            <p
              style={{
                color: t.muted,
                fontSize: "0.7rem",
                lineHeight: 1.4,
                margin: "2px 0 0",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {summary}
            </p>
          </div>
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={expanded}
            aria-controls={expanded ? bodyId : undefined}
            onClick={() => setExpanded((current) => !current)}
            style={{ ...viewButton(t, expanded), flex: "0 0 auto", gap: 6 }}
          >
            Details
            <span aria-hidden="true" style={{ fontSize: 11, lineHeight: 1 }}>
              {expanded ? "▾" : "▴"}
            </span>
          </button>
          <button
            type="button"
            aria-label="Close details"
            onClick={onClose}
            style={{ ...viewButton(t), flex: "0 0 44px", padding: 0, fontSize: "1.1rem", lineHeight: 1 }}
          >
            ×
          </button>
        </div>
        {expanded && (
          <div
            ref={bodyRef}
            id={bodyId}
            style={{
              flex: "1 1 auto",
              minHeight: 0,
              overflowY: "auto",
              overscrollBehavior: "contain",
              padding: "0 12px 12px",
              borderTop: `1px solid ${t.panelDivider}`,
            }}
          >
            {children}
          </div>
        )}
      </section>
    </>
  );
}
