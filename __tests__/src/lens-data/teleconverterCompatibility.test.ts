import { describe, expect, it } from "vitest";
import { wideOpenStopAtZoom } from "../../../src/optics/apertureStop.js";
import buildLens from "../../../src/optics/buildLens.js";
import { prepareRuntimeState } from "../../../src/optics/compat.js";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import {
  mtfChiefHeight,
  mtfModeledHalfField,
  resolveMtfFieldGeometry,
} from "../../../src/optics/analysis/mtfFields.js";
import { assessMtfSupport } from "../../../src/optics/mtf.js";
import type { MtfOptions } from "../../../src/types/mtf.js";
import { doLayout, epAtZoom, traceRay, traceSkewRay } from "../../../src/optics/optics.js";
import {
  attachTeleconverter,
  teleconverterCompatibility,
  validateTeleconverterData,
} from "../../../src/optics/teleconverter.js";
import { ALL_CATALOG_KEYS, LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";
import {
  ALL_TELECONVERTER_KEYS,
  TELECONVERTER_CATALOG,
  resolveTeleconverterKey,
  teleconverterOptionsForLens,
} from "../../../src/utils/catalog/teleconverterCatalog.js";
import type { RuntimeLens } from "../../../src/types/optics.js";
import { teleconverterFixture } from "../optics/testLensFixtures.js";

/** Largest hidden render trim tolerated on a converter element, matching the production-lens diagnostics sweep. */
const MATERIAL_TRIM_TOLERANCE_MM = 0.25;

/** Fraction of the entrance-pupil radius the converter must pass on axis without clipping. */
const AXIAL_BEAM_FRACTION = 0.8;

/** Slack on the share of the format corner a chief ray reaches, for the field-edge bisection. */
const CORNER_COVERAGE_TOLERANCE = 1e-3;

/** Every authored zoom station as a slider position. */
function zoomStations(L: RuntimeLens): number[] {
  const count = (L.isZoom && L.zoomPositions?.length) || 1;
  return Array.from({ length: count }, (_, station) => (count === 1 ? 0 : station / (count - 1)));
}

/**
 * Share of the format corner the real chief ray reaches through every clear aperture, wide open at infinity. This is
 * the chief's own edge, not the edge the MTF tab charts to: part of a beam still passes a rim that stops its chief ray,
 * and a converter rim that does that is undersized all the same.
 */
function cornerCoverage(L: RuntimeLens, zoomT: number): number {
  const state = prepareRuntimeState(L, 0, zoomT);
  const options: MtfOptions = {
    method: "geometric",
    spectrum: "reference",
    focus: "design",
    pupilSemiDiameterMm: epAtZoom(zoomT, L),
    stopSemiDiameterMm: wideOpenStopAtZoom(zoomT, L),
  };
  const support = assessMtfSupport(state, options);
  if (!support.available) return 0;
  const geometry = resolveMtfFieldGeometry(state, mtfModeledHalfField(state), mtfChiefHeight(state, options, support));
  return geometry ? geometry.modeledEdgeHeightMm / geometry.referenceHeightMm : 0;
}

/**
 * Data contract for detachable teleconverters, the counterpart of the per-lens corpus sweeps: a converter never
 * enters `LENS_CATALOG`, so none of those sweeps see it. Every converter is validated on its own, and every
 * converter–host pair the fit predicate allows must actually compose into a lens that builds and traces — the
 * predicate checks vertex clearance only, so this sweep is what catches rim contact or a clipped axial beam and
 * tells the author to set `incompatibleLensKeys` or `minHostFno`. It also catches converter rims too small for the
 * format corner, which are re-sized from the patent figure instead.
 */
describe("teleconverter catalog", () => {
  it("validates every teleconverter and applies the lens patent-metadata policy", () => {
    expect(ALL_TELECONVERTER_KEYS.length).toBeGreaterThan(0);
    const offenders: string[] = [];

    for (const key of ALL_TELECONVERTER_KEYS) {
      const tc = TELECONVERTER_CATALOG[key];
      for (const error of validateTeleconverterData(tc)) offenders.push(`${key}: ${error}`);
      if (LENS_CATALOG[key]) offenders.push(`${key}: key is already used by a lens`);
      if (!tc.patentNumber?.trim()) offenders.push(`${key}: patentNumber is required`);
      if (!Array.isArray(tc.patentAuthors)) offenders.push(`${key}: patentAuthors must be an array`);
      if (!Array.isArray(tc.patentAssignees)) offenders.push(`${key}: patentAssignees must be an array`);
      for (const lensKey of tc.incompatibleLensKeys ?? []) {
        if (!LENS_CATALOG[lensKey]) offenders.push(`${key}: incompatibleLensKeys names unknown lens "${lensKey}"`);
      }
    }

    expect(offenders).toEqual([]);
  });

  it("composes every compatible converter–host pair into a lens that builds, traces, keeps the host's stop and loses no field", () => {
    const offenders: string[] = [];
    let pairs = 0;

    for (const tcKey of ALL_TELECONVERTER_KEYS) {
      const tc = TELECONVERTER_CATALOG[tcKey];
      for (const lensKey of ALL_CATALOG_KEYS) {
        const hostData = LENS_CATALOG[lensKey];
        if (!teleconverterCompatibility(hostData, tc).ok) continue;
        pairs++;
        const pair = `${lensKey} + ${tcKey}`;

        let L: RuntimeLens;
        try {
          L = buildLens(attachTeleconverter(hostData, tc));
        } catch (error) {
          offenders.push(`${pair}: ${String(error).split("\n")[0]}`);
          continue;
        }
        const host = buildLens(hostData);

        if (Math.abs(L.stopPhysSD - host.stopPhysSD) > 1e-9) offenders.push(`${pair}: stop radius changed`);
        /* Read through the station accessor, so a fixed-iris host that came back with a schedule is caught too. */
        zoomStations(host).forEach((zoomT, station) => {
          if (!(Math.abs(wideOpenStopAtZoom(zoomT, L) - wideOpenStopAtZoom(zoomT, host)) <= 1e-9)) {
            offenders.push(`${pair}: stop radius changed at zoom station ${station}`);
          }
        });
        (host.zoomEPs ?? [host.EP.epSD]).forEach((epSD, station) => {
          if (Math.abs((L.zoomEPs?.[station] ?? L.EP.epSD) - epSD) > 1e-9) {
            offenders.push(`${pair}: entrance pupil changed at zoom station ${station}`);
          }
        });

        for (const zoomT of zoomStations(L)) {
          const layout = doLayout(0, zoomT, L);
          const beamHeight = AXIAL_BEAM_FRACTION * epAtZoom(zoomT, L);
          const traces = [
            traceRay(0, 0, layout.z, 0, zoomT, L.stopPhysSD, true, L),
            traceSkewRay(0, 0, 0, 0, 0, zoomT, L.stopPhysSD, true, L),
            traceRay(beamHeight, 0, layout.z, 0, zoomT, L.stopPhysSD, true, L),
          ];
          if (traces.some((trace) => trace.clipped || !Number.isFinite(trace.y))) {
            offenders.push(`${pair}: axial beam is clipped or non-finite at zoomT=${zoomT}`);
          }

          /* A rear converter images the format corner from a narrower field of the host, so the host cannot stop a
             corner chief ray it passed on its own: a lower share with the converter mounted is the converter's rims. */
          const bare = cornerCoverage(host, zoomT);
          const mounted = cornerCoverage(L, zoomT);
          if (mounted < bare - CORNER_COVERAGE_TOLERANCE) {
            offenders.push(
              `${pair}: chief ray reaches ${(mounted * 100).toFixed(1)}% of the format corner at zoomT=${zoomT}, ` +
                `${(bare * 100).toFixed(1)}% on the bare lens`,
            );
          }
        }

        const firstConverterElement = L.data.attachedTeleconverter!.firstElementId;
        for (const diagnostic of computeElementRenderDiagnostics(L, doLayout(0, 0, L).z)) {
          if (diagnostic.eid < firstConverterElement) continue;
          for (const surface of [diagnostic.front, diagnostic.rear]) {
            if (surface.trimAmount > MATERIAL_TRIM_TOLERANCE_MM) {
              offenders.push(
                `${pair}: converter surface ${surface.surfaceLabel} hides ${surface.trimAmount.toFixed(2)} mm (${surface.trimCause})`,
              );
            }
          }
        }
      }
    }

    /* Zero pairs would mean the sweep stopped seeing the catalog rather than that everything passed. */
    expect(pairs).toBeGreaterThan(0);
    expect(offenders).toEqual([]);
  });

  it("keeps every host's stop when a synthetic universal converter is composed onto it", () => {
    /* The real catalog pairs above are few. The composer's central promise — the host's iris does not change —
       depends on how each host is authored (zoom tables, rear plates, drop-in filters, embedded stops, authored gaps
       that differ slightly from their focus tables), so it is checked against every lens with a synthetic converter
       made universal for that lens's mounts. A pair that fails to build is a fit problem the real sweep reports for
       real converters, not an engine failure, and is only counted here. Plates ahead of the converter are covered by
       the synthetic fixtures in teleconverter.test.ts: the catalog authors drop-in filters as drawn elements. */
    const offenders: string[] = [];
    let built = 0;

    for (const lensKey of ALL_CATALOG_KEYS) {
      const hostData = LENS_CATALOG[lensKey];
      if (!hostData.lensMounts) continue;
      const tc = teleconverterFixture({ universal: true, lensMounts: hostData.lensMounts });
      if (!teleconverterCompatibility(hostData, tc).ok) continue;

      let L: RuntimeLens;
      try {
        L = buildLens(attachTeleconverter(hostData, tc));
      } catch {
        continue;
      }
      built++;
      const host = buildLens(hostData);
      const drift = Math.max(
        Math.abs(L.stopPhysSD - host.stopPhysSD),
        ...zoomStations(host).map((zoomT) => Math.abs(wideOpenStopAtZoom(zoomT, L) - wideOpenStopAtZoom(zoomT, host))),
        ...(host.zoomEPs ?? []).map((epSD, station) => Math.abs((L.zoomEPs?.[station] ?? NaN) - epSD)),
      );
      if (!(drift <= 1e-9)) offenders.push(`${lensKey}: stop or pupil moved by ${drift.toExponential(2)} mm`);
    }

    expect(built).toBeGreaterThan(100);
    expect(offenders).toEqual([]);
  });

  it("offers published converters for exactly the hosts the fit predicate allows and hidden ones only once mounted", () => {
    const offenders: string[] = [];
    const offeredKeys = (lensKey: string, mountedKey?: string) =>
      teleconverterOptionsForLens(lensKey, mountedKey).map((option) => option.key);

    for (const lensKey of ALL_CATALOG_KEYS) {
      const fitting = ALL_TELECONVERTER_KEYS.filter(
        (tcKey) => teleconverterCompatibility(LENS_CATALOG[lensKey], TELECONVERTER_CATALOG[tcKey]).ok,
      );
      const published = fitting.filter((tcKey) => TELECONVERTER_CATALOG[tcKey].visible !== false);
      const offered = offeredKeys(lensKey);
      if (offered.join() !== published.join())
        offenders.push(`${lensKey}: offered [${offered}], expected [${published}]`);

      /* A `tc` key resolves for every fit, hidden test models included, and for nothing else. */
      for (const tcKey of ALL_TELECONVERTER_KEYS) {
        const resolves = resolveTeleconverterKey(lensKey, tcKey) === tcKey;
        if (resolves !== fitting.includes(tcKey)) offenders.push(`${lensKey}: ${tcKey} resolves=${resolves}`);
      }

      /* A mounted hidden converter joins the list in catalog order so the control can switch it off. */
      for (const hiddenKey of fitting.filter((tcKey) => !published.includes(tcKey))) {
        const expected = fitting.filter((tcKey) => published.includes(tcKey) || tcKey === hiddenKey);
        const withMounted = offeredKeys(lensKey, hiddenKey);
        if (withMounted.join() !== expected.join())
          offenders.push(`${lensKey} + ${hiddenKey}: offered [${withMounted}], expected [${expected}]`);
      }
    }

    expect(offenders).toEqual([]);
  });
});
