/** MTF model, spectrum, focus, sampling, view, field-step and frequency controls. */
import { useEffect, useId, useRef, useState, type CSSProperties, type ReactNode } from "react";
import type { MtfResult, MtfFocusMode, MtfGridCap, MtfMethod, MtfSpectrum } from "../../../../types/mtf.js";
import { MTF_MIN_WAVELENGTH_NM, MTF_MAX_WAVELENGTH_NM } from "../../../../types/mtf.js";
import type { Theme } from "../../../../types/theme.js";
import {
  MTF_CHART_FREQUENCIES,
  MTF_FIELD_STEPS,
  MTF_PIXEL_PITCHES,
  type MtfFrequencyField,
  type MtfPixelPitch,
  type MtfChartFrequency,
  type MtfChartView,
  type MtfPreferences,
  type MtfComparisonFNumber,
} from "../../../../utils/state/mtfPreferences.js";
import { resolveMtfFrequencyField } from "./mtfPresentation.js";
import { selector, toggleBtn, toggleGroup } from "../../../../utils/style/styles.js";
import HelpTooltipButton from "../../../controls/HelpTooltipButton.js";
import PortalTooltip from "../../../controls/PortalTooltip.js";
import useMediaQuery from "../../../../utils/useMediaQuery.js";

interface MtfControlsProps {
  t: Theme;
  preferences: MtfPreferences;
  onChange: (patch: Partial<MtfPreferences>) => void;
  /** Photopic sweeps at 1 % and 2 % steps trace nine wavelengths for up to 101 fields. */
  slowFieldSteps: boolean;
  /** Attainable full stops strictly slower than the charted aperture. */
  comparisonFNumbers: readonly MtfComparisonFNumber[];
  comparisonFNumber: MtfComparisonFNumber;
  result?: MtfResult | null;
}

const METHODS: ReadonlyArray<[MtfMethod, string]> = [
  ["diffraction", "Diffraction-corrected"],
  ["geometric", "Geometric"],
];
const SPECTRA: ReadonlyArray<[MtfSpectrum, string]> = [
  ["photopic", "Photopic (V(λ))"],
  ["cdf", "C/d/F (equal weights)"],
  ["reference", "Reference line"],
  ["single", "Single wavelength"],
];
/** Auto keeps the design plane unless the lens data's plane contradicts its own prescription. */
const FOCUS: ReadonlyArray<[MtfFocusMode, string]> = [
  ["best-axial", "Best axial focus"],
  ["auto", "Design plane (auto)"],
  ["design", "Design plane (always)"],
];
const SAMPLING: ReadonlyArray<[MtfGridCap, string]> = [
  [256, "Standard"],
  [128, "Faster"],
];

/* Hover/focus explanations, one line per option in menu order. */
const METHOD_HELP = [
  "Diffraction-corrected: ray-traced MTF including the diffraction of the lens's actual aperture. Compare with charts that include diffraction, such as Sigma's Diffraction MTF and Zeiss.",
  "Geometric: rays only. Ignores diffraction, so it overstates contrast for sharp or stopped-down lenses. Compare with design charts that omit diffraction, as Nikon's, Sony's and Tamron's appear to.",
].join("\n");
const SPECTRUM_HELP = [
  "Photopic: nine Gauss-Legendre samples integrate the eye's sensitivity V(λ) over 470-650 nm with equal energy per wavelength.",
  "C/d/F: the red, yellow and blue reference lines, weighted equally; gives color error more weight.",
  "Reference line: one wavelength, so color aberrations drop out.",
  "Single wavelength (Advanced): one chosen line from 435.8 to 656.3 nm; other than the native reference, it needs glass dispersion data.",
  "Lenses without enough glass dispersion data use the reference line.",
].join("\n");
const FOCUS_HELP = [
  "Best axial focus: moves the image plane to where the on-axis image is sharpest, as focusing a real lens does.",
  "Design plane (auto): keeps the source's image plane unless it contradicts the lens's own prescription.",
  "Design plane (always): the source's image plane as authored, even when it is out of focus.",
].join("\n");
const SAMPLING_HELP = [
  "Pupil samples are positions on the real aperture stop, evenly spaced, as in OpticStudio with ray aiming and in CODE V.",
  "Standard: grids of up to 256 samples across the stop. Most fields converge well before that; vignetted beams near the edge of fast lenses can need it.",
  "Faster: up to 128. Fields that have not converged there are shown and labelled unconverged.",
].join("\n");
/** Wider than the default tooltip so each option fits in a few lines. */
const HELP_WIDTH = 300;
/** Devices whose primary pointer cannot hover (touch) get a tap-able help button beside each dropdown. */
const HOVERLESS_QUERY = "(hover: none)";
/** Matches the analysis dock: hovering opens after a short pause, keyboard focus opens at once. */
const HELP_HOVER_DELAY_MS = 300;

