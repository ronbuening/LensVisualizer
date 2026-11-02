/**
 * Element-centric editing model for the lens builder.
 *
 * The builder edits a lens as an optical train read front to rear: air-separated groups (a single element, or
 * elements cemented together) and the aperture stop, each followed by an air gap. Everything that belongs to one
 * element (material, centre thickness, its surfaces' radii, diameters and aspheric terms) lives on that element or its
 * group, instead of being spread across rows of the V2 surface list.
 *
 * `toElementModel` reads a V2 draft into this model; `applyElementModel` writes the model back into a new V2 draft
 * and leaves every field the model does not cover untouched. The operations are pure and return new models.
 */

import { LINE_NM } from "../optics/chromatic.js";
import type { ElementV2Input, LensDataV2Input, SurfaceV2Input } from "../types/lensDataV2.js";

/** One refracting surface. */
export interface BuilderSurface {
  /** V2 surface label; kept stable so variable gaps and other label references keep working. */
  label: string;
  /** Radius of curvature in mm, or flat. */
  R: number | "flat";
  /** Clear semi-diameter in mm. Left out only on a stop whose radius the engine derives. */
  sd?: number;
  /** Sparse aspheric terms, as in V2. */
  asphere?: SurfaceV2Input["asphere"];
  /** V2 surface fields the builder does not edit (for example `diffractive`, `innerSd`), carried through unchanged. */
  extra?: Omit<SurfaceV2Input, "label" | "R" | "d" | "sd" | "medium" | "asphere">;
}

/** An element's optical material. */
export interface BuilderMaterial {
  /** Catalog glass name when known (for example `"N-BK7"`). */
  glass?: string;
  nd: number;
  vd?: number;
}

export interface BuilderElement {
  /** V2 element id; stable across edits. */
  id: number;
  /** V2 `name`: the short element name, for example `"L1"`. */
  name: string;
  /** V2 `label`: a short description, for example `"Front crown"`. */
  label: string;
  /** V2 `type`: the shape descriptor, for example `"Biconvex Positive"`. */
  type: string;
  material: BuilderMaterial;
  /** Centre thickness in mm. */
  thickness: number;
  /** V2 element fields the builder does not edit, carried through unchanged. */
  extra?: Omit<ElementV2Input, "id" | "name" | "label" | "type" | "nd" | "vd" | "glass" | "cemented">;
}

/** One air-separated unit: a single element, or two or more elements cemented together. */
export interface BuilderGroup {
  kind: "group";
  /** Stable key for React lists and selection; not exported. */
  key: string;
  /** V2 `cemented` name shared by the elements of a cemented group (for example `"D1"`). */
  cementName?: string;
  /** One or more elements, front to rear. */
  elements: BuilderElement[];
  /** `elements.length + 1` surfaces: the first element's front, each cemented junction, then the last element's rear. */
  surfaces: BuilderSurface[];
}

/** The aperture stop: a flat surface in air. */
export interface BuilderStop {
  kind: "stop";
  key: string;
  surface: BuilderSurface;
}

export type BuilderItem = BuilderGroup | BuilderStop;

/** The air after one item. */
export interface BuilderGap {
  /**
   * Spacing in mm. For a variable gap this is the first scheduled value (infinity focus, first zoom station). On the
   * last item it is the back focal distance to the image plane.
   */
  mm: number;
  /**
   * V2 `gaps` schedule `[zoomStation][focusKeyframe]` when the spacing varies with zoom or focus; absent for a fixed
   * gap. A prime's focus schedule is one row: `[[infinity, ..., close]]`.
   */
  schedule?: number[][];
  /** Display label of a scheduled gap (V2 `gaps[label].label`, for example `"BF"`). */
  scheduleLabel?: string;
  /** True when an aberration-control ring also moves this gap; the form leaves its values to Advanced JSON. */
  aberrationControlled?: boolean;
}

export interface BuilderModel {
  items: BuilderItem[];
  /** `gaps[i]` is the air after `items[i]`; `gaps.length === items.length`. */
  gaps: BuilderGap[];
}

export type ToModelResult = { ok: true; model: BuilderModel } | { ok: false; reasons: string[] };

/** Thrown by an operation the model cannot represent; the message is shown to the reader as is. */
export class BuilderEditError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "BuilderEditError";
  }
}

function fail(message: string): never {
  throw new BuilderEditError(message);
}

function nonnegative(value: number, what: string): void {
  if (!Number.isFinite(value) || value < 0) fail(`${what} must be a finite, non-negative number.`);
}

function positive(value: number, what: string): void {
  if (!Number.isFinite(value) || value <= 0) fail(`${what} must be a finite, positive number.`);
}

