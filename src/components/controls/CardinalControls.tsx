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
  const controls = compact
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
    <div style={{ display: "flex", flexDirection: "column", gap: compact ? 6 : 8, width: compact ? 84 : 190 }}>
      {controls.map(({ label, active, onClick }) => (
        <div key={label} style={toggleGroup(t, { width: "100%" })}>
          <button
            onClick={onClick}
            style={toggleBtn(t, active, {
              padding: compact ? "5px 7px" : "5px 8px",
            })}
          >
            <span>{label}</span>
          </button>
        </div>
      ))}
    </div>
  );
}
