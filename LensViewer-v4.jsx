/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           INTERACTIVE LENS CROSS-SECTION VISUALIZATION             ║
 * ║                     — Generic Viewer — v4.0                        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  v4 architecture: LENS_DATA separated from viewer logic.           ║
 * ║                                                                    ║
 * ║  All lens prescriptions live in external data files under           ║
 * ║  ./lens-data/, each exporting a LENS_DATA object.  This viewer     ║
 * ║  imports from a LENS_CATALOG, builds the runtime lens (L) on       ║
 * ║  selection, and renders.                                           ║
 * ║                                                                    ║
 * ║  Key refactor from v3.1:                                           ║
 * ║    • Module-level L eliminated — computed via useMemo.             ║
 * ║    • Every helper (renderSag, thick, layout, traceRay, etc.)       ║
 * ║      now accepts L as an explicit parameter.                       ║
 * ║    • Runtime lens switching via dropdown selector.                 ║
 * ║    • Theme system unchanged (generic across all lenses).           ║
 * ║    • Lens data fully externalized to ./lens-data/ files.           ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

import { useState, useMemo, useCallback } from "react";

import ApoLanthar50f2 from './lens-data/ApoLanthar50f2.data.js';
import Nokton50f1     from './lens-data/Nokton50f1.data.js';


/* =====================================================================
 * §1  LENS CATALOG — Registry of available prescriptions
 * =====================================================================
 *  Each lens prescription lives in its own file under ./lens-data/.
 *  To add a new lens, create a data file and add it to this map.
 * ------------------------------------------------------------------- */

const LENS_CATALOG = {
  "apo-lanthar-50f2": ApoLanthar50f2,
  "nokton-50f1":      Nokton50f1,
};

const CATALOG_KEYS = Object.keys(LENS_CATALOG);


/* =====================================================================
 * §2  buildLens() — Validate, resolve, derive
 * =====================================================================
 *  Takes a LENS_DATA-shaped object and returns a frozen runtime object
 *  with all label→index resolution done, ES auto-derived, and optical
 *  constants computed.  Pure function — no side effects.
 * ------------------------------------------------------------------- */

function buildLens(data) {
  const S = data.surfaces.map(s => ({ ...s }));
  const N = S.length;

  const labelIdx = {};
  for (let i = 0; i < N; i++) {
    if (labelIdx[S[i].label] !== undefined)
      throw new Error(`Duplicate surface label: "${S[i].label}"`);
    labelIdx[S[i].label] = i;
  }

  const asphByIdx = {};
  for (const [label, coeffs] of Object.entries(data.asph || {})) {
    const idx = labelIdx[label];
    if (idx === undefined) throw new Error(`ASPH label "${label}" not found in surfaces`);
    asphByIdx[idx] = coeffs;
  }

  const varByIdx = {};
  for (const [label, range] of Object.entries(data.var || {})) {
    const idx = labelIdx[label];
    if (idx === undefined) throw new Error(`VAR label "${label}" not found in surfaces`);
    varByIdx[idx] = range;
  }

  const varLabels = (data.varLabels || []).map(([label, text]) => {
    const idx = labelIdx[label];
    if (idx === undefined) throw new Error(`varLabels label "${label}" not found`);
    return [idx, text];
  });

  const ES = [];
  for (const elem of data.elements) {
    let startIdx = -1;
    for (let i = 0; i < N; i++) {
      if (S[i].elemId === elem.id) { startIdx = i; break; }
    }
    if (startIdx === -1) throw new Error(`Element ${elem.id} ("${elem.name}") has no surfaces`);
    ES.push([elem.id, startIdx, startIdx + 1]);
  }

  function resolveAnnotation(arr) {
    return (arr || []).map(g => {
      const from = labelIdx[g.fromSurface];
      const to   = labelIdx[g.toSurface];
      if (from === undefined) throw new Error(`Group/doublet label "${g.fromSurface}" not found`);
      if (to === undefined)   throw new Error(`Group/doublet label "${g.toSurface}" not found`);
      return { text: g.text, fromSurface: from, toSurface: to };
    });
  }
  const groups   = resolveAnnotation(data.groups);
  const doublets = resolveAnnotation(data.doublets);

  const stopIdx = S.findIndex(row => row.label === "STO");
  if (stopIdx === -1) throw new Error('No surface with label "STO" found');

  if (data.nominalFno !== undefined) {
    let y = 1, u = 0, n = 1.0;
    for (let i = 0; i < stopIdx; i++) {
      const { R, nd, d } = S[i];
      const nn = nd === 1.0 ? 1.0 : nd;
      if (Math.abs(R) < 1e10 && nn !== n) u = (n * u - y * (nn - n) / R) / nn;
      n = nn;
      y += d * u;
    }
    const yRatio = y;
    let ye = 1, ue = 0, ne = 1.0;
    for (let i = 0; i < N; i++) {
      const { R, nd, d } = S[i];
      const nn = nd === 1.0 ? 1.0 : nd;
      if (Math.abs(R) < 1e10 && nn !== ne) ue = (ne * ue - ye * (nn - ne) / R) / nn;
      ne = nn;
      if (i < N - 1) ye += d * ue;
    }
    const efl = -1.0 / ue;
    const epSD = efl / (2 * data.nominalFno);
    S[stopIdx].sd = epSD * yRatio;
  }

  function computeEFL() {
    let y = 1, u = 0, n = 1.0;
    for (let i = 0; i < N; i++) {
      const { R, nd, d } = S[i];
      const nn = nd === 1.0 ? 1.0 : nd;
      if (Math.abs(R) < 1e10 && nn !== n) u = (n * u - y * (nn - n) / R) / nn;
      n = nn;
      if (i < N - 1) y += d * u;
    }
    return -1.0 / u;
  }

  function computeEntrancePupil() {
    let y = 1, u = 0, n = 1.0;
    for (let i = 0; i < stopIdx; i++) {
      const { R, nd, d } = S[i];
      const nn = nd === 1.0 ? 1.0 : nd;
      if (Math.abs(R) < 1e10 && nn !== n) u = (n * u - y * (nn - n) / R) / nn;
      n = nn;
      y += d * u;
    }
    return { epSD: S[stopIdx].sd / y, yRatio: y };
  }

  function computeFrontGroupB() {
    let y = 0, u = 1, n = 1.0;
    for (let i = 0; i < stopIdx; i++) {
      const { R, nd, d } = S[i];
      const nn = nd === 1.0 ? 1.0 : nd;
      if (Math.abs(R) < 1e10 && nn !== n) u = (n * u - y * (nn - n) / R) / nn;
      n = nn;
      y += d * u;
    }
    return y;
  }

  function computeHalfField() {
    function traceFull(y0, u0) {
      const h = [];
      let y = y0, u = u0, n = 1.0;
      for (let i = 0; i < N; i++) {
        h.push(y);
        const { R, nd, d } = S[i];
        const nn = nd === 1.0 ? 1.0 : nd;
        if (Math.abs(R) < 1e10 && nn !== n) u = (n * u - y * (nn - n) / R) / nn;
        n = nn;
        if (i < N - 1) y += d * u;
      }
      return h;
    }
    const hA = traceFull(1, 0);
    const hB = traceFull(0, 1);
    const r = hB[stopIdx] / hA[stopIdx];
    let minU = Infinity;
    for (let i = 0; i < N; i++) {
      if (i === stopIdx) continue;
      const c = Math.abs(hB[i] - r * hA[i]);
      if (c > 1e-8) {
        const uMax = S[i].sd / c;
        if (uMax < minU) minU = uMax;
      }
    }
    return Math.atan(minU) * 180 / Math.PI;
  }

  const EFL  = computeEFL();
  const EP   = computeEntrancePupil();
  const B    = computeFrontGroupB();
  const stopPhysSD = S[stopIdx].sd;
  const FOPEN      = EFL / (2 * EP.epSD);
  const halfField  = computeHalfField();

  function layoutInf() {
    const z = [0];
    for (let i = 0; i < N - 1; i++) z.push(z[i] + S[i].d);
    return z[N - 1] + S[N - 1].d;
  }
  const totalTrack = layoutInf();
  const maxSD = Math.max(...S.map(s => s.sd));

  const { svgW, svgH, scFill, yScFill, maxRimAngleDeg, gapSagFrac, clipMargin } = data;
  const SC  = svgW * scFill / totalTrack;
  const YSC = svgH * yScFill / maxSD;
  const maxRimSin  = Math.sin(maxRimAngleDeg * Math.PI / 180);
  const gridPitch  = totalTrack / 15;
  const gridCount  = Math.ceil(svgW / (gridPitch * SC)) + 4;
  const lyDoublet  = -1.10  * maxSD;
  const lyImgLine  =  1.133 * maxSD;
  const lyImgLabel = -1.233 * maxSD;
  const lyElemNum  =  1.20  * maxSD;
  const lyGroup    =  1.37  * maxSD;
  const lyStoPad   =  0.12  * maxSD;

  const rayHeights      = data.rayFractions.map(f => f * EP.epSD);
  const rayLead         = totalTrack * data.rayLeadFrac;
  const bladeStubFrac   = 1 - Math.max(...data.rayFractions.map(Math.abs));
  const offAxisFieldDeg = halfField * data.offAxisFieldFrac;
  const offAxisHeights  = data.offAxisFractions.map(f => f * EP.epSD);

  return Object.freeze({
    data, S, N, ES,
    elements: data.elements,
    asphByIdx, varByIdx, varLabels,
    groups, doublets,
    stopIdx, stopPhysSD,
    EFL, EP, B, FOPEN, halfField, totalTrack, maxSD,
    svgW: data.svgW, svgH: data.svgH,
    SC, YSC, maxRimSin, gapSagFrac, clipMargin,
    gridPitch, gridCount,
    lyDoublet, lyImgLine, lyImgLabel, lyElemNum, lyGroup, lyStoPad,
    rayFractions: data.rayFractions, rayHeights, rayLead, bladeStubFrac,
    offAxisFieldDeg, offAxisFractions: data.offAxisFractions, offAxisHeights,
    closeFocusM: data.closeFocusM, focusStep: data.focusStep,
    focusDescription: data.focusDescription,
    maxFstop: data.maxFstop, apertureStep: data.apertureStep,
    fstopSeries: data.fstopSeries,
    labelIdx,
  });
}


