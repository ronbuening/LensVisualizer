/**
 * Type definitions for the theme system.
 */

import type { ElementData } from "./optics.js";

/** Internal color tokens consumed by createTheme closure functions */
export interface ThemeInternalTokens {
  _gridOdd: string;
  _gridEven: string;
  _elemNumApd: string;
  _elemNumStd: string;
  _fillOnApd: string;
  _fillOnStd: string;
  _fillPatent: string;
  _fillInfer: string;
  _fillHighNd: string;
  _fillMidNd: string;
  _fillLowNd: string;
  _strokeOn: string;
  _strokePatent: string;
  _strokeInfer: string;
  _strokeDefault: string;
}

/** Public color tokens exposed on every theme */
export interface ThemeColorTokens extends ThemeInternalTokens {
  bg: string;
  headerBgColor: string;
  headerBgImage: string;
  headerBorder: string;
  panelBg: string;
  panelBorder: string;
  panelDivider: string;
  infoBgActive: string;
  infoBgIdle: string;
  title: string;
  subtitle: string;
  specs: string;
  body: string;
  label: string;
  muted: string;
  value: string;
  propLabel: string;
  focusDist: string;
  focusEndpoint: string;
  sliderTrack: string;
  sliderAccent: string;
  spacingVal: string;
  desc: string;
  apdPatentBg: string;
  apdPatentText: string;
  apdInferBg: string;
  apdInferText: string;
  cementBg: string;
  cementText: string;
  apdNote: string;
  role: string;
  elemType: string;
  legendText: string;
  axis: string;
  rayWarm: string;
  rayCool: string;
  rayOffWarm: string;
  rayOffCool: string;
  rayOffDash: string;
  rayChromR: string;
  rayChromG: string;
  rayChromB: string;
  chromDispHigh: string;
  chromDispMid: string;
  chromDispLow: string;
  stop: string;
  stopLabel: string;
  imgLine: string;
  imgLabel: string;
  groupLabel: string;
  doubletLabel: string;
  elemNumActive: string;
  toggleBg: string;
  toggleBorder: string;
  toggleText: string;
  toggleIcon: string;
  toggleActiveBg: string;
  toggleActiveBorder: string;
  toggleActiveText: string;
  toggleInactiveText: string;
  legendSwatches: [string, string, string][];
  asphStroke: string;
  asphLabel: string;
  asphStrokeWidth: number;
  asphDiamondFill: string;
  rayWidthScale: number;
  elemStrokeIdle: number;
  elemStrokeActive: number;
  imgLineWidth: number;
  gridStrokeWidth: number;
  selectorBg: string;
  selectorBorder: string;
  selectorText: string;
  selectorHover: string;
  selectorBlur: boolean;
  descBg: string;
  descBorder: string;
  descCodeBg: string;
  descLinkColor: string;
  descH1: string;
  descH2: string;
  descText: string;
  descTableBorder: string;
  descTableHeaderBg: string;
}

/** Complete theme: color tokens + closure-based computed functions */
export interface Theme extends ThemeColorTokens {
  gridDash: (i: number) => string;
  grid: (i: number) => string;
  elemNum: (e: Pick<ElementData, "apd">) => string;
  elemFill: (e: Pick<ElementData, "apd" | "nd">, on: boolean) => string;
  elemStroke: (e: Pick<ElementData, "apd">, on: boolean) => string;
}

export type ThemeVariant = "dark" | "light" | "darkHC" | "lightHC";
