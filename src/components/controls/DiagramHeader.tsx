/**
 * DiagramHeader — Header section for the lens diagram panel.
 *
 * Displays the lens title, subtitle, specs, per-panel compact readouts,
 * theme controls (HC/dark toggles), and ray toggles (on-axis, off-axis,
 * ray mode, chromatic + R/G/B channels).
 *
 * Extracted from LensDiagramPanel to reduce component size.
 * Uses React.forwardRef so the parent can attach headerRef for
 * height measurement and alignment in comparison mode.
 */

import { forwardRef, memo } from "react";
import { eflAtZoom, formatDist } from "../../optics/optics.js";
import { toggleGroup, toggleBtn, headerStrip } from "../../utils/styles.js";
import CollapseButton from "./CollapseButton.js";
import CardinalControls from "./CardinalControls.js";
import RayToggles from "./RayToggles.js";
import ChromaticControls from "./ChromaticControls.js";
import { ENABLE_CARDINAL_ELEMENTS } from "../../utils/featureFlags.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";
import type { OffAxisMode, RayDensity } from "../../types/state.js";

interface DiagramHeaderProps {
  L: RuntimeLens;
  t: Theme;
  compact: boolean;
  isWide: boolean;
  focusT: number;
  zoomT: number;
  fNumber: number;
  showOnAxis: boolean;
  onShowOnAxisChange?: (value: boolean) => void;
  showOffAxis: OffAxisMode;
  onShowOffAxisChange?: (value: OffAxisMode) => void;
  rayDensity: RayDensity;
  onRayDensityChange?: (value: RayDensity) => void;
  rayTracksF: boolean;
  onRayTracksFChange?: (value: boolean) => void;
  showChromatic: boolean;
  onShowChromaticChange?: (value: boolean) => void;
  chromR: boolean;
  chromG: boolean;
  chromB: boolean;
  onChromRChange?: (value: boolean) => void;
  onChromGChange?: (value: boolean) => void;
  onChromBChange?: (value: boolean) => void;
  showPupils: boolean;
  onShowPupilsChange?: (value: boolean) => void;
  showCardinals: boolean;
  onShowCardinalsChange?: (value: boolean) => void;
  showCardinalFocal: boolean;
  onShowCardinalFocalChange?: (value: boolean) => void;
  showCardinalPrincipal: boolean;
  onShowCardinalPrincipalChange?: (value: boolean) => void;
  showCardinalNodal: boolean;
  onShowCardinalNodalChange?: (value: boolean) => void;
  showCardinalDimensions: boolean;
  onShowCardinalDimensionsChange?: (value: boolean) => void;
  showCardinalEfl: boolean;
  onShowCardinalEflChange?: (value: boolean) => void;
  showCardinalBfd: boolean;
  onShowCardinalBfdChange?: (value: boolean) => void;
  showCardinalFfd: boolean;
  onShowCardinalFfdChange?: (value: boolean) => void;
  showCardinalHiatus: boolean;
  onShowCardinalHiatusChange?: (value: boolean) => void;
  showCardinalTotalTrack: boolean;
  onShowCardinalTotalTrackChange?: (value: boolean) => void;
  headerInfoExpanded: boolean;
  onHeaderInfoExpandedChange?: (value: boolean) => void;
  minHeaderHeight?: number;
}

