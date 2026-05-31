/**
 * SingleLensContent — Desktop/mobile single-lens view layout branching.
 *
 * Handles the three desktop views (diagram-only, analysis-only, side-by-side)
 * and the mobile toggle between diagram and description.
 */

import LensDiagramPanel from "./LensDiagramPanel.js";
import DescriptionPanel from "./DescriptionPanel.js";
import type { Theme } from "../../types/theme.js";
import type { DesktopView, MobileView } from "../../types/state.js";

interface SingleLensContentProps {
  theme: Theme;
  isWide: boolean;
  effectiveDesktopView: DesktopView;
  showDesktopToggle: boolean;
  mobileView: MobileView;
  lensKeyA: string;
  markdown: string | null | undefined;
}

export default function SingleLensContent({
  theme: t,
  isWide,
  effectiveDesktopView,
  mobileView,
  lensKeyA,
  markdown,
}: SingleLensContentProps) {
  const singleDiagramContent = (
    <LensDiagramPanel
      lensKey={lensKeyA}
      scaleRatio={null}
      panelId="main"
      compact={false}
      showControls={true}
      sideLayoutEnabled={isWide && effectiveDesktopView === "diagram"}
      fillAvailableHeight={isWide}
    />
  );

  const descriptionContent = (
    <div
      style={{
        height: isWide ? "100%" : undefined,
        background: t.descBg,
        overflowY: "auto",
        transition: "background 0.3s",
      }}
    >
      <DescriptionPanel markdown={markdown} theme={t} />
    </div>
  );

  if (isWide) {
    if (effectiveDesktopView === "diagram") {
      return <div style={{ height: "100%", minHeight: 0, overflow: "hidden" }}>{singleDiagramContent}</div>;
    }
    if (effectiveDesktopView === "analysis") {
      return <div style={{ height: "100%", minHeight: 0, overflowY: "auto" }}>{descriptionContent}</div>;
    }
    /* Both — side-by-side */
    return (
      <div style={{ display: "flex", height: "100%", minHeight: 0, overflow: "hidden" }}>
        <div style={{ flex: "0 0 65%", minWidth: 0, minHeight: 0, overflow: "hidden" }}>{singleDiagramContent}</div>
        <div
          style={{
            flex: "0 0 35%",
            minHeight: 0,
            borderLeft: `1px solid ${t.descBorder}`,
            overflowY: "auto",
          }}
        >
          {descriptionContent}
        </div>
      </div>
    );
  }

  /* Mobile: toggle between views */
  if (mobileView === "diagram") {
    return singleDiagramContent;
  }
  return descriptionContent;
}
