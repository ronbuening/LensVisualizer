/**
 * Application configuration — stable product-level defaults and settings.
 *
 * Not feature flags. These values represent intended permanent behavior,
 * not experiments. Add to this file when a value is a product default
 * rather than a short-lived toggle.
 *
 * DEFAULT_* — initial state for new users (no localStorage entry yet).
 */

/** Initial chromatic aberration display state for new users. */
export const DEFAULT_COLOR_TRACING = false;
