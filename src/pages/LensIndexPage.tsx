/**
 * Lens index page — /lenses
 *
 * Browsable list of all lenses grouped by maker or focal length,
 * with crawlable <a> links.
 */

import { useMemo, useState } from "react";
import { Link } from "react-router";
import SEOHead from "../components/SEOHead.js";
import PageNavBar from "../components/layout/PageNavBar.js";
import { LENS_CATALOG, CATALOG_KEYS } from "../utils/lensCatalog.js";
import { deriveMaker, SITE_NAME, SITE_URL } from "../utils/lensMetadata.js";
import { getMakerDetails } from "../utils/makerDetails.js";
import { collectionPageJsonLd, itemListJsonLd } from "../utils/structuredData.js";
import { usePageThemeToggle } from "../utils/usePageThemeToggle.js";
import type { LensData } from "../types/optics.js";

type GroupMode = "maker" | "focal" | "year-asc" | "year-desc";

interface CatalogLensEntry {
  key: string;
  data: LensData;
  maker: {
    display: string;
    slug: string;
  };
  focalRange: [number, number] | null;
  aperture: number | null;
  patentYear: number | null;
}

interface MakerOption {
  display: string;
  slug: string;
  count: number;
}

interface MakerGroup {
  display: string;
  slug: string;
  lenses: CatalogLensEntry[];
}

interface YearGroup {
  decade: string;
  lenses: CatalogLensEntry[];
}

interface FocalSubGroup {
  label: string;
  lenses: CatalogLensEntry[];
}

interface PrimeZoomSection {
  label: string; // "Primes" or "Zooms"
  subGroups: FocalSubGroup[];
}

interface FilterBounds {
  focalMin: number;
  focalMax: number;
  apertureMin: number;
  apertureMax: number;
  patentYearMin: number;
  patentYearMax: number;
}

interface CustomFilterState extends FilterBounds {
  makerSlugs: string[];
}

/** Ordered focal length buckets: label and upper bound (inclusive). */
const FOCAL_BUCKETS: { label: string; maxFl: number }[] = [
  { label: "Ultrawide (≤24mm)", maxFl: 24 },
  { label: "Wide (25–39mm)", maxFl: 39 },
  { label: "Normal (40–60mm)", maxFl: 60 },
  { label: "Short Tele (61–99mm)", maxFl: 99 },
  { label: "Mid Tele (100–199mm)", maxFl: 199 },
  { label: "Ultra Tele (≥200mm)", maxFl: Infinity },
];

/** Classify a focal length (in mm) into a bucket label. */
function focalBucketLabel(fl: number): string {
  for (const { label, maxFl } of FOCAL_BUCKETS) {
    if (fl <= maxFl) return label;
  }
  return FOCAL_BUCKETS[FOCAL_BUCKETS.length - 1].label;
}

/** Determine the representative focal length for grouping.
 *  For zooms, use the wider (smaller) end of the range. */
function lensFocalRange(data: LensData): [number, number] | null {
  const fl = data.focalLengthMarketing;
  if (fl === undefined || fl === null) return null;
  if (Array.isArray(fl)) return [Math.min(fl[0], fl[1]), Math.max(fl[0], fl[1])];
  return [fl, fl];
}

/** Returns true if the lens is a zoom (focalLengthMarketing is a range). */
function isZoomLens(data: LensData): boolean {
  return Array.isArray(data.focalLengthMarketing);
}

function groupingFl(data: LensData): number | null {
  const range = lensFocalRange(data);
  return range ? range[0] : null;
}

function lensAperture(data: LensData): number | null {
  if (data.apertureMarketing !== undefined) return data.apertureMarketing;
  if (data.apertureDesign !== undefined) return data.apertureDesign;
  if (Array.isArray(data.nominalFno)) return Math.min(...data.nominalFno);
  return data.nominalFno ?? null;
}

function buildCatalogEntries(): CatalogLensEntry[] {
  return CATALOG_KEYS.map((key) => {
    const data = LENS_CATALOG[key];
    return {
      key,
      data,
      maker: deriveMaker(data.name, data.maker),
      focalRange: lensFocalRange(data),
      aperture: lensAperture(data),
      patentYear: data.patentYear ?? null,
    };
  });
}

function numericBounds(values: number[]): [number, number] {
  return [Math.min(...values), Math.max(...values)];
}

