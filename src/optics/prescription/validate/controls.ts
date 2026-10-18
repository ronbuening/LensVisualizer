/** Authored station declarations and variable-gap controls, before normalization. */
import type { UntrustedLensData } from "./context.js";
import { firstInfinityThickness } from "../compileControls.js";

export function isStationIndexList(value: unknown, min: number, max: number): value is number[] {
  return (
    Array.isArray(value) &&
    value.every(
      (entry, i) => Number.isInteger(entry) && entry >= min && entry <= max && (i === 0 || entry > value[i - 1]),
    )
  );
}

/**
 * Check the source-provenance station list against the authored zoom and focus stations.
 *
 * Infinity focus is implied at every published zoom station, so focus lists start at keyframe 1. A listed focus
 * keyframe must move at least one variable gap: that is what separates a tabulated finite state from an infinity row
 * copied into the close-focus slot.
 *
 * @param data - untrusted lens data whose `publishedStations` is defined
 * @param focusPositionCount - authored focus keyframes per variable gap (2 without `focusPositions`)
 * @param errors - collector for validation messages
 */
export function validatePublishedStations(data: UntrustedLensData, focusPositionCount: number, errors: string[]): void {
  const stations = data.publishedStations;
  if (!stations || typeof stations !== "object" || Array.isArray(stations)) {
    errors.push(`"publishedStations" must be an object when provided`);
    return;
  }
  const unknownFields = Object.keys(stations).filter((field) => field !== "zoom" && field !== "focus");
  if (unknownFields.length > 0) errors.push(`"publishedStations" has unknown field(s): ${unknownFields.join(", ")}`);
  if (stations.zoom === undefined && stations.focus === undefined) {
    errors.push(`"publishedStations" must declare "zoom" and/or "focus"`);
    return;
  }

  const zoomCount = Array.isArray(data.zoomPositions) && data.zoomPositions.length >= 2 ? data.zoomPositions.length : 0;
  const isZoom = zoomCount > 0;

  /* ── Zoom stations ── */
  let publishedZoom: number[] = isZoom ? Array.from({ length: zoomCount }, (_, i) => i) : [0];
  if (stations.zoom !== undefined) {
    if (!isZoom) {
      errors.push(`"publishedStations.zoom" is only valid on a zoom lens`);
    } else if (!isStationIndexList(stations.zoom, 0, zoomCount - 1) || stations.zoom.length === 0) {
      errors.push(
        `"publishedStations.zoom" must be a non-empty, strictly increasing list of zoomPositions indices (0..${zoomCount - 1})`,
      );
    } else {
      publishedZoom = stations.zoom;
    }
  }

  /* ── Focus keyframes, resolved per published zoom station ── */
  const focusByZoom = new Map<number, number[]>();
  if (stations.focus !== undefined) {
    const focus = stations.focus;
    const maxFocus = focusPositionCount - 1;
    const indexRule = `strictly increasing focusPositions indices (1..${maxFocus})`;
    if (!Array.isArray(focus) || focus.length === 0) {
      errors.push(`"publishedStations.focus" must be a non-empty list of ${indexRule}, or one list per zoom position`);
    } else if (focus.every((entry: unknown) => Array.isArray(entry))) {
      if (!isZoom) {
        errors.push(`"publishedStations.focus" may hold per-zoom lists only on a zoom lens`);
      } else if (focus.length !== zoomCount) {
        errors.push(`"publishedStations.focus" must hold one list per zoom position (${zoomCount})`);
      } else if (!focus.every((entry: unknown) => isStationIndexList(entry, 1, maxFocus))) {
        errors.push(`"publishedStations.focus" per-zoom lists must each be empty or ${indexRule}`);
      } else if (focus.every((entry: number[]) => entry.length === 0)) {
        errors.push(`"publishedStations.focus" must publish at least one focus keyframe`);
      } else {
        focus.forEach((entry: number[], zoomIndex: number) => {
          if (entry.length === 0) return;
          if (publishedZoom.includes(zoomIndex)) focusByZoom.set(zoomIndex, entry);
          else
            errors.push(
              `"publishedStations.focus"[${zoomIndex}] must be empty: "publishedStations.zoom" omits that zoom station`,
            );
        });
      }
    } else if (focus.some((entry: unknown) => Array.isArray(entry))) {
      errors.push(`"publishedStations.focus" must not mix flat indices with per-zoom lists`);
    } else if (!isStationIndexList(focus, 1, maxFocus)) {
      errors.push(`"publishedStations.focus" must be a non-empty list of ${indexRule}, or one list per zoom position`);
    } else {
      for (const zoomIndex of publishedZoom) focusByZoom.set(zoomIndex, focus);
    }
  }

  /* ── Every listed focus keyframe must carry real focus travel ── */
  const ranges: unknown[] = data.var && typeof data.var === "object" ? Object.values(data.var) : [];
  for (const [zoomIndex, focusIndices] of focusByZoom) {
    for (const focusIndex of focusIndices) {
      const moves = ranges.some((range) => {
        const keyframes: unknown = isZoom ? (Array.isArray(range) ? range[zoomIndex] : undefined) : range;
        if (!Array.isArray(keyframes)) return false;
        const infinity: unknown = keyframes[0];
        const focused: unknown = keyframes[focusIndex];
        return typeof infinity === "number" && typeof focused === "number" && Math.abs(focused - infinity) > 1e-9;
      });
      if (!moves) {
        const where = isZoom ? ` at zoom station ${zoomIndex}` : "";
        errors.push(`"publishedStations.focus": focus keyframe ${focusIndex}${where} has no focus travel in "var"`);
      }
    }
  }

  /* ── A certified finite conjugate cannot sit on a zoom station the list excludes ── */
  if (isZoom && Array.isArray(data.finiteConjugates)) {
    for (const conjugate of data.finiteConjugates) {
      if (!conjugate || typeof conjugate !== "object" || !Number.isFinite(conjugate.zoomT)) continue;
      const zoomIndex = Math.round(conjugate.zoomT * (zoomCount - 1));
      if (!publishedZoom.includes(zoomIndex)) {
        errors.push(`"finiteConjugates" names zoom station ${zoomIndex}, which "publishedStations.zoom" omits`);
      }
    }
  }
}

