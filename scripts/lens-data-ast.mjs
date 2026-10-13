/**
 * Lens-data AST reader — evaluates a lens or teleconverter file's default export from its source, never running it.
 *
 * The source is read with the TypeScript compiler API, and the literal forms the catalog uses are evaluated
 * (OPTICS_ENGINE_REWRITE_SPEC.md, Ingest, conversion and comments):
 * - object and array literals, and spreads of them, which no catalog file has but a hand-written one may;
 * - numbers, with a leading sign, and `+ - * /` between numbers, which the catalog uses for a few derived values;
 * - strings and templates without substitutions, and `+` between strings, which long notes use;
 * - `true`, `false`, `null`, `undefined` and `Infinity`;
 * - `satisfies`, `as` (`as const` included), type assertions, `!` and parentheses;
 * - identifiers bound by a top-level `const` in the same file.
 *
 * Any other form is an error naming the file, line and form, so a file outside the subset is reported rather than
 * misread. The metadata scripts read identity fields through `readLensIdentity`, from a file of either version.
 */

import ts from "typescript";

/**
 * Parse a lens-data source file.
 *
 * @param {string} content - the file's text
 * @param {string} [fileName] - its name, for messages
 * @returns {ts.SourceFile} the syntax tree
 */
export function parseLensDataSource(content, fileName = "lens-data.ts") {
  return ts.createSourceFile(fileName, content, ts.ScriptTarget.Latest, false, ts.ScriptKind.TS);
}

/** The initializers of the file's top-level `const` bindings, by name. */
function topLevelConstants(sourceFile) {
  const constants = new Map();
  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    if ((statement.declarationList.flags & ts.NodeFlags.Const) === 0) continue;
    for (const declaration of statement.declarationList.declarations) {
      if (ts.isIdentifier(declaration.name) && declaration.initializer) {
        constants.set(declaration.name.text, declaration.initializer);
      }
    }
  }
  return constants;
}

/** The expression a file exports by default, or `undefined` when it has none. */
function defaultExportExpression(sourceFile) {
  for (const statement of sourceFile.statements) {
    if (ts.isExportAssignment(statement) && !statement.isExportEquals) return statement.expression;
  }
  return undefined;
}

/**
 * Evaluate a literal expression of a lens-data file.
 *
 * @param {ts.Expression} node - the expression
 * @param {ts.SourceFile} sourceFile - the file holding it
 * @param {Map<string, ts.Expression>} constants - the file's top-level `const` initializers
 * @param {Set<string>} resolving - constants being evaluated, to refuse a cycle
 * @returns {unknown} the value
 */
