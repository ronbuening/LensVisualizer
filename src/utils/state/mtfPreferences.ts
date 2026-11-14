/**
 * Persistent MTF analysis options, shared by every MTF tab in this browser.
 *
 * Options normally live in localStorage. Explicit share links override them for a visit through
 * useSharedMtfPreferences without saving the link's values. This store lets comparison panes update together.
 */
import type { MtfFocusMode, MtfGridCap, MtfMethod, MtfSpectrum } from "../../types/mtf.js";

import { MTF_MIN_WAVELENGTH_NM, MTF_MAX_WAVELENGTH_NM } from "../../types/mtf.js";

export type MtfChartView = "field" | "frequency";
export type MtfFrequencyField = "overview" | number;
export const MTF_PIXEL_PITCHES = [3, 4, 5, 6, 8] as const;
export type MtfPixelPitch = (typeof MTF_PIXEL_PITCHES)[number];

/** Full stops offered for the comparison, subject to the charted lens's aperture range. */
export const MTF_COMPARISON_F_NUMBERS = [1, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22, 32] as const;
export type MtfComparisonFNumber = (typeof MTF_COMPARISON_F_NUMBERS)[number];

/** Field spacing choices, in percent of the reference image height. */
export const MTF_FIELD_STEPS = [10, 5, 2, 1] as const;
export type MtfFieldStepPercent = (typeof MTF_FIELD_STEPS)[number];

/** Frequency chips in fixed color-slot order. */
export const MTF_CHART_FREQUENCIES = [10, 20, 30, 40, 50] as const;
export type MtfChartFrequency = (typeof MTF_CHART_FREQUENCIES)[number];

export interface MtfPreferences {
  method: MtfMethod;
  /** Preferred spectrum; lenses without spectral glass data fall back to the reference wavelength. */
  spectrum: MtfSpectrum;
  /** Single-line wavelength in nm; retained when another spectrum is selected. */
  wavelengthNm: number;
  focus: MtfFocusMode;
  view: MtfChartView;
  fieldStepPercent: MtfFieldStepPercent;
  /** Displayed frequencies, ascending; never empty. */
  frequencies: readonly MtfChartFrequency[];
  maxGridSize: MtfGridCap;
  /** Enable the stopped-down overlay when a slower full stop is available. */
  compareF8: boolean;
  /** Preferred comparison aperture; unavailable choices fall back to the next slower full stop. */
  comparisonFNumber: MtfComparisonFNumber;
  /** Refocus the comparison independently, or keep the main result's image plane. */
  comparisonFocus: "refocus" | "hold";
  /** Reference response of the same traced pupil without aberration. */
  diffractionLimit: boolean;
  /** Fraction of the reference image height, or the center/half-height/edge overview. */
  frequencyField: MtfFrequencyField;
  /** Pixel-grid sampling reference in µm; null hides the marker. */
  pixelPitchUm: MtfPixelPitch | null;
  /** Show per-field numerical sampling details and the focus search. */
  advanced: boolean;
}

export const MTF_PREFERENCES_KEY = "lensvis:mtf:options";

export const DEFAULT_MTF_PREFERENCES: MtfPreferences = Object.freeze({
  method: "diffraction",
  spectrum: "photopic",
  wavelengthNm: 546.074,
  focus: "best-axial",
  view: "field",
  fieldStepPercent: 10,
  frequencies: Object.freeze([10, 30] as const),
  maxGridSize: 256,
  compareF8: false,
  comparisonFNumber: 8,
  comparisonFocus: "refocus",
  diffractionLimit: false,
  frequencyField: "overview",
  pixelPitchUm: null,
  advanced: false,
});

/**
 * Stored with every save since 256 cells became the standard grid cap. Options saved before it carry 128 as the old
 * standard, never as a choice, so they load the new default.
 */
const GRID_CAP_REVISION = 2;

const oneOf =
  <T extends string | number>(values: readonly T[]) =>
  (value: unknown): value is T =>
    values.includes(value as T);
const isMethod = oneOf<MtfMethod>(["geometric", "diffraction"]);
/** Method names stored by earlier versions: the diffraction-corrected product became the diffraction estimate. */
const RETIRED_METHODS: ReadonlyMap<unknown, MtfMethod> = new Map([["geometric-dl", "diffraction"]]);
const isSpectrum = oneOf<MtfSpectrum>(["reference", "cdf", "photopic", "single"]);
const isFocus = oneOf<MtfFocusMode>(["auto", "design", "best-axial"]);
const isView = oneOf<MtfChartView>(["field", "frequency"]);
const isFieldStep = oneOf<MtfFieldStepPercent>(MTF_FIELD_STEPS);
const isFrequency = oneOf<MtfChartFrequency>(MTF_CHART_FREQUENCIES);
const isGridCap = oneOf<MtfGridCap>([128, 256]);
const isComparisonFNumber = oneOf<MtfComparisonFNumber>(MTF_COMPARISON_F_NUMBERS);

/**
 * Validate stored options field by field; unknown or corrupt values keep their defaults.
 *
 * @param raw - parsed storage value
 * @returns complete preferences
 */