function buildFilterBounds(entries: CatalogLensEntry[]): FilterBounds {
  const focalValues = entries.flatMap((entry) => (entry.focalRange ? [entry.focalRange[0], entry.focalRange[1]] : []));
  const apertureValues = entries.flatMap((entry) => (entry.aperture !== null ? [entry.aperture] : []));
  const patentYears = entries.flatMap((entry) => (entry.patentYear !== null ? [entry.patentYear] : []));
  const [focalMin, focalMax] = numericBounds(focalValues);
  const [apertureMin, apertureMax] = numericBounds(apertureValues);
  const [patentYearMin, patentYearMax] = numericBounds(patentYears);

  return {
    focalMin,
    focalMax,
    apertureMin,
    apertureMax,
    patentYearMin,
    patentYearMax,
  };
}

function defaultCustomFilter(bounds: FilterBounds): CustomFilterState {
  return {
    ...bounds,
    makerSlugs: [],
  };
}

function buildMakerOptions(entries: CatalogLensEntry[]): MakerOption[] {
  const counts = new Map<string, MakerOption>();
  for (const entry of entries) {
    const existing = counts.get(entry.maker.slug);
    if (existing) {
      existing.count++;
    } else {
      counts.set(entry.maker.slug, { display: entry.maker.display, slug: entry.maker.slug, count: 1 });
    }
  }
  return Array.from(counts.values()).sort((a, b) => a.display.localeCompare(b.display));
}

function matchesCustomFilter(entry: CatalogLensEntry, filter: CustomFilterState, bounds: FilterBounds): boolean {
  const makerMatch = filter.makerSlugs.length === 0 || filter.makerSlugs.includes(entry.maker.slug);
  const focalMatch =
    entry.focalRange === null
      ? filter.focalMin === bounds.focalMin && filter.focalMax === bounds.focalMax
      : entry.focalRange[0] <= filter.focalMax && entry.focalRange[1] >= filter.focalMin;
  const apertureMatch =
    entry.aperture === null
      ? filter.apertureMin === bounds.apertureMin && filter.apertureMax === bounds.apertureMax
      : entry.aperture >= filter.apertureMin && entry.aperture <= filter.apertureMax;
  const patentYearMatch =
    entry.patentYear === null
      ? filter.patentYearMin === bounds.patentYearMin && filter.patentYearMax === bounds.patentYearMax
      : entry.patentYear >= filter.patentYearMin && entry.patentYear <= filter.patentYearMax;
  return makerMatch && focalMatch && apertureMatch && patentYearMatch;
}

function hasActiveCustomFilters(filter: CustomFilterState, bounds: FilterBounds): boolean {
  return (
    filter.focalMin !== bounds.focalMin ||
    filter.focalMax !== bounds.focalMax ||
    filter.apertureMin !== bounds.apertureMin ||
    filter.apertureMax !== bounds.apertureMax ||
    filter.patentYearMin !== bounds.patentYearMin ||
    filter.patentYearMax !== bounds.patentYearMax ||
    filter.makerSlugs.length > 0
  );
}

function groupByMaker(entries: CatalogLensEntry[]): MakerGroup[] {
  const groups = new Map<string, MakerGroup>();
  for (const entry of entries) {
    if (!groups.has(entry.maker.slug)) {
      groups.set(entry.maker.slug, { display: entry.maker.display, slug: entry.maker.slug, lenses: [] });
    }
    groups.get(entry.maker.slug)!.lenses.push(entry);
  }
  return Array.from(groups.values()).sort((a, b) => a.display.localeCompare(b.display));
}

function groupByFocalLength(entries: CatalogLensEntry[]): PrimeZoomSection[] {
  const primeBuckets = new Map<string, CatalogLensEntry[]>();
  const zoomBuckets = new Map<string, CatalogLensEntry[]>();

  for (const entry of entries) {
    const fl = groupingFl(entry.data);
    const label = fl !== null ? focalBucketLabel(fl) : "Unknown";
    const buckets = isZoomLens(entry.data) ? zoomBuckets : primeBuckets;
    if (!buckets.has(label)) buckets.set(label, []);
    buckets.get(label)!.push(entry);
  }

  const toSections = (buckets: Map<string, CatalogLensEntry[]>): FocalSubGroup[] =>
    FOCAL_BUCKETS.map(({ label }) => ({ label, lenses: buckets.get(label) ?? [] })).filter((g) => g.lenses.length > 0);

  const sections: PrimeZoomSection[] = [];
  const primeSubs = toSections(primeBuckets);
  if (primeSubs.length > 0) sections.push({ label: "Primes", subGroups: primeSubs });
  const zoomSubs = toSections(zoomBuckets);
  if (zoomSubs.length > 0) sections.push({ label: "Zooms", subGroups: zoomSubs });

  return sections;
}

