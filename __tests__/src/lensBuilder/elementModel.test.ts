import { describe, expect, it } from "vitest";
import { createTemplate, validateDraft } from "../../../src/lensBuilder/draft.js";
import {
  applyElementModel,
  BuilderEditError,
  cementWithNext,
  describeShape,
  elementFocalLength,
  groupFocalLength,
  insertElement,
  insertStop,
  moveItem,
  removeElement,
  removeItem,
  setGap,
  setGapSchedule,
  splitGroup,
  toElementModel,
  updateElement,
  updateSurface,
  type BuilderGroup,
  type BuilderModel,
} from "../../../src/lensBuilder/elementModel.js";
import type { LensDataV2Input } from "../../../src/types/lensDataV2.js";
import { ALL_CATALOG_KEYS, authoredInputForKey } from "../../../src/utils/catalog/lensCatalog.js";

// These tests protect the shared editor contract, using catalog structures rather than per-lens constants.
const catalog = ALL_CATALOG_KEYS.map((key) => authoredInputForKey(key)!);

function modelOf(draft = createTemplate()): BuilderModel {
  const result = toElementModel(draft);
  if (!result.ok) throw new Error(result.reasons.join("\n"));
  return result.model;
}

function groupOf(model: BuilderModel, index = 0): BuilderGroup {
  const item = model.items[index];
  if (item.kind !== "group") throw new Error("Expected a group");
  return item;
}

function expectBuild(model: BuilderModel, draft = createTemplate()): LensDataV2Input {
  const applied = applyElementModel(draft, model);
  const result = validateDraft(applied);
  expect(result.ok ? [] : result.issues).toEqual([]);
  return applied;
}

function ordered(draft: LensDataV2Input): boolean {
  let n = 0;
  return (
    draft.surfaces.every((s) => !/^\d+A?$/.test(s.label) || s.label === `${++n}${s.label.endsWith("A") ? "A" : ""}`) &&
    draft.elements.every((e, i) => !/^L\d+$/.test(e.name) || e.name === `L${i + 1}`)
  );
}

function catalogWith(predicate: (draft: LensDataV2Input) => boolean): LensDataV2Input {
  const found = catalog.find((draft) => predicate(draft) && ordered(draft) && toElementModel(draft).ok);
  expect(found, "The catalog must exercise this supported V2 structure").toBeDefined();
  return found!;
}

function enrichedTemplate(): LensDataV2Input {
  const draft = createTemplate();
  draft.source = { errata: [{ status: "unresolved", note: "Synthetic source note" }] };
  draft.elements[0] = {
    ...draft.elements[0],
    indexReference: "d",
    role: "Front group",
    apd: "inferred",
    apdNote: "Illustrative",
    dPgF: 0.001,
    nC: 1.514,
    focalLengthMm: 36,
  };
  draft.surfaces[0].innerSd = 0;
  draft.surfaces[0].interaction = { type: "refract" };
  draft.surfaces[0].asphere = { A4: 1e-9 };
  draft.rearPlates = [{ thicknessMm: 1, nd: 1.5168, vd: 64.17, gapAfterMm: 0.1, source: "Synthetic" }];
  return draft;
}

