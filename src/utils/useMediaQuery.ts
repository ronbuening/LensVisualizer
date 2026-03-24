/**
 * useMediaQuery — reactive CSS media query hook.
 *
 * Returns true/false for the given query string and re-renders
 * on viewport changes.  Used for the responsive layout breakpoint
 * (desktop vs mobile at 900px).
 */
import { useState, useEffect } from "react";

export default function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : true,
  );
  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent): void => setMatches(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);
  return matches;
}
