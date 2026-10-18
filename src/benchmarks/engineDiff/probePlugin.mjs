/**
 * Temporary-bundle instrumentation for the C2 sensitivity capture. No engine file is written.
 * The AST identifies solver returns, retaining their original source text inside a harness
 * wrapper. Unknown solver layouts fail the bundle instead of silently losing probe coverage.
 */

import ts from "typescript";

/**
 * Instrument the solver sites used by the Stage 6 anchor (optics-rewrite/a6, after the field split).
 * @param {string} source - untransformed engine TypeScript
 * @param {string} id - absolute module path
 * @param {string} helper - absolute path to the copied harness's propagation module
 * @returns {string | null} transformed source, or null for an unrelated module
 */
export function instrumentSolvers(source, id, helper) {
  const scalar = id.endsWith("/optics/math/rootSolve.ts");
  const chief = id.endsWith("/optics/field/chiefRaySolve.ts");
  const imageHeight = id.endsWith("/optics/field/imageHeight.ts");
  if (!scalar && !chief && !imageHeight) return null;
  const file = ts.createSourceFile(id, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const edits = [];
  const seen = new Set();
  const replace = (node, text) => edits.push({ start: node.getStart(file), end: node.end, text });
  const text = (node) => node.getText(file);
  const probe = (root, evaluate, tolerance, image = false) =>
    `__engineDiffProbeRoot(${root}, ${evaluate}, ${tolerance}, ${image})`;
  for (const fn of file.statements) {
    if (!ts.isFunctionDeclaration(fn) || !fn.body || !fn.name) continue;
    const name = fn.name.text;
    if (scalar && name === "solveScalarRoot") {
      replace(fn.body, `{ return __engineDiffProbeScalar(() => ${text(fn.body)}, evaluate, options); }`);
      seen.add(name);
    }
    const ordinaryChief = chief && ["computeChiefRaySolve", "solveChiefRayFromSeed"].includes(name);
    const vectorChief = chief && name === "solveChiefRayBoundingSphere";
    const inversion = imageHeight && name === "invertChiefRayImageHeights";
    const legacyInversion = imageHeight && name === "solveFieldAngleForImageHeight";
    if (!(ordinaryChief || vectorChief || inversion || legacyInversion)) continue;
    const stopDeclaration = fn.body.statements.find(
      (statement) =>
        ts.isVariableStatement(statement) &&
        statement.declarationList.declarations.some((declaration) => declaration.name.getText(file) === "heightAtStop"),
    );
    const visit = (node) => {
      // The shared refinement returns the scalar launch, or yEP before the vector caller projects it.
      if (
        (ordinaryChief || vectorChief) &&
        ts.isCallExpression(node) &&
        text(node.expression) === "refineChiefRayBracket"
      ) {
        replace(
          node,
          `(() => { const result = ${text(node)}; return result.status === "converged" ? { ...result, yLaunch: ${probe("result.yLaunch", "heightAtStop", "CHIEF_RAY_RESIDUAL_TOLERANCE")} } : result; })()`,
        );
        seen.add(name);
        return;
      }
      if (ts.isObjectLiteralExpression(node)) {
        const members = new Map(
          node.properties.filter(ts.isPropertyAssignment).map((p) => [text(p.name), p.initializer]),
        );
        const status = members.get("status");
        if (status && text(status) === '"converged"' && stopDeclaration && node.pos > stopDeclaration.end) {
          const launch = node.properties.find((p) => p.name && text(p.name) === "yLaunch");
          if (ordinaryChief && launch) {
            const root = ts.isShorthandPropertyAssignment(launch) ? "yLaunch" : text(launch.initializer);
            replace(launch, `yLaunch: ${probe(root, "heightAtStop", "CHIEF_RAY_RESIDUAL_TOLERANCE")}`);
            seen.add(name);
            return;
          }
          if (vectorChief && members.get("vectorLaunch")) {
            const call = members.get("vectorLaunch");
            if (!ts.isCallExpression(call) || text(call.expression) !== "launchAtYEP")
              throw new Error(`engine-diff: unknown vector launch in ${id}`);
            const root = probe(text(call.arguments[0]), "heightAtStop", "CHIEF_RAY_RESIDUAL_TOLERANCE");
            replace(
              node,
              `(() => { const result = ${text(node)}; const root = ${root}; return { ...result, yLaunch: projectYLaunchToZ0(root), vectorLaunch: launchAtYEP(root) }; })()`,
            );
            seen.add(name);
            return;
          }
        }
        if (
          inversion &&
          status &&
          text(status) === '"reached"' &&
          members.get("fieldAngleDeg")?.getText(file) === "angle"
        ) {
          const property = node.properties.find((p) => p.name && text(p.name) === "fieldAngleDeg");
          replace(
            property,
            `fieldAngleDeg: ${probe("angle", "(angle) => lookup.imageHeightAt(angle) + Math.abs(target)", "1e-4", true)}`,
          );
          seen.add(name);
          return;
        }
      }
      if (
        legacyInversion &&
        ts.isReturnStatement(node) &&
        node.expression &&
        ["mid", "(lo + hi) / 2"].includes(text(node.expression))
      ) {
        replace(
          node.expression,
          probe(
            text(node.expression),
            "(angle) => chiefRayImageHeight(state, { fieldAngleDeg: angle, zPos, geometry: geom, prepared }) - target",
            "1e-4",
            true,
          ),
        );
        seen.add(name);
        return;
      }
      ts.forEachChild(node, visit);
    };
    visit(fn.body);
    if (inversion || legacyInversion) {
      edits.push({
        start: fn.body.getStart(file) + 1,
        end: fn.body.getStart(file) + 1,
        text: " return __engineDiffInversion(() => {",
      });
      edits.push({ start: fn.body.end - 1, end: fn.body.end - 1, text: "}); " });
    }
  }
  const expected = scalar
    ? ["solveScalarRoot"]
    : chief
      ? ["computeChiefRaySolve", "solveChiefRayFromSeed", "solveChiefRayBoundingSphere"]
      : ["invertChiefRayImageHeights", "solveFieldAngleForImageHeight"];
  if (expected.some((name) => !seen.has(name)))
    throw new Error(
      `engine-diff: update solver probes for ${id}: ${expected.filter((name) => !seen.has(name)).join(", ")}`,
    );
  let result = source;
  for (const edit of edits.sort((a, b) => b.start - a.start))
    result = result.slice(0, edit.start) + edit.text + result.slice(edit.end);
  return `import { probeRoot as __engineDiffProbeRoot, probeScalarSolve as __engineDiffProbeScalar, probeInversion as __engineDiffInversion } from ${JSON.stringify(helper)};\n${result}`;
}

/**
 * Vite pre-transform used only by the differential driver.
 * @param {string} root - worktree being bundled
 * @returns {import("vite").Plugin} capture-only solver probes
 */
export function solverProbePlugin(root) {
  return {
    name: "engine-diff-solver-probes",
    enforce: "pre",
    transform(source, id) {
      return instrumentSolvers(source, id, `${root}/src/benchmarks/engineDiff/propagation.ts`);
    },
  };
}