describe("element model V2 mapping", () => {
  it("round trips the template and independent catalog structures without losing authored data", () => {
    const fixtures = [
      createTemplate(),
      enrichedTemplate(),
      catalogWith((d) => d.elements.some((e) => e.cemented)),
      catalogWith((d) => d.surfaces.some((s) => s.asphere)),
      catalogWith((d) => !!d.gaps?.[d.surfaces.at(-1)!.label]),
      catalogWith((d) => !!d.zoom && Object.keys(d.gaps ?? {}).length > 1),
      catalogWith((d) => !!d.rearPlates?.length),
    ];
    for (const draft of fixtures) {
      const before = structuredClone(draft);
      const model = modelOf(draft);
      expect(expectBuild(model, draft), draft.key).toStrictEqual(draft);
      expect(draft).toStrictEqual(before);
    }
  });

  it("derives maximal cemented runs from media, with their exit gaps and sparse extras", () => {
    const draft = enrichedTemplate();
    draft.surfaces.splice(2, 1);
    draft.surfaces[1].medium = 2;
    draft.surfaces[1].d = 2;
    const model = modelOf(draft);
    const group = groupOf(model);
    expect(group.elements.map((e) => e.id)).toEqual([1, 2]);
    expect(group.elements.map((e) => e.thickness)).toEqual([4, 2]);
    expect(group.surfaces.map((s) => s.label)).toEqual(["1", "2", "4"]);
    expect(group.elements[0].extra).toMatchObject({ role: "Front group", nC: 1.514 });
    expect(group.surfaces[0].extra).toEqual({ innerSd: 0, interaction: { type: "refract" } });
    expect(model.gaps[0]).toEqual({ mm: 3 });
    const last = model.gaps.at(-1)!;
    expect(last).toEqual({ mm: draft.gaps!["6"].values[0][0], schedule: draft.gaps!["6"].values, scheduleLabel: "BF" });
    expect(last.schedule).not.toBe(draft.gaps!["6"].values);
    const applied = expectBuild(model, draft);
    expect(applied.elements.slice(0, 2).map((e) => e.cemented)).toEqual(["D1", "D1"]);
  });

  it("marks aberration-controlled gaps and preserves their ranges", () => {
    const draft = createTemplate();
    draft.aberrationControl = { label: "SA", gaps: { "2": { label: "Travel", values: [4, 5] } } };
    const model = modelOf(draft);
    expect(model.gaps[0]).toEqual({ mm: 4, aberrationControlled: true });
    expect(expectBuild(model, draft)).toStrictEqual(draft);
    for (const op of [
      () => setGap(model, 0, 5),
      () => setGapSchedule(model, 0, [[4, 5]]),
      () => cementWithNext(model, 0),
      () => insertElement(model, 1),
      () => removeItem(model, 0),
    ])
      expect(op).toThrow(/aberration-control/);
  });

  it("refuses folded paths, media, embedded stops, spans and noncontiguous glass with readable reasons", () => {
    const mirror = catalog.find((d) => d.opticalPath && d.surfaces.some((s) => s.interaction?.type === "reflect"))!;
    const media = catalog.find((d) => d.media?.length)!;
    expect(mirror).toBeDefined();
    expect(media).toBeDefined();
    const malformed: [LensDataV2Input, RegExp][] = [
      [mirror, /folded|mirror/i],
      [media, /media/i],
      [{ ...createTemplate(), surfaces: createTemplate().surfaces.filter((s) => s.label !== "STO") }, /exactly one/i],
    ];
    const embedded = createTemplate();
    embedded.surfaces[4].medium = 2;
    embedded.surfaces[4].stopPlacement = "inside-element";
    malformed.push([embedded, /inside an element/i]);
    const span = createTemplate();
    span.elements[0].span = ["1", "2"];
    malformed.push([span, /spans/i]);
    const repeated = createTemplate();
    repeated.surfaces[2].medium = 1;
    malformed.push([repeated, /contiguous/i]);
    const curvedStop = createTemplate();
    curvedStop.surfaces[4].R = 10;
    malformed.push([curvedStop, /flat/i]);
    const air = createTemplate();
    delete air.surfaces[0].medium;
    malformed.push([air, /begin an element/i]);
    const unfinished = createTemplate();
    unfinished.surfaces.at(-1)!.medium = 3;
    malformed.push([unfinished, /contiguous|end at/i]);
    for (const [draft, reason] of malformed) {
      const result = toElementModel(draft);
      expect(result.ok).toBe(false);
      if (!result.ok) expect(result.reasons.join(" ")).toMatch(reason);
    }
  });

  it("remaps every authored label reference while leaving ids, custom labels and names stable", () => {
    const draft = createTemplate();
    const model = modelOf(draft);
    const first = groupOf(model);
    first.surfaces[0].label = "11A";
    first.surfaces[1].label = "12";
    first.elements[0].extra = { span: ["11A", "12"] };
    first.elements[0].name = "Custom front";
    draft.groups = [{ text: "Front", fromSurface: "11A", toSurface: "12" }];
    draft.doublets = structuredClone(draft.groups);
    draft.aberrationControl = { label: "SA", gaps: { "12": { values: [4, 5] } } };
    draft.source = {
      errata: [
        {
          status: "corrected",
          surface: "11A",
          field: "R",
          printed: 29,
          applied: 30,
          evidence: ["source-summary", "sibling-example"],
          note: "Synthetic",
        },
      ],
    };
    const applied = applyElementModel(draft, model);
    expect(applied.surfaces.slice(0, 2).map((s) => s.label)).toEqual(["1A", "2"]);
    expect(applied.elements[0]).toMatchObject({ id: 1, name: "Custom front", span: ["1A", "2"] });
    expect(applied.groups![0]).toMatchObject({ fromSurface: "1A", toSurface: "2" });
    expect(applied.doublets).toEqual(applied.groups);
    expect(applied.aberrationControl!.gaps).toHaveProperty("2");
    expect(applied.source!.errata![0]).toMatchObject({ surface: "1A" });
    expect(applied.gaps).toHaveProperty("6");

    // An unresolved external reference prevents renumbering, rather than silently changing its meaning.
    draft.groups![0].toSurface = "unknown";
    expect(applyElementModel(draft, model).surfaces[0].label).toBe("11A");
  });

  it("drops obsolete schedules and refuses to destroy remaining references", () => {
    const draft = createTemplate();
    const model = modelOf(draft);
    delete model.gaps.at(-1)!.schedule;
    expect(applyElementModel(draft, model).gaps).toEqual({});
    const removed = removeItem(model, 0);
    draft.groups = [{ text: "Front", fromSurface: "1", toSurface: "2" }];
    expect(() => applyElementModel(draft, removed)).toThrow(/still referenced/);
  });
});

