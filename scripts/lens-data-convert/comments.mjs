/**
 * Converter comment mapping — carries each comment of a source file to the node it annotates in the converted file
 * (OPTICS_ENGINE_REWRITE_SPEC.md, Ingest, conversion and comments).
 *
 * Where a comment goes is the engine's answer (`V2SourceMap.commentTarget`), composed from where ingest read each
 * value and where the V2 view wrote it; this module never infers a node's place from its path or its leaves. A
 * comment keeps its placement when its node has a counterpart: leading above it, trailing after it, dangling after
 * the last entry of its record or list, and an inner one (between a member's name and its value) above it, unless it
 * sits inside a literal whose text the converted file keeps, which carries it. A leading comment on a top-level field
 * leads the record that field opens, as the engine says. A comment whose node has no counterpart moves to the nearest
 * node written from one of its ancestors, or to the home of a container the converted file dissolves; there it leads
 * that node (or ends the file's object, when that is all it finds), and its text opens with
 * "(moved from <source path>)" unless it already does. A run of comments moved together from one source path takes
 * that note once, on its first comment, except a directive such as `// prettier-ignore`, which always takes its own
 * so that no moved comment is a bare directive. Header comments stay in the kept header.
 *
 * A node's trailing comments share its line: its one-line block comments first, then at most one comment that ends
 * the line, a line comment or a block comment spanning lines. A further one, when two such comments come to one node,
 * leads that node, after its own leading comments, in source order.
 */

/** A comment that tells a tool what to do with the code after it, which a moved comment must never be bare. */
const DIRECTIVE = /^\s*(?:prettier-ignore|eslint-|@ts-)/;

/** Whether a comment is a directive. */
function isDirective(text) {
  return DIRECTIVE.test(text.startsWith("//") ? text.slice(2) : text.slice(2, -2));
}

/** Whether a trailing comment must end its line: a line comment, or a block comment that spans lines. */
function endsLine(comment) {
  return comment.text.startsWith("//") || comment.text.includes("\n");
}

/** The text of a comment moved from `from`, its moved-from note inside it so a directive stays inert. */
export function movedCommentText(text, from) {
  const line = text.startsWith("//");
  const body = line ? text.slice(2) : text.slice(2, -2);
  if (body.trimStart().startsWith("(moved from")) return text;
  const note = `(moved from ${from})`;
  const rest = body === "" || /^\s/.test(body) ? body : ` ${body}`;
  return line ? `// ${note}${rest}` : `/* ${note}${rest}*/`;
}

/**
 * A comment as the converted file is checked for it: a line comment without trailing space, a block comment without
 * the indentation Prettier gives its lines.
 */
export function commentKey(text) {
  if (text.startsWith("//")) return text.trimEnd();
  return text
    .split("\n")
    .map((line) => line.trim())
    .join("\n");
}

/**
 * Place a source file's comments in the converted file.
 *
 * @param {object} source - what the comments come from
 * @param {import("./read.mjs").ReadComment[]} source.comments - the source's comments, as the reader attached them
 * @param {(authoredPath: string, leading: boolean) => { path: string, moved: boolean }} source.commentTarget - the
 *   engine's answer, for a comment that leads its node or not
 * @param {(authoredPath: string) => boolean} source.textKept - whether the converted file keeps the literal text of
 *   the value at an authored path, so a comment inside that literal rides along
 * @param {(v2Path: string) => boolean} source.isContainer - whether the converted file writes a record or list there
 * @returns {{ byPath: Map<string, { leading: object[], trailing: object[], dangling: object[] }>, moved: object[],
 *   unattached: import("./read.mjs").ReadComment[] }} the comments each converted node carries, every moved comment
 *   for the report, a run's later ones included, and any comment that has no place in the converted object
 */
export function placeComments({ comments, commentTarget, textKept, isContainer }) {
  const byPath = new Map();
  const moved = [];
  const unattached = [];
  const slot = (path) => {
    if (!byPath.has(path)) byPath.set(path, { leading: [], trailing: [], dangling: [] });
    return byPath.get(path);
  };
  /* The comment just placed, when it moved: the next one continues its run if it moved from the same path. */
  let run;
  for (const comment of comments) {
    const continued = run;
    run = undefined;
    if (comment.placement === "header") continue;
    if (comment.path === undefined) {
      unattached.push(comment);
      continue;
    }
    if (comment.placement === "inner" && comment.withinText && textKept(comment.path)) continue;
    const target = commentTarget(comment.path, comment.placement === "leading");
    if (target.moved) {
      const inRun = continued?.from === comment.path && continued.to === target.path;
      const text = inRun && !isDirective(comment.text) ? comment.text : movedCommentText(comment.text, comment.path);
      moved.push({ from: comment.path, to: target.path, line: comment.line, text: comment.text });
      const placement = target.path === "" ? "dangling" : "leading";
      slot(target.path)[placement].push({ text, pos: comment.pos, blankBefore: false });
      run = { from: comment.path, to: target.path };
      continue;
    }
    let placement = comment.placement === "inner" ? "leading" : comment.placement;
    if (placement === "dangling" && !isContainer(target.path)) placement = "leading";
    slot(target.path)[placement].push({ text: comment.text, pos: comment.pos, blankBefore: comment.blankBefore });
  }
  for (const entry of byPath.values()) {
    for (const list of Object.values(entry)) list.sort((a, b) => a.pos - b.pos);
    const enders = entry.trailing.filter(endsLine);
    entry.trailing = [...entry.trailing.filter((comment) => !endsLine(comment)), ...enders.slice(0, 1)];
    entry.leading.push(...enders.slice(1));
  }
  return { byPath, moved, unattached };
}

