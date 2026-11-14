/**
 * Explicit MTF sharing, separate from ordinary lens-view synchronization and stored preferences.
 * A versioned base64url JSON object carries only non-default settings; disclosure is never included.
 */
import {
  DEFAULT_MTF_PREFERENCES,
  MTF_CHART_FREQUENCIES,
  MTF_FIELD_STEPS,
  MTF_PIXEL_PITCHES,
  MTF_COMPARISON_F_NUMBERS,
  type MtfPreferences,
} from "./mtfPreferences.js";
import { MTF_MIN_WAVELENGTH_NM, MTF_MAX_WAVELENGTH_NM } from "../../types/mtf.js";
import { canonicalPagePath } from "../seo/siteUrls.js";

export const MTF_URL_PARAM = "mtf";

const oneOf =
  (...choices: readonly unknown[]) =>
  (value: unknown) =>
    choices.includes(value);
const isField = (value: unknown) =>
  value === "overview" || (typeof value === "number" && Number.isFinite(value) && value >= 0 && value <= 1);
const isFrequencies = (value: unknown) =>
  Array.isArray(value) &&
  value.length > 0 &&
  value.every(
    (frequency, index) =>
      MTF_CHART_FREQUENCIES.some((choice) => choice === frequency) && (index === 0 || frequency > value[index - 1]),
  );

const SETTINGS = {
  m: { key: "method", valid: oneOf("geometric", "diffraction") },
  s: { key: "spectrum", valid: oneOf("reference", "cdf", "photopic", "single") },
  w: {
    key: "wavelengthNm",
    valid: (value: unknown) =>
      typeof value === "number" &&
      Number.isFinite(value) &&
      value >= MTF_MIN_WAVELENGTH_NM &&
      value <= MTF_MAX_WAVELENGTH_NM,
  },
  f: { key: "focus", valid: oneOf("auto", "design", "best-axial") },
  g: { key: "maxGridSize", valid: oneOf(128, 256) },
  v: { key: "view", valid: oneOf("field", "frequency", "aperture", "zoom") },
  h: { key: "fieldStepPercent", valid: oneOf(...MTF_FIELD_STEPS) },
  q: { key: "frequencies", valid: isFrequencies },
  c: { key: "compareF8", valid: oneOf(true, false) },
  n: { key: "comparisonFNumber", valid: oneOf(...MTF_COMPARISON_F_NUMBERS) },
  o: { key: "comparisonFocus", valid: oneOf("refocus", "hold") },
  d: { key: "diffractionLimit", valid: oneOf(true, false) },
  r: { key: "frequencyField", valid: isField },
  p: { key: "pixelPitchUm", valid: oneOf(null, ...MTF_PIXEL_PITCHES) },
  a: { key: "advanced", valid: oneOf(true, false) },
} as const satisfies Record<string, { key: keyof MtfPreferences; valid: (value: unknown) => boolean }>;

/**
 * Encode complete settings using version 1 and exact JSON number serialization.
 * @param preferences - current visit's settings, including the preferred spectrum
 * @returns one query parameter value; `1` explicitly shares all defaults
 */
export function encodeMtfSettings(preferences: MtfPreferences): string {
  // Version 1 is additive: absent wavelength and comparison-aperture fields inherit their defaults.
  const overrides: Record<string, unknown> = {};
  for (const [code, { key }] of Object.entries(SETTINGS)) {
    if (JSON.stringify(preferences[key]) !== JSON.stringify(DEFAULT_MTF_PREFERENCES[key])) {
      overrides[code] = preferences[key];
    }
  }
  if (!Object.keys(overrides).length) return "1";
  return `1.${btoa(JSON.stringify(overrides)).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "")}`;
}

/**
 * Validate a shared payload atomically, without storage migration or field-by-field repair.
 * @param value - decoded query parameter value
 * @returns complete settings, or null for any malformed or unknown-version payload
 */
export function decodeMtfSettings(value: string | null): MtfPreferences | null {
  if (value === "1") return { ...DEFAULT_MTF_PREFERENCES };
  if (!value || value.length > 2048 || !/^1\.[A-Za-z0-9_-]+$/.test(value)) return null;
  try {
    const raw: unknown = JSON.parse(atob(value.slice(2).replaceAll("-", "+").replaceAll("_", "/")));
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
    const preferences = { ...DEFAULT_MTF_PREFERENCES };
    for (const [code, setting] of Object.entries(raw)) {
      if (!Object.hasOwn(SETTINGS, code)) return null;
      const { key, valid } = SETTINGS[code as keyof typeof SETTINGS];
      if (!valid(setting)) return null;
      Object.assign(preferences, { [key]: setting });
    }
    return preferences;
  } catch {
    return null;
  }
}

/**
 * Read the independently versioned preference override only inside a v1 lens-view URL.
 * @param search - page query string
 * @returns complete shared settings, or null to keep the reader's preferences
 */
export function parseSharedMtfSettings(search: string): MtfPreferences | null {
  const params = new URLSearchParams(search);
  return params.get("v") === "1" && params.getAll(MTF_URL_PARAM).length === 1
    ? decodeMtfSettings(params.get(MTF_URL_PARAM))
    : null;
}

/**
 * Build an explicit share link without changing the address bar.
 * @param href - current absolute page URL, including optical state and fragment
 * @param preferences - complete current visit settings
 * @returns absolute URL opening the MTF tab with these settings
 */
export function buildMtfLink(href: string, preferences: MtfPreferences): string {
  const url = new URL(href);
  url.searchParams.set("v", "1");
  url.searchParams.set("ad", "1");
  url.searchParams.set("tab", "mtf");
  url.searchParams.set(MTF_URL_PARAM, encodeMtfSettings(preferences));
  return url.href;
}

/**
 * Keep an existing valid share override unchanged when rebuilding a lens-view query.
 * @param currentSearch - query before synchronization or navigation
 * @param params - newly built lens-view query, mutated only for an existing override
 */
export function preserveSharedMtfSettings(currentSearch: string, params: URLSearchParams): void {
  if (!parseSharedMtfSettings(currentSearch)) return;
  params.set("v", "1");
  params.set(MTF_URL_PARAM, new URLSearchParams(currentSearch).get(MTF_URL_PARAM)!);
}

/**
 * Carry visit-specific MTF settings through lens-view navigation before a fresh viewer mounts.
 * @param pathname - destination single-lens or comparison route, without a query
 * @param currentSearch - live query at navigation time, so removed overrides stay removed
 * @param params - destination optical state; unrelated current query parameters are not copied
 * @returns canonical lens-view path with only a valid existing MTF override carried forward
 */
export function buildLensNavigationUrl(
  pathname: string,
  currentSearch: string,
  params = new URLSearchParams(),
): string {
  const nextParams = new URLSearchParams(params);
  preserveSharedMtfSettings(currentSearch, nextParams);
  const search = nextParams.toString();
  return canonicalPagePath(`${pathname}${search ? `?${search}` : ""}`);
}
