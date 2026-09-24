/**
 * Persistent MTF analysis options, shared by every MTF tab in this browser.
 *
 * Options live in localStorage rather than the URL: they describe how the viewer likes to read
 * MTF, not the lens state being shared. A small external store lets comparison panes update together.
 */
import type { MtfFocusMode, MtfGridCap, MtfMethod, MtfSpectrum } from "../../types/mtf.js";

export type MtfChartView = "field" | "frequency";

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
  focus: MtfFocusMode;
  view: MtfChartView;
  fieldStepPercent: MtfFieldStepPercent;
  /** Displayed frequencies, ascending; never empty. */
  frequencies: readonly MtfChartFrequency[];
  maxGridSize: MtfGridCap;
}

export const MTF_PREFERENCES_KEY = "lensvis:mtf:options";

export const DEFAULT_MTF_PREFERENCES: MtfPreferences = Object.freeze({
  method: "geometric-dl",
  spectrum: "photopic",
  focus: "design",
  view: "field",
  fieldStepPercent: 10,
  frequencies: Object.freeze([10, 30] as const),
  maxGridSize: 128,
});

const oneOf =
  <T extends string | number>(values: readonly T[]) =>
  (value: unknown): value is T =>
    values.includes(value as T);
const isMethod = oneOf<MtfMethod>(["geometric", "geometric-dl", "diffraction"]);
const isSpectrum = oneOf<MtfSpectrum>(["reference", "cdf", "photopic"]);
const isFocus = oneOf<MtfFocusMode>(["design", "best-axial"]);
const isView = oneOf<MtfChartView>(["field", "frequency"]);
const isFieldStep = oneOf<MtfFieldStepPercent>(MTF_FIELD_STEPS);
const isFrequency = oneOf<MtfChartFrequency>(MTF_CHART_FREQUENCIES);
const isGridCap = oneOf<MtfGridCap>([128, 256]);

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
    method: isMethod(stored.method) ? stored.method : defaults.method,
    spectrum: isSpectrum(stored.spectrum) ? stored.spectrum : defaults.spectrum,
    focus: isFocus(stored.focus) ? stored.focus : defaults.focus,
    view: isView(stored.view) ? stored.view : defaults.view,
    fieldStepPercent: isFieldStep(stored.fieldStepPercent) ? stored.fieldStepPercent : defaults.fieldStepPercent,
    frequencies: frequencies.length && frequencies.every(isFrequency) ? frequencies : defaults.frequencies,
    maxGridSize: isGridCap(stored.maxGridSize) ? stored.maxGridSize : defaults.maxGridSize,
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
    localStorage.setItem(MTF_PREFERENCES_KEY, JSON.stringify(preferences));
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
  snapshot = parseMtfPreferences({ ...getMtfPreferences(), ...patch });
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