function indexIn(index: number, length: number, what: string): void {
  if (!Number.isInteger(index) || index < 0 || index >= length) fail(`Choose an existing ${what}.`);
}

function itemAt(model: BuilderModel, index: number): BuilderItem {
  indexIn(index, model.items.length, "item");
  return model.items[index];
}

function groupAt(model: BuilderModel, index: number): BuilderGroup {
  const item = itemAt(model, index);
  if (item.kind !== "group") fail("Choose a glass group, rather than the aperture stop.");
  return item;
}

function itemSurfaces(item: BuilderItem): BuilderSurface[] {
  return item.kind === "group" ? item.surfaces : [item.surface];
}

function freshLabels(model: BuilderModel, count: number): string[] {
  const labels = model.items.flatMap(itemSurfaces).map((s) => s.label);
  let n = Math.max(0, ...labels.map((label) => Number(/^(\d+)/.exec(label)?.[1] ?? 0)));
  return Array.from({ length: count }, () => String(++n));
}

function freshKey(model: BuilderModel, base: string): string {
  const keys = new Set(model.items.map((item) => item.key));
  let key = base;
  let suffix = 1;
  while (keys.has(key)) key = `${base}:${suffix++}`;
  return key;
}

function editableGap(model: BuilderModel, index: number): BuilderGap {
  itemAt(model, index);
  const gap = model.gaps[index];
  if (!gap) fail("Each item needs a following air gap.");
  if (gap.aberrationControlled) fail("This gap is moved by an aberration-control ring; edit it in Advanced JSON.");
  return gap;
}

function readSurface(surface: SurfaceV2Input): BuilderSurface {
  const { d: _d, medium: _medium, label, R, sd, asphere, ...extra } = structuredClone(surface);
  return {
    label,
    R,
    ...(sd !== undefined ? { sd } : {}),
    ...(asphere !== undefined ? { asphere } : {}),
    ...(Object.keys(extra).length ? { extra } : {}),
  };
}

function readElement(element: ElementV2Input, thickness: number): BuilderElement {
  const { id, name, label, type, nd, vd, glass, cemented: _cemented, ...extra } = structuredClone(element);
  return {
    id,
    name,
    label,
    type,
    thickness,
    material: { nd, ...(vd !== undefined ? { vd } : {}), ...(glass !== undefined ? { glass } : {}) },
    ...(Object.keys(extra).length ? { extra } : {}),
  };
}

/** Keep focus/zoom travel when a fixed amount of space is consumed or returned. */
function offsetGap(gap: BuilderGap, amount: number): BuilderGap {
  const next = structuredClone(gap);
  next.mm += amount;
  if (next.schedule) next.schedule = next.schedule.map((row) => row.map((mm) => mm + amount));
  return next;
}

function minGap(gap: BuilderGap): number {
  return gap.schedule ? Math.min(...gap.schedule.flat()) : gap.mm;
}

function validateSurface(surface: BuilderSurface, stop = false): void {
  if (surface.R !== "flat" && (!Number.isFinite(surface.R) || surface.R === 0))
    fail("A surface radius must be finite and nonzero, or flat.");
  if (stop && surface.R !== "flat" && Math.abs(surface.R) <= 1e10) fail("The aperture stop must stay flat.");
  if (stop && surface.sd !== undefined)
    fail("The air stop's radius comes from the aperture or zoom schedule; leave its semi-diameter unset.");
  if (surface.sd !== undefined) positive(surface.sd, "Semi-diameter");
  else if (!stop) fail("A glass surface needs a clear semi-diameter.");
  if (surface.asphere && Object.values(surface.asphere).some((value) => !Number.isFinite(value)))
    fail("Aspheric coefficients must be finite numbers.");
  if (surface.extra?.interaction && surface.extra.interaction.type !== "refract")
    fail("Mirror and blocking surfaces need Advanced JSON.");
  if (surface.extra?.stopPlacement) fail("A stop inside glass needs Advanced JSON.");
}

function validateElement(element: BuilderElement): void {
  positive(element.thickness, "Centre thickness");
  if (!element.material || !Number.isFinite(element.material.nd) || element.material.nd <= 1)
    fail("The glass index must be greater than one.");
  if (element.material.vd !== undefined) positive(element.material.vd, "Abbe number");
}

