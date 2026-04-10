/**
 * Lens index page — /lenses
 *
 * Browsable list of all lenses with maker/focal/patent grouping
 * and custom filters, with crawlable <a> links.
 */

import { useMemo, useState } from "react";
import { Link } from "react-router";
import SEOHead from "../components/SEOHead.js";
import PageNavBar from "../components/layout/PageNavBar.js";
import { LENS_CATALOG, CATALOG_KEYS } from "../utils/lensCatalog.js";
import { SITE_NAME, SITE_URL } from "../utils/lensMetadata.js";
import { collectionPageJsonLd, itemListJsonLd } from "../utils/structuredData.js";
import { usePageThemeToggle } from "../utils/usePageThemeToggle.js";
import LensIndexFilterPanel from "./lensIndex/LensIndexFilterPanel.js";
import LensIndexResults from "./lensIndex/LensIndexResults.js";
import {
  CATALOG_ENTRIES,
  FILTER_BOUNDS,
  MAKER_OPTIONS,
  groupByFocalLength,
  groupByMaker,
  groupByPatentYear,
} from "./lensIndex/catalog.js";
import { H1_STYLE, PAGE_BASE_STYLE } from "./lensIndex/styles.js";
import type { GroupMode } from "./lensIndex/types.js";
import useLensIndexFilters from "./lensIndex/useLensIndexFilters.js";

export default function LensIndexPage() {
  const [groupMode, setGroupMode] = useState<GroupMode>("maker");
  const [filterOpen, setFilterOpen] = useState(false);
  const yearDir: "asc" | "desc" = groupMode === "year-desc" ? "desc" : "asc";
  const totalLenses = CATALOG_KEYS.length;
  const { theme: t, themeMode, highContrast, toggleTheme, toggleHC } = usePageThemeToggle();
  const seoDescription = `Browse ${totalLenses} interactive lens cross-section diagrams from Nikon, Carl Zeiss, Ricoh, Voigtländer, and more. Each lens features ray tracing, element inspection, and aberration analysis.`;
  const {
    customFilter,
    filterInputValues,
    filteredEntries,
    activeFilters,
    clearFilters,
    clearMakerSelection,
    toggleMaker,
    applyNumericField,
    handleNumericInputChange,
    commitNumericInput,
    handleNumericInputKeyDown,
  } = useLensIndexFilters({
    entries: CATALOG_ENTRIES,
    bounds: FILTER_BOUNDS,
  });
  const makerGroups = useMemo(() => groupByMaker(filteredEntries), [filteredEntries]);
  const focalSections = useMemo(() => groupByFocalLength(filteredEntries), [filteredEntries]);
  const yearGroups = useMemo(() => groupByPatentYear(filteredEntries, yearDir), [filteredEntries, yearDir]);

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
          <LensIndexFilterPanel
            theme={t}
            customFilter={customFilter}
            bounds={FILTER_BOUNDS}
            makerOptions={MAKER_OPTIONS}
            filterInputValues={filterInputValues}
            activeFilters={activeFilters}
            onClearFilters={clearFilters}
            onClearMakerSelection={clearMakerSelection}
            onToggleMaker={toggleMaker}
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
          theme={t}
        />
      </div>
    </div>
  );
}
