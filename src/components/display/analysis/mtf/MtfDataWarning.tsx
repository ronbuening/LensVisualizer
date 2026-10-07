/**
 * Holds the MTF chart behind a blurred warning until the reader has seen which data the lens lacks.
 * Non-blocking notes never blur the chart; they are listed in the collapsed line above it.
 */
import type { CSSProperties, ReactNode } from "react";
import type { MtfDataLimitation } from "../../../../types/mtf.js";
import type { Theme } from "../../../../types/theme.js";

interface MtfDataWarningProps {
  /** Gaps and notes that qualify the chart on screen; none renders the chart untouched. */
  limitations: readonly MtfDataLimitation[];
  /** True once the reader has dismissed every blocking kind listed. */
  acknowledged: boolean;
  onAcknowledge: () => void;
  t: Theme;
  /** Chart and field summary the warning covers. */
  children: ReactNode;
}

const TITLE = "Limited data for this chart";
/** Heading when every listed item is a note that leaves the chart readable. */
const NOTES_TITLE = "Notes on this lens's data";

const BLURRED: CSSProperties = { filter: "blur(4px)", pointerEvents: "none", userSelect: "none" };

export default function MtfDataWarning({ limitations, acknowledged, onAcknowledge, t, children }: MtfDataWarningProps) {
  const blocking = limitations.some((limitation) => limitation.blocking);
  const blocked = blocking && !acknowledged;
  const list = (
    <ul style={{ margin: "8px 0 0", paddingLeft: 18 }}>
      {limitations.map(({ kind, text }) => (
        <li key={kind} style={{ marginBottom: 4 }}>
          {text}
        </li>
      ))}
    </ul>
  );
  return (
    <>
      {limitations.length > 0 && !blocked ? (
        <details style={{ color: t.muted, fontSize: 11, margin: "4px 0" }}>
          <summary style={{ cursor: "pointer" }}>
            <WarningIcon color={t.stopLabel} size={12} /> {blocking ? TITLE : NOTES_TITLE} ({limitations.length})
          </summary>
          {list}
        </details>
      ) : null}
      {/* Both layers share one grid cell, so a long warning stretches the cell instead of overflowing the chart. */}
      <div style={{ display: "grid" }}>
        <div inert={blocked} style={{ gridArea: "1 / 1", minWidth: 0, ...(blocked ? BLURRED : null) }}>
          {children}
        </div>
        {blocked ? (
          <div
            role="note"
            aria-label={TITLE}
            style={{
              gridArea: "1 / 1",
              alignSelf: "center",
              justifySelf: "center",
              // The blurred layer forms a stacking context; a grid item's z-index lifts the card above it.
              zIndex: 1,
              boxSizing: "border-box",
              maxWidth: 460,
              margin: 12,
              padding: "14px 16px",
              background: t.panelBg,
              border: `1px solid ${t.panelBorder}`,
              borderRadius: 8,
              boxShadow: "0 6px 18px rgba(0, 0, 0, 0.18)",
              color: t.value,
              lineHeight: 1.45,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600 }}>
              <WarningIcon color={t.stopLabel} size={18} />
              {TITLE}
            </div>
            {list}
            <button
              type="button"
              onClick={onAcknowledge}
              style={{
                marginTop: 8,
                background: "none",
                border: `1px solid ${t.panelBorder}`,
                borderRadius: 4,
                color: t.value,
                cursor: "pointer",
                font: "inherit",
                padding: "4px 10px",
              }}
            >
              Show chart anyway
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
}

function WarningIcon({ color, size }: { color: string; size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      style={{ flexShrink: 0, verticalAlign: "-2px" }}
    >
      <path d="M10 2.5 18.5 17.5h-17Z" fill="none" stroke={color} strokeWidth={1.6} strokeLinejoin="round" />
      <path d="M10 8v4.5" stroke={color} strokeWidth={1.6} strokeLinecap="round" />
      <circle cx={10} cy={15} r={0.95} fill={color} />
    </svg>
  );
}
