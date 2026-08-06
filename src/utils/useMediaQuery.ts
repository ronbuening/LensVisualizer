/**
 * useMediaQuery — reactive CSS media query hook.
 *
 * Returns true/false for the given query string and re-renders
 * on viewport changes.  Used for the responsive layout breakpoint
 * (desktop vs mobile at 900px).
 */
import { useState, useEffect } from "react";
import { subscribeToMediaQuery } from "./mediaQuery.js";

interface UseMediaQueryOptions {
  /** Value rendered on the server and during the client's hydration pass. */
  ssrDefault: boolean;
  /**
   * Set when the consuming tree never prerenders (it mounts inside ClientOnly):
   * the first render then reads the live match instead of ssrDefault, so there is
   * no wrong-value frame. Trees that prerender must NOT set this — the live read
   * would diverge from the server HTML and cause a hydration mismatch.
   */
  clientOnly?: boolean;
}

export default function useMediaQuery(
  query: string,
  { ssrDefault, clientOnly = false }: UseMediaQueryOptions,
): boolean {
  const [matches, setMatches] = useState(() =>
    clientOnly && typeof window !== "undefined" ? window.matchMedia(query).matches : ssrDefault,
  );
  useEffect(() => {
    const mql = window.matchMedia(query);
    /* Re-sync on query change — the lazy initial state only runs for the first query */
    setMatches(mql.matches);
    const handler = (e: MediaQueryListEvent): void => setMatches(e.matches);
    return subscribeToMediaQuery(mql, handler);
  }, [query]);
  return matches;
}
