import { toggleBtn, toggleGroup } from "../../utils/styles.js";
import type { Theme } from "../../types/theme.js";

interface CardinalControlsProps {
  t: Theme;
  showCardinals: boolean;
  onShowCardinalsChange?: (value: boolean) => void;
  showCardinalDimensions: boolean;
  onShowCardinalDimensionsChange?: (value: boolean) => void;
  compact?: boolean;
}

export default function CardinalControls({
  t,
  showCardinals,
  onShowCardinalsChange,
  showCardinalDimensions,
  onShowCardinalDimensionsChange,
  compact = false,
}: CardinalControlsProps) {
  const labels = compact
    ? [
        { label: "CARD", active: showCardinals, onClick: () => onShowCardinalsChange?.(!showCardinals) },
        {
          label: "DIMS",
          active: showCardinalDimensions,
          onClick: () => onShowCardinalDimensionsChange?.(!showCardinalDimensions),
        },
      ]
    : [
        { label: "CARDINALS", active: showCardinals, onClick: () => onShowCardinalsChange?.(!showCardinals) },
        {
          label: "DIMENSIONS",
          active: showCardinalDimensions,
          onClick: () => onShowCardinalDimensionsChange?.(!showCardinalDimensions),
        },
      ];

  return (
    <div style={toggleGroup(t, { width: compact ? 160 : 190 })}>
      {labels.map(({ label, active, onClick }, idx) => (
        <button
          key={label}
          onClick={onClick}
          style={toggleBtn(t, active, { hasRightBorder: idx < labels.length - 1, padding: compact ? "5px 7px" : "5px 8px" })}
        >
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
