/**
 * ChromaticControls — Master chromatic toggle and R/G/B channel buttons.
 *
 * Shows a "COLOR" master toggle with an RGB icon, and when active,
 * individual R/G/B channel buttons for selective wavelength display.
 */
import { toggleGroup, toggleBtn, chromChannelBtn } from "../utils/styles.js";
import type { Theme } from "../types/theme.js";

interface ChromaticControlsProps {
  t: Theme;
  showChromatic: boolean;
  onShowChromaticChange?: (value: boolean) => void;
  chromR: boolean;
  chromG: boolean;
  chromB: boolean;
  onChromRChange?: (value: boolean) => void;
  onChromGChange?: (value: boolean) => void;
  onChromBChange?: (value: boolean) => void;
}

export default function ChromaticControls({
  t,
  showChromatic,
  onShowChromaticChange,
  chromR,
  chromG,
  chromB,
  onChromRChange,
  onChromGChange,
  onChromBChange,
}: ChromaticControlsProps) {
  return (
    <div style={toggleGroup(t, { width: "100%" })}>
      <button
        onClick={() => onShowChromaticChange?.(!showChromatic)}
        style={toggleBtn(t, showChromatic, { hasRightBorder: showChromatic })}
      >
        <svg width="14" height="8" viewBox="0 0 14 8" style={{ flexShrink: 0 }}>
          <line
            x1="0"
            y1="1"
            x2="14"
            y2="1"
            stroke={showChromatic ? t.rayChromR : "rgba(128,128,128,0.3)"}
            strokeWidth="1.5"
          />
          <line
            x1="0"
            y1="4"
            x2="14"
            y2="4"
            stroke={showChromatic ? t.rayChromG : "rgba(128,128,128,0.3)"}
            strokeWidth="1.5"
          />
          <line
            x1="0"
            y1="7"
            x2="14"
            y2="7"
            stroke={showChromatic ? t.rayChromB : "rgba(128,128,128,0.3)"}
            strokeWidth="1.5"
          />
        </svg>
        <span>COLOR</span>
      </button>
      {showChromatic &&
        [
          { ch: "R", active: chromR, set: onChromRChange, color: t.rayChromR },
          { ch: "G", active: chromG, set: onChromGChange, color: t.rayChromG },
          { ch: "B", active: chromB, set: onChromBChange, color: t.rayChromB },
        ].map(({ ch, active, set, color }, idx) => (
          <button key={ch} onClick={() => set?.(!active)} style={chromChannelBtn(t, active, idx < 2)}>
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: active ? color : "rgba(128,128,128,0.3)",
                display: "inline-block",
              }}
            />
            <span>{ch}</span>
          </button>
        ))}
    </div>
  );
}