/** Structural checks also protect callers that construct models directly. A missing stop is allowed during insertion. */
function checkModel(model: BuilderModel): void {
  if (model.gaps.length !== model.items.length) fail("Each item needs exactly one following air gap.");
  const ids = new Set<number>();
  const labels = new Set<string>();
  const keys = new Set<string>();
  let stops = 0;
  for (const [i, item] of model.items.entries()) {
    if (keys.has(item.key)) fail("Item keys must be unique.");
    keys.add(item.key);
    if (item.kind === "stop") {
      stops++;
      if (item.surface.label !== "STO") fail("The aperture stop must be labelled STO.");
    } else {
      if (!item.elements.length || item.surfaces.length !== item.elements.length + 1)
        fail("A group needs one more surface than elements.");
      for (const element of item.elements) {
        if (!Number.isInteger(element.id) || element.id <= 0 || ids.has(element.id))
          fail("Element ids must be unique positive integers.");
        ids.add(element.id);
        validateElement(element);
      }
    }
    for (const surface of itemSurfaces(item)) {
      if (!surface.label || labels.has(surface.label) || (item.kind === "group" && surface.label === "STO"))
        fail("Surface labels must be unique, with STO reserved for the stop.");
      labels.add(surface.label);
      validateSurface(surface, item.kind === "stop");
    }
    const gap = model.gaps[i];
    nonnegative(gap.mm, "Air spacing");
    if (gap.schedule) {
      if (
        !gap.schedule.length ||
        !gap.schedule[0].length ||
        gap.schedule.some((row) => row.length !== gap.schedule![0].length)
      )
        fail("A gap schedule needs equally sized, non-empty rows.");
      gap.schedule.flat().forEach((mm) => nonnegative(mm, "Scheduled spacing"));
      if (gap.mm !== gap.schedule[0][0]) fail("The gap spacing must equal the first scheduled value.");
    }
  }
  if (stops > 1) fail("The lens can have only one aperture stop.");
  if (!ids.size) fail("The lens needs at least one glass element.");
}

/**
 * Read a V2 draft into the element model. Returns `ok: false` with readable reasons when the draft uses structure the
 * model cannot show (folded or mirror paths, `media` layers, a stop inside an element, element `span`s, more or fewer
 * than one stop, surfaces whose media do not form contiguous element runs).
 */
export function toElementModel(draft: LensDataV2Input): ToModelResult {
  const reasons: string[] = [];
  if (draft.opticalPath || draft.surfaces.some((s) => s.interaction && s.interaction.type !== "refract"))
    reasons.push("Folded, mirror and blocking paths need Advanced JSON.");
  if (draft.media?.length || draft.surfaces.some((s) => typeof s.medium === "string"))
    reasons.push("Undrawn media layers need Advanced JSON.");
  if (draft.elements.some((e) => e.span)) reasons.push("Explicit element spans need Advanced JSON.");
  const stops = draft.surfaces.filter((s) => s.label === "STO");
  if (stops.length !== 1) reasons.push("The element editor needs exactly one aperture stop labelled STO.");
  if (
    draft.surfaces.some(
      (s, i) =>
        s.stopPlacement ||
        (s.label === "STO" && (s.medium !== undefined || draft.surfaces[i - 1]?.medium !== undefined)),
    )
  )
    reasons.push("A stop inside an element needs Advanced JSON.");
  if (stops.some((s) => s.R !== "flat" && Math.abs(s.R) <= 1e10)) reasons.push("The aperture stop must be flat.");
  if (reasons.length) return { ok: false, reasons };

  const model: BuilderModel = { items: [], gaps: [] };
  const byId = new Map(draft.elements.map((e) => [e.id, e]));
  const used = new Set<number>();
  const appendGap = (surface: SurfaceV2Input) => {
    const scheduled = draft.gaps && Object.hasOwn(draft.gaps, surface.label) ? draft.gaps[surface.label] : undefined;
    model.gaps.push({
      mm: scheduled?.values[0]?.[0] ?? surface.d ?? 0,
      ...(scheduled
        ? {
            schedule: structuredClone(scheduled.values),
            ...(scheduled.label !== undefined ? { scheduleLabel: scheduled.label } : {}),
          }
        : {}),
      ...(draft.aberrationControl && Object.hasOwn(draft.aberrationControl.gaps, surface.label)
        ? { aberrationControlled: true }
        : {}),
    });
  };
  for (let i = 0; i < draft.surfaces.length; i++) {
    const surface = draft.surfaces[i];
    if (surface.label === "STO") {
      model.items.push({ kind: "stop", key: "stop", surface: readSurface(surface) });
      appendGap(surface);
      continue;
    }
    if (typeof surface.medium !== "number") {
      reasons.push(`Surface ${surface.label} does not begin an element or mark the stop.`);
      break;
    }
    const group: BuilderGroup = { kind: "group", key: `group:${surface.medium}`, elements: [], surfaces: [] };
    while (i < draft.surfaces.length && draft.surfaces[i].medium !== undefined) {
      const current = draft.surfaces[i];
      const id = current.medium as number;
      const element = byId.get(id);
      if (!element || used.has(id) || current.label === "STO") {
        reasons.push(`Surface ${current.label}: element media must form contiguous, two-surface elements used once.`);
        break;
      }
      if (
        (draft.gaps && Object.hasOwn(draft.gaps, current.label)) ||
        (draft.aberrationControl && Object.hasOwn(draft.aberrationControl.gaps, current.label))
      ) {
        reasons.push(`Surface ${current.label}: a variable gap inside glass cannot be shown as air spacing.`);
        break;
      }
      used.add(id);
      group.elements.push(readElement(element, current.d ?? 0));
      group.surfaces.push(readSurface(current));
      i++;
    }
    if (reasons.length) break;
    const exit = draft.surfaces[i];
    if (!exit || exit.label === "STO") {
      reasons.push("Every glass group must end at a surface that exits to air.");
      break;
    }
    group.surfaces.push(readSurface(exit));
    const names = new Set(group.elements.map((e) => byId.get(e.id)?.cemented).filter((name) => name !== undefined));
    if (names.size > 1) reasons.push(`Group ${group.key} has conflicting cemented names.`);
    if (names.size === 1) group.cementName = [...names][0];
    model.items.push(group);
    appendGap(exit);
  }
  if (used.size !== draft.elements.length) reasons.push("Every element must occur exactly once in the optical train.");
  const gapLabels = new Set(model.items.map((item) => itemSurfaces(item).at(-1)!.label));
  if (
    Object.keys(draft.gaps ?? {}).some((label) => !gapLabels.has(label)) ||
    Object.keys(draft.aberrationControl?.gaps ?? {}).some((label) => !gapLabels.has(label))
  )
    reasons.push("Every scheduled or aberration-controlled gap must follow a group or the stop.");
  if (!reasons.length) {
    try {
      checkModel(model);
    } catch (error) {
      reasons.push(error instanceof Error ? error.message : String(error));
    }
  }
  return reasons.length ? { ok: false, reasons } : { ok: true, model };
}

