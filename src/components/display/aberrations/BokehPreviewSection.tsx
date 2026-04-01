import { useState } from "react";
import BokehPreviewGrid from "../BokehPreviewGrid.js";
import { formatComaSpan } from "../MeridionalComaPlot.js";
import type { BokehPreviewGrid as BokehPreviewGridData } from "../../../optics/aberrationAnalysis.js";
import type { Theme } from "../../../types/theme.js";
import SectionHeader from "./SectionHeader.js";

interface BokehPreviewSectionProps {
  grid: BokehPreviewGridData | null;
  title: string;
  helpText: string;
  focusLabel: "Infinity" | "Near";
  theme: Theme;
}

export default function BokehPreviewSection({ grid, title, helpText, focusLabel, theme }: BokehPreviewSectionProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div
      style={{
        borderTop: `1px solid ${theme.panelBorder}`,
        paddingTop: 14,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <SectionHeader
        title={title}
        helpLabel={`${title} help`}
        helpText={helpText}
        expanded={expanded}
        onToggle={() => setExpanded((v) => !v)}
        theme={theme}
      />

      {expanded ? (
        grid ? (
          <>
            <BokehPreviewGrid grid={grid} t={theme} focusLabel={focusLabel} />
            <div
              style={{
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                fontSize: 9.5,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 10, color: theme.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>
                  FIELDS
                </span>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: theme.value,
                    fontVariantNumeric: "tabular-nums",
                    transition: "color 0.3s",
                  }}
                >
                  {grid.usableFieldCount}/{grid.fields.length}
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: 8 }}
                title="Shared square spot half-range used to normalize all four bokeh tiles. Includes 15% padding to prevent clipping."
              >
                <span style={{ fontSize: 10, color: theme.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>
                  SCALE
                </span>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: theme.value,
                    fontVariantNumeric: "tabular-nums",
                    transition: "color 0.3s",
                  }}
                >
                  ±{formatComaSpan(grid.sharedSpotHalfRangeMm * 1000)}
                </span>
              </div>
            </div>
          </>
        ) : (
          <div style={{ color: theme.muted, fontSize: 10, lineHeight: 1.5, transition: "color 0.3s" }}>
            Unable to compute a usable bokeh preview for this lens state.
          </div>
        )
      ) : null}
    </div>
  );
}
