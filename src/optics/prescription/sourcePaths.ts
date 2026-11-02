/**
 * Source paths — how ingest, the V2 writer and the converter spell a path into an authored file or a canonical
 * prescription (see agent_docs/architecture/optics-engine.md).
 *
 * A path names a node from the file's root, which is the empty path:
 * - a member of a record is `.name` after the record, or the bare name at the root: `surfaces[3].R`, `key`;
 * - an item of a list is `[index]`: `zoomPositions[1]`;
 * - a key of a record keyed by surface label is `["label"]`, whatever the label, as ingest's refusals write it:
 *   `asph["3A"]`, `gaps["STO"]`. So is a member of any other record whose name is not an identifier.
 *
 * Ingest records its source paths in this spelling (`SourcePaths` in `canonical.ts`), the V2 writer records what it
 * writes in it, and the converter's reader spells each node it reads through `childPath`, so a path read from a file
 * names the same node in all three. V1 ingest's refusals spell their paths here too, so a label holding `"` or `\`
 * prints JSON-escaped in a refusal (`asph["a\"b"]`), where it once printed as written.
 */

/** Records keyed by surface label, in either version. */
const LABEL_KEYED: ReadonlySet<string> = new Set([
  "asph",
  "var",
  "aberrationControl.var",
  "gaps",
  "aberrationControl.gaps",
]);

const IDENTIFIER = /^[A-Za-z_$][\w$]*$/;

/** The path of a record member. */
export function memberPath(base: string, name: string): string {
  if (!IDENTIFIER.test(name)) return `${base}[${JSON.stringify(name)}]`;
  return base ? `${base}.${name}` : name;
}

/** The path of a list item. */
export function itemPath(base: string, index: number): string {
  return `${base}[${index}]`;
}

/** The path of a key in a record keyed by surface label. */
export function labelPath(base: string, label: string): string {
  return `${base}[${JSON.stringify(label)}]`;
}

/**
 * The path of a child of the node at `base`, as a reader walking a file meets it.
 *
 * @param base - path of the record or list
 * @param key - the member name, or the item index
 * @returns the child's path
 */
export function childPath(base: string, key: string | number): string {
  if (typeof key === "number") return itemPath(base, key);
  return LABEL_KEYED.has(base) ? labelPath(base, key) : memberPath(base, key);
}

/**
 * Where the last segment of a path starts.
 *
 * @param path - a non-empty path
 * @returns the index of its last `.`, or of the `[` that opens its last index or key
 */
function lastSegmentStart(path: string): number {
  if (!path.endsWith("]")) return path.lastIndexOf(".");
  if (!path.endsWith('"]')) return path.lastIndexOf("[");
  /* A quoted key: find the quote that opens it, skipping escaped quotes inside it. */
  for (let at = path.length - 3; at > 0; at--) {
    if (path[at] !== '"') continue;
    let backslashes = 0;
    while (path[at - 1 - backslashes] === "\\") backslashes++;
    if (backslashes % 2 === 0 && path[at - 1] === "[") return at - 1;
  }
  return -1;
}

/**
 * The path of a node's parent.
 *
 * @param path - a node's path
 * @returns its parent's path, the empty path for a root member, and `undefined` for the root itself
 */
export function parentPath(path: string): string | undefined {
  if (path === "") return undefined;
  const start = lastSegmentStart(path);
  return start <= 0 ? "" : path.slice(0, start);
}

/**
 * Whether a path names a node at or below another, and the rest of it if so.
 *
 * @param path - the path to test
 * @param ancestor - the possible ancestor
 * @returns what `path` adds to `ancestor` (empty when they are equal), or `undefined` when it is not below it
 */
export function pathBelow(path: string, ancestor: string): string | undefined {
  if (path === ancestor) return "";
  if (ancestor === "") return path.startsWith("[") ? path : `.${path}`;
  if (!path.startsWith(ancestor)) return undefined;
  const rest = path.slice(ancestor.length);
  return rest.startsWith(".") || rest.startsWith("[") ? rest : undefined;
}

/**
 * Extend a path by what another adds below its ancestor, as `pathBelow` returns it.
 *
 * @param base - the path to extend
 * @param rest - a suffix from `pathBelow`
 * @returns the extended path
 */
export function extendPath(base: string, rest: string): string {
  if (base === "" && rest.startsWith(".")) return rest.slice(1);
  return base + rest;
}

/**
 * First key for each value of a record, as a map from value to key: a relation read the other way.
 *
 * @param record - a relation from one set of paths to another
 * @returns each target path with the first source path that names it
 */
export function inverse(record: Readonly<Record<string, string>>): Map<string, string> {
  const map = new Map<string, string>();
  for (const [key, value] of Object.entries(record)) if (!map.has(value)) map.set(value, key);
  return map;
}

/**
 * Follow a path through a map of exact entries and subtrees: an exact entry, or the entry of the nearest ancestor that
 * is a subtree, extended by the rest of the path.
 *
 * @param path - the path to follow
 * @param exact - entries that apply to their own path only
 * @param subtrees - entries that apply to the paths below theirs too
 * @returns the path it leads to, or `undefined` when neither map covers it
 */
export function follow(
  path: string,
  exact: ReadonlyMap<string, string>,
  subtrees: ReadonlyMap<string, string>,
): string | undefined {
  const found = exact.get(path);
  if (found !== undefined) return found;
  for (let ancestor = parentPath(path); ancestor !== undefined; ancestor = parentPath(ancestor)) {
    const target = subtrees.get(ancestor);
    if (target !== undefined) return extendPath(target, pathBelow(path, ancestor)!);
  }
  return undefined;
}