export function parseMtfPreferences(raw: unknown): MtfPreferences {
  const stored = raw && typeof raw === "object" ? (raw as Record<string, unknown>) : {};
  const frequencies = Array.isArray(stored.frequencies)
    ? MTF_CHART_FREQUENCIES.filter((frequency) => (stored.frequencies as unknown[]).some((v) => v === frequency))
    : [];
  const defaults = DEFAULT_MTF_PREFERENCES;
  return {
    method: isMethod(stored.method) ? stored.method : (RETIRED_METHODS.get(stored.method) ?? defaults.method),
    spectrum: isSpectrum(stored.spectrum) ? stored.spectrum : defaults.spectrum,
    wavelengthNm:
      typeof stored.wavelengthNm === "number" &&
      Number.isFinite(stored.wavelengthNm) &&
      stored.wavelengthNm >= MTF_MIN_WAVELENGTH_NM &&
      stored.wavelengthNm <= MTF_MAX_WAVELENGTH_NM
        ? stored.wavelengthNm
        : defaults.wavelengthNm,
    focus: isFocus(stored.focus) ? stored.focus : defaults.focus,
    view: isView(stored.view) ? stored.view : defaults.view,
    fieldStepPercent: isFieldStep(stored.fieldStepPercent) ? stored.fieldStepPercent : defaults.fieldStepPercent,
    frequencies: frequencies.length && frequencies.every(isFrequency) ? frequencies : defaults.frequencies,
    maxGridSize:
      isGridCap(stored.maxGridSize) && (stored.maxGridSize !== 128 || stored.gridCapRevision === GRID_CAP_REVISION)
        ? stored.maxGridSize
        : defaults.maxGridSize,
    compareF8: typeof stored.compareF8 === "boolean" ? stored.compareF8 : defaults.compareF8,
    comparisonFNumber: isComparisonFNumber(stored.comparisonFNumber)
      ? stored.comparisonFNumber
      : defaults.comparisonFNumber,
    comparisonFocus: stored.comparisonFocus === "hold" ? "hold" : defaults.comparisonFocus,
    diffractionLimit:
      typeof stored.diffractionLimit === "boolean" ? stored.diffractionLimit : defaults.diffractionLimit,
    frequencyField:
      typeof stored.frequencyField === "number" &&
      Number.isFinite(stored.frequencyField) &&
      stored.frequencyField >= 0 &&
      stored.frequencyField <= 1
        ? stored.frequencyField
        : defaults.frequencyField,
    pixelPitchUm: MTF_PIXEL_PITCHES.includes(stored.pixelPitchUm as MtfPixelPitch)
      ? (stored.pixelPitchUm as MtfPixelPitch)
      : null,
    advanced: typeof stored.advanced === "boolean" ? stored.advanced : defaults.advanced,
  };
}

/** Load saved options, falling back safely during SSR or when storage is unavailable. */
export function loadMtfPreferences(): MtfPreferences {
  try {
    return parseMtfPreferences(JSON.parse(localStorage.getItem(MTF_PREFERENCES_KEY) ?? "null"));
  } catch {
    return DEFAULT_MTF_PREFERENCES;
  }
}

/** Save options when browser storage is available. */
export function saveMtfPreferences(preferences: MtfPreferences): void {
  try {
    localStorage.setItem(MTF_PREFERENCES_KEY, JSON.stringify({ ...preferences, gridCapRevision: GRID_CAP_REVISION }));
  } catch {
    /* private browsing or quota — keep the in-memory options */
  }
}

/* ── External store for useSyncExternalStore ── */

let snapshot: MtfPreferences | null = null;
const listeners = new Set<() => void>();

/** Current options; referentially stable until they change. */
export function getMtfPreferences(): MtfPreferences {
  snapshot ??= loadMtfPreferences();
  return snapshot;
}

/**
 * Merge a change into the current options, persist it and notify subscribers.
 *
 * @param patch - options to change
 */
export function updateMtfPreferences(patch: Partial<MtfPreferences>): void {
  // Options in memory are current, so their grid cap is a choice, not the old standard.
  snapshot = parseMtfPreferences({ ...getMtfPreferences(), ...patch, gridCapRevision: GRID_CAP_REVISION });
  saveMtfPreferences(snapshot);
  listeners.forEach((listener) => listener());
}

/**
 * Subscribe to option changes from this page and from other tabs.
 *
 * @param listener - called after options change
 * @returns unsubscribe callback
 */
export function subscribeMtfPreferences(listener: () => void): () => void {
  const onStorage = (event: StorageEvent) => {
    if (event.key !== MTF_PREFERENCES_KEY) return;
    snapshot = loadMtfPreferences();
    listener();
  };
  listeners.add(listener);
  if (typeof window !== "undefined") window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    if (typeof window !== "undefined") window.removeEventListener("storage", onStorage);
  };
}

/** Forget the cached snapshot so the next read comes from storage (tests and storage resets). */
export function resetMtfPreferencesCache(): void {
  snapshot = null;
}
