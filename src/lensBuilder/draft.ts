import { buildLens, ingestLens } from "../optics/buildLens.js";
import { validateCanonicalLens, LENS_KEY_PATTERN } from "../optics/validation.js";
import type { LensDataV2Input, SurfaceV2Input, ElementV2Input } from "../types/lensDataV2.js";
import type { RuntimeLens } from "../types/optics.js";

/** A teaching design, not a reconstruction of a production lens. All distances are mm. */
export function createTemplate(): LensDataV2Input {
  return {
    schema: 2,
    key: "my-triplet",
    maker: "Custom",
    name: "CUSTOM experimental triplet",
    subtitle: "Synthetic teaching design; not a production prescription",
    visible: false,
    /* A declared format gives the field-dependent analyses a real image corner instead of the modeled field edge. */
    catalog: { imageFormat: "135-full-frame" },
    elements: [
      { id: 1, name: "L1", label: "Front crown", type: "Biconvex Positive", nd: 1.5168, vd: 64.17, glass: "N-BK7" },
      { id: 2, name: "L2", label: "Negative flint", type: "Biconcave Negative", nd: 1.62004, vd: 36.37, glass: "N-F2" },
      { id: 3, name: "L3", label: "Rear crown", type: "Biconvex Positive", nd: 1.5168, vd: 64.17, glass: "N-BK7" },
    ],
    surfaces: [
      { label: "1", R: 30, d: 4, sd: 11, medium: 1 },
      { label: "2", R: -50, d: 4, sd: 11 },
      { label: "3", R: -35, d: 2, sd: 10, medium: 2 },
      { label: "4", R: 35, d: 3, sd: 10 },
      { label: "STO", R: "flat", d: 3 },
      { label: "5", R: 50, d: 4, sd: 11, medium: 3 },
      { label: "6", R: -30, sd: 11 },
    ],
    focus: { closeFocusM: 1, description: "Illustrative unit focus travel" },
    gaps: { "6": { label: "BF", values: [[40.64077267565658, 43.29]] } },
    aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16] },
    layout: { yScFill: 0.55 },
  };
}

export function cloneDraft(draft: LensDataV2Input): LensDataV2Input {
  return structuredClone(draft);
}

export function copyCatalogInput(input: LensDataV2Input): LensDataV2Input {
  return { ...cloneDraft(input), key: `${input.key}-copy`, name: `${input.name} (copy)`, visible: false };
}

export type DraftValidation = { ok: true; lens: RuntimeLens } | { ok: false; issues: string[] };

