/**
 * Top bar — lens selector dropdowns, compare toggle button, and about buttons.
 * Receives named callbacks so it has no knowledge of the reducer shape.
 */

import type { Theme } from "../../types/theme.js";
import { headerStrip } from "../../utils/styles.js";
import AboutButtonRow from "../display/AboutButtonRow.js";
import LensSelector from "../controls/LensSelector.js";

interface TopBarProps {
  theme: Theme;
  isWide: boolean;
  lensKeyA: string;
  lensKeyB: string;
  comparing: boolean;
  showCompareBtn: boolean;
  onSwitchLensA: (key: string) => void;
  onSwitchLensB: (key: string) => void;
  onSwapLenses: () => void;
  onToggleCompare: () => void;
  onOpenAboutSite: () => void;
  onOpenAboutAuthor: () => void;
  onOpenOpticsPrimer: () => void;
  onOpenAberrationsPrimer: () => void;
  catalogKeys: string[];
  catalogNames: Record<string, string>;
}

export default function TopBar({
  theme: t,
  isWide,
  lensKeyA,
  lensKeyB,
  comparing,
  showCompareBtn,
  onSwitchLensA,
  onSwitchLensB,
  onSwapLenses,
  onToggleCompare,
  onOpenAboutSite,
  onOpenAboutAuthor,
  onOpenOpticsPrimer,
  onOpenAberrationsPrimer,
  catalogKeys,
  catalogNames,
}: TopBarProps) {
  const labelStyle = {
    fontSize: 9,
    letterSpacing: "0.12em",
    color: t.muted,
    fontFamily: "inherit" as const,
    whiteSpace: "nowrap" as const,
  };

  const selectorStyle = { flex: isWide ? "0 1 280px" : "1 1 0%", minWidth: 0 };

  return (
    <div
      style={{
        ...headerStrip(t, { padding: isWide ? "12px 24px" : "10px 12px" }),
        display: "flex",
        alignItems: "center",
        gap: isWide ? 12 : 8,
        flexWrap: "wrap",
      }}
    >
      <span style={labelStyle}>{comparing ? "LENS A" : "LENS"}</span>
      <LensSelector
        theme={t}
        isWide={isWide}
        value={lensKeyA}
        options={catalogKeys.map((k) => ({ key: k, label: catalogNames[k] }))}
        onChange={onSwitchLensA}
        style={selectorStyle}
      />

      {comparing && (
        <button
          onClick={onSwapLenses}
          title="Swap lenses"
          style={{
            background: "none",
            border: `1.5px solid ${t.sliderAccent}40`,
            borderRadius: 6,
            padding: "4px 8px",
            cursor: "pointer",
            color: t.muted,
            fontFamily: "inherit",
            fontSize: 14,
            lineHeight: 1,
            flexShrink: 0,
            outline: "none",
          }}
        >
          ⇄
        </button>
      )}

      {comparing && (
        <>
          <span style={labelStyle}>LENS B</span>
          <LensSelector
            theme={t}
            isWide={isWide}
            value={lensKeyB}
            options={catalogKeys.map((k) => ({ key: k, label: catalogNames[k] }))}
            onChange={onSwitchLensB}
            style={selectorStyle}
          />
        </>
      )}

      {showCompareBtn && (
        <button
          onClick={onToggleCompare}
          style={{
            backgroundColor: comparing ? t.toggleActiveBg : t.selectorBg,
            border: `1.5px solid ${comparing ? t.sliderAccent : `${t.sliderAccent}40`}`,
            borderRadius: 6,
            padding: isWide ? "5px 14px" : "5px 10px",
            cursor: "pointer",
            fontSize: 10,
            color: comparing ? t.toggleActiveText : t.selectorText,
            fontFamily: "inherit",
            letterSpacing: "0.08em",
            outline: "none",
            flexShrink: 0,
            boxShadow: `0 0 6px ${t.sliderAccent}18`,
            transition: "all 0.3s",
          }}
        >
          {comparing ? "EXIT COMPARE" : "COMPARE"}
        </button>
      )}

      {isWide && <div style={{ flex: 1 }} />}
      {isWide && (
        <AboutButtonRow
          theme={t}
          isWide={isWide}
          onOpenOpticsPrimer={onOpenOpticsPrimer}
          onOpenAberrationsPrimer={onOpenAberrationsPrimer}
          onOpenAboutSite={onOpenAboutSite}
          onOpenAboutAuthor={onOpenAboutAuthor}
          showLabel
        />
      )}
    </div>
  );
}
