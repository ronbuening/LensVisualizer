/**
 * Prerendered head-tag marker shared by the SSR entry and the client bootstrap.
 *
 * `scripts/prerender.mjs` bakes the head tags that `entry-server.tsx` emits
 * (title, meta, canonical link, JSON-LD) into every static page. The client
 * mounts with `createRoot` rather than hydrating, so React 19 hoists a fresh
 * set of the same tags into `<head>` and the prerendered ones would linger
 * beside them: two titles, two descriptions, two canonicals, and, when the
 * served shell is not the route's own page (client-only compare URLs are
 * served from the home shell), a canonical for the wrong URL. The SSR entry
 * stamps every emitted tag with `PRERENDERED_HEAD_ATTRIBUTE` so the client can
 * drop exactly those tags once its own have committed, while non-JS clients
 * still see the full prerendered head.
 */

export const PRERENDERED_HEAD_ATTRIBUTE = "data-prerender-head";

/* Opening tags only: `</title>` and `</script>` do not match because of the
 * leading slash, and JSON-LD text is safe because `serializeJsonLd` escapes
 * `<` inside script bodies. */
const HEAD_TAG_PATTERN = /<(title|meta|link|script)\b([^>]*?)(\/?)>/g;

/** Stamp the marker on each `<title>`, `<meta>`, `<link>`, and `<script>` opening tag in SSR markup. */
export function markPrerenderedHeadTags(markup: string): string {
  return markup.replace(
    HEAD_TAG_PATTERN,
    (_match, tag: string, attributes: string, selfClosing: string) =>
      `<${tag}${attributes} ${PRERENDERED_HEAD_ATTRIBUTE}=""${selfClosing}>`,
  );
}

/** Remove every stamped tag from `<head>` and return how many were removed. */
export function removePrerenderedHeadTags(doc: Document = document): number {
  const stamped = doc.head.querySelectorAll(`[${PRERENDERED_HEAD_ATTRIBUTE}]`);
  for (const element of stamped) element.remove();
  return stamped.length;
}
