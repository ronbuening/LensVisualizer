/** Return a count-aware singular or regular English plural noun phrase. */
export function pluralize(count: number, word: string): string {
  if (count === 1) return word;

  if (/[^aeiou]y$/i.test(word)) return `${word.slice(0, -1)}ies`;
  if (/(?:s|x|z|ch|sh)$/i.test(word)) return `${word}es`;
  return `${word}s`;
}