/* =====================================================================
 * §3  THEME PALETTES — Dark / Light × Default / Ultra High-Contrast
 * =====================================================================
 *  GENERIC — works for any lens without changes.
 * ------------------------------------------------------------------- */

const T = {
  dark: {
    bg: "#0c0d10", headerBg: "linear-gradient(180deg,rgba(14,16,22,1),rgba(10,11,14,1))",
    headerBorder: "rgba(0,200,220,0.22)", panelBg: "rgba(8,10,15,0.98)",
    panelBorder: "rgba(0,200,220,0.16)", panelDivider: "rgba(0,200,220,0.10)",
    infoBgActive: "rgba(12,18,30,0.8)", infoBgIdle: "transparent",
    title: "#f4f6fa", subtitle: "#a0b8d0", specs: "#88a8c4",
    body: "#e2e8f0", label: "#90aac4", muted: "#78a0be",
    value: "#e8eef6", propLabel: "#88a0bb",
    focusDist: "#f2f6fc", focusEndpoint: "#88a8c4",
    sliderTrack: "rgba(40,60,90,0.6)", sliderAccent: "#00d4e6",
    spacingVal: "#88a8c4", desc: "#78a0be",
    apdPatentBg: "rgba(0,184,212,0.20)", apdPatentText: "#00e5ff",
    apdInferBg: "rgba(179,136,255,0.16)", apdInferText: "#d0b8ff",
    cementBg: "rgba(255,183,77,0.14)", cementText: "#ffc040",
    apdNote: "#4dd0e1", role: "#90aabb", elemType: "#b0c4d8",
    legendText: "#90aabb",
    grid: (i) => i % 2 ? "rgba(30,42,60,0.45)" : "rgba(30,42,60,0.45)",
    gridDash: (i) => i % 2 ? "2,5" : "none",
    axis: "rgba(90,120,160,0.22)",
    rayWarm: "rgba(255,100,30,0.50)", rayCool: "rgba(30,140,255,0.50)",
    rayOffWarm: "rgba(200,255,60,0.45)", rayOffCool: "rgba(60,255,200,0.45)",
    rayOffDash: "5,3",
    stop: "#ff8c20", stopLabel: "#ffa040",
    imgLine: "rgba(80,255,140,0.50)", imgLabel: "rgba(90,255,150,0.75)",
    groupLabel: "rgba(120,160,210,0.55)", doubletLabel: "rgba(210,180,120,0.65)",
    elemNum: (e) => e.apd ? "rgba(0,229,255,0.80)" : "rgba(180,200,220,0.70)",
    elemNumActive: "#fff",
    elemFill: (e, on) => {
      if (on) return e.apd ? "rgba(0,200,220,0.38)" : "rgba(210,225,245,0.28)";
      if (e.apd === "patent") return "rgba(0,184,212,0.28)";
      if (e.apd === "inferred") return "rgba(179,136,255,0.22)";
      if (e.nd > 1.78) return "rgba(255,200,80,0.18)";
      if (e.nd > 1.6) return "rgba(200,215,240,0.14)";
      return "rgba(200,235,225,0.12)";
    },
    elemStroke: (e, on) => {
      if (on) return "#fff";
      if (e.apd === "patent") return "rgba(0,200,220,0.85)";
      if (e.apd === "inferred") return "rgba(179,136,255,0.70)";
      return "rgba(180,200,225,0.55)";
    },
    toggleBg: "rgba(255,255,255,0.08)", toggleBorder: "rgba(255,255,255,0.16)",
    toggleText: "#a0b4c8", toggleIcon: "☀️",
    toggleActiveBg: "rgba(0,200,220,0.16)", toggleActiveBorder: "rgba(0,200,220,0.45)",
    toggleActiveText: "#d0eef4", toggleInactiveText: "#607080",
    legendSwatches: [
      ["rgba(0,184,212,0.28)", "rgba(0,200,220,0.65)", "Patent-listed APD"],
      ["rgba(179,136,255,0.22)", "rgba(179,136,255,0.55)", "Inferred APD"],
      ["rgba(200,215,240,0.14)", "rgba(180,200,225,0.40)", "Standard glass"],
    ],
    rayWidthScale: 1.0, elemStrokeIdle: 0.9, elemStrokeActive: 1.9,
    imgLineWidth: 1.0, gridStrokeWidth: 0.4,
    selectorBg: "rgba(255,255,255,0.06)", selectorBorder: "rgba(0,200,220,0.25)",
    selectorText: "#c0d4e8", selectorHover: "rgba(0,200,220,0.12)",
  },
  light: {
    bg: "#ffffff", headerBg: "#f5f6f8",
    headerBorder: "#c8cdd6", panelBg: "#f5f6f8",
    panelBorder: "#c8cdd6", panelDivider: "#d0d5dc",
    infoBgActive: "#e8ecf2", infoBgIdle: "transparent",
    title: "#0a0f18", subtitle: "#3a4a5c", specs: "#44546a",
    body: "#141c28", label: "#3a4e64", muted: "#2e4258",
    value: "#141c28", propLabel: "#44566e",
    focusDist: "#0a0f18", focusEndpoint: "#2e4258",
    sliderTrack: "#c4cad4", sliderAccent: "#006878",
    spacingVal: "#3a5068", desc: "#2e4258",
    apdPatentBg: "rgba(0,96,128,0.14)", apdPatentText: "#005070",
    apdInferBg: "rgba(90,26,176,0.10)", apdInferText: "#4a18a0",
    cementBg: "rgba(138,106,16,0.10)", cementText: "#6a5010",
    apdNote: "#006888", role: "#2e4258", elemType: "#2a3a50",
    legendText: "#2a3a50",
    grid: (i) => i % 2 ? "rgba(180,190,205,0.55)" : "rgba(165,178,195,0.6)",
    gridDash: (i) => i % 2 ? "2,5" : "none",
    axis: "rgba(100,120,150,0.35)",
    rayWarm: "rgba(200,60,10,0.50)", rayCool: "rgba(10,80,200,0.45)",
    rayOffWarm: "rgba(50,130,10,0.50)", rayOffCool: "rgba(10,130,80,0.50)",
    rayOffDash: "5,3",
    stop: "#d06010", stopLabel: "#c05810",
    imgLine: "rgba(10,140,60,0.60)", imgLabel: "rgba(10,120,55,0.85)",
    groupLabel: "rgba(50,80,120,0.65)", doubletLabel: "rgba(120,90,30,0.75)",
    elemNum: (e) => e.apd ? "rgba(0,80,112,0.85)" : "rgba(50,70,95,0.75)",
    elemNumActive: "#0a0f18",
    elemFill: (e, on) => {
      if (on) return e.apd ? "rgba(0,96,128,0.28)" : "rgba(60,80,110,0.20)";
      if (e.apd === "patent") return "rgba(0,120,160,0.18)";
      if (e.apd === "inferred") return "rgba(90,40,180,0.13)";
      if (e.nd > 1.78) return "rgba(170,130,20,0.15)";
      if (e.nd > 1.6) return "rgba(40,80,140,0.10)";
      return "rgba(40,110,90,0.08)";
    },
    elemStroke: (e, on) => {
      if (on) return "#0a0f18";
      if (e.apd === "patent") return "rgba(0,96,128,0.80)";
      if (e.apd === "inferred") return "rgba(90,40,180,0.65)";
      return "rgba(60,80,110,0.55)";
    },
    toggleBg: "rgba(0,0,0,0.06)", toggleBorder: "rgba(0,0,0,0.14)",
    toggleText: "#3a4e64", toggleIcon: "🌙",
    toggleActiveBg: "rgba(0,96,128,0.12)", toggleActiveBorder: "rgba(0,96,128,0.45)",
    toggleActiveText: "#005060", toggleInactiveText: "#8896a4",
    legendSwatches: [
      ["rgba(0,120,160,0.18)", "rgba(0,96,128,0.60)", "Patent-listed APD"],
      ["rgba(90,40,180,0.13)", "rgba(90,40,180,0.50)", "Inferred APD"],
      ["rgba(40,80,140,0.10)", "rgba(60,80,110,0.40)", "Standard glass"],
    ],
    rayWidthScale: 1.0, elemStrokeIdle: 1.0, elemStrokeActive: 2.0,
    imgLineWidth: 1.0, gridStrokeWidth: 0.4,
    selectorBg: "rgba(0,0,0,0.04)", selectorBorder: "rgba(0,0,0,0.14)",
    selectorText: "#2a3a50", selectorHover: "rgba(0,96,128,0.08)",
  },
  darkHC: {
    bg: "#000000", headerBg: "linear-gradient(180deg,rgba(8,10,14,1),rgba(0,0,0,1))",
    headerBorder: "rgba(0,220,240,0.30)", panelBg: "rgba(4,5,8,0.99)",
    panelBorder: "rgba(0,220,240,0.24)", panelDivider: "rgba(0,220,240,0.15)",
    infoBgActive: "rgba(8,14,24,0.85)", infoBgIdle: "transparent",
    title: "#ffffff", subtitle: "#c0d4e8", specs: "#a0bcd6",
    body: "#f0f4fa", label: "#a8c0d8", muted: "#98bcd6",
    value: "#f4f8ff", propLabel: "#a0b8d0",
    focusDist: "#ffffff", focusEndpoint: "#a0bcd6",
    sliderTrack: "rgba(50,70,100,0.7)", sliderAccent: "#00f0ff",
    spacingVal: "#a0bcd6", desc: "#98bcd6",
    apdPatentBg: "rgba(0,200,230,0.26)", apdPatentText: "#20f0ff",
    apdInferBg: "rgba(190,150,255,0.22)", apdInferText: "#e0c8ff",
    cementBg: "rgba(255,200,90,0.18)", cementText: "#ffd050",
    apdNote: "#60e0f0", role: "#a8bcd0", elemType: "#c0d4e8",
    legendText: "#a8bcd0",
    grid: (i) => i % 2 ? "rgba(35,50,70,0.55)" : "rgba(35,50,70,0.55)",
    gridDash: (i) => i % 2 ? "2,5" : "none",
    axis: "rgba(100,135,180,0.28)",
    rayWarm: "rgba(255,90,20,0.68)", rayCool: "rgba(20,130,255,0.68)",
    rayOffWarm: "rgba(220,255,50,0.60)", rayOffCool: "rgba(50,255,220,0.60)",
    rayOffDash: "5,3",
    stop: "#ff9830", stopLabel: "#ffb050",
    imgLine: "rgba(70,255,130,0.65)", imgLabel: "rgba(80,255,140,0.88)",
    groupLabel: "rgba(140,180,230,0.70)", doubletLabel: "rgba(230,195,130,0.78)",
    elemNum: (e) => e.apd ? "rgba(0,240,255,0.90)" : "rgba(200,215,235,0.80)",
    elemNumActive: "#fff",
    elemFill: (e, on) => {
      if (on) return e.apd ? "rgba(0,220,240,0.45)" : "rgba(220,235,255,0.35)";
      if (e.apd === "patent") return "rgba(0,200,230,0.35)";
      if (e.apd === "inferred") return "rgba(190,150,255,0.28)";
      if (e.nd > 1.78) return "rgba(255,200,70,0.25)";
      if (e.nd > 1.6) return "rgba(210,225,250,0.18)";
      return "rgba(210,245,235,0.15)";
    },
    elemStroke: (e, on) => {
      if (on) return "#fff";
      if (e.apd === "patent") return "rgba(0,220,240,0.92)";
      if (e.apd === "inferred") return "rgba(190,150,255,0.80)";
      return "rgba(195,215,240,0.70)";
    },
    toggleBg: "rgba(255,255,255,0.10)", toggleBorder: "rgba(255,255,255,0.20)",
    toggleText: "#b0c4d8", toggleIcon: "☀️",
    toggleActiveBg: "rgba(0,220,240,0.20)", toggleActiveBorder: "rgba(0,220,240,0.55)",
    toggleActiveText: "#e0f4f8", toggleInactiveText: "#708090",
    legendSwatches: [
      ["rgba(0,200,230,0.35)", "rgba(0,220,240,0.75)", "Patent-listed APD"],
      ["rgba(190,150,255,0.28)", "rgba(190,150,255,0.65)", "Inferred APD"],
      ["rgba(210,225,250,0.18)", "rgba(195,215,240,0.50)", "Standard glass"],
    ],
    rayWidthScale: 1.25, elemStrokeIdle: 1.1, elemStrokeActive: 2.2,
    imgLineWidth: 1.4, gridStrokeWidth: 0.55,
    selectorBg: "rgba(255,255,255,0.08)", selectorBorder: "rgba(0,220,240,0.35)",
    selectorText: "#e0f4f8", selectorHover: "rgba(0,220,240,0.18)",
  },
  lightHC: {
    bg: "#ffffff", headerBg: "#f2f3f6",
    headerBorder: "#b0b8c4", panelBg: "#f2f3f6",
    panelBorder: "#b0b8c4", panelDivider: "#bcc2cc",
    infoBgActive: "#e0e5ee", infoBgIdle: "transparent",
    title: "#000000", subtitle: "#1e2e40", specs: "#283848",
    body: "#080e16", label: "#1e3048", muted: "#1a3048",
    value: "#080e16", propLabel: "#2a3e54",
    focusDist: "#000000", focusEndpoint: "#1a3048",
    sliderTrack: "#a8b0bc", sliderAccent: "#004858",
    spacingVal: "#1e3854", desc: "#1a3048",
    apdPatentBg: "rgba(0,80,112,0.18)", apdPatentText: "#003c58",
    apdInferBg: "rgba(75,18,160,0.13)", apdInferText: "#380e88",
    cementBg: "rgba(120,90,10,0.13)", cementText: "#504008",
    apdNote: "#005068", role: "#1a3048", elemType: "#162838",
    legendText: "#162838",
    grid: (i) => i % 2 ? "rgba(160,172,190,0.65)" : "rgba(145,160,180,0.70)",
    gridDash: (i) => i % 2 ? "2,5" : "none",
    axis: "rgba(80,100,130,0.42)",
    rayWarm: "rgba(185,45,0,0.65)", rayCool: "rgba(0,65,190,0.60)",
    rayOffWarm: "rgba(35,115,0,0.62)", rayOffCool: "rgba(0,115,65,0.62)",
    rayOffDash: "5,3",
    stop: "#c05008", stopLabel: "#b04808",
    imgLine: "rgba(0,125,50,0.72)", imgLabel: "rgba(0,110,45,0.92)",
    groupLabel: "rgba(35,65,105,0.78)", doubletLabel: "rgba(105,78,20,0.85)",
    elemNum: (e) => e.apd ? "rgba(0,65,95,0.92)" : "rgba(35,55,80,0.85)",
    elemNumActive: "#000000",
    elemFill: (e, on) => {
      if (on) return e.apd ? "rgba(0,80,112,0.34)" : "rgba(45,65,95,0.26)";
      if (e.apd === "patent") return "rgba(0,105,145,0.24)";
      if (e.apd === "inferred") return "rgba(75,30,165,0.18)";
      if (e.nd > 1.78) return "rgba(155,118,10,0.20)";
      if (e.nd > 1.6) return "rgba(30,65,125,0.14)";
      return "rgba(30,100,78,0.11)";
    },
    elemStroke: (e, on) => {
      if (on) return "#000000";
      if (e.apd === "patent") return "rgba(0,80,112,0.88)";
      if (e.apd === "inferred") return "rgba(75,30,165,0.75)";
      return "rgba(45,65,95,0.68)";
    },
    toggleBg: "rgba(0,0,0,0.08)", toggleBorder: "rgba(0,0,0,0.18)",
    toggleText: "#1e3048", toggleIcon: "🌙",
    toggleActiveBg: "rgba(0,80,112,0.15)", toggleActiveBorder: "rgba(0,80,112,0.55)",
    toggleActiveText: "#003848", toggleInactiveText: "#748498",
    legendSwatches: [
      ["rgba(0,105,145,0.24)", "rgba(0,80,112,0.70)", "Patent-listed APD"],
      ["rgba(75,30,165,0.18)", "rgba(75,30,165,0.60)", "Inferred APD"],
      ["rgba(30,65,125,0.14)", "rgba(45,65,95,0.50)", "Standard glass"],
    ],
    rayWidthScale: 1.25, elemStrokeIdle: 1.2, elemStrokeActive: 2.4,
    imgLineWidth: 1.4, gridStrokeWidth: 0.55,
    selectorBg: "rgba(0,0,0,0.06)", selectorBorder: "rgba(0,0,0,0.18)",
    selectorText: "#162838", selectorHover: "rgba(0,80,112,0.10)",
  },
};


