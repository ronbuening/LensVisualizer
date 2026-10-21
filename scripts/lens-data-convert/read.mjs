/**
 * Converter reader — the value a lens-data file exports, the syntax behind each node of it, and the file's comments,
 * each attached to the node it annotates (see agent_docs/architecture/optics-engine.md).
 *
 * It builds on `scripts/lens-data-ast.mjs`, which evaluates the file without running it, and spells each node's path
 * through the engine's `childPath`, so a path read here names the node ingest and the V2 view name.
 *
 * Comments inside the exported object are attached by position:
 * - a block comment with nothing but spaces between it and the next entry, on the same line, is that entry's leading
 *   comment, as Prettier reads it;
 * - otherwise one on the line where an entry ends is that entry's trailing comment;
 * - one on a later line, before the next entry, is the next entry's leading comment, blank line or not;
 * - one after the last entry, or in an empty record or list, is the container's dangling comment;
 * - one inside an entry but outside any record or list in it, such as between a member's name and its value, is the
 *   entry's inner comment.
 * Comments before the statement that declares the exported const belong to the file's header, which the converter
 * keeps as it is. A comment inside a spread, whose items are never visited, and a comment anywhere else are left
 * unattached, and the converter refuses the file.
 */

import ts from "typescript";
import { walkLensDataSource } from "../lens-data-ast.mjs";

/**
 * @typedef {object} ReadNode
 * @property {string} path - the node's path, as ingest spells it
 * @property {string | undefined} parent - its parent's path; `undefined` for the exported value
 * @property {ts.Node} syntax - the member's property assignment, the list item, or the exported expression
 * @property {ts.Expression} expression - the value's syntax, inside `as`, `satisfies` and parentheses
 * @property {"record" | "list" | "value"} kind - what the value is
 * @property {unknown} value - the evaluated value
 * @property {string | undefined} text - for a number or string, its source text, when that text names no binding:
 *   no identifier in it but `undefined` and `Infinity`, and not reached through a top-level const
 * @property {boolean} blankBefore - whether a blank line sits just before the node's syntax, after any leading comment
 */

/**
 * @typedef {object} ReadComment
 * @property {string} text - the comment as written, `//` or `/*` included
 * @property {number} pos - where it starts in the file
 * @property {number} end - where it ends
 * @property {number} line - its first line, from 1
 * @property {string | undefined} path - the node it annotates; `undefined` in the header or when unattached
 * @property {"leading" | "trailing" | "dangling" | "inner" | "header" | "unattached"} placement - how it annotates it
 * @property {boolean} blankBefore - whether a blank line precedes it
 * @property {boolean} [withinText] - for an inner comment, whether it sits inside the value's own literal text
 * @property {string} [reason] - for an unattached comment inside the exported object, where it sits
 */

/** Whether a blank line sits in the whitespace just before `position`. */
function blankLineBefore(text, position) {
  let newlines = 0;
  for (let at = position - 1; at >= 0; at--) {
    const character = text[at];
    if (character === "\n") newlines++;
    else if (character !== " " && character !== "\t" && character !== "\r") break;
  }
  return newlines >= 2;
}

/** Whether a line break sits between two positions. */
function lineBreakBetween(text, from, to) {
  return text.slice(from, to).includes("\n");
}

/** Every comment in the file, in order. The scanner reads strings and templates, so text inside them is not one. */
function scanComments(sourceFile) {
  const text = sourceFile.text;
  const scanner = ts.createScanner(ts.ScriptTarget.Latest, false, ts.LanguageVariant.Standard, text);
  const comments = [];
  for (let token = scanner.scan(); token !== ts.SyntaxKind.EndOfFileToken; token = scanner.scan()) {
    if (token !== ts.SyntaxKind.SingleLineCommentTrivia && token !== ts.SyntaxKind.MultiLineCommentTrivia) continue;
    const pos = scanner.getTokenStart();
    const end = scanner.getTokenEnd();
    comments.push({
      text: text.slice(pos, end),
      pos,
      end,
      line: sourceFile.getLineAndCharacterOfPosition(pos).line + 1,
      path: undefined,
      placement: "unattached",
      blankBefore: blankLineBefore(text, pos),
    });
  }
  return comments;
}

/** Whether an expression names nothing but literals: its source text then evaluates to its value. */
function namesNoBinding(expression) {
  let named = false;
  const visit = (node) => {
    if (ts.isIdentifier(node) && node.text !== "undefined" && node.text !== "Infinity") named = true;
    else ts.forEachChild(node, visit);
  };
  visit(expression);
  return named === false;
}

/** The expression inside `satisfies`, `as`, type assertions, `!` and parentheses. */
function unwrap(node) {
  let inner = node;
  while (
    ts.isParenthesizedExpression(inner) ||
    ts.isSatisfiesExpression(inner) ||
    ts.isAsExpression(inner) ||
    ts.isTypeAssertionExpression(inner) ||
    ts.isNonNullExpression(inner)
  ) {
    inner = inner.expression;
  }
  return inner;
}

