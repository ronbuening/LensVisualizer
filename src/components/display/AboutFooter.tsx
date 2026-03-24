/**
 * AboutFooter — renders about buttons at the bottom of the page on mobile.
 *
 * On desktop the buttons live in TopBar, so this component renders nothing.
 * On mobile the set of buttons depends on the ENABLE_ABOUT_BUTTONS_IN_TOPBAR flag:
 *   - flag OFF (default): all three buttons (Optics, Site, Author)
 *   - flag ON: only Site and Author (Optics is in the top bar)
 */

import type { Theme } from "../../types/theme.js";
import { headerStrip, topBarBtn } from "../../utils/styles.js";
import { ENABLE_ABOUT_BUTTONS_IN_TOPBAR } from "../../utils/featureFlags.js";

interface AboutFooterProps {
  theme: Theme;
  isWide: boolean;
  onOpenOpticsPrimer: () => void;
  onOpenAboutSite: () => void;
  onOpenAboutAuthor: () => void;
}

export default function AboutFooter({
  theme: t,
  isWide,
  onOpenOpticsPrimer,
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
      <span
        style={{
          fontSize: 9,
          letterSpacing: "0.12em",
          color: t.muted,
          fontFamily: "inherit",
          whiteSpace: "nowrap",
        }}
      >
        ABOUT
      </span>
      {!ENABLE_ABOUT_BUTTONS_IN_TOPBAR && (
        <button onClick={onOpenOpticsPrimer} style={topBarBtn(t, false)}>
          Optics
        </button>
      )}
      <button onClick={onOpenAboutSite} style={topBarBtn(t, false)}>
        Site
      </button>
      <button onClick={onOpenAboutAuthor} style={topBarBtn(t, false)}>
        Author
      </button>
    </div>
  );
}
