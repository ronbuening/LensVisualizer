import { createContext, useContext, useState, type CSSProperties } from "react";
import type { Theme } from "../../types/theme.js";

interface CommitInputProps {
  /** Accessible name; also the visible caption unless `labelMode` is "hidden" or a `caption` is given. */
  label: string;
  value: string | number;
  theme: Theme;
  onCommit: (text: string) => void;
  numeric?: boolean;
  flat?: boolean;
  optional?: boolean;
  invalid?: boolean;
  /** "hidden" relies on surrounding captions; "side" and "stacked" show the label. */
  labelMode?: "hidden" | "side" | "stacked";
  /** Visible caption when it differs from the accessible name, e.g. "K" for "L1 front K". */
  caption?: string;
  placeholder?: string;
  title?: string;
  /**
   * Display text for an untouched value (for example a rounded number). Focusing the field shows the exact value, and
   * leaving either text unchanged commits nothing, so rounding for display never rewrites the draft.
   */
  format?: (value: string | number) => string;
  /** Unit shown after the field, for example "mm". */
  unit?: string;
  style?: CSSProperties;
}

/**
 * True below the wide breakpoint: fields render at 16 px so iOS Safari does not zoom into them, with more padding
 * for touch.
 */
export const BuilderTouchContext = createContext(false);

/** Compact monospace field shared by every builder input. */
export function builderInputStyle(t: Theme, invalid = false, touch = false): CSSProperties {
  return {
    background: t.selectorBg,
    color: t.selectorText,
    border: `1px solid ${invalid ? t.error : t.selectorBorder}`,
    borderRadius: 4,
    padding: touch ? "5px 6px" : "3px 4px",
    font: "inherit",
    fontSize: touch ? "16px" : "0.78rem",
    lineHeight: 1.35,
    width: "100%",
    minWidth: 0,
    boxSizing: "border-box",
    fontVariantNumeric: "tabular-nums",
  };
}

/** Small uppercase caption matching the viewer's control labels. */
export function builderCaptionStyle(t: Theme): CSSProperties {
  return {
    fontSize: 9,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: t.muted,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };
}

/** Section heading inside the editor pane. */
export function sectionTitle(t: Theme): CSSProperties {
  return {
    ...builderCaptionStyle(t),
    margin: "0 0 6px",
    fontWeight: 600,
    fontSize: 10,
    color: t.label,
  };
}

/** Local text survives invalid input and refused edits; the parent owns only committed values. */
export default function CommitInput({
  label,
  value,
  theme,
  onCommit,
  numeric,
  flat,
  optional,
  invalid,
  labelMode = "stacked",
  caption,
  placeholder,
  title,
  format,
  unit,
  style,
}: CommitInputProps) {
  const touch = useContext(BuilderTouchContext);
  const display = format ? format(value) : String(value);
  const [text, setText] = useState(display);
  const [previous, setPrevious] = useState(value);
  const [error, setError] = useState("");
  if (value !== previous) {
    setPrevious(value);
    setText(display);
    setError("");
  }
  const commit = () => {
    if (text === String(value) || text === display) {
      setText(display);
      setError("");
      return;
    }
    try {
      const trimmed = text.trim();
      if (
        numeric &&
        !(flat && ["", "∞", "flat"].includes(trimmed)) &&
        !(optional && trimmed === "") &&
        (trimmed === "" || !Number.isFinite(Number(trimmed)))
      )
        throw new Error("Enter a finite number");
      onCommit(text);
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  };
  const input = (
    <input
      data-draft-edit
      aria-label={label}
      aria-invalid={!!error || invalid}
      value={text}
      placeholder={placeholder}
      title={error || title || (format && display !== String(value) ? String(value) : undefined)}
      inputMode={numeric ? "decimal" : undefined}
      spellCheck={false}
      autoComplete="off"
      style={{ ...builderInputStyle(theme, !!error || invalid, touch), ...style }}
      onChange={(e) => setText(e.target.value)}
      onFocus={() => {
        if (format && text === display) setText(String(value));
      }}
      onBlur={commit}
      onKeyDown={(e) => {
        if (e.key === "Enter") e.currentTarget.blur();
      }}
    />
  );
  const field = unit ? (
    <span style={{ display: "flex", alignItems: "center", gap: 3, minWidth: 0 }}>
      {input}
      <span aria-hidden style={{ color: theme.muted, fontSize: 10 }}>
        {unit}
      </span>
    </span>
  ) : (
    input
  );
  const message = error && (
    <span
      role="alert"
      style={{ color: theme.error, fontSize: 10, lineHeight: 1.3, gridColumn: labelMode === "side" ? "2" : undefined }}
    >
      {error}
    </span>
  );
  if (labelMode === "hidden")
    return (
      <div style={{ display: "grid", gap: 2, minWidth: 0 }}>
        {field}
        {message}
      </div>
    );
  return (
    <label
      style={{
        display: "grid",
        gap: labelMode === "side" ? "2px 8px" : 2,
        alignItems: "center",
        minWidth: 0,
        gridTemplateColumns: labelMode === "side" ? "auto minmax(0, 1fr)" : undefined,
      }}
    >
      <span style={builderCaptionStyle(theme)} aria-hidden={caption !== undefined}>
        {caption ?? label}
      </span>
      {field}
      {message}
    </label>
  );
}
