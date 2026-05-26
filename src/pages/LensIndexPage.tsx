/**
 * Lens index page — /lenses
 *
 * Browsable list of all lenses with maker/focal/patent grouping
 * and custom filters, with crawlable <a> links.
 */

import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router";
import SEOHead from "../components/SEOHead.js";
import PageNavBar from "../components/layout/PageNavBar.js";
import { LENS_CATALOG, CATALOG_KEYS } from "../utils/catalog/lensCatalog.js";
import { SITE_NAME, SITE_URL } from "../utils/catalog/lensMetadata.js";
import { collectionPageJsonLd, datasetJsonLd, itemListJsonLd } from "../utils/seo/structuredData.js";
import { usePageThemeToggle } from "../utils/theme/usePageThemeToggle.js";
import LensIndexFilterPanel from "./lensIndex/LensIndexFilterPanel.js";
import LensIndexResults from "./lensIndex/LensIndexResults.js";
import {
  FILTER_BOUNDS,
  buildFilterBounds,
  buildImageFormatOptions,
  buildMakerOptions,
  buildMountOptions,
  catalogEntriesForView,
  groupByFocalLength,
  groupByImageFormat,
  groupByMaker,
  groupByMount,
  groupByPatentYear,
} from "./lensIndex/catalog.js";
import { H1_STYLE, PAGE_BASE_STYLE } from "./lensIndex/styles.js";
import type { GroupMode } from "./lensIndex/types.js";
import useLensIndexFilters from "./lensIndex/useLensIndexFilters.js";
import { lensLinkFromLibrary } from "./lensIndex/clusterLinks.js";
import type { LensLibraryBreadcrumbContext } from "./lensIndex/clusterLinks.js";
import { parseLensIndexUrlState, parseLensIndexViewMode, serializeLensIndexUrlState } from "./lensIndex/urlState.js";

