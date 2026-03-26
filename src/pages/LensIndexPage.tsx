/**
 * Lens index page — /lenses
 *
 * Browsable list of all lenses grouped by maker or focal length,
 * with crawlable <a> links.
 */

import { useState } from "react";
import { Link } from "react-router";
import SEOHead from "../components/SEOHead.js";
import PageNavBar from "../components/layout/PageNavBar.js";
import { LENS_CATALOG, CATALOG_KEYS } from "../utils/lensCatalog.js";
import { deriveMaker, SITE_NAME, SITE_URL } from "../utils/lensMetadata.js";
import { getMakerDetails } from "../utils/makerDetails.js";
import { usePageThemeToggle } from "../utils/usePageThemeToggle.js";
import type { LensData } from "../types/optics.js";

type GroupMode = "maker" | "focal";

interface MakerGroup {
  display: string;
  slug: string;
  lenses: { key: string; data: LensData }[];
}

interface FocalSubGroup {
  label: string;
  lenses: { key: string; data: LensData }[];
}

interface PrimeZoomSection {
  label: string; // "Primes" or "Zooms"
  subGroups: FocalSubGroup[];
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
function groupingFl(data: LensData): number | null {
  const fl = data.focalLengthMarketing;
  if (fl === undefined || fl === null) return null;
  if (Array.isArray(fl)) return Math.min(fl[0], fl[1]);
  return fl;
}

/** Returns true if the lens is a zoom (focalLengthMarketing is a range). */
function isZoomLens(data: LensData): boolean {
  return Array.isArray(data.focalLengthMarketing);
}

function groupByMaker(): MakerGroup[] {
  const groups = new Map<string, MakerGroup>();
  for (const key of CATALOG_KEYS) {
    const data = LENS_CATALOG[key];
    const maker = deriveMaker(data.name, data.maker);
    if (!groups.has(maker.slug)) {
      groups.set(maker.slug, { display: maker.display, slug: maker.slug, lenses: [] });
    }
    groups.get(maker.slug)!.lenses.push({ key, data });
  }
  return Array.from(groups.values()).sort((a, b) => a.display.localeCompare(b.display));
}

function groupByFocalLength(): PrimeZoomSection[] {
  const primeBuckets = new Map<string, { key: string; data: LensData }[]>();
  const zoomBuckets = new Map<string, { key: string; data: LensData }[]>();

  for (const key of CATALOG_KEYS) {
    const data = LENS_CATALOG[key];
    const fl = groupingFl(data);
    const label = fl !== null ? focalBucketLabel(fl) : "Unknown";
    const buckets = isZoomLens(data) ? zoomBuckets : primeBuckets;
    if (!buckets.has(label)) buckets.set(label, []);
    buckets.get(label)!.push({ key, data });
  }

  const toSections = (buckets: Map<string, { key: string; data: LensData }[]>): FocalSubGroup[] =>
    FOCAL_BUCKETS.map(({ label }) => ({ label, lenses: buckets.get(label) ?? [] })).filter((g) => g.lenses.length > 0);

  const sections: PrimeZoomSection[] = [];
  const primeSubs = toSections(primeBuckets);
  if (primeSubs.length > 0) sections.push({ label: "Primes", subGroups: primeSubs });
  const zoomSubs = toSections(zoomBuckets);
  if (zoomSubs.length > 0) sections.push({ label: "Zooms", subGroups: zoomSubs });

  return sections;
}

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
  const makerGroups = groupByMaker();
  const focalSections = groupByFocalLength();
  const totalLenses = CATALOG_KEYS.length;
  const { theme: t, themeMode, highContrast, toggleTheme, toggleHC } = usePageThemeToggle();

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
        description={`Browse ${totalLenses} interactive lens cross-section diagrams from Nikon, Carl Zeiss, Ricoh, Voigtländer, and more. Each lens features ray tracing, element inspection, and aberration analysis.`}
        canonicalURL={`${SITE_URL}/lenses`}
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
            marginBottom: "2rem",
          }}
        >
          <p style={{ fontSize: "0.875rem", color: t.muted, margin: 0 }}>
            {totalLenses} interactive optical cross-section diagrams built from patent data.
          </p>
          <div style={{ display: "flex", gap: "0.375rem", flexShrink: 0, marginLeft: "1rem" }}>
            <button style={toggleButtonStyle(groupMode === "maker")} onClick={() => setGroupMode("maker")}>
              By Maker
            </button>
            <button style={toggleButtonStyle(groupMode === "focal")} onClick={() => setGroupMode("focal")}>
              By Focal Length
            </button>
          </div>
        </div>

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
                {group.lenses.map(({ key, data }) => (
                  <Link key={key} to={`/lens/${key}`} style={{ ...LENS_LINK_BASE_STYLE, color: t.descLinkColor }}>
                    {data.name}
                    {data.specs && data.specs.length > 0 && (
                      <span style={{ color: t.label, fontSize: "0.75rem", marginLeft: "0.5rem" }}>
                        — {data.specs.slice(0, 2).join(", ")}
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
                  {sub.lenses.map(({ key, data }) => (
                    <Link key={key} to={`/lens/${key}`} style={{ ...LENS_LINK_BASE_STYLE, color: t.descLinkColor }}>
                      {data.name}
                      {data.specs && data.specs.length > 0 && (
                        <span style={{ color: t.label, fontSize: "0.75rem", marginLeft: "0.5rem" }}>
                          — {data.specs.slice(0, 2).join(", ")}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              ))}
            </section>
          ))}
      </div>
    </div>
  );
}
