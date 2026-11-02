/** Validate MTF benchmark options before expensive engine work begins. */

import { execFileSync } from "node:child_process";
import { describe, expect, it } from "vitest";

/**
 * Run the real script with arguments it must refuse.
 *
 * @param args - arguments after the script name
 * @returns what the script wrote to stderr, or "accepted" when it ran
 */
function refusal(args: readonly string[]): string {
  try {
    execFileSync(
      "node",
      ["--import", "./scripts/ts-js-specifier-hook-register.mjs", "scripts/benchmark-mtf.mjs", ...args],
      { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] },
    );
    return "accepted";
  } catch (error) {
    return String((error as { stderr?: string }).stderr);
  }
}

describe("benchmark-mtf command line", () => {
  it("treats an argument it does not know as an error", () => {
    expect(refusal(["--iteration=5"])).toContain("Unknown MTF benchmark argument: --iteration=5");
    expect(refusal(["--base", "HEAD"])).toContain("Unknown MTF benchmark argument: --base");
    expect(refusal(["--verbose"])).toContain("Unknown MTF benchmark argument: --verbose");
    expect(refusal(["d49857ae"])).toContain("Unknown MTF benchmark argument: d49857ae");
    /* A switch takes no value. */
    expect(refusal(["--finite=1"])).toContain("Unknown MTF benchmark argument: --finite=1");
  });

  it("needs a value for each flag that takes one, after the flag or after an equals sign", () => {
    expect(refusal(["--iterations"])).toContain("--iterations needs a value.");
  });

  it("checks the sample counts and the options it had before", () => {
    expect(refusal(["--iterations=0"])).toContain("--iterations must be an integer >= 1.");
    expect(refusal(["--warmups", "-1"])).toContain("--warmups must be an integer >= 0.");
    expect(refusal(["--method=wave"])).toContain("Unknown --method=wave");
    expect(refusal(["--spectrum", "white"])).toContain("Unknown --spectrum=white");
    expect(refusal(["--fields=1"])).toContain("--fields must be 2-101");
  });
});