function evaluate(node, sourceFile, constants, resolving) {
  const fail = (what) => {
    const { line } = sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile));
    throw new Error(`${sourceFile.fileName}:${line + 1}: ${what}`);
  };
  const recurse = (child) => evaluate(child, sourceFile, constants, resolving);

  switch (node.kind) {
    case ts.SyntaxKind.NumericLiteral:
      return Number(node.text);
    case ts.SyntaxKind.StringLiteral:
    case ts.SyntaxKind.NoSubstitutionTemplateLiteral:
      return node.text;
    case ts.SyntaxKind.TrueKeyword:
      return true;
    case ts.SyntaxKind.FalseKeyword:
      return false;
    case ts.SyntaxKind.NullKeyword:
      return null;
    case ts.SyntaxKind.PrefixUnaryExpression: {
      const operand = recurse(node.operand);
      if (typeof operand !== "number") fail("a sign on something other than a number");
      if (node.operator === ts.SyntaxKind.MinusToken) return -operand;
      if (node.operator === ts.SyntaxKind.PlusToken) return operand;
      return fail(`the operator ${ts.tokenToString(node.operator)}`);
    }
    case ts.SyntaxKind.BinaryExpression: {
      /* Evaluated as JavaScript does, left operand first, so a computed value is the number the module holds. */
      const left = recurse(node.left);
      const right = recurse(node.right);
      const operator = node.operatorToken.kind;
      if (operator === ts.SyntaxKind.PlusToken && typeof left === "string" && typeof right === "string") {
        return left + right;
      }
      if (typeof left !== "number" || typeof right !== "number")
        return fail("arithmetic on something other than numbers");
      if (operator === ts.SyntaxKind.PlusToken) return left + right;
      if (operator === ts.SyntaxKind.MinusToken) return left - right;
      if (operator === ts.SyntaxKind.AsteriskToken) return left * right;
      if (operator === ts.SyntaxKind.SlashToken) return left / right;
      return fail(`the operator ${ts.tokenToString(operator)}`);
    }
    case ts.SyntaxKind.ParenthesizedExpression:
    case ts.SyntaxKind.SatisfiesExpression:
    case ts.SyntaxKind.AsExpression:
    case ts.SyntaxKind.TypeAssertionExpression:
    case ts.SyntaxKind.NonNullExpression:
      return recurse(node.expression);
    case ts.SyntaxKind.Identifier: {
      const name = node.text;
      if (name === "undefined") return undefined;
      if (name === "Infinity") return Infinity;
      const initializer = constants.get(name);
      if (!initializer) return fail(`"${name}" is not a top-level const of this file`);
      if (resolving.has(name)) return fail(`"${name}" refers to itself`);
      resolving.add(name);
      try {
        return recurse(initializer);
      } finally {
        resolving.delete(name);
      }
    }
    case ts.SyntaxKind.ArrayLiteralExpression: {
      const out = [];
      for (const element of node.elements) {
        if (ts.isSpreadElement(element)) {
          const spread = recurse(element.expression);
          if (!Array.isArray(spread)) fail("a spread of something other than an array");
          out.push(...spread);
        } else if (ts.isOmittedExpression(element)) {
          fail("an array hole");
        } else {
          out.push(recurse(element));
        }
      }
      return out;
    }
    case ts.SyntaxKind.ObjectLiteralExpression: {
      const out = {};
      for (const property of node.properties) {
        if (ts.isPropertyAssignment(property)) {
          const { name } = property;
          if (!ts.isIdentifier(name) && !ts.isStringLiteral(name) && !ts.isNumericLiteral(name)) {
            fail("a computed property name");
          }
          Object.defineProperty(out, name.text, {
            value: recurse(property.initializer),
            enumerable: true,
            writable: true,
            configurable: true,
          });
        } else if (ts.isShorthandPropertyAssignment(property)) {
          out[property.name.text] = recurse(property.name);
        } else if (ts.isSpreadAssignment(property)) {
          const spread = recurse(property.expression);
          if (spread === null || typeof spread !== "object" || Array.isArray(spread)) {
            fail("a spread of something other than an object");
          }
          Object.assign(out, spread);
        } else {
          fail(`a ${ts.SyntaxKind[property.kind]} in an object literal`);
        }
      }
      return out;
    }
    default:
      return fail(`a ${ts.SyntaxKind[node.kind]}, which a lens-data file does not use`);
  }
}

/**
 * Evaluate the default export of a lens-data source file without running it.
 *
 * @param {string} content - the file's text
 * @param {string} [fileName] - its name, for messages
 * @returns {unknown} the exported value, or `undefined` when the file exports nothing by default
 * @throws when the export uses a form outside the lens-data literal subset
 */
export function evaluateLensDataSource(content, fileName = "lens-data.ts") {
  const sourceFile = parseLensDataSource(content, fileName);
  const expression = defaultExportExpression(sourceFile);
  if (!expression) return undefined;
  return evaluate(expression, sourceFile, topLevelConstants(sourceFile), new Set());
}

/**
 * The identity fields of a lens or teleconverter file of either version. A V2 file keeps its mounts and format in
 * `catalog`; the other fields sit where V1 has them.
 *
 * @param {unknown} data - an evaluated default export
 * @returns {{ key: string | null, publishedAt: string | null, name: string | null, maker: string | null | undefined,
 *   lensMountIds: string[], imageFormatId: string | null, visible: boolean }} the fields; `maker` is `null` when the
 *   file records an unconfirmed maker and `undefined` when it leaves the field out
 */
export function readLensIdentity(data) {
  const file = data !== null && typeof data === "object" ? data : {};
  const catalog = file.schema === 2 ? (file.catalog ?? {}) : file;
  const text = (value) => (typeof value === "string" ? value : null);
  return {
    key: text(file.key),
    publishedAt: text(file.publishedAt),
    name: text(file.name),
    maker: file.maker === null ? null : (text(file.maker) ?? undefined),
    lensMountIds: Array.isArray(catalog.lensMounts) ? catalog.lensMounts.filter((id) => typeof id === "string") : [],
    imageFormatId: text(catalog.imageFormat),
    visible: file.visible !== false,
  };
}
