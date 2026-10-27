/**
 * GroupCard — one air-separated group of the optical train: a single element, or elements cemented together.
 *
 * Everything that belongs to an element sits in its block: name and description, material, centre thickness, the
 * radii and diameters of its surfaces with their aspheric terms, and a computed shape and focal-length readout. A
 * cemented card shows each shared junction once, between the two element blocks, with a Split action.
 */

import { Fragment, useEffect, useRef, useState, type CSSProperties, type FocusEvent, type ReactNode } from "react";
import {
  BuilderEditError,
  elementFocalLength,
  groupFocalLength,
  moveItem,
  removeElement,
  removeItem,
  splitGroup,
  updateElement,
  updateSurface,
  type BuilderElement,
  type BuilderGroup,
  type BuilderMaterial,
  type BuilderSurface,
} from "../../lensBuilder/elementModel.js";
import { ASPHERIC_COEFFICIENT_SCHEMA } from "../../types/asphericSchema.js";
import CommitInput, { builderCaptionStyle } from "./CommitInput.js";
import MaterialPicker from "./MaterialPicker.js";
import {
  formatCoefficient,
  formatFocal,
  formatMm,
  iconButton,
  noteStyle,
  sentenceCase,
  shapeOf,
  textButton,
  type TrainCtx,
} from "./trainShared.js";

interface GroupCardProps {
  ctx: TrainCtx;
  group: BuilderGroup;
  /** Position in `model.items`. */
  index: number;
  /** `model.items.length`, for the move buttons. */
  count: number;
  /** True when the diagram's selected element belongs to this group. */
  selected: boolean;
}

const EVEN_TERMS = ASPHERIC_COEFFICIENT_SCHEMA.filter((d) => d.parity === "even");
const ODD_TERMS = ASPHERIC_COEFFICIENT_SCHEMA.filter((d) => d.parity === "odd");

