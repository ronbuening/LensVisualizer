import { buildLens, ingestLens } from "../optics/buildLens.js";
import { validateCanonicalLens } from "../optics/validation.js";
import type { LensDataV2Input } from "../types/lensDataV2.js";
import type { RuntimeLens } from "../types/optics.js";
import { requireUntrustedDraft, parseUntrustedDraft } from "./untrusted.js";

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
  // A catalog file may record an afocal element's display focal length as `Infinity`, which JSON cannot carry.
  const portable: LensDataV2Input = {
    ...input,
    elements: input.elements.map((element) =>
      element.focalLengthMm === undefined || Number.isFinite(element.focalLengthMm)
        ? element
        : (({ focalLengthMm: _afocal, ...rest }) => rest)(element),
    ),
  };
  const safe = requireUntrustedDraft(portable);
  return requireUntrustedDraft({
    ...safe,
    key: `${safe.key.slice(0, 75).replace(/-$/, "")}-copy`,
    name: `${safe.name.slice(0, 193)} (copy)`,
    visible: false,
  });
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
    const gate = parseUntrustedDraft(draft);
    if (!gate.ok) return gate;
    draft = gate.draft;
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
