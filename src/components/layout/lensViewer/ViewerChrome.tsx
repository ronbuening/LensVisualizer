/**
 * ViewerChrome — top-level navigation and shared chrome for LensViewer.
 *
 * Keeps the main orchestrator focused on state and cross-feature wiring while
 * this component renders the breadcrumb, selector bar, comparison/mobile
 * control strips, and diagram/analysis view toggles.
 */

import type { ComponentProps } from "react";
import BreadcrumbBar from "../BreadcrumbBar.js";
import ControlsBar from "../ControlsBar.js";
import TopBar from "../TopBar.js";
import ViewToggleBar from "../ViewToggleBar.js";
import type { Theme } from "../../../types/theme.js";
import type { DesktopView, MobileView } from "../../../types/state.js";

interface ViewerChromeProps {
  theme: Theme;
  isWide: boolean;
  comparing: boolean;
  lensKeyA: string;
  lensKeyB: string;
  showCompareBtn: boolean;
  onSwitchLensA: (key: string) => void;
  onSwitchLensB: (key: string) => void;
  onSwapLenses: () => void;
  onToggleCompare: () => void;
  onOpenAboutSite: () => void;
  onOpenAboutAuthor: () => void;
  onOpenOpticsPrimer: () => void;
  onOpenAberrationsPrimer: () => void;
  catalogKeys: string[];
  catalogNames: Record<string, string>;
  controlsBarProps: Omit<ComponentProps<typeof ControlsBar>, "compact" | "showScaleMode">;
  mobileView: MobileView;
  onMobileViewChange: (value: MobileView) => void;
  showDesktopToggle: boolean;
  desktopViewOptions: ReadonlyArray<{ label: string; val: DesktopView }>;
  effectiveDesktopView: DesktopView;
  onDesktopViewChange: (value: DesktopView) => void;
}

export default function ViewerChrome({
  theme: t,
  isWide,
  comparing,
  lensKeyA,
  lensKeyB,
  showCompareBtn,
  onSwitchLensA,
  onSwitchLensB,
  onSwapLenses,
  onToggleCompare,
  onOpenAboutSite,
  onOpenAboutAuthor,
  onOpenOpticsPrimer,
  onOpenAberrationsPrimer,
  catalogKeys,
  catalogNames,
  controlsBarProps,
  mobileView,
  onMobileViewChange,
  showDesktopToggle,
  desktopViewOptions,
  effectiveDesktopView,
  onDesktopViewChange,
}: ViewerChromeProps) {
  return (
    <>
      <BreadcrumbBar theme={t} isWide={isWide} lensKey={lensKeyA} />

      <TopBar
        theme={t}
        isWide={isWide}
        lensKeyA={lensKeyA}
        lensKeyB={lensKeyB}
        comparing={comparing}
        showCompareBtn={showCompareBtn}
        onSwitchLensA={onSwitchLensA}
        onSwitchLensB={onSwitchLensB}
        onSwapLenses={onSwapLenses}
        onToggleCompare={onToggleCompare}
        onOpenAboutSite={onOpenAboutSite}
        onOpenAboutAuthor={onOpenAboutAuthor}
        onOpenOpticsPrimer={onOpenOpticsPrimer}
        onOpenAberrationsPrimer={onOpenAberrationsPrimer}
        catalogKeys={catalogKeys}
        catalogNames={catalogNames}
      />

      {comparing && <ControlsBar {...controlsBarProps} compact={false} showScaleMode={true} />}

      {!isWide && !comparing && (
        <ViewToggleBar
          theme={t}
          options={
            [
              { label: "DIAGRAM", val: "diagram" },
              { label: "ANALYSIS", val: "description" },
            ] as const
          }
          activeValue={mobileView}
          onChange={onMobileViewChange}
          width={220}
        />
      )}

      {showDesktopToggle && (
        <ViewToggleBar
          theme={t}
          options={desktopViewOptions}
          activeValue={effectiveDesktopView}
          onChange={onDesktopViewChange}
        />
      )}

      {!isWide && !comparing && mobileView === "diagram" && (
        <ControlsBar {...controlsBarProps} compact={true} showScaleMode={false} />
      )}
    </>
  );
}
