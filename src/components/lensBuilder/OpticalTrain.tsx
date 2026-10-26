/**
 * OpticalTrain — the builder's element editor, read from the object (top) to the image (bottom).
 *
 * Group cards alternate with air-gap rows; the aperture stop is a compact row of its own. Every edit is a pure
 * element-model operation written back with `applyElementModel`, so the page's rebuild, autosave and export paths see
 * an ordinary V2 draft.
 */

import { Fragment, useCallback, useEffect, useMemo, useRef, type CSSProperties } from "react";
import {
  applyElementModel,
  cementWithNext,
  insertElement,
  insertStop,
  moveItem,
  setGap,
  setGapSchedule,
  toElementModel,
  updateElement,
  type BuilderGap,
  type BuilderItem,
  type BuilderModel,
  type ToModelResult,
} from "../../lensBuilder/elementModel.js";
import type { LensDataV2Input } from "../../types/lensDataV2.js";
import type { Theme } from "../../types/theme.js";
import CommitInput, { builderCaptionStyle, sectionTitle } from "./CommitInput.js";
import GroupCard from "./GroupCard.js";
import {
  formatMm,
  iconButton,
  noteStyle,
  shapeOf,
  textButton,
  type SurfaceField,
  type TrainCtx,
} from "./trainShared.js";

interface OpticalTrainProps {
  draft: LensDataV2Input;
  model: BuilderModel;
  theme: Theme;
  touch: boolean;
  /** Validation issues of the last rebuild, with `surfaces[i]` / `elements[i]` paths into the draft. */
  issues: string[];
  onChange: (draft: LensDataV2Input) => void;
  /** Runs an edit and shows a thrown refusal in the editor's alert. */
  onAction: (action: () => void) => void;
  onOpenAdvanced: () => void;
  /** The diagram's selected element; its card is marked and scrolled into view. */
  selectedElementId?: number | null;
  onHighlight?: (elementId: number | null) => void;
}

/** `toElementModel` with any unexpected exception reported as a fallback reason rather than a crash. */
export function deriveElementModel(draft: LensDataV2Input): ToModelResult {
  try {
    return toElementModel(draft);
  } catch (error) {
    return { ok: false, reasons: [error instanceof Error ? error.message : String(error)] };
  }
}

/**
 * Keep each element's V2 `type` in step with its computed shape, unless the author wrote a type that differs from the
 * shape it had before the edit (for example "Biconvex Positive (ED)").
 */
function syncTypes(previous: BuilderModel, next: BuilderModel): BuilderModel {
  const before = new Map<number, string>();
  for (const item of previous.items)
    if (item.kind === "group") item.elements.forEach((e, j) => before.set(e.id, shapeOf(item, j)));
  let out = next;
  next.items.forEach((item, i) => {
    if (item.kind !== "group") return;
    item.elements.forEach((e, j) => {
      const was = before.get(e.id);
      if (!was || e.type.trim().toLowerCase() !== was.toLowerCase()) return;
      const now = shapeOf(item, j);
      if (now && now !== e.type) out = updateElement(out, i, j, { type: now });
    });
  });
  return out;
}

interface IssueIndex {
  issues: { text: string; labels: Set<string>; ids: Set<number> }[];
  surfaceFields: Map<string, Set<string>>;
  elementIds: Set<number>;
}

/** Map `surfaces[i].field` and `elements[i]` paths in validation issues to surface labels and element ids. */
function indexIssues(draft: LensDataV2Input, issues: string[]): IssueIndex {
  const index: IssueIndex = { issues: [], surfaceFields: new Map(), elementIds: new Set() };
  for (const text of issues) {
    const labels = new Set<string>();
    const ids = new Set<number>();
    for (const m of text.matchAll(/surfaces\[(\d+)\](?:\.(\w+))?/g)) {
      const surface = draft.surfaces[Number(m[1])];
      if (!surface) continue;
      labels.add(surface.label);
      const fields = index.surfaceFields.get(surface.label) ?? new Set<string>();
      fields.add(m[2] ?? "*");
      index.surfaceFields.set(surface.label, fields);
    }
    for (const m of text.matchAll(/elements\[(\d+)\]/g)) {
      const element = draft.elements[Number(m[1])];
      if (element) {
        ids.add(element.id);
        index.elementIds.add(element.id);
      }
    }
    index.issues.push({ text, labels, ids });
  }
  return index;
}

