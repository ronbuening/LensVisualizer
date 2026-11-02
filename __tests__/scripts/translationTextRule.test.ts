import { execFileSync } from "node:child_process";
import { describe, expect, it } from "vitest";

describe("translation text lint guard", () => {
  it("rejects detached text risks while accepting owned strings, rich elements and SVG", () => {
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
      'import { Link } from "react-router";',
      'const routerLink = <Link to="/">{value}<span>suffix</span></Link>;',
      "const names: readonly string[] = []; const list = <p>{names}<b>x</b></p>;",
      "const mapped = <p>{names.map((name) => name)}</p>;",
      'const joined = <p>{names.join(", ")}</p>;',
      "const items = <ul>{names.map((name) => <li key={name}>{name}</li>)}</ul>;",
    ].join("\n");
    const script = `
      import { ESLint } from "eslint";
      const results = await new ESLint().lintText(${JSON.stringify(code)}, {
        filePath: "src/components/display/analysis/analysisUi.tsx",
      });
      console.log(JSON.stringify(results[0].messages.filter(m => m.ruleId === "translation/owned-text").map(m => [m.line, m.messageId])));
    `;
    const output = execFileSync("node", ["--input-type=module", "-e", script], { encoding: "utf8" });
    expect(JSON.parse(output)).toEqual([
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

  it("reports a missing type checker instead of silently passing", () => {
    const script = `
      import { ESLint } from "eslint";
      import tseslint from "typescript-eslint";
      import rule from "./scripts/translation-text-rule.mjs";
      const eslint = new ESLint({
        overrideConfigFile: true,
        overrideConfig: [{
          files: ["**/*.tsx"],
          languageOptions: { parser: tseslint.parser, parserOptions: { ecmaFeatures: { jsx: true } } },
          plugins: { translation: { rules: { "owned-text": rule } } },
          rules: { "translation/owned-text": "error" },
        }],
      });
      const [result] = await eslint.lintText("export const view = <span>A: {1}</span>;", { filePath: "untyped.tsx" });
      console.log(JSON.stringify(result.messages.map((m) => m.messageId)));
    `;
    const output = execFileSync("node", ["--input-type=module", "-e", script], { encoding: "utf8" });
    expect(JSON.parse(output)).toEqual(["untyped"]);
  });
});
