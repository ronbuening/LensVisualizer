/**
 * Top bar — lens selector dropdowns, compare toggle button, and about buttons.
 * Receives named callbacks so it has no knowledge of the reducer shape.
 */

import type { Theme } from "../../types/theme.js";
import { headerStrip, labelStyle as makeLabelStyle, toggleBtn, toggleGroup } from "../../utils/style/styles.js";
import type { OpticalConfigurationOption } from "../../utils/catalog/lensCatalog.js";
import type { TeleconverterOption } from "../../utils/catalog/teleconverterCatalog.js";
import AboutButtonRow from "../display/AboutButtonRow.js";
import LensSelector from "../controls/LensSelector.js";
import TeleconverterControl from "../controls/TeleconverterControl.js";

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
  configurationOptions: ReadonlyArray<OpticalConfigurationOption>;
  activeConfigurationKey: string;
  onConfigurationChange: (key: string) => void;
  /** Converters that fit the single-lens prescription or comparison pane A; empty hides the control. */
  teleconverterOptions: ReadonlyArray<TeleconverterOption>;
  activeTeleconverterKey: string | null;
  /** Converters that fit comparison pane B; only read while comparing. */
  teleconverterOptionsB: ReadonlyArray<TeleconverterOption>;
  activeTeleconverterKeyB: string | null;
  onTeleconverterChange: (panel: "a" | "b", key: string | null) => void;
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
  configurationOptions,
  activeConfigurationKey,
  onConfigurationChange,
  teleconverterOptions,
  activeTeleconverterKey,
  teleconverterOptionsB,
  activeTeleconverterKeyB,
  onTeleconverterChange,
}: TopBarProps) {
  const lStyle = makeLabelStyle(t);

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
      <span style={lStyle}>{comparing ? "LENS A" : "LENS"}</span>
      <LensSelector
        theme={t}
        isWide={isWide}
        value={lensKeyA}
        options={catalogKeys.map((k) => ({ key: k, label: catalogNames[k] }))}
        onChange={onSwitchLensA}
        style={selectorStyle}
      />

      {!comparing && configurationOptions.length > 1 && (
        <>
          <span style={lStyle}>CONFIG</span>
          <div role="group" aria-label="Optical configuration" style={toggleGroup(t)}>
            {configurationOptions.map((option, index) => (
              <button
                key={option.key}
                type="button"
                aria-pressed={activeConfigurationKey === option.key}
                onClick={() => onConfigurationChange(option.key)}
                style={toggleBtn(t, activeConfigurationKey === option.key, {
                  hasRightBorder: index < configurationOptions.length - 1,
                  padding: isWide ? "5px 10px" : "5px 7px",
                })}
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      )}

      <TeleconverterControl
        theme={t}
        isWide={isWide}
        options={teleconverterOptions}
        activeKey={activeTeleconverterKey}
        onChange={(key) => onTeleconverterChange("a", key)}
        ariaLabel={comparing ? "Teleconverter for lens A" : "Teleconverter"}
        selectorStyle={selectorStyle}
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
          <span style={lStyle}>LENS B</span>
          <LensSelector
            theme={t}
            isWide={isWide}
            value={lensKeyB}
            options={catalogKeys.map((k) => ({ key: k, label: catalogNames[k] }))}
            onChange={onSwitchLensB}
            style={selectorStyle}
          />
          <TeleconverterControl
            theme={t}
            isWide={isWide}
            options={teleconverterOptionsB}
            activeKey={activeTeleconverterKeyB}
            onChange={(key) => onTeleconverterChange("b", key)}
            ariaLabel="Teleconverter for lens B"
            selectorStyle={selectorStyle}
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
