/** MTF stays outside render-time optics; requests execute only in the mounted tab's worker. */
import { useMemo, useState } from "react";
import type { RuntimeLens } from "../../../types/optics.js";
import type { MtfAxialVignetting, MtfMethod, MtfRequestOptions, MtfResult, MtfSpectrum } from "../../../types/mtf.js";
import { createAnalysisRequest } from "../../../optics/analysis.js";
import type { AnalysisComputationContext } from "../../../optics/analysis.js";
import type { PreparedOpticalState } from "../../../optics/types.js";
import type { Theme } from "../../../types/theme.js";
import { assessMtfDataLimitations, assessMtfSupport, resolveMtfSpectrum } from "../../../optics/mtf.js";
import { formatFNumber, stopSemiDiameterForFNumber } from "../../../optics/optics.js";
import { useMtfComputation } from "../../hooks/useMtfComputation.js";
import { useMtfDataWarning } from "../../hooks/useMtfDataWarning.js";
import { useMtfPreferences } from "../../hooks/useMtfPreferences.js";
import { AnalysisEmptyState } from "./analysisUi.js";
import MtfChart from "./MtfChart.js";
import MtfControls from "./mtf/MtfControls.js";
import MtfDataWarning from "./mtf/MtfDataWarning.js";
import MtfFieldSummary from "./mtf/MtfFieldSummary.js";
import { textRun } from "../../../utils/text.js";

interface MtfTabProps {
  L: RuntimeLens;
  t: Theme;
  preparedState: PreparedOpticalState;
  analysisContext?: AnalysisComputationContext;
  currentEPSD: number;
  currentPhysStopSD: number;
  /** Marked f-number and current focal length, for the chart header. */
  fNumber?: number;
  focalLengthMm?: number;
  movementActive?: boolean;
}

/** Comparison aperture of manufacturer charts. */
const COMPARISON_F_NUMBER = 8;

