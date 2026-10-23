/**
 * Teleconverters index page — /teleconverters
 *
 * Lists every published detachable rear teleconverter in the catalog. A converter has no diagram of its own; each
 * entry links to its page, where a host lens is chosen to mount it on. Hidden test models are not listed; while the
 * catalog holds nothing else the page is not built and only renders, unindexed, from a hand-typed URL.
 */

import { useMemo } from "react";
import { Link, useSearchParams } from "react-router";
import LinkListSidebar from "../components/content/LinkListSidebar.js";
import SidebarLayout from "../components/content/SidebarLayout.js";
import SEOHead from "../components/SEOHead.js";
import StaticPageShell from "../components/layout/StaticPageShell.js";
import { SITE_NAME, SITE_URL } from "../utils/catalog/lensMetadata.js";
import { IMAGE_FORMAT_BY_ID, LENS_MOUNT_BY_ID } from "../utils/catalog/lensTaxonomy.js";
import { TELECONVERTER_SUMMARY_LIST } from "../utils/catalog/teleconverterSummaries.js";
import { collectionPageJsonLd, itemListJsonLd } from "../utils/seo/structuredData.js";
import { H1_STYLE, SECTION_HEADING_BASE_STYLE, STICKY_NAV_SCROLL_MARGIN } from "../utils/style/pageStyles.js";
import { countSuffix } from "../utils/style/styles.js";
import { pluralize } from "../utils/text.js";
import { groupTeleconverters, parseTeleconverterGroupMode, TELECONVERTER_GROUP_OPTIONS } from "./teleconverterIndex.js";

const SEO_DESCRIPTION =
  "Browse patent-derived rear teleconverters and mount each one on a compatible lens to trace the combined optical system.";

