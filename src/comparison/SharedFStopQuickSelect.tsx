/**
 * SharedFStopQuickSelect — quick-select row for shared comparison f-stops.
 *
 * The aperture slider exposes a continuous log-scale position, but the readout
 * row is easier to use when it also offers the discrete f-stop series implied
 * by the compared lenses' combined stop lists.
 */

import type { CSSProperties } from "react";

interface SharedFStopQuickSelectProps {
  fstopSeriesA: number[];
  fstopSeriesB: number[];
  widerFopen: number;
  sharedMaxFstop: number;
  currentFNumber: number;
  onSelect: (value: number) => void;
}

const QUICK_SELECT_STYLE: CSSProperties = { marginTop: 6, display: "flex", gap: 14, flexWrap: "wrap", fontSize: 9 };

export default function SharedFStopQuickSelect({
  fstopSeriesA,
  fstopSeriesB,
  widerFopen,
  sharedMaxFstop,
  currentFNumber,
  onSelect,
}: SharedFStopQuickSelectProps) {
  const quickStops = [...new Set([...fstopSeriesA, ...fstopSeriesB])]
    .sort((a, b) => a - b)
    .filter((value) => value >= widerFopen - 0.1 && value <= sharedMaxFstop);

  return (
    <div style={QUICK_SELECT_STYLE}>
      {quickStops.map((value) => (
        <span
          key={value}
          onClick={() => onSelect(value)}
          style={{
            cursor: "pointer",
            opacity: Math.abs(currentFNumber - value) < 0.15 ? 1 : 0.55,
            transition: "opacity 0.15s",
          }}
        >
          f/{value}
        </span>
      ))}
    </div>
  );
}
