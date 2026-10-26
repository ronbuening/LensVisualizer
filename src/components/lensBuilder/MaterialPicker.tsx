/**
 * MaterialPicker — an element's material chip and its picker popover.
 *
 * The chip shows the glass name, nd, νd and vendor. The popover offers a name search with a row of common glasses, a
 * clickable glass map, and typed nd/νd for a custom material, each with nearest catalog matches. Escape closes it and
 * returns focus to the chip.
 */

import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { allEntries, type GlassEntry } from "../../optics/glassCatalog.js";
import type { BuilderMaterial } from "../../lensBuilder/elementModel.js";
import { commonGlasses, findGlass, nearestGlass, searchGlass } from "../../lensBuilder/glassSearch.js";
import type { Theme } from "../../types/theme.js";
import { toggleBtn, toggleGroup, VISUALLY_HIDDEN } from "../../utils/style/styles.js";
import DropdownPanel, { type DropdownPanelPos } from "../layout/DropdownPanel.js";
import { builderCaptionStyle, builderInputStyle } from "./CommitInput.js";
import GlassMap from "./GlassMap.js";
import { textButton } from "./trainShared.js";

interface MaterialPickerProps {
  /** Element name used in accessible names, for example "L2". */
  elementName: string;
  material: BuilderMaterial;
  theme: Theme;
  touch: boolean;
  invalid?: boolean;
  onPick: (material: BuilderMaterial) => void;
}

/* The popover is portaled to <body>, outside the page's monospace root. */
const MONO = "'JetBrains Mono','SF Mono','Fira Code',monospace";

const TABS = [
  { id: "search", text: "Search" },
  { id: "map", text: "Glass map" },
  { id: "custom", text: "Custom" },
] as const;
type TabId = (typeof TABS)[number]["id"];

/** Rounded for the chip; the draft keeps authored precision. */
function short(n: number | undefined, digits: number): string {
  return n === undefined ? "—" : String(Number(n.toFixed(digits)));
}

/** `name · vendor · nd / νd`, the result format shared by every list in the picker. */
export function glassLine(g: GlassEntry): string {
  return `${g.name} · ${g.vendor} · ${g.nd} / ${g.vd}`;
}