export default function LensIndexPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedViewMode = useMemo(() => parseLensIndexViewMode(searchParams.toString()), [searchParams]);
  const catalogEntries = useMemo(() => catalogEntriesForView(requestedViewMode), [requestedViewMode]);
  const filterBounds = useMemo(
    () => (requestedViewMode === "visible" ? FILTER_BOUNDS : buildFilterBounds(catalogEntries)),
    [catalogEntries, requestedViewMode],
  );
  const makerOptions = useMemo(() => buildMakerOptions(catalogEntries), [catalogEntries]);
  const mountOptions = useMemo(() => buildMountOptions(catalogEntries), [catalogEntries]);
  const imageFormatOptions = useMemo(() => buildImageFormatOptions(catalogEntries), [catalogEntries]);
  const parsedUrlState = useMemo(
    () =>
      parseLensIndexUrlState(
        searchParams.toString(),
        filterBounds,
        makerOptions.map((option) => option.slug),
      ),
    [filterBounds, makerOptions, searchParams],
  );
  const [groupMode, setGroupMode] = useState<GroupMode>(parsedUrlState.groupMode);
  const [filterOpen, setFilterOpen] = useState(parsedUrlState.filterOpen);
  const yearDir: "asc" | "desc" = groupMode === "year-desc" ? "desc" : "asc";
  const totalLenses = catalogEntries.length;
  const publicLensCount = CATALOG_KEYS.length;
  const { theme: t, themeMode, highContrast, toggleTheme, toggleHC } = usePageThemeToggle();
  const seoDescription = `Browse ${publicLensCount} patent-derived lens cross-section diagrams from Nikon, Carl Zeiss, Ricoh, Voigtländer, and more, with ray tracing and optical analysis.`;
  const {
    customFilter,
    filterInputValues,
    filteredEntries,
    activeFilters,
    clearFilters,
    clearMakerSelection,
    toggleMaker,
    clearMountSelection,
    toggleMount,
    clearImageFormatSelection,
    toggleImageFormat,
    applyNumericField,
    handleNumericInputChange,
    commitNumericInput,
    handleNumericInputKeyDown,
  } = useLensIndexFilters({
    entries: catalogEntries,
    bounds: filterBounds,
    initialFilter: parsedUrlState.customFilter,
  });
  const makerGroups = useMemo(() => groupByMaker(filteredEntries), [filteredEntries]);
  const focalSections = useMemo(() => groupByFocalLength(filteredEntries), [filteredEntries]);
  const yearGroups = useMemo(() => groupByPatentYear(filteredEntries, yearDir), [filteredEntries, yearDir]);
  const mountGroups = useMemo(() => groupByMount(filteredEntries), [filteredEntries]);
  const imageFormatGroups = useMemo(() => groupByImageFormat(filteredEntries), [filteredEntries]);
  const currentLensIndexSearch = serializeLensIndexUrlState({
    viewMode: parsedUrlState.viewMode,
    groupMode,
    filterOpen,
    customFilter,
    bounds: filterBounds,
  });
  const returnTo = currentLensIndexSearch ? `/lenses?${currentLensIndexSearch}` : "/lenses";
  const hrefForLens = useCallback(
    (lensKey: string, context?: LensLibraryBreadcrumbContext) => lensLinkFromLibrary(lensKey, returnTo, context),
    [returnTo],
  );

  useEffect(() => {
    setGroupMode(parsedUrlState.groupMode);
    setFilterOpen(parsedUrlState.filterOpen);
  }, [parsedUrlState.groupMode, parsedUrlState.filterOpen]);

  useEffect(() => {
    const nextSearch = currentLensIndexSearch;
    if (nextSearch !== searchParams.toString()) {
      setSearchParams(nextSearch, { replace: true });
    }
  }, [currentLensIndexSearch, searchParams, setSearchParams]);

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

  return (
    <div style={{ backgroundColor: t.bg, color: t.body, minHeight: "100vh" }}>
      <SEOHead
        title={`Lens Patent Cross-Section Library — ${publicLensCount} Diagrams | ${SITE_NAME}`}
        description={seoDescription}
        canonicalURL={`${SITE_URL}/lenses`}
        jsonLd={[
          collectionPageJsonLd({
            name: "Lens Library",
            description: seoDescription,
            url: `${SITE_URL}/lenses`,
            route: "/lenses",
          }),
          datasetJsonLd({
            name: "Patent-Derived Camera Lens Cross-Section Library",
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
        <nav
          aria-label="Lens clusters"
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            marginBottom: "1rem",
          }}
        >
          <Link
            to="/mounts"
            style={{
              color: t.descLinkColor,
              textDecoration: "none",
              border: `1px solid ${t.panelBorder}`,
              borderRadius: 4,
              padding: "0.35rem 0.65rem",
              fontSize: "0.8rem",
            }}
          >
            Browse by Mount
          </Link>
          <Link
            to="/formats"
            style={{
              color: t.descLinkColor,
              textDecoration: "none",
              border: `1px solid ${t.panelBorder}`,
              borderRadius: 4,
              padding: "0.35rem 0.65rem",
              fontSize: "0.8rem",
            }}
          >
            Browse by Format
          </Link>
        </nav>
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
          <div
            style={{
              display: "flex",
              gap: "0.375rem",
              flexWrap: "wrap",
              width: "100%",
              justifyContent: "flex-start",
            }}
          >
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
              style={toggleButtonStyle(groupMode === "mount")}
              onClick={() => setGroupMode("mount")}
            >
              By Mount
            </button>
            <button
              type="button"
              style={toggleButtonStyle(groupMode === "format")}
              onClick={() => setGroupMode("format")}
            >
              By Format
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
          <LensIndexFilterPanel
            theme={t}
            customFilter={customFilter}
            bounds={filterBounds}
            makerOptions={makerOptions}
            mountOptions={mountOptions}
            imageFormatOptions={imageFormatOptions}
            filterInputValues={filterInputValues}
            activeFilters={activeFilters}
            onClearFilters={clearFilters}
            onClearMakerSelection={clearMakerSelection}
            onToggleMaker={toggleMaker}
            onClearMountSelection={clearMountSelection}
            onToggleMount={toggleMount}
            onClearImageFormatSelection={clearImageFormatSelection}
            onToggleImageFormat={toggleImageFormat}
            onApplyNumericField={applyNumericField}
            onNumericInputChange={handleNumericInputChange}
            onNumericInputCommit={commitNumericInput}
            onNumericInputKeyDown={handleNumericInputKeyDown}
          />
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

        <LensIndexResults
          groupMode={groupMode}
          makerGroups={makerGroups}
          focalSections={focalSections}
          yearGroups={yearGroups}
          mountGroups={mountGroups}
          imageFormatGroups={imageFormatGroups}
          theme={t}
          hrefForLens={hrefForLens}
        />
      </div>
    </div>
  );
}
