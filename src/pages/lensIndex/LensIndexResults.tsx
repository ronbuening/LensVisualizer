/**
 * LensIndexResults — grouped lens-list sections for the /lenses page.
 *
 * The route decides which grouping mode is active; this module renders the
 * matching presentational section and keeps the link/heading templates in one
 * place so the route stays focused on state and SEO wiring.
 */

import { Link } from "react-router";
import LensEntryLink from "../../components/content/LensEntryLink.js";
import { getMakerDetails } from "../../utils/catalog/makerDetails.js";
import { isImageFormatId, isLensMountId } from "../../utils/catalog/lensTaxonomy.js";
import type { LensLibraryBreadcrumbContext, LensLinkTarget } from "./clusterLinks.js";
import { canonicalPagePath } from "../../utils/seo/siteUrls.js";
import { SECTION_HEADING_BASE_STYLE } from "./styles.js";
import { STICKY_NAV_SCROLL_MARGIN } from "../../utils/style/pageStyles.js";
import {
  focalSectionAnchorId,
  focalSubGroupAnchorId,
  formatGroupAnchorId,
  makerGroupAnchorId,
  mountGroupAnchorId,
  patentPartyGroupAnchorId,
  yearGroupAnchorId,
} from "./groupAnchors.js";
import type {
  GroupMode,
  ImageFormatGroup,
  MakerGroup,
  MountGroup,
  PatentPartyGroup,
  PrimeZoomSection,
  YearGroup,
} from "./types.js";
import type { Theme } from "../../types/theme.js";
import type { PatentPartyRole } from "../../types/catalog.js";
import { countSuffix } from "../../utils/style/styles.js";