export default function MtfControls({
  t,
  preferences,
  onChange,
  slowFieldSteps,
  comparisonFNumbers,
  comparisonFNumber,
  result = null,
}: MtfControlsProps) {
  const view = preferences.view === "aperture" && !preferences.advanced ? "field" : preferences.view;
  const comparisonAvailable = comparisonFNumbers.includes(comparisonFNumber);
  const views: ReadonlyArray<[MtfChartView, string]> = [
    ["field", "Image height"],
    ["frequency", "Frequency"],
    ...(preferences.advanced ? [["aperture", "Aperture"] as [MtfChartView, string]] : []),
  ];
  const selectStyle: CSSProperties = { ...selector(t, false), fontSize: 11, padding: "5px 26px 5px 8px" };
  const touchHelp = useMediaQuery(HOVERLESS_QUERY, { ssrDefault: false });
  const toggleFrequency = (frequency: MtfChartFrequency) => {
    const selected = preferences.frequencies.includes(frequency)
      ? preferences.frequencies.filter((f) => f !== frequency)
      : [...preferences.frequencies, frequency];
    if (selected.length) onChange({ frequencies: MTF_CHART_FREQUENCIES.filter((f) => selected.includes(f)) });
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        <Select
          t={t}
          label="MTF method"
          help={METHOD_HELP}
          touchHelp={touchHelp}
          style={selectStyle}
          value={preferences.method}
          options={METHODS}
          onChange={(method) => onChange({ method })}
        />
        <Select
          t={t}
          label="MTF spectrum"
          help={SPECTRUM_HELP}
          touchHelp={touchHelp}
          style={selectStyle}
          value={preferences.spectrum}
          options={SPECTRA.filter(
            ([spectrum]) => spectrum !== "single" || preferences.advanced || preferences.spectrum === "single",
          )}
          onChange={(spectrum) => onChange({ spectrum })}
        />
        <Select
          t={t}
          label="MTF image plane"
          help={FOCUS_HELP}
          touchHelp={touchHelp}
          style={selectStyle}
          value={preferences.focus}
          options={FOCUS}
          onChange={(focus) => onChange({ focus })}
        />
        <Select
          t={t}
          label="MTF sampling"
          help={SAMPLING_HELP}
          touchHelp={touchHelp}
          style={selectStyle}
          value={preferences.maxGridSize}
          options={SAMPLING}
          onChange={(maxGridSize) => onChange({ maxGridSize: Number(maxGridSize) as MtfGridCap })}
        />
      </div>
      {preferences.advanced && preferences.spectrum === "single" ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
          <WavelengthInput
            value={preferences.wavelengthNm}
            style={selectStyle}
            onChange={(wavelengthNm) => onChange({ wavelengthNm })}
          />
          <span>nm</span>
          {(
            [
              ["g 436", 435.8343],
              ["F 486", 486.1327],
              ["e 546", 546.074],
              ["d 588", 587.5618],
              ["C 656", 656.2725],
            ] as const
          ).map(([label, wavelengthNm]) => (
            <button
              key={label}
              type="button"
              style={toggleBtn(t, preferences.wavelengthNm === wavelengthNm, { padding: "5px 7px" })}
              title={`${wavelengthNm} nm`}
              onClick={() => onChange({ wavelengthNm })}
            >
              {label}
            </button>
          ))}
        </div>
      ) : null}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
        <ToggleGroup label="MTF chart" t={t}>
          {views.map(([choice, text], i) => (
            <Toggle
              key={choice}
              t={t}
              active={view === choice}
              last={i === 1 || i === views.length - 1}
              separator={choice === "aperture"}
              onClick={() => onChange({ view: choice })}
            >
              {text}
            </Toggle>
          ))}
        </ToggleGroup>
        <ToggleGroup label="Field step" t={t}>
          {MTF_FIELD_STEPS.map((step, i) => (
            <Toggle
              key={step}
              t={t}
              active={preferences.fieldStepPercent === step}
              last={i === MTF_FIELD_STEPS.length - 1}
              title={slowFieldSteps && step <= 2 ? "Slow: traces nine wavelengths at every field" : undefined}
              onClick={() => onChange({ fieldStepPercent: step })}
            >
              {step} %
            </Toggle>
          ))}
        </ToggleGroup>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <ToggleGroup label="Diffraction reference" t={t}>
            <Toggle
              t={t}
              active={preferences.diffractionLimit && preferences.method === "diffraction"}
              disabled={preferences.method === "geometric"}
              title={preferences.method === "geometric" ? "Requires diffraction method." : undefined}
              last
              onClick={() => onChange({ diffractionLimit: !preferences.diffractionLimit })}
            >
              Diffraction limit
            </Toggle>
          </ToggleGroup>
          {preferences.method === "geometric" ? (
            <span style={{ color: t.muted }}>Requires diffraction method.</span>
          ) : null}
        </span>
        {view !== "field" ? (
          <>
            <Select<MtfFrequencyField>
              t={t}
              label="Fields"
              help="Overview shows the center, 50 % and outermost available field. Select a computed field by its fraction of the reference image height and its image height in mm."
              touchHelp={touchHelp}
              style={selectStyle}
              value={resolveMtfFrequencyField(result, preferences.frequencyField)}
              options={[
                ["overview", "Fields: Overview"],
                ...[...(result?.fields ?? [])]
                  .sort((a, b) => a.fieldFraction - b.fieldFraction)
                  .map((field): [number, string] => [
                    field.fieldFraction,
                    `Fields: ${(field.fieldFraction * 100).toFixed(0)} % · ${(field.imageHeightMm ?? field.targetImageHeightMm)?.toFixed(2) ?? "—"} mm`,
                  ]),
              ]}
              onChange={(frequencyField) => onChange({ frequencyField })}
            />
            {view === "frequency" ? (
              <Select<MtfPixelPitch | "none">
                t={t}
                label="Pixel pitch"
                help="Nyquist is 500 divided by pixel pitch in µm, in lp/mm. It is the sampling limit of a pixel grid, not a prediction of camera or sensor MTF."
                touchHelp={touchHelp}
                style={selectStyle}
                value={preferences.pixelPitchUm ?? "none"}
                options={[
                  ["none", "Pixel pitch: none"],
                  ...MTF_PIXEL_PITCHES.map((pitch): [MtfPixelPitch, string] => [pitch, `Pixel pitch: ${pitch} µm`]),
                ]}
                onChange={(pitch) => onChange({ pixelPitchUm: pitch === "none" ? null : pitch })}
              />
            ) : null}
          </>
        ) : null}
        {view !== "aperture" ? (
          <ToggleGroup label="Aperture comparison" t={t}>
            <Toggle
              t={t}
              active={comparisonAvailable && preferences.compareF8}
              last
              disabled={!comparisonAvailable}
              title={
                comparisonAvailable
                  ? `Overlay the lens stopped down to f/${comparisonFNumber} (thin lines)`
                  : `f/${comparisonFNumber} comparison unavailable: comparisons must be slower than the charted aperture and within the lens's aperture range at this zoom position.`
              }
              onClick={() => onChange({ compareF8: !preferences.compareF8 })}
            >
              {`Compare f/${comparisonFNumber}`}
            </Toggle>
          </ToggleGroup>
        ) : null}
        {view !== "aperture" && comparisonFNumbers.length > 0 && preferences.advanced ? (
          <Select<MtfComparisonFNumber>
            t={t}
            label="Comparison aperture"
            help="Choose a full stop slower than the charted aperture, within the lens's aperture range at this zoom position."
            touchHelp={touchHelp}
            style={selectStyle}
            value={comparisonAvailable ? comparisonFNumber : ""}
            placeholder={comparisonAvailable ? undefined : `f/${comparisonFNumber} unavailable`}
            options={comparisonFNumbers.map((stop) => [stop, `f/${stop}`])}
            onChange={(comparisonFNumber) => onChange({ comparisonFNumber })}
          />
        ) : null}
        {view !== "aperture" && comparisonAvailable && preferences.compareF8 ? (
          <Select
            t={t}
            label={`f/${comparisonFNumber} comparison image plane`}
            help={`Refocus at f/${comparisonFNumber}: use the selected image-plane policy independently at f/${comparisonFNumber}. Hold the wide-open plane: use exactly the main curve's image plane at f/${comparisonFNumber}.`}
            touchHelp={touchHelp}
            style={selectStyle}
            value={preferences.comparisonFocus}
            options={[
              ["refocus", `Refocus at f/${comparisonFNumber}`],
              ["hold", "Hold the wide-open plane"],
            ]}
            onChange={(comparisonFocus) => onChange({ comparisonFocus })}
          />
        ) : null}
        {view === "aperture" ? (
          <Select
            t={t}
            label="Aperture sweep image plane"
            help="Apply the selected image-plane policy at each aperture, or hold exactly the charted aperture's plane throughout the sweep."
            touchHelp={touchHelp}
            style={selectStyle}
            value={preferences.comparisonFocus}
            options={[
              ["refocus", "Refocus at each aperture"],
              ["hold", "Hold the charted aperture's plane"],
            ]}
            onChange={(comparisonFocus) => onChange({ comparisonFocus })}
          />
        ) : null}
        {view !== "frequency" ? (
          <ToggleGroup label="Chart frequencies (lp/mm)" t={t}>
            {MTF_CHART_FREQUENCIES.map((frequency, i) => (
              <Toggle
                key={frequency}
                t={t}
                active={preferences.frequencies.includes(frequency)}
                last={i === MTF_CHART_FREQUENCIES.length - 1}
                onClick={() => toggleFrequency(frequency)}
              >
                {frequency}
              </Toggle>
            ))}
          </ToggleGroup>
        ) : null}
        <ToggleGroup label="MTF details" t={t}>
          <Toggle
            t={t}
            active={preferences.advanced}
            last
            title="Per-field sampling details and the focus search"
            onClick={() => onChange({ advanced: !preferences.advanced })}
          >
            Advanced
          </Toggle>
        </ToggleGroup>
      </div>
    </div>
  );
}

