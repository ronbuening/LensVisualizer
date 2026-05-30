import type { AnalysisTab } from "../AnalysisDrawer.js";

export const ANALYSIS_TABS = [
  { id: "summary", label: "SUMMARY" },
  { id: "aberrations", label: "ABERRATIONS" },
  { id: "chromatic", label: "CHROMATIC" },
  { id: "coma", label: "COMA" },
  { id: "bokeh", label: "BOKEH" },
  { id: "distortion", label: "DISTORTION" },
  { id: "breathing", label: "BREATHING" },
  { id: "vignetting", label: "VIGNETTING" },
  { id: "pupils", label: "PUPILS" },
] as const satisfies readonly AnalysisTab[];
