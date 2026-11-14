/** MTF stays outside render-time optics; requests execute only in the mounted tab's worker. */
import { useContext, useMemo, useRef, useState } from "react";
import type { RuntimeLens } from "../../../types/optics.js";
import type { MtfAxialVignetting, MtfMethod, MtfRequestOptions, MtfResult, MtfSpectrum } from "../../../types/mtf.js";
import { createAnalysisRequest } from "../../../optics/analysis.js";
import type { AnalysisComputationContext } from "../../../optics/analysis.js";
import type { PreparedOpticalState } from "../../../optics/types.js";
import type { Theme } from "../../../types/theme.js";
import { assessMtfDataLimitations, assessMtfSupport, resolveMtfSpectrum } from "../../../optics/mtf.js";
import { formatFNumber, prepareRuntimeState, stopSemiDiameterForFNumber } from "../../../optics/optics.js";
import { publishedFocusStations, publishedZoomStations } from "../../../optics/publishedStations.js";
import { LensDispatchContext, LensStateContext } from "../../../utils/state/LensContext.js";
import { SET_PATENT_STATION } from "../../../utils/state/lensReducer.js";
import { useMtfComputation } from "../../hooks/useMtfComputation.js";
import { useMtfDataWarning } from "../../hooks/useMtfDataWarning.js";
import { useSharedMtfPreferences } from "../../../utils/state/useSharedMtfPreferences.js";
import { buildMtfLink } from "../../../utils/state/mtfUrlState.js";
import { AnalysisEmptyState } from "./analysisUi.js";
import MtfChart from "./MtfChart.js";
import MtfControls from "./mtf/MtfControls.js";
import MtfDataWarning from "./mtf/MtfDataWarning.js";
import MtfFieldSummary from "./mtf/MtfFieldSummary.js";
import { buildMtfExportContext, MTF_EXPORT_DISCLAIMER } from "./mtf/mtfExportContext.js";
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

interface FocusSearchProps {
  result: MtfResult;
  comparison: MtfResult | null;
  mainLabel: string;
  t: Theme;
}

