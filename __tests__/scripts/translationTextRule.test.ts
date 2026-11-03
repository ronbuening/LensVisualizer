import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { ESLint, type Linter } from "eslint";
import tseslint from "typescript-eslint";
import { afterAll, describe, expect, it } from "vitest";
import rule from "../../scripts/translation-text-rule.mjs";

// A throwaway TypeScript project keeps the typed rule fast: linting a path inside the repo would load its whole program.
const dir = mkdtempSync(join(tmpdir(), "owned-text-rule-"));
writeFileSync(
  join(dir, "tsconfig.json"),
  JSON.stringify({ compilerOptions: { jsx: "react-jsx", strict: true, noEmit: true, types: [] }, include: ["*.tsx"] }),
);
afterAll(() => rmSync(dir, { recursive: true, force: true }));

async function lint(code: string, parserOptions: Linter.ParserOptions) {
  const file = join(dir, "fixture.tsx");
  writeFileSync(file, code);
  const eslint = new ESLint({
    cwd: dir,
    overrideConfigFile: true,
    overrideConfig: [
      {
        files: ["**/*.tsx"],
        languageOptions: { parser: tseslint.parser, parserOptions: { ecmaFeatures: { jsx: true }, ...parserOptions } },
        plugins: { translation: { rules: { "owned-text": rule } } },
        rules: { "translation/owned-text": "error" },
      },
    ],
  });
  const [result] = await eslint.lintFiles([file]);
  return result.messages.map((message) => [message.line, message.messageId]);
}

describe("translation text lint guard", () => {
  it("rejects detached text risks while accepting owned strings, rich elements and SVG", async () => {
    const code = [
      "const value: number = Math.random(); const show = value > 0.5;",
      "const mixed = <span>A: {value}</span>;",
      "const sibling = <div>{value}<strong>mm</strong></div>;",
      "const optional = <p>{show && <b>extra</b>} label</p>;",
      "const fragment = <>{value}</>;",
      "const safe = <span>{`A: ${value}`}</span>;",
      "const owned = <p><span>{value}</span>{show && <b>extra</b>}</p>;",
      "const svg = <svg><text>A: {value}</text></svg>;",
      'const space = <p><span>{value}</span>{" "}{show && <b>extra</b>}</p>;',
      "const foreign = <svg><foreignObject><div>A: {value}</div></foreignObject></svg>;",
      "declare const Link: (props: { to: string; children: unknown }) => null;",
      'const routerLink = <Link to="/">{value}<span>suffix</span></Link>;',
      "const names: readonly string[] = []; const list = <p>{names}<b>x</b></p>;",
      "const mapped = <p>{names.map((name) => name)}</p>;",
      'const joined = <p>{names.join(", ")}</p>;',
      "const items = <ul>{names.map((name) => <li key={name}>{name}</li>)}</ul>;",
    ].join("\n");
    expect(await lint(code, { project: "./tsconfig.json", tsconfigRootDir: dir })).toEqual([
      [2, "mixed"],
      [3, "mixed"],
      [4, "mixed"],
      [5, "mixed"],
      [10, "mixed"],
      [12, "mixed"],
      [13, "list"],
      [14, "list"],
    ]);
  });

  it("reports a missing type checker instead of silently passing", async () => {
    expect(await lint("export const view = <span>A: {1}</span>;", {})).toEqual([[1, "untyped"]]);
  });
});
