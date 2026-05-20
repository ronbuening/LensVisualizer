/**
 * LensIndexResults — grouped lens-list sections for the /lenses page.
 *
 * The route decides which grouping mode is active; this module renders the
 * matching presentational section and keeps the link/heading templates in one
 * place so the route stays focused on state and SEO wiring.
 */

import { Link } from "react-router";
import { getMakerDetails } from "../../utils/catalog/makerDetails.js";
import { isImageFormatId, isLensMountId } from "../../utils/catalog/lensTaxonomy.js";
import type { LensLibraryBreadcrumbContext } from "./clusterLinks.js";
import { LENS_LINK_BASE_STYLE, SECTION_HEADING_BASE_STYLE } from "./styles.js";
import type { GroupMode, ImageFormatGroup, MakerGroup, MountGroup, PrimeZoomSection, YearGroup } from "./types.js";
import type { Theme } from "../../types/theme.js";

function LensEntryLink({
  lensKey,
  text,
  meta,
  theme,
  hrefForLens,
}: {
  lensKey: string;
  text: string;
  meta: string | null;
  theme: Theme;
  hrefForLens: (lensKey: string, context?: LensLibraryBreadcrumbContext) => string;
}) {
  return (
    <Link key={lensKey} to={hrefForLens(lensKey)} style={{ ...LENS_LINK_BASE_STYLE, color: theme.descLinkColor }}>
      {text}
      {meta && <span style={{ color: theme.label, fontSize: "0.75rem", marginLeft: "0.5rem" }}>— {meta}</span>}
    </Link>
  );
}