export default function TeleconvertersIndexPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const groupMode = parseTeleconverterGroupMode(searchParams.get("group"));
  const groups = useMemo(() => groupTeleconverters(TELECONVERTER_SUMMARY_LIST, groupMode), [groupMode]);
  const groupTitle = TELECONVERTER_GROUP_OPTIONS.find(
    (option) => option.mode === (groupMode === "year-desc" ? "year-asc" : groupMode),
  )!.title;

  return (
    <StaticPageShell
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Teleconverters" }]}
      seo={
        <SEOHead
          title={`Teleconverters — ${SITE_NAME}`}
          description={SEO_DESCRIPTION}
          canonicalURL={`${SITE_URL}/teleconverters`}
          robots={TELECONVERTER_SUMMARY_LIST.length === 0 ? "noindex,nofollow" : undefined}
          jsonLd={[
            collectionPageJsonLd({
              name: "Teleconverters",
              description: SEO_DESCRIPTION,
              url: `${SITE_URL}/teleconverters`,
              route: "/teleconverters",
            }),
            itemListJsonLd({
              name: "Teleconverters",
              url: `${SITE_URL}/teleconverters`,
              items: TELECONVERTER_SUMMARY_LIST.map((teleconverter) => ({
                name: teleconverter.name,
                url: `${SITE_URL}/teleconverters/${teleconverter.key}`,
              })),
            }),
          ]}
        />
      }
    >
      {({ theme: t }) => (
        <>
          <h1 style={H1_STYLE}>Teleconverters</h1>
          <p style={{ fontSize: "0.85rem", color: t.desc, lineHeight: 1.6, marginBottom: "1.5rem" }}>
            A rear teleconverter sits between a lens and the camera and lengthens the focal length. It has no aperture
            stop of its own, so it is shown mounted on a host lens: open a converter to pick the lens.
          </p>

          {TELECONVERTER_SUMMARY_LIST.length === 0 && (
            <p style={{ fontSize: "0.85rem", color: t.muted }}>No teleconverter has been published yet.</p>
          )}

          <p style={{ fontSize: "0.875rem", color: t.muted }}>
            {TELECONVERTER_SUMMARY_LIST.length} published{" "}
            {pluralize(TELECONVERTER_SUMMARY_LIST.length, "teleconverter")}.
          </p>
          <div
            role="group"
            aria-label="Group teleconverters"
            style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginBottom: "2rem" }}
          >
            {TELECONVERTER_GROUP_OPTIONS.map(({ mode, label }) => {
              const isYear = mode === "year-asc";
              const active = groupMode === mode || (isYear && groupMode === "year-desc");
              return (
                <button
                  key={mode}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    const nextMode = isYear && groupMode === "year-asc" ? "year-desc" : mode;
                    setSearchParams(
                      (current) => {
                        const next = new URLSearchParams(current);
                        if (nextMode === "maker") next.delete("group");
                        else next.set("group", nextMode);
                        return next;
                      },
                      { replace: true },
                    );
                  }}
                  style={{
                    padding: "0.25rem 0.75rem",
                    fontSize: "0.8rem",
                    fontFamily: "inherit",
                    border: `1px solid ${active ? t.toggleActiveBorder : t.toggleBorder}`,
                    borderRadius: 4,
                    cursor: "pointer",
                    backgroundColor: active ? t.toggleActiveBg : t.toggleBg,
                    color: active ? t.toggleActiveText : t.toggleInactiveText,
                    fontWeight: active ? 600 : 400,
                  }}
                >
                  {label}
                  {isYear && active ? (groupMode === "year-asc" ? " ↑" : " ↓") : ""}
                </button>
              );
            })}
          </div>

          <SidebarLayout
            sidebar={
              <LinkListSidebar
                title={groupTitle}
                ariaLabel={`Jump to ${groupTitle.toLowerCase()}`}
                items={groups.map((group) => ({
                  id: group.id,
                  label: `${group.label} (${group.items.length})`,
                  to: `#${group.id}`,
                }))}
                theme={t}
              />
            }
          >
            {groups.map((group) => (
              <section key={group.id} id={group.id} style={{ scrollMarginTop: STICKY_NAV_SCROLL_MARGIN }}>
                <h2 style={{ ...SECTION_HEADING_BASE_STYLE, borderBottom: `1px solid ${t.panelBorder}` }}>
                  {group.label}
                  <span style={countSuffix(t)}>({group.items.length})</span>
                </h2>
                {group.items.map((teleconverter) => {
                  const hostCount = teleconverter.compatibleLensKeys.length;
                  return (
                    <div
                      key={teleconverter.key}
                      style={{
                        padding: "1rem 0.75rem",
                        marginBottom: "0.75rem",
                        borderBottom: `1px solid ${t.panelBorder}`,
                      }}
                    >
                      <Link
                        to={`/teleconverters/${teleconverter.key}/`}
                        style={{ color: t.descLinkColor, textDecoration: "none", fontSize: "1rem", fontWeight: 600 }}
                      >
                        {teleconverter.name}
                      </Link>
                      <span style={{ color: t.label, fontSize: "0.8rem", marginLeft: "0.5rem" }}>
                        ({hostCount} compatible {pluralize(hostCount, "lens")})
                      </span>
                      <p style={{ fontSize: "0.8rem", color: t.subtitle, lineHeight: 1.5, marginTop: "0.5rem" }}>
                        {teleconverter.magnification}× ·{" "}
                        {teleconverter.lensMounts.map((mountId) => LENS_MOUNT_BY_ID[mountId].label).join(", ")}
                        {teleconverter.imageFormat ? ` · ${IMAGE_FORMAT_BY_ID[teleconverter.imageFormat].label}` : ""}
                        {teleconverter.patentYear !== undefined ? ` · ${teleconverter.patentYear}` : ""}
                        {teleconverter.universal ? " · universal" : ""}
                      </p>
                    </div>
                  );
                })}
              </section>
            ))}
          </SidebarLayout>
        </>
      )}
    </StaticPageShell>
  );
}
