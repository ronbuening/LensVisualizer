import type { Theme } from "../../types/theme.js";

interface SliderResetButtonProps {
  axisLabel: string;
  value: number;
  onReset: () => void;
  t: Theme;
}

/** Compact per-axis reset action shared by single-lens and comparison sliders. */
export default function SliderResetButton({ axisLabel, value, onReset, t }: SliderResetButtonProps) {
  const centered = Math.abs(value) <= 1e-9;

  return (
    <button
      type="button"
      aria-label={`Reset ${axisLabel.toLowerCase()} to center`}
      title={`Reset ${axisLabel.toLowerCase()} to center`}
      disabled={centered}
      onClick={onReset}
      style={{
        borderRadius: 10,
        cursor: centered ? "default" : "pointer",
        padding: "3px 8px",
        fontSize: 8,
        fontFamily: "inherit",
        letterSpacing: "0.08em",
        background: t.toggleBg,
        border: `1px solid ${t.toggleBorder}`,
        color: t.muted,
        opacity: centered ? 0.45 : 1,
        transition: "opacity 0.2s",
      }}
    >
      RESET
    </button>
  );
}