function itemName(item: BuilderItem): string {
  return item.kind === "stop" ? "stop" : item.elements[item.elements.length - 1].name;
}

interface GapRowProps {
  ctx: TrainCtx;
  model: BuilderModel;
  index: number;
  zoom: boolean;
  keyframes: number[];
  stationLabels: string[];
  onOpenAdvanced: () => void;
}

function GapRow({ ctx, model, index, zoom, keyframes, stationLabels, onOpenAdvanced }: GapRowProps) {
  const { t, touch, edit } = ctx;
  const gap: BuilderGap = model.gaps[index];
  const item = model.items[index];
  const next = model.items[index + 1];
  const last = index === model.items.length - 1;
  const after = itemName(item);
  const name = last ? `Back focus after ${after}` : `Air gap after ${after}`;
  const exitLabel = item.kind === "stop" ? item.surface.label : item.surfaces[item.surfaces.length - 1].label;
  const invalid = ctx.surfaceInvalid(exitLabel, "d");
  const hasStop = model.items.some((entry) => entry.kind === "stop");
  const schedule = gap.schedule;
  const editableSchedule = schedule && !zoom && schedule.length === 1 && !gap.aberrationControlled;
  const badge = (text: string, title: string) => (
    <span
      title={title}
      style={{
        fontSize: 9,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: t.focusDist,
        border: `1px solid ${t.focusDist}`,
        borderRadius: 8,
        padding: "0 5px",
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </span>
  );
  const keyframeCaption = (k: number, count: number) =>
    k === 0 ? "∞" : k === count - 1 ? "close" : `@${keyframes[k] ?? k}`;
  const keyframeName = (k: number, count: number) =>
    k === 0 ? "at infinity" : k === count - 1 ? "at close focus" : `at focus keyframe ${k}`;

  let spacing;
  if (editableSchedule) {
    const row = schedule[0];
    spacing = (
      <span style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 4 }}>
        {row.map((mm, k) => (
          <span key={k} style={{ display: "flex", alignItems: "center", gap: 3 }}>
            {k > 0 && (
              <span aria-hidden style={{ color: t.muted }}>
                →
              </span>
            )}
            <span aria-hidden style={{ color: t.focusDist, fontSize: 10 }}>
              {keyframeCaption(k, row.length)}
            </span>
            <span style={{ width: touch ? 84 : 66 }}>
              <CommitInput
                label={`${name} ${keyframeName(k, row.length)}`}
                labelMode="hidden"
                value={mm}
                theme={t}
                numeric
                format={formatMm}
                invalid={invalid}
                onCommit={(s) =>
                  edit((m) => setGapSchedule(m, index, [row.map((value, i) => (i === k ? Number(s) : value))]))
                }
              />
            </span>
          </span>
        ))}
        <span aria-hidden style={{ color: t.muted, fontSize: 10 }}>
          mm
        </span>
        {badge("focus", "This spacing changes with focus; both ends are editable")}
      </span>
    );
  } else if (schedule || gap.aberrationControlled) {
    const values = schedule ? schedule.map((row) => row[0]) : [gap.mm];
    spacing = (
      <span style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 4 }}>
        <output
          aria-label={name}
          title={schedule ? "Per zoom station at infinity focus" : undefined}
          style={{ color: t.spacingVal, fontVariantNumeric: "tabular-nums", fontSize: "0.78rem" }}
        >
          {values
            .map((v, i) => `${schedule && stationLabels[i] ? `${stationLabels[i]} ` : ""}${formatMm(v)}`)
            .join(" · ")}
        </output>
        <span aria-hidden style={{ color: t.muted, fontSize: 10 }}>
          mm
        </span>
        {gap.aberrationControlled
          ? badge("ring", "Moved by an aberration-control ring")
          : badge(zoom ? "zoom" : "focus", zoom ? "This spacing changes with zoom" : "Scheduled spacing")}
        <button
          type="button"
          style={{ ...textButton(t, touch), fontSize: 9 }}
          title="Variable spacings of zoom lenses and control rings are edited in Advanced JSON"
          onClick={onOpenAdvanced}
        >
          Edit in JSON
        </button>
      </span>
    );
  } else {
    spacing = (
      <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
        <span style={{ width: touch ? 96 : 72 }}>
          <CommitInput
            label={name}
            labelMode="hidden"
            value={gap.mm}
            theme={t}
            numeric
            format={formatMm}
            invalid={invalid}
            onCommit={(s) => edit((m) => setGap(m, index, Number(s)))}
          />
        </span>
        <span aria-hidden style={{ color: t.muted, fontSize: 10 }}>
          mm
        </span>
      </span>
    );
  }

  const nextGroup = next?.kind === "group" ? next : null;
  const canCement = !last && item.kind === "group" && !!nextGroup && !schedule && !gap.aberrationControlled;
  return (
    <div
      role="group"
      aria-label={last ? "Back focus to image" : `Air space after ${after}`}
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "4px 8px",
        margin: "0 0 0 14px",
        padding: touch ? "8px 0 8px 12px" : "5px 0 5px 12px",
        borderLeft: `1px dashed ${last ? t.imgLine : t.panelBorder}`,
      }}
    >
      <span style={{ display: "flex", alignItems: "center", gap: 6, flex: "none" }}>
        <span aria-hidden style={{ color: t.muted }}>
          ↕
        </span>
        <span style={{ ...builderCaptionStyle(t), color: last ? t.imgLabel : t.label, overflow: "visible" }}>
          {last ? "Back focus to image" : "Air gap"}
        </span>
      </span>
      {spacing}
      <span style={{ display: "flex", flexWrap: "wrap", gap: 4, marginLeft: "auto" }}>
        {canCement && (
          <button
            type="button"
            aria-label={`Cement ${after} to ${nextGroup?.elements[0].name}`}
            title="Cement the neighbouring groups together, removing this air gap"
            style={textButton(t, touch)}
            onClick={() => edit((m) => cementWithNext(m, index))}
          >
            Cement
          </button>
        )}
        <button
          type="button"
          aria-label={`Insert element after ${after}`}
          title="Insert a new single element into this air space"
          style={textButton(t, touch)}
          onClick={() => edit((m) => insertElement(m, index + 1))}
        >
          + Element
        </button>
        {!hasStop && (
          <button
            type="button"
            aria-label={`Insert stop after ${after}`}
            style={textButton(t, touch)}
            onClick={() => edit((m) => insertStop(m, index + 1))}
          >
            + Stop
          </button>
        )}
      </span>
    </div>
  );
}

