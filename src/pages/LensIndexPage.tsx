/**
 * Lens index page — /lenses
 *
 * Browsable list of all lenses with maker/attribution/focal/patent grouping
 * and custom filters, with crawlable <a> links.
 */

import { useCallback, useEffect, useId, useMemo, useState } from "react";
import { Link, useLocation, useNavigationType, useSearchParams } from "react-router";
import SEOHead from "../components/SEOHead.js";
import PageNavBar from "../components/layout/PageNavBar.js";
import { LENS_SUMMARIES, SUMMARY_KEYS } from "../utils/catalog/lensSummaries.js";
import { SITE_NAME, SITE_URL } from "../utils/catalog/lensMetadata.js";
import { collectionPageJsonLd, datasetJsonLd, itemListJsonLd } from "../utils/seo/structuredData.js";
import { usePageThemeToggle } from "../utils/theme/usePageThemeToggle.js";
import LensIndexFilterPanel from "./lensIndex/LensIndexFilterPanel.js";
import { buildPatentDecadeOptions } from "./lensIndex/patentDecades.js";
import LensIndexResults from "./lensIndex/LensIndexResults.js";
import LinkListSidebar from "../components/content/LinkListSidebar.js";
import SidebarLayout from "../components/content/SidebarLayout.js";
import {
  focalSubGroupAnchorId,
  formatGroupAnchorId,
  makerGroupAnchorId,
  mountGroupAnchorId,
  patentPartyGroupAnchorId,
  yearGroupAnchorId,
} from "./lensIndex/groupAnchors.js";
import {
  FILTER_BOUNDS,
  SOURCE_KIND_LABELS,
  buildFilterBounds,
  buildImageFormatOptions,
  buildMakerOptions,
  buildMountOptions,
  buildSourceKindOptions,
  catalogEntriesForView,
  groupByAssignee,
  groupByFocalLength,
  groupByImageFormat,
  groupByInventor,
  groupByMaker,
  groupByMount,
  groupByPatentYear,
  hasActivePanelFilters,
  isLensSourceKind,
} from "./lensIndex/catalog.js";
import { H1_STYLE, PAGE_BASE_STYLE } from "./lensIndex/styles.js";
import { PRODUCTION_MATCH_OPTIONS, type GroupMode } from "./lensIndex/types.js";
import useLensIndexFilters from "./lensIndex/useLensIndexFilters.js";
import { lensLinkFromLibrary } from "./lensIndex/clusterLinks.js";
import type { LensLibraryBreadcrumbContext } from "./lensIndex/clusterLinks.js";
import { parseLensIndexUrlState, parseLensIndexViewMode, serializeLensIndexUrlState } from "./lensIndex/urlState.js";
import { LENS_FEED_PATH } from "../utils/content/feedMetadata.js";
import { textRun } from "../utils/text.js";

import type { Theme } from "../types/theme.js";

