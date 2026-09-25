/** MTF stays outside render-time optics; requests execute only in the mounted tab's worker. */
import { useMemo } from "react";
import type { RuntimeLens } from "../../../types/optics.js";
import type { MtfMethod, MtfOptions, MtfResult, MtfSpectrum } from "../../../types/mtf.js";
import type { PreparedOpticalState } from "../../../optics/types.js";
import type { Theme } from "../../../types/theme.js";
import { assessMtfSupport, resolveMtfSpectrum } from "../../../optics/mtf.js";
import { formatFNumber } from "../../../optics/optics.js";
import { useMtfComputation } from "../../hooks/useMtfComputation.js";
import { useMtfPreferences } from "../../hooks/useMtfPreferences.js";
import { AnalysisEmptyState } from "./analysisUi.js";
import MtfChart from "./MtfChart.js";
import MtfControls from "./mtf/MtfControls.js";
import MtfFieldSummary from "./mtf/MtfFieldSummary.js";

interface MtfTabProps {
  L: RuntimeLens;
  t: Theme;
  preparedState: PreparedOpticalState;
  currentEPSD: number;
  currentPhysStopSD: number;
  /** Selected working f-number and current focal length, for the chart header. */
  fNumber?: number;
  focalLengthMm?: number;
  movementActive?: boolean;
}

/** Comparison aperture of manufacturer charts. */
const COMPARISON_F_NUMBER = 8;

const METHOD_LABELS: Record<MtfMethod, string> = {
  "geometric-dl": "Diffraction-corrected",
  geometric: "Geometric",
  diffraction: "Scalar diffraction",
};
const SPECTRUM_LABELS: Record<MtfSpectrum, string> = {
  photopic: "photopic",
  cdf: "C/d/F",
  reference: "reference line",
};

/**
 * Evenly spaced fractions of the reference image height.
 *
 * @param stepPercent - spacing in percent
 * @returns fractions from 0 to 1 inclusive
 */
export function mtfFieldFractions(stepPercent: number): number[] {
  const count = Math.round(100 / stepPercent);
  return Array.from({ length: count + 1 }, (_, i) => i / count);
}