/* =====================================================================
 * §4  RENDERING HELPERS — Sag, layout, and shape utilities
 * =====================================================================
 *  v4: Every function accepts L as an explicit parameter.
 * ------------------------------------------------------------------- */

function sag(h, R) {
  if (Math.abs(R) > 1e10) return 0;
  const c = 1 / R, h2 = h * h, d = 1 - c * c * h2;
  return (c * h2) / (1 + Math.sqrt(d > 0 ? d : 0));
}

function renderSag(h, surfIdx, L) {
  const R = L.S[surfIdx].R;
  const a = L.asphByIdx[surfIdx];
  if (!a) return sag(h, R);
  if (Math.abs(R) > 1e10 && !a) return 0;
  const c = Math.abs(R) > 1e10 ? 0 : 1.0 / R;
  const h2 = h * h;
  const d = 1 - (1 + a.K) * c * c * h2;
  const conic = (c * h2) / (1 + Math.sqrt(d > 0 ? d : 1e-12));
  const poly = a.A4*h2*h2 + a.A6*h2**3 + a.A8*h2**4
             + a.A10*h2**5 + a.A12*h2**6 + a.A14*h2**7;
  return conic + poly;
}

function gapTrimHeight(surfIdx, sd, maxSag, L) {
  if (maxSag <= 0 || L.gapSagFrac <= 0) return sd;
  if (Math.abs(renderSag(sd, surfIdx, L)) <= maxSag) return sd;
  let lo = 0, hi = sd;
  for (let j = 0; j < 30; j++) {
    const mid = (lo + hi) / 2;
    if (Math.abs(renderSag(mid, surfIdx, L)) > maxSag) hi = mid; else lo = mid;
  }
  return (lo + hi) / 2;
}