describe("element model edits", () => {
  it("updates element, surface and scheduled gaps immutably, preserving untouched values", () => {
    const draft = enrichedTemplate();
    const model = modelOf(draft);
    const snapshot = structuredClone(model);
    const material = { nd: 1.52, vd: 60, glass: "Example" };
    const edited = updateElement(model, 0, 0, { label: "New crown", thickness: 4.1, material });
    material.nd = 9;
    const surfaced = updateSurface(edited, 0, 0, { R: 31, asphere: { A4: 2e-9 } });
    const fixed = setGap(surfaced, 0, 4.2);
    const scheduled = setGap(fixed, 3, 41);
    expect(scheduled.gaps[3].schedule).toEqual([[41, 43.29]]);
    const schedule = [[42, 44]];
    const final = setGapSchedule(scheduled, 3, schedule);
    schedule[0][0] = 100;
    expect(final.gaps[3].mm).toBe(42);
    const applied = expectBuild(final, draft);
    expect(applied.elements[0]).toMatchObject({ nd: 1.52, role: "Front group", nC: 1.514 });
    expect(applied.surfaces[0]).toMatchObject({ R: 31, d: 4.1, innerSd: 0, asphere: { A4: 2e-9 } });
    for (const field of ["focus", "aperture", "source", "rearPlates", "layout", "catalog"] as const)
      expect(applied[field]).toStrictEqual(draft[field]);
    expect(model).toStrictEqual(snapshot);
    const cleared = updateSurface(model, 0, 0, { asphere: undefined });
    expect(expectBuild(cleared, draft).surfaces[0]).not.toHaveProperty("asphere");
    const stop = updateSurface(model, 2, 0, { R: "flat" });
    expectBuild(stop, draft);
  });

  it("preserves explicit numeric-looking names through field and structural edits", () => {
    const draft = createTemplate();
    const renamed = expectBuild(updateElement(modelOf(draft), 0, 0, { name: "L10" }), draft);
    expect(renamed.elements[0].name).toBe("L10");
    const edited = expectBuild(updateElement(modelOf(renamed), 0, 0, { thickness: 4.2 }), renamed);
    expect(edited.elements[0]).toMatchObject({ name: "L10", nd: draft.elements[0].nd });
    expect(expectBuild(insertElement(modelOf(edited), 1), edited).elements[0].name).toBe("L10");
  });

  it("renumbers automatic names after structural edits while preserving authored sequences", () => {
    const draft = createTemplate();
    const model = modelOf(draft);
    for (const edited of [insertElement(model, 0), removeItem(model, 0), moveItem(model, 0, 1)]) {
      const applied = expectBuild(edited, draft);
      expect(applied.elements.map((e) => e.name)).toEqual(applied.elements.map((_, i) => `L${i + 1}`));
    }
    draft.elements[0].name = "L10";
    expect(expectBuild(updateSurface(modelOf(draft), 0, 0, { R: 31 }), draft).elements[0].name).toBe("L10");
  });

  it("retains zoom schedule rows and moves scheduled gap keys with their surfaces", () => {
    const draft = catalogWith((d) => !!d.zoom && Object.keys(d.gaps ?? {}).length > 1);
    const model = modelOf(draft);
    const index = model.gaps.findIndex((gap) => !!gap.schedule && !gap.aberrationControlled);
    const schedule = structuredClone(model.gaps[index].schedule!);
    schedule.at(-1)![0] += 0.001;
    const edited = setGapSchedule(model, index, schedule);
    expect(edited.gaps[index].schedule).toEqual(schedule);
    expectBuild(edited, draft);

    const template = modelOf();
    const moved = moveItem(template, 3, -1);
    const applied = expectBuild(moved);
    const group = groupOf(moved, 2);
    const rearIndex = applied.surfaces.findIndex((s) => s.medium === group.elements[0].id) + 1;
    expect(applied.gaps![applied.surfaces[rearIndex].label].values).toEqual(template.gaps[3].schedule);
  });

  it("inserts a weak positive crown at any position and ahead of scheduled back focus", () => {
    const model = modelOf();
    const snapshot = structuredClone(model);
    for (let at = 0; at <= model.items.length; at++) {
      const edited = insertElement(model, at);
      const inserted = groupOf(edited, at);
      expect(inserted.elements[0]).toMatchObject({
        id: 4,
        name: "L4",
        material: { glass: "N-BK7", nd: 1.5168, vd: 64.17 },
      });
      expect(elementFocalLength(inserted, 0)).toBeGreaterThan(0);
      expectBuild(edited);
    }
    const last = insertElement(model, model.items.length);
    expect(last.gaps[3]).toEqual({ mm: 1.5 });
    const consumed = groupOf(last, 4).elements[0].thickness + 1.5;
    expect(last.gaps[4].schedule).toEqual(model.gaps[3].schedule!.map((row) => row.map((mm) => mm - consumed)));
    expect(last.gaps[3].mm + groupOf(last, 4).elements[0].thickness + last.gaps[4].mm).toBeCloseTo(model.gaps[3].mm);
    expect(model).toStrictEqual(snapshot);

    const spacious = setGap(model, 0, 20);
    const interior = insertElement(spacious, 1);
    expect(interior.gaps[0].mm + groupOf(interior, 1).elements[0].thickness + interior.gaps[1].mm).toBeCloseTo(20);
    expectBuild(interior);

    const customKeys = structuredClone(model);
    customKeys.items[0].key = "group:4";
    expectBuild(insertElement(customKeys, 0));
  });

  it("inserts a missing stop, moves it with its gap, and refuses removal of the only stop", () => {
    const model = modelOf();
    const withoutStop = structuredClone(model);
    withoutStop.items.splice(2, 1);
    withoutStop.gaps.splice(2, 1);
    for (let at = 0; at <= withoutStop.items.length; at++) expectBuild(insertStop(withoutStop, at));
    const moved = moveItem(model, 2, -1);
    expect(moved.items[1]).toEqual(model.items[2]);
    expect(moved.gaps[1]).toEqual(model.gaps[2]);
    expectBuild(moved);
    expectBuild(moveItem(model, 0, 1));
    expect(() => insertStop(model, 0)).toThrow(/already/);
    expect(() => removeItem(model, 2)).toThrow(/only aperture stop/);
  });

  it("removes items and cemented members while retaining extras and valid surface topology", () => {
    const draft = enrichedTemplate();
    const model = modelOf(draft);
    const snapshot = structuredClone(model);
    for (const at of [0, 1, 3]) expectBuild(removeItem(model, at), draft);
    const removedRear = removeItem(model, 3);
    expect(removedRear.gaps[2].schedule).toEqual(model.gaps[3].schedule!.map((row) => row.map((mm) => mm + 7)));
    const cemented = cementWithNext(model, 0);
    expectBuild(cemented, draft);
    for (const at of [0, 1]) {
      const removed = removeElement(cemented, 0, at);
      expect(groupOf(removed).elements).toHaveLength(1);
      expect(groupOf(removed).surfaces).toHaveLength(2);
      expect(expectBuild(removed, draft).elements[0]).not.toHaveProperty("cemented");
    }
    expectBuild(removeElement(model, 1, 0), draft);
    expect(model).toStrictEqual(snapshot);
  });

  it("cements then splits an equivalent air-spaced pair, retaining the junction radius and following gap", () => {
    const draft = createTemplate();
    draft.surfaces[1].R = draft.surfaces[2].R;
    draft.surfaces[1].sd = draft.surfaces[2].sd;
    const model = modelOf(draft);
    const snapshot = structuredClone(model);
    const cemented = cementWithNext(model, 0);
    expect(groupOf(cemented).surfaces[1]).toEqual(groupOf(model).surfaces[1]);
    expect(cemented.gaps[0]).toEqual(model.gaps[1]);
    expectBuild(cemented, draft);
    const split = splitGroup(cemented, 0, 1, model.gaps[0].mm);
    expect(expectBuild(split, draft)).toStrictEqual(draft);
    expect(model).toStrictEqual(snapshot);
    expectBuild(splitGroup(cemented, 0, 1), draft);
  });

  it("refuses to duplicate a diffractive or explicit interaction junction when splitting", () => {
    const cemented = cementWithNext(modelOf(), 0);
    for (const extra of [
      {
        diffractive: {
          kind: "radial-polynomial" as const,
          referenceWavelengthNm: 587.6,
          diffractionOrder: 1,
          terms: [{ radialPower: 2, coefficient: -4e-5 }],
        },
      },
      { interaction: { type: "refract" as const } },
    ]) {
      const model = structuredClone(cemented);
      groupOf(model).surfaces[1].extra = extra;
      const snapshot = structuredClone(model);
      expect(() => splitGroup(model, 0, 1)).toThrow(BuilderEditError);
      expect(() => splitGroup(model, 0, 1)).toThrow(/assign.*one.*surface/i);
      expect(model).toStrictEqual(snapshot);
    }
  });

  it("assigns collision-free doublet/triplet names and retains authored cement names", () => {
    let model = modelOf();
    model = insertElement(model, 0);
    model = cementWithNext(model, 0);
    groupOf(model).cementName = "D1";
    model = insertElement(model, 1);
    model = cementWithNext(model, 1);
    expect(applyElementModel(createTemplate(), model).elements.map((e) => e.cemented)).toEqual([
      "D1",
      "D1",
      "D2",
      "D2",
      undefined,
    ]);
    const triplet = cementWithNext(model, 0);
    delete groupOf(triplet).cementName;
    expect(
      applyElementModel(createTemplate(), triplet)
        .elements.slice(0, 4)
        .map((e) => e.cemented),
    ).toEqual(["T1", "T1", "T1", "T1"]);
    const properTriplet = cementWithNext(insertElement(cementWithNext(modelOf(), 0), 1), 0);
    expect(
      applyElementModel(createTemplate(), properTriplet)
        .elements.slice(0, 3)
        .map((e) => e.cemented),
    ).toEqual(["T1", "T1", "T1"]);
  });

  it("refuses impossible edits with BuilderEditError and never mutates the original", () => {
    const model = modelOf();
    const snapshot = structuredClone(model);
    const oneGroup = removeItem(removeItem(model, 0), 0);
    const scheduled = structuredClone(model);
    scheduled.gaps[0] = { mm: 4, schedule: [[4, 5]] };
    for (const op of [
      () => removeItem(oneGroup, 1),
      () => setGap(model, 0, -1),
      () => setGap(model, 0, NaN),
      () => setGap(model, 10, 1),
      () => setGapSchedule(model, 0, [[1, 2]]),
      () => setGapSchedule(model, 3, [[1]]),
      () => setGapSchedule(model, 3, [[1, -1]]),
      () => insertElement(model, -1),
      () => insertStop(model, 100),
      () => moveItem(model, 0, -1),
      () => moveItem(model, 3, 1),
      () => cementWithNext(model, 1),
      () => cementWithNext(scheduled, 0),
      () => splitGroup(model, 0, 1),
      () => splitGroup(cementWithNext(model, 0), 0, 1, -1),
      () => removeElement(model, 2, 0),
      () => removeElement(model, 0, 10),
      () => updateElement(model, 0, 0, { thickness: 0 }),
      () => updateElement(model, 0, 0, { material: { nd: 1 } }),
      () => updateElement(model, 0, 0, { material: { nd: 1.5, vd: -1 } }),
      () => updateSurface(model, 0, 0, { R: 0 }),
      () => updateSurface(model, 0, 0, { sd: undefined }),
      () => updateSurface(model, 2, 0, { R: 10 }),
      () => updateSurface(model, 2, 0, { sd: 5 }),
      () => updateSurface(model, 2, 1, { R: "flat" }),
      () => updateSurface(model, 0, 0, { asphere: { A4: Infinity } }),
    ])
      expect(op).toThrow(BuilderEditError);
    expect(model).toStrictEqual(snapshot);
  });
});

