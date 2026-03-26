/**
 * AboutButtonRow — renders the "About" button group (Optics, Site, Author).
 * Shared between TopBar (inline) and AboutFooter (standalone strip).
 */

import type { Theme } from "../../types/theme.js";
import { topBarBtn, labelStyle } from "../../utils/styles.js";

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
  return (
    <>
      {showLabel && <span style={labelStyle(t)}>ABOUT</span>}
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