const METHOD_LABELS: Record<MtfMethod, string> = {
  diffraction: "Diffraction-corrected",
  geometric: "Geometric",
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
  analysisContext,
  fNumber,
  focalLengthMm,
  movementActive = false,
}: MtfTabProps) {
  const [preferences, updatePreferences] = useMtfPreferences();
  const request = useMemo(
    () =>
      analysisContext?.request ??
      createAnalysisRequest({
        preparedState,
        dynamicEFL: focalLengthMm ?? 0,
        currentEPSD,
        currentPhysStopSD,
      }),
    [analysisContext, preparedState, focalLengthMm, currentEPSD, currentPhysStopSD],
  );
  const spectrum = useMemo(
    () => resolveMtfSpectrum(preparedState, preferences.spectrum),
    [preparedState, preferences.spectrum],
  );
  const options: MtfRequestOptions = useMemo(
    () => ({
      method: preferences.method,
      spectrum: spectrum.spectrum,
      focus: preferences.focus,
      maxGridSize: preferences.maxGridSize,
      fieldFractions: mtfFieldFractions(preferences.fieldStepPercent),
      movementActive,
    }),
    [
      preferences.method,
      preferences.focus,
      preferences.maxGridSize,
      preferences.fieldStepPercent,
      spectrum.spectrum,
      movementActive,
    ],
  );
  const support = useMemo(() => assessMtfSupport(request, options), [request, options]);
  const comparisonPolicy = preferences.compareF8 ? preferences.comparisonFocus : null;
  // Disclosure belongs to these controls, not to a later lens, aperture or spectrum.
  const [presentation, setPresentation] = useState({ request, options, comparisonPolicy, diagnostic: false });
  if (
    presentation.request !== request ||
    presentation.options !== options ||
    presentation.comparisonPolicy !== comparisonPolicy
  ) {
    setPresentation({ request, options, comparisonPolicy, diagnostic: false });
  }
  const diagnostic =
    presentation.request === request &&
    presentation.options === options &&
    presentation.comparisonPolicy === comparisonPolicy &&
    presentation.diagnostic;
  const job = support.available ? request : null;
  const { result, stale, running, error } = useMtfComputation(L, job, options);
  const shown = support.available ? result : null;
  const dataLimitations = useMemo(
    () =>
      assessMtfDataLimitations(preparedState, {
        preferredSpectrum: preferences.spectrum,
        spectrum: spectrum.spectrum,
        referenceWavelengthNm: support.referenceWavelengthNm,
        result: shown,
      }),
    [preparedState, preferences.spectrum, spectrum.spectrum, support.referenceWavelengthNm, shown],
  );
  const [warningAcknowledged, acknowledgeWarning] = useMtfDataWarning(L.source.key, dataLimitations);
  // The f/8 stop comes from the stop rule, as the aperture control's does.
  const compareF8Available = !!fNumber && fNumber < COMPARISON_F_NUMBER - 0.05 && L.maxFstop >= COMPARISON_F_NUMBER;
  const comparisonEnabled = compareF8Available && preferences.compareF8;
  const holdComparison = preferences.comparisonFocus === "hold";
  const mainShift = !stale ? shown?.focus?.appliedShiftMm : undefined;
  const comparisonOptions = useMemo(
    () => (holdComparison && mainShift !== undefined ? { ...options, heldFocusShiftMm: mainShift } : options),
    [options, holdComparison, mainShift],
  );
  const comparisonJob = useMemo(() => {
    if (
      !job ||
      !comparisonEnabled ||
      (holdComparison && mainShift === undefined) ||
      !(job.aperture.stopSemiDiameterMm > 0)
    )
      return null;
    const stop = stopSemiDiameterForFNumber(COMPARISON_F_NUMBER, job.preparedGeometry.zoomT, L);
    // At one state the paraxial entrance pupil is proportional to the stop.
    const pupil = (job.aperture.entrancePupilSemiDiameterMm * stop) / job.aperture.stopSemiDiameterMm;
    return createAnalysisRequest({
      preparedState: job.preparedGeometry,
      dynamicEFL: job.dynamicEFL,
      currentEPSD: pupil,
      currentPhysStopSD: stop,
      perspectiveTraceContext: job.perspectiveTraceContext,
    });
  }, [job, comparisonEnabled, holdComparison, mainShift, L]);
  const comparison = useMtfComputation(L, comparisonJob, comparisonOptions);
  const comparisonShown = comparisonJob && !comparison.stale && !stale ? comparison.result : null;
  // A result kept from an earlier request says nothing about the label on screen.
  const vignettingOf = (result: MtfResult | null, superseded: boolean) =>
    superseded ? null : (result?.axialVignetting ?? null);
  const comparisonLabel = `f/${COMPARISON_F_NUMBER}${comparisonPlaneLabel(comparisonShown, mainShift)}${axialVignettingNote(vignettingOf(comparisonShown, false))}`;
  const comparisonValues = comparisonShown?.fields.some((field) => field.sagittal.length && field.tangential.length)
    ? comparisonShown
    : null;
  const muted = { color: t.muted, margin: "4px 0" };
  return (
    <section style={{ color: t.value, fontSize: 12 }} aria-label="Simulated MTF">
      <h3 style={{ margin: "0 0 4px", fontSize: 14 }}>Simulated MTF</h3>
      <p style={muted}>
        {headerLine(options, support.referenceWavelengthNm, fNumber, focalLengthMm, shown, vignettingOf(shown, stale))}
      </p>
      {spectrum.note ? <p style={muted}>{spectrum.note}</p> : null}
      <ImagePlaneNote result={shown} t={t} onUseAuto={() => updatePreferences({ focus: "auto" })} />
      <MtfControls
        t={t}
        preferences={preferences}
        onChange={updatePreferences}
        slowFieldSteps={spectrum.spectrum !== "reference"}
        compareF8Available={compareF8Available}
      />
      {comparisonEnabled ? (
        comparisonJob && comparison.error ? (
          <p role="alert">{`f/8 comparison: ${comparison.error}`}</p>
        ) : comparisonShown && !comparisonShown.support.available ? (
          <p role="status" style={muted}>{`f/8 comparison: ${comparisonShown.support.message}`}</p>
        ) : comparison.running || !comparisonJob ? (
          <p role="status" style={muted}>
            {comparisonJob ? "Calculating f/8 comparison…" : "f/8 comparison: waiting for the wide-open image plane…"}
          </p>
        ) : null
      ) : null}
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
          ) : null}
          {!stale ? (
            <div role="note" aria-label="MTF numerical limits" style={{ margin: "8px 0", color: t.value }}>
              <p>
                {textRun(
                  "Normal view shows converged fields within their stable frequency band.",
                  shown.fields.some((field) => field.status === "unconverged")
                    ? ` Main result: ${shown.fields.filter((field) => field.status === "unconverged").length} unconverged fields.`
                    : "",
                  comparisonShown?.fields.some((field) => field.status === "unconverged")
                    ? ` f/8 comparison: ${comparisonShown.fields.filter((field) => field.status === "unconverged").length} unconverged fields.`
                    : "",
                  " Sampling has not demonstrated stability within 0.01 MTF for unconverged fields; this does not establish physical invalidity. Stopping down may improve convergence.",
                )}
              </p>
              <label style={{ cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={diagnostic}
                  onChange={(event) =>
                    setPresentation({ request, options, comparisonPolicy, diagnostic: event.target.checked })
                  }
                />
                Show diagnostic estimates (unconverged or unverified frequencies)
              </label>
            </div>
          ) : null}
          {stale ? <p role="status">Previous settings are shown while the current calculation updates.</p> : null}
          <MtfDataWarning
            limitations={dataLimitations}
            acknowledged={warningAcknowledged}
            onAcknowledge={acknowledgeWarning}
            t={t}
          >
            <MtfChart
              result={shown}
              view={preferences.view}
              frequencies={preferences.frequencies}
              t={t}
              stale={stale}
              comparison={comparisonShown}
              comparisonLabel={comparisonLabel}
              diagnostic={diagnostic}
            />
            <MtfFieldSummary
              result={shown}
              frequencies={preferences.frequencies}
              t={t}
              diagnostic={diagnostic}
              stale={stale}
              comparison={comparisonValues}
              comparisonLabel={comparisonLabel}
              mainLabel={fNumber ? `f/${formatFNumber(fNumber)} (main)` : "Main aperture"}
            />
          </MtfDataWarning>
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
            {textRun(
              "Finite object ",
              support.conjugate.objectDistanceMm.toFixed(1),
              " mm from",
              " ",
              support.conjugate.distanceReference === "image-plane" ? "the image plane" : "the first surface",
              ". Source:",
              " ",
              support.conjugate.source,
            )}
          </p>
        ) : null}
        <ul>
          {support.limitations.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
        <p>
          Best axial focus is an estimated common image plane; it is not a numerically verified physical optimum. Field
          positions are fractions of the format-corner image height, or of the modeled edge when the lens declares no
          format.
        </p>
      </details>
    </section>
  );
}

