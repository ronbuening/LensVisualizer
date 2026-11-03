/**
 * Join a display text run into one primitive child. React can then replace its
 * host element's textContent after a translator detaches the original Text.
 * Rich content needs separate React-owned elements; never stringify ReactNode.
 */
export function textRun(...parts: readonly (string | number | bigint | boolean | null | undefined)[]): string {
  return parts.map((part) => (part == null || typeof part === "boolean" ? "" : String(part))).join("");
}

/** Return a count-aware singular or regular English plural noun phrase. */
export function pluralize(count: number, word: string): string {
  if (count === 1) return word;

  if (/[^aeiou]y$/i.test(word)) return `${word.slice(0, -1)}ies`;
  if (/(?:s|x|z|ch|sh)$/i.test(word)) return `${word}es`;
  return `${word}s`;
}