function groupByPatentYear(entries: CatalogLensEntry[], dir: "asc" | "desc"): YearGroup[] {
  const sorted = [...entries].sort((a, b) => {
    const ya = a.patentYear ?? (dir === "asc" ? Infinity : -Infinity);
    const yb = b.patentYear ?? (dir === "asc" ? Infinity : -Infinity);
    if (ya !== yb) return dir === "asc" ? ya - yb : yb - ya;
    return a.data.name.localeCompare(b.data.name);
  });

  const groups = new Map<string, CatalogLensEntry[]>();
  for (const item of sorted) {
    const year = item.patentYear;
    const decade = year !== null ? `${Math.floor(year / 10) * 10}s` : "Unknown Year";
    if (!groups.has(decade)) groups.set(decade, []);
    groups.get(decade)!.push(item);
  }
  return Array.from(groups.entries()).map(([decade, lenses]) => ({ decade, lenses }));
}

function formatFilterValue(value: number): string {
  return Number.isInteger(value) ? value.toString() : value.toFixed(2).replace(/\.?0+$/, "");
}

const CATALOG_ENTRIES = buildCatalogEntries();
const FILTER_BOUNDS = buildFilterBounds(CATALOG_ENTRIES);
const MAKER_OPTIONS = buildMakerOptions(CATALOG_ENTRIES);

const PAGE_BASE_STYLE = {
  maxWidth: 960,
  margin: "0 auto",
  padding: "0 1.5rem 2rem",
  fontFamily: "'JetBrains Mono','SF Mono','Fira Code', monospace",
  minHeight: "100vh",
} satisfies React.CSSProperties;

const H1_STYLE: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 600,
  marginTop: "1.5rem",
  marginBottom: "0.5rem",
};

const MAKER_HEADING_BASE_STYLE = {
  fontSize: "1.125rem",
  fontWeight: 600,
  marginTop: "1.5rem",
  marginBottom: "0.75rem",
  paddingBottom: "0.25rem",
} satisfies React.CSSProperties;

const LENS_LINK_BASE_STYLE = {
  display: "block",
  padding: "0.5rem 0.75rem",
  marginBottom: "0.25rem",
  textDecoration: "none",
  borderRadius: 4,
  fontSize: "0.875rem",
} satisfies React.CSSProperties;

