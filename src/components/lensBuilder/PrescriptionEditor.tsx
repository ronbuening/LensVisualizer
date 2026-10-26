import { Fragment, useEffect, useRef, useState, type CSSProperties } from "react";
import type { LensDataV2Input, SurfaceV2Input, ElementV2Input } from "../../types/lensDataV2.js";
import type { Theme } from "../../types/theme.js";
import { ASPHERIC_COEFFICIENT_SCHEMA } from "../../types/asphericSchema.js";
import {
  setSurfaceField,
  setElementField,
  insertElement,
  insertAirSurface,
  deleteSurface,
  reorderSurface,
  moveStop,
} from "../../lensBuilder/draft.js";
import { toggleBtn, VISUALLY_HIDDEN } from "../../utils/style/styles.js";
import CommitInput, { builderCaptionStyle, builderInputStyle } from "./CommitInput.js";
import GlassPicker from "./GlassPicker.js";

interface PrescriptionEditorProps {
  draft: LensDataV2Input;
  theme: Theme;
  /** Pane background, repeated on the sticky surface column so scrolled cells pass beneath it. */
  background: string;
  onChange: (draft: LensDataV2Input) => void;
  onAction: (action: () => void) => void;
  issues: string[];
}

/* Fixed column widths (px) sum to the table's minimum width; the table widens to fill wider panes and scrolls
   horizontally, with the surface column pinned, in narrower ones. */
const COLUMNS = [
  { head: "Surf", title: "Surface label. ▸ opens the medium and asphere editor.", width: 52 },
  { head: "R", title: "Radius of curvature, mm. Blank or ∞ is flat.", width: 66 },
  { head: "d", title: "Axial spacing after the surface, mm.", width: 56 },
  { head: "nd", title: "Index of the medium after the surface.", width: 64 },
  { head: "νd", title: "Abbe number of the medium after the surface.", width: 48 },
  { head: "SD", title: "Semi-diameter, mm.", width: 48 },
  { head: "Actions", title: "Row actions", width: 113 },
] as const;
const CELL_PADDING = "2px 1px";
/* With the pane's 12 px gutters this fits the 35% editor pane from about 1360 px wide; narrower panes scroll. */
const MIN_TABLE_WIDTH = COLUMNS.reduce((sum, c) => sum + c.width, 0) + COLUMNS.length * 2;

const ACTIONS = [
  { text: "Insert element after", icon: "⊕", hint: "Insert a glass element into the air space after this surface" },
  { text: "Insert air after", icon: "+", hint: "Insert a flat air surface into the space after this surface" },
  { text: "Move up", icon: "↑", hint: "Move this surface, or its whole element, up" },
  { text: "Move down", icon: "↓", hint: "Move this surface, or its whole element, down" },
  { text: "Set stop", icon: "◎", hint: "Make this flat air surface the aperture stop" },
  { text: "Delete", icon: "✕", hint: "Delete this air surface, or the whole element at a glass boundary" },
] as const;

function iconButton(t: Theme, disabled: boolean): CSSProperties {
  return {
    ...toggleBtn(t, false, { hasRightBorder: false, padding: "0", flex: 0 }),
    flex: "0 0 18px",
    width: 18,
    height: 20,
    minHeight: 20,
    border: `1px solid ${t.toggleBorder}`,
    borderRadius: 3,
    fontSize: 11,
    letterSpacing: 0,
    opacity: disabled ? 0.35 : 1,
    cursor: disabled ? "default" : "pointer",
  };
}

