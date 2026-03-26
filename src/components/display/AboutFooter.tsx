/**
 * AboutFooter — renders about buttons at the bottom of the page on mobile.
 *
 * On desktop the buttons live in TopBar, so this component renders nothing.
 * On mobile all four buttons (Optics, Aberrations, Site, Author) are shown
 * via the shared AboutButtonRow.
 */

import type { Theme } from "../../types/theme.js";
import { headerStrip } from "../../utils/styles.js";
import AboutButtonRow from "./AboutButtonRow.js";

interface AboutFooterProps {
  theme: Theme;
  isWide: boolean;
  onOpenOpticsPrimer: () => void;
  onOpenAberrationsPrimer: () => void;
  onOpenAboutSite: () => void;
  onOpenAboutAuthor: () => void;
}

export default function AboutFooter({
  theme: t,
  isWide,
  onOpenOpticsPrimer,
  onOpenAberrationsPrimer,
  onOpenAboutSite,
  onOpenAboutAuthor,
}: AboutFooterProps) {
  if (isWide) return null;

  return (
    <div
      style={{
        ...headerStrip(t, { padding: "12px 16px" }),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <AboutButtonRow
        theme={t}
        isWide={false}
        onOpenOpticsPrimer={onOpenOpticsPrimer}
        onOpenAberrationsPrimer={onOpenAberrationsPrimer}
        onOpenAboutSite={onOpenAboutSite}
        onOpenAboutAuthor={onOpenAboutAuthor}
        showLabel
      />
    </div>
  );
}
