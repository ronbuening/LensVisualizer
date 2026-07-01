/**
 * useActiveHoliday — returns the HolidayTheme for today, or null.
 *
 * A `?holiday=<id>` URL param overrides the calendar (see holidayOverrideFromSearch)
 * so any holiday skin can be previewed or shared on demand; `?holiday=none` forces
 * no holiday. The override is read from the router location, so it reacts to
 * in-place query changes as well as navigations.
 *
 * SSR-safe: renders `null` on the server and for the first client render (so
 * hydration matches), then resolves in an effect. Must be called within a Router.
 */

import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getActiveHoliday, holidayOverrideFromSearch } from "../holidays.js";
import { HOLIDAY_THEMES, type HolidayTheme } from "./holidayThemes.js";

export function useActiveHoliday(): HolidayTheme | null {
  const { search } = useLocation();
  const [holiday, setHoliday] = useState<HolidayTheme | null>(null);

  useEffect(() => {
    const override = holidayOverrideFromSearch(search);
    const id = override.forced ? override.id : getActiveHoliday();
    setHoliday(id ? HOLIDAY_THEMES[id] : null);
  }, [search]);

  return holiday;
}