/** Some geometry diagnostics name labels rather than paths; retain the message and attach its authored rows. */
function authoredIssues(draft: LensDataV2Input, issues: string[]): string[] {
  return issues.map((issue) => {
    if (/surfaces\[|elements\[/.test(issue)) return issue;
    const elementId = /^Element (\d+)/.exec(issue)?.[1];
    const paths: string[] = [];
    if (elementId) {
      const index = draft.elements.findIndex((e) => e.id === Number(elementId));
      if (index >= 0) paths.push(`elements[${index}]`);
    }
    draft.surfaces.forEach((surface, index) => {
      if (issue.includes(`"${surface.label}"`)) paths.push(`surfaces[${index}]`);
    });
    return paths.length ? `${paths.join(" / ")}: ${issue}` : issue;
  });
}

export function validateDraft(draft: LensDataV2Input): DraftValidation {
  try {
    if (!LENS_KEY_PATTERN.test(draft.key))
      return { ok: false, issues: ["key: use lowercase words separated by hyphens"] };
    const issues = validateCanonicalLens(ingestLens(draft));
    if (issues.length) return { ok: false, issues: authoredIssues(draft, issues) };
    return { ok: true, lens: buildLens(draft) };
  } catch (error) {
    const issues = error && typeof error === "object" && "issues" in error ? error.issues : undefined;
    return {
      ok: false,
      issues: Array.isArray(issues) ? issues.map(String) : [error instanceof Error ? error.message : String(error)],
    };
  }
}

function surfaceAt(draft: LensDataV2Input, index: number): SurfaceV2Input {
  const surface = draft.surfaces[index];
  if (!surface) throw new Error(`surfaces[${index}]: no such surface`);
  return surface;
}

/** Label references are deliberately not rewritten: their source meaning may extend beyond the form. */
function assertUnreferenced(draft: LensDataV2Input, labels: string[]): void {
  for (const label of labels) {
    if (draft.gaps?.[label] || draft.aberrationControl?.gaps[label])
      throw new Error(`surfaces.${label}: referenced by gaps; edit the spacing schedule in Advanced JSON first`);
    if (
      [...(draft.groups ?? []), ...(draft.doublets ?? [])].some(
        (a) => a.fromSurface === label || a.toSurface === label,
      ) ||
      draft.elements.some((e) => e.span?.includes(label)) ||
      draft.opticalPath?.surfaceOrder?.includes(label) ||
      draft.source?.errata?.some((e) => "surface" in e && e.surface === label)
    )
      throw new Error(
        `surfaces.${label}: referenced by a span, annotation, optical path or erratum; use Advanced JSON`,
      );
  }
}

function assertSimplePath(draft: LensDataV2Input): void {
  if (
    draft.opticalPath ||
    draft.surfaces.some((s) => s.interaction || s.stopPlacement) ||
    draft.elements.some((e) => e.span)
  )
    throw new Error("Structural edits of folded paths or explicit element spans require Advanced JSON");
}

export function setSurfaceField<K extends keyof SurfaceV2Input>(
  draft: LensDataV2Input,
  index: number,
  field: K,
  value: SurfaceV2Input[K],
): LensDataV2Input {
  const surface = surfaceAt(draft, index);
  if (field === "label" && value !== surface.label) {
    if (surface.label === "STO" || value === "STO") throw new Error("Use Set stop to move the STO marker");
    assertUnreferenced(draft, [surface.label]);
  }
  if (field === "d" && draft.gaps?.[surface.label])
    throw new Error(`gaps.${surface.label}: variable spacing; edit its schedule in Advanced JSON`);
  const next = cloneDraft(draft);
  if (value === undefined) delete next.surfaces[index][field];
  else next.surfaces[index][field] = structuredClone(value);
  return next;
}

export function setElementField<K extends keyof ElementV2Input>(
  draft: LensDataV2Input,
  id: number,
  field: K,
  value: ElementV2Input[K],
): LensDataV2Input {
  const next = cloneDraft(draft);
  const element = next.elements.find((e) => e.id === id);
  if (!element) throw new Error(`elements.${id}: no such element`);
  if (field === "id") throw new Error("Element ids are structural; use Advanced JSON");
  if (value === undefined) delete element[field];
  else element[field] = structuredClone(value);
  return next;
}

function freshLabel(draft: LensDataV2Input): string {
  let n = 1;
  while (draft.surfaces.some((s) => s.label === `B${n}`)) n++;
  return `B${n}`;
}

function insertionDraft(draft: LensDataV2Input, after: number): LensDataV2Input {
  assertSimplePath(draft);
  const surface = surfaceAt(draft, after);
  assertUnreferenced(draft, [surface.label]);
  if (surface.medium !== undefined)
    throw new Error(`surfaces.${surface.label}: insertion requires air after the surface`);
  return cloneDraft(draft);
}

/** Insert into fixed air space, splitting that space without moving the following optics. */
export function insertElement(draft: LensDataV2Input, after: number): LensDataV2Input {
  const next = insertionDraft(draft, after);
  const gap = next.surfaces[after].d ?? 0;
  if (gap < 4) throw new Error("Insertion needs at least 4 mm of fixed air space");
  const id = Math.max(0, ...next.elements.map((e) => e.id)) + 1;
  const front = freshLabel(next);
  next.surfaces.splice(after + 1, 0, { label: front, R: 50, d: 3, sd: 8, medium: id });
  next.surfaces.splice(after + 2, 0, { label: freshLabel(next), R: -50, d: (gap - 3) / 2, sd: 8 });
  next.surfaces[after].d = (gap - 3) / 2;
  const entry = {
    id,
    name: `L${id}`,
    label: `Element ${id}`,
    type: "Biconvex Positive",
    nd: 1.5168,
    vd: 64.17,
    glass: "N-BK7",
  };
  const nextId = next.surfaces.slice(after + 3).find((s) => typeof s.medium === "number")?.medium;
  const position = next.elements.findIndex((e) => e.id === nextId);
  next.elements.splice(position < 0 ? next.elements.length : position, 0, entry);
  return next;
}

export function insertAirSurface(draft: LensDataV2Input, after: number): LensDataV2Input {
  const next = insertionDraft(draft, after);
  const half = (next.surfaces[after].d ?? 0) / 2;
  next.surfaces[after].d = half;
  next.surfaces.splice(after + 1, 0, { label: freshLabel(next), R: "flat", d: half, sd: 10 });
  return next;
}

/** Only a complete, air-separated two-surface element can be removed by the form. */
function elementBounds(draft: LensDataV2Input, id: number): [number, number] {
  const indices = draft.surfaces.flatMap((s, i) => (s.medium === id ? [i] : []));
  const start = indices[0];
  if (
    indices.length !== 1 ||
    !draft.surfaces[start + 1] ||
    draft.surfaces[start + 1].medium !== undefined ||
    (start > 0 && draft.surfaces[start - 1].medium !== undefined) ||
    draft.elements.find((e) => e.id === id)?.cemented
  )
    throw new Error(`elements.${id}: cemented or multi-surface element; use Advanced JSON`);
  return [start, start + 1];
}

export function deleteElement(draft: LensDataV2Input, id: number): LensDataV2Input {
  assertSimplePath(draft);
  if (draft.elements.length <= 1) throw new Error("Keep at least one glass element");
  const [start, end] = elementBounds(draft, id);
  const labels = draft.surfaces.slice(start, end + 1).map((s) => s.label);
  if (labels.includes("STO")) throw new Error("Move the stop before deleting this element");
  assertUnreferenced(draft, labels);
  if (start > 0) assertUnreferenced(draft, [draft.surfaces[start - 1].label]);
  const next = cloneDraft(draft);
  if (start > 0)
    next.surfaces[start - 1].d =
      (next.surfaces[start - 1].d ?? 0) + next.surfaces.slice(start, end + 1).reduce((sum, s) => sum + (s.d ?? 0), 0);
  next.surfaces.splice(start, 2);
  next.elements = next.elements.filter((e) => e.id !== id);
  return next;
}

export function deleteSurface(draft: LensDataV2Input, index: number): LensDataV2Input {
  assertSimplePath(draft);
  const surface = surfaceAt(draft, index);
  if (surface.label === "STO") throw new Error("Move the stop before deleting this surface");
  if (typeof surface.medium === "number") return deleteElement(draft, surface.medium);
  if (index > 0 && typeof draft.surfaces[index - 1].medium === "number")
    return deleteElement(draft, draft.surfaces[index - 1].medium as number);
  if (surface.medium !== undefined || draft.surfaces[index - 1]?.medium !== undefined)
    throw new Error("Deleting a medium boundary requires Advanced JSON");
  assertUnreferenced(draft, [surface.label, ...(index > 0 ? [draft.surfaces[index - 1].label] : [])]);
  const next = cloneDraft(draft);
  if (index > 0) next.surfaces[index - 1].d = (next.surfaces[index - 1].d ?? 0) + (surface.d ?? 0);
  next.surfaces.splice(index, 1);
  return next;
}

export function moveStop(draft: LensDataV2Input, index: number): LensDataV2Input {
  assertSimplePath(draft);
  const target = surfaceAt(draft, index);
  const old = draft.surfaces.findIndex((s) => s.label === "STO");
  if (old === index) return cloneDraft(draft);
  if (old < 0) throw new Error("surfaces: existing STO is missing; repair it in Advanced JSON");
  if (
    target.R !== "flat" ||
    target.medium !== undefined ||
    (index > 0 && draft.surfaces[index - 1].medium !== undefined) ||
    target.asphere
  )
    throw new Error("Set stop requires a flat air surface outside glass");
  assertUnreferenced(draft, ["STO", target.label]);
  const next = cloneDraft(draft);
  next.surfaces[old].label = freshLabel(next);
  next.surfaces[old].sd = target.sd ?? 10;
  next.surfaces[index].label = "STO";
  delete next.surfaces[index].sd;
  return next;
}

/**
 * Reorder complete glass runs (a single element or a cemented group, with the surface that exits to air) or
 * independent air planes; never split a glass boundary. Each block keeps its own spacings.
 */
export function reorderSurface(draft: LensDataV2Input, index: number, direction: -1 | 1): LensDataV2Input {
  assertSimplePath(draft);
  const blocks: SurfaceV2Input[][] = [];
  for (let i = 0; i < draft.surfaces.length; i++) {
    let end = i;
    while (draft.surfaces[end]?.medium !== undefined) end++;
    if (end >= draft.surfaces.length) throw new Error("surfaces: the last surface must exit to air");
    blocks.push(draft.surfaces.slice(i, end + 1));
    i = end;
  }
  const at = blocks.findIndex((b) => b.includes(surfaceAt(draft, index)));
  const to = at + direction;
  if (to < 0 || to >= blocks.length) throw new Error("Already at the edge of the prescription");
  assertUnreferenced(
    draft,
    blocks
      .slice(Math.min(at, to), Math.max(at, to) + 1)
      .flat()
      .map((s) => s.label),
  );
  [blocks[at], blocks[to]] = [blocks[to], blocks[at]];
  const next = cloneDraft(draft);
  next.surfaces = structuredClone(blocks.flat());
  const ids = next.surfaces.flatMap((s) => (typeof s.medium === "number" ? [s.medium] : []));
  const rank = (id: number) => (ids.includes(id) ? ids.indexOf(id) : ids.length);
  next.elements.sort((a, b) => rank(a.id) - rank(b.id));
  return next;
}