/** Keep partial numeric edits local; only valid physical wavelengths start a computation. */
function WavelengthInput({
  value,
  style,
  onChange,
}: {
  value: number;
  style: CSSProperties;
  onChange: (value: number) => void;
}) {
  const [draft, setDraft] = useState({ value, text: String(value) });
  if (draft.value !== value) setDraft({ value, text: String(value) });
  return (
    <input
      type="number"
      aria-label="MTF wavelength"
      min={MTF_MIN_WAVELENGTH_NM}
      max={MTF_MAX_WAVELENGTH_NM}
      step={1}
      value={draft.text}
      style={{ ...style, width: 88, padding: "5px 6px" }}
      onChange={(event) => {
        const text = event.target.value;
        const wavelength = event.target.valueAsNumber;
        setDraft({ value, text });
        if (Number.isFinite(wavelength) && wavelength >= MTF_MIN_WAVELENGTH_NM && wavelength <= MTF_MAX_WAVELENGTH_NM)
          onChange(wavelength);
      }}
      onBlur={() => setDraft({ value, text: String(value) })}
    />
  );
}

/**
 * Labeled select whose `help` text explains its options in a mouse-hover or keyboard-focus tooltip, and
 * through a help button beside it on touch devices, where a tap opens the native menu instead.
 */
