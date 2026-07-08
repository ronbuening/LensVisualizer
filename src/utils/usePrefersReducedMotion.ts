/**
 * usePrefersReducedMotion — reactive `prefers-reduced-motion: reduce` check.
 *
 * Components with non-essential motion (slide/rotate transforms, flash fades,
 * theme cross-fades) use this to drop their `transition`/animation styles for
 * users who ask the OS to minimize motion.
 */
import useMediaQuery from "./useMediaQuery.js";

export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export default function usePrefersReducedMotion(): boolean {
  return useMediaQuery(REDUCED_MOTION_QUERY);
}
