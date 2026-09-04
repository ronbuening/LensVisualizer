/** Movement-support registry and fail-closed guards for analysis sections. */

import type { PerspectiveTraceContext } from "../perspective/trace.js";

/** Granular analysis families that can migrate to moved optics independently. */
export type AnalysisSectionId =
  | "summary"
  | "spherical-aberration"
  | "field-curvature"
  | "chromatic"
  | "coma"
  | "bokeh"
  | "distortion"
  | "vignetting"
  | "pupils"
  | "breathing";

export type AnalysisSectionMode = "centered" | "intrinsic" | "perspective" | "unavailable";

export interface AnalysisSectionAvailability {
  section: AnalysisSectionId;
  available: boolean;
  movementActive: boolean;
  mode: AnalysisSectionMode;
  reason: string | null;
}

/**
 * Sections whose values describe the intrinsic lens and remain valid while
 * the complete optical stack moves relative to the fixed camera.
 */
const MOVEMENT_INVARIANT_SECTIONS = new Set<AnalysisSectionId>(["summary", "spherical-aberration", "breathing"]);

/**
 * Movement-aware analysis adapters are registered here only after their jobs
 * consume PerspectiveTraceContext and have fixture-backed movement tests.
 */
const MOVEMENT_AWARE_SECTIONS = new Set<AnalysisSectionId>([
  "field-curvature",
  "chromatic",
  "coma",
  "bokeh",
  "distortion",
  "vignetting",
  "pupils",
]);

export class AnalysisSectionUnavailableError extends Error {
  readonly section: AnalysisSectionId;

  constructor(section: AnalysisSectionId, reason: string) {
    super(reason);
    this.name = "AnalysisSectionUnavailableError";
    this.section = section;
  }
}

/** Resolve one section without allowing active movement to fall back to centered math. */
export function analysisSectionAvailability(
  section: AnalysisSectionId,
  perspectiveTraceContext: PerspectiveTraceContext | null | undefined,
): AnalysisSectionAvailability {
  const movementActive = perspectiveTraceContext?.pose.active ?? false;
  if (!movementActive) {
    return { section, available: true, movementActive: false, mode: "centered", reason: null };
  }
  if (MOVEMENT_INVARIANT_SECTIONS.has(section)) {
    return { section, available: true, movementActive: true, mode: "intrinsic", reason: null };
  }
  if (MOVEMENT_AWARE_SECTIONS.has(section)) {
    return { section, available: true, movementActive: true, mode: "perspective", reason: null };
  }
  return {
    section,
    available: false,
    movementActive: true,
    mode: "unavailable",
    reason:
      "This analysis section is not movement-aware yet. Centered-lens results are suppressed while tilt or shift is active.",
  };
}

/** Throw a typed error when a caller bypasses the UI availability check. */
export function assertAnalysisSectionAvailable(
  section: AnalysisSectionId,
  perspectiveTraceContext: PerspectiveTraceContext | null | undefined,
): AnalysisSectionAvailability {
  const availability = analysisSectionAvailability(section, perspectiveTraceContext);
  if (!availability.available) {
    throw new AnalysisSectionUnavailableError(section, availability.reason!);
  }
  return availability;
}

/**
 * Guard a legacy centered accessor after its section has gained a moved-lens job.
 *
 * A perspective-capable section is available while movement is active, but its
 * old centered result is not. Callers must select the explicitly named
 * `computePerspective*` accessor instead of silently mixing coordinate frames.
 */
export function assertCenteredAnalysisSectionAvailable(
  section: AnalysisSectionId,
  perspectiveTraceContext: PerspectiveTraceContext | null | undefined,
): AnalysisSectionAvailability {
  const availability = assertAnalysisSectionAvailable(section, perspectiveTraceContext);
  if (availability.mode === "perspective") {
    throw new AnalysisSectionUnavailableError(
      section,
      `The legacy centered ${section} result is suppressed while tilt or shift is active. Use its movement-aware perspective accessor.`,
    );
  }
  return availability;
}