interface ConjugateReadoutProps extends FocusSearchProps {
  L: RuntimeLens;
  request: Parameters<typeof assessMtfSupport>[0];
  options: MtfRequestOptions;
  fNumber?: number;
  frequencies: readonly number[];
  stale: boolean;
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
  single: "single wavelength",
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
  const [preferences, updatePreferences, sharedSettings, useStoredSettings] = useSharedMtfPreferences();
  const chartRef = useRef<HTMLElement>(null);
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
    () => resolveMtfSpectrum(preparedState, preferences.spectrum, preferences.wavelengthNm),
    [preparedState, preferences.spectrum, preferences.wavelengthNm],
  );
  const options: MtfRequestOptions = useMemo(
    () => ({
      method: preferences.method,
      ...(spectrum.spectrum === "single"
        ? { spectrum: "single" as const, wavelengthNm: preferences.wavelengthNm }
        : { spectrum: spectrum.spectrum }),
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
      preferences.wavelengthNm,
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
        wavelengthNm: preferences.wavelengthNm,
        spectrum: spectrum.spectrum,
        referenceWavelengthNm: support.referenceWavelengthNm,
        result: shown,
      }),
    [
      preparedState,
      preferences.spectrum,
      preferences.wavelengthNm,
      spectrum.spectrum,
      support.referenceWavelengthNm,
      shown,
    ],
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
      {sharedSettings ? (
        <p role="status" style={muted}>
          <span>Settings from a shared link</span>{" "}
          <button
            type="button"
            onClick={useStoredSettings}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              color: t.value,
              cursor: "pointer",
              font: "inherit",
            }}
          >
            Use my settings
          </button>
        </p>
      ) : null}
      <p style={muted}>
        {headerLine(options, support.referenceWavelengthNm, fNumber, focalLengthMm, shown, vignettingOf(shown, stale))}
      </p>
      {spectrum.note ? <p style={muted}>{spectrum.note}</p> : null}
      <ImagePlaneNote result={shown} t={t} onUseAuto={() => updatePreferences({ focus: "auto" })} />
      <MtfControls
        t={t}
        preferences={preferences}
        onChange={updatePreferences}
        slowFieldSteps={spectrum.spectrum !== "reference" && spectrum.spectrum !== "single"}
        compareF8Available={compareF8Available}
        result={shown}
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
              exportRef={chartRef}
              result={shown}
              view={preferences.view}
              frequencies={preferences.frequencies}
              t={t}
              stale={stale}
              comparison={comparisonShown}
              comparisonLabel={comparisonLabel}
              diagnostic={diagnostic}
              advanced={preferences.advanced}
              diffractionLimit={preferences.diffractionLimit && preferences.method === "diffraction"}
              frequencyField={preferences.frequencyField}
              pixelPitchUm={preferences.pixelPitchUm}
            />
            {preferences.advanced ? (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                <FocusSearch
                  result={shown}
                  comparison={comparisonShown}
                  mainLabel={fNumber ? `f/${formatFNumber(fNumber)} (main)` : "Main aperture"}
                  t={t}
                />
                <ConjugateReadout
                  L={L}
                  request={request}
                  options={options}
                  result={shown}
                  comparison={comparisonShown}
                  mainLabel="Main aperture"
                  fNumber={fNumber}
                  frequencies={preferences.frequencies}
                  stale={stale}
                  t={t}
                />
              </div>
            ) : null}
            <MtfFieldSummary
              result={shown}
              frequencies={preferences.frequencies}
              t={t}
              diagnostic={diagnostic}
              stale={stale}
              comparison={preferences.advanced ? comparisonShown : comparisonValues}
              comparisonLabel={comparisonLabel}
              mainLabel={fNumber ? `f/${formatFNumber(fNumber)} (main)` : "Main aperture"}
              diffractionLimit={preferences.diffractionLimit && preferences.method === "diffraction"}
              pixelPitchUm={preferences.view === "frequency" ? preferences.pixelPitchUm : null}
              advanced={preferences.advanced}
              getMtfLink={() => buildMtfLink(window.location.href, preferences)}
              chartRef={chartRef}
              view={preferences.view}
              frequencyField={preferences.frequencyField}
              exportComparison={comparisonShown}
              getExportContext={() =>
                buildMtfExportContext({
                  lens: L,
                  result: shown,
                  preferences,
                  focalLengthMm: focalLengthMm ?? (request.dynamicEFL || L.EFL),
                  fNumber,
                  zoomT: preparedState.zoomT,
                  focusT: preparedState.focusT,
                  spectrumNote: spectrum.note,
                  link: buildMtfLink(window.location.href, preferences),
                  date: new Date(),
                  partial: running || (comparisonEnabled && (comparison.running || !comparisonJob)),
                  diagnostic,
                  comparison: comparisonShown,
                  comparisonRequested: comparisonEnabled,
                })
              }
            />
          </MtfDataWarning>
        </>
      )}
      <p style={muted}>{MTF_EXPORT_DISCLAIMER}</p>
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