function LibraryFilterSelect<T extends string>({
  label,
  options,
  value,
  onChange,
  theme,
}: {
  label: string;
  options: ReadonlyArray<readonly [T, string]>;
  value: T;
  onChange: (value: T) => void;
  theme: Theme;
}) {
  const active = value !== "all";
  return (
    <label style={{ display: "grid", gap: "0.3rem", width: "min(100%, 14.5rem)", fontSize: "0.8rem" }}>
      <span>{label}</span>
      <select
        value={value}
        onChange={(event) => {
          const next = options.find(([id]) => id === event.currentTarget.value);
          if (next) onChange(next[0]);
        }}
        style={{
          maxWidth: "100%",
          minHeight: 32,
          padding: "0.25rem 0.5rem",
          font: "inherit",
          color: active ? theme.toggleActiveText : theme.body,
          backgroundColor: active ? theme.toggleActiveBg : theme.panelBg,
          border: `1px solid ${active ? theme.toggleActiveBorder : theme.panelBorder}`,
          borderRadius: 4,
          cursor: "pointer",
        }}
      >
        {options.map(([id, name]) => (
          <option key={id} value={id} disabled={id === "multiple"}>
            {name}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function LensIndexPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigationType = useNavigationType();
  const urlSyncId = useId();
  const requestedViewMode = useMemo(() => parseLensIndexViewMode(searchParams.toString()), [searchParams]);
  const catalogEntries = useMemo(() => catalogEntriesForView(requestedViewMode), [requestedViewMode]);
  const filterBounds = useMemo(
    () => (requestedViewMode === "visible" ? FILTER_BOUNDS : buildFilterBounds(catalogEntries)),
    [catalogEntries, requestedViewMode],
  );
  const makerOptions = useMemo(() => buildMakerOptions(catalogEntries), [catalogEntries]);
  const patentDecadeOptions = useMemo(
    () => buildPatentDecadeOptions(catalogEntries, filterBounds),
    [catalogEntries, filterBounds],
  );
  const mountOptions = useMemo(() => buildMountOptions(catalogEntries), [catalogEntries]);
  const imageFormatOptions = useMemo(() => buildImageFormatOptions(catalogEntries), [catalogEntries]);
  const sourceKindOptions = useMemo(() => buildSourceKindOptions(catalogEntries), [catalogEntries]);
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
  const [filterFromUrl, setFilterFromUrl] = useState(parsedUrlState.customFilter);
  const [previousSearch, setPreviousSearch] = useState(location.search);
  if (location.search !== previousSearch) {
    setPreviousSearch(location.search);
    // A replacement from this page can arrive after another edit has already changed the controls.
    const ownReplacement = navigationType === "REPLACE" && location.state?.lensIndexUrlSync === urlSyncId;
    if (!ownReplacement) {
      setGroupMode(parsedUrlState.groupMode);
      setFilterOpen(parsedUrlState.filterOpen);
      setFilterFromUrl(parsedUrlState.customFilter);
    }
  }
  const yearDir: "asc" | "desc" = groupMode === "year-desc" ? "desc" : "asc";
  const totalLenses = catalogEntries.length;
  const publicLensCount = SUMMARY_KEYS.length;
  const { theme: t, themeMode, highContrast, toggleTheme, toggleHC } = usePageThemeToggle();
  const seoDescription = `Browse ${publicLensCount} lens cross-section diagrams from Nikon, Carl Zeiss, Ricoh, Voigtländer, and more, with ray tracing and optical analysis.`;
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
    clearSourceKindSelection,
    selectSourceKind,
    setProductionMatch,
    toggleSourceKind,
    applyNumericField,
    handleNumericInputChange,
    commitNumericInput,
    handleNumericInputKeyDown,
  } = useLensIndexFilters({
    entries: catalogEntries,
    bounds: filterBounds,
    initialFilter: filterFromUrl,
  });
  const multipleSources = customFilter.sourceKinds.length > 1;
  const toolbarSources: ReadonlyArray<readonly [string, string]> = [
    ["all", "All sources"],
    ...Object.entries(SOURCE_KIND_LABELS),
    ...(multipleSources ? [["multiple", "Multiple sources"] as const] : []),
  ];
  const makerGroups = useMemo(() => groupByMaker(filteredEntries), [filteredEntries]);
  const inventorGroups = useMemo(() => groupByInventor(filteredEntries), [filteredEntries]);
  const assigneeGroups = useMemo(() => groupByAssignee(filteredEntries), [filteredEntries]);
  const focalSections = useMemo(() => groupByFocalLength(filteredEntries), [filteredEntries]);
  const yearGroups = useMemo(() => groupByPatentYear(filteredEntries, yearDir), [filteredEntries, yearDir]);
  const mountGroups = useMemo(() => groupByMount(filteredEntries), [filteredEntries]);
  const imageFormatGroups = useMemo(() => groupByImageFormat(filteredEntries), [filteredEntries]);
  // Group-navigation sidebar: the groups of the currently-selected grouping, as in-page anchor links.
  // Derived from the same filtered/grouped data, so it tracks both the grouping selector and filters.
  const groupNav = useMemo(() => {
    if (groupMode === "maker")
      return {
        title: "Makers",
        items: makerGroups.map((g) => ({
          id: g.slug,
          label: `${g.display} (${g.lenses.length})`,
          to: `#${makerGroupAnchorId(g.slug)}`,
        })),
      };
    if (groupMode === "author")
      return {
        title: "Inventors",
        items: inventorGroups.map((g) => ({
          id: g.id,
          label: `${g.label} (${g.lenses.length})`,
          to: `#${patentPartyGroupAnchorId("author", g.id)}`,
        })),
      };
    if (groupMode === "assignee")
      return {
        title: "Assignees",
        items: assigneeGroups.map((g) => ({
          id: g.id,
          label: `${g.label} (${g.lenses.length})`,
          to: `#${patentPartyGroupAnchorId("assignee", g.id)}`,
        })),
      };
    if (groupMode === "mount")
      return {
        title: "Mounts",
        items: mountGroups.map((g) => ({
          id: String(g.id),
          label: `${g.label} (${g.lenses.length})`,
          to: `#${mountGroupAnchorId(g.id)}`,
        })),
      };
    if (groupMode === "format")
      return {
        title: "Formats",
        items: imageFormatGroups.map((g) => ({
          id: String(g.id),
          label: `${g.label} (${g.lenses.length})`,
          to: `#${formatGroupAnchorId(g.id)}`,
        })),
      };
    if (groupMode === "focal")
      return {
        title: "Focal lengths",
        items: focalSections.flatMap((s) =>
          s.subGroups.map((sg) => ({
            id: `${s.label}-${sg.label}`,
            label: `${s.label} · ${sg.label}`,
            to: `#${focalSubGroupAnchorId(s.label, sg.label)}`,
          })),
        ),
      };
    return {
      title: "Patent years",
      items: yearGroups.map((g) => ({
        id: g.decade,
        label: `${g.decade} (${g.lenses.length})`,
        to: `#${yearGroupAnchorId(g.decade)}`,
      })),
    };
  }, [
    groupMode,
    makerGroups,
    inventorGroups,
    assigneeGroups,
    mountGroups,
    imageFormatGroups,
    focalSections,
    yearGroups,
  ]);
  const currentLensIndexSearch = serializeLensIndexUrlState({
    viewMode: parsedUrlState.viewMode,
    groupMode,
    filterOpen,
    customFilter,
    bounds: filterBounds,
  });
  const returnTo = currentLensIndexSearch ? `/lenses/?${currentLensIndexSearch}` : "/lenses/";
  const hrefForLens = useCallback(
    (lensKey: string, context?: LensLibraryBreadcrumbContext) => lensLinkFromLibrary(lensKey, returnTo, context),
    [returnTo],
  );

  useEffect(() => {
    const nextSearch = currentLensIndexSearch;
    if (nextSearch !== searchParams.toString()) {
      setSearchParams(nextSearch, { replace: true, state: { lensIndexUrlSync: urlSyncId } });
    }
  }, [currentLensIndexSearch, searchParams, setSearchParams, urlSyncId]);

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
            name: "Camera Lens Cross-Section Library",
            description: seoDescription,
            url: `${SITE_URL}/lenses`,
            route: "/lenses",
          }),
          itemListJsonLd({
            name: "Lens Library",
            url: `${SITE_URL}/lenses`,
            items: SUMMARY_KEYS.map((key) => ({
              name: LENS_SUMMARIES[key].name,
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
            to="/mounts/"
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
            to="/formats/"
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
          <a
            href={LENS_FEED_PATH}
            type="application/rss+xml"
            style={{
              color: t.descLinkColor,
              textDecoration: "none",
              border: `1px solid ${t.panelBorder}`,
              borderRadius: 4,
              padding: "0.35rem 0.65rem",
              fontSize: "0.8rem",
            }}
          >
            Subscribe to New Lenses
          </a>
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
          <p role="status" style={{ fontSize: "0.875rem", color: t.muted, margin: 0 }}>
            {textRun(
              "Showing ",
              filteredEntries.length,
              " of ",
              totalLenses,
              " interactive optical cross-section diagrams.",
            )}
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
              style={toggleButtonStyle(groupMode === "author")}
              onClick={() => setGroupMode("author")}
            >
              By Inventor
            </button>
            <button
              type="button"
              style={toggleButtonStyle(groupMode === "assignee")}
              onClick={() => setGroupMode("assignee")}
            >
              By Assignee
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
          </div>
          <div
            role="group"
            aria-label="Library filters"
            style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1rem", alignItems: "end", width: "100%" }}
          >
            <LibraryFilterSelect
              label="Build source"
              options={toolbarSources}
              value={multipleSources ? "multiple" : (customFilter.sourceKinds[0] ?? "all")}
              onChange={(value) => {
                if (isLensSourceKind(value)) selectSourceKind(value);
                else if (value === "all") clearSourceKindSelection();
              }}
              theme={t}
            />
            <LibraryFilterSelect
              label="Production match"
              options={PRODUCTION_MATCH_OPTIONS}
              value={customFilter.productionMatch}
              onChange={setProductionMatch}
              theme={t}
            />
            <button
              type="button"
              style={{
                ...toggleButtonStyle(filterOpen || hasActivePanelFilters(customFilter, filterBounds)),
                minHeight: 32,
              }}
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
            patentDecadeOptions={patentDecadeOptions}
            mountOptions={mountOptions}
            imageFormatOptions={imageFormatOptions}
            sourceKindOptions={sourceKindOptions}
            filterInputValues={filterInputValues}
            activeFilters={activeFilters}
            onClearFilters={clearFilters}
            onProductionMatchChange={setProductionMatch}
            onClearMakerSelection={clearMakerSelection}
            onToggleMaker={toggleMaker}
            onClearMountSelection={clearMountSelection}
            onToggleMount={toggleMount}
            onClearImageFormatSelection={clearImageFormatSelection}
            onToggleImageFormat={toggleImageFormat}
            onClearSourceKindSelection={clearSourceKindSelection}
            onToggleSourceKind={toggleSourceKind}
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
            <p style={{ marginTop: 0, marginBottom: "0.75rem" }}>No lenses match the current filters.</p>
            <button type="button" style={toggleButtonStyle(true)} onClick={clearFilters}>
              Reset Filters
            </button>
          </div>
        )}

        <SidebarLayout
          sidebar={
            groupNav.items.length > 0 ? (
              <LinkListSidebar
                title={groupNav.title}
                ariaLabel={`Jump to ${groupNav.title.toLowerCase()}`}
                items={groupNav.items}
                theme={t}
              />
            ) : null
          }
        >
          <LensIndexResults
            groupMode={groupMode}
            makerGroups={makerGroups}
            inventorGroups={inventorGroups}
            assigneeGroups={assigneeGroups}
            focalSections={focalSections}
            yearGroups={yearGroups}
            mountGroups={mountGroups}
            imageFormatGroups={imageFormatGroups}
            theme={t}
            hrefForLens={hrefForLens}
          />
        </SidebarLayout>
      </div>
    </div>
  );
}