function Select<T extends string | number>({
  t,
  label,
  help,
  touchHelp,
  style,
  value,
  options,
  placeholder,
  onChange,
}: {
  t: Theme;
  label: string;
  help: string;
  touchHelp: boolean;
  style: CSSProperties;
  value: T | "";
  options: ReadonlyArray<[T, string]>;
  /** An unavailable stored choice stays explicit instead of displaying the first option. */
  placeholder?: string;
  onChange: (value: T) => void;
}) {
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const hoverTimerRef = useRef<number | null>(null);
  /* A pointer press focuses the select and opens its menu; only keyboard focus opens the tooltip at once. */
  const pointerFocusRef = useRef(false);
  const helpId = useId();
  const [open, setOpen] = useState(false);
  const clearHoverTimer = () => {
    if (hoverTimerRef.current === null) return;
    window.clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = null;
  };
  const hide = () => {
    clearHoverTimer();
    setOpen(false);
  };
  useEffect(
    () => () => {
      if (hoverTimerRef.current !== null) window.clearTimeout(hoverTimerRef.current);
    },
    [],
  );
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
      <select
        ref={selectRef}
        aria-label={label}
        aria-describedby={helpId}
        style={style}
        value={value}
        onChange={(event) => onChange(options.find(([v]) => String(v) === event.target.value)![0])}
        onPointerDown={() => {
          pointerFocusRef.current = true;
          hide();
        }}
        /* Only a mouse hovers: a tap's compatibility mouseenter would open the tooltip over the native menu. */
        onPointerEnter={(event) => {
          if (event.pointerType !== "mouse") return;
          clearHoverTimer();
          hoverTimerRef.current = window.setTimeout(() => setOpen(true), HELP_HOVER_DELAY_MS);
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === "mouse") hide();
        }}
        onFocus={() => {
          if (!pointerFocusRef.current) setOpen(true);
          pointerFocusRef.current = false;
        }}
        onBlur={hide}
        onKeyDown={(event) => {
          if (event.key === "Escape") hide();
        }}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {options.map(([v, text]) => (
          <option key={v} value={v}>
            {text}
          </option>
        ))}
      </select>
      {touchHelp ? (
        <HelpTooltipButton theme={t} label={`About the ${label} options`} text={help} width={HELP_WIDTH} />
      ) : null}
      <span id={helpId} hidden>
        {help}
      </span>
      <PortalTooltip anchorRef={selectRef} open={open} text={help} theme={t} align="center" width={HELP_WIDTH} />
    </span>
  );
}

function ToggleGroup({ label, t, children }: { label: string; t: Theme; children: ReactNode }) {
  return (
    <div role="group" aria-label={label} style={toggleGroup(t)}>
      {children}
    </div>
  );
}

function Toggle({
  t,
  active,
  last,
  title,
  disabled = false,
  separator = false,
  onClick,
  children,
}: {
  t: Theme;
  active: boolean;
  last: boolean;
  title?: string;
  disabled?: boolean;
  separator?: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      title={title}
      disabled={disabled}
      onClick={onClick}
      style={{
        ...toggleBtn(t, active, { hasRightBorder: !last, padding: "5px 9px" }),
        ...(separator ? { borderLeft: `1px solid ${t.toggleBorder}` } : {}),
        ...(disabled ? { opacity: 0.42, cursor: "not-allowed" } : {}),
      }}
    >
      {children}
    </button>
  );
}