/** A comment's first line, for a message. */
function firstLine(text) {
  return text.split("\n")[0];
}

/**
 * The first comment of the source the converted file does not hold once, or the first it holds beyond them. Each
 * source comment, header included, is matched by `commentKey` as `movedCommentText` writes it from its path, then as
 * written, so a comment that moved and one that kept its text are each found once.
 *
 * @param {import("./read.mjs").ReadComment[]} sourceComments - every comment of the source file
 * @param {import("./read.mjs").ReadComment[]} outputComments - every comment of the converted file
 * @returns {string | undefined} why the converted file is refused, or nothing when it holds each comment once
 */
export function commentNotCarried(sourceComments, outputComments) {
  const remaining = new Map();
  for (const comment of outputComments) {
    const key = commentKey(comment.text);
    remaining.set(key, (remaining.get(key) ?? 0) + 1);
  }
  const take = (key) => {
    const count = remaining.get(key);
    if (!count) return false;
    if (count === 1) remaining.delete(key);
    else remaining.set(key, count - 1);
    return true;
  };
  const unmoved = sourceComments.filter(
    (comment) => comment.path === undefined || !take(commentKey(movedCommentText(comment.text, comment.path))),
  );
  const missing = unmoved.find((comment) => !take(commentKey(comment.text)));
  if (missing) return `the comment at line ${missing.line} is not in the converted file: ${firstLine(missing.text)}`;
  const [extra] = remaining.keys();
  if (extra === undefined) return undefined;
  return `the converted file holds a comment its source does not, or holds one twice: ${firstLine(extra)}`;
}

/**
 * The first comment the printed text gives another node or placement than the placer did, or the first it holds that
 * the placer placed nowhere. The reader attaches a comment by position, so the printer's layout is what a second
 * conversion reads.
 *
 * @param {Map<string, { leading: { text: string }[], trailing: { text: string }[], dangling: { text: string }[] }>}
 *   byPath - the comments each converted node carries, as `placeComments` placed them
 * @param {import("./read.mjs").ReadComment[]} printedComments - the comments of the printer's text
 * @returns {string | undefined} why the converted file is refused, or nothing when each comment is where it was placed
 */
export function commentMisplaced(byPath, printedComments) {
  /* A comment inside a literal whose text the file keeps rides with the literal; the placer does not place it. */
  const printed = printedComments.filter((comment) => comment.placement !== "header" && !comment.withinText);
  const read = new Map();
  for (const comment of printed) {
    const key = `${comment.path}\u0000${comment.placement}`;
    if (!read.has(key)) read.set(key, []);
    read.get(key).push(comment.text);
  }
  const place = (path, placement) => `the ${placement} comment of ${path || "(root)"}`;
  let count = 0;
  for (const [path, slots] of byPath) {
    for (const placement of ["leading", "trailing", "dangling"]) {
      const at = read.get(`${path}\u0000${placement}`) ?? [];
      for (const [index, { text }] of slots[placement].entries()) {
        count++;
        if (at[index] === text) continue;
        const found = printed.find((comment) => comment.text === text);
        const there = found ? place(found.path, found.placement) : "nothing";
        return `the printed file reads ${place(path, placement)} as ${there}: ${firstLine(text)}`;
      }
    }
  }
  if (printed.length !== count) return `the printed file holds ${printed.length} comments, not the ${count} placed`;
  return undefined;
}

/**
 * The first comment formatting gave another node or placement than the printer did. The reader attaches a comment by
 * position, so such a comment would be carried elsewhere by a second conversion.
 *
 * @param {import("./read.mjs").ReadComment[]} printedComments - the comments of the printer's text
 * @param {import("./read.mjs").ReadComment[]} outputComments - the comments of the converted file, header included
 * @returns {string | undefined} why the converted file is refused, or nothing when every comment kept its place
 */
export function commentReplaced(printedComments, outputComments) {
  const formatted = outputComments.filter((comment) => comment.placement !== "header");
  if (formatted.length !== printedComments.length) {
    return `formatting changed the number of comments from ${printedComments.length} to ${formatted.length}`;
  }
  const place = (comment) => `the ${comment.placement} comment of ${comment.path || "(root)"}`;
  for (const [index, printed] of printedComments.entries()) {
    const output = formatted[index];
    if (printed.path === output.path && printed.placement === output.placement) continue;
    return `formatting made ${place(printed)} ${place(output)}: ${firstLine(printed.text)}`;
  }
  return undefined;
}
