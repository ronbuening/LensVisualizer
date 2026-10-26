import { useState, type CSSProperties } from "react";
import type { Theme } from "../../types/theme.js";

interface CommitInputProps {
  /** Accessible name; also the visible caption unless `labelMode` is "hidden". */
  label: string;
  value: string | number;
  theme: Theme;
  onCommit: (text: string) => void;
  numeric?: boolean;
  flat?: boolean;
  optional?: boolean;
  invalid?: boolean;
  /** "hidden" relies on surrounding column headers; "side" and "stacked" show the label. */
  labelMode?: "hidden" | "side" | "stacked";
  /** Visible caption when it differs from the accessible name, e.g. "K" for "1 K". */
  caption?: string;
  placeholder?: string;
  title?: string;
}

/** Compact monospace field shared by every builder input. */
export function builderInputStyle(t: Theme, invalid = false): CSSProperties {
  return {
    background: t.selectorBg,
    color: t.selectorText,
    border: `1px solid ${invalid ? t.error : t.selectorBorder}`,
    borderRadius: 4,
    padding: "3px 4px",
    font: "inherit",
    fontSize: "0.75rem",
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
}: CommitInputProps) {
  const [text, setText] = useState(String(value));
  const [previous, setPrevious] = useState(value);
  const [error, setError] = useState("");
  if (value !== previous) {
    setPrevious(value);
    setText(String(value));
    setError("");
  }
  const commit = () => {
    if (text === String(value)) {
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
      title={error || title}
      inputMode={numeric ? "decimal" : undefined}
      spellCheck={false}
      autoComplete="off"
      style={builderInputStyle(theme, !!error || invalid)}
      onChange={(e) => setText(e.target.value)}
      onBlur={commit}
      onKeyDown={(e) => {
        if (e.key === "Enter") e.currentTarget.blur();
      }}
    />
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
        {input}
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
        gridTemplateColumns: labelMode === "side" ? "64px minmax(0, 1fr)" : undefined,
      }}
    >
      <span style={builderCaptionStyle(theme)} aria-hidden={caption !== undefined}>
        {caption ?? label}
      </span>
      {input}
      {message}
    </label>
  );
}
