export const INVENTOR_VIEWS = [
  ["relationships", "Relationships"],
  ["assignees", "Assignees"],
  ["timeline", "Timeline"],
  ["co-inventors", "Co-inventors"],
  ["evidence", "Evidence lanes"],
] as const;
export type InventorRelationshipView = (typeof INVENTOR_VIEWS)[number][0];

export function inventorViewFromHash(hash: string): InventorRelationshipView {
  const view = new URLSearchParams(hash.replace(/^#/, "")).get("view");
  return INVENTOR_VIEWS.find(([id]) => id === view)?.[0] ?? "relationships";
}

/** Patch only this view's parameters, preserving the focus, selection, and unrelated fragment state. */
export function relationshipViewHash(hash: string, changes: Readonly<Record<string, string | null>>): string {
  const params = new URLSearchParams(hash.replace(/^#/, ""));
  for (const [key, value] of Object.entries(changes)) {
    if (value === null) params.delete(key);
    else params.set(key, value);
  }
  const value = params.toString();
  return value ? `#${value}` : "";
}
