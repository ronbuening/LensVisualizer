/**
 * Subscribe to a MediaQueryList across current and legacy WebKit APIs.
 *
 * Older iOS Safari releases expose addListener/removeListener but not the
 * EventTarget-style addEventListener/removeEventListener pair. Calling the
 * newer API unconditionally crashes the React effect during startup.
 */
export function subscribeToMediaQuery(
  mediaQuery: MediaQueryList,
  listener: (event: MediaQueryListEvent) => void,
): () => void {
  if (typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }

  if (typeof mediaQuery.addListener === "function") {
    mediaQuery.addListener(listener);
    return () => mediaQuery.removeListener(listener);
  }

  return () => undefined;
}
