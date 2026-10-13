/**
 * StationStepper — a discrete replacement for a slider track: one button per station, exactly one selected.
 *
 * Patent-positions mode uses it where zoom and focus step through source-published stations. It is presentational:
 * the parent supplies the labels and handles selection.
 *
 *   up to MAX_STATION_BUTTONS stations → radio group, one tab stop, arrows / Home / End move the selection
 *   more                               → ‹ previous · "label  k / N" · next ›
 */
import { useRef, type CSSProperties, type KeyboardEvent } from "react";
import { toggleBtn, toggleGroup } from "../../utils/style/styles.js";
import type { Theme } from "../../types/theme.js";

export interface StationOption {
  /** Stable station id handed back through `onSelect`. */
  id: number;
  label: string;
  ariaLabel?: string;
  title?: string;
}

interface StationStepperProps {
  t: Theme;
  /** Names the group for assistive tech, e.g. "Zoom position". */
  ariaLabel: string;
  stations: readonly StationOption[];
  /** Selected station id; null selects nothing and puts the tab stop on the first station. */
  activeId: number | null;
  onSelect: (id: number) => void;
  disabled?: boolean;
  /** Always-visible line under the buttons, for why a station is missing or locked. */
  note?: string;
}

/** Largest station count still drawn as one button each; beyond it the buttons would wrap past three rows. */
export const MAX_STATION_BUTTONS = 12;

/** Narrowest station button before the row wraps; fits a four-character label at the toggle font size. */
const STATION_BUTTON_MIN_WIDTH = 44;

export default function StationStepper({
  t,
  ariaLabel,
  stations,
  activeId,
  onSelect,
  disabled = false,
  note,
}: StationStepperProps) {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeIndex = stations.findIndex((station) => station.id === activeId);
  const select = (index: number) => {
    const station = stations[index];
    if (disabled || !station || station.id === activeId) return;
    onSelect(station.id);
  };

  const buttonStyle = (active: boolean): CSSProperties => ({
    ...toggleBtn(t, active, { hasRightBorder: false }),
    cursor: disabled ? "not-allowed" : "pointer",
  });
  /* Separators for a wrapping row: each button paints the 1px gap to its right and below it, and the group's
     overflow clips the ones on the outer edge. The toggle colours are translucent, so a backing colour behind the
     buttons would tint them away from the ray controls they are meant to match. */
  const separators = `1px 0 0 ${t.toggleBorder}, 0 1px 0 ${t.toggleBorder}`;
  const noteLine = note ? <div style={{ marginTop: 5, fontSize: 9, color: t.focusEndpoint }}>{note}</div> : null;

  if (stations.length > MAX_STATION_BUTTONS) {
    const shownIndex = Math.max(activeIndex, 0);
    const lowerName = ariaLabel.toLowerCase();
    return (
      <div>
        <div role="group" aria-label={ariaLabel} style={toggleGroup(t, { width: "100%" })}>
          <button
            type="button"
            aria-label={`Previous ${lowerName}`}
            disabled={disabled || shownIndex <= 0}
            onClick={() => select(shownIndex - 1)}
            style={{ ...buttonStyle(false), flex: "0 0 36px", borderRight: `1px solid ${t.toggleBorder}` }}
          >
            ‹
          </button>
          <span aria-live="polite" style={{ ...buttonStyle(true), cursor: "default", gap: 10 }}>
            <span>{stations[shownIndex].label}</span>
            <span style={{ opacity: 0.7 }}>
              {shownIndex + 1} / {stations.length}
            </span>
          </span>
          <button
            type="button"
            aria-label={`Next ${lowerName}`}
            disabled={disabled || shownIndex >= stations.length - 1}
            onClick={() => select(shownIndex + 1)}
            style={{ ...buttonStyle(false), flex: "0 0 36px", borderLeft: `1px solid ${t.toggleBorder}` }}
          >
            ›
          </button>
        </div>
        {noteLine}
      </div>
    );
  }

  /* Selection follows focus, as in a native radio group. The ends do not wrap: these stand in for a slider. */
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const target =
      event.key === "ArrowRight" || event.key === "ArrowDown"
        ? index + 1
        : event.key === "ArrowLeft" || event.key === "ArrowUp"
          ? index - 1
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? stations.length - 1
              : null;
    if (target === null) return;
    event.preventDefault();
    if (disabled || target < 0 || target >= stations.length) return;
    buttonRefs.current[target]?.focus();
    select(target);
  };

  const tabStopIndex = Math.max(activeIndex, 0);
  return (
    <div>
      <div
        role="radiogroup"
        aria-label={ariaLabel}
        aria-disabled={disabled || undefined}
        style={{ ...toggleGroup(t, { width: "100%" }), flexWrap: "wrap", gap: 1 }}
      >
        {stations.map((station, index) => (
          <button
            key={station.id}
            ref={(element) => {
              buttonRefs.current[index] = element;
            }}
            type="button"
            role="radio"
            aria-checked={station.id === activeId}
            aria-label={station.ariaLabel}
            title={station.title}
            disabled={disabled}
            tabIndex={index === tabStopIndex ? 0 : -1}
            onClick={() => select(index)}
            onKeyDown={(event) => onKeyDown(event, index)}
            style={{
              ...buttonStyle(station.id === activeId),
              flex: `1 0 ${STATION_BUTTON_MIN_WIDTH}px`,
              boxShadow: separators,
            }}
          >
            {station.label}
          </button>
        ))}
      </div>
      {noteLine}
    </div>
  );
}