function thick(i, t, L) {
  const v = L.varByIdx[i];
  return v ? v[0] + (v[1] - v[0]) * t : L.S[i].d;
}

function doLayout(t, L) {
  const th = L.S.map((_, i) => thick(i, t, L));
  const z = [0];
  for (let i = 0; i < th.length - 1; i++) z.push(z[i] + th[i]);
  return { z, th, imgZ: z[z.length - 1] + th[th.length - 1] };
}


/* =====================================================================
 * §5  OPTICS ENGINE — Ray-trace and conjugate functions
 * =====================================================================
 *  v4: L passed explicitly.
 * ------------------------------------------------------------------- */

function traceRay(y0, u0, zPos, t, stopSD, ghost, L) {
  const pts = [];
  const ghostPts = [];
  pts.push([zPos[0] - L.rayLead, y0 - u0 * L.rayLead]);
  let y = y0, u = u0, n = 1.0;
  let clipped = false;
  for (let i = 0; i < L.N; i++) {
    const { R, nd, sd } = L.S[i];
    const z = zPos[i];
    const isStop = i === L.stopIdx;
    const clip = (isStop && stopSD !== undefined) ? stopSD : sd * L.clipMargin;
    if (!clipped && Math.abs(y) > clip) {
      if (!ghost) break;
      clipped = true;
    }
    const pt = [z + sag(Math.abs(y), R), y];
    if (clipped) ghostPts.push(pt); else pts.push(pt);
    const nn = nd === 1.0 ? 1.0 : nd;
    if (Math.abs(R) < 1e10 && nn !== n) u = (n * u - y * (nn - n) / R) / nn;
    n = nn;
    if (i < L.N - 1) y += thick(i, t, L) * u;
  }
  return { pts, ghostPts, y, u, clipped };
}

