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
    ].join("\n");
    const script = `
      import { ESLint } from "eslint";
      const results = await new ESLint().lintText(${JSON.stringify(code)}, {
        filePath: "src/components/display/analysis/analysisUi.tsx",
      });
      console.log(JSON.stringify(results[0].messages.filter(m => m.ruleId === "translation/owned-text").map(m => m.line)));
    `;
    const output = execFileSync("node", ["--input-type=module", "-e", script], { encoding: "utf8" });
    expect(JSON.parse(output)).toEqual([2, 3, 4, 5, 10, 12]);
  });
});