/**
 * Write the model into a new V2 draft: `elements`, `surfaces` and the scheduled entries of `gaps` come from the model;
 * every other field comes from `draft` unchanged. Numeric surface labels are renumbered when every reference can
 * be remapped. Automatic `L<n>` names follow structural edits only while the original names form the sequence and
 * no existing element has been renamed; explicitly authored names are kept.
 */
export function applyElementModel(draft: LensDataV2Input, model: BuilderModel): LensDataV2Input {
  checkModel(model);
  if (model.items.filter((item) => item.kind === "stop").length !== 1)
    fail("The lens needs exactly one aperture stop.");
  const next = structuredClone(draft);
  next.elements = [];
  next.surfaces = [];
  const gaps: NonNullable<LensDataV2Input["gaps"]> = Object.create(null);
  const usedNames = new Set(
    model.items.flatMap((item) => (item.kind === "group" && item.cementName ? [item.cementName] : [])),
  );
  for (const [i, item] of model.items.entries()) {
    if (item.kind === "stop") {
      next.surfaces.push({ ...structuredClone(item.surface.extra), ...surfaceFields(item.surface) });
    } else {
      let cemented = item.cementName;
      if (item.elements.length > 1 && !cemented) {
        const prefix = item.elements.length === 2 ? "D" : "T";
        let n = 1;
        while (usedNames.has(`${prefix}${n}`)) n++;
        cemented = `${prefix}${n}`;
        usedNames.add(cemented);
      }
      for (const element of item.elements) {
        next.elements.push({
          ...structuredClone(element.extra),
          id: element.id,
          name: element.name,
          label: element.label,
          type: element.type,
          ...structuredClone(element.material),
          ...(item.elements.length > 1 ? { cemented } : {}),
        });
      }
      for (const [j, surface] of item.surfaces.entries()) {
        next.surfaces.push({
          ...structuredClone(surface.extra),
          ...surfaceFields(surface),
          ...(j < item.elements.length ? { medium: item.elements[j].id, d: item.elements[j].thickness } : {}),
        });
      }
    }
    const last = next.surfaces.at(-1)!;
    const gap = model.gaps[i];
    if (gap.schedule)
      gaps[last.label] = {
        ...(gap.scheduleLabel !== undefined ? { label: gap.scheduleLabel } : {}),
        values: structuredClone(gap.schedule),
      };
    else last.d = gap.mm;
  }
  if (Object.keys(gaps).length || draft.gaps !== undefined) next.gaps = gaps;
  else delete next.gaps;
  renumber(next, draft);
  return next;
}

/** Set the air after `items[gapIndex]` (a fixed gap, or the first value of a schedule). */
export function setGap(model: BuilderModel, gapIndex: number, mm: number): BuilderModel {
  nonnegative(mm, "Air spacing");
  editableGap(model, gapIndex);
  const next = structuredClone(model);
  const gap = next.gaps[gapIndex];
  gap.mm = mm;
  if (gap.schedule) gap.schedule[0][0] = mm;
  return next;
}

