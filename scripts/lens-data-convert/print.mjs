/**
 * Converter printer — writes a lens-data object as TypeScript source in the converter's own spelling, for Prettier to
 * format.
 *
 * The printer writes every record and list in Prettier's one-line form, `{ id: 1, name: "L11" }` and `[1, 2]`: bare
 * keys, one space after each colon and comma, no trailing comma. Prettier then breaks what does not fit, and leaves a
 * record under `// prettier-ignore` exactly as written here. It writes a record or list on several lines only where a
 * line must end: a comment among its entries, the file's own object, whose groups it separates with a blank line
 * before each member that opens one, as the engine names them for the version printed, and a list the engine names as
 * one of rows for that version, whose rows keep the blank lines their source had. A member's trailing comments share
 * its line, in the order the placer gives them. In a list of numbers, which Prettier fills, a one-line block comment
 * that leads an item, after any other leading comment, shares the item's line before it, where Prettier keeps it.
 *
 * Members print in the order the caller gives, which keeps gaps in surface order: the V2 view's write order going to
 * V2, and the V1 print order the engine states going to V1. A key prints bare where the
 * engine's path spelling writes it as a member, and through `JSON.stringify` where it writes it as a key (`"6":`).
 * A value prints with the literal text the caller gives it, else as `String(value)` or `JSON.stringify(value)`.
 */

const NO_COMMENTS = { leading: [], trailing: [], dangling: [] };

/** A value's literal without source text. */
function literal(value) {
  if (typeof value === "number") return Object.is(value, -0) ? "-0" : String(value);
  if (typeof value === "string") return JSON.stringify(value);
  return String(value);
}

/**
 * Print a lens-data object.
 *
 * @param {object} file - what to print
 * @param {unknown} file.value - the object
 * @param {Record<string, string[]>} file.order - each record's members, by path, in print order
 * @param {(path: string) => string | undefined} file.text - the literal text of a value, where it keeps its source's
 * @param {(path: string) => { leading: { text: string, blankBefore: boolean }[], trailing: { text: string }[],
 *   dangling: { text: string }[] } | undefined} file.comments - the comments a node carries
 * @param {(path: string) => boolean} file.blankBefore - whether a row of a list of rows had a blank line just before it
 *   in its source
 * @param {(member: string, previous: string) => boolean} file.opensGroup - whether a member of the file's object
 *   opens a group of it, given the member printed before it
 * @param {readonly string[]} file.rowLists - the lists whose rows keep their source's blank lines, by path
 * @param {(base: string, key: string | number) => string} file.childPath - the engine's path spelling
 * @returns {string} the object's source text
 */
export function printLensDataObject({ value, order, text, comments, blankBefore, opensGroup, rowLists, childPath }) {
  const commentsOf = (path) => comments(path) ?? NO_COMMENTS;
  const keyText = (base, key) => {
    const spelled = childPath(base, key);
    return spelled === (base ? `${base}.${key}` : key) ? key : JSON.stringify(key);
  };

  const print = (path, node, depth) => {
    if (node === null || typeof node !== "object") return text(path) ?? literal(node);
    const isList = Array.isArray(node);
    const keys = isList ? node.map((_, index) => index) : (order[path] ?? Object.keys(node));
    const entries = keys.map((key) => {
      const entryPath = childPath(path, key);
      return { key, path: entryPath, value: node[key], comments: commentsOf(entryPath) };
    });
    const [open, close] = isList ? ["[", "]"] : ["{", "}"];
    const dangling = commentsOf(path).dangling;
    const rows = isList && rowLists.includes(path);
    const expanded =
      path === "" ||
      dangling.length > 0 ||
      entries.some((entry) => entry.comments.leading.length + entry.comments.trailing.length > 0) ||
      (rows && entries.some((entry) => blankBefore(entry.path) || entry.comments.leading.some((c) => c.blankBefore)));
    const member = (entry) =>
      `${isList ? "" : `${keyText(path, entry.key)}: `}${print(entry.path, entry.value, depth + 1)}`;

    if (!expanded) {
      if (entries.length === 0) return `${open}${close}`;
      const inner = entries.map(member).join(", ");
      return isList ? `[${inner}]` : `{ ${inner} }`;
    }

    const indent = "  ".repeat(depth + 1);
    const lines = [open];
    /* Prettier fills a list of numbers, joining a comment on a line of its own to the item before it. */
    const filled = isList && entries.every((entry) => typeof entry.value === "number");
    entries.forEach((entry, index) => {
      const opensFileGroup = path === "" && index > 0 && opensGroup(entry.key, entries[index - 1].key);
      const leading = entry.comments.leading;
      /* In a filled list, the one-line block comments that end an item's leading run print before it on its line. */
      let own = leading.length;
      while (filled && own > 0 && /^\/\*[^\n]*\*\/$/.test(leading[own - 1].text)) own--;
      leading.slice(0, own).forEach((comment, at) => {
        if ((opensFileGroup && at === 0) || (rows && comment.blankBefore)) lines.push("");
        lines.push(`${indent}${comment.text}`);
      });
      if ((opensFileGroup && leading.length === 0) || (rows && blankBefore(entry.path))) lines.push("");
      const before = leading
        .slice(own)
        .map((comment) => `${comment.text} `)
        .join("");
      const trailing = entry.comments.trailing.map((comment) => ` ${comment.text}`).join("");
      lines.push(`${indent}${before}${member(entry)},${trailing}`);
    });
    for (const comment of dangling) lines.push(`${indent}${comment.text}`);
    lines.push(`${"  ".repeat(depth)}${close}`);
    return lines.join("\n");
  };

  return print("", value, 0);
}
