/**
 * ElementInspector — Displays optical properties for a selected glass element.
 * Shows refractive index, Abbe number, focal length, glass type, aspheric
 * coefficients, chromatic data, and role description.
 *
 * Extracted from LensDiagramPanel for separation of concerns.
 */

import type { CSSProperties } from "react";
import type { RuntimeLens, ElementData, ImagePlaneNormal, SurfaceData } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";
import { getAsphericEntriesForElement } from "./asphericElementUtils.js";

interface ElementInspectorProps {
  info: ElementData;
  L: RuntimeLens;
  t: Theme;
  showChromatic: boolean;
  onOpenAsphericCompare?: (eid: number) => void;
}

const INSPECTOR_GRID: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(125px,1fr))",
  gap: "3px 18px",
  fontSize: 10.5,
  lineHeight: 1.8,
};

function fmtNumber(value: number): string {
  if (Math.abs(value) < 1e-9) return "0";
  return Number(value.toFixed(3)).toString();
}

function fmtMm(value: number): string {
  return `${fmtNumber(value)} mm`;
}

function fmtNormal(normal: ImagePlaneNormal): string {
  return `z=${fmtNumber(normal.z)} y=${fmtNumber(normal.y)}`;
}

function surfaceIndexesForElement(info: ElementData, L: RuntimeLens): number[] {
  if (!L.S) return [];
  const indexes = new Set<number>();
  const span = L.ES?.find(([id]) => id === info.id);
  if (span) {
    for (let idx = span[1]; idx <= span[2]; idx++) {
      if (L.S[idx]) indexes.add(idx);
    }
  }
  L.S.forEach((surface, idx) => {
    if (surface.elemId === info.id) indexes.add(idx);
  });
  return [...indexes].sort((a, b) => a - b);
}

function surfaceSummary(surface: SurfaceData): string | null {
  const interaction = surface.interaction;
  const pieces: string[] = [];
  if (interaction) {
    pieces.push(interaction.type);
    if (interaction.mirrorKind) pieces.push(interaction.mirrorKind);
    pieces.push(`active ${interaction.incidentSide ?? "both"}`);
    if ((interaction.incidentSide ?? "both") !== "both") {
      pieces.push(`inactive ${interaction.inactiveSide ?? "ignore"}`);
    }
    if (interaction.normal) pieces.push(`normal ${fmtNormal(interaction.normal)}`);
  }
  if (surface.innerSd !== undefined) pieces.push(`innerSd ${fmtMm(surface.innerSd)}`);
  if (pieces.length === 0) return null;
  return pieces.join(", ");
}

