import type { JsonLdSchema } from "../../components/SEOHead.js";

/** Prevent data containing an HTML closing tag from escaping a JSON-LD script element. */
export function serializeJsonLd(value: JsonLdSchema): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