export default function LensIndexPage() {
  const [groupMode, setGroupMode] = useState<GroupMode>("maker");
  const [filterOpen, setFilterOpen] = useState(false);
  const [customFilter, setCustomFilter] = useState<CustomFilterState>(() => defaultCustomFilter(FILTER_BOUNDS));
  const yearDir: "asc" | "desc" = groupMode === "year-desc" ? "desc" : "asc";
  const totalLenses = CATALOG_KEYS.length;
  const { theme: t, themeMode, highContrast, toggleTheme, toggleHC } = usePageThemeToggle();
  const seoDescription = `Browse ${totalLenses} interactive lens cross-section diagrams from Nikon, Carl Zeiss, Ricoh, Voigtländer, and more. Each lens features ray tracing, element inspection, and aberration analysis.`;
  const filteredEntries = useMemo(
    () => CATALOG_ENTRIES.filter((entry) => matchesCustomFilter(entry, customFilter, FILTER_BOUNDS)),
    [customFilter],
  );
  const makerGroups = useMemo(() => groupByMaker(filteredEntries), [filteredEntries]);
  const focalSections = useMemo(() => groupByFocalLength(filteredEntries), [filteredEntries]);
  const yearGroups = useMemo(() => groupByPatentYear(filteredEntries, yearDir), [filteredEntries, yearDir]);
  const activeFilters = hasActiveCustomFilters(customFilter, FILTER_BOUNDS);

  const toggleButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.25rem 0.75rem",
    fontSize: "0.8rem",
    fontFamily: "inherit",
    border: `1px solid ${active ? t.toggleActiveBorder : t.toggleBorder}`,
    borderRadius: 4,
    cursor: "pointer",
    backgroundColor: active ? t.toggleActiveBg : t.toggleBg,
    color: active ? t.toggleActiveText : t.toggleInactiveText,
    fontWeight: active ? 600 : 400,
  });

  const makerSelectorStyle = (active: boolean): React.CSSProperties => ({
    ...toggleButtonStyle(active),
    textAlign: "left",
  });

  const filterBlockStyle: React.CSSProperties = {
    backgroundColor: t.panelBg,
    border: `1px solid ${t.panelBorder}`,
    borderRadius: 8,
    padding: "1rem",
    marginBottom: "1.5rem",
  };

  const filterTitleStyle: React.CSSProperties = {
    fontSize: "0.9rem",
    fontWeight: 600,
    marginTop: 0,
    marginBottom: "0.6rem",
  };

  const rangeGridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "0.75rem 1rem",
  };

  const sliderLabelStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "0.75rem",
    fontSize: "0.8rem",
    color: t.label,
    marginBottom: "0.35rem",
  };

  const sliderStyle: React.CSSProperties = {
    width: "100%",
    accentColor: t.descLinkColor,
  };

  const clearFilters = () => setCustomFilter(defaultCustomFilter(FILTER_BOUNDS));
  const toggleMaker = (makerSlug: string) =>
    setCustomFilter((prev) => ({
      ...prev,
      makerSlugs: prev.makerSlugs.includes(makerSlug)
        ? prev.makerSlugs.filter((slug) => slug !== makerSlug)
        : [...prev.makerSlugs, makerSlug].sort((a, b) => a.localeCompare(b)),
    }));

  const updateFocalMin = (value: number) =>
    setCustomFilter((prev) => ({
      ...prev,
      focalMin: value,
      focalMax: Math.max(prev.focalMax, value),
    }));

  const updateFocalMax = (value: number) =>
    setCustomFilter((prev) => ({
      ...prev,
      focalMin: Math.min(prev.focalMin, value),
      focalMax: value,
    }));

  const updateApertureMin = (value: number) =>
    setCustomFilter((prev) => ({
      ...prev,
      apertureMin: value,
      apertureMax: Math.max(prev.apertureMax, value),
    }));

  const updateApertureMax = (value: number) =>
    setCustomFilter((prev) => ({
      ...prev,
      apertureMin: Math.min(prev.apertureMin, value),
      apertureMax: value,
    }));

  const updatePatentYearMin = (value: number) =>
    setCustomFilter((prev) => ({
      ...prev,
      patentYearMin: value,
      patentYearMax: Math.max(prev.patentYearMax, value),
    }));

  const updatePatentYearMax = (value: number) =>
    setCustomFilter((prev) => ({
      ...prev,
      patentYearMin: Math.min(prev.patentYearMin, value),
      patentYearMax: value,
    }));

  return (
    <div style={{ backgroundColor: t.bg, color: t.body, minHeight: "100vh" }}>
      <SEOHead
        title={`All Lenses — ${SITE_NAME}`}
        description={seoDescription}
        canonicalURL={`${SITE_URL}/lenses`}
        jsonLd={[
          collectionPageJsonLd({
            name: "Lens Library",
            description: seoDescription,
            url: `${SITE_URL}/lenses`,
            route: "/lenses",
          }),
          itemListJsonLd({
            name: "Lens Library",
            url: `${SITE_URL}/lenses`,
            items: CATALOG_KEYS.map((key) => ({
              name: LENS_CATALOG[key].name,
              url: `${SITE_URL}/lens/${key}`,
            })),
          }),
        ]}
      />

      <PageNavBar
        theme={t}
        themeMode={themeMode}
        highContrast={highContrast}
        onToggleTheme={toggleTheme}
        onToggleHC={toggleHC}
      >
        <Link to="/" style={{ color: t.descLinkColor, textDecoration: "none" }}>
          Home
        </Link>
        <span style={{ color: t.muted, margin: "0 0.35em" }}>/</span>
        <span style={{ color: t.body }}>Lenses</span>
      </PageNavBar>

      <div style={PAGE_BASE_STYLE}>
        <h1 style={H1_STYLE}>Lens Library</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.75rem 1rem",
            marginBottom: filterOpen ? "1rem" : "2rem",
          }}
        >
          <p style={{ fontSize: "0.875rem", color: t.muted, margin: 0 }}>
            Showing {filteredEntries.length} of {totalLenses} interactive optical cross-section diagrams built from
            patent data.
          </p>
          <div style={{ display: "flex", gap: "0.375rem", flexShrink: 0, flexWrap: "wrap" }}>
            <button
              type="button"
              style={toggleButtonStyle(groupMode === "maker")}
              onClick={() => setGroupMode("maker")}
            >
              By Maker
            </button>
            <button
              type="button"
              style={toggleButtonStyle(groupMode === "focal")}
              onClick={() => setGroupMode("focal")}
            >
              By Focal Length
            </button>
            <button
              type="button"
              style={toggleButtonStyle(groupMode === "year-asc" || groupMode === "year-desc")}
              onClick={() =>
                setGroupMode(
                  groupMode === "year-asc" ? "year-desc" : groupMode === "year-desc" ? "year-asc" : "year-asc",
                )
              }
            >
              {groupMode === "year-asc"
                ? "By Patent Year ↑"
                : groupMode === "year-desc"
                  ? "By Patent Year ↓"
                  : "By Patent Year"}
            </button>
            <button
              type="button"
              style={toggleButtonStyle(filterOpen || activeFilters)}
              onClick={() => setFilterOpen((open) => !open)}
              aria-expanded={filterOpen}
              aria-controls="custom-filter-panel"
            >
              Custom Filter
            </button>
          </div>
        </div>

        {filterOpen && (
          <section id="custom-filter-panel" aria-label="Custom filter controls" style={filterBlockStyle}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "0.75rem",
                flexWrap: "wrap",
                marginBottom: "1rem",
              }}
            >
              <div>
                <h2 style={{ ...filterTitleStyle, marginBottom: "0.25rem" }}>Custom Filter</h2>
                <p style={{ margin: 0, fontSize: "0.78rem", color: t.muted }}>
                  Adjust the ranges below and optionally select one or more makers.
                </p>
              </div>
              <button
                type="button"
                style={toggleButtonStyle(activeFilters)}
                onClick={clearFilters}
                disabled={!activeFilters}
              >
                Clear Filters
              </button>
            </div>

            <div style={{ display: "grid", gap: "1rem" }}>
              <section>
                <h3 style={filterTitleStyle}>
                  Focal Length
                  <span style={{ color: t.label, fontSize: "0.78rem", fontWeight: 400, marginLeft: "0.5rem" }}>
                    {formatFilterValue(customFilter.focalMin)}–{formatFilterValue(customFilter.focalMax)}mm
                  </span>
                </h3>
                <div style={rangeGridStyle}>
                  <label htmlFor="custom-filter-focal-min">
                    <span style={sliderLabelStyle}>
                      <span>Minimum focal length</span>
                      <span>{formatFilterValue(customFilter.focalMin)}mm</span>
                    </span>
                    <input
                      id="custom-filter-focal-min"
                      type="range"
                      min={FILTER_BOUNDS.focalMin}
                      max={FILTER_BOUNDS.focalMax}
                      step={0.1}
                      value={customFilter.focalMin}
                      onChange={(event) => updateFocalMin(Number(event.currentTarget.value))}
                      style={sliderStyle}
                    />
                  </label>
                  <label htmlFor="custom-filter-focal-max">
                    <span style={sliderLabelStyle}>
                      <span>Maximum focal length</span>
                      <span>{formatFilterValue(customFilter.focalMax)}mm</span>
                    </span>
                    <input
                      id="custom-filter-focal-max"
                      type="range"
                      min={FILTER_BOUNDS.focalMin}
                      max={FILTER_BOUNDS.focalMax}
                      step={0.1}
                      value={customFilter.focalMax}
                      onChange={(event) => updateFocalMax(Number(event.currentTarget.value))}
                      style={sliderStyle}
                    />
                  </label>
                </div>
              </section>

              <section>
                <h3 style={filterTitleStyle}>
                  Aperture
                  <span style={{ color: t.label, fontSize: "0.78rem", fontWeight: 400, marginLeft: "0.5rem" }}>
                    f/{formatFilterValue(customFilter.apertureMin)}–f/{formatFilterValue(customFilter.apertureMax)}
                  </span>
                </h3>
                <div style={rangeGridStyle}>
                  <label htmlFor="custom-filter-aperture-min">
                    <span style={sliderLabelStyle}>
                      <span>Minimum aperture</span>
                      <span>f/{formatFilterValue(customFilter.apertureMin)}</span>
                    </span>
                    <input
                      id="custom-filter-aperture-min"
                      type="range"
                      min={FILTER_BOUNDS.apertureMin}
                      max={FILTER_BOUNDS.apertureMax}
                      step={0.05}
                      value={customFilter.apertureMin}
                      onChange={(event) => updateApertureMin(Number(event.currentTarget.value))}
                      style={sliderStyle}
                    />
                  </label>
                  <label htmlFor="custom-filter-aperture-max">
                    <span style={sliderLabelStyle}>
                      <span>Maximum aperture</span>
                      <span>f/{formatFilterValue(customFilter.apertureMax)}</span>
                    </span>
                    <input
                      id="custom-filter-aperture-max"
                      type="range"
                      min={FILTER_BOUNDS.apertureMin}
                      max={FILTER_BOUNDS.apertureMax}
                      step={0.05}
                      value={customFilter.apertureMax}
                      onChange={(event) => updateApertureMax(Number(event.currentTarget.value))}
                      style={sliderStyle}
                    />
                  </label>
                </div>
              </section>

              <section>
                <h3 style={filterTitleStyle}>
                  Patent Date
                  <span style={{ color: t.label, fontSize: "0.78rem", fontWeight: 400, marginLeft: "0.5rem" }}>
                    {customFilter.patentYearMin}–{customFilter.patentYearMax}
                  </span>
                </h3>
                <div style={rangeGridStyle}>
                  <label htmlFor="custom-filter-patent-year-min">
                    <span style={sliderLabelStyle}>
                      <span>Minimum patent year</span>
                      <span>{customFilter.patentYearMin}</span>
                    </span>
                    <input
                      id="custom-filter-patent-year-min"
                      type="range"
                      min={FILTER_BOUNDS.patentYearMin}
                      max={FILTER_BOUNDS.patentYearMax}
                      step={1}
                      value={customFilter.patentYearMin}
                      onChange={(event) => updatePatentYearMin(Number(event.currentTarget.value))}
                      style={sliderStyle}
                    />
                  </label>
                  <label htmlFor="custom-filter-patent-year-max">
                    <span style={sliderLabelStyle}>
                      <span>Maximum patent year</span>
                      <span>{customFilter.patentYearMax}</span>
                    </span>
                    <input
                      id="custom-filter-patent-year-max"
                      type="range"
                      min={FILTER_BOUNDS.patentYearMin}
                      max={FILTER_BOUNDS.patentYearMax}
                      step={1}
                      value={customFilter.patentYearMax}
                      onChange={(event) => updatePatentYearMax(Number(event.currentTarget.value))}
                      style={sliderStyle}
                    />
                  </label>
                </div>
              </section>

              <section>
                <h3 style={filterTitleStyle}>
                  Maker
                  <span style={{ color: t.label, fontSize: "0.78rem", fontWeight: 400, marginLeft: "0.5rem" }}>
                    {customFilter.makerSlugs.length === 0 ? "All Makers" : `${customFilter.makerSlugs.length} selected`}
                  </span>
                </h3>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  <button
                    type="button"
                    style={makerSelectorStyle(customFilter.makerSlugs.length === 0)}
                    onClick={() => setCustomFilter((prev) => ({ ...prev, makerSlugs: [] }))}
                    aria-pressed={customFilter.makerSlugs.length === 0}
                  >
                    All Makers
                  </button>
                  {MAKER_OPTIONS.map((maker) => {
                    const selected = customFilter.makerSlugs.includes(maker.slug);
                    return (
                      <button
                        key={maker.slug}
                        type="button"
                        style={makerSelectorStyle(selected)}
                        onClick={() => toggleMaker(maker.slug)}
                        aria-pressed={selected}
                      >
                        {maker.display} ({maker.count})
                      </button>
                    );
                  })}
                </div>
              </section>
            </div>
          </section>
        )}

        {filteredEntries.length === 0 && (
          <div
            style={{
              border: `1px solid ${t.panelBorder}`,
              borderRadius: 8,
              padding: "1rem",
              backgroundColor: t.panelBg,
              color: t.body,
            }}
          >
            <p style={{ marginTop: 0, marginBottom: "0.75rem" }}>No lenses match the current custom filter.</p>
            <button type="button" style={toggleButtonStyle(true)} onClick={clearFilters}>
              Reset Custom Filter
            </button>
          </div>
        )}

        {groupMode === "maker" &&
          makerGroups.map((group) => {
            const details = getMakerDetails(group.slug);
            return (
              <section key={group.slug}>
                <h2 style={{ ...MAKER_HEADING_BASE_STYLE, borderBottom: `1px solid ${t.panelBorder}` }}>
                  <Link to={`/makers/${group.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                    {group.display}
                  </Link>
                  <span style={{ color: t.label, fontSize: "0.75rem", marginLeft: "0.5rem", fontWeight: 400 }}>
                    ({group.lenses.length})
                  </span>
                </h2>
                {details && (
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: t.muted,
                      lineHeight: 1.4,
                      marginTop: "-0.5rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {details.summary}
                  </p>
                )}
                {group.lenses.map((entry) => (
                  <Link
                    key={entry.key}
                    to={`/lens/${entry.key}`}
                    style={{ ...LENS_LINK_BASE_STYLE, color: t.descLinkColor }}
                  >
                    {entry.data.name}
                    {entry.data.specs && entry.data.specs.length > 0 && (
                      <span style={{ color: t.label, fontSize: "0.75rem", marginLeft: "0.5rem" }}>
                        — {entry.data.specs.slice(0, 2).join(", ")}
                      </span>
                    )}
                  </Link>
                ))}
              </section>
            );
          })}

        {groupMode === "focal" &&
          focalSections.map((section) => (
            <section key={section.label}>
              <h2
                style={{
                  ...MAKER_HEADING_BASE_STYLE,
                  fontSize: "1.25rem",
                  borderBottom: `2px solid ${t.panelBorder}`,
                  marginTop: "2rem",
                }}
              >
                {section.label}
                <span style={{ color: t.label, fontSize: "0.75rem", marginLeft: "0.5rem", fontWeight: 400 }}>
                  ({section.subGroups.reduce((n, g) => n + g.lenses.length, 0)})
                </span>
              </h2>
              {section.subGroups.map((sub) => (
                <div key={sub.label} style={{ marginBottom: "1rem" }}>
                  <h3
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: t.muted,
                      marginTop: "1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {sub.label}
                    <span style={{ color: t.label, fontSize: "0.75rem", marginLeft: "0.5rem", fontWeight: 400 }}>
                      ({sub.lenses.length})
                    </span>
                  </h3>
                  {sub.lenses.map((entry) => (
                    <Link
                      key={entry.key}
                      to={`/lens/${entry.key}`}
                      style={{ ...LENS_LINK_BASE_STYLE, color: t.descLinkColor }}
                    >
                      {entry.data.name}
                      {entry.data.specs && entry.data.specs.length > 0 && (
                        <span style={{ color: t.label, fontSize: "0.75rem", marginLeft: "0.5rem" }}>
                          — {entry.data.specs.slice(0, 2).join(", ")}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              ))}
            </section>
          ))}
        {(groupMode === "year-asc" || groupMode === "year-desc") &&
          yearGroups.map((group) => (
            <section key={group.decade}>
              <h2 style={{ ...MAKER_HEADING_BASE_STYLE, borderBottom: `1px solid ${t.panelBorder}` }}>
                {group.decade}
                <span style={{ color: t.label, fontSize: "0.75rem", marginLeft: "0.5rem", fontWeight: 400 }}>
                  ({group.lenses.length})
                </span>
              </h2>
              {group.lenses.map((entry) => (
                <Link
                  key={entry.key}
                  to={`/lens/${entry.key}`}
                  style={{ ...LENS_LINK_BASE_STYLE, color: t.descLinkColor }}
                >
                  {entry.data.name}
                  {entry.data.patentYear !== undefined && (
                    <span style={{ color: t.label, fontSize: "0.75rem", marginLeft: "0.5rem" }}>
                      — {entry.data.patentYear}
                    </span>
                  )}
                </Link>
              ))}
            </section>
          ))}
      </div>
    </div>
  );
}