export default function ElementInspector({ info, L, t, showChromatic, onOpenAsphericCompare }: ElementInspectorProps) {
  const foldedSurfaceRows = surfaceIndexesForElement(info, L)
    .map((idx) => ({ surface: L.S[idx], summary: surfaceSummary(L.S[idx]) }))
    .filter((row): row is { surface: SurfaceData; summary: string } => Boolean(row.summary));
  const imagePlane = L.isFoldedOptics && L.data.opticalPath?.imagePlane ? L.imagePlane : null;

  return (
    <div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
        <span
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: t.title,
            fontFamily: "'DM Sans','Helvetica Neue',sans-serif",
            transition: "color 0.3s",
          }}
        >
          {info.label}
        </span>
        <span style={{ fontSize: 11, color: t.muted, transition: "color 0.3s" }}>{info.name}</span>
        {info.apd && (
          <span
            style={{
              fontSize: 8,
              padding: "2px 6px",
              borderRadius: 3,
              background: info.apd === "patent" ? t.apdPatentBg : t.apdInferBg,
              color: info.apd === "patent" ? t.apdPatentText : t.apdInferText,
              letterSpacing: "0.08em",
              fontWeight: 600,
              transition: "all 0.3s",
            }}
          >
            {info.apd === "patent" ? "APD (PATENT)" : "APD (INFERRED)"}
          </span>
        )}
        {info.cemented && (
          <span
            style={{
              fontSize: 8,
              padding: "2px 6px",
              borderRadius: 3,
              background: t.cementBg,
              color: t.cementText,
              letterSpacing: "0.08em",
              transition: "all 0.3s",
            }}
          >
            DOUBLET {info.cemented}
          </span>
        )}
        {(() => {
          const asphericEntries = getAsphericEntriesForElement(L, info.id);
          if (asphericEntries.length === 0) return null;
          const count = asphericEntries.length;
          return (
            <>
              <span
                style={{
                  fontSize: 8,
                  padding: "2px 6px",
                  borderRadius: 3,
                  background: `${t.asphStroke}22`,
                  color: t.asphLabel,
                  letterSpacing: "0.08em",
                  fontWeight: 600,
                  transition: "all 0.3s",
                }}
              >
                {count === 2 ? "ASPH \u00d72" : "ASPH"}
              </span>
              {onOpenAsphericCompare && (
                <button
                  onClick={() => onOpenAsphericCompare(info.id)}
                  style={{
                    fontSize: 9,
                    padding: 0,
                    background: "transparent",
                    border: "none",
                    color: t.asphLabel,
                    textDecoration: "underline",
                    cursor: "pointer",
                    letterSpacing: "0.04em",
                    transition: "color 0.3s",
                  }}
                >
                  Compare to sphere {"\u2192"}
                </button>
              )}
            </>
          );
        })()}
      </div>
      <div style={{ fontSize: 10.5, color: t.elemType, marginBottom: 5, transition: "color 0.3s" }}>{info.type}</div>
      <div style={INSPECTOR_GRID}>
        <div>
          <span style={{ color: t.propLabel }}>nd = </span>
          <span style={{ color: t.value }}>{info.nd}</span>
        </div>
        <div>
          <span style={{ color: t.propLabel }}>{"\u03bd"}d = </span>
          <span style={{ color: t.value }}>{info.vd}</span>
        </div>
        <div>
          <span style={{ color: t.propLabel }}>FL = </span>
          <span style={{ color: t.value }}>
            {(info.fl ?? 0) > 0 ? "+" : ""}
            {info.fl} mm
          </span>
        </div>
        <div>
          <span style={{ color: t.propLabel }}>Glass: </span>
          <span style={{ color: t.value }}>{info.glass}</span>
        </div>
        {(() => {
          const entries = getAsphericEntriesForElement(L, info.id);
          if (entries.length === 0) return null;
          return entries.map(({ label, coeffs }) => (
            <div key={label} style={{ gridColumn: "1 / -1" }}>
              <span style={{ color: t.asphLabel, fontSize: 9.5 }}>Asph ({label}): </span>
              <span style={{ color: t.muted, fontSize: 9 }}>
                K={coeffs.K?.toExponential(2)}
                {coeffs.A4 ? ` A4=${coeffs.A4.toExponential(2)}` : ""}
                {coeffs.A6 ? ` A6=${coeffs.A6.toExponential(2)}` : ""}
              </span>
            </div>
          ));
        })()}
      </div>
      {(foldedSurfaceRows.length > 0 || imagePlane) && (
        <div style={{ ...INSPECTOR_GRID, marginTop: 6, paddingTop: 5, borderTop: `1px solid ${t.panelBorder}` }}>
          {foldedSurfaceRows.map(({ surface, summary }) => (
            <div key={surface.label} style={{ gridColumn: "1 / -1" }}>
              <span style={{ color: t.propLabel }}>{surface.label}: </span>
              <span style={{ color: t.value }}>{summary}</span>
            </div>
          ))}
          {imagePlane && (
            <div style={{ gridColumn: "1 / -1" }}>
              <span style={{ color: t.propLabel }}>Image plane {imagePlane.label}: </span>
              <span style={{ color: t.value }}>
                z={fmtMm(imagePlane.z)} y={fmtMm(imagePlane.y)} normal {fmtNormal(imagePlane.normal)}
              </span>
            </div>
          )}
        </div>
      )}
      {showChromatic && info.vd && (
        <div style={{ ...INSPECTOR_GRID, marginTop: 4 }}>
          <div>
            <span style={{ color: t.propLabel }}>nF{"\u2212"}nC = </span>
            <span style={{ color: t.value }}>{((info.nd - 1) / info.vd).toFixed(5)}</span>
          </div>
          <div>
            <span style={{ color: t.propLabel }}>n</span>
            <span style={{ color: t.rayChromR }}>R</span>
            <span style={{ color: t.propLabel }}> = </span>
            <span style={{ color: t.rayChromR }}>{(info.nd - (info.nd - 1) / (2 * info.vd)).toFixed(5)}</span>
            <span style={{ color: t.propLabel, marginLeft: 8 }}> n</span>
            <span style={{ color: t.rayChromB }}>B</span>
            <span style={{ color: t.propLabel }}> = </span>
            <span style={{ color: t.rayChromB }}>{(info.nd + (info.nd - 1) / (2 * info.vd)).toFixed(5)}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: info.vd >= 55 ? t.chromDispLow : info.vd >= 35 ? t.chromDispMid : t.chromDispHigh,
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                color: info.vd >= 55 ? t.chromDispLow : info.vd >= 35 ? t.chromDispMid : t.chromDispHigh,
              }}
            >
              {info.vd >= 55 ? "Low dispersion" : info.vd >= 35 ? "Normal dispersion" : "High dispersion"}
              {info.vd >= 65 ? " (ED)" : ""}
            </span>
          </div>
        </div>
      )}
      {info.apdNote && (
        <div style={{ fontSize: 9.5, color: t.apdNote, marginTop: 3, transition: "color 0.3s" }}>{info.apdNote}</div>
      )}
      <div
        style={{
          fontSize: 9.5,
          color: t.role,
          marginTop: 5,
          lineHeight: 1.5,
          transition: "color 0.3s",
        }}
      >
        {info.role}
      </div>
    </div>
  );
}
