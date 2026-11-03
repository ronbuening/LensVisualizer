import ts from "typescript";

const primitiveFlags =
  ts.TypeFlags.StringLike |
  ts.TypeFlags.NumberLike |
  ts.TypeFlags.BigIntLike |
  ts.TypeFlags.BooleanLike |
  ts.TypeFlags.Null |
  ts.TypeFlags.Undefined |
  ts.TypeFlags.Void |
  ts.TypeFlags.Never;

function primitive(type) {
  return type.isUnion() ? type.types.every(primitive) : (type.flags & primitiveFlags) !== 0;
}

/** An array or tuple of primitives renders one Text node per item, so it can never be a single owned string. */
function primitiveList(checker, type) {
  if (type.isUnion()) return type.types.some((part) => primitiveList(checker, part));
  if (!checker.isArrayType(type) && !checker.isTupleType(type)) return false;
  const items = checker.getTypeArguments(type);
  return items.length > 0 && items.every(primitive);
}

function containsJsx(node) {
  if (ts.isJsxElement(node) || ts.isJsxSelfClosingElement(node) || ts.isJsxFragment(node)) return true;
  return ts.forEachChild(node, containsJsx) === true;
}

/** A narrow guard for owned HTML text runs, not a proof of translator compatibility.
 * Opaque ReactNode props, third-party rendering, SVG and hydration need separate review/tests.
 */
export default {
  meta: {
    type: "problem",
    schema: [],
    messages: {
      mixed:
        "Keep a changing text run in its own HTML element with one primitive child. Join text with textRun(...) or a template string; wrap text next to rich content in a span. See agent_docs/code_conventions.md.",
      list: 'A list of strings or numbers renders one Text node per item. Join it into one string (e.g. items.join(", ")) or render each item in its own element. See agent_docs/code_conventions.md.',
      untyped:
        "translation/owned-text needs type information; enable parserOptions.projectService for this file so the rule can tell text from rich content.",
    },
  },
  create(context) {
    const services = context.sourceCode.parserServices;
    if (!services?.program || !services.esTreeNodeToTSNodeMap)
      return { Program: (node) => context.report({ node, messageId: "untyped" }) };
    const checker = services.program.getTypeChecker();
    return {
      Program(node) {
        const source = services.esTreeNodeToTSNodeMap.get(node);
        function visit(current, inSvg = false) {
          if (ts.isJsxElement(current) || ts.isJsxFragment(current)) {
            const fragment = ts.isJsxFragment(current);
            const tag = fragment ? "" : current.openingElement.tagName.getText(source);
            if (tag === "foreignObject") inSvg = false;
            else if (["svg", "text", "tspan"].includes(tag)) inSvg = true;
            if (
              !inSvg &&
              (fragment || /^[a-z]/.test(tag) || ["Link", "NavLink"].includes(tag)) &&
              !["script", "style"].includes(tag)
            ) {
              const children = current.children.filter((child) =>
                ts.isJsxText(child)
                  ? child.text.trim()
                  : !(
                      ts.isJsxExpression(child) &&
                      (!child.expression || (ts.isStringLiteralLike(child.expression) && !child.expression.text.trim()))
                    ),
              );
              for (const child of children) {
                if (
                  ts.isJsxExpression(child) &&
                  child.expression &&
                  !containsJsx(child.expression) &&
                  primitiveList(checker, checker.getTypeAtLocation(child.expression))
                ) {
                  const position = source.getLineAndCharacterOfPosition(child.getStart(source));
                  context.report({ loc: { line: position.line + 1, column: position.character }, messageId: "list" });
                }
              }
              const text = children.filter(
                (child) =>
                  ts.isJsxText(child) ||
                  (ts.isJsxExpression(child) &&
                    child.expression &&
                    !containsJsx(child.expression) &&
                    primitive(checker.getTypeAtLocation(child.expression))),
              );
              const dynamic = text.some(
                (child) =>
                  ts.isJsxExpression(child) &&
                  !ts.isStringLiteralLike(child.expression) &&
                  !ts.isNumericLiteral(child.expression),
              );
              const conditionalRich = children.some((child) => ts.isJsxExpression(child) && !text.includes(child));
              if (text.length && (fragment || children.length > 1) && (fragment || dynamic || conditionalRich)) {
                const position = source.getLineAndCharacterOfPosition(text[0].getStart(source));
                context.report({ loc: { line: position.line + 1, column: position.character }, messageId: "mixed" });
              }
            }
          }
          ts.forEachChild(current, (child) => visit(child, inSvg));
        }
        visit(source);
      },
    };
  },
};
