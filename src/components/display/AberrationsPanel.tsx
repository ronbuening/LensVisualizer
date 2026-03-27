/**
 * AberrationsPanel — Analysis drawer tab content displaying computed aberration
 * metrics for the current lens state.
 *
 * Shows best-focus spherical-aberration spread as a profile chart plus a
 * numeric readout, with meridional coma in a separate collapsible section.
 */

import { useEffect, useMemo, useState } from "react";
import CollapseButton from "../controls/CollapseButton.js";
import HelpTooltipButton from "../controls/HelpTooltipButton.js";
import ComaPreviewGrid from "./ComaPreviewGrid.js";
import MeridionalComaPlot, { formatComaSpan } from "./MeridionalComaPlot.js";
import {
  computeComaPreview,
  computeMeridionalComa,
  computeSphericalAberration,
  computeSAProfile,
} from "../../optics/aberrationAnalysis.js";
import type { SAProfilePoint } from "../../optics/aberrationAnalysis.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";
import { ENABLE_REAL_RAY_LSA_DIAGNOSTIC } from "../../utils/featureFlags.js";

interface AberrationsPanelProps {
  L: RuntimeLens;
  t: Theme;
  zPos: number[];
  focusT: number;
  zoomT: number;
  currentEPSD: number;
  currentPhysStopSD: number;
  expanded: boolean;
  onExpandedChange?: (expanded: boolean) => void;
}

function formatSaUm(saUm: number): string {
  const abs = Math.abs(saUm);
  if (abs >= 1) return `${abs.toFixed(0)} µm`;
  if (abs >= 0.1) return `${abs.toFixed(1)} µm`;
  return "< 0.1 µm";
}

function formatSignedSaUm(saUm: number): string {
  if (Math.abs(saUm) < 0.1) return "0 µm";
  const rounded = Math.abs(saUm) >= 1 ? saUm.toFixed(0) : saUm.toFixed(1);
  return `${rounded} µm`;
}

const VB_W = 280;
const VB_H = 200;
const ML = 44;
const MR = 16;
const MT = 20;
const MB = 36;
const PW = VB_W - ML - MR;
const PH = VB_H - MT - MB;
const MIN_X_RANGE_UM = 5;

function buildPolylinePoints(profile: SAProfilePoint[], xMaxAbsUm: number): string {
  return profile
    .map(({ fraction, transverseSaMm }) => {
      const saUm = transverseSaMm * 1000;
      const px = ML + PW / 2 + (saUm / xMaxAbsUm) * (PW / 2);
      const py = MT + PH * (1 - fraction);
      return `${px.toFixed(1)},${py.toFixed(1)}`;
    })
    .join(" ");
}

function SADiagram({ profile, t }: { profile: SAProfilePoint[]; t: Theme }) {
  const maxSaUm = Math.max(...profile.map((p) => Math.abs(p.transverseSaMm * 1000)));
  const xMaxAbsUm = Math.max(MIN_X_RANGE_UM, maxSaUm * 1.2);
  const halfTickRaw = xMaxAbsUm / 2;
  const tickUm =
    halfTickRaw >= 50
      ? Math.round(halfTickRaw / 25) * 25
      : halfTickRaw >= 10
        ? Math.round(halfTickRaw / 5) * 5
        : Math.max(1, Math.round(halfTickRaw));
  const centerX = ML + PW / 2;
  const leftTickX = centerX - (tickUm / xMaxAbsUm) * (PW / 2);
  const rightTickX = centerX + (tickUm / xMaxAbsUm) * (PW / 2);
  const yTicks = [
    { frac: 0, label: "0" },
    { frac: 0.5, label: "0.5" },
    { frac: 1, label: "1" },
  ];
  const polylinePoints = buildPolylinePoints(profile, xMaxAbsUm);

  return (
    <svg viewBox={`0 0 ${VB_W} ${VB_H}`} style={{ display: "block", width: "100%", maxWidth: VB_W, height: "auto" }}>
      <title>
        Real-ray transverse spherical-aberration profile at the common best-focus plane versus pupil zone, referenced to
        the near-axis real ray.
      </title>
      <rect x={ML} y={MT} width={PW} height={PH} rx={3} fill={t.panelBg} stroke={t.panelBorder} strokeWidth={0.75} />

      {yTicks.map(({ frac, label }) => {
        const ty = MT + PH * (1 - frac);
        return (
          <g key={label}>
            <line x1={ML - 4} y1={ty} x2={ML} y2={ty} stroke={t.muted} strokeWidth={0.75} />
            <text x={ML - 7} y={ty + 4} textAnchor="end" fill={t.muted} fontSize={9} fontFamily="inherit">
              {label}
            </text>
          </g>
        );
      })}

      <text
        textAnchor="middle"
        fill={t.muted}
        fontSize={9.5}
        fontFamily="inherit"
        transform={`rotate(-90) translate(${-(MT + PH / 2)}, 12)`}
      >
        Pupil zone
      </text>

      <line x1={centerX} y1={MT} x2={centerX} y2={MT + PH} stroke={t.axis} strokeWidth={0.75} strokeDasharray="3,3" />
      <polyline points={polylinePoints} fill="none" stroke={t.value} strokeWidth={2} strokeLinejoin="round" />

      <line x1={ML} y1={MT + PH} x2={ML} y2={MT + PH + 4} stroke={t.muted} strokeWidth={0.75} />
      <line x1={leftTickX} y1={MT + PH} x2={leftTickX} y2={MT + PH + 4} stroke={t.muted} strokeWidth={0.75} />
      <line x1={centerX} y1={MT + PH} x2={centerX} y2={MT + PH + 4} stroke={t.muted} strokeWidth={0.75} />
      <line x1={rightTickX} y1={MT + PH} x2={rightTickX} y2={MT + PH + 4} stroke={t.muted} strokeWidth={0.75} />
      <line x1={ML + PW} y1={MT + PH} x2={ML + PW} y2={MT + PH + 4} stroke={t.muted} strokeWidth={0.75} />

      <text x={ML} y={MT + PH + 15} textAnchor="middle" fill={t.muted} fontSize={9} fontFamily="inherit">
        {formatSignedSaUm(-xMaxAbsUm)}
      </text>
      <text x={leftTickX} y={MT + PH + 15} textAnchor="middle" fill={t.muted} fontSize={9} fontFamily="inherit">
        {formatSignedSaUm(-tickUm)}
      </text>
      <text x={centerX} y={MT + PH + 15} textAnchor="middle" fill={t.muted} fontSize={9} fontFamily="inherit">
        0
      </text>
      <text x={rightTickX} y={MT + PH + 15} textAnchor="middle" fill={t.muted} fontSize={9} fontFamily="inherit">
        {formatSignedSaUm(tickUm)}
      </text>
      <text x={ML + PW} y={MT + PH + 15} textAnchor="middle" fill={t.muted} fontSize={9} fontFamily="inherit">
        {formatSignedSaUm(xMaxAbsUm)}
      </text>

      <text x={ML + PW / 2} y={VB_H - 4} textAnchor="middle" fill={t.muted} fontSize={9.5} fontFamily="inherit">
        Real-ray transverse SA at best focus (&micro;m)
      </text>
    </svg>
  );
}