/** Replace a gap's schedule (same shape as the existing one); `mm` follows its first value. */
export function setGapSchedule(model: BuilderModel, gapIndex: number, schedule: number[][]): BuilderModel {
  const gap = editableGap(model, gapIndex);
  if (
    !gap.schedule ||
    schedule.length !== gap.schedule.length ||
    schedule.some((row, i) => row.length !== gap.schedule![i].length)
  )
    fail("The replacement schedule must have the same shape as the existing schedule.");
  schedule.flat().forEach((mm) => nonnegative(mm, "Scheduled spacing"));
  const next = structuredClone(model);
  next.gaps[gapIndex].schedule = structuredClone(schedule);
  next.gaps[gapIndex].mm = schedule[0][0];
  return next;
}

/**
 * Insert a new single element before `items[itemIndex]` (`items.length` inserts after the last item, ahead of the
 * image). It gets a common crown glass, sensible radii, thickness and diameter taken from its neighbours, and a short
 * air gap; the gap it was inserted into keeps its total length where possible.
 */
export function insertElement(model: BuilderModel, itemIndex: number): BuilderModel {
  indexIn(itemIndex, model.items.length + 1, "insertion position");
  if (itemIndex > 0) editableGap(model, itemIndex - 1);
  const next = structuredClone(model);
  const neighbours = [model.items[itemIndex - 1], model.items[itemIndex]].filter((item): item is BuilderItem => !!item);
  const diameters = neighbours
    .flatMap(itemSurfaces)
    .flatMap((surface) => (surface.sd === undefined ? [] : [surface.sd]));
  const sd = diameters.length ? Math.max(...diameters) : 10;
  const thickness = sd * 0.3;
  const id =
    Math.max(0, ...model.items.flatMap((item) => (item.kind === "group" ? item.elements.map((e) => e.id) : []))) + 1;
  const [front, rear] = freshLabels(model, 2);
  const group: BuilderGroup = {
    kind: "group",
    key: freshKey(model, `group:${id}`),
    elements: [
      {
        id,
        name: `L${id}`,
        label: `Element ${id}`,
        type: "Biconvex Positive",
        thickness,
        material: { nd: 1.5168, vd: 64.17, glass: "N-BK7" },
      },
    ],
    surfaces: [
      { label: front, R: sd * 10, sd },
      { label: rear, R: -sd * 10, sd },
    ],
  };
  let following: BuilderGap = { mm: 1.5 };
  if (itemIndex > 0) {
    const previous = next.gaps[itemIndex - 1];
    const consume = thickness + 1.5;
    const remainder = minGap(previous) >= consume + 1 ? offsetGap(previous, -consume) : previous;
    if (itemIndex === model.items.length) {
      // The final gap is still the back focus, including all focus/zoom stations.
      following = remainder;
      next.gaps[itemIndex - 1] = { mm: 1.5 };
    } else next.gaps[itemIndex - 1] = remainder;
  }
  next.items.splice(itemIndex, 0, group);
  next.gaps.splice(itemIndex, 0, following);
  return next;
}

/** Insert the aperture stop before `items[itemIndex]`. Throws `BuilderEditError` when the lens already has one. */
export function insertStop(model: BuilderModel, itemIndex: number): BuilderModel {
  indexIn(itemIndex, model.items.length + 1, "insertion position");
  if (model.items.some((item) => item.kind === "stop"))
    fail("The lens already has an aperture stop. Move the existing stop instead.");
  const next = structuredClone(model);
  let following: BuilderGap = { mm: 1.5 };
  if (itemIndex > 0) {
    const gap = editableGap(model, itemIndex - 1);
    const half = minGap(gap) / 2;
    next.gaps[itemIndex - 1] = offsetGap(gap, -half);
    following = { mm: half };
    if (itemIndex === model.items.length) {
      following = next.gaps[itemIndex - 1];
      next.gaps[itemIndex - 1] = { mm: half };
    }
  }
  next.items.splice(itemIndex, 0, { kind: "stop", key: freshKey(model, "stop"), surface: { label: "STO", R: "flat" } });
  next.gaps.splice(itemIndex, 0, following);
  return next;
}

