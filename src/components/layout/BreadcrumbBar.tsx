/**
 * Breadcrumb navigation bar — Home / Makers / {Maker} / {Lens Name}
 *
 * Renders above the TopBar in the LensViewer, matching the breadcrumb
 * pattern used on the multipage layout pages (LensPage, MakerPage, etc.).
 * Right-aligned search link and inline theme selectors (High Contrast and
 * Auto/Dark/Light) match PageNavBar on the static pages.
 *
 * Reads theme state and dispatches theme changes directly via context,
 * consistent with how LensDiagramPanel and ControlsBar wire theme actions.
 */

import { Link, useLocation } from "react-router";
import type { Theme } from "../../types/theme.js";
import { headerSearchBtn, headerStrip } from "../../utils/style/styles.js";
import { LENS_CATALOG } from "../../utils/catalog/lensCatalog.js";
import { deriveMaker } from "../../utils/catalog/lensMetadata.js";
import {
  IMAGE_FORMAT_BY_ID,
  LENS_MOUNT_BY_ID,
  isImageFormatId,
  isLensMountId,
} from "../../utils/catalog/lensTaxonomy.js";
import { useLensCtx, useLensDispatch } from "../../utils/state/LensContext.js";
import { SET_DARK, SET_HIGH_CONTRAST } from "../../utils/state/lensReducer.js";
import { FILTER_BOUNDS } from "../../pages/lensIndex/catalog.js";
import { isValidLensLibraryReturnPath } from "../../pages/lensIndex/urlState.js";
import type { LensBreadcrumbSource, LensNavigationState } from "../../pages/lensIndex/clusterLinks.js";
import { canonicalPagePath } from "../../utils/seo/siteUrls.js";
import {
  darkPreferenceFromThemeMode,
  nextThemeMode,
  themeModeFromDarkPreference,
  type ThemeMode,
} from "../../utils/theme/themePreferences.js";
import ThemeToggleGroup from "./ThemeToggleGroup.js";

interface BreadcrumbBarProps {
  theme: Theme;
  isWide: boolean;
  lensKey: string;
}

function validBreadcrumbSource(source: LensBreadcrumbSource | undefined): LensBreadcrumbSource | null {
  if (!source) return null;
  if (source.type === "lenses") {
    if (!isValidLensLibraryReturnPath(source.returnTo, FILTER_BOUNDS)) return null;
    if (source.context?.type === "mount" && !isLensMountId(source.context.id)) return null;
    if (source.context?.type === "format" && !isImageFormatId(source.context.id)) return null;
    return { ...source, returnTo: canonicalPagePath(source.returnTo) };
  }
  if (source.type === "mount" && isLensMountId(source.id)) return source;
  if (source.type === "format" && isImageFormatId(source.id)) return source;
  return null;
}

function sourceFromState(state: unknown): LensBreadcrumbSource | null {
  if (!state || typeof state !== "object" || !("lensBreadcrumb" in state)) return null;
  return validBreadcrumbSource((state as LensNavigationState).lensBreadcrumb);
}

function sourceFromSearch(search: string): LensBreadcrumbSource | null {
  const params = new URLSearchParams(search);
  const from = params.get("from");
  const id = params.get("id");

  if (from === "lenses") {
    const returnTo = params.get("returnTo");
    const context = params.get("context");
    if (!returnTo || !isValidLensLibraryReturnPath(returnTo, FILTER_BOUNDS)) return null;
    if (context === "mount" && isLensMountId(id)) return { type: "lenses", returnTo, context: { type: "mount", id } };
    if (context === "format" && isImageFormatId(id)) {
      return { type: "lenses", returnTo, context: { type: "format", id } };
    }
    return { type: "lenses", returnTo };
  }

  if (from === "mount" && isLensMountId(id)) return { type: "mount", id };
  if (from === "format" && isImageFormatId(id)) return { type: "format", id };
  return null;
}

