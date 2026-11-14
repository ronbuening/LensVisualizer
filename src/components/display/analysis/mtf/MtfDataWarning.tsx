/**
 * Lists the data limitations and acknowledges their blocking kinds for a lens system.
 * Ordinary charts stay blurred until acknowledgement; sweeps withhold affected samples independently.
 */
import type { CSSProperties, ReactNode } from "react";
import type { MtfDataLimitation } from "../../../../types/mtf.js";
import type { Theme } from "../../../../types/theme.js";
import { textRun } from "../../../../utils/text.js";

interface MtfDataWarningProps {
  /** Gaps and notes that qualify the chart on screen; none renders the chart untouched. */
  limitations: readonly MtfDataLimitation[];
  /** True once the reader has dismissed every blocking kind listed. */
  acknowledged: boolean;
  onAcknowledge: () => void;
  /** Sweeps withhold individual samples and keep unaffected samples readable. */
  withholdChart?: boolean;
  t: Theme;
  /** Action row outside the warning boundary; the caller applies the data disclosure policy. */
  actions?: ReactNode;
  /** Result details retain the same warning boundary after the action row. */
  details?: ReactNode;
  /** Chart the warning covers. */
  children: ReactNode;
}

const TITLE = "Limited data for this chart";
/** Heading when every listed item is a note that leaves the chart readable. */
const NOTES_TITLE = "Notes on this lens's data";

const BLURRED: CSSProperties = { filter: "blur(4px)", pointerEvents: "none", userSelect: "none" };

export default function MtfDataWarning({
  limitations,
  acknowledged,
  onAcknowledge,
  t,
  children,
  actions,
  details,
  withholdChart = true,
}: MtfDataWarningProps) {
  const blocking = limitations.some((limitation) => limitation.blocking);
  const blocked = blocking && !acknowledged;
  const covered = blocked && withholdChart;
  const list = (
    <ul style={{ margin: "8px 0 0", paddingLeft: 18 }}>
      {limitations.map(({ kind, text }, index) => (
        <li key={`${kind}/${index}`} style={{ marginBottom: 4 }}>
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
            <WarningIcon color={t.stopLabel} size={12} />
            <span>{textRun(" ", blocking ? TITLE : NOTES_TITLE, " (", limitations.length, ")")}</span>
          </summary>
          {list}
        </details>
      ) : null}
      {/* Chart-wide warnings share the chart's cell so long limitation lists cannot overflow it. */}
      <div style={{ display: "grid" }}>
        <div
          inert={covered}
          style={{ gridArea: withholdChart ? "1 / 1" : "2 / 1", minWidth: 0, ...(covered ? BLURRED : null) }}
        >
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
              <span>{TITLE}</span>
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
      {actions}
      {details ? (
        <div inert={covered} style={{ minWidth: 0, ...(covered ? BLURRED : null) }}>
          {details}
        </div>
      ) : null}
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