export default function PrescriptionEditor({
  draft,
  theme: t,
  background,
  onChange,
  onAction,
  issues,
}: PrescriptionEditorProps) {
  const [open, setOpen] = useState<ReadonlySet<number>>(() => new Set());
  const scroller = useRef<HTMLDivElement>(null);
  const [visibleWidth, setVisibleWidth] = useState<number | undefined>();
  const [moreRight, setMoreRight] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  /* Narrow panes scroll the table sideways; the visible width keeps expanded rows in view and drives the fade cue. */
  const measure = () => {
    const el = scroller.current;
    if (!el) return;
    setVisibleWidth(el.clientWidth);
    setMoreRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    setScrolled(el.scrollLeft > 0);
  };
  useEffect(() => {
    const el = scroller.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const toggle = (index: number) =>
    setOpen((previous) => {
      const next = new Set(previous);
      if (!next.delete(index)) next.add(index);
      return next;
    });
  /* Once cells pass beneath the pinned surface column, a rule marks its edge. */
  const edge = scrolled ? `1px 0 0 ${t.panelBorder}` : "";
  const sticky: CSSProperties = { position: "sticky", left: 0, zIndex: 1, background, boxShadow: edge || undefined };
  const muted: CSSProperties = { display: "inline-block", color: t.muted, fontSize: 11, padding: "4px 0 0 5px" };
  const run = (op: () => LensDataV2Input) => onAction(() => onChange(op()));

  return (
    <>
      <section aria-label="Prescription">
        <h2 style={sectionTitle(t)}>Prescription</h2>
        <div style={{ position: "relative" }}>
          <div ref={scroller} onScroll={measure} style={{ overflowX: "auto" }}>
            <table
              style={{
                borderCollapse: "separate",
                borderSpacing: 0,
                tableLayout: "fixed",
                width: "100%",
                minWidth: MIN_TABLE_WIDTH,
                fontSize: "0.75rem",
              }}
            >
              <colgroup>
                {COLUMNS.map((c) => (
                  <col key={c.head} style={{ width: c.width }} />
                ))}
              </colgroup>
              <thead>
                <tr>
                  {COLUMNS.map((c, i) => (
                    <th
                      key={c.head}
                      scope="col"
                      title={c.title}
                      style={{
                        ...builderCaptionStyle(t),
                        ...(i === 0 ? sticky : {}),
                        textAlign: "left",
                        fontWeight: 600,
                        padding: "2px 2px 4px 6px",
                        borderBottom: `1px solid ${t.panelBorder}`,
                        textTransform: "none",
                        fontSize: 10,
                      }}
                    >
                      {c.head === "Actions" ? <span style={VISUALLY_HIDDEN}>Actions</span> : c.head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {draft.surfaces.map((surface, index) => {
                  const element = draft.elements.find((e) => e.id === surface.medium);
                  const medium =
                    typeof surface.medium === "string" ? draft.media?.find((m) => m.id === surface.medium) : undefined;
                  const sf = <K extends keyof SurfaceV2Input>(field: K, value: SurfaceV2Input[K]) =>
                    onChange(setSurfaceField(draft, index, field, value));
                  const ef = <K extends keyof ElementV2Input>(field: K, value: ElementV2Input[K]) => {
                    if (element) onChange(setElementField(draft, element.id, field, value));
                  };
                  const label = surface.label;
                  const isStop = label === "STO";
                  const gap = draft.gaps?.[label];
                  const rowInvalid = issues.some(
                    (issue) =>
                      issue.includes(`surfaces[${index}]`) ||
                      (element && issue.includes(`elements[${draft.elements.indexOf(element)}]`)),
                  );
                  const input = (
                    field: string,
                    value: string | number,
                    commit: (s: string) => void,
                    options: { numeric?: boolean; optional?: boolean; title?: string } = {},
                  ) => (
                    <CommitInput
                      label={`${label} ${field}`}
                      labelMode="hidden"
                      value={value}
                      theme={t}
                      onCommit={commit}
                      numeric={options.numeric ?? true}
                      optional={options.optional}
                      invalid={rowInvalid}
                      flat={field === "R"}
                      title={options.title}
                    />
                  );
                  const expanded = open.has(index);
                  const detailsId = `builder-surface-${index}-details`;
                  const disabled = [false, false, index === 0, index === draft.surfaces.length - 1, isStop, false];
                  const cell: CSSProperties = {
                    padding: CELL_PADDING,
                    verticalAlign: "top",
                    borderTop: index > 0 ? `1px solid ${t.panelDivider}` : undefined,
                  };
                  return (
                    <Fragment key={index}>
                      <tr>
                        <td
                          style={{
                            ...cell,
                            ...sticky,
                            boxShadow:
                              [isStop ? `inset 2px 0 0 ${t.stop}` : "", edge].filter(Boolean).join(", ") || undefined,
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: 2, position: "relative" }}>
                            <button
                              type="button"
                              aria-expanded={expanded}
                              aria-controls={expanded ? detailsId : undefined}
                              aria-label={`Medium and asphere for ${label}`}
                              title="Medium and asphere"
                              onClick={() => toggle(index)}
                              style={{
                                flex: "0 0 14px",
                                width: 14,
                                padding: 0,
                                border: "none",
                                background: "none",
                                color: surface.asphere ? t.asphLabel : t.muted,
                                cursor: "pointer",
                                font: "inherit",
                                fontSize: 10,
                              }}
                            >
                              {expanded ? "▾" : "▸"}
                            </button>
                            {input("label", label, (s) => sf("label", s), { numeric: false })}
                            {surface.asphere && (
                              <span
                                aria-hidden
                                title="Aspheric surface"
                                style={{ position: "absolute", right: 2, top: -1, color: t.asphLabel, fontSize: 10 }}
                              >
                                *
                              </span>
                            )}
                          </div>
                        </td>
                        <td style={cell}>
                          {input(
                            "R",
                            surface.R === "flat" ? "∞" : surface.R,
                            (s) => sf("R", ["", "∞", "flat"].includes(s.trim()) ? "flat" : Number(s)),
                            { title: "Blank or ∞ for flat" },
                          )}
                        </td>
                        <td style={cell}>
                          {gap ? (
                            <span
                              title={`Variable spacing gaps["${label}"]; edit its schedule in Advanced JSON`}
                              style={{ ...muted, textDecoration: "underline dotted" }}
                            >
                              {gap.label || "var"}
                              <span style={VISUALLY_HIDDEN}> (variable spacing, edit in Advanced JSON)</span>
                            </span>
                          ) : (
                            input("thickness", surface.d ?? "", (s) => sf("d", Number(s)))
                          )}
                        </td>
                        <td style={cell}>
                          {element ? (
                            input("nd", element.nd, (s) => ef("nd", Number(s)), {
                              title: `${element.name}${element.glass ? ` · ${element.glass}` : ""}`,
                            })
                          ) : (
                            <span style={muted}>{medium ? `${medium.name ?? medium.id} ${medium.nd}` : "air"}</span>
                          )}
                        </td>
                        <td style={cell}>
                          {element &&
                            input("vd", element.vd ?? "", (s) => ef("vd", s.trim() === "" ? undefined : Number(s)), {
                              optional: true,
                            })}
                        </td>
                        <td style={cell}>
                          {isStop && surface.sd === undefined ? (
                            <span title="Derived from the f-number" style={muted}>
                              auto
                            </span>
                          ) : (
                            input("sd", surface.sd ?? "", (s) => sf("sd", Number(s)))
                          )}
                        </td>
                        <td style={cell}>
                          <div style={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
                            {ACTIONS.map((a, i) => (
                              <button
                                key={a.text}
                                type="button"
                                aria-label={`${a.text} ${label}`}
                                title={a.hint}
                                disabled={disabled[i]}
                                style={iconButton(t, disabled[i])}
                                onClick={() =>
                                  run(() =>
                                    [
                                      () => insertElement(draft, index),
                                      () => insertAirSurface(draft, index),
                                      () => reorderSurface(draft, index, -1),
                                      () => reorderSurface(draft, index, 1),
                                      () => moveStop(draft, index),
                                      () => deleteSurface(draft, index),
                                    ][i](),
                                  )
                                }
                              >
                                {a.icon}
                              </button>
                            ))}
                          </div>
                        </td>
                      </tr>
                      {expanded && (
                        <tr id={detailsId}>
                          <td colSpan={COLUMNS.length} style={{ padding: 0 }}>
                            <div
                              style={{
                                position: "sticky",
                                left: 0,
                                /* Stay clear of the scroll fade so right-hand inputs are not dimmed. */
                                width: visibleWidth === undefined ? undefined : visibleWidth - (moreRight ? 24 : 0),
                                boxSizing: "border-box",
                                padding: "6px 6px 10px 18px",
                                display: "grid",
                                gap: 8,
                              }}
                            >
                              <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <span style={builderCaptionStyle(t)}>Medium after</span>
                                <select
                                  aria-label={`Medium after ${label}`}
                                  value={surface.medium ?? ""}
                                  style={{ ...builderInputStyle(t), width: "auto", maxWidth: "100%" }}
                                  onChange={(e) =>
                                    onAction(() =>
                                      sf(
                                        "medium",
                                        e.target.value === ""
                                          ? undefined
                                          : e.target.selectedOptions[0].dataset.kind === "element"
                                            ? Number(e.target.value)
                                            : e.target.value,
                                      ),
                                    )
                                  }
                                >
                                  <option value="">Air</option>
                                  {draft.elements.map((e) => (
                                    <option key={e.id} data-kind="element" value={e.id}>
                                      {e.name} · {e.glass ?? e.nd}
                                    </option>
                                  ))}
                                  {draft.media?.map((m) => (
                                    <option key={m.id} value={m.id}>
                                      {m.name ?? m.id}
                                    </option>
                                  ))}
                                </select>
                              </label>
                              {(["even", "odd"] as const).map((parity) => {
                                const terms = ASPHERIC_COEFFICIENT_SCHEMA.filter((d) => d.parity === parity);
                                const grid = (
                                  <div
                                    role="group"
                                    aria-label={`Asphere ${label} ${parity === "even" ? "conic and even" : "odd"} terms`}
                                    style={{
                                      display: "grid",
                                      gridTemplateColumns: "repeat(auto-fill, minmax(84px, 1fr))",
                                      gap: 6,
                                    }}
                                  >
                                    {terms.map(({ key }) => (
                                      <CommitInput
                                        key={key}
                                        label={`${label} ${key}`}
                                        caption={key}
                                        value={surface.asphere?.[key] ?? ""}
                                        theme={t}
                                        numeric
                                        optional
                                        onCommit={(s) => {
                                          const next = { ...surface.asphere };
                                          if (s.trim() === "") delete next[key];
                                          else next[key] = Number(s);
                                          sf("asphere", Object.keys(next).length ? next : undefined);
                                        }}
                                      />
                                    ))}
                                  </div>
                                );
                                if (parity === "even") return <Fragment key={parity}>{grid}</Fragment>;
                                /* Odd orders are rare in patents; keep them folded unless the surface uses one. */
                                return (
                                  <details
                                    key={parity}
                                    open={terms.some(({ key }) => surface.asphere?.[key] !== undefined)}
                                  >
                                    <summary style={{ ...builderCaptionStyle(t), cursor: "pointer", marginBottom: 6 }}>
                                      Odd-order terms
                                    </summary>
                                    {grid}
                                  </details>
                                );
                              })}
                              {surface.asphere && (
                                <div>
                                  <button
                                    type="button"
                                    aria-label={`Remove asphere ${label}`}
                                    style={{ ...toggleBtn(t, false, { hasRightBorder: false }), borderRadius: 4 }}
                                    onClick={() => run(() => setSurfaceField(draft, index, "asphere", undefined))}
                                  >
                                    Remove asphere
                                  </button>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
          {moreRight && (
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                width: 24,
                pointerEvents: "none",
                background: `linear-gradient(to right, transparent, ${background})`,
              }}
            />
          )}
        </div>
        <p style={{ margin: "6px 0 0", color: t.muted, fontSize: 10, lineHeight: 1.5 }}>
          {moreRight && "Scroll the table sideways for row actions. "}mm · d and nd/νd describe the space after each
          surface · ▸ medium &amp; asphere · ⊕ element after · + air after · ↑↓ move · ◎ set stop · ✕ delete
        </p>
      </section>
      <section aria-label="Elements" style={{ marginTop: 18 }}>
        <h2 style={sectionTitle(t)}>Elements</h2>
        <table
          style={{
            borderCollapse: "separate",
            borderSpacing: 0,
            tableLayout: "fixed",
            width: "100%",
            fontSize: "0.75rem",
          }}
        >
          <colgroup>
            <col style={{ width: 52 }} />
            <col />
            <col style={{ width: "32%" }} />
            <col style={{ width: 50 }} />
          </colgroup>
          <thead>
            <tr>
              {["Name", "Description", "Glass", ""].map((head) => (
                <th
                  key={head}
                  scope="col"
                  style={{
                    ...builderCaptionStyle(t),
                    textTransform: "none",
                    fontSize: 10,
                    fontWeight: 600,
                    textAlign: "left",
                    padding: "2px 2px 4px 6px",
                    borderBottom: `1px solid ${t.panelBorder}`,
                  }}
                >
                  {head || <span style={VISUALLY_HIDDEN}>Glass search</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {draft.elements.map((e, i) => (
              <tr key={e.id}>
                {(["name", "label", "glass"] as const).map((field) => (
                  <td
                    key={field}
                    style={{ padding: CELL_PADDING, borderTop: i > 0 ? `1px solid ${t.panelDivider}` : undefined }}
                  >
                    <CommitInput
                      label={`Element ${e.id} ${field}`}
                      labelMode="hidden"
                      value={e[field] ?? ""}
                      theme={t}
                      onCommit={(s) => onChange(setElementField(draft, e.id, field, s))}
                    />
                  </td>
                ))}
                <td style={{ padding: CELL_PADDING, borderTop: i > 0 ? `1px solid ${t.panelDivider}` : undefined }}>
                  <GlassPicker
                    element={e}
                    theme={t}
                    onPick={(g) =>
                      onAction(() => {
                        // A catalog glass supplies d-line coordinates only; native source spectra need a manual decision.
                        if (
                          e.indexReference === "e" ||
                          e.nC !== undefined ||
                          e.nF !== undefined ||
                          e.ng !== undefined ||
                          e.dPgF !== undefined
                        )
                          throw new Error(
                            "This element has native spectral data. Reconcile it in Advanced JSON before choosing a glass.",
                          );
                        let next = setElementField(draft, e.id, "glass", g.name);
                        next = setElementField(next, e.id, "nd", g.nd);
                        onChange(setElementField(next, e.id, "vd", g.vd));
                      })
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

export function sectionTitle(t: Theme): CSSProperties {
  return {
    ...builderCaptionStyle(t),
    margin: "0 0 6px",
    fontWeight: 600,
    fontSize: 10,
    color: t.label,
  };
}