function MakerSections({
  groups,
  theme,
  hrefForLens,
}: {
  groups: MakerGroup[];
  theme: Theme;
  hrefForLens: (lensKey: string, context?: LensLibraryBreadcrumbContext) => string;
}) {
  return (
    <>
      {groups.map((group) => {
        const details = getMakerDetails(group.slug);
        return (
          <section key={group.slug}>
            <h2 style={{ ...SECTION_HEADING_BASE_STYLE, borderBottom: `1px solid ${theme.panelBorder}` }}>
              <Link to={`/makers/${group.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                {group.display}
              </Link>
              <span style={{ color: theme.label, fontSize: "0.75rem", marginLeft: "0.5rem", fontWeight: 400 }}>
                ({group.lenses.length})
              </span>
            </h2>
            {details && (
              <p
                style={{
                  fontSize: "0.8rem",
                  color: theme.muted,
                  lineHeight: 1.4,
                  marginTop: "-0.5rem",
                  marginBottom: "0.75rem",
                }}
              >
                {details.summary}
              </p>
            )}
            {group.lenses.map((entry) => (
              <LensEntryLink
                key={entry.key}
                lensKey={entry.key}
                text={entry.data.name}
                meta={entry.data.specs && entry.data.specs.length > 0 ? entry.data.specs.slice(0, 2).join(", ") : null}
                theme={theme}
                hrefForLens={hrefForLens}
              />
            ))}
          </section>
        );
      })}
    </>
  );
}

function FocalSections({
  sections,
  theme,
  hrefForLens,
}: {
  sections: PrimeZoomSection[];
  theme: Theme;
  hrefForLens: (lensKey: string, context?: LensLibraryBreadcrumbContext) => string;
}) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.label}>
          <h2
            style={{
              ...SECTION_HEADING_BASE_STYLE,
              fontSize: "1.25rem",
              borderBottom: `2px solid ${theme.panelBorder}`,
              marginTop: "2rem",
            }}
          >
            {section.label}
            <span style={{ color: theme.label, fontSize: "0.75rem", marginLeft: "0.5rem", fontWeight: 400 }}>
              ({section.subGroups.reduce((count, group) => count + group.lenses.length, 0)})
            </span>
          </h2>
          {section.subGroups.map((group) => (
            <div key={group.label} style={{ marginBottom: "1rem" }}>
              <h3
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: theme.muted,
                  marginTop: "1rem",
                  marginBottom: "0.5rem",
                }}
              >
                {group.label}
                <span style={{ color: theme.label, fontSize: "0.75rem", marginLeft: "0.5rem", fontWeight: 400 }}>
                  ({group.lenses.length})
                </span>
              </h3>
              {group.lenses.map((entry) => (
                <LensEntryLink
                  key={entry.key}
                  lensKey={entry.key}
                  text={entry.data.name}
                  meta={
                    entry.data.specs && entry.data.specs.length > 0 ? entry.data.specs.slice(0, 2).join(", ") : null
                  }
                  theme={theme}
                  hrefForLens={hrefForLens}
                />
              ))}
            </div>
          ))}
        </section>
      ))}
    </>
  );
}

function PatentYearSections({
  groups,
  theme,
  hrefForLens,
}: {
  groups: YearGroup[];
  theme: Theme;
  hrefForLens: (lensKey: string, context?: LensLibraryBreadcrumbContext) => string;
}) {
  return (
    <>
      {groups.map((group) => (
        <section key={group.decade}>
          <h2 style={{ ...SECTION_HEADING_BASE_STYLE, borderBottom: `1px solid ${theme.panelBorder}` }}>
            {group.decade}
            <span style={{ color: theme.label, fontSize: "0.75rem", marginLeft: "0.5rem", fontWeight: 400 }}>
              ({group.lenses.length})
            </span>
          </h2>
          {group.lenses.map((entry) => (
            <LensEntryLink
              key={entry.key}
              lensKey={entry.key}
              text={entry.data.name}
              meta={entry.data.patentYear !== undefined ? String(entry.data.patentYear) : null}
              theme={theme}
              hrefForLens={hrefForLens}
            />
          ))}
        </section>
      ))}
    </>
  );
}

function MountSections({
  groups,
  theme,
  hrefForLens,
}: {
  groups: MountGroup[];
  theme: Theme;
  hrefForLens: (lensKey: string, context?: LensLibraryBreadcrumbContext) => string;
}) {
  return (
    <>
      {groups.map((group) => (
        <section key={group.id}>
          <h2 style={{ ...SECTION_HEADING_BASE_STYLE, borderBottom: `1px solid ${theme.panelBorder}` }}>
            {isLensMountId(group.id) ? (
              <Link to={`/mounts/${group.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                {group.label}
              </Link>
            ) : (
              group.label
            )}
            <span style={{ color: theme.label, fontSize: "0.75rem", marginLeft: "0.5rem", fontWeight: 400 }}>
              ({group.lenses.length})
            </span>
          </h2>
          {group.lenses.map((entry) => (
            <LensEntryLink
              key={`${group.id}-${entry.key}`}
              lensKey={entry.key}
              text={entry.data.name}
              meta={entry.data.specs && entry.data.specs.length > 0 ? entry.data.specs.slice(0, 2).join(", ") : null}
              theme={theme}
              hrefForLens={(lensKey) =>
                hrefForLens(lensKey, isLensMountId(group.id) ? { type: "mount", id: group.id } : undefined)
              }
            />
          ))}
        </section>
      ))}
    </>
  );
}

function ImageFormatSections({
  groups,
  theme,
  hrefForLens,
}: {
  groups: ImageFormatGroup[];
  theme: Theme;
  hrefForLens: (lensKey: string, context?: LensLibraryBreadcrumbContext) => string;
}) {
  return (
    <>
      {groups.map((group) => (
        <section key={group.id}>
          <h2 style={{ ...SECTION_HEADING_BASE_STYLE, borderBottom: `1px solid ${theme.panelBorder}` }}>
            {isImageFormatId(group.id) ? (
              <Link to={`/formats/${group.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                {group.label}
              </Link>
            ) : (
              group.label
            )}
            <span style={{ color: theme.label, fontSize: "0.75rem", marginLeft: "0.5rem", fontWeight: 400 }}>
              ({group.lenses.length})
            </span>
          </h2>
          {group.lenses.map((entry) => (
            <LensEntryLink
              key={`${group.id}-${entry.key}`}
              lensKey={entry.key}
              text={entry.data.name}
              meta={entry.lensMounts.length > 0 ? entry.lensMounts.map((mount) => mount.label).join(", ") : null}
              theme={theme}
              hrefForLens={(lensKey) =>
                hrefForLens(lensKey, isImageFormatId(group.id) ? { type: "format", id: group.id } : undefined)
              }
            />
          ))}
        </section>
      ))}
    </>
  );
}

export default function LensIndexResults({
  groupMode,
  makerGroups,
  focalSections,
  yearGroups,
  mountGroups,
  imageFormatGroups,
  theme,
  hrefForLens = (lensKey) => `/lens/${lensKey}`,
}: {
  groupMode: GroupMode;
  makerGroups: MakerGroup[];
  focalSections: PrimeZoomSection[];
  yearGroups: YearGroup[];
  mountGroups: MountGroup[];
  imageFormatGroups: ImageFormatGroup[];
  theme: Theme;
  hrefForLens?: (lensKey: string, context?: LensLibraryBreadcrumbContext) => string;
}) {
  if (groupMode === "maker") return <MakerSections groups={makerGroups} theme={theme} hrefForLens={hrefForLens} />;
  if (groupMode === "focal") return <FocalSections sections={focalSections} theme={theme} hrefForLens={hrefForLens} />;
  if (groupMode === "mount") return <MountSections groups={mountGroups} theme={theme} hrefForLens={hrefForLens} />;
  if (groupMode === "format") {
    return <ImageFormatSections groups={imageFormatGroups} theme={theme} hrefForLens={hrefForLens} />;
  }
  return <PatentYearSections groups={yearGroups} theme={theme} hrefForLens={hrefForLens} />;
}