export default function BreadcrumbBar({ theme: t, isWide, lensKey }: BreadcrumbBarProps) {
  const location = useLocation();
  const { state } = useLensCtx();
  const dispatch = useLensDispatch();
  const { dark, highContrast } = state.display;
  const themeMode: ThemeMode = themeModeFromDarkPreference(dark);

  const { comparing, lensKeyB } = state.lens;
  const lensA = LENS_CATALOG[lensKey];
  const lensB = comparing ? LENS_CATALOG[lensKeyB] : null;
  if (!lensA) return null;

  const maker = deriveMaker(lensA.name, lensA.maker);
  const source = sourceFromState(location.state) ?? sourceFromSearch(location.search);
  const padding = isWide ? "6px 24px" : "6px 12px";

  const linkStyle: React.CSSProperties = {
    color: t.descLinkColor,
    textDecoration: "none",
  };

  const separatorStyle: React.CSSProperties = {
    color: t.muted,
    margin: "0 0.35em",
  };

  return (
    <div>
      <nav
        style={{
          ...headerStrip(t, { padding }),
          fontSize: isWide ? 11 : 10,
          fontFamily: "inherit",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            minWidth: 0,
          }}
        >
          <Link to="/" style={linkStyle}>
            Home
          </Link>
          <span style={separatorStyle}>/</span>
          {comparing && lensB ? (
            <>
              <Link to="/lenses/" style={linkStyle}>
                Lenses
              </Link>
              <span style={separatorStyle}>/</span>
              <span style={{ color: t.body }}>
                {lensA.name} vs {lensB.name}
              </span>
            </>
          ) : (
            <>
              {source?.type === "lenses" ? (
                <>
                  <Link to={source.returnTo} style={linkStyle}>
                    Lenses
                  </Link>
                  <span style={separatorStyle}>/</span>
                  {source.context?.type === "mount" ? (
                    <Link to={`/mounts/${source.context.id}/`} style={linkStyle}>
                      {LENS_MOUNT_BY_ID[source.context.id].label}
                    </Link>
                  ) : source.context?.type === "format" ? (
                    <Link to={`/formats/${source.context.id}/`} style={linkStyle}>
                      {IMAGE_FORMAT_BY_ID[source.context.id].label}
                    </Link>
                  ) : (
                    <Link to={`/makers/${maker.slug}/`} style={linkStyle}>
                      {maker.display}
                    </Link>
                  )}
                  <span style={separatorStyle}>/</span>
                  <span style={{ color: t.body }}>{lensA.name}</span>
                </>
              ) : source?.type === "mount" ? (
                <>
                  <Link to="/mounts/" style={linkStyle}>
                    Mounts
                  </Link>
                  <span style={separatorStyle}>/</span>
                  <Link to={`/mounts/${source.id}/`} style={linkStyle}>
                    {LENS_MOUNT_BY_ID[source.id].label}
                  </Link>
                  <span style={separatorStyle}>/</span>
                  <span style={{ color: t.body }}>{lensA.name}</span>
                </>
              ) : source?.type === "format" ? (
                <>
                  <Link to="/formats/" style={linkStyle}>
                    Formats
                  </Link>
                  <span style={separatorStyle}>/</span>
                  <Link to={`/formats/${source.id}/`} style={linkStyle}>
                    {IMAGE_FORMAT_BY_ID[source.id].label}
                  </Link>
                  <span style={separatorStyle}>/</span>
                  <span style={{ color: t.body }}>{lensA.name}</span>
                </>
              ) : (
                <>
                  <Link to="/makers/" style={linkStyle}>
                    Makers
                  </Link>
                  <span style={separatorStyle}>/</span>
                  <Link to={`/makers/${maker.slug}/`} style={linkStyle}>
                    {maker.display}
                  </Link>
                  <span style={separatorStyle}>/</span>
                  <span style={{ color: t.body }}>{lensA.name}</span>
                </>
              )}
            </>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 4, marginLeft: 12, flexShrink: 0 }}>
          <Link to="/search/" aria-label="Search" style={headerSearchBtn(t)}>
            ⌕
          </Link>
          <ThemeToggleGroup
            theme={t}
            themeMode={themeMode}
            highContrast={highContrast}
            onToggleTheme={() =>
              dispatch({ type: SET_DARK, dark: darkPreferenceFromThemeMode(nextThemeMode(themeMode)) })
            }
            onToggleHC={() => dispatch({ type: SET_HIGH_CONTRAST, highContrast: !highContrast })}
          />
        </div>
      </nav>
    </div>
  );
}
