import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { Theme } from "../../types/theme.js";
import type {
  UniversalRelationshipGraph,
  UniversalRelationshipNode,
} from "../../utils/catalog/universalRelationshipGraph.js";
import { buildUniversalSearchIndex, searchUniversalNodes } from "../../utils/catalog/universalRelationshipSearch.js";
import { searchInput } from "../../utils/style/styles.js";
import DropdownPanel, { type DropdownPanelPos } from "../layout/DropdownPanel.js";

interface UniversalMapSearchProps {
  graph: UniversalRelationshipGraph;
  theme: Theme;
  onSelectNode: (nodeId: string) => void;
}

function resultDescription(node: UniversalRelationshipNode): string {
  if (node.kind === "author" || node.kind === "assignee") {
    return `${node.kind === "author" ? "Inventor" : "Assignee"} · ${node.patentCount} patents`;
  }
  if (node.kind === "patent")
    return `Patent${node.patent.patentYear === undefined ? "" : ` · ${node.patent.patentYear}`}`;
  return node.kind === "family" ? "Corporate family" : "Organization";
}

export default function UniversalMapSearch({ graph, theme: t, onSelectNode }: UniversalMapSearchProps) {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pos, setPos] = useState<DropdownPanelPos | null>(null);
  const index = useMemo(() => buildUniversalSearchIndex(graph.nodes), [graph.nodes]);
  const matches = useMemo(() => searchUniversalNodes(index, query), [index, query]);
  const shown = matches.slice(0, 8);
  const visible = open && query.trim().length > 0;

  useEffect(() => {
    if (!visible) return;
    const position = () => {
      const rect = inputRef.current?.getBoundingClientRect();
      if (!rect) return;
      const viewport = window.visualViewport;
      const bottom = (viewport?.offsetTop ?? 0) + (viewport?.height ?? window.innerHeight);
      setPos({
        top: rect.bottom + 4,
        left: rect.left,
        width: rect.width,
        maxHeight: Math.max(0, Math.min(320, bottom - rect.bottom - 12)),
      });
    };
    position();
    window.addEventListener("resize", position);
    window.addEventListener("scroll", position, true);
    window.visualViewport?.addEventListener("resize", position);
    return () => {
      window.removeEventListener("resize", position);
      window.removeEventListener("scroll", position, true);
      window.visualViewport?.removeEventListener("resize", position);
    };
  }, [visible]);

  useEffect(() => {
    const option = panelRef.current?.querySelector<HTMLElement>(`[data-result-index="${activeIndex}"]`);
    if (option && panelRef.current) {
      const panel = panelRef.current;
      if (option.offsetTop < panel.scrollTop) panel.scrollTop = option.offsetTop;
      else if (option.offsetTop + option.offsetHeight > panel.scrollTop + panel.clientHeight) {
        panel.scrollTop = option.offsetTop + option.offsetHeight - panel.clientHeight;
      }
    }
  }, [activeIndex, pos]);

  const select = (node: UniversalRelationshipNode) => {
    setOpen(false);
    setQuery("");
    onSelectNode(node.id);
    inputRef.current?.focus({ preventScroll: true });
  };

  return (
    <div role="search" aria-label="Universal map search" style={{ marginBottom: "0.8rem" }}>
      <label htmlFor={id} style={{ display: "block", color: t.label, fontSize: "0.75rem", marginBottom: 6 }}>
        Search the map
      </label>
      <input
        ref={inputRef}
        id={id}
        type="search"
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={visible}
        aria-controls={visible ? `${id}-results` : undefined}
        aria-activedescendant={visible && shown[activeIndex] ? `${id}-result-${activeIndex}` : undefined}
        autoComplete="off"
        placeholder="Entity, inventor, or patent number"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
          setActiveIndex(0);
          setOpen(true);
        }}
        onFocus={() => {
          if (query.trim()) setOpen(true);
        }}
        onBlur={() => setOpen(false)}
        onKeyDown={(event) => {
          if (event.nativeEvent.isComposing) return;
          if (event.key === "Enter") {
            event.preventDefault();
            if (visible && shown[activeIndex]) select(shown[activeIndex]);
          } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            setOpen(true);
            setActiveIndex((current) =>
              Math.max(0, Math.min(shown.length - 1, current + (event.key === "ArrowDown" ? 1 : -1))),
            );
          } else if (event.key === "Escape" || event.key === "Tab") setOpen(false);
        }}
        style={{ ...searchInput(t), width: "100%", boxSizing: "border-box", outlineColor: t.sliderAccent }}
      />
      <DropdownPanel
        ref={panelRef}
        open={visible}
        pos={pos}
        triggerRef={inputRef}
        onClose={() => setOpen(false)}
        theme={t}
      >
        <div id={`${id}-results`} role="listbox" aria-label="Map search results">
          {shown.map((node, i) => (
            <div
              key={node.id}
              id={`${id}-result-${i}`}
              data-result-index={i}
              role="option"
              aria-selected={i === activeIndex}
              onMouseDown={(event) => event.preventDefault()}
              onPointerDown={(event) => {
                if (event.pointerType === "touch") event.preventDefault();
              }}
              onClick={() => select(node)}
              onMouseEnter={() => setActiveIndex(i)}
              style={{
                padding: "0.65rem 0.75rem",
                cursor: "pointer",
                background: i === activeIndex ? t.toggleActiveBg : undefined,
                color: t.body,
                fontSize: "0.8rem",
              }}
            >
              <span style={{ display: "block", overflowWrap: "anywhere" }}>{node.name}</span>
              <span style={{ display: "block", color: t.label, fontSize: "0.7rem", marginTop: 3 }}>
                {resultDescription(node)}
              </span>
            </div>
          ))}
        </div>
        <div role="status" style={{ padding: "0.5rem 0.75rem", color: t.muted, fontSize: "0.7rem" }}>
          {matches.length === 0
            ? "No matches"
            : matches.length > 8
              ? `Showing 8 of ${matches.length}—refine your search`
              : `${matches.length} results`}
        </div>
      </DropdownPanel>
    </div>
  );
}
