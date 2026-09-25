/** MTF model, spectrum, focus, sampling, view, field-step and frequency controls. */
import { useEffect, useId, useRef, useState, type CSSProperties, type ReactNode } from "react";
import type { MtfFocusMode, MtfGridCap, MtfMethod, MtfSpectrum } from "../../../../types/mtf.js";
import type { Theme } from "../../../../types/theme.js";
import {
  MTF_CHART_FREQUENCIES,
  MTF_FIELD_STEPS,
  type MtfChartFrequency,
  type MtfChartView,
  type MtfPreferences,
} from "../../../../utils/state/mtfPreferences.js";
import { selector, toggleBtn, toggleGroup } from "../../../../utils/style/styles.js";
import HelpTooltipButton from "../../../controls/HelpTooltipButton.js";
import PortalTooltip from "../../../controls/PortalTooltip.js";
import useMediaQuery from "../../../../utils/useMediaQuery.js";

interface MtfControlsProps {
  t: Theme;
  preferences: MtfPreferences;
  onChange: (patch: Partial<MtfPreferences>) => void;
  /** Photopic sweeps at 1 % and 2 % steps trace five wavelengths for up to 101 fields. */
  slowFieldSteps: boolean;
  /** Offer the f/8 overlay: the working aperture is faster than f/8 and the lens reaches it. */
  compareF8Available: boolean;
}

const METHODS: ReadonlyArray<[MtfMethod, string]> = [
  ["geometric-dl", "Diffraction-corrected"],
  ["geometric", "Geometric"],
  ["diffraction", "Scalar diffraction"],
];
const SPECTRA: ReadonlyArray<[MtfSpectrum, string]> = [
  ["photopic", "Photopic (V(λ))"],
  ["cdf", "C/d/F (equal weights)"],
  ["reference", "Reference line"],
];
/** Auto keeps the design plane unless the lens data's plane contradicts its own prescription. */
const FOCUS: ReadonlyArray<[MtfFocusMode, string]> = [
  ["best-axial", "Best axial focus"],
  ["auto", "Design plane (auto)"],
  ["design", "Design plane (always)"],
];
const SAMPLING: ReadonlyArray<[MtfGridCap, string]> = [
  [128, "Standard"],
  [256, "Refine"],
];

/* Hover/focus explanations, one line per option in menu order. */
const METHOD_HELP = [
  "Diffraction-corrected: ray-traced (geometric) MTF multiplied by the aperture's diffraction limit. The closest match to manufacturer charts.",
  "Geometric: rays only. Ignores diffraction, so it overstates contrast for sharp or stopped-down lenses.",
  "Scalar diffraction: computed from the traced wavefront. The reference for well-corrected lenses, but slower, and unavailable where blur or ray angles exceed its validated range.",
].join("\n");
const SPECTRUM_HELP = [
  "Photopic: five wavelengths from 470 to 650 nm, weighted by the eye's sensitivity V(λ), like white-light charts.",
  "C/d/F: the red, yellow and blue reference lines, weighted equally; gives color error more weight.",
  "Reference line: one wavelength, so color aberrations drop out.",
  "Lenses without enough glass dispersion data use the reference line.",
].join("\n");
const FOCUS_HELP = [
  "Best axial focus: moves the image plane to where the on-axis image is sharpest, as focusing a real lens does.",
  "Design plane (auto): keeps the source's image plane unless it contradicts the lens's own prescription.",
  "Design plane (always): the source's image plane as authored, even when it is out of focus.",
].join("\n");
const SAMPLING_HELP = [
  "Standard: pupil grids of up to 128 samples across, enough for most lenses.",
  "Refine: up to 256, for fields that converge slowly, such as thin beams near the edge. Slower.",
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
  compareF8Available,
}: MtfControlsProps) {
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
          options={SPECTRA}
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
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
        <ToggleGroup label="MTF chart" t={t}>
          {(
            [
              ["field", "Image height"],
              ["frequency", "Frequency"],
            ] as ReadonlyArray<[MtfChartView, string]>
          ).map(([view, text], i) => (
            <Toggle
              key={view}
              t={t}
              active={preferences.view === view}
              last={i === 1}
              onClick={() => onChange({ view })}
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
              title={slowFieldSteps && step <= 2 ? "Slow: traces five wavelengths at every field" : undefined}
              onClick={() => onChange({ fieldStepPercent: step })}
            >
              {step} %
            </Toggle>
          ))}
        </ToggleGroup>
        {compareF8Available ? (
          <ToggleGroup label="Aperture comparison" t={t}>
            <Toggle
              t={t}
              active={preferences.compareF8}
              last
              title="Overlay the lens stopped down to f/8 (thin lines)"
              onClick={() => onChange({ compareF8: !preferences.compareF8 })}
            >
              Compare f/8
            </Toggle>
          </ToggleGroup>
        ) : null}
        {preferences.view === "field" ? (
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
      </div>
    </div>
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
  onChange,
}: {
  t: Theme;
  label: string;
  help: string;
  touchHelp: boolean;
  style: CSSProperties;
  value: T;
  options: ReadonlyArray<[T, string]>;
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
  onClick,
  children,
}: {
  t: Theme;
  active: boolean;
  last: boolean;
  title?: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      title={title}
      onClick={onClick}
      style={toggleBtn(t, active, { hasRightBorder: !last, padding: "5px 9px" })}
    >
      {children}
    </button>
  );
}