function StopRow({ ctx, index, count }: { ctx: TrainCtx; index: number; count: number }) {
  const { t, touch, edit } = ctx;
  return (
    <div
      role="group"
      aria-label="Aperture stop"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: touch ? "6px 8px" : "4px 8px",
        border: `1px solid ${t.panelBorder}`,
        borderLeft: `3px solid ${t.stop}`,
        borderRadius: 6,
        background: t.panelBg,
      }}
    >
      <span style={{ ...builderCaptionStyle(t), color: t.stopLabel, fontWeight: 700 }}>Aperture stop</span>
      <span style={{ flex: 1, fontSize: 11, color: t.body }} title="The engine sizes the stop from the f-number">
        Ø <span style={{ color: t.spacingVal }}>auto</span>
        <span style={{ color: t.muted, fontSize: 10 }}> · from the f-number</span>
      </span>
      <button
        type="button"
        aria-label="Move stop towards the object"
        disabled={index === 0}
        style={iconButton(t, touch, { disabled: index === 0 })}
        onClick={() => edit((m) => moveItem(m, index, -1))}
      >
        ↑
      </button>
      <button
        type="button"
        aria-label="Move stop towards the image"
        disabled={index === count - 1}
        style={iconButton(t, touch, { disabled: index === count - 1 })}
        onClick={() => edit((m) => moveItem(m, index, 1))}
      >
        ↓
      </button>
    </div>
  );
}

