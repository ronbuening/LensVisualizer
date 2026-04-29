import { toggleBtn, toggleGroup } from "../../utils/styles.js";
import type { Theme } from "../../types/theme.js";

interface CardinalControlsProps {
  t: Theme;
  showCardinals: boolean;
  onShowCardinalsChange?: (value: boolean) => void;
  showCardinalFocal?: boolean;
  onShowCardinalFocalChange?: (value: boolean) => void;
  showCardinalPrincipal?: boolean;
  onShowCardinalPrincipalChange?: (value: boolean) => void;
  showCardinalNodal?: boolean;
  onShowCardinalNodalChange?: (value: boolean) => void;
  showCardinalDimensions: boolean;
  onShowCardinalDimensionsChange?: (value: boolean) => void;
  showCardinalEfl?: boolean;
  onShowCardinalEflChange?: (value: boolean) => void;
  showCardinalBfd?: boolean;
  onShowCardinalBfdChange?: (value: boolean) => void;
  showCardinalFfd?: boolean;
  onShowCardinalFfdChange?: (value: boolean) => void;
  showCardinalHiatus?: boolean;
  onShowCardinalHiatusChange?: (value: boolean) => void;
  showCardinalTotalTrack?: boolean;
  onShowCardinalTotalTrackChange?: (value: boolean) => void;
  compact?: boolean;
}

export default function CardinalControls({
  t,
  showCardinals,
  onShowCardinalsChange,
  showCardinalFocal = true,
  onShowCardinalFocalChange,
  showCardinalPrincipal = true,
  onShowCardinalPrincipalChange,
  showCardinalNodal = true,
  onShowCardinalNodalChange,
  showCardinalDimensions,
  onShowCardinalDimensionsChange,
  showCardinalEfl = true,
  onShowCardinalEflChange,
  showCardinalBfd = true,
  onShowCardinalBfdChange,
  showCardinalFfd = true,
  onShowCardinalFfdChange,
  showCardinalHiatus = true,
  onShowCardinalHiatusChange,
  showCardinalTotalTrack = true,
  onShowCardinalTotalTrackChange,
  compact = false,
}: CardinalControlsProps) {
  const cardinalLayers = [
    { label: "F", active: showCardinalFocal, onClick: () => onShowCardinalFocalChange?.(!showCardinalFocal) },
    {
      label: "H",
      active: showCardinalPrincipal,
      onClick: () => onShowCardinalPrincipalChange?.(!showCardinalPrincipal),
    },
    { label: "N", active: showCardinalNodal, onClick: () => onShowCardinalNodalChange?.(!showCardinalNodal) },
  ];
  const dimensionLayers = [
    { label: "EFL", active: showCardinalEfl, onClick: () => onShowCardinalEflChange?.(!showCardinalEfl) },
    { label: "BFD", active: showCardinalBfd, onClick: () => onShowCardinalBfdChange?.(!showCardinalBfd) },
    { label: "FFD", active: showCardinalFfd, onClick: () => onShowCardinalFfdChange?.(!showCardinalFfd) },
    {
      label: "HIA",
      active: showCardinalHiatus,
      onClick: () => onShowCardinalHiatusChange?.(!showCardinalHiatus),
    },
    {
      label: "TRK",
      active: showCardinalTotalTrack,
      onClick: () => onShowCardinalTotalTrackChange?.(!showCardinalTotalTrack),
    },
  ];
  const rowWidth = compact ? 160 : 190;
  const masterPadding = compact ? "5px 7px" : "5px 8px";
  const subPadding = compact ? "5px 4px" : "5px 5px";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: compact ? 6 : 8 }}>
      <div style={toggleGroup(t, { width: rowWidth })}>
        <button
          onClick={() => onShowCardinalsChange?.(!showCardinals)}
          style={toggleBtn(t, showCardinals, {
            flex: showCardinals ? 1.6 : 1,
            hasRightBorder: showCardinals,
            padding: masterPadding,
          })}
        >
          <span>{compact ? "CARD" : "CARDINALS"}</span>
        </button>
        {showCardinals &&
          cardinalLayers.map(({ label, active, onClick }, idx) => (
            <button
              key={label}
              onClick={onClick}
              style={toggleBtn(t, active, {
                flex: 0.55,
                hasRightBorder: idx < cardinalLayers.length - 1,
                padding: subPadding,
              })}
            >
              <span>{label}</span>
            </button>
          ))}
      </div>
      <div style={toggleGroup(t, { width: rowWidth })}>
        <button
          onClick={() => onShowCardinalDimensionsChange?.(!showCardinalDimensions)}
          style={toggleBtn(t, showCardinalDimensions, {
            flex: showCardinalDimensions ? 1.15 : 1,
            hasRightBorder: showCardinalDimensions,
            padding: masterPadding,
          })}
        >
          <span>{showCardinalDimensions ? "DIMS" : compact ? "DIMS" : "DIMENSIONS"}</span>
        </button>
        {showCardinalDimensions &&
          dimensionLayers.map(({ label, active, onClick }, idx) => (
            <button
              key={label}
              onClick={onClick}
              style={toggleBtn(t, active, {
                flex: 0.58,
                hasRightBorder: idx < dimensionLayers.length - 1,
                padding: subPadding,
              })}
            >
              <span>{label}</span>
            </button>
          ))}
      </div>
    </div>
  );
}
