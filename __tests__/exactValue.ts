/**
 * JSON test projection with insertion-ordered keys and tagged special values.
 *
 * @param value - value to encode; ordinary JSON omission rules apply to undefined
 * @returns JSON text retaining signed zero, non-finite numbers, Maps and Sets
 */
export function exactValue(value: unknown): string {
  return JSON.stringify(value, (_key, member: unknown) => {
    if (typeof member === "number") {
      if (Object.is(member, -0)) return { number: "-0" };
      if (!Number.isFinite(member)) return { number: String(member) };
    }
    if (member instanceof Map) return { map: [...member.entries()] };
    if (member instanceof Set) return { set: [...member] };
    return member;
  });
}