/** Remove an item. Throws `BuilderEditError` for the only stop or the last remaining element. */
export function removeItem(model: BuilderModel, itemIndex: number): BuilderModel {
  const item = itemAt(model, itemIndex);
  if (item.kind === "stop" && model.items.filter((entry) => entry.kind === "stop").length === 1)
    fail("Keep the only aperture stop; move it instead.");
  if (item.kind === "group" && model.items.filter((entry) => entry.kind === "group").length === 1)
    fail("Keep at least one glass element in the lens.");
  const following = editableGap(model, itemIndex);
  const next = structuredClone(model);
  if (itemIndex > 0) {
    const previous = editableGap(model, itemIndex - 1);
    const thickness = item.kind === "group" ? item.elements.reduce((total, e) => total + e.thickness, 0) : 0;
    next.gaps[itemIndex - 1] = mergeGaps(previous, following, thickness);
  }
  next.items.splice(itemIndex, 1);
  next.gaps.splice(itemIndex, 1);
  return next;
}

/** Remove one element from a cemented group; on a single element this is `removeItem`. */
export function removeElement(model: BuilderModel, itemIndex: number, elementIndex: number): BuilderModel {
  const group = groupAt(model, itemIndex);
  indexIn(elementIndex, group.elements.length, "element");
  if (group.elements.length === 1) return removeItem(model, itemIndex);
  const next = structuredClone(model);
  const edited = groupAt(next, itemIndex);
  edited.elements.splice(elementIndex, 1);
  edited.surfaces.splice(elementIndex === 0 ? 0 : elementIndex + 1, 1);
  if (edited.elements.length === 1) delete edited.cementName;
  return next;
}

/** Swap an item with its neighbour; each gap stays with the item it follows. */
export function moveItem(model: BuilderModel, itemIndex: number, direction: -1 | 1): BuilderModel {
  itemAt(model, itemIndex);
  if (direction !== -1 && direction !== 1) fail("Move an item one place forward or backward.");
  const to = itemIndex + direction;
  itemAt(model, to);
  const next = structuredClone(model);
  [next.items[itemIndex], next.items[to]] = [next.items[to], next.items[itemIndex]];
  [next.gaps[itemIndex], next.gaps[to]] = [next.gaps[to], next.gaps[itemIndex]];
  return next;
}

/**
 * Cement `items[itemIndex]` to the next group: the air gap between them is removed and the first group's rear surface
 * becomes the shared junction (the second group's front surface is dropped). Throws `BuilderEditError` unless both are
 * groups or when the gap is scheduled.
 */
export function cementWithNext(model: BuilderModel, itemIndex: number): BuilderModel {
  const first = groupAt(model, itemIndex);
  const second = groupAt(model, itemIndex + 1);
  const gap = editableGap(model, itemIndex);
  if (gap.schedule) fail("A scheduled air gap cannot be cemented. Make it fixed in Advanced JSON first.");
  const next = structuredClone(model);
  const merged = groupAt(next, itemIndex);
  merged.elements.push(...structuredClone(second.elements));
  merged.surfaces.push(...structuredClone(second.surfaces.slice(1)));
  if (!first.cementName && second.cementName) merged.cementName = second.cementName;
  next.items.splice(itemIndex + 1, 1);
  next.gaps.splice(itemIndex, 1);
  return next;
}

/**
 * Split a cemented group at junction `junctionIndex` (1 … elements.length − 1) into two groups separated by
 * `gapMm` of air; the junction surface is duplicated so both sides keep its radius. Phase or explicit interaction
 * junctions are refused until the operation can assign that interaction to one resulting surface.
 */
export function splitGroup(
  model: BuilderModel,
  itemIndex: number,
  junctionIndex: number,
  gapMm?: number,
): BuilderModel {
  const group = groupAt(model, itemIndex);
  if (!Number.isInteger(junctionIndex) || junctionIndex < 1 || junctionIndex >= group.elements.length)
    fail("Choose a cemented junction between two elements.");
  const junction = group.surfaces[junctionIndex];
  if (junction.extra?.diffractive || junction.extra?.interaction)
    fail(
      "Cannot split this junction: assign its diffractive phase or interaction to one resulting surface in Advanced JSON first.",
    );
  const spacing = gapMm ?? 1.5;
  nonnegative(spacing, "Air spacing");
  const next = structuredClone(model);
  const left = groupAt(next, itemIndex);
  const right: BuilderGroup = {
    kind: "group",
    key: freshKey(model, `group:${group.elements[junctionIndex].id}`),
    elements: left.elements.splice(junctionIndex),
    surfaces: left.surfaces.splice(junctionIndex + 1),
  };
  const front = structuredClone(left.surfaces[junctionIndex]);
  front.label = freshLabels(model, 1)[0];
  right.surfaces.unshift(front);
  if (left.elements.length === 1) {
    delete left.cementName;
    if (right.elements.length > 1 && group.cementName) right.cementName = group.cementName;
  }
  next.items.splice(itemIndex + 1, 0, right);
  next.gaps.splice(itemIndex, 0, { mm: spacing });
  return next;
}

