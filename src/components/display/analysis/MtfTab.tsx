/** MTF stays outside render-time optics; requests execute only in the mounted tab's worker. */
import { useContext, useMemo, useRef, useState } from "react";
import type { RuntimeLens } from "../../../types/optics.js";
import type { MtfAxialVignetting, MtfMethod, MtfRequestOptions, MtfResult, MtfSpectrum } from "../../../types/mtf.js";
import { createAnalysisRequest } from "../../../optics/analysis.js";
import type { AnalysisComputationContext } from "../../../optics/analysis.js";
import type { PreparedOpticalState } from "../../../optics/types.js";
import type { Theme } from "../../../types/theme.js";
import { assessMtfDataLimitations, assessMtfSupport, resolveMtfSpectrum } from "../../../optics/mtf.js";
import { formatFNumber, prepareRuntimeState } from "../../../optics/optics.js";
import { publishedFocusStations, publishedZoomStations } from "../../../optics/publishedStations.js";
import { LensDispatchContext, LensStateContext } from "../../../utils/state/LensContext.js";
import { SET_PATENT_STATION } from "../../../utils/state/lensReducer.js";
import { useMtfSweep } from "../../hooks/useMtfApertureSweep.js";
import {
  mtfApertureRequests,
  mtfZoomRequests,
  mtfComparisonFNumbers,
  mtfRequestAtAperture,
} from "./mtf/mtfApertureSweep.js";
import { mtfSweepFields, mtfSweepLabel } from "./mtf/mtfPresentation.js";
import { useMtfComputation } from "../../hooks/useMtfComputation.js";
import { useMtfDataWarning } from "../../hooks/useMtfDataWarning.js";
import { useSharedMtfPreferences } from "../../../utils/state/useSharedMtfPreferences.js";
import { buildMtfLink } from "../../../utils/state/mtfUrlState.js";
import { resolveMtfPreferences } from "../../../utils/state/mtfPreferences.js";
import { AnalysisEmptyState } from "./analysisUi.js";
import MtfChart from "./MtfChart.js";
import MtfControls from "./mtf/MtfControls.js";
import MtfDataWarning from "./mtf/MtfDataWarning.js";
import MtfFieldSummary from "./mtf/MtfFieldSummary.js";
import MtfActions from "./mtf/MtfActions.js";
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
  comparisonFNumber: number;
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
  const [storedPreferences, updatePreferences, sharedSettings, useStoredSettings] = useSharedMtfPreferences();
  const preferences = resolveMtfPreferences(storedPreferences, L.isZoom);
  const chartRef = useRef<HTMLElement>(null);
  const view = preferences.view;
  const isSweep = view === "aperture" || view === "zoom";
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
      movementActive: request.pose?.active ?? movementActive,
    }),
    [
      preferences.method,
      preferences.focus,
      preferences.maxGridSize,
      preferences.fieldStepPercent,
      spectrum.spectrum,
      preferences.wavelengthNm,
      movementActive,
      request.pose?.active,
    ],
  );
  const support = useMemo(() => assessMtfSupport(request, options), [request, options]);
  const comparisonFNumbers = mtfComparisonFNumbers(fNumber, L.maxFstop);
  const comparisonFNumber = preferences.comparisonFNumber;
  const comparisonAvailable = comparisonFNumbers.includes(comparisonFNumber);
  const comparisonAperture = `f/${comparisonFNumber}`;
  const comparisonEnabled = !isSweep && comparisonAvailable && preferences.compareF8;
  const comparisonPolicy =
    view === "zoom"
      ? `zoom/${preferences.frequencyField}`
      : view === "aperture"
        ? `aperture/${preferences.comparisonFocus}/${preferences.frequencyField}`
        : comparisonEnabled
          ? `${preferences.comparisonFocus}/${comparisonFNumber}`
          : null;
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
  const job = support.available && view !== "zoom" ? request : null;
  const { result, stale, running, error } = useMtfComputation(L, job, options);
  const mainShown = support.available ? result : null;
  const dataLimitations = useMemo(
    () =>
      assessMtfDataLimitations(preparedState, {
        preferredSpectrum: preferences.spectrum,
        wavelengthNm: preferences.wavelengthNm,
        spectrum: spectrum.spectrum,
        referenceWavelengthNm: support.referenceWavelengthNm,
        result: mainShown,
        fieldFractions: options.fieldFractions,
      }),
    [
      preparedState,
      preferences.spectrum,
      preferences.wavelengthNm,
      spectrum.spectrum,
      support.referenceWavelengthNm,
      mainShown,
      options.fieldFractions,
    ],
  );
  const holdComparison = preferences.comparisonFocus === "hold";
  const mainShift = !stale ? mainShown?.focus?.appliedShiftMm : undefined;
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
    return mtfRequestAtAperture(L, job, comparisonFNumber);
  }, [job, comparisonEnabled, comparisonFNumber, holdComparison, mainShift, L]);
  const sweepFieldKey = mtfSweepFields(mainShown, preferences.frequencyField).join(",");
  const sweepOptions = useMemo(
    () => ({ ...comparisonOptions, fieldFractions: sweepFieldKey.split(",").map(Number) }),
    [comparisonOptions, sweepFieldKey],
  );
  // The overview's outermost available field is final only after the charted request completes.
  const sweepReady =
    !stale &&
    mainShown &&
    (typeof preferences.frequencyField === "number" || !running) &&
    (!holdComparison || mainShift !== undefined);
  const zoomRequests = useMemo(() => (view === "zoom" ? mtfZoomRequests(L, request) : []), [L, request, view]);
  const sweepRequests =
    view === "zoom"
      ? zoomRequests.map((sample) => ({
          ...sample,
          edgeOverview: preferences.frequencyField === "overview",
          sweep: { candidates: options.fieldFractions!, field: preferences.frequencyField },
        }))
      : view === "aperture" && sweepReady && job
        ? mtfApertureRequests(L, job, fNumber)
        : [];
  const sweep = useMtfSweep(
    L,
    sweepRequests,
    view === "zoom" ? options : sweepOptions,
    JSON.stringify({
      preferences,
      zoomT: preparedState.zoomT,
      focusT: preparedState.focusT,
      aperture: request.aperture,
    }),
  );
  const assessedSweepSamples = sweep.samples.map((sample, index) => {
    const station = sweepRequests[index];
    const resolved = resolveMtfSpectrum(
      station.request.preparedGeometry,
      preferences.spectrum,
      preferences.wavelengthNm,
    );
    const stationSupport = assessMtfSupport(station.request, {
      ...options,
      spectrum: resolved.spectrum,
      wavelengthNm: preferences.wavelengthNm,
    });
    const limitations = assessMtfDataLimitations(station.request.preparedGeometry, {
      preferredSpectrum: preferences.spectrum,
      wavelengthNm: preferences.wavelengthNm,
      spectrum: resolved.spectrum,
      referenceWavelengthNm: stationSupport.referenceWavelengthNm,
      result: sample.result,
      fieldFractions: options.fieldFractions,
    });
    return {
      ...sample,
      stationFieldReference:
        view === "zoom" &&
        (sample.result?.geometry
          ? sample.result.geometry.basis === "modeled-edge"
          : !(L.source.catalog.imageCircleMm || L.source.catalog.imageFormat || L.imageSurface?.fieldExtentMm)),
      limitations,
      notes: [
        ...new Set([
          ...(!stationSupport.available ? [stationSupport.message] : []),
          ...(sample.result && !sample.result.support.available ? [sample.result.support.message] : []),
          ...(resolved.note ? [resolved.note] : []),
        ]),
      ],
    };
  });
  const warningLimitations = isSweep
    ? assessedSweepSamples.flatMap((sample) =>
        sample.limitations.map((limitation) => ({
          ...limitation,
          text: `${mtfSweepLabel(sample)}: ${limitation.text}`,
        })),
      )
    : dataLimitations;
  const [warningAcknowledged, acknowledgeWarning, dismissedKinds] = useMtfDataWarning(L.source.key, warningLimitations);
  // Remove undisclosed results before passing samples to any display or export consumer.
  const sweepSamples = assessedSweepSamples.map((sample) => {
    const blocked = sample.limitations.some(({ kind, blocking }) => blocking && !dismissedKinds.has(kind));
    return blocked ? { ...sample, blocked, result: null, edge: undefined } : sample;
  });
  const disclosedSweepResult =
    sweepSamples.find((sample) => sample.result?.support.available)?.result ??
    sweepSamples.find((sample) => sample.result)?.result;
  const emptySweepResult: MtfResult | null =
    sweepSamples.length || mainShown
      ? {
          method: preferences.method,
          spectrum: spectrum.spectrum,
          support,
          frequenciesPerMm: [...preferences.frequencies],
          fields: [],
          geometry: null,
          focus: null,
          conjugate: null,
          workingFNumber: null,
          magnification: null,
          axialVignetting: null,
        }
      : null;
  const mainDataBlocked = dataLimitations.some(({ kind, blocking }) => blocking && !dismissedKinds.has(kind));
  const shown =
    view === "zoom"
      ? (disclosedSweepResult ?? emptySweepResult)
      : view === "aperture" && mainDataBlocked
        ? emptySweepResult
        : mainShown;
  const stationFieldReference = assessedSweepSamples.some((sample) => sample.stationFieldReference);
  const displayStale = view === "zoom" ? false : stale;
  const displaySupport = view === "zoom" ? (shown?.support ?? support) : support;
  const displayFields =
    view === "zoom"
      ? typeof preferences.frequencyField === "number"
        ? [preferences.frequencyField]
        : [0, 0.5, 1]
      : sweepOptions.fieldFractions;
  const sweepCaption =
    view === "zoom"
      ? "Published zoom stations at infinity, each at its own wide-open aperture. " +
        (preferences.focus === "best-axial"
          ? "Best axial focus is found independently per station."
          : preferences.focus === "design"
            ? "Design plane uses each station's authored image plane."
            : "Each station uses its authored design plane unless Auto selects best axial focus for an inconsistent plane.") +
        (stationFieldReference
          ? " Fields are fractions of each station's own modeled field; image heights differ between stations."
          : " Fields share the lens's declared reference image height.") +
        " Each station's edge is its outermost available sampled height."
      : holdComparison
        ? "Aperture sweep holds the charted aperture's image plane at every aperture."
        : "Aperture sweep applies the selected image-plane policy independently at each aperture (refocus).";
  const comparison = useMtfComputation(L, comparisonJob, comparisonOptions);
  const comparisonShown = comparisonJob && !comparison.stale && !stale ? comparison.result : null;
  // A result kept from an earlier request says nothing about the label on screen.
  const vignettingOf = (result: MtfResult | null, superseded: boolean) =>
    superseded ? null : (result?.axialVignetting ?? null);
  const comparisonLabel = `${comparisonAperture}${comparisonPlaneLabel(comparisonShown, mainShift)}${axialVignettingNote(vignettingOf(comparisonShown, false))}`;
  const comparisonValues = comparisonShown?.fields.some((field) => field.sagittal.length && field.tangential.length)
    ? comparisonShown
    : null;
  const unconvergedCount = (
    view === "zoom" ? sweepSamples.flatMap((sample) => sample.result?.fields ?? []) : (shown?.fields ?? [])
  ).filter((field) => field.status === "unconverged").length;
  const chartResult = shown && (view === "zoom" || (support.available && !error)) ? shown : null;
  const warningBlocked = !isSweep && !warningAcknowledged && dataLimitations.some(({ blocking }) => blocking);
  const hasSweepResult = sweep.samples.some((sample) => sample.result !== null);
  const dataDisabledReason =
    !chartResult || (isSweep && !hasSweepResult)
      ? "No current MTF result."
      : displayStale
        ? "Values are updating for the current settings."
        : warningBlocked
          ? "Acknowledge the data warning to copy or export values."
          : undefined;
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
        {view === "zoom"
          ? "MTF across published focal lengths at infinity, each wide open."
          : headerLine(
              options,
              support.referenceWavelengthNm,
              fNumber,
              focalLengthMm,
              shown,
              vignettingOf(shown, stale),
            )}
      </p>
      {view !== "zoom" && spectrum.note ? <p style={muted}>{spectrum.note}</p> : null}
      {view !== "zoom" ? (
        <ImagePlaneNote result={shown} t={t} onUseAuto={() => updatePreferences({ focus: "auto" })} />
      ) : null}
      <MtfControls
        t={t}
        preferences={preferences}
        onChange={updatePreferences}
        slowFieldSteps={spectrum.spectrum !== "reference" && spectrum.spectrum !== "single"}
        comparisonFNumbers={comparisonFNumbers}
        comparisonFNumber={comparisonFNumber}
        result={shown}
        isZoom={L.isZoom}
      />
      {isSweep ? (
        sweep.error ? (
          <p role="alert">{`${view === "zoom" ? "Zoom" : "Aperture"} sweep: ${sweep.error}`}</p>
        ) : sweep.running ? (
          <p
            role="status"
            style={muted}
          >{`Calculating ${mtfSweepLabel(sweep.samples[sweep.index])}, ${sweep.index + 1} of ${sweep.samples.length}…`}</p>
        ) : view === "aperture" && !sweepReady && support.available && running && !error ? (
          <p role="status" style={muted}>
            Aperture sweep: waiting for the charted aperture's fields and image plane…
          </p>
        ) : null
      ) : null}
      {comparisonEnabled ? (
        comparisonJob && comparison.error ? (
          <p role="alert">{`${comparisonAperture} comparison: ${comparison.error}`}</p>
        ) : comparisonShown && !comparisonShown.support.available ? (
          <p role="status" style={muted}>{`${comparisonAperture} comparison: ${comparisonShown.support.message}`}</p>
        ) : comparison.running || !comparisonJob ? (
          <p role="status" style={muted}>
            {comparisonJob
              ? `Calculating ${comparisonAperture} comparison…`
              : `${comparisonAperture} comparison: waiting for the wide-open image plane…`}
          </p>
        ) : null
      ) : null}
      {view !== "zoom" && !support.available ? (
        <AnalysisEmptyState t={t}>
          <span role="status">{support.message}</span>
        </AnalysisEmptyState>
      ) : view !== "zoom" && error ? (
        <p role="alert">{error}</p>
      ) : !shown ? (
        <p role="status" style={muted}>
          Calculating MTF in the background…
        </p>
      ) : (
        <>
          {view !== "zoom" && running ? (
            <p role="status" style={muted}>
              {stale ? "Updating…" : `Calculating… ${progressText(shown)}`}
            </p>
          ) : null}
          {!displayStale ? (
            <div role="note" aria-label="MTF numerical limits" style={{ margin: "8px 0", color: t.value }}>
              <p>
                {textRun(
                  "Normal view shows converged fields within their stable frequency band.",
                  unconvergedCount > 0
                    ? ` ${view === "zoom" ? "Sweep" : "Main result"}: ${unconvergedCount} unconverged fields.`
                    : "",
                  comparisonShown?.fields.some((field) => field.status === "unconverged")
                    ? ` ${comparisonAperture} comparison: ${comparisonShown.fields.filter((field) => field.status === "unconverged").length} unconverged fields.`
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
          {displayStale ? (
            <p role="status">Previous settings are shown while the current calculation updates.</p>
          ) : null}
        </>
      )}
      <MtfDataWarning
        limitations={isSweep || chartResult ? warningLimitations : []}
        withholdChart={!isSweep}
        acknowledged={warningAcknowledged}
        onAcknowledge={acknowledgeWarning}
        t={t}
        actions={
          <MtfActions
            result={chartResult}
            sweepSamples={sweepSamples}
            sweepFields={displayFields}
            frequencies={preferences.frequencies}
            t={t}
            diagnostic={diagnostic}
            stale={displayStale}
            disabledReason={dataDisabledReason}
            comparison={preferences.advanced ? comparisonShown : comparisonValues}
            comparisonFNumber={comparisonFNumber}
            diffractionLimit={preferences.diffractionLimit && preferences.method === "diffraction"}
            getMtfLink={() => buildMtfLink(window.location.href, preferences)}
            chartRef={chartRef}
            view={view}
            frequencyField={preferences.frequencyField}
            exportComparison={comparisonShown}
            getExportContext={
              chartResult
                ? () =>
                    buildMtfExportContext({
                      lens: L,
                      result: chartResult,
                      preferences,
                      sweepSamples: isSweep ? sweepSamples : undefined,
                      sweepCaption: isSweep ? sweepCaption : undefined,
                      focalLengthMm: focalLengthMm ?? (request.dynamicEFL || L.EFL),
                      fNumber,
                      zoomT: preparedState.zoomT,
                      focusT: view === "zoom" ? 0 : preparedState.focusT,
                      spectrumNote: spectrum.note,
                      link: buildMtfLink(window.location.href, preferences),
                      date: new Date(),
                      partial: isSweep
                        ? (view === "aperture" && !sweepReady) ||
                          sweep.running ||
                          sweepSamples.some((sample) => sample.blocked || sample.error)
                        : running || (comparisonEnabled && (comparison.running || !comparisonJob)),
                      diagnostic,
                      comparison: comparisonShown,
                      comparisonFNumber,
                      comparisonRequested: comparisonEnabled,
                    })
                : undefined
            }
          />
        }
        details={
          chartResult ? (
            <>
              {preferences.advanced && view !== "zoom" ? (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                  <FocusSearch
                    result={chartResult}
                    comparison={comparisonShown}
                    comparisonFNumber={comparisonFNumber}
                    mainLabel={fNumber ? `f/${formatFNumber(fNumber)} (main)` : "Main aperture"}
                    t={t}
                  />
                  <ConjugateReadout
                    L={L}
                    request={request}
                    options={options}
                    result={chartResult}
                    comparison={comparisonShown}
                    comparisonFNumber={comparisonFNumber}
                    mainLabel="Main aperture"
                    fNumber={fNumber}
                    frequencies={preferences.frequencies}
                    stale={displayStale}
                    t={t}
                  />
                </div>
              ) : null}
              <MtfFieldSummary
                result={chartResult}
                sweepSamples={sweepSamples}
                sweepFields={displayFields}
                sweepCaption={sweepCaption}
                frequencies={preferences.frequencies}
                t={t}
                diagnostic={diagnostic}
                comparison={preferences.advanced ? comparisonShown : comparisonValues}
                comparisonLabel={comparisonLabel}
                comparisonFNumber={comparisonFNumber}
                mainLabel={fNumber ? `f/${formatFNumber(fNumber)} (main)` : "Main aperture"}
                diffractionLimit={preferences.diffractionLimit && preferences.method === "diffraction"}
                pixelPitchUm={view === "frequency" ? preferences.pixelPitchUm : null}
                advanced={preferences.advanced}
                view={view}
              />
              {view === "zoom" && preferences.advanced ? (
                <ul aria-label="Zoom station limitations" style={{ color: t.muted, paddingLeft: 16 }}>
                  {sweepSamples.map((sample) => (
                    <li
                      key={sample.zoomT}
                    >{`${sample.focalLengthMm} mm · f/${formatFNumber(sample.fNumber)}: ${[...sample.limitations.map(({ text }) => text), ...sample.notes, ...(sample.error ? [sample.error] : [])].join("; ") || (sample.result ? "No additional data limitations." : "Pending.")}`}</li>
                  ))}
                </ul>
              ) : null}
            </>
          ) : null
        }
      >
        {chartResult ? (
          <MtfChart
            exportRef={chartRef}
            result={chartResult}
            sweepSamples={sweepSamples}
            sweepFields={displayFields}
            sweepCaption={sweepCaption}
            view={view}
            currentZoomT={preparedState.zoomT}
            frequencies={preferences.frequencies}
            t={t}
            stale={displayStale}
            comparison={comparisonShown}
            comparisonLabel={comparisonLabel}
            diagnostic={diagnostic}
            advanced={preferences.advanced}
            diffractionLimit={preferences.diffractionLimit && preferences.method === "diffraction"}
            frequencyField={preferences.frequencyField}
            pixelPitchUm={preferences.pixelPitchUm}
          />
        ) : null}
      </MtfDataWarning>
      <p style={muted}>{MTF_EXPORT_DISCLAIMER}</p>
      <details style={{ color: t.muted, fontSize: 11 }}>
        <summary style={{ cursor: "pointer" }}>Model assumptions</summary>
        <p>{displaySupport.message}</p>
        {displaySupport.conjugate ? (
          <p>
            {textRun(
              "Finite object ",
              displaySupport.conjugate.objectDistanceMm.toFixed(1),
              " mm from",
              " ",
              displaySupport.conjugate.distanceReference === "image-plane" ? "the image plane" : "the first surface",
              ". Source:",
              " ",
              displaySupport.conjugate.source,
            )}
          </p>
        ) : null}
        <ul>
          {displaySupport.limitations.map((text) => (
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
  comparisonFNumber,
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
    ...(comparison
      ? [{ result: comparison, label: `f/${comparisonFNumber} comparison`, marked: comparisonFNumber }]
      : []),
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
function FocusSearch({ result, comparison, mainLabel, comparisonFNumber, t }: FocusSearchProps) {
  const sources = [
    { result, label: mainLabel },
    ...(comparison ? [{ result: comparison, label: `f/${comparisonFNumber}` }] : []),
  ];
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
