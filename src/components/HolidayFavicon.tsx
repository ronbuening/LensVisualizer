/**
 * HolidayFavicon — swaps the browser-tab favicon to the holiday variant.
 *
 * Renders nothing. On mount, if today is a holiday AND the user is in "auto"
 * theme mode (dark preference unset), it repoints every `<link rel="icon">` at
 * the holiday favicon (dropping the light/dark `media` scoping so it shows in
 * both), and restores the originals on cleanup. Client-only and effect-guarded,
 * so it is a no-op during SSR/prerender (the static index.html favicons stand).
 *
 * The swap is resolved once on mount; toggling the theme mid-session won't live-
 * update the tab icon until reload, which is acceptable for a favicon.
 */

import { useEffect } from "react";
import { getActiveHoliday, holidayOverrideFromSearch } from "../utils/holidays.js";
import { HOLIDAY_THEMES } from "../utils/theme/holidayThemes.js";
import { loadPrefs } from "../utils/state/preferences.js";

export default function HolidayFavicon(): null {
  useEffect(() => {
    const override = holidayOverrideFromSearch(window.location.search);
    const id = override.forced ? override.id : getActiveHoliday();
    if (!id) return;

    // Only skin the favicon when the holiday theme is actually active (auto mode).
    const prefs = loadPrefs();
    if (prefs.dark === true || prefs.dark === false) return;

    const favicon = HOLIDAY_THEMES[id].favicon;
    if (!favicon) return;

    const links = Array.from(document.querySelectorAll<HTMLLinkElement>('link[rel="icon"]'));
    const originals = links.map((el) => ({ el, href: el.getAttribute("href"), media: el.getAttribute("media") }));

    for (const el of links) {
      el.removeAttribute("media");
      el.setAttribute("href", favicon);
    }

    return () => {
      for (const o of originals) {
        if (o.href !== null) o.el.setAttribute("href", o.href);
        if (o.media !== null) o.el.setAttribute("media", o.media);
      }
    };
  }, []);

  return null;
}
