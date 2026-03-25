/**
 * AboutButtonRow — renders the "About" button group (Optics, Site, Author).
 * Shared between TopBar (inline) and AboutFooter (standalone strip).
 */

import type { Theme } from "../../types/theme.js";
import { topBarBtn } from "../../utils/styles.js";

interface AboutButtonRowProps {
  theme: Theme;
  isWide: boolean;
  onOpenOpticsPrimer: () => void;
  onOpenAberrationsPrimer: () => void;
  onOpenAboutSite: () => void;
  onOpenAboutAuthor: () => void;
  showLabel?: boolean;
}

export default function AboutButtonRow({
  theme: t,
  isWide,
  onOpenOpticsPrimer,
  onOpenAberrationsPrimer,
  onOpenAboutSite,
  onOpenAboutAuthor,
  showLabel = false,
}: AboutButtonRowProps) {
  const labelStyle = {
    fontSize: 9,
    letterSpacing: "0.12em",
    color: t.muted,
    fontFamily: "inherit" as const,
    whiteSpace: "nowrap" as const,
  };

  return (
    <>
      {showLabel && <span style={labelStyle}>ABOUT</span>}
      <button onClick={onOpenOpticsPrimer} style={topBarBtn(t, isWide)}>
        Optics
      </button>
      <button onClick={onOpenAberrationsPrimer} style={topBarBtn(t, isWide)}>
        Aberrations
      </button>
      <button onClick={onOpenAboutSite} style={topBarBtn(t, isWide)}>
        Site
      </button>
      <button onClick={onOpenAboutAuthor} style={topBarBtn(t, isWide)}>
        Author
      </button>
    </>
  );
}