/** Chart-state facts share the focus search's cache; toggling this block never traces a chart. */
function ConjugateReadout({
  L,
  request,
  options,
  result,
  comparison,
  mainLabel,
  fNumber,
  frequencies,
  stale,
  t,
}: ConjugateReadoutProps) {
  const viewer = useContext(LensStateContext);
  const dispatch = useContext(LensDispatchContext);
  const canSelectStation = !!dispatch && !!viewer && !viewer.state.lens.comparing;
  const stations = useMemo(() => {
    if (!canSelectStation) return [];
    return publishedZoomStations(L).flatMap((zoom) =>
      publishedFocusStations(L, zoom.index).flatMap(({ conjugate }) => {
        if (!conjugate) return [];
        const preparedState = prepareRuntimeState(L, conjugate.focusT, conjugate.zoomT);
        const stationRequest = createAnalysisRequest({
          preparedState,
          dynamicEFL: 0,
          currentEPSD: request.aperture.entrancePupilSemiDiameterMm,
          currentPhysStopSD: request.aperture.stopSemiDiameterMm,
        });
        return assessMtfSupport(stationRequest, options).available ? [conjugate] : [];
      }),
    );
  }, [L, request.aperture, options, canSelectStation]);
  const sources = [
    { result, label: mainLabel, marked: fNumber },
    ...(comparison ? [{ result: comparison, label: "f/8 comparison", marked: COMPARISON_F_NUMBER }] : []),
  ];
  const finite = result.conjugate?.kind === "finite";
  const ratio = (m: number) => `1:${(1 / Math.abs(m)).toFixed(2)}`;
  const rows = [
    [
      "Object",
      (r) =>
        r.conjugate?.kind === "infinity"
          ? "At infinity"
          : r.conjugate?.kind === "finite"
            ? `${r.conjugate.objectDistanceMm.toFixed(1)} mm from the ${r.conjugate.distanceReference === "image-plane" ? "authored image plane" : "first surface"}`
            : "Unavailable",
    ],
    [
      "Aperture",
      (r, marked) =>
        `${marked ? `Marked f/${formatFNumber(marked)}` : "Marked f-number unavailable"} · ${r.workingFNumber === null ? `working f-number unavailable${r.axialVignetting ? " (axial marginal ray vignetted)" : ""}` : `working f/${formatFNumber(r.workingFNumber)}`}`,
    ],
    [
      "On-axis diffraction cutoff",
      (r) => {
        const nm = r.support.spectralLines[0]?.wavelengthNm;
        return r.workingFNumber !== null && nm
          ? `${(1e6 / (nm * r.workingFNumber)).toFixed(1)} lp/mm at ${nm.toFixed(1)} nm; 1/(λ·N_working)`
          : "Unavailable";
      },
    ],
    ...(finite
      ? ([
          [
            "Magnification (on axis)",
            (r) =>
              r.magnification === null
                ? "Unavailable"
                : `m = ${r.magnification.toFixed(4)}; ${r.magnification === 0 ? "ratio unavailable" : ratio(r.magnification)}`,
          ],
          [
            "Object-side frequencies (on axis)",
            (r) =>
              r.magnification === null
                ? "Unavailable"
                : `ν_object = |m|·ν_image: ${frequencies.join(", ")} image lp/mm → ${frequencies.map((f) => (Math.abs(r.magnification!) * f).toFixed(2)).join(", ")} object lp/mm`,
          ],
        ] satisfies ReadonlyArray<[string, (r: MtfResult) => string]>)
      : []),
  ] satisfies ReadonlyArray<[string, (r: MtfResult, marked?: number) => string]>;
  const cell = { padding: "2px 6px", textAlign: "left" as const, fontWeight: "normal" as const };
  return (
    <section
      aria-label="Conjugate and working aperture"
      style={{ margin: "8px 0", fontSize: 11, color: t.muted, minWidth: 0, maxWidth: "100%" }}
    >
      <h4 style={{ margin: "0 0 4px", color: t.value, fontSize: 12 }}>Conjugate and working aperture</h4>
      {stale ? (
        <p>Updating chart-state readouts…</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table style={{ borderCollapse: "collapse" }}>
            <caption style={{ textAlign: "left", paddingBottom: 4 }}>
              Working aperture uses the real axial stop-rim ray at the first spectral line; magnification uses a small
              off-axis chief ray on the charted plane.
            </caption>
            <thead>
              <tr>
                <th scope="col" style={cell}>
                  Chart state
                </th>
                {sources.map(({ label }) => (
                  <th key={label} scope="col" style={cell}>
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, value]) => (
                <tr key={label}>
                  <th scope="row" style={cell}>
                    {label}
                  </th>
                  {sources.map((source) => (
                    <td key={source.label} style={cell}>
                      {value(source.result, source.marked)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {stations.length ? (
        <div
          role="group"
          aria-label="Finite conjugate stations"
          style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 6 }}
        >
          {stations.map((station) => {
            const active =
              !stale &&
              result.support.conjugate?.focusT === station.focusT &&
              result.support.conjugate.zoomT === station.zoomT;
            const distance = `${Number((station.objectDistanceMm / 1000).toPrecision(4))} m`;
            const label = active && result.magnification ? `${ratio(result.magnification)} (${distance})` : distance;
            return (
              <button
                key={`${station.zoomT}/${station.focusT}`}
                type="button"
                aria-pressed={active}
                title={`${distance} from the ${station.distanceReference === "image-plane" ? "authored image plane" : "first surface"}; zoom ${station.zoomT}. ${station.source}`}
                onClick={() => dispatch?.({ type: SET_PATENT_STATION, zoomT: station.zoomT, focusT: station.focusT })}
                style={{
                  background: "none",
                  border: `1px solid ${t.muted}`,
                  color: t.value,
                  font: "inherit",
                  cursor: "pointer",
                  padding: "2px 6px",
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
      ) : null}
    </section>
  );
}

/** Numerical focus diagnostics use the geometric search scores for either chart method. */
function FocusSearch({ result, comparison, mainLabel, t }: FocusSearchProps) {
  const sources = [{ result, label: mainLabel }, ...(comparison ? [{ result: comparison, label: "f/8" }] : [])];
  const modes = { auto: "Auto", design: "Design plane", "best-axial": "Best axial focus", held: "Held image plane" };
  const shift = (mm: number | null | undefined) =>
    mm == null ? "—" : `${mm >= 0 ? "+" : "−"}${Math.abs(mm).toFixed(4)} mm`;
  const cell = { padding: "2px 6px", textAlign: "left" as const, fontWeight: "normal" as const };
  const rows = [
    ["Requested mode", (focus) => (focus ? modes[focus.requestedMode] : "—")],
    ["Applied mode", (focus) => (focus ? modes[focus.mode] : "—")],
    ["Applied shift from authored plane", (focus) => shift(focus?.appliedShiftMm)],
    ["Best-axial shift from authored plane", (focus) => shift(focus?.bestAxialShiftMm)],
    ["Design-plane score (mean axial geometric MTF at 10–50 lp/mm)", (focus) => focus?.designScore?.toFixed(4) ?? "—"],
    ["Best-plane score (mean axial geometric MTF at 10–50 lp/mm)", (focus) => focus?.bestScore?.toFixed(4) ?? "—"],
    ["Image-plane offset (paraxial focus − authored plane)", (focus) => shift(focus?.imagePlaneOffsetMm)],
    [
      "Image-plane consistency",
      (focus) =>
        focus?.imagePlaneOffsetMm == null
          ? "Not assessed"
          : focus.imagePlaneInconsistent
            ? "Flagged inconsistent"
            : "Not flagged inconsistent",
    ],
  ] satisfies ReadonlyArray<[string, (focus: MtfResult["focus"]) => string]>;
  return (
    <section
      aria-label="Focus search"
      style={{ margin: "8px 0", fontSize: 11, color: t.muted, minWidth: 0, maxWidth: "100%" }}
    >
      <h4 style={{ margin: "0 0 4px", color: t.value, fontSize: 12 }}>Focus search</h4>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse" }}>
          <caption style={{ textAlign: "left", paddingBottom: 4 }}>
            These details describe numerical sampling and the focus search, not physical accuracy.
          </caption>
          <thead>
            <tr>
              <th scope="col" style={cell}>
                Focus diagnostic
              </th>
              {sources.map(({ label }) => (
                <th key={label} scope="col" style={cell}>
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, value]) => (
              <tr key={label}>
                <th scope="row" style={cell}>
                  {label}
                </th>
                {sources.map((source) => (
                  <td key={source.label} style={{ ...cell, whiteSpace: "nowrap" }}>
                    {value(source.result.focus)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
    options.spectrum === "single"
      ? `${options.wavelengthNm} nm`
      : options.spectrum === "reference"
        ? `${referenceWavelengthNm.toFixed(1)} nm`
        : `${SPECTRUM_LABELS[options.spectrum]} spectrum`,
  );
  // Label the plane actually applied: auto may refocus a lens whose image plane is inconsistent.
  const focus = result?.focus;
  const bestAxial = focus ? focus.mode === "best-axial" : options.focus === "best-axial";
  const shift = focus?.appliedShiftMm ?? 0;
  const shiftLabel = `${shift >= 0 ? "+" : "−"}${Math.abs(shift).toFixed(3)} mm`;
  parts.push(
    focus?.mode === "held"
      ? `Held image plane (${shiftLabel} from authored plane)`
      : bestAxial
        ? `Best axial focus estimate (${shiftLabel})`
        : "Design image plane",
  );
  return parts.join(" · ");
}

/**
 * Qualify a marked f-number when a clear aperture vignettes the chart's axial marginal ray.
 * Callers pass null for a superseded result.
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
      ) : focus.mode === "held" && shift !== 0 ? (
        <span>
          {`These curves use a held image plane (${shift >= 0 ? "+" : "−"}${Math.abs(shift).toFixed(3)} mm from the authored plane).`}
        </span>
      ) : (
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
      )}
    </p>
  );
}
