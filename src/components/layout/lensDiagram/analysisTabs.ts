import type { AnalysisTab } from "../AnalysisDrawer.js";

export const ANALYSIS_TABS = [
  { id: "aberrations", label: "ABERRATIONS" },
  { id: "coma", label: "COMA" },
  { id: "distortion", label: "DISTORTION" },
  { id: "breathing", label: "BREATHING" },
  { id: "vignetting", label: "VIGNETTING" },
  { id: "pupils", label: "PUPILS" },
] as const satisfies readonly AnalysisTab[];