export type ElementPatch = Partial<Pick<BuilderElement, "name" | "label" | "type" | "thickness" | "material">>;

export function updateElement(
  model: BuilderModel,
  itemIndex: number,
  elementIndex: number,
  patch: ElementPatch,
): BuilderModel {
  const group = groupAt(model, itemIndex);
  indexIn(elementIndex, group.elements.length, "element");
  const next = structuredClone(model);
  const edited = groupAt(next, itemIndex);
  edited.elements[elementIndex] = { ...edited.elements[elementIndex], ...structuredClone(patch) };
  validateElement(edited.elements[elementIndex]);
  return next;
}

export type SurfacePatch = Partial<Pick<BuilderSurface, "R" | "sd" | "asphere">>;

/** Patch `group.surfaces[surfaceIndex]`, or the stop's surface when the item is the stop (`surfaceIndex` 0). */
export function updateSurface(
  model: BuilderModel,
  itemIndex: number,
  surfaceIndex: number,
  patch: SurfacePatch,
): BuilderModel {
  const item = itemAt(model, itemIndex);
  indexIn(surfaceIndex, itemSurfaces(item).length, "surface");
  const next = structuredClone(model);
  const surfaces = itemSurfaces(next.items[itemIndex]);
  const edited = { ...surfaces[surfaceIndex], ...structuredClone(patch) };
  if (patch.sd === undefined && Object.hasOwn(patch, "sd")) delete edited.sd;
  if (patch.asphere === undefined && Object.hasOwn(patch, "asphere")) delete edited.asphere;
  validateSurface(edited, item.kind === "stop");
  if (next.items[itemIndex].kind === "stop") next.items[itemIndex].surface = edited;
  else surfaces[surfaceIndex] = edited;
  return next;
}

/** Paraxial focal length in mm of one element in air (thick lens), or `null` when it is afocal or undefined. */
export function elementFocalLength(group: BuilderGroup, elementIndex: number): number | null {
  const element = group.elements[elementIndex];
  if (!element || !group.surfaces[elementIndex] || !group.surfaces[elementIndex + 1]) return null;
  return groupFocalLength({
    ...group,
    elements: [element],
    surfaces: group.surfaces.slice(elementIndex, elementIndex + 2),
  });
}

/** Paraxial focal length in mm of a whole group in air, or `null` when it is afocal. */
export function groupFocalLength(group: BuilderGroup): number | null {
  if (!group.elements.length || group.surfaces.length !== group.elements.length + 1) return null;
  // Reduced-angle ABCD matrices: refraction [1, 0; -(n2-n1)/R, 1], translation [1, t/n; 0, 1].
  let a = 1,
    b = 0,
    c = 0,
    d = 1,
    before = 1;
  for (const [i, surface] of group.surfaces.entries()) {
    const after = group.elements[i]?.material.nd ?? 1;
    if (
      !Number.isFinite(after) ||
      after <= 0 ||
      (surface.R !== "flat" && (!Number.isFinite(surface.R) || surface.R === 0))
    )
      return null;
    const phase = surface.extra?.diffractive;
    // Same d-line power as optics/math/diffractivePhase.ts#diffractiveParaxialPower (no public seam export).
    const c2 = phase?.terms.find((term) => term.radialPower === 2)?.coefficient ?? 0;
    const phasePower = phase ? -2 * c2 * ((phase.diffractionOrder * LINE_NM.d) / phase.referenceWavelengthNm) : 0;
    const power = (after - before) * curvature(surface.R) + phasePower;
    c -= power * a;
    d -= power * b;
    if (i < group.elements.length) {
      const thickness = group.elements[i].thickness;
      if (!Number.isFinite(thickness) || thickness < 0) return null;
      a += (thickness / after) * c;
      b += (thickness / after) * d;
    }
    before = after;
  }
  return Number.isFinite(c) && Math.abs(c) > 1e-12 ? -1 / c : null;
}

/** A V2-style shape descriptor from the two radii and the sign of the power, for example `"Positive Meniscus"`. */
export function describeShape(
  front: BuilderSurface["R"],
  rear: BuilderSurface["R"],
  focalLength: number | null,
): string {
  const f = curvature(front),
    r = curvature(rear);
  const sign =
    focalLength === null || !Number.isFinite(focalLength) || focalLength === 0
      ? ""
      : focalLength > 0
        ? "Positive"
        : "Negative";
  if (!f && !r) return "Plane-Parallel Plate";
  if (!f || !r) return `${f > 0 || r < 0 ? "Plano-Convex" : "Plano-Concave"}${sign ? ` ${sign}` : ""}`;
  if (f > 0 && r < 0) return `Biconvex${sign ? ` ${sign}` : ""}`;
  if (f < 0 && r > 0) return `Biconcave${sign ? ` ${sign}` : ""}`;
  return `${sign ? `${sign} ` : ""}Meniscus`;
}

