/**
 * GlassMap — nd against νd scatter of the glass catalog for the builder's material picker.
 *
 * Follows the Abbe diagram's orientation (νd falls left to right, nd rises upward). A click picks the catalog glass
 * nearest the pointer; arrow keys walk the cursor to the nearest glass in that direction and Enter picks it.
 */

import { useId, useMemo, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import type { GlassEntry } from "../../optics/glassCatalog.js";
import type { Theme } from "../../types/theme.js";
import { builderCaptionStyle, builderInputStyle } from "./CommitInput.js";

interface GlassMapProps {
  glasses: readonly GlassEntry[];
  current: { nd: number; vd?: number };
  theme: Theme;
  /** Accessible-name prefix, for example the element name "L2". */
  label: string;
  touch: boolean;
  onPick: (glass: GlassEntry) => void;
}

const W = 320;
const H = 212;
const ML = 34;
const MR = 8;
const MT = 8;
const MB = 24;
const VD_HI = 96;
const VD_LO = 14;
const ND_LO = 1.42;
const ND_HI = 2.06;
/** Pointer pick radius in viewBox units. */
const PICK_RADIUS = 14;

const x = (vd: number) => ML + ((VD_HI - vd) / (VD_HI - VD_LO)) * (W - ML - MR);
const y = (nd: number) => MT + ((ND_HI - nd) / (ND_HI - ND_LO)) * (H - MT - MB);

const VD_TICKS = [20, 30, 40, 50, 60, 70, 80, 90];
const ND_TICKS = [1.5, 1.6, 1.7, 1.8, 1.9, 2.0];

const pickButton = {
  borderRadius: 4,
  padding: "3px 8px",
  font: "inherit",
  fontSize: 10,
  letterSpacing: "0.04em",
  cursor: "pointer",
  whiteSpace: "nowrap",
} as const;

function glassKey(g: GlassEntry): string {
  return `${g.vendor}:${g.name}`;
}

function nearestTo(glasses: readonly GlassEntry[], px: number, py: number, limit = Infinity): GlassEntry | null {
  let best: GlassEntry | null = null;
  let bestD = limit;
  for (const g of glasses) {
    const d = Math.hypot(x(g.vd) - px, y(g.nd) - py);
    if (d < bestD) {
      best = g;
      bestD = d;
    }
  }
  return best;
}

/** The nearest glass in a 90° cone towards an arrow key, weighting sideways distance so the walk stays on course. */
function step(glasses: readonly GlassEntry[], from: GlassEntry, key: string): GlassEntry | null {
  const [dx, dy] = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[key] ?? [0, 0];
  const fx = x(from.vd);
  const fy = y(from.nd);
  let best: GlassEntry | null = null;
  let bestScore = Infinity;
  for (const g of glasses) {
    const ax = x(g.vd) - fx;
    const ay = y(g.nd) - fy;
    const along = ax * dx + ay * dy;
    const across = Math.abs(ax * dy - ay * dx);
    if (along <= 0.25 || across > along) continue;
    const score = along + 2 * across;
    if (score < bestScore) {
      best = g;
      bestScore = score;
    }
  }
  return best;
}

export default function GlassMap({ glasses, current, theme: t, label, touch, onPick }: GlassMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const readoutId = useId();
  const [vendor, setVendor] = useState("");
  const [hover, setHover] = useState<GlassEntry | null>(null);
  const shown = useMemo(() => (vendor ? glasses.filter((g) => g.vendor === vendor) : glasses), [glasses, vendor]);
  const vendors = useMemo(
    () =>
      [...new Set(glasses.map((g) => g.vendor))]
        .map((v) => ({ v, n: glasses.filter((g) => g.vendor === v).length }))
        .sort((a, b) => b.n - a.n),
    [glasses],
  );
  const currentVd = current.vd ?? 50;
  const [cursor, setCursor] = useState<GlassEntry | null>(() => nearestTo(glasses, x(currentVd), y(current.nd)));
  const [previousShown, setPreviousShown] = useState(shown);
  if (shown !== previousShown) {
    setPreviousShown(shown);
    setCursor(nearestTo(shown, x(cursor?.vd ?? currentVd), y(cursor?.nd ?? current.nd)));
    setHover(null);
  }
  const active = hover && shown.includes(hover) ? hover : cursor && shown.includes(cursor) ? cursor : null;
  const pick = (glass: GlassEntry) => {
    if (shown.includes(glass)) onPick(glass);
  };
  /* The dot layer is the expensive part; keep it out of hover re-renders. */
  const dots = useMemo(
    () =>
      shown.map((g) => (
        <circle key={glassKey(g)} cx={x(g.vd)} cy={y(g.nd)} r={1.7} fill={t.muted} fillOpacity={0.55} />
      )),
    [shown, t.muted],
  );
  /* A touch tap only moves the cursor; the Pick button confirms, so an imprecise tap never changes the glass. */
  const lastPointer = useRef("mouse");
  const toPlot = (e: { clientX: number; clientY: number }) => {
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect || !rect.width) return null;
    return { px: ((e.clientX - rect.left) / rect.width) * W, py: ((e.clientY - rect.top) / rect.height) * H };
  };
  const onKeyDown = (e: KeyboardEvent<SVGSVGElement>) => {
    if (e.key.startsWith("Arrow")) {
      e.preventDefault();
      const from = cursor ?? nearestTo(shown, x(currentVd), y(current.nd));
      const next = from && (shown.includes(from) ? step(shown, from, e.key) : nearestTo(shown, x(from.vd), y(from.nd)));
      if (next) {
        setCursor(next);
        setHover(null);
      }
    } else if ((e.key === "Enter" || e.key === " ") && cursor) {
      e.preventDefault();
      pick(cursor);
    }
  };
  const marker = (g: { nd: number; vd: number }, color: string, r: number) => (
    <circle cx={x(g.vd)} cy={y(g.nd)} r={r} fill="none" stroke={color} strokeWidth={1.6} />
  );

  return (
    <div style={{ display: "grid", gap: 6 }}>
      <label style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span style={builderCaptionStyle(t)}>Vendor</span>
        <select
          aria-label={`Glass map vendor for ${label}`}
          value={vendor}
          onChange={(e) => {
            setVendor(e.target.value);
            setHover(null);
          }}
          style={{ ...builderInputStyle(t, false, touch), width: "auto", flex: 1, cursor: "pointer" }}
        >
          <option value="">All vendors ({glasses.length})</option>
          {vendors.map(({ v, n }) => (
            <option key={v} value={v}>
              {v} ({n})
            </option>
          ))}
        </select>
      </label>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        role="application"
        aria-roledescription="glass map"
        aria-label={`Glass map for ${label}: nd against νd. Arrow keys move between glasses, Enter picks.`}
        aria-describedby={readoutId}
        tabIndex={0}
        style={{ width: "100%", height: "auto", display: "block", cursor: "crosshair", touchAction: "manipulation" }}
        onPointerDown={(e) => {
          lastPointer.current = e.pointerType;
        }}
        onPointerMove={(e: PointerEvent<SVGSVGElement>) => {
          if (e.pointerType !== "mouse") return;
          const p = toPlot(e);
          setHover(p ? nearestTo(shown, p.px, p.py, PICK_RADIUS) : null);
        }}
        onPointerLeave={() => setHover(null)}
        onClick={(e) => {
          /* A mouse click takes the glass the readout names, so what is shown is what is picked. */
          const p = toPlot(e);
          const g = (lastPointer.current === "mouse" && hover) || (p && nearestTo(shown, p.px, p.py, PICK_RADIUS));
          if (!g) return;
          if (lastPointer.current === "touch") {
            setCursor(g);
            setHover(null);
          } else pick(g);
        }}
        onKeyDown={onKeyDown}
      >
        <rect
          x={ML}
          y={MT}
          width={W - ML - MR}
          height={H - MT - MB}
          fill={t.panelBg}
          stroke={t.panelBorder}
          strokeWidth={1}
        />
        {VD_TICKS.map((v) => (
          <g key={`v${v}`}>
            <line x1={x(v)} x2={x(v)} y1={MT} y2={H - MB} stroke={t.panelDivider} strokeWidth={0.6} />
            <text x={x(v)} y={H - MB + 11} textAnchor="middle" fontSize={8} fill={t.muted} fontFamily="inherit">
              {v}
            </text>
          </g>
        ))}
        {ND_TICKS.map((n) => (
          <g key={`n${n}`}>
            <line x1={ML} x2={W - MR} y1={y(n)} y2={y(n)} stroke={t.panelDivider} strokeWidth={0.6} />
            <text x={ML - 4} y={y(n) + 3} textAnchor="end" fontSize={8} fill={t.muted} fontFamily="inherit">
              {n.toFixed(1)}
            </text>
          </g>
        ))}
        <text x={W - MR} y={H - 2} textAnchor="end" fontSize={8} fill={t.label} fontFamily="inherit">
          ← νd
        </text>
        <text x={2} y={MT + 6} fontSize={8} fill={t.label} fontFamily="inherit">
          nd
        </text>
        <g aria-hidden>{dots}</g>
        {marker({ nd: current.nd, vd: currentVd }, t.sliderAccent, 5.5)}
        {active && marker(active, t.title, 3.6)}
      </svg>
      <div style={{ display: "flex", alignItems: "center", gap: 8, minHeight: 26 }}>
        <p id={readoutId} aria-live="polite" style={{ margin: 0, fontSize: 11, color: t.body, flex: 1, minWidth: 0 }}>
          {active ? (
            `${active.name} · ${active.vendor} · ${active.nd} / ${active.vd}`
          ) : (
            <span style={{ color: t.muted }}>Point at a glass to read it; click to pick.</span>
          )}
        </p>
        {active && (
          <button
            type="button"
            onClick={() => pick(active)}
            style={{
              ...pickButton,
              color: t.toggleActiveText,
              background: t.toggleActiveBg,
              border: `1px solid ${t.toggleBorder}`,
            }}
          >
            Pick {active.name}
          </button>
        )}
      </div>
    </div>
  );
}
