/**
 * Converter comment mapping — carries each comment of a source file to the node it annotates in the converted file
 * (OPTICS_ENGINE_REWRITE_SPEC.md, Ingest, conversion and comments).
 *
 * Where a comment goes is the engine's answer (`V2SourceMap.commentTarget`), composed from where ingest read each
 * value and where the V2 view wrote it; this module never infers a node's place from its path or its leaves. A
 * comment keeps its placement when its node has a counterpart: leading above it, trailing after it, dangling after
 * the last entry of its record or list, and an inner one (between a member's name and its value) above it, unless it
 * sits inside a literal whose text the converted file keeps, which carries it. A comment whose node has no
 * counterpart moves to the nearest node written from one of its ancestors, or to the home of a container the
 * converted file dissolves; there it leads that node (or ends the file's object, when that is all it finds), and its
 * text opens with "(moved from <source path>)" unless it already does. Header comments stay in the kept header.
 */

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
 * A comment as the comparison of emitted comments sees it: a line comment without trailing space, a block comment
 * without the indentation Prettier gives its lines.
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
 * @param {(authoredPath: string) => { path: string, moved: boolean }} source.commentTarget - the engine's answer
 * @param {(authoredPath: string) => boolean} source.textKept - whether the converted file keeps the literal text of
 *   the value at an authored path, so a comment inside that literal rides along
 * @param {(v2Path: string) => boolean} source.isContainer - whether the converted file writes a record or list there
 * @returns {{ byPath: Map<string, { leading: object[], trailing: object[], dangling: object[] }>, moved: object[],
 *   emitted: string[], unattached: import("./read.mjs").ReadComment[] }} the comments each converted node carries,
 *   the moved ones for the report, the text of every comment the converted object must hold once each, and any
 *   comment that has no place in it
 */
export function placeComments({ comments, commentTarget, textKept, isContainer }) {
  const byPath = new Map();
  const moved = [];
  const emitted = [];
  const unattached = [];
  const slot = (path) => {
    if (!byPath.has(path)) byPath.set(path, { leading: [], trailing: [], dangling: [] });
    return byPath.get(path);
  };
  for (const comment of comments) {
    if (comment.placement === "header") continue;
    if (comment.path === undefined) {
      unattached.push(comment);
      continue;
    }
    if (comment.placement === "inner" && comment.withinText && textKept(comment.path)) {
      emitted.push(comment.text);
      continue;
    }
    const target = commentTarget(comment.path);
    if (target.moved) {
      const text = movedCommentText(comment.text, comment.path);
      emitted.push(text);
      moved.push({ from: comment.path, to: target.path, line: comment.line, text: comment.text });
      const placement = target.path === "" ? "dangling" : "leading";
      slot(target.path)[placement].push({ text, pos: comment.pos, blankBefore: false });
      continue;
    }
    emitted.push(comment.text);
    let placement = comment.placement === "inner" ? "leading" : comment.placement;
    if (placement === "dangling" && !isContainer(target.path)) placement = "leading";
    slot(target.path)[placement].push({ text: comment.text, pos: comment.pos, blankBefore: comment.blankBefore });
  }
  for (const entry of byPath.values()) {
    for (const list of Object.values(entry)) list.sort((a, b) => a.pos - b.pos);
  }
  return { byPath, moved, emitted, unattached };
}