export function validateStations(
  data: UntrustedLensData,
  errors: string[],
): { isZoom: boolean; focusPositionCount: number } {
  /* ── Zoom lens fields ── */
  const isZoom = Array.isArray(data.zoomPositions) && data.zoomPositions.length >= 2;
  if (data.zoomPositions !== undefined) {
    if (!Array.isArray(data.zoomPositions) || data.zoomPositions.length < 2)
      errors.push(`"zoomPositions" must be an array of at least 2 focal lengths`);
    else {
      if (!data.zoomPositions.every((n: number) => typeof n === "number" && isFinite(n)))
        errors.push(`"zoomPositions" must contain only finite numbers`);
      for (let i = 1; i < data.zoomPositions.length; i++) {
        if (data.zoomPositions[i] <= data.zoomPositions[i - 1]) {
          errors.push(`"zoomPositions" must be monotonically increasing`);
          break;
        }
      }
    }
  }

  const design = data.focalLengthDesign;
  if (isZoom && Array.isArray(design) && design.length === 2) {
    for (const [endpoint, stationIndex] of [0, data.zoomPositions.length - 1].entries()) {
      const focalLength = data.zoomPositions[stationIndex];
      const designFocalLength = design[endpoint];
      if (!Number.isFinite(focalLength) || focalLength <= 0 || !Number.isFinite(designFocalLength)) continue;
      const difference = Math.abs(designFocalLength - focalLength) / focalLength;
      // Decimal endpoints exactly 1% away can round slightly above the inclusive boundary.
      if (difference > 0.01 + 4 * Number.EPSILON) {
        errors.push(
          `"focalLengthDesign[${endpoint}]": ${designFocalLength} mm differs from zoom station ${stationIndex} focal length ${focalLength} mm by ${(difference * 100).toFixed(2)}% (maximum 1%)`,
        );
      }
    }
  }

  /* ── Focus interpolation positions ── */
  const focusPositionCount =
    Array.isArray(data.focusPositions) && data.focusPositions.length >= 2 ? data.focusPositions.length : 2;
  if (data.focusPositions !== undefined) {
    if (!Array.isArray(data.focusPositions) || data.focusPositions.length < 2) {
      errors.push(`"focusPositions" must be an array of at least 2 normalized focus coordinates`);
    } else {
      if (!data.focusPositions.every((n: unknown) => typeof n === "number" && isFinite(n))) {
        errors.push(`"focusPositions" must contain only finite numbers`);
      } else {
        if (data.focusPositions[0] !== 0 || data.focusPositions[data.focusPositions.length - 1] !== 1) {
          errors.push(`"focusPositions" must begin at 0 (infinity) and end at 1 (close focus)`);
        }
        for (let i = 1; i < data.focusPositions.length; i++) {
          if (data.focusPositions[i] <= data.focusPositions[i - 1]) {
            errors.push(`"focusPositions" must be strictly increasing`);
            break;
          }
        }
      }
    }
  }

  /* ── Explicit finite conjugates ── */
  if (data.finiteConjugates !== undefined) {
    if (!Array.isArray(data.finiteConjugates) || data.finiteConjugates.length === 0) {
      errors.push('"finiteConjugates" must be a non-empty array of source-backed stations');
    } else {
      const seen = new Set<string>();
      const focusStations = data.focusPositions ?? [0, 1];
      const zoomCount = Array.isArray(data.zoomPositions) ? data.zoomPositions.length : 1;
      for (const c of data.finiteConjugates) {
        if (
          !c ||
          typeof c !== "object" ||
          !Number.isFinite(c.focusT) ||
          c.focusT <= 0 ||
          c.focusT > 1 ||
          !Number.isFinite(c.zoomT) ||
          c.zoomT < 0 ||
          c.zoomT > 1 ||
          !Number.isFinite(c.objectDistanceMm) ||
          c.objectDistanceMm <= 0 ||
          !["first-surface", "image-plane"].includes(c.distanceReference) ||
          typeof c.source !== "string" ||
          !c.source.trim()
        ) {
          errors.push(
            '"finiteConjugates" requires finite coordinates, positive distance, an explicit reference and source',
          );
          continue;
        }
        if (
          !Array.isArray(focusStations) ||
          !focusStations.some((f: number) => Math.abs(f - c.focusT) < 1e-8) ||
          (zoomCount <= 1
            ? c.zoomT !== 0
            : Math.abs(c.zoomT * (zoomCount - 1) - Math.round(c.zoomT * (zoomCount - 1))) > 1e-8)
        )
          errors.push('"finiteConjugates" must identify authored focus and zoom stations, not interpolated positions');
        const key = `${c.focusT}:${c.zoomT}`;
        if (seen.has(key)) errors.push('"finiteConjugates" contains a duplicate focus/zoom station');
        seen.add(key);
      }
    }
  }

  /* ── Optional zoom fields ── */
  if (data.zoomStep !== undefined) {
    if (typeof data.zoomStep !== "number" || !isFinite(data.zoomStep) || data.zoomStep <= 0)
      errors.push(`"zoomStep" must be a finite positive number (got ${data.zoomStep})`);
  }
  if (data.zoomLabels !== undefined) {
    if (!Array.isArray(data.zoomLabels) || !data.zoomLabels.every((s: string) => typeof s === "string"))
      errors.push(`"zoomLabels" must be an array of strings`);
  }

  return { isZoom, focusPositionCount };
}
export function validateControls(
  data: UntrustedLensData,
  surfaceLabels: Set<string>,
  labelToIdx: Record<string, number>,
  isZoom: boolean,
  focusPositionCount: number,
  errors: string[],
): void {
  const nz = isZoom ? data.zoomPositions.length : 0;
  /* ── var keys reference real surface labels ── */
  if (data.var && typeof data.var === "object") {
    for (const [label, range] of Object.entries(data.var)) {
      if (!surfaceLabels.has(label)) errors.push(`var key "${label}" does not match any surface label`);
      if (isZoom) {
        if (!Array.isArray(range) || range.length !== nz)
          errors.push(`var["${label}"]: expected ${nz} focus-thickness vectors (one per zoom position)`);
        else {
          for (let zi = 0; zi < nz; zi++) {
            const focusThicknesses = range[zi];
            if (!Array.isArray(focusThicknesses) || focusThicknesses.length !== focusPositionCount) {
              errors.push(`var["${label}"][${zi}]: expected focus-thickness array of length ${focusPositionCount}`);
            } else {
              for (let fi = 0; fi < focusThicknesses.length; fi++) {
                const thickness = focusThicknesses[fi];
                if (typeof thickness !== "number" || !isFinite(thickness)) {
                  errors.push(`var["${label}"][${zi}][${fi}]: thickness must be a finite number`);
                } else if (thickness < 0) {
                  errors.push(`var["${label}"][${zi}][${fi}]: thickness=${thickness} is negative`);
                }
              }
            }
          }
        }
      } else {
        if (!Array.isArray(range) || range.length !== focusPositionCount) {
          errors.push(`var["${label}"]: expected focus-thickness array of length ${focusPositionCount}`);
        } else {
          for (let fi = 0; fi < range.length; fi++) {
            const thickness = range[fi];
            if (typeof thickness !== "number" || !isFinite(thickness)) {
              errors.push(`var["${label}"][${fi}]: thickness must be a finite number`);
            } else if (thickness < 0) {
              errors.push(`var["${label}"][${fi}]: thickness=${thickness} is negative`);
            }
          }
        }
      }
      /* Surface d should match the var infinity value at the first zoom position */
      if (surfaceLabels.has(label)) {
        const surfD = data.surfaces[labelToIdx[label]].d;
        const varInf = firstInfinityThickness(range, isZoom);
        if (typeof surfD === "number" && typeof varInf === "number" && Math.abs(surfD - varInf) > 1e-6)
          errors.push(`var["${label}"]: surface d=${surfD} does not match var infinity value ${varInf}`);
      }
    }
  }

  /* ── Source provenance of the authored stations ── */
  if (data.publishedStations !== undefined) validatePublishedStations(data, focusPositionCount, errors);

  /* ── varLabels reference real surface labels ── */
  if (Array.isArray(data.varLabels)) {
    for (const entry of data.varLabels) {
      if (!Array.isArray(entry) || entry.length < 2)
        errors.push(`varLabels entry is not a [label, text] pair: ${JSON.stringify(entry)}`);
      else if (!surfaceLabels.has(entry[0]))
        errors.push(`varLabels label "${entry[0]}" does not match any surface label`);
    }
  }

  if (data.aberrationControl !== undefined) {
    const control = data.aberrationControl as Record<string, unknown>;
    if (typeof control !== "object" || control === null) {
      errors.push("aberrationControl must be an object");
    } else {
      if (typeof control.label !== "string" || control.label.trim() === "")
        errors.push("aberrationControl.label must be a non-empty string");
      const hasCenterPosition = control.centerLabel !== undefined;
      if (
        control.centerLabel !== undefined &&
        (typeof control.centerLabel !== "string" || control.centerLabel.trim() === "")
      )
        errors.push("aberrationControl.centerLabel must be a non-empty string");
      if (control.step !== undefined && (typeof control.step !== "number" || control.step <= 0))
        errors.push("aberrationControl.step must be a positive number");
      const ranges = control.var;
      if (typeof ranges !== "object" || ranges === null || Array.isArray(ranges)) {
        errors.push("aberrationControl.var must be an object keyed by surface label");
      } else {
        for (const [label, range] of Object.entries(ranges as Record<string, unknown>)) {
          if (!surfaceLabels.has(label)) {
            errors.push(`aberrationControl.var["${label}"]: surface label not found`);
            continue;
          }
          const expectedPositionCount = hasCenterPosition ? 3 : 2;
          const positionDescription = hasCenterPosition ? "[minimum, center, maximum]" : "[normal, maximum]";
          const positionNames = hasCenterPosition ? ["minimum", "center", "maximum"] : ["normal", "maximum"];
          if (isZoom) {
            if (!Array.isArray(range) || range.length !== nz)
              errors.push(
                `aberrationControl.var["${label}"]: expected array of ${nz} ${positionDescription} arrays (one per zoom position)`,
              );
            else {
              for (let zi = 0; zi < nz; zi++) {
                if (!Array.isArray(range[zi]) || range[zi].length !== expectedPositionCount) {
                  errors.push(
                    `aberrationControl.var["${label}"][${zi}]: expected ${positionDescription} array of length ${expectedPositionCount}`,
                  );
                } else {
                  for (let pi = 0; pi < expectedPositionCount; pi++) {
                    const value = range[zi][pi];
                    if (typeof value !== "number" || !Number.isFinite(value)) {
                      errors.push(
                        `aberrationControl.var["${label}"][${zi}]: ${positionNames[pi]} must be a finite number`,
                      );
                    } else if (value < 0) {
                      errors.push(
                        `aberrationControl.var["${label}"][${zi}]: ${positionNames[pi]}=${value} is negative`,
                      );
                    }
                  }
                }
              }
            }
          } else if (!Array.isArray(range) || range.length !== expectedPositionCount) {
            errors.push(
              `aberrationControl.var["${label}"]: expected ${positionDescription} array of length ${expectedPositionCount}`,
            );
          } else {
            for (let pi = 0; pi < expectedPositionCount; pi++) {
              const value = range[pi];
              if (typeof value !== "number" || !Number.isFinite(value)) {
                errors.push(`aberrationControl.var["${label}"]: ${positionNames[pi]} must be a finite number`);
              } else if (value < 0) {
                errors.push(`aberrationControl.var["${label}"]: ${positionNames[pi]}=${value} is negative`);
              }
            }
          }
          const surfD = data.surfaces[labelToIdx[label]].d;
          const firstPositions = isZoom && Array.isArray(range) ? range[0] : range;
          const defaultThickness =
            Array.isArray(firstPositions) && typeof firstPositions[hasCenterPosition ? 1 : 0] === "number"
              ? firstPositions[hasCenterPosition ? 1 : 0]
              : null;
          if (
            typeof surfD === "number" &&
            typeof defaultThickness === "number" &&
            Math.abs(surfD - defaultThickness) > 1e-6
          )
            errors.push(
              `aberrationControl.var["${label}"]: surface d=${surfD} does not match ${hasCenterPosition ? "center" : "normal"} value ${defaultThickness}`,
            );
        }
      }
      if (Array.isArray(control.varLabels)) {
        for (const entry of control.varLabels) {
          if (!Array.isArray(entry) || entry.length < 2)
            errors.push(`aberrationControl.varLabels entry is not a [label, text] pair: ${JSON.stringify(entry)}`);
          else if (!surfaceLabels.has(entry[0]))
            errors.push(`aberrationControl.varLabels label "${entry[0]}" does not match any surface label`);
        }
      }
    }
  }
}