/** Label the applied plane, including the focus change relative to the main aperture. */
function comparisonPlaneLabel(result: MtfResult | null, mainShift: number | undefined): string {
  const focus = result?.focus;
  if (!focus) return "";
  const microns = (mm: number) => `${mm >= 0 ? "+" : "−"}${Math.abs(mm * 1000).toFixed(0)} µm`;
  if (focus.mode === "held") return `, wide-open plane (${microns(focus.appliedShiftMm)} from authored plane)`;
  if (focus.mode !== "best-axial") return ", design plane";
  const relative = mainShift === undefined ? "" : `; ${microns(focus.appliedShiftMm - mainShift)} from wide-open plane`;
  return `, refocused (${microns(focus.appliedShiftMm)} from authored plane${relative})`;
}

function headerLine(
  options: MtfRequestOptions,
  referenceWavelengthNm: number,
  fNumber: number | undefined,
  focalLengthMm: number | undefined,
  result: MtfResult | null,
  vignetting: MtfAxialVignetting | null,
): string {
  const parts: string[] = [];
  if (fNumber) parts.push(`f/${formatFNumber(fNumber)}${axialVignettingNote(vignetting)}`);
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
    bestAxial
      ? `Best axial focus estimate (${shift >= 0 ? "+" : "−"}${Math.abs(shift).toFixed(3)} mm)`
      : "Design image plane",
  );
  return parts.join(" · ");
}

/**
 * Qualify a marked f-number when a clear aperture vignettes the axial marginal ray, the Summary working f-number's
 * `vignetted` state. Callers pass null for a superseded result.
 */
function axialVignettingNote(vignetting: MtfAxialVignetting | null): string {
  if (!vignetting) return "";
  return ` (axial beam vignetted at surface ${vignetting.surfaceLabel}${vignetting.beforeStop ? ", before the stop" : ""})`;
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
      <span>{`The lens data places the image plane ${Math.abs(offset).toFixed(2)} mm ${offset > 0 ? "in front of" : "behind"} its own prescription's paraxial focus: the printed back focus, or its transcription, disagrees with the prescription.`}</span>{" "}
      {focus.mode === "best-axial" ? (
        <span>
          {`These curves use best axial focus (${shift >= 0 ? "+" : "−"}${Math.abs(shift).toFixed(3)} mm); choose “Design plane (always)” to see the authored plane.`}
        </span>
      ) : focus.requestedMode === "design" ? (
        <span>
          <span>Curves at the authored plane are out of focus. </span>
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
        </span>
      ) : null}
    </p>
  );
}
