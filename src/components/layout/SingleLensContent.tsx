/**
 * SingleLensContent — Desktop/mobile single-lens view layout branching.
 *
 * Handles the three desktop views (diagram-only, analysis-only, side-by-side)
 * and the mobile toggle between diagram and description.
 */

import LensDiagramPanel from "./LensDiagramPanel.js";
import DescriptionPanel from "./DescriptionPanel.js";
import type { Theme } from "../../types/theme.js";

interface SingleLensContentProps {
  theme: Theme;
  isWide: boolean;
  effectiveDesktopView: string;
  showDesktopToggle: boolean;
  mobileView: string;
  lensKeyA: string;
  markdown: string | null | undefined;
}

export default function SingleLensContent({
  theme: t,
  isWide,
  effectiveDesktopView,
  showDesktopToggle,
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
    />
  );

  const descriptionContent = (
    <div style={{ background: t.descBg, overflowY: "auto", transition: "background 0.3s" }}>
      <DescriptionPanel markdown={markdown} theme={t} />
    </div>
  );

  const topOffset = showDesktopToggle ? 82 : 45;

  if (isWide) {
    if (effectiveDesktopView === "diagram") {
      return <div style={{ minHeight: `calc(100vh - ${topOffset}px)` }}>{singleDiagramContent}</div>;
    }
    if (effectiveDesktopView === "analysis") {
      return <div style={{ overflowY: "auto", maxHeight: `calc(100vh - ${topOffset}px)` }}>{descriptionContent}</div>;
    }
    /* Both — side-by-side */
    return (
      <div style={{ display: "flex", minHeight: `calc(100vh - ${topOffset}px)` }}>
        <div style={{ flex: "0 0 65%", minWidth: 0, overflow: "hidden" }}>{singleDiagramContent}</div>
        <div
          style={{
            flex: "0 0 35%",
            borderLeft: `1px solid ${t.descBorder}`,
            overflowY: "auto",
            maxHeight: `calc(100vh - ${topOffset}px)`,
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