function traceToImage(y0, u0, t, L) {
  let y = y0, u = u0, n = 1.0;
  for (let i = 0; i < L.N; i++) {
    const { R, nd } = L.S[i];
    const nn = nd === 1.0 ? 1.0 : nd;
    if (Math.abs(R) < 1e10 && nn !== n) u = (n * u - y * (nn - n) / R) / nn;
    n = nn;
    y += thick(i, t, L) * u;
  }
  return y;
}

function conjugateK(t, L) {
  const y10 = traceToImage(1, 0, t, L);
  const y01 = traceToImage(0, 1, t, L);
  if (Math.abs(y01) < 1e-15) return 0;
  return -y10 / y01;
}

function formatDist(t, L) {
  if (t < 0.003) return "∞";
  const d = L.closeFocusM / t;
  if (d >= 100) return `${Math.round(d)} m`;
  if (d >= 10) return `${d.toFixed(1)} m`;
  if (d >= 1) return `${d.toFixed(2)} m`;
  return `${(d * 100).toFixed(0)} cm`;
}


/* =====================================================================
 * §6  RENDERER — React component
 * =====================================================================
 *  v4: L computed from selected LENS_DATA via useMemo.  All render
 *  logic parameterised on L — no module-level state.
 * ------------------------------------------------------------------- */