/** The value at `keys` below `root`. */
function valueAt(root, keys) {
  let value = root;
  for (const key of keys) value = value?.[key];
  return value;
}

/**
 * Read a lens-data file for conversion.
 *
 * @param {string} content - the file's text
 * @param {string} fileName - its name, for messages
 * @param {{ childPath: (base: string, key: string | number) => string }} paths - the engine's path spelling
 * @returns {{ sourceFile: ts.SourceFile, value: unknown, exported: ts.ExportAssignment | undefined,
 *   declaration: ts.VariableStatement | undefined, nodes: Map<string, ReadNode>, comments: ReadComment[] }} the
 *   file's syntax tree and value, its export and the statement declaring the exported const, each node by path, and
 *   every comment in the file, attached where it can be
 * @throws when the export uses a form outside the lens-data literal subset
 */
export function readLensDataFile(content, fileName, paths) {
  /** @type {Map<string, ReadNode>} */
  const nodes = new Map();
  const pathOfKeys = new Map();
  const syntaxPaths = new Map();
  const read = walkLensDataSource(content, fileName, (keys, syntax, expression, bound) => {
    const parentKeys = keys.slice(0, -1).join("\u0000");
    const parent = keys.length === 0 ? undefined : pathOfKeys.get(parentKeys);
    const path = keys.length === 0 ? "" : paths.childPath(parent, keys[keys.length - 1]);
    pathOfKeys.set(keys.join("\u0000"), path);
    const inner = unwrap(expression);
    const kind = ts.isObjectLiteralExpression(inner) ? "record" : ts.isArrayLiteralExpression(inner) ? "list" : "value";
    nodes.set(path, {
      path,
      parent,
      syntax,
      expression: inner,
      kind,
      keys,
      bound,
      text: undefined,
      blankBefore: false,
    });
    syntaxPaths.set(syntax, path);
  });
  const { sourceFile, value, exported, declaration } = read;
  const text = sourceFile.text;
  for (const node of nodes.values()) {
    node.value = valueAt(value, node.keys);
    delete node.keys;
    if (node.kind === "value" && !node.bound && (typeof node.value === "number" || typeof node.value === "string")) {
      if (namesNoBinding(node.expression)) {
        node.text = text.slice(node.expression.getStart(sourceFile), node.expression.end);
      }
    }
    delete node.bound;
  }

  const comments = scanComments(sourceFile);
  const headerEnd = declaration ? declaration.getStart(sourceFile) : 0;
  const containers = [...nodes.values()].filter((node) => node.kind !== "value");
  for (const comment of comments) {
    if (comment.end <= headerEnd) {
      comment.placement = "header";
      continue;
    }
    /* The innermost record or list whose braces hold the comment. */
    let container;
    for (const candidate of containers) {
      const open = candidate.expression.getStart(sourceFile);
      if (comment.pos <= open || comment.end > candidate.expression.end) continue;
      if (!container || open > container.expression.getStart(sourceFile)) container = candidate;
    }
    if (!container) continue;
    const children = ts.isObjectLiteralExpression(container.expression)
      ? container.expression.properties
      : container.expression.elements;
    const inside = children.find((child) => comment.pos >= child.getStart(sourceFile) && comment.end <= child.end);
    if (inside && (ts.isSpreadElement(inside) || ts.isSpreadAssignment(inside))) {
      comment.reason = "inside a spread";
      continue;
    }
    if (inside) {
      comment.path = syntaxPaths.get(inside) ?? container.path;
      comment.placement = syntaxPaths.has(inside) ? "inner" : "dangling";
      const expression = nodes.get(comment.path)?.expression;
      comment.withinText =
        Boolean(expression) && comment.pos >= expression.getStart(sourceFile) && comment.end <= expression.end;
      continue;
    }
    const previous = children.filter((child) => child.end <= comment.pos).at(-1);
    const next = children.find((child) => child.getStart(sourceFile) >= comment.end);
    const leadsNext =
      comment.text.startsWith("/*") && next && /^[ \t]*$/.test(text.slice(comment.end, next.getStart(sourceFile)));
    if (leadsNext && syntaxPaths.has(next)) {
      comment.path = syntaxPaths.get(next);
      comment.placement = "leading";
    } else if (previous && !lineBreakBetween(text, previous.end, comment.pos) && syntaxPaths.has(previous)) {
      comment.path = syntaxPaths.get(previous);
      comment.placement = "trailing";
    } else if (next && syntaxPaths.has(next)) {
      comment.path = syntaxPaths.get(next);
      comment.placement = "leading";
    } else {
      comment.path = container.path;
      comment.placement = "dangling";
    }
  }

  for (const node of nodes.values()) {
    if (node.parent !== undefined) node.blankBefore = blankLineBefore(text, node.syntax.getStart(sourceFile));
  }
  return { sourceFile, value, exported, declaration, nodes, comments };
}