const DiagramHeader = memo(
  forwardRef<HTMLDivElement, DiagramHeaderProps>(function DiagramHeader(
    {
      L,
      t,
      compact,
      isWide,
      focusT,
      zoomT,
      fNumber,
      showOnAxis,
      onShowOnAxisChange,
      showOffAxis,
      onShowOffAxisChange,
      rayDensity,
      onRayDensityChange,
      rayTracksF,
      onRayTracksFChange,
      showChromatic,
      onShowChromaticChange,
      chromR,
      chromG,
      chromB,
      onChromRChange,
      onChromGChange,
      onChromBChange,
      showPupils,
      onShowPupilsChange,
      showCardinals,
      onShowCardinalsChange,
      showCardinalFocal,
      onShowCardinalFocalChange,
      showCardinalPrincipal,
      onShowCardinalPrincipalChange,
      showCardinalNodal,
      onShowCardinalNodalChange,
      showCardinalDimensions,
      onShowCardinalDimensionsChange,
      showCardinalEfl,
      onShowCardinalEflChange,
      showCardinalBfd,
      onShowCardinalBfdChange,
      showCardinalFfd,
      onShowCardinalFfdChange,
      showCardinalHiatus,
      onShowCardinalHiatusChange,
      showCardinalTotalTrack,
      onShowCardinalTotalTrackChange,
      headerInfoExpanded,
      onHeaderInfoExpandedChange,
      minHeaderHeight,
    },
    ref,
  ) {
    return (
      <div
        ref={ref}
        style={{
          ...headerStrip(t, { padding: compact ? "12px 16px 8px" : "18px 24px 10px" }),
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          ...(minHeaderHeight ? { minHeight: minHeaderHeight } : {}),
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: compact ? 8 : 10, flexWrap: "wrap" }}>
            <h1
              style={{
                fontSize: compact ? 14 : 17,
                fontWeight: 700,
                letterSpacing: "0.04em",
                margin: 0,
                color: t.title,
                fontFamily: "'DM Sans','Helvetica Neue',sans-serif",
                transition: "color 0.3s",
              }}
            >
              {L.data.name}
            </h1>
            {!compact && (
              <a
                href={`https://www.flickr.com/search/?text=${encodeURIComponent(L.data.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                title={`Search Flickr for "${L.data.name}"`}
                style={{
                  fontSize: 11,
                  color: t.descLinkColor,
                  letterSpacing: "0.06em",
                  textDecoration: "none",
                  borderBottom: `1px solid ${t.descLinkColor}40`,
                  whiteSpace: "nowrap",
                  transition: "color 0.3s, border-color 0.3s",
                }}
              >
                flickr ↗
              </a>
            )}
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: compact ? 2 : 3 }}>
            <span
              style={{
                fontSize: compact ? 9 : 10.5,
                color: t.subtitle,
                letterSpacing: "0.08em",
                transition: "color 0.3s",
              }}
            >
              {L.data.subtitle}
            </span>
            {!isWide && (
              <CollapseButton
                expanded={headerInfoExpanded}
                onToggle={() => onHeaderInfoExpandedChange?.(!headerInfoExpanded)}
                theme={t}
              />
            )}
          </div>
          {(isWide || headerInfoExpanded) && (
            <>
              <div
                style={{
                  display: "flex",
                  gap: compact ? 14 : 22,
                  marginTop: compact ? 4 : 6,
                  fontSize: compact ? 9 : 10,
                  color: t.specs,
                  letterSpacing: "0.06em",
                  transition: "color 0.3s",
                  flexWrap: "wrap",
                }}
              >
                {L.data.specs?.map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              {/* Per-panel readouts in compact mode */}
              {compact && (
                <div
                  style={{
                    display: "flex",
                    gap: 16,
                    marginTop: 6,
                    fontSize: 10,
                    color: t.value,
                    letterSpacing: "0.04em",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {L.isZoom && <span>{eflAtZoom(zoomT, L).toFixed(0)} mm</span>}
                  <span>{formatDist(focusT, L)}</span>
                  <span>f/{fNumber < 10 ? fNumber.toFixed(1) : Math.round(fNumber)}</span>
                  <span>EFL {L.isZoom ? eflAtZoom(zoomT, L).toFixed(1) : L.EFL.toFixed(1)}</span>
                </div>
              )}
            </>
          )}
        </div>
        {/* Theme + ray controls in non-compact (single-lens) mode.
           Hidden on mobile (controls live in the always-visible strip instead). */}
        {isWide && !compact && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              gap: 8,
              flexShrink: 0,
            }}
          >
            {ENABLE_CARDINAL_ELEMENTS ? (
              <div style={{ paddingTop: 0 }}>
                <CardinalControls
                  t={t}
                  showCardinals={showCardinals}
                  onShowCardinalsChange={onShowCardinalsChange}
                  showCardinalFocal={showCardinalFocal}
                  onShowCardinalFocalChange={onShowCardinalFocalChange}
                  showCardinalPrincipal={showCardinalPrincipal}
                  onShowCardinalPrincipalChange={onShowCardinalPrincipalChange}
                  showCardinalNodal={showCardinalNodal}
                  onShowCardinalNodalChange={onShowCardinalNodalChange}
                  showCardinalDimensions={showCardinalDimensions}
                  onShowCardinalDimensionsChange={onShowCardinalDimensionsChange}
                  showCardinalEfl={showCardinalEfl}
                  onShowCardinalEflChange={onShowCardinalEflChange}
                  showCardinalBfd={showCardinalBfd}
                  onShowCardinalBfdChange={onShowCardinalBfdChange}
                  showCardinalFfd={showCardinalFfd}
                  onShowCardinalFfdChange={onShowCardinalFfdChange}
                  showCardinalHiatus={showCardinalHiatus}
                  onShowCardinalHiatusChange={onShowCardinalHiatusChange}
                  showCardinalTotalTrack={showCardinalTotalTrack}
                  onShowCardinalTotalTrackChange={onShowCardinalTotalTrackChange}
                />
              </div>
            ) : null}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, width: 236 }}>
              {/* Ray toggles */}
              <RayToggles
                t={t}
                showOnAxis={showOnAxis}
                onShowOnAxisChange={onShowOnAxisChange}
                showOffAxis={showOffAxis}
                onShowOffAxisChange={onShowOffAxisChange}
                showPupils={showPupils}
                onShowPupilsChange={onShowPupilsChange}
              />
              {/* Ray mode */}
              <div style={toggleGroup(t, { width: "100%" })}>
                {[
                  { label: "FROM \u221e", val: false, icon: "\u2225" },
                  { label: "TRACKS FOCUS", val: true, icon: "\u27e9" },
                ].map(({ label, val, icon }) => (
                  <button
                    key={label}
                    onClick={() => onRayTracksFChange?.(val)}
                    style={toggleBtn(t, rayTracksF === val, { hasRightBorder: !val, gap: 4 })}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        lineHeight: 1,
                        opacity: rayTracksF === val ? 1 : 0.4,
                      }}
                    >
                      {icon}
                    </span>
                    <span>{label}</span>
                  </button>
                ))}
              </div>
              {/* Ray density */}
              <div style={toggleGroup(t, { width: "100%" })}>
                {(
                  [
                    { label: "NORMAL", val: "normal" },
                    { label: "DENSE", val: "dense" },
                    { label: "DIAGNOSTIC", val: "diagnostic" },
                  ] as const
                ).map(({ label, val }, idx) => (
                  <button
                    key={val}
                    onClick={() => onRayDensityChange?.(val)}
                    style={toggleBtn(t, rayDensity === val, { hasRightBorder: idx < 2, gap: 4 })}
                  >
                    <span>{label}</span>
                  </button>
                ))}
              </div>
              {/* Chromatic */}
              <ChromaticControls
                t={t}
                showChromatic={showChromatic}
                onShowChromaticChange={onShowChromaticChange}
                chromR={chromR}
                chromG={chromG}
                chromB={chromB}
                onChromRChange={onChromRChange}
                onChromGChange={onChromGChange}
                onChromBChange={onChromBChange}
              />
            </div>
          </div>
        )}
      </div>
    );
  }),
);

export default DiagramHeader;
