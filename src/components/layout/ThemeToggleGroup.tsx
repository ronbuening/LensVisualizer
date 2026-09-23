/**
 * ThemeToggleGroup — the High Contrast toggle and Auto/Dark/Light theme cycle button.
 *
 * Shared by PageNavBar (static pages) and BreadcrumbBar (LensViewer) so every page header
 * presents the same inline theme selectors. Callers own the state and persistence.
 */

import type { Theme } from "../../types/theme.js";
import type { ThemeMode } from "../../utils/theme/themePreferences.js";
import { toggleGroup, toggleBtn } from "../../utils/style/styles.js";
import { themeSlotDisplay } from "../../utils/theme/themeConstants.js";
import { useActiveHoliday } from "../../utils/theme/useActiveHoliday.js";

interface ThemeToggleGroupProps {
  theme: Theme;
  themeMode: ThemeMode;
  highContrast: boolean;
  onToggleTheme: () => void;
  onToggleHC: () => void;
}

export default function ThemeToggleGroup({
  theme: t,
  themeMode,
  highContrast,
  onToggleTheme,
  onToggleHC,
}: ThemeToggleGroupProps) {
  const holiday = useActiveHoliday();
  const slot = themeSlotDisplay(themeMode, holiday);

  return (
    <div style={toggleGroup(t)}>
      <button type="button" aria-pressed={highContrast} onClick={onToggleHC} style={toggleBtn(t, highContrast)}>
        <span style={{ fontSize: 12, lineHeight: 1, fontWeight: 700 }}>◐</span>
        <span>HC</span>
      </button>
      <button
        type="button"
        aria-label={`Theme: ${slot.label}. Cycle theme`}
        onClick={onToggleTheme}
        style={toggleBtn(t, false, { hasRightBorder: false })}
      >
        <span style={{ fontSize: themeMode === "auto" ? 12 : 14, lineHeight: 1 }}>{slot.icon}</span>
        <span>{slot.label}</span>
      </button>
    </div>
  );
}