export default function MaterialPicker({
  elementName,
  material,
  theme: t,
  touch,
  invalid,
  onPick,
}: MaterialPickerProps) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<DropdownPanelPos | null>(null);
  const [tab, setTab] = useState<TabId>("search");
  const [query, setQuery] = useState("");
  const [customNd, setCustomNd] = useState("");
  const [customVd, setCustomVd] = useState("");
  const [customName, setCustomName] = useState("");
  const [customError, setCustomError] = useState("");
  const trigger = useRef<HTMLButtonElement>(null);
  const firstField = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const chipTextId = useId();
  const baseId = useId();
  const entry = useMemo(() => findGlass(material.glass, material.nd), [material.glass, material.nd]);
  const vendor = entry && Math.abs(entry.nd - material.nd) < 5e-4 ? entry.vendor : undefined;

  useEffect(() => {
    if (open && tab !== "map") firstField.current?.focus();
  }, [open, tab]);
  /* The popover is fixed to the viewport; scrolling the chip away would leave it pointing at nothing. Focusing the
     search field can fire a scroll event that moves nothing, so compare the chip's position instead. */
  useEffect(() => {
    if (!open) return;
    const anchor = trigger.current?.getBoundingClientRect().top ?? 0;
    const onScroll = (e: Event) => {
      if (panelRef.current?.contains(e.target as Node)) return;
      const top = trigger.current?.getBoundingClientRect().top ?? anchor;
      if (Math.abs(top - anchor) > 4) setOpen(false);
    };
    window.addEventListener("scroll", onScroll, true);
    return () => window.removeEventListener("scroll", onScroll, true);
  }, [open]);

  const close = () => {
    setOpen(false);
    trigger.current?.focus();
  };
  const pick = (next: BuilderMaterial) => {
    onPick(next);
    close();
  };
  const pickGlass = (g: GlassEntry) => pick({ glass: g.name, nd: g.nd, vd: g.vd });
  const toggle = () => {
    const rect = trigger.current?.getBoundingClientRect();
    if (!rect) return;
    const width = Math.min(380, window.innerWidth - 16);
    const maxHeight = Math.min(540, window.innerHeight - 16);
    const clampTop = (top: number) => Math.max(8, Math.min(top, window.innerHeight - maxHeight - 8));
    /* Beside the editor pane when there is room, so the element's card stays visible; otherwise below the chip,
       or above it when the chip sits low in the viewport. */
    if (rect.left - width - 12 >= 8)
      setPos({ width, maxHeight, left: rect.left - width - 12, top: clampTop(rect.top - 48) });
    else {
      const below = window.innerHeight - rect.bottom - 12;
      const above = rect.top - 12;
      const height = Math.min(maxHeight, Math.max(below, above));
      setPos({
        width,
        maxHeight: height,
        left: Math.max(8, Math.min(rect.left, window.innerWidth - width - 8)),
        top: below >= Math.min(height, 360) || below >= above ? rect.bottom + 4 : Math.max(8, rect.top - 4 - height),
      });
    }
    if (!open) {
      setQuery("");
      setCustomNd(String(material.nd));
      setCustomVd(material.vd === undefined ? "" : String(material.vd));
      setCustomName("");
      setCustomError("");
    }
    setOpen(!open);
  };
  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const delta = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    const to =
      e.key === "Home"
        ? 0
        : e.key === "End"
          ? TABS.length - 1
          : delta
            ? (index + delta + TABS.length) % TABS.length
            : -1;
    if (to < 0) return;
    e.preventDefault();
    setTab(TABS[to].id);
    tabRefs.current[to]?.focus();
  };

  const field = (extra?: CSSProperties): CSSProperties => ({ ...builderInputStyle(t, false, touch), ...extra });
  const smallButton: CSSProperties = { ...textButton(t, touch), minHeight: touch ? 32 : 24 };
  const results = (title: string, list: GlassEntry[], empty: string): ReactNode => (
    <div>
      <div style={{ ...builderCaptionStyle(t), textTransform: "none", letterSpacing: "0.04em", margin: "8px 0 4px" }}>
        {title}
      </div>
      <ul aria-label={title} style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 2 }}>
        {list.map((g) => {
          const isCurrent = g.name === material.glass && Math.abs(g.nd - material.nd) < 5e-4;
          return (
            <li key={`${g.vendor}-${g.name}`}>
              <button
                type="button"
                style={{
                  ...toggleBtn(t, isCurrent, { hasRightBorder: false, padding: "4px 8px" }),
                  width: "100%",
                  justifyContent: "space-between",
                  fontSize: 11,
                  letterSpacing: "0.02em",
                  borderRadius: 4,
                  minHeight: touch ? 34 : 24,
                  color: isCurrent ? t.toggleActiveText : t.selectorText,
                }}
                onClick={() => pickGlass(g)}
              >
                <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{glassLine(g)}</span>
                {isCurrent && <span style={{ fontSize: 9, letterSpacing: "0.08em" }}>CURRENT</span>}
              </button>
            </li>
          );
        })}
      </ul>
      {!list.length && <p style={{ margin: "4px 0", color: t.muted, fontSize: 11 }}>{empty}</p>}
    </div>
  );

  const searchPanel = (
    <>
      <input
        ref={tab === "search" ? firstField : undefined}
        type="search"
        aria-label={`Search glass for ${elementName}`}
        placeholder="Glass name, e.g. N-BK7"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={field()}
      />
      <div style={{ ...builderCaptionStyle(t), margin: "8px 0 4px" }}>Common glasses</div>
      <div role="group" aria-label="Common glasses" style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {commonGlasses().map((g) => (
          <button
            key={g.name}
            type="button"
            title={glassLine(g)}
            aria-label={`Use ${g.name} (${g.vendor}, nd ${g.nd}, νd ${g.vd})`}
            style={{ ...smallButton, color: g.name === material.glass ? t.toggleActiveText : t.selectorText }}
            onClick={() => pickGlass(g)}
          >
            {g.name}
          </button>
        ))}
      </div>
      {query.trim()
        ? results("Name matches", searchGlass(query, 12), "No glass matches that name")
        : results(
            `Nearest to nd ${material.nd} / νd ${material.vd ?? "—"}`,
            nearestGlass(material.nd, material.vd ?? 50, 8),
            "No catalog glasses",
          )}
    </>
  );

  const typedNd = Number(customNd);
  const typedVd = Number(customVd);
  const typedValid = customNd.trim() !== "" && Number.isFinite(typedNd) && typedNd > 1;
  const customPanel = (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!typedValid) return setCustomError("Enter an nd greater than 1");
        if (customVd.trim() && !(Number.isFinite(typedVd) && typedVd > 0))
          return setCustomError("Enter a positive νd, or leave it blank");
        pick({
          nd: typedNd,
          ...(customVd.trim() ? { vd: typedVd } : {}),
          ...(customName.trim() ? { glass: customName.trim() } : {}),
        });
      }}
      style={{ display: "grid", gap: 6 }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
        {[
          { caption: "nd", value: customNd, set: setCustomNd, name: `Custom nd for ${elementName}` },
          { caption: "νd", value: customVd, set: setCustomVd, name: `Custom vd for ${elementName}` },
        ].map(({ caption, value, set, name }, i) => (
          <label key={caption} style={{ display: "grid", gap: 2 }}>
            <span style={builderCaptionStyle(t)}>{caption}</span>
            <input
              ref={i === 0 && tab === "custom" ? firstField : undefined}
              aria-label={name}
              inputMode="decimal"
              value={value}
              onChange={(e) => {
                set(e.target.value);
                setCustomError("");
              }}
              style={field()}
            />
          </label>
        ))}
      </div>
      <label style={{ display: "grid", gap: 2 }}>
        <span style={builderCaptionStyle(t)}>Name (optional)</span>
        <input
          aria-label={`Custom glass name for ${elementName}`}
          value={customName}
          placeholder="e.g. patent glass 1.7234/38.0"
          onChange={(e) => setCustomName(e.target.value)}
          style={field()}
        />
      </label>
      {customError && (
        <p role="alert" style={{ margin: 0, color: t.error, fontSize: 11 }}>
          {customError}
        </p>
      )}
      <div>
        <button type="submit" style={smallButton}>
          Use custom nd/νd
        </button>
      </div>
      {typedValid &&
        results(
          `Nearest matches to nd ${typedNd}${customVd.trim() ? ` / νd ${typedVd}` : ""}`,
          nearestGlass(typedNd, customVd.trim() && Number.isFinite(typedVd) ? typedVd : 50, 6),
          "No catalog glasses",
        )}
    </form>
  );

  const chipText = (
    <span
      id={chipTextId}
      style={{ display: "flex", alignItems: "baseline", gap: 6, minWidth: 0, flex: 1, overflow: "hidden" }}
    >
      {/* The indices never shrink; a long descriptive glass name gives way first, after the vendor. */}
      <span
        style={{
          color: t.title,
          fontWeight: 600,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          flex: "0 3 auto",
          minWidth: "5ch",
        }}
      >
        {material.glass ?? "Custom"}
      </span>
      <span style={{ color: t.body, whiteSpace: "nowrap", flex: "none" }}>
        {short(material.nd, 5)} · {short(material.vd, 2)}
      </span>
      {/* Phones have room for the name and indices only; the picker and the tooltip still name the vendor. */}
      {vendor && !touch && (
        <span
          style={{
            color: t.muted,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontSize: "0.92em",
            minWidth: 0,
            flex: "0 6 auto",
          }}
        >
          {vendor}
        </span>
      )}
    </span>
  );

  return (
    <>
      <button
        ref={trigger}
        type="button"
        aria-label={`${elementName} material`}
        aria-describedby={chipTextId}
        aria-expanded={open}
        aria-haspopup="dialog"
        title={`Material: ${material.glass ?? "custom"}${vendor ? ` (${vendor})` : ""}, nd ${material.nd}, νd ${material.vd ?? "unset"}. Click to change.`}
        onClick={toggle}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          width: "100%",
          minWidth: 0,
          boxSizing: "border-box",
          padding: touch ? "6px 8px" : "3px 7px",
          minHeight: touch ? 36 : 24,
          background: t.selectorBg,
          border: `1px solid ${invalid ? t.error : open ? t.sliderAccent : t.selectorBorder}`,
          borderRadius: 12,
          cursor: "pointer",
          font: "inherit",
          fontSize: touch ? 13 : "0.75rem",
          textAlign: "left",
          color: t.selectorText,
        }}
      >
        {chipText}
        <span aria-hidden style={{ color: t.muted, fontSize: 9 }}>
          ▾
        </span>
      </button>
      <DropdownPanel open={open} pos={pos} triggerRef={trigger} onClose={() => setOpen(false)} theme={t}>
        <div
          ref={panelRef}
          role="dialog"
          aria-label={`Choose material for ${elementName}`}
          style={{ padding: 10, color: t.body, fontSize: 12, fontFamily: MONO }}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              e.stopPropagation();
              close();
            }
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <span style={{ ...builderCaptionStyle(t), flex: 1 }}>Material for {elementName}</span>
            <button type="button" aria-label="Close material picker" style={smallButton} onClick={close}>
              ✕
            </button>
          </div>
          <div role="tablist" aria-label="Ways to choose a material" style={{ ...toggleGroup(t), marginBottom: 8 }}>
            {TABS.map(({ id, text }, i) => (
              <button
                key={id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`${baseId}-tab-${id}`}
                aria-selected={tab === id}
                aria-controls={`${baseId}-panel-${id}`}
                tabIndex={tab === id ? 0 : -1}
                onKeyDown={(e) => onTabKey(e, i)}
                onClick={() => setTab(id)}
                style={{
                  ...toggleBtn(t, tab === id, { hasRightBorder: i < TABS.length - 1, padding: "4px 6px" }),
                  fontSize: 10,
                  minHeight: touch ? 34 : 26,
                }}
              >
                {text}
              </button>
            ))}
          </div>
          <div role="tabpanel" id={`${baseId}-panel-${tab}`} aria-labelledby={`${baseId}-tab-${tab}`}>
            {tab === "search" && searchPanel}
            {tab === "map" && (
              <GlassMap
                glasses={allEntries()}
                current={material}
                theme={t}
                label={elementName}
                touch={touch}
                onPick={pickGlass}
              />
            )}
            {tab === "custom" && customPanel}
          </div>
          <span style={VISUALLY_HIDDEN}>Escape closes the picker.</span>
        </div>
      </DropdownPanel>
    </>
  );
}
