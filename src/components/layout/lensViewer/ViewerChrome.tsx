/**
 * ViewerChrome — top-level navigation and shared chrome for LensViewer.
 *
 * Keeps the main orchestrator focused on state and cross-feature wiring while
 * this component renders the breadcrumb, selector bar, comparison/mobile
 * control strips, and diagram/analysis view toggles.
 */

import { useState, type ComponentProps } from "react";
import BreadcrumbBar from "../BreadcrumbBar.js";
import CardinalControls from "../../controls/CardinalControls.js";
import ControlsBar from "../ControlsBar.js";
import TopBar from "../TopBar.js";
import ViewToggleBar from "../ViewToggleBar.js";
import { ENABLE_CARDINAL_ELEMENTS } from "../../../utils/featureFlags.js";
import { SET_RAY_TOGGLE } from "../../../utils/lensReducer.js";
import { headerStrip, toggleBtn, toggleGroup } from "../../../utils/styles.js";
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
  const [mobileControlPage, setMobileControlPage] = useState<"standard" | "cardinals">("standard");
  const showMobileControlSwitcher =
    ENABLE_CARDINAL_ELEMENTS && !isWide && !comparing && mobileView === "diagram";

  const mobileControlArrows = showMobileControlSwitcher ? (
    <div
      style={{
        ...headerStrip(t, { padding: "6px 12px" }),
        display: "flex",
        justifyContent: "center",
        borderBottom: "none",
      }}
    >
      <div style={toggleGroup(t, { width: 90 })}>
        <button
          aria-label="Show ray controls"
          onClick={() => setMobileControlPage("standard")}
          style={toggleBtn(t, mobileControlPage === "standard", { hasRightBorder: true, padding: "5px 8px" })}
        >
          <span>{"\u2039"}</span>
        </button>
        <button
          aria-label="Show cardinal controls"
          onClick={() => setMobileControlPage("cardinals")}
          style={toggleBtn(t, mobileControlPage === "cardinals", { hasRightBorder: false, padding: "5px 8px" })}
        >
          <span>{"\u203A"}</span>
        </button>
      </div>
    </div>
  ) : null;

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

      {mobileControlArrows}

      {!isWide && !comparing && mobileView === "diagram" && (!showMobileControlSwitcher || mobileControlPage === "standard") && (
        <ControlsBar {...controlsBarProps} compact={true} showScaleMode={false} />
      )}

      {showMobileControlSwitcher && mobileControlPage === "cardinals" && (
        <div
          style={{
            ...headerStrip(t, { padding: "6px 12px" }),
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CardinalControls
            t={t}
            compact={true}
            showCardinals={controlsBarProps.showCardinals}
            onShowCardinalsChange={(value) =>
              controlsBarProps.dispatch({ type: SET_RAY_TOGGLE, field: "showCardinals", value })
            }
            showCardinalDimensions={controlsBarProps.showCardinalDimensions}
            onShowCardinalDimensionsChange={(value) =>
              controlsBarProps.dispatch({ type: SET_RAY_TOGGLE, field: "showCardinalDimensions", value })
            }
          />
        </div>
      )}
    </>
  );
}
