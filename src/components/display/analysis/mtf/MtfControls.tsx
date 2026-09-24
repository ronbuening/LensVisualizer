/** MTF model, spectrum, focus, sampling, view, field-step and frequency controls. */
import type { CSSProperties, ReactNode } from "react";
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
const FOCUS: ReadonlyArray<[MtfFocusMode, string]> = [
  ["design", "Design image plane"],
  ["best-axial", "Best axial focus"],
];
const SAMPLING: ReadonlyArray<[MtfGridCap, string]> = [
  [128, "Standard"],
  [256, "Refine"],
];

export default function MtfControls({
  t,
  preferences,
  onChange,
  slowFieldSteps,
  compareF8Available,
}: MtfControlsProps) {
  const selectStyle: CSSProperties = { ...selector(t, false), fontSize: 11, padding: "5px 26px 5px 8px" };
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
          label="MTF method"
          style={selectStyle}
          value={preferences.method}
          options={METHODS}
          onChange={(method) => onChange({ method })}
        />
        <Select
          label="MTF spectrum"
          style={selectStyle}
          value={preferences.spectrum}
          options={SPECTRA}
          onChange={(spectrum) => onChange({ spectrum })}
        />
        <Select
          label="MTF image plane"
          style={selectStyle}
          value={preferences.focus}
          options={FOCUS}
          onChange={(focus) => onChange({ focus })}
        />
        <Select
          label="MTF sampling"
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

function Select<T extends string | number>({
  label,
  style,
  value,
  options,
  onChange,
}: {
  label: string;
  style: CSSProperties;
  value: T;
  options: ReadonlyArray<[T, string]>;
  onChange: (value: T) => void;
}) {
  return (
    <select
      aria-label={label}
      style={style}
      value={value}
      onChange={(event) => onChange(options.find(([v]) => String(v) === event.target.value)![0])}
    >
      {options.map(([v, text]) => (
        <option key={v} value={v}>
          {text}
        </option>
      ))}
    </select>
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