/** Native spectral data describes the authored glass; replacing nd/νd alone would leave it inconsistent. */
function hasNativeSpectra(e: BuilderElement): boolean {
  const x = e.extra;
  return !!x && (x.indexReference === "e" || [x.nC, x.nF, x.ng, x.dPgF].some((v) => v !== undefined));
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 16 16" width={12} height={12} aria-hidden style={{ display: "block" }}>
      <path
        d="M6.6 9.4l2.8-2.8M7.3 4.6l1-1a2.6 2.6 0 013.7 3.7l-1 1M8.7 11.4l-1 1A2.6 2.6 0 014 8.7l1-1"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function GroupCard({ ctx, group, index, count, selected }: GroupCardProps) {
  const { t, touch, edit } = ctx;
  const n = group.elements.length;
  const cemented = n > 1;
  const groupName = group.elements.map((e) => e.name).join("+");
  const [linked, setLinked] = useState(() => group.surfaces.every((s) => s.sd === group.surfaces[0].sd));
  const [asphOpen, setAsphOpen] = useState<ReadonlySet<string>>(() => new Set());
  /* Un-flattening restores the radius the surface had before it was made flat. */
  const lastRadius = useRef(new Map<string, number>());
  /* A card removed while hovered would otherwise leave the diagram pointing at it. */
  const { highlight } = ctx;
  useEffect(() => () => highlight(null), [highlight]);
  const labels = group.surfaces.map((s) => s.label);
  const ids = group.elements.map((e) => e.id);
  const issues = ctx.issuesFor(labels, ids);

  const surfaceGrid: CSSProperties = {
    display: "grid",
    gridTemplateColumns: touch
      ? "54px minmax(0, 1fr) 32px minmax(0, 76px) 50px"
      : "48px minmax(0, 1fr) 22px minmax(0, 64px) 40px",
    gap: 4,
    alignItems: "center",
  };

  const setSurface = (si: number, patch: Partial<Pick<BuilderSurface, "R" | "sd" | "asphere">>) =>
    edit((m) => updateSurface(m, index, si, patch));
  const setDiameter = (si: number, diameter: number) =>
    edit((m) =>
      (linked ? group.surfaces.map((_, i) => i) : [si]).reduce(
        (acc, i) => updateSurface(acc, index, i, { sd: diameter / 2 }),
        m,
      ),
    );
  const setElement = (j: number, patch: Parameters<typeof updateElement>[3]) =>
    edit((m) => updateElement(m, index, j, patch));
  const setMaterial = (j: number, material: BuilderMaterial) =>
    edit((m) => {
      const e = group.elements[j];
      if (hasNativeSpectra(e))
        throw new BuilderEditError(
          `${e.name} has native spectral data (an e-line index or partial dispersions). Reconcile it in Advanced JSON before choosing another glass.`,
        );
      return updateElement(m, index, j, { material });
    });

  const surfacePrefix = (si: number) =>
    si === 0
      ? `${group.elements[0].name} front`
      : si === n
        ? `${group.elements[n - 1].name} rear`
        : `${group.elements[si - 1].name}/${group.elements[si].name} junction`;

  const asphereEditor = (si: number, prefix: string) => {
    const surface = group.surfaces[si];
    const term = (key: string) => (
      <CommitInput
        key={key}
        label={`${prefix} ${key}`}
        caption={key}
        value={surface.asphere?.[key as keyof NonNullable<BuilderSurface["asphere"]>] ?? ""}
        theme={t}
        numeric
        optional
        format={formatCoefficient}
        invalid={ctx.surfaceInvalid(surface.label, "asphere")}
        onCommit={(s) => {
          const next: Record<string, number> = { ...surface.asphere };
          if (s.trim() === "") delete next[key];
          else next[key] = Number(s);
          setSurface(si, { asphere: Object.keys(next).length ? next : undefined });
        }}
      />
    );
    const grid: CSSProperties = {
      display: "grid",
      gridTemplateColumns: `repeat(auto-fill, minmax(${touch ? 104 : 86}px, 1fr))`,
      gap: 6,
    };
    const oddUsed = ODD_TERMS.some(({ key }) => surface.asphere?.[key] !== undefined);
    return (
      <div
        role="group"
        aria-label={`${prefix} asphere`}
        style={{ display: "grid", gap: 6, padding: "6px 0 4px 8px", borderLeft: `2px solid ${t.asphStroke}` }}
      >
        <div style={grid}>{EVEN_TERMS.map(({ key }) => term(key))}</div>
        {/* Odd orders are rare in patents; keep them folded unless the surface uses one. */}
        <details open={oddUsed}>
          <summary style={{ ...builderCaptionStyle(t), cursor: "pointer", marginBottom: 6 }}>Odd orders</summary>
          <div style={grid}>{ODD_TERMS.map(({ key }) => term(key))}</div>
        </details>
        {surface.asphere && (
          <div>
            <button
              type="button"
              aria-label={`Remove ${prefix} asphere`}
              style={textButton(t, touch)}
              onClick={() => setSurface(si, { asphere: undefined })}
            >
              Make spherical
            </button>
          </div>
        )}
      </div>
    );
  };

  const surfaceRow = (si: number, caption: string) => {
    const surface = group.surfaces[si];
    const prefix = surfacePrefix(si);
    const flat = surface.R === "flat";
    const open = asphOpen.has(surface.label);
    const aspheric = !!surface.asphere && Object.keys(surface.asphere).length > 0;
    return (
      <Fragment key={surface.label}>
        <div style={surfaceGrid}>
          <span style={{ ...builderCaptionStyle(t), fontSize: 9 }} title={`Surface ${surface.label}`}>
            {caption}
          </span>
          <CommitInput
            label={`${prefix} radius`}
            labelMode="hidden"
            value={flat ? "∞" : surface.R}
            theme={t}
            numeric
            flat
            format={formatMm}
            invalid={ctx.surfaceInvalid(surface.label, "R")}
            title="Radius in mm; positive when the centre of curvature is towards the image. ∞ or blank is flat."
            onCommit={(s) => setSurface(si, { R: ["", "∞", "flat"].includes(s.trim()) ? "flat" : Number(s) })}
          />
          <button
            type="button"
            aria-label={`${prefix} flat`}
            aria-pressed={flat}
            title={flat ? "Flat surface; click to curve it again" : "Make this surface flat (∞)"}
            style={iconButton(t, touch, { active: flat })}
            onClick={() => {
              if (flat) {
                const fallback = (si === n ? -1 : 1) * Math.max(20, Math.round((surface.sd ?? 10) * 4));
                setSurface(si, { R: lastRadius.current.get(surface.label) ?? fallback });
              } else {
                lastRadius.current.set(surface.label, surface.R as number);
                setSurface(si, { R: "flat" });
              }
            }}
          >
            ∞
          </button>
          <CommitInput
            label={`${prefix} diameter`}
            labelMode="hidden"
            value={surface.sd === undefined ? "" : surface.sd * 2}
            theme={t}
            numeric
            format={formatMm}
            invalid={ctx.surfaceInvalid(surface.label, "sd")}
            title={`Clear diameter Ø in mm (2 × semi-diameter ${surface.sd === undefined ? "unset" : formatMm(surface.sd)})${linked ? "; linked across the group" : ""}`}
            onCommit={(s) => setDiameter(si, Number(s))}
          />
          <button
            type="button"
            aria-label={`${prefix} aspheric terms`}
            aria-expanded={open}
            title={aspheric ? "Aspheric surface: conic and polynomial terms" : "Add conic or polynomial terms"}
            style={{
              ...textButton(t, touch, open, aspheric ? t.asphStroke : undefined),
              padding: 0,
              color: aspheric ? t.asphLabel : open ? t.toggleActiveText : t.toggleInactiveText,
              fontWeight: aspheric ? 700 : 400,
            }}
            onClick={() =>
              setAsphOpen((previous) => {
                const next = new Set(previous);
                if (!next.delete(surface.label)) next.add(surface.label);
                return next;
              })
            }
          >
            {aspheric ? "Asph" : "+Asph"}
          </button>
        </div>
        {open && asphereEditor(si, prefix)}
      </Fragment>
    );
  };

  const surfaceHeader = (
    <div style={{ ...surfaceGrid, marginTop: 2 }}>
      <span />
      <span style={builderCaptionStyle(t)}>R mm</span>
      <span />
      <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
        <span style={builderCaptionStyle(t)}>Ø mm</span>
        <button
          type="button"
          aria-label={`Link ${groupName} diameters`}
          aria-pressed={linked}
          title={linked ? "Diameters linked: editing one sets every surface" : "Link the diameters of every surface"}
          onClick={() => setLinked(!linked)}
          style={{
            ...iconButton(t, false, { active: linked }),
            width: 18,
            height: 16,
            minHeight: 16,
            flex: "0 0 18px",
            color: linked ? t.toggleActiveText : t.muted,
          }}
        >
          <LinkIcon />
        </button>
      </span>
      <span />
    </div>
  );

  const readout = (j: number) => {
    const e = group.elements[j];
    const shape = shapeOf(group, j);
    let f: number | null = null;
    try {
      f = elementFocalLength(group, j);
    } catch {
      /* Shown as afocal. */
    }
    const custom = shape && e.type.trim().toLowerCase() !== shape.toLowerCase();
    return (
      <p
        style={{ ...noteStyle(t), color: t.elemType }}
        title={custom ? `Stored type: "${e.type}" (kept because it differs from the computed shape)` : undefined}
      >
        {shape ? `${sentenceCase(shape)} · ` : ""}
        {formatFocal(f)}
        {custom && <span style={{ color: t.muted }}> · type “{e.type}”</span>}
      </p>
    );
  };

  const moveButtons = (name: string) => (
    <>
      <button
        type="button"
        aria-label={`Move ${name} towards the object`}
        title="Move up (towards the object)"
        disabled={index === 0}
        style={iconButton(t, touch, { disabled: index === 0 })}
        onClick={() => edit((m) => moveItem(m, index, -1))}
      >
        ↑
      </button>
      <button
        type="button"
        aria-label={`Move ${name} towards the image`}
        title="Move down (towards the image)"
        disabled={index === count - 1}
        style={iconButton(t, touch, { disabled: index === count - 1 })}
        onClick={() => edit((m) => moveItem(m, index, 1))}
      >
        ↓
      </button>
      <button
        type="button"
        aria-label={`Delete ${name}`}
        title={cemented ? "Delete the whole cemented group" : "Delete this element"}
        style={iconButton(t, touch)}
        onClick={() => edit((m) => removeItem(m, index))}
      >
        ✕
      </button>
    </>
  );

  const nameRow = (j: number, actions: ReactNode) => {
    const e = group.elements[j];
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 4, minWidth: 0 }}>
        <span
          aria-hidden
          style={{
            flex: "0 0 10px",
            height: 14,
            borderRadius: 2,
            background: t.elemFill({ apd: e.extra?.apd ?? false, nd: e.material.nd }, false),
            border: `1px solid ${t.elemStroke({ apd: e.extra?.apd ?? false }, false)}`,
          }}
        />
        <div style={{ flex: `0 0 ${touch ? 56 : 44}px` }}>
          <CommitInput
            label={`${e.name} name`}
            labelMode="hidden"
            value={e.name}
            theme={t}
            style={{ fontWeight: 700, color: t.title }}
            onCommit={(s) => setElement(j, { name: s.trim() })}
          />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <CommitInput
            label={`${e.name} description`}
            stringRule="name"
            labelMode="hidden"
            value={e.label}
            placeholder="Description"
            theme={t}
            onCommit={(s) => setElement(j, { label: s })}
          />
        </div>
        {actions}
      </div>
    );
  };

  const materialRow = (j: number) => {
    const e = group.elements[j];
    const front = group.surfaces[j];
    return (
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto", gap: 6, alignItems: "center" }}>
        <MaterialPicker
          elementName={e.name}
          material={e.material}
          theme={t}
          touch={touch}
          invalid={ctx.elementInvalid(e.id)}
          onPick={(material) => setMaterial(j, material)}
        />
        <div style={{ width: touch ? 118 : 96 }}>
          <CommitInput
            label={`${e.name} thickness`}
            caption="CT"
            labelMode="side"
            unit="mm"
            value={e.thickness}
            theme={t}
            numeric
            format={formatMm}
            invalid={ctx.surfaceInvalid(front.label, "d")}
            title="Centre thickness in mm"
            onCommit={(s) => setElement(j, { thickness: Number(s) })}
          />
        </div>
      </div>
    );
  };

  /* Hovering or focusing a block highlights its element in the diagram. */
  const block = (j: number, children: ReactNode) => {
    const e = group.elements[j];
    return (
      <div
        key={e.id}
        data-element-id={e.id}
        onMouseEnter={() => ctx.highlight(e.id)}
        onFocus={() => ctx.highlight(e.id)}
        style={{ display: "grid", gap: 5, minWidth: 0 }}
      >
        {children}
      </div>
    );
  };

  let groupFocal: number | null = null;
  try {
    groupFocal = groupFocalLength(group);
  } catch {
    /* Shown as afocal. */
  }

  const body: ReactNode[] = [];
  if (!cemented) {
    body.push(
      block(
        0,
        <>
          {nameRow(0, moveButtons(group.elements[0].name))}
          {materialRow(0)}
          {surfaceHeader}
          {surfaceRow(0, "Front")}
          {surfaceRow(1, "Rear")}
          {readout(0)}
        </>,
      ),
    );
  } else {
    group.elements.forEach((e, j) => {
      body.push(
        block(
          j,
          <>
            {nameRow(
              j,
              <button
                type="button"
                aria-label={`Remove ${e.name} from the cemented group`}
                title="Delete this element from the cemented group"
                style={iconButton(t, touch)}
                onClick={() => edit((m) => removeElement(m, index, j))}
              >
                ✕
              </button>,
            )}
            {materialRow(j)}
            {j === 0 && surfaceHeader}
            {j === 0 && surfaceRow(0, "Front")}
            {j === n - 1 && surfaceRow(n, "Rear")}
            {readout(j)}
          </>,
        ),
      );
      if (j < n - 1)
        body.push(
          <div
            key={`junction-${group.surfaces[j + 1].label}`}
            role="group"
            aria-label={`Cemented junction ${e.name}/${group.elements[j + 1].name}`}
            style={{
              display: "grid",
              gap: 4,
              padding: "5px 6px",
              margin: "0 -6px",
              background: t.cementBg,
              borderRadius: 4,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ ...builderCaptionStyle(t), color: t.cementText, flex: 1, fontWeight: 600 }}>
                Cemented junction
              </span>
              <button
                type="button"
                aria-label={`Split ${e.name} from ${group.elements[j + 1].name}`}
                title="Split the junction into two air-spaced surfaces"
                style={textButton(t, touch)}
                onClick={() => edit((m) => splitGroup(m, index, j + 1))}
              >
                Split
              </button>
            </div>
            {surfaceRow(j + 1, "Shared")}
          </div>,
        );
    });
  }

  return (
    <article
      aria-label={cemented ? `Cemented group ${groupName}` : `Element ${groupName}`}
      data-element-ids={ids.join(" ")}
      aria-current={selected || undefined}
      onMouseLeave={() => ctx.highlight(null)}
      onBlur={(e: FocusEvent<HTMLElement>) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) ctx.highlight(null);
      }}
      style={{
        background: t.panelBg,
        border: `1px solid ${issues.length ? t.error : selected ? t.sliderAccent : t.panelBorder}`,
        boxShadow: selected ? `inset 3px 0 0 ${t.sliderAccent}` : undefined,
        borderRadius: 6,
        padding: touch ? "8px 8px 8px 10px" : "6px 8px 6px 10px",
        display: "grid",
        gap: 6,
        minWidth: 0,
      }}
    >
      {cemented && (
        <div style={{ display: "flex", alignItems: "center", gap: 4, minWidth: 0 }}>
          <span style={{ flex: 1, minWidth: 0, fontSize: 11, color: t.label, overflow: "hidden" }}>
            <span style={{ ...builderCaptionStyle(t), color: t.cementText, fontWeight: 700 }}>
              {n === 2 ? "Cemented doublet" : n === 3 ? "Cemented triplet" : `Cemented ×${n}`}
            </span>
            {group.cementName && <span style={{ color: t.muted }}> · {group.cementName}</span>}
            <span style={{ color: t.elemType }}> · {formatFocal(groupFocal)}</span>
          </span>
          {moveButtons(groupName)}
        </div>
      )}
      {issues.length > 0 && (
        <ul style={{ margin: 0, paddingLeft: 16, color: t.error, fontSize: 10.5, overflowWrap: "anywhere" }}>
          {issues.map((issue) => (
            <li key={issue}>{issue}</li>
          ))}
        </ul>
      )}
      {body}
    </article>
  );
}
