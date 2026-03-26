/**
 * AboutFooter — renders about buttons at the bottom of the page on mobile.
 *
 * On desktop the buttons live in TopBar, so this component renders nothing.
 * On mobile all three buttons (Optics, Site, Author) are shown.
 */

import type { Theme } from "../../types/theme.js";
import { headerStrip, topBarBtn, labelStyle } from "../../utils/styles.js";

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
      <span style={labelStyle(t)}>ABOUT</span>
      <button onClick={onOpenOpticsPrimer} style={topBarBtn(t, false)}>
        Optics
      </button>
      <button onClick={onOpenAberrationsPrimer} style={topBarBtn(t, false)}>
        Aberrations
      </button>
      <button onClick={onOpenAboutSite} style={topBarBtn(t, false)}>
        Site
      </button>
      <button onClick={onOpenAboutAuthor} style={topBarBtn(t, false)}>
        Author
      </button>
    </div>
  );
}