describe("element model paraxial readouts", () => {
  const thin: BuilderGroup = {
    kind: "group",
    key: "thin",
    elements: [{ id: 1, name: "L1", label: "Thin", type: "Biconvex Positive", material: { nd: 1.5 }, thickness: 0 }],
    surfaces: [
      { label: "1", R: 100, sd: 10 },
      { label: "2", R: -100, sd: 10 },
    ],
  };

  it("matches thin and thick lensmaker power, including negative and flat surfaces", () => {
    const thinPower = (1.5 - 1) * (1 / 100 - 1 / -100);
    expect(elementFocalLength(thin, 0)).toBeCloseTo(1 / thinPower, 10);
    const thick = structuredClone(thin);
    thick.elements[0].thickness = 10;
    const power = (1.5 - 1) * (1 / 100 - 1 / -100 + ((1.5 - 1) * 10) / (1.5 * 100 * -100));
    expect(groupFocalLength(thick)).toBeCloseTo(1 / power, 10);
    thick.surfaces[0].R = -100;
    thick.surfaces[1].R = 100;
    expect(groupFocalLength(thick)).toBeLessThan(0);
    thick.surfaces.forEach((s) => {
      s.R = "flat";
    });
    expect(groupFocalLength(thick)).toBeNull();
    expect(elementFocalLength(thick, 2)).toBeNull();
    thick.surfaces[0].R = NaN;
    expect(groupFocalLength(thick)).toBeNull();
  });

  it("adds wavelength- and order-scaled diffractive power at each surface, including planar groups", () => {
    for (const surfaceIndex of [0, 1]) {
      const group = structuredClone(thin);
      group.elements[0].thickness = 10;
      group.surfaces[surfaceIndex].extra = {
        diffractive: {
          kind: "radial-polynomial",
          referenceWavelengthNm: 2 * 587.5618,
          diffractionOrder: 2,
          terms: [
            { radialPower: 4, coefficient: 1e-6 },
            { radialPower: 2, coefficient: -0.00125 },
          ],
        },
      };
      const phasePower = 0.0025;
      const frontPower = 0.005 + (surfaceIndex === 0 ? phasePower : 0);
      const rearPower = 0.005 + (surfaceIndex === 1 ? phasePower : 0);
      const power = frontPower + rearPower - (10 / 1.5) * frontPower * rearPower;
      expect(groupFocalLength(group)).toBeCloseTo(1 / power, 10);
      group.surfaces.forEach((s) => {
        s.R = "flat";
      });
      expect(groupFocalLength(group)).toBeCloseTo(400, 10);
      expect(elementFocalLength(group, 0)).toBeCloseTo(400, 10);
      group.surfaces[surfaceIndex].extra!.diffractive!.terms.splice(1, 1);
      expect(groupFocalLength(group)).toBeNull();
    }
  });

  it("accumulates the internal glass-to-glass interface of a cemented group", () => {
    const group = structuredClone(thin);
    group.elements[0].thickness = 4;
    group.elements.push({ ...structuredClone(group.elements[0]), id: 2, name: "L2", thickness: 6 });
    group.surfaces.splice(1, 0, { label: "junction", R: 40, sd: 10 });
    const equivalent = structuredClone(thin);
    equivalent.elements[0].thickness = 10;
    expect(groupFocalLength(group)).toBeCloseTo(groupFocalLength(equivalent)!, 10);
    group.elements[1].material.nd = 1.7;
    expect(groupFocalLength(group)).not.toBeCloseTo(groupFocalLength(equivalent)!, 3);
  });

  it.each([
    [50, -50, 50, "Biconvex Positive"],
    [-50, 50, -50, "Biconcave Negative"],
    [20, 50, 50, "Positive Meniscus"],
    [50, 20, -50, "Negative Meniscus"],
    ["flat", -50, 100, "Plano-Convex Positive"],
    [50, "flat", 100, "Plano-Convex Positive"],
    ["flat", 50, -100, "Plano-Concave Negative"],
    [-50, "flat", -100, "Plano-Concave Negative"],
    ["flat", "flat", null, "Plane-Parallel Plate"],
    [1e12, "flat", null, "Plane-Parallel Plate"],
    [20, 50, null, "Meniscus"],
  ] as const)("describes %s / %s using V2 vocabulary", (front, rear, focal, description) => {
    expect(describeShape(front, rear, focal)).toBe(description);
  });
});
