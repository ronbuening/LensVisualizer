/**
 * LensIndexResults — grouped lens-list sections for the /lenses page.
 *
 * The route decides which grouping mode is active; this module renders the
 * matching presentational section and keeps the link/heading templates in one
 * place so the route stays focused on state and SEO wiring.
 */

import { Link } from "react-router";
import { getMakerDetails } from "../../utils/makerDetails.js";
import { LENS_LINK_BASE_STYLE, SECTION_HEADING_BASE_STYLE } from "./styles.js";
import type { GroupMode, MakerGroup, PrimeZoomSection, YearGroup } from "./types.js";
import type { Theme } from "../../types/theme.js";

function LensEntryLink({
  lensKey,
  text,
  meta,
  theme,
}: {
  lensKey: string;
  text: string;
  meta: string | null;
  theme: Theme;
}) {
  return (
    <Link key={lensKey} to={`/lens/${lensKey}`} style={{ ...LENS_LINK_BASE_STYLE, color: theme.descLinkColor }}>
      {text}
      {meta && <span style={{ color: theme.label, fontSize: "0.75rem", marginLeft: "0.5rem" }}>— {meta}</span>}
    </Link>
  );
}

function MakerSections({ groups, theme }: { groups: MakerGroup[]; theme: Theme }) {
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
              />
            ))}
          </section>
        );
      })}
    </>
  );
}

function FocalSections({ sections, theme }: { sections: PrimeZoomSection[]; theme: Theme }) {
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
                />
              ))}
            </div>
          ))}
        </section>
      ))}
    </>
  );
}

function PatentYearSections({ groups, theme }: { groups: YearGroup[]; theme: Theme }) {
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
  theme,
}: {
  groupMode: GroupMode;
  makerGroups: MakerGroup[];
  focalSections: PrimeZoomSection[];
  yearGroups: YearGroup[];
  theme: Theme;
}) {
  if (groupMode === "maker") return <MakerSections groups={makerGroups} theme={theme} />;
  if (groupMode === "focal") return <FocalSections sections={focalSections} theme={theme} />;
  return <PatentYearSections groups={yearGroups} theme={theme} />;
}