function surfaceFields(surface: BuilderSurface): BuilderSurface {
  const { extra: _extra, ...fields } = structuredClone(surface);
  return fields;
}

function curvature(radius: BuilderSurface["R"]): number {
  return radius === "flat" || Math.abs(radius) > 1e10 ? 0 : 1 / radius;
}

function mergeGaps(first: BuilderGap, second: BuilderGap, thickness: number): BuilderGap {
  if (
    first.schedule &&
    second.schedule &&
    (first.schedule.length !== second.schedule.length ||
      first.schedule.some((row, i) => row.length !== second.schedule![i].length))
  )
    fail("These gap schedules have different shapes and cannot be combined.");
  const schedule = first.schedule ?? second.schedule;
  return {
    mm: first.mm + second.mm + thickness,
    ...(schedule
      ? {
          schedule: schedule.map((row, i) =>
            row.map(
              (_, j) => (first.schedule?.[i][j] ?? first.mm) + (second.schedule?.[i][j] ?? second.mm) + thickness,
            ),
          ),
          ...((first.scheduleLabel ?? second.scheduleLabel) !== undefined
            ? { scheduleLabel: first.scheduleLabel ?? second.scheduleLabel }
            : {}),
        }
      : {}),
  };
}

/** Remap authored references together, never a label in isolation. Descriptive labels remain stable. */
function renumber(next: LensDataV2Input, original: LensDataV2Input): void {
  const structuralEdit =
    next.elements.length !== original.elements.length ||
    next.elements.some((e, i) => e.id !== original.elements[i]?.id) ||
    next.surfaces.length !== original.surfaces.length ||
    next.surfaces.some((s, i) => s.label !== original.surfaces[i]?.label || s.medium !== original.surfaces[i]?.medium);
  const originalNames = new Map(original.elements.map((e) => [e.id, e.name]));
  const renumberNames =
    structuralEdit &&
    original.elements.every((e, i) => e.name === `L${i + 1}`) &&
    next.elements.every((e) => e.name === (originalNames.get(e.id) ?? `L${e.id}`));
  const labels = new Set(next.surfaces.map((s) => s.label));
  const references = [
    ...Object.keys(next.gaps ?? {}),
    ...Object.keys(next.aberrationControl?.gaps ?? {}),
    ...next.elements.flatMap((e) => e.span ?? []),
    ...[...(next.groups ?? []), ...(next.doublets ?? [])].flatMap((a) => [a.fromSurface, a.toSurface]),
    ...(next.opticalPath?.surfaceOrder ?? []),
    ...(next.source?.errata ?? []).flatMap((e) => (e.status === "corrected" ? [e.surface] : [])),
  ];
  for (const label of references) {
    if (!labels.has(label) && original.surfaces.some((s) => s.label === label))
      fail(
        `Surface ${label} is still referenced by a control, span, annotation, optical path or erratum; edit that reference in Advanced JSON first.`,
      );
  }
  if (references.some((label) => !labels.has(label))) return;
  const mapping = new Map<string, string>();
  let number = 0;
  for (const surface of next.surfaces) {
    const numeric = /^(\d+)(A?)$/.exec(surface.label);
    mapping.set(surface.label, numeric ? `${++number}${numeric[2]}` : surface.label);
  }
  // A nonnumeric authored label must never be shadowed by a generated one.
  if (new Set(mapping.values()).size !== mapping.size) return;
  const remap = (label: string) => mapping.get(label) ?? label;
  for (const surface of next.surfaces) surface.label = remap(surface.label);
  next.elements.forEach((e, i) => {
    if (renumberNames) e.name = `L${i + 1}`;
    if (e.span) e.span = [remap(e.span[0]), remap(e.span[1])];
  });
  if (next.gaps) next.gaps = Object.fromEntries(Object.entries(next.gaps).map(([key, value]) => [remap(key), value]));
  if (next.aberrationControl)
    next.aberrationControl.gaps = Object.fromEntries(
      Object.entries(next.aberrationControl.gaps).map(([key, value]) => [remap(key), value]),
    );
  for (const annotation of [...(next.groups ?? []), ...(next.doublets ?? [])]) {
    annotation.fromSurface = remap(annotation.fromSurface);
    annotation.toSurface = remap(annotation.toSurface);
  }
  if (next.opticalPath?.surfaceOrder) next.opticalPath.surfaceOrder = next.opticalPath.surfaceOrder.map(remap);
  for (const erratum of next.source?.errata ?? [])
    if (erratum.status === "corrected") erratum.surface = remap(erratum.surface);
}