export default function OpticalTrain({
  draft,
  model,
  theme: t,
  touch,
  issues,
  onChange,
  onAction,
  onOpenAdvanced,
  selectedElementId,
  onHighlight,
}: OpticalTrainProps) {
  const container = useRef<HTMLElement>(null);
  const issueIndex = useMemo(() => indexIssues(draft, issues), [draft, issues]);
  /* Stable, so a card can clear its highlight when it unmounts (deleted, merged, or the editor replaced). */
  const highlight = useCallback((id: number | null) => onHighlight?.(id), [onHighlight]);
  const ctx: TrainCtx = {
    t,
    touch,
    edit: (op) => onAction(() => onChange(applyElementModel(draft, syncTypes(model, op(model))))),
    issuesFor: (labels, ids) =>
      issueIndex.issues
        .filter((issue) => labels.some((l) => issue.labels.has(l)) || ids.some((id) => issue.ids.has(id)))
        .map((issue) => issue.text),
    surfaceInvalid: (label: string, field: SurfaceField) => {
      const fields = issueIndex.surfaceFields.get(label);
      return !!fields && (fields.has(field) || fields.has("*"));
    },
    elementInvalid: (id) => issueIndex.elementIds.has(id),
    highlight,
  };
  /* Clicking an element in the diagram brings its card into view. Phones stack the editor under the diagram, where
     scrolling the page would carry the reader away from the tap, so they only mark the card. */
  useEffect(() => {
    if (selectedElementId == null || touch) return;
    const card = container.current?.querySelector(`[data-element-ids~="${selectedElementId}"]`);
    if (card && typeof card.scrollIntoView === "function")
      card.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [selectedElementId, touch]);

  const zoom = !!draft.zoom;
  const keyframes = draft.focus.keyframes ?? [0, 1];
  const stationLabels = draft.zoom?.stations.map((s) => s.label ?? `${formatMm(s.focalLengthMm)}mm`) ?? [];
  const end: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "2px 0",
  };

  return (
    <section ref={container} aria-label="Optical train" style={{ minWidth: 0 }}>
      <h2 style={{ ...sectionTitle(t), display: "flex", justifyContent: "space-between", gap: 8 }}>
        <span>Optical train</span>
        <span style={{ color: t.muted, fontWeight: 400, letterSpacing: "0.06em" }}>object → image · mm</span>
      </h2>
      <div style={{ display: "grid", gap: 0, minWidth: 0 }}>
        <div style={{ ...end, borderBottom: `1px dashed ${t.panelBorder}`, paddingBottom: 4, marginBottom: 4 }}>
          <span style={{ ...builderCaptionStyle(t), flex: 1 }}>Object side</span>
          <button
            type="button"
            aria-label="Insert element at the front"
            title="Insert a new single element in front of the first item"
            style={textButton(t, touch)}
            onClick={() => ctx.edit((m) => insertElement(m, 0))}
          >
            + Element
          </button>
        </div>
        {model.items.map((item, i) => (
          <Fragment key={item.key}>
            {item.kind === "group" ? (
              <GroupCard
                ctx={ctx}
                group={item}
                index={i}
                count={model.items.length}
                selected={selectedElementId != null && item.elements.some((e) => e.id === selectedElementId)}
              />
            ) : (
              <StopRow ctx={ctx} index={i} count={model.items.length} />
            )}
            <GapRow
              ctx={ctx}
              model={model}
              index={i}
              zoom={zoom}
              keyframes={keyframes}
              stationLabels={stationLabels}
              onOpenAdvanced={onOpenAdvanced}
            />
          </Fragment>
        ))}
        <div style={{ ...end, borderTop: `1px solid ${t.imgLine}`, paddingTop: 4 }}>
          <span style={{ ...builderCaptionStyle(t), color: t.imgLabel }}>Image plane</span>
        </div>
      </div>
      <p style={{ ...noteStyle(t), marginTop: 6 }}>
        R is positive when its centre lies towards the image. Ø is the clear diameter. Hover or focus a card to find its
        element in the diagram; click an element there to jump to its card.
      </p>
    </section>
  );
}