export default function MtfTab({
  L,
  t,
  preparedState,
  currentEPSD,
  currentPhysStopSD,
  fNumber,
  focalLengthMm,
  movementActive = false,
}: MtfTabProps) {
  const [preferences, updatePreferences] = useMtfPreferences();
  const spectrum = useMemo(
    () => resolveMtfSpectrum(preparedState, preferences.spectrum),
    [preparedState, preferences.spectrum],
  );
  const options: MtfOptions = useMemo(
    () => ({
      method: preferences.method,
      spectrum: spectrum.spectrum,
      focus: preferences.focus,
      maxGridSize: preferences.maxGridSize,
      fieldFractions: mtfFieldFractions(preferences.fieldStepPercent),
      pupilSemiDiameterMm: currentEPSD,
      stopSemiDiameterMm: currentPhysStopSD,
      movementActive,
    }),
    [preferences, spectrum.spectrum, currentEPSD, currentPhysStopSD, movementActive],
  );
  const support = useMemo(() => assessMtfSupport(preparedState, options), [preparedState, options]);
  const { focusT, zoomT, aberrationT } = preparedState;
  const job = useMemo(
    () => (support.available ? { focusT, zoomT, aberrationT, options } : null),
    [support.available, focusT, zoomT, aberrationT, options],
  );
  const { result, stale, running, error } = useMtfComputation(L, job);
  const shown = support.available ? result : null;
  // Stop-down scales the pupil and stop radii by N/8, as the aperture control does.
  const compareF8Available = !!fNumber && fNumber < COMPARISON_F_NUMBER - 0.05 && L.maxFstop >= COMPARISON_F_NUMBER;
  const comparisonJob = useMemo(() => {
    if (!job || !compareF8Available || !preferences.compareF8 || !fNumber) return null;
    const scale = fNumber / COMPARISON_F_NUMBER;
    const stopped = {
      ...job.options,
      pupilSemiDiameterMm: job.options.pupilSemiDiameterMm * scale,
      stopSemiDiameterMm: job.options.stopSemiDiameterMm * scale,
    };
    return { ...job, options: stopped };
  }, [job, compareF8Available, preferences.compareF8, fNumber]);
  const comparison = useMtfComputation(L, comparisonJob);
  const muted = { color: t.muted, margin: "4px 0" };
  return (
    <section style={{ color: t.value, fontSize: 12 }} aria-label="Simulated MTF">
      <h3 style={{ margin: "0 0 4px", fontSize: 14 }}>Simulated MTF</h3>
      <p style={muted}>{headerLine(options, support.referenceWavelengthNm, fNumber, focalLengthMm, shown)}</p>
      {spectrum.note ? <p style={muted}>{spectrum.note}</p> : null}
      <ImagePlaneNote result={shown} t={t} onUseAuto={() => updatePreferences({ focus: "auto" })} />
      <MtfControls
        t={t}
        preferences={preferences}
        onChange={updatePreferences}
        slowFieldSteps={spectrum.spectrum !== "reference"}
        compareF8Available={compareF8Available}
      />
      {!support.available ? (
        <AnalysisEmptyState t={t}>
          <span role="status">{support.message}</span>
        </AnalysisEmptyState>
      ) : error ? (
        <p role="alert">{error}</p>
      ) : !shown ? (
        <p role="status" style={muted}>
          Calculating MTF in the background…
        </p>
      ) : (
        <>
          {running ? (
            <p role="status" style={muted}>
              {stale ? "Updating…" : `Calculating… ${progressText(shown)}`}
            </p>
          ) : comparisonJob && comparison.running ? (
            <p role="status" style={muted}>
              Calculating f/8 comparison…
            </p>
          ) : null}
          <MtfChart
            result={shown}
            view={preferences.view}
            frequencies={preferences.frequencies}
            t={t}
            stale={stale}
            comparison={comparisonJob && !comparison.stale ? comparison.result : null}
            comparisonLabel="f/8"
          />
          <MtfFieldSummary result={shown} frequencies={preferences.frequencies} t={t} />
        </>
      )}
      <p style={muted}>
        Prescription estimate, not manufacturer MTF. Modeled rear cover/filter plates are included; any omitted sensor
        optics can substantially change these curves.
      </p>
      <details style={{ color: t.muted, fontSize: 11 }}>
        <summary style={{ cursor: "pointer" }}>Model assumptions</summary>
        <p>{support.message}</p>
        {support.conjugate ? (
          <p>
            Finite object {support.conjugate.objectDistanceMm.toFixed(1)} mm from{" "}
            {support.conjugate.distanceReference === "image-plane" ? "the image plane" : "the first surface"}. Source:{" "}
            {support.conjugate.source}
          </p>
        ) : null}
        <ul>
          {support.limitations.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
        <p>
          Field positions are fractions of the format-corner image height, or of the modeled edge when the lens declares
          no format.
        </p>
      </details>
    </section>
  );
}

function headerLine(
  options: MtfOptions,
  referenceWavelengthNm: number,
  fNumber: number | undefined,
  focalLengthMm: number | undefined,
  result: MtfResult | null,
): string {
  const parts: string[] = [];
  if (fNumber) parts.push(`f/${formatFNumber(fNumber)}`);
  if (focalLengthMm) parts.push(`${focalLengthMm.toFixed(1)} mm`);
  parts.push(METHOD_LABELS[options.method]);
  parts.push(
    options.spectrum === "reference"
      ? `${referenceWavelengthNm.toFixed(1)} nm`
      : `${SPECTRUM_LABELS[options.spectrum]} spectrum`,
  );
  // Label the plane actually applied: auto may refocus a lens whose image plane is inconsistent.
  const focus = result?.focus;
  const bestAxial = focus ? focus.mode === "best-axial" : options.focus === "best-axial";
  const shift = focus?.appliedShiftMm ?? 0;
  parts.push(
    bestAxial ? `Best axial focus (${shift >= 0 ? "+" : "−"}${Math.abs(shift).toFixed(3)} mm)` : "Design image plane",
  );
  return parts.join(" · ");
}

function progressText(result: MtfResult): string {
  const done = result.fields.filter((f) => f.status !== "pending").length;
  return `${done} / ${result.fields.length} fields`;
}

/**
 * Explains a lens whose authored image plane contradicts its own prescription's paraxial focus
 * (see `mtfImagePlaneOffset`); spherical-aberration focus shift alone never shows it.
 */
function ImagePlaneNote({ result, t, onUseAuto }: { result: MtfResult | null; t: Theme; onUseAuto: () => void }) {
  const focus = result?.focus;
  if (!focus?.imagePlaneInconsistent || focus.imagePlaneOffsetMm === null) return null;
  const offset = focus.imagePlaneOffsetMm;
  const shift = focus.appliedShiftMm;
  return (
    <p style={{ color: t.muted, margin: "4px 0" }}>
      The lens data places the image plane {Math.abs(offset).toFixed(2)} mm {offset > 0 ? "in front of" : "behind"} its
      own prescription&apos;s paraxial focus: the printed back focus, or its transcription, disagrees with the
      prescription.{" "}
      {focus.mode === "best-axial" ? (
        <>
          These curves use best axial focus ({shift >= 0 ? "+" : "−"}
          {Math.abs(shift).toFixed(3)} mm); choose “Design plane (always)” to see the authored plane.
        </>
      ) : focus.requestedMode === "design" ? (
        <>
          Curves at the authored plane are out of focus.{" "}
          <button
            type="button"
            onClick={onUseAuto}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              color: t.value,
              cursor: "pointer",
              font: "inherit",
            }}
          >
            Refocus automatically
          </button>
        </>
      ) : null}
    </p>
  );
}