export default function AberrationsPanel({
  L,
  t,
  zPos,
  focusT,
  zoomT,
  currentEPSD,
  currentPhysStopSD,
  expanded,
  onExpandedChange,
}: AberrationsPanelProps) {
  const saResult = useMemo(
    () => computeSphericalAberration(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD),
    [L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD],
  );

  const saProfile = useMemo(
    () => computeSAProfile(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD),
    [L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD],
  );

  const comaResult = useMemo(
    () => computeMeridionalComa(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD),
    [L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD],
  );

  const comaPreviewResult = useMemo(
    () => computeComaPreview(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD),
    [L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD],
  );

  const [saChartExpanded, setSaChartExpanded] = useState(expanded);
  const [comaPreviewExpanded, setComaPreviewExpanded] = useState(true);
  const [comaExpanded, setComaExpanded] = useState(true);

  useEffect(() => {
    setSaChartExpanded(expanded);
  }, [expanded]);

  return (
    <div style={{ padding: "8px 0" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 9.5 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 10.5, color: t.muted, transition: "color 0.3s" }}>Spherical Aberration</span>
          <HelpTooltipButton
            theme={t}
            label="Spherical aberration help"
            text="The curve shows the real-ray transverse aberration fan at the common best-focus plane, referenced to the near-axis real ray. Because it stays in image space, it remains stable near the pupil edge while still showing the signed fan shape of the on-axis bundle. The spread metric below still shows the residual bundle size at best focus."
          />
          <CollapseButton
            expanded={saChartExpanded}
            onToggle={() => {
              const next = !saChartExpanded;
              setSaChartExpanded(next);
              onExpandedChange?.(next);
            }}
            theme={t}
            style={{ marginLeft: "auto" }}
          />
        </div>

        {saChartExpanded && saProfile.length >= 2 && <SADiagram profile={saProfile} t={t} />}

        <div
          style={{ display: "flex", alignItems: "center", gap: 10 }}
          title={
            "Best-focus spread: RMS spread of the sampled on-axis real rays at the best-fit image plane for the " +
            "current state. This remains focus-responsive because the best-focus plane is solved from the current bundle."
          }
        >
          <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>
            BEST-FOCUS SPREAD
          </span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: t.value,
              fontVariantNumeric: "tabular-nums",
              transition: "color 0.3s",
            }}
          >
            {saResult ? formatSaUm(saResult.bestFocusRmsUm) : "\u2014"}
          </span>
          {saResult && (
            <span style={{ fontSize: 9, color: t.muted, transition: "color 0.3s" }}>
              (peak {formatSaUm(saResult.bestFocusPeakUm)}, shift {saResult.bestFocusShiftMm.toFixed(2)} mm)
            </span>
          )}
        </div>

        {ENABLE_REAL_RAY_LSA_DIAGNOSTIC && (
          <div
            style={{ display: "flex", alignItems: "center", gap: 10 }}
            title={
              "Longitudinal spherical aberration (LSA): axial focus shift of the marginal real ray " +
              "vs. a near-axis real-ray reference. Negative = undercorrected (marginal focus closer to lens)."
            }
          >
            <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>LSA</span>
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: t.value,
                fontVariantNumeric: "tabular-nums",
                transition: "color 0.3s",
              }}
            >
              {saResult ? formatSaUm(saResult.longitudinalSaUm) : "\u2014"}
            </span>
          </div>
        )}

        <div
          style={{
            borderTop: `1px solid ${t.panelBorder}`,
            paddingTop: 14,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 10.5, color: t.muted, transition: "color 0.3s" }}>Coma Preview</span>
            <HelpTooltipButton
              theme={t}
              label="Coma preview help"
              text="This representative preview samples the meridional ray footprint at the center and at 25%, 50%, and 75% of the current half-field. Each mini-panel is centered on the chief ray so you can compare asymmetric spread growth across the field. It is not a full 2D spot diagram."
            />
            <CollapseButton
              expanded={comaPreviewExpanded}
              onToggle={() => setComaPreviewExpanded((value) => !value)}
              theme={t}
              style={{ marginLeft: "auto" }}
            />
          </div>

          {comaPreviewExpanded && (
            <>
              <span style={{ fontSize: 9, color: t.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
                Representative meridional coma preview at center, 25%, 50%, and 75% of the current half-field. Each tile
                is chief-ray-centered for comparison and is not a full 2D spot diagram.
              </span>

              {comaPreviewResult ? (
                <>
                  <ComaPreviewGrid result={comaPreviewResult} t={t} />
                  <div
                    style={{
                      display: "flex",
                      gap: 14,
                      flexWrap: "wrap",
                      fontSize: 9.5,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>
                        FIELDS
                      </span>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: t.value,
                          fontVariantNumeric: "tabular-nums",
                          transition: "color 0.3s",
                        }}
                      >
                        {comaPreviewResult.usableFieldCount}/{comaPreviewResult.fields.length}
                      </span>
                    </div>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                      title="Shared half-range used to normalize all four coma preview tiles."
                    >
                      <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>
                        RANGE
                      </span>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: t.value,
                          fontVariantNumeric: "tabular-nums",
                          transition: "color 0.3s",
                        }}
                      >
                        ±{formatComaSpan(comaPreviewResult.sharedRelativeHalfRangeMm * 1000)}
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <div style={{ color: t.muted, fontSize: 10, lineHeight: 1.5, transition: "color 0.3s" }}>
                  Unable to compute a representative coma preview for this lens state.
                </div>
              )}
            </>
          )}
        </div>

        <div
          style={{
            borderTop: `1px solid ${t.panelBorder}`,
            paddingTop: 14,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 10.5, color: t.muted, transition: "color 0.3s" }}>Meridional Coma</span>
            <HelpTooltipButton
              theme={t}
              label="Meridional coma help"
              text="Meridional coma shows how an off-axis point spreads asymmetrically across the image plane in the tangential plane. The coma span helps show how much the upper and lower pupil zones fail to meet at the same image height."
            />
            <CollapseButton
              expanded={comaExpanded}
              onToggle={() => setComaExpanded((value) => !value)}
              theme={t}
              style={{ marginLeft: "auto" }}
            />
          </div>

          {comaExpanded && (
            <>
              <span style={{ fontSize: 9, color: t.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
                2D meridional coma view using a dense off-axis ray fan. This is not a full 2D spot diagram or
                sagittal/tangential split.
              </span>

              {comaResult ? (
                <>
                  <MeridionalComaPlot result={comaResult} t={t} />
                  <div
                    style={{
                      display: "flex",
                      gap: 14,
                      flexWrap: "wrap",
                      fontSize: 9.5,
                    }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                      title="Meridional coma span: upper outer valid image-plane intercept minus lower outer valid intercept."
                    >
                      <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>
                        COMA SPAN
                      </span>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: t.value,
                          fontVariantNumeric: "tabular-nums",
                          transition: "color 0.3s",
                        }}
                      >
                        {formatComaSpan(comaResult.spanUm)}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>
                        FIELD
                      </span>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: t.value,
                          fontVariantNumeric: "tabular-nums",
                          transition: "color 0.3s",
                        }}
                      >
                        {comaResult.fieldAngleDeg.toFixed(1)}°
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>
                        VALID
                      </span>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: t.value,
                          fontVariantNumeric: "tabular-nums",
                          transition: "color 0.3s",
                        }}
                      >
                        {comaResult.validSampleCount}/{comaResult.sampleCount}
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <div style={{ color: t.muted, fontSize: 10, lineHeight: 1.5, transition: "color 0.3s" }}>
                  Unable to compute a usable 2D meridional coma view for this lens state.
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
