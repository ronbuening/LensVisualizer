/**
 * SharedAnalysisDock — the desktop comparison view's single AnalysisDock.
 *
 * Drawer state (open, active tab, zoom/pan) lives in the shared panels slice,
 * so one dock under both panes opens the same analysis in each panel's drawer
 * and enters zoom mode for both diagrams. Hidden while zoom mode is active.
 */

import AnalysisDock from "../components/layout/lensDiagram/AnalysisDock.js";
import { ANALYSIS_TABS } from "../components/layout/lensDiagram/analysisTabs.js";
import useDispatchAdapters from "../components/hooks/useDispatchAdapters.js";
import { usePanelCtx } from "../utils/state/LensContext.js";
import type { Theme } from "../types/theme.js";

export default function SharedAnalysisDock({ theme: t }: { theme: Theme }) {
  const { analysisDrawerOpen, analysisDrawerTab, zoomPanActive } = usePanelCtx();
  const adapters = useDispatchAdapters();

  if (zoomPanActive) return null;

  return (
    <AnalysisDock
      tabs={ANALYSIS_TABS}
      activeTab={analysisDrawerTab}
      drawerOpen={analysisDrawerOpen}
      onAnalysisTabChange={adapters.onAnalysisTabChange}
      onAnalysisDrawerToggle={adapters.onAnalysisDrawerToggle}
      onZoomPanToggle={adapters.onZoomPanToggle}
      t={t}
      variant="shared"
    />
  );
}