function MakerSections({
  groups,
  theme,
  hrefForLens,
}: {
  groups: MakerGroup[];
  theme: Theme;
  hrefForLens: (lensKey: string, context?: LensLibraryBreadcrumbContext) => LensLinkTarget;
}) {
  const presentationForMaker = (entry: MakerGroup["lenses"][number], makerSlug: string) => {
    const associations = entry.makerAssociations.filter((association) => association.maker.slug === makerSlug);
    const canonical = associations.find((association) => association.role === "canonical");
    const aliases = associations.filter((association) => association.role === "alias");
    if (canonical) {
      return {
        text: canonical.displayName,
        meta: aliases.length > 0 ? `Also sold as ${aliases.map((alias) => alias.displayName).join(", ")}` : undefined,
      };
    }
    if (aliases.length > 0) {
      return { text: aliases[0].displayName, meta: `Alias of ${entry.data.name}` };
    }
    const manufacturer = associations.find((association) => association.role === "manufacturer");
    return {
      text: entry.data.name,
      meta: manufacturer ? `Manufactured by ${manufacturer.entity ?? manufacturer.maker.display}` : undefined,
    };
  };

  return (
    <>
      {groups.map((group) => {
        const details = getMakerDetails(group.slug);
        return (
          <section
            key={group.slug}
            id={makerGroupAnchorId(group.slug)}
            style={{ scrollMarginTop: STICKY_NAV_SCROLL_MARGIN }}
          >
            <h2 style={{ ...SECTION_HEADING_BASE_STYLE, borderBottom: `1px solid ${theme.panelBorder}` }}>
              <Link to={`/makers/${group.slug}/`} style={{ color: "inherit", textDecoration: "none" }}>
                {group.display}
              </Link>
              <span style={countSuffix(theme)}>({group.lenses.length})</span>
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
            {group.lenses.map((entry) => {
              const presentation = presentationForMaker(entry, group.slug);
              return (
                <LensEntryLink
                  key={entry.key}
                  lensKey={entry.key}
                  text={presentation.text}
                  meta={
                    presentation.meta ??
                    (entry.data.specs && entry.data.specs.length > 0 ? entry.data.specs.slice(0, 2).join(", ") : null)
                  }
                  theme={theme}
                  hrefForLens={hrefForLens}
                />
              );
            })}
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
  hrefForLens: (lensKey: string, context?: LensLibraryBreadcrumbContext) => LensLinkTarget;
}) {
  return (
    <>
      {sections.map((section) => (
        <section
          key={section.label}
          id={focalSectionAnchorId(section.label)}
          style={{ scrollMarginTop: STICKY_NAV_SCROLL_MARGIN }}
        >
          <h2
            style={{
              ...SECTION_HEADING_BASE_STYLE,
              fontSize: "1.25rem",
              borderBottom: `2px solid ${theme.panelBorder}`,
              marginTop: "2rem",
            }}
          >
            {section.label}
            <span style={countSuffix(theme)}>
              ({section.subGroups.reduce((count, group) => count + group.lenses.length, 0)})
            </span>
          </h2>
          {section.subGroups.map((group) => (
            <div
              key={group.label}
              id={focalSubGroupAnchorId(section.label, group.label)}
              style={{ marginBottom: "1rem", scrollMarginTop: STICKY_NAV_SCROLL_MARGIN }}
            >
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
                <span style={countSuffix(theme)}>({group.lenses.length})</span>
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

function PatentPartySections({
  groups,
  role,
  theme,
  hrefForLens,
}: {
  groups: PatentPartyGroup[];
  role: PatentPartyRole;
  theme: Theme;
  hrefForLens: (lensKey: string, context?: LensLibraryBreadcrumbContext) => LensLinkTarget;
}) {
  return (
    <>
      {groups.map((group) => (
        <section
          key={group.id}
          id={patentPartyGroupAnchorId(role, group.id)}
          style={{ scrollMarginTop: STICKY_NAV_SCROLL_MARGIN }}
        >
          <h2 style={{ ...SECTION_HEADING_BASE_STYLE, borderBottom: `1px solid ${theme.panelBorder}` }}>
            {group.label}
            <span style={countSuffix(theme)}>({group.lenses.length})</span>
          </h2>
          {group.lenses.map((entry) => (
            <LensEntryLink
              key={`${group.id}-${entry.key}`}
              lensKey={entry.key}
              text={entry.data.name}
              meta={entry.data.patentNumber ?? (entry.data.patentYear ? String(entry.data.patentYear) : null)}
              theme={theme}
              hrefForLens={hrefForLens}
            />
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
  hrefForLens: (lensKey: string, context?: LensLibraryBreadcrumbContext) => LensLinkTarget;
}) {
  return (
    <>
      {groups.map((group) => (
        <section
          key={group.decade}
          id={yearGroupAnchorId(group.decade)}
          style={{ scrollMarginTop: STICKY_NAV_SCROLL_MARGIN }}
        >
          <h2 style={{ ...SECTION_HEADING_BASE_STYLE, borderBottom: `1px solid ${theme.panelBorder}` }}>
            {group.decade}
            <span style={countSuffix(theme)}>({group.lenses.length})</span>
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
  hrefForLens: (lensKey: string, context?: LensLibraryBreadcrumbContext) => LensLinkTarget;
}) {
  return (
    <>
      {groups.map((group) => (
        <section key={group.id} id={mountGroupAnchorId(group.id)} style={{ scrollMarginTop: STICKY_NAV_SCROLL_MARGIN }}>
          <h2 style={{ ...SECTION_HEADING_BASE_STYLE, borderBottom: `1px solid ${theme.panelBorder}` }}>
            {isLensMountId(group.id) ? (
              <Link to={`/mounts/${group.id}/`} style={{ color: "inherit", textDecoration: "none" }}>
                {group.label}
              </Link>
            ) : (
              group.label
            )}
            <span style={countSuffix(theme)}>({group.lenses.length})</span>
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
  hrefForLens: (lensKey: string, context?: LensLibraryBreadcrumbContext) => LensLinkTarget;
}) {
  return (
    <>
      {groups.map((group) => (
        <section
          key={group.id}
          id={formatGroupAnchorId(group.id)}
          style={{ scrollMarginTop: STICKY_NAV_SCROLL_MARGIN }}
        >
          <h2 style={{ ...SECTION_HEADING_BASE_STYLE, borderBottom: `1px solid ${theme.panelBorder}` }}>
            {isImageFormatId(group.id) ? (
              <Link to={`/formats/${group.id}/`} style={{ color: "inherit", textDecoration: "none" }}>
                {group.label}
              </Link>
            ) : (
              group.label
            )}
            <span style={countSuffix(theme)}>({group.lenses.length})</span>
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
  inventorGroups,
  assigneeGroups,
  focalSections,
  yearGroups,
  mountGroups,
  imageFormatGroups,
  theme,
  hrefForLens = (lensKey) => ({ to: canonicalPagePath(`/lens/${lensKey}`) }),
}: {
  groupMode: GroupMode;
  makerGroups: MakerGroup[];
  inventorGroups: PatentPartyGroup[];
  assigneeGroups: PatentPartyGroup[];
  focalSections: PrimeZoomSection[];
  yearGroups: YearGroup[];
  mountGroups: MountGroup[];
  imageFormatGroups: ImageFormatGroup[];
  theme: Theme;
  hrefForLens?: (lensKey: string, context?: LensLibraryBreadcrumbContext) => LensLinkTarget;
}) {
  if (groupMode === "maker") return <MakerSections groups={makerGroups} theme={theme} hrefForLens={hrefForLens} />;
  if (groupMode === "author") {
    return <PatentPartySections groups={inventorGroups} role="author" theme={theme} hrefForLens={hrefForLens} />;
  }
  if (groupMode === "assignee") {
    return <PatentPartySections groups={assigneeGroups} role="assignee" theme={theme} hrefForLens={hrefForLens} />;
  }
  if (groupMode === "focal") return <FocalSections sections={focalSections} theme={theme} hrefForLens={hrefForLens} />;
  if (groupMode === "mount") return <MountSections groups={mountGroups} theme={theme} hrefForLens={hrefForLens} />;
  if (groupMode === "format") {
    return <ImageFormatSections groups={imageFormatGroups} theme={theme} hrefForLens={hrefForLens} />;
  }
  return <PatentYearSections groups={yearGroups} theme={theme} hrefForLens={hrefForLens} />;
}
