/**
 * TeleconverterControl — mounts or removes a detachable teleconverter on the active lens.
 *
 * Rendered by TopBar only when the lens has at least one compatible converter. A few distinct magnifications fit
 * a toggle group (NONE / 1.4× / 2×); a longer list, or two converters with the same magnification, falls back to
 * the shared dropdown so each option can show its full name.
 */

import type { CSSProperties } from "react";
import type { Theme } from "../../types/theme.js";
import type { TeleconverterOption } from "../../utils/catalog/teleconverterCatalog.js";
import { labelStyle as makeLabelStyle, toggleBtn, toggleGroup } from "../../utils/style/styles.js";
import LensSelector from "./LensSelector.js";

interface TeleconverterControlProps {
  theme: Theme;
  isWide: boolean;
  options: ReadonlyArray<TeleconverterOption>;
  /** Mounted converter key, or null for the bare lens. */
  activeKey: string | null;
  onChange: (key: string | null) => void;
  /** Distinguishes the two pane controls in comparison mode. */
  ariaLabel?: string;
  selectorStyle?: CSSProperties;
}

/** Largest option count still shown as a toggle group. */
const MAX_TOGGLE_OPTIONS = 3;

/* LensSelector options need a non-empty key; converter keys are lowercase slugs, so this cannot collide. */
const NONE_KEY = "__none__";

export default function TeleconverterControl({
  theme: t,
  isWide,
  options,
  activeKey,
  onChange,
  ariaLabel = "Teleconverter",
  selectorStyle,
}: TeleconverterControlProps) {
  if (options.length === 0) return null;

  const distinctLabels = new Set(options.map((option) => option.label)).size === options.length;
  const useToggle = options.length <= MAX_TOGGLE_OPTIONS && distinctLabels;
  const choices: { key: string | null; label: string; title: string }[] = [
    { key: null, label: "NONE", title: "No teleconverter" },
    ...options.map((option) => ({ key: option.key, label: option.label, title: option.name })),
  ];

  return (
    <>
      <span style={makeLabelStyle(t)}>TC</span>
      {useToggle ? (
        <div role="group" aria-label={ariaLabel} style={toggleGroup(t)}>
          {choices.map((choice, index) => (
            <button
              key={choice.key ?? NONE_KEY}
              type="button"
              title={choice.title}
              aria-pressed={activeKey === choice.key}
              onClick={() => onChange(choice.key)}
              style={toggleBtn(t, activeKey === choice.key, {
                hasRightBorder: index < choices.length - 1,
                padding: isWide ? "5px 10px" : "5px 7px",
              })}
            >
              {choice.label}
            </button>
          ))}
        </div>
      ) : (
        <LensSelector
          theme={t}
          isWide={isWide}
          value={activeKey ?? NONE_KEY}
          options={choices.map((choice) => ({ key: choice.key ?? NONE_KEY, label: choice.title }))}
          onChange={(key) => onChange(key === NONE_KEY ? null : key)}
          ariaLabel={ariaLabel}
          style={selectorStyle}
        />
      )}
    </>
  );
}