export default function LensVisualization() {
  const [lensKey, setLensKey] = useState(CATALOG_KEYS[0]);
  const [dark, setDark] = useState(true);
  const [highContrast, setHighContrast] = useState(false);
  const [focusT, setFocusT] = useState(0);
  const [hov, setHov] = useState(null);
  const [sel, setSel] = useState(null);
  const [showOnAxis, setShowOnAxis] = useState(true);
  const [showOffAxis, setShowOffAxis] = useState(false);
  const [rayTracksF, setRayTracksF] = useState(false);
  const [stopdownT, setStopdownT] = useState(0);

  /* ── Build lens from selected data ── */
  const L = useMemo(() => buildLens(LENS_CATALOG[lensKey]), [lensKey]);

  /* ── Reset interactive state on lens change ── */
  const switchLens = useCallback((key) => {
    setLensKey(key);
    setFocusT(0);
    setStopdownT(0);
    setHov(null);
    setSel(null);
  }, []);

  const act = sel || hov;
  const info = act ? L.elements.find(e => e.id === act) : null;
  const t = T[dark ? (highContrast ? "darkHC" : "dark") : (highContrast ? "lightHC" : "light")];

  const inf = useMemo(() => doLayout(0, L), [L]);
  const IMG_MM = inf.imgZ;
  const cur = useMemo(() => doLayout(focusT, L), [focusT, L]);
  const dz = IMG_MM - cur.imgZ;
  const zPos = useMemo(() => cur.z.map(v => v + dz), [cur, dz]);

  const MID = IMG_MM / 2, CX = L.svgW / 2, CY = L.svgH / 2;
  const IX = CX + MID * L.SC;
  const sx = useCallback(z => IX - (IMG_MM - z) * L.SC, [IX, IMG_MM, L.SC]);
  const sy = useCallback(y => CY + y * L.YSC, [CY, L.YSC]);

  const shapes = useMemo(() => L.ES.map(([eid, s1, s2]) => {
    const sd = Math.min(L.S[s1].sd, L.S[s2].sd);
    const R1 = Math.abs(L.S[s1].R), R2 = Math.abs(L.S[s2].R);
    let trim1 = R1 < 1e10 ? Math.min(sd, R1 * L.maxRimSin) : sd;
    let trim2 = R2 < 1e10 ? Math.min(sd, R2 * L.maxRimSin) : sd;
    if (s1 > 0 && L.gapSagFrac > 0 && renderSag(trim1, s1, L) < 0) {
      const gapBefore = L.S[s1 - 1].d;
      trim1 = gapTrimHeight(s1, trim1, gapBefore * L.gapSagFrac, L);
    }
    const z1 = zPos[s1], z2 = zPos[s2], NN = 48;
    let d = "";
    for (let i = 0; i <= NN; i++) { const y = -sd + 2 * sd * i / NN; d += `${i ? "L" : "M"}${sx(z1 + renderSag(Math.min(Math.abs(y), trim1), s1, L))},${sy(y)} `; }
    for (let i = NN; i >= 0; i--) { const y = -sd + 2 * sd * i / NN; d += `L${sx(z2 + renderSag(Math.min(Math.abs(y), trim2), s2, L))},${sy(y)} `; }
    return { eid, d: d + "Z", z1, z2 };
  }), [zPos, sx, sy, L]);

  const stopZ = zPos[L.stopIdx];
  const fNumber = L.FOPEN * Math.pow(L.maxFstop / L.FOPEN, stopdownT);
  const currentPhysStopSD = L.stopPhysSD * L.FOPEN / fNumber;
  const currentEPSD = L.EP.epSD * L.FOPEN / fNumber;
  const focusK = useMemo(() => rayTracksF ? conjugateK(focusT, L) : 0, [focusT, rayTracksF, L]);

  const rays = useMemo(() => {
    const out = [];
    for (const f of L.rayFractions) {
      const h = f * currentEPSD;
      const uIn = rayTracksF ? h * focusK : 0;
      const { pts, y, u } = traceRay(h, uIn, zPos, focusT, currentPhysStopSD, false, L);
      const sp = pts.map(([z, yy]) => [sx(z), sy(yy)]);
      const last = pts[pts.length - 1];
      if (last) { const dzI = IMG_MM - last[0]; sp.push([sx(IMG_MM), sy(last[1] + dzI * u)]); }
      out.push(sp);
    }
    return out;
  }, [zPos, focusT, sx, sy, currentPhysStopSD, currentEPSD, rayTracksF, focusK, L, IMG_MM]);

  const offAxisRays = useMemo(() => {
    const out = [];
    const uField = -Math.tan(L.offAxisFieldDeg * Math.PI / 180);
    const yChief = -(L.B / L.EP.yRatio) * uField;
    for (const f of L.offAxisFractions) {
      const h = f * currentEPSD;
      const y0 = yChief + h;
      const uConverge = rayTracksF ? h * focusK : 0;
      const uIn = uField + uConverge;
      const { pts, ghostPts, y, u, clipped } = traceRay(y0, uIn, zPos, focusT, currentPhysStopSD, true, L);
      const sp = pts.map(([z, yy]) => [sx(z), sy(yy)]);
      let gp = [];
      if (clipped && ghostPts.length > 0) {
        const lastSolid = pts[pts.length - 1];
        if (lastSolid) gp.push([sx(lastSolid[0]), sy(lastSolid[1])]);
        gp = gp.concat(ghostPts.map(([z, yy]) => [sx(z), sy(yy)]));
        const lastGhost = ghostPts[ghostPts.length - 1];
        if (lastGhost) { const dzI = IMG_MM - lastGhost[0]; gp.push([sx(IMG_MM), sy(lastGhost[1] + dzI * u)]); }
      }
      if (!clipped) {
        const last = pts[pts.length - 1];
        if (last) { const dzI = IMG_MM - last[0]; sp.push([sx(IMG_MM), sy(last[1] + dzI * u)]); }
      }
      out.push({ sp, gp });
    }
    return out;
  }, [zPos, focusT, sx, sy, currentPhysStopSD, currentEPSD, rayTracksF, focusK, L, IMG_MM]);

  const varReadouts = L.varLabels.map(([idx, label]) => {
    const v = L.varByIdx[idx];
    const val = (v[0] + (v[1] - v[0]) * focusT).toFixed(2);
    return { label, val };
  });

  return (
    <div style={{ background: t.bg, color: t.body, fontFamily: "'JetBrains Mono','SF Mono','Fira Code',monospace", minHeight: "100vh", transition: "background 0.3s,color 0.3s" }}>
      {/* ── Header ── */}
      <div style={{ padding: "18px 24px 10px", borderBottom: `1px solid ${t.headerBorder}`, background: t.headerBg, display: "flex", justifyContent: "space-between", alignItems: "flex-start", transition: "background 0.3s,border-color 0.3s" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
            <h1 style={{ fontSize: 17, fontWeight: 700, letterSpacing: "0.04em", margin: 0, color: t.title, fontFamily: "'DM Sans','Helvetica Neue',sans-serif", transition: "color 0.3s" }}>{L.data.name}</h1>
            <span style={{ fontSize: 10.5, color: t.subtitle, letterSpacing: "0.08em", transition: "color 0.3s" }}>{L.data.subtitle}</span>
          </div>
          <div style={{ display: "flex", gap: 22, marginTop: 6, fontSize: 10, color: t.specs, letterSpacing: "0.06em", transition: "color 0.3s", flexWrap: "wrap" }}>
            {L.data.specs.map((s, i) => <span key={i}>{s}</span>)}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, flexShrink: 0 }}>
          {/* ── Lens selector ── */}
          <select
            value={lensKey}
            onChange={e => switchLens(e.target.value)}
            style={{
              background: t.selectorBg, border: `1px solid ${t.selectorBorder}`,
              borderRadius: 6, padding: "5px 28px 5px 10px", cursor: "pointer",
              fontSize: 10, color: t.selectorText, fontFamily: "inherit",
              letterSpacing: "0.06em", appearance: "none", outline: "none",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='${encodeURIComponent(t.selectorText)}'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat", backgroundPosition: "right 8px center",
              transition: "all 0.3s", maxWidth: 260,
            }}
          >
            {CATALOG_KEYS.map(k => (
              <option key={k} value={k} style={{ background: t.bg, color: t.body }}>
                {LENS_CATALOG[k].name}
              </option>
            ))}
          </select>
          {/* ── Theme controls ── */}
          <div style={{ display: "flex", gap: 5 }}>
            <button onClick={() => setHighContrast(!highContrast)} style={{
              background: highContrast ? t.toggleActiveBg : t.toggleBg,
              border: `1px solid ${highContrast ? t.toggleActiveBorder : t.toggleBorder}`, borderRadius: 6,
              padding: "5px 10px", cursor: "pointer", fontSize: 11,
              color: highContrast ? t.toggleActiveText : t.toggleText,
              display: "flex", alignItems: "center", gap: 5, transition: "all 0.3s",
              fontFamily: "inherit", letterSpacing: "0.06em",
            }}>
              <span style={{ fontSize: 12, lineHeight: 1, fontWeight: 700 }}>◐</span><span>HC</span>
            </button>
            <button onClick={() => setDark(!dark)} style={{
              background: t.toggleBg, border: `1px solid ${t.toggleBorder}`, borderRadius: 6,
              padding: "5px 10px", cursor: "pointer", fontSize: 11, color: t.toggleText,
              display: "flex", alignItems: "center", gap: 5, transition: "all 0.3s",
              fontFamily: "inherit", letterSpacing: "0.06em",
            }}>
              <span style={{ fontSize: 14, lineHeight: 1 }}>{t.toggleIcon}</span><span>{dark ? "Light" : "Dark"}</span>
            </button>
          </div>
          {/* ── Ray controls ── */}
          <div style={{ display: "flex", gap: 5 }}>
            {[
              { label: "ON-AXIS", active: showOnAxis, set: setShowOnAxis, dotA: t.rayWarm, dotB: t.rayCool },
              { label: "OFF-AXIS", active: showOffAxis, set: setShowOffAxis, dotA: t.rayOffWarm, dotB: t.rayOffCool },
            ].map(({ label, active, set, dotA, dotB }) => (
              <button key={label} onClick={() => set(!active)} style={{
                background: active ? t.toggleActiveBg : t.toggleBg,
                border: `1px solid ${active ? t.toggleActiveBorder : t.toggleBorder}`,
                borderRadius: 5, padding: "3px 8px", cursor: "pointer",
                fontSize: 9, color: active ? t.toggleActiveText : t.toggleInactiveText,
                display: "flex", alignItems: "center", gap: 5, transition: "all 0.25s",
                fontFamily: "inherit", letterSpacing: "0.08em",
              }}>
                <svg width="14" height="8" viewBox="0 0 14 8" style={{ flexShrink: 0 }}>
                  <line x1="0" y1="4" x2="14" y2="4" stroke={active ? dotA : "rgba(128,128,128,0.3)"} strokeWidth="1.5" />
                  <line x1="0" y1="7" x2="14" y2="7" stroke={active ? dotB : "rgba(128,128,128,0.3)"} strokeWidth="1.5" />
                </svg>
                <span>{label}</span>
              </button>
            ))}
          </div>
          <div style={{ display: "flex", gap: 0, borderRadius: 5, overflow: "hidden", border: `1px solid ${t.toggleBorder}`, transition: "border-color 0.3s" }}>
            {[
              { label: "FROM ∞", val: false, icon: "∥" },
              { label: "TRACKS FOCUS", val: true, icon: "⟩" },
            ].map(({ label, val, icon }) => (
              <button key={label} onClick={() => setRayTracksF(val)} style={{
                background: rayTracksF === val ? t.toggleActiveBg : t.toggleBg,
                border: "none", borderRight: !val ? `1px solid ${t.toggleBorder}` : "none",
                padding: "3px 9px", cursor: "pointer",
                fontSize: 9, color: rayTracksF === val ? t.toggleActiveText : t.toggleInactiveText,
                display: "flex", alignItems: "center", gap: 4, transition: "all 0.25s",
                fontFamily: "inherit", letterSpacing: "0.08em",
              }}>
                <span style={{ fontSize: 11, fontWeight: 700, lineHeight: 1, opacity: rayTracksF === val ? 1 : 0.4 }}>{icon}</span><span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── SVG viewport ── */}
      <svg viewBox={`0 0 ${L.svgW} ${L.svgH}`} width="100%" style={{ display: "block", maxHeight: "54vh", minHeight: 290, background: t.bg, transition: "background 0.3s" }}>
        <defs>
          {dark ? (
            <filter id="gl"><feGaussianBlur stdDeviation="2.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          ) : (
            <filter id="gl"><feGaussianBlur stdDeviation="3" result="b" /><feFlood floodColor="#1070c0" floodOpacity="0.12" result="c" /><feComposite in="c" in2="b" operator="in" result="d" /><feMerge><feMergeNode in="d" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          )}
        </defs>
        {Array.from({ length: L.gridCount }, (_, i) => {
          const x = CX - (L.gridCount / 2) * L.gridPitch * L.SC + i * L.gridPitch * L.SC;
          return x > 0 && x < L.svgW ? <line key={i} x1={x} y1={20} x2={x} y2={L.svgH - 20} stroke={t.grid(i)} strokeWidth={t.gridStrokeWidth} strokeDasharray={t.gridDash(i)} /> : null;
        })}
        <line x1={8} y1={sy(0)} x2={L.svgW - 8} y2={sy(0)} stroke={t.axis} strokeWidth={0.5} strokeDasharray="6,4" />

        {showOnAxis && rays.map((pts, ri) => pts.length > 1 && (
          <polyline key={`on${ri}`} points={pts.map(p => `${p[0]},${p[1]}`).join(" ")} fill="none"
            stroke={ri < L.rayHeights.length / 2 ? t.rayCool : t.rayWarm} strokeWidth={1.2 * t.rayWidthScale} />
        ))}

        {showOffAxis && offAxisRays.map(({ sp, gp }, ri) => {
          const color = ri < L.offAxisHeights.length / 2 ? t.rayOffCool : t.rayOffWarm;
          return <g key={`off${ri}`}>
            {sp.length > 1 && <polyline points={sp.map(p => `${p[0]},${p[1]}`).join(" ")} fill="none"
              stroke={color} strokeWidth={1.1 * t.rayWidthScale} strokeDasharray={t.rayOffDash || "none"} />}
            {gp.length > 1 && <polyline points={gp.map(p => `${p[0]},${p[1]}`).join(" ")} fill="none"
              stroke={color} strokeWidth={0.6 * t.rayWidthScale} strokeDasharray="3,4" opacity={0.3} />}
          </g>;
        })}

        {shapes.map(({ eid, d: path }) => {
          const e = L.elements.find(x => x.id === eid); const on = act === eid;
          return <path key={eid} d={path} fill={t.elemFill(e, on)} stroke={t.elemStroke(e, on)}
            strokeWidth={on ? t.elemStrokeActive : t.elemStrokeIdle} style={{ cursor: "pointer", transition: "all 0.12s", filter: on ? "url(#gl)" : "none" }}
            onMouseEnter={() => setHov(eid)} onMouseLeave={() => setHov(null)}
            onClick={() => setSel(sel === eid ? null : eid)} />;
        })}

        {(() => {
          const bladeInner = Math.min(currentPhysStopSD, L.stopPhysSD * (1 - L.bladeStubFrac));
          return <>
            <line x1={sx(stopZ)} y1={sy(-L.stopPhysSD)} x2={sx(stopZ)} y2={sy(-bladeInner)} stroke={t.stop} strokeWidth={2.2} strokeLinecap="round" />
            <line x1={sx(stopZ)} y1={sy(L.stopPhysSD)} x2={sx(stopZ)} y2={sy(bladeInner)} stroke={t.stop} strokeWidth={2.2} strokeLinecap="round" />
          </>;
        })()}
        <text x={sx(stopZ)} y={sy(-L.stopPhysSD - L.lyStoPad)} textAnchor="middle" fill={t.stopLabel} fontSize={7.5} fontFamily="inherit" style={{ letterSpacing: "0.1em" }}>STO</text>

        <line x1={IX} y1={sy(-L.lyImgLine)} x2={IX} y2={sy(L.lyImgLine)} stroke={t.imgLine} strokeWidth={t.imgLineWidth} strokeDasharray="4,3" />
        <text x={IX} y={sy(L.lyImgLabel)} textAnchor="middle" fill={t.imgLabel} fontSize={7.5} fontFamily="inherit" style={{ letterSpacing: "0.12em" }}>IMG</text>

        {shapes.map(({ eid, z1, z2 }) => {
          const e = L.elements.find(x => x.id === eid); const on = act === eid;
          return <text key={`n${eid}`} x={sx((z1 + z2) / 2)} y={sy(L.lyElemNum)} textAnchor="middle"
            fill={on ? t.elemNumActive : t.elemNum(e)} fontSize={7} fontFamily="inherit" fontWeight={on ? 700 : 400}>{eid}</text>;
        })}

        {L.groups.map(({ text, fromSurface, toSurface }) => (
          <text key={text} x={sx((zPos[fromSurface] + zPos[toSurface]) / 2)} y={sy(L.lyGroup)} fill={t.groupLabel} fontSize={7} fontFamily="inherit" textAnchor="middle" style={{ letterSpacing: "0.08em" }}>{text}</text>
        ))}

        {L.doublets.map(({ text, fromSurface, toSurface }) => (
          <text key={text} x={sx((zPos[fromSurface] + zPos[toSurface]) / 2)} y={sy(L.lyDoublet)} textAnchor="middle" fill={t.doubletLabel} fontSize={7} fontFamily="inherit">{text}</text>
        ))}
      </svg>

      {/* ── Control panel ── */}
      <div style={{ display: "flex", borderTop: `1px solid ${t.panelBorder}`, background: t.panelBg, flexWrap: "wrap", transition: "background 0.3s,border-color 0.3s" }}>
        <div style={{ flex: "1 1 260px", padding: "14px 22px", borderRight: `1px solid ${t.panelDivider}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <span style={{ fontSize: 9.5, color: t.label, letterSpacing: "0.1em", minWidth: 85, transition: "color 0.3s" }}>FOCUS</span>
            <span style={{ fontSize: 14, color: t.focusDist, fontWeight: 700, fontVariantNumeric: "tabular-nums", transition: "color 0.3s" }}>{formatDist(focusT, L)}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 9, color: t.focusEndpoint }}>∞</span>
            <input type="range" min="0" max="1" step={L.focusStep} value={focusT}
              onChange={e => setFocusT(parseFloat(e.target.value))}
              style={{ flex: 1, height: 4, appearance: "none", background: t.sliderTrack, borderRadius: 2, outline: "none", cursor: "pointer", accentColor: t.sliderAccent }} />
            <span style={{ fontSize: 9, color: t.focusEndpoint }}>{L.closeFocusM} m</span>
          </div>
          <div style={{ marginTop: 8, fontSize: 9.5, color: t.desc, lineHeight: 1.6, transition: "color 0.3s" }}>{L.focusDescription}</div>
          <div style={{ marginTop: 6, display: "flex", gap: 14, fontSize: 9, color: t.spacingVal, fontVariantNumeric: "tabular-nums", transition: "color 0.3s" }}>
            {varReadouts.map(({ label, val }) => <span key={label}>{label} {val}</span>)}
          </div>
        </div>

        <div style={{ flex: "1 1 220px", padding: "14px 22px", borderRight: `1px solid ${t.panelDivider}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <span style={{ fontSize: 9.5, color: t.label, letterSpacing: "0.1em", minWidth: 85, transition: "color 0.3s" }}>APERTURE</span>
            <span style={{ fontSize: 14, color: t.focusDist, fontWeight: 700, fontVariantNumeric: "tabular-nums", transition: "color 0.3s" }}>
              f/{fNumber < 10 ? fNumber.toFixed(1) : Math.round(fNumber)}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 9, color: t.focusEndpoint }}>f/{L.FOPEN.toFixed(1)}</span>
            <input type="range" min="0" max="1" step={L.apertureStep} value={stopdownT}
              onChange={e => setStopdownT(parseFloat(e.target.value))}
              style={{ flex: 1, height: 4, appearance: "none", background: t.sliderTrack, borderRadius: 2, outline: "none", cursor: "pointer", accentColor: t.sliderAccent }} />
            <span style={{ fontSize: 9, color: t.focusEndpoint }}>f/{L.maxFstop}</span>
          </div>
          <div style={{ marginTop: 8, fontSize: 9.5, color: t.desc, lineHeight: 1.6, transition: "color 0.3s" }}>
            EFL {L.EFL.toFixed(2)} mm · EP ⌀ {(L.EP.epSD * 2).toFixed(2)} mm · Stop ⌀ {(currentPhysStopSD * 2).toFixed(2)} mm
          </div>
          <div style={{ marginTop: 6, display: "flex", gap: 14, flexWrap: "wrap", fontSize: 9, color: t.spacingVal, fontVariantNumeric: "tabular-nums", transition: "color 0.3s" }}>
            {L.fstopSeries.filter(n => n >= L.FOPEN - 0.1 && n <= L.maxFstop).map(n => (
              <span key={n}
                onClick={() => setStopdownT(Math.log(n / L.FOPEN) / Math.log(L.maxFstop / L.FOPEN))}
                style={{ cursor: "pointer", opacity: Math.abs(fNumber - n) < 0.15 ? 1 : 0.55, transition: "opacity 0.15s" }}>
                f/{n}
              </span>
            ))}
          </div>
        </div>

        <div style={{ flex: "1 1 360px", padding: "14px 22px", minHeight: 125, transition: "background 0.2s", background: info ? t.infoBgActive : t.infoBgIdle }}>
          {info ? (
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: t.title, fontFamily: "'DM Sans','Helvetica Neue',sans-serif", transition: "color 0.3s" }}>{info.label}</span>
                <span style={{ fontSize: 11, color: t.muted, transition: "color 0.3s" }}>{info.name}</span>
                {info.apd && <span style={{
                  fontSize: 8, padding: "2px 6px", borderRadius: 3,
                  background: info.apd === "patent" ? t.apdPatentBg : t.apdInferBg,
                  color: info.apd === "patent" ? t.apdPatentText : t.apdInferText,
                  letterSpacing: "0.08em", fontWeight: 600, transition: "all 0.3s"
                }}>{info.apd === "patent" ? "APD (PATENT)" : "APD (INFERRED)"}</span>}
                {info.cemented && <span style={{
                  fontSize: 8, padding: "2px 6px", borderRadius: 3,
                  background: t.cementBg, color: t.cementText, letterSpacing: "0.08em", transition: "all 0.3s"
                }}>DOUBLET {info.cemented}</span>}
              </div>
              <div style={{ fontSize: 10.5, color: t.elemType, marginBottom: 5, transition: "color 0.3s" }}>{info.type}</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(125px,1fr))", gap: "3px 18px", fontSize: 10.5, lineHeight: 1.8 }}>
                <div><span style={{ color: t.propLabel }}>nd = </span><span style={{ color: t.value }}>{info.nd}</span></div>
                <div><span style={{ color: t.propLabel }}>νd = </span><span style={{ color: t.value }}>{info.vd}</span></div>
                <div><span style={{ color: t.propLabel }}>FL = </span><span style={{ color: t.value }}>{info.fl > 0 ? "+" : ""}{info.fl} mm</span></div>
                <div><span style={{ color: t.propLabel }}>Glass: </span><span style={{ color: t.value }}>{info.glass}</span></div>
              </div>
              {info.apdNote && <div style={{ fontSize: 9.5, color: t.apdNote, marginTop: 3, transition: "color 0.3s" }}>{info.apdNote}</div>}
              <div style={{ fontSize: 9.5, color: t.role, marginTop: 5, lineHeight: 1.5, transition: "color 0.3s" }}>{info.role}</div>
            </div>
          ) : (
            <div style={{ padding: "6px 0" }}>
              <div style={{ fontSize: 10.5, color: t.muted, marginBottom: 8, transition: "color 0.3s" }}>Hover or tap an element for optical details</div>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", fontSize: 9.5 }}>
                {t.legendSwatches.map(([bg, bd, lb]) => (
                  <div key={lb} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <div style={{ width: 11, height: 11, borderRadius: 2, background: bg, border: `1px solid ${bd}`, transition: "all 0.3s" }} /><span style={{ color: t.legendText, transition: "color 0.3s" }}>{lb}</span>
                  </div>
                ))}
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <div style={{ width: 3, height: 11, background: t.stop, borderRadius: 1 }} /><span style={{ color: t.legendText }}>Stop</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <div style={{ width: 11, height: 1, background: t.imgLine }} /><span style={{ color: t.legendText }}>Image plane (fixed)</span>
                </div>
                {showOnAxis && <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <svg width="14" height="10" viewBox="0 0 14 10"><line x1="0" y1="3" x2="14" y2="3" stroke={t.rayWarm} strokeWidth="1.5" /><line x1="0" y1="7" x2="14" y2="7" stroke={t.rayCool} strokeWidth="1.5" /></svg>
                  <span style={{ color: t.legendText }}>On-axis rays{rayTracksF ? " (tracks focus)" : " (from ∞)"}</span>
                </div>}
                {showOffAxis && <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <svg width="14" height="10" viewBox="0 0 14 10"><line x1="0" y1="3" x2="14" y2="3" stroke={t.rayOffWarm} strokeWidth="1.5" strokeDasharray={t.rayOffDash || "none"} /><line x1="0" y1="7" x2="14" y2="7" stroke={t.rayOffCool} strokeWidth="1.5" strokeDasharray={t.rayOffDash || "none"} /></svg>
                  <span style={{ color: t.legendText }}>Off-axis rays ({L.offAxisFieldDeg.toFixed(1)}°){rayTracksF ? " tracks focus" : " from ∞"}</span>
                </div>}
                {showOffAxis && <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <svg width="14" height="10" viewBox="0 0 14 10"><line x1="0" y1="5" x2="14" y2="5" stroke={t.rayOffWarm} strokeWidth="0.8" strokeDasharray="3,4" opacity="0.35" /></svg>
                  <span style={{ color: t.legendText }}>Vignetted (ghost)</span>
                </div>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
