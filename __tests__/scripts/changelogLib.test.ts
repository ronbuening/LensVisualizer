/**
 * The changelog compiler is the only gate between entry files and the public /updates anchors and RSS GUIDs, so each
 * file-format rule and the ordering rule are pinned here on small synthetic folders.
 */

import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { CHANGELOG_SUBJECT_MAX_LENGTH, collectChangelog } from "../../scripts/changelog-lib.mjs";

const tempRoots: string[] = [];

afterEach(() => {
  while (tempRoots.length > 0) rmSync(tempRoots.pop()!, { recursive: true, force: true });
});

/** Write `files` (relative path → raw text) into a fresh changelog folder and return its path. */
function changelogDir(files: Record<string, string>): string {
  const root = mkdtempSync(join(tmpdir(), "changelog-lib-"));
  tempRoots.push(root);
  for (const [relativePath, text] of Object.entries(files)) {
    const filePath = join(root, relativePath);
    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, text, "utf-8");
  }
  return root;
}

const collect = (files: Record<string, string>) => collectChangelog({ changelogDir: changelogDir(files) });

describe("collectChangelog", () => {
  it("reads date and type from the path and the summary from the single line of text", () => {
    expect(collect({ "2026-11/2026-11-08-fix-sto-label.txt": "Fixed the STO label\n" })).toEqual([
      { date: "2026-11-08", type: "fix", summary: "Fixed the STO label" },
    ]);
  });

  it("orders newest date first, then by file name within a day", () => {
    const entries = collect({
      "2026-10/2026-10-31-lens-canon.txt": "October lens\n",
      "2026-11/2026-11-02-lens-pentax.txt": "Lens\n",
      "2026-11/2026-11-02-fix-readouts.txt": "Fix\n",
      "2026-11/2026-11-02-article-story.txt": "Article\n",
      "2026-11/2026-11-01-feature-tab.txt": "Feature\n",
    });
    expect(entries.map((entry) => entry.summary)).toEqual(["Article", "Fix", "Lens", "Feature", "October lens"]);
  });

  it("tolerates a byte-order mark, CRLF endings and a missing final newline, and skips hidden files", () => {
    const entries = collect({
      "2026-11/2026-11-01-fix-bom.txt": "\uFEFFFixed BOM\r\n",
      "2026-11/2026-11-01-fix-no-newline.txt": "Fixed no newline",
      "2026-11/.DS_Store": "binary",
      ".gitkeep": "",
    });
    expect(entries.map((entry) => entry.summary)).toEqual(["Fixed BOM", "Fixed no newline"]);
  });

  it.each([
    ["a file outside a month folder", "2026-11-01-fix-loose.txt", /path must be/],
    ["a nested folder", "2026/11/2026-11-01-fix-nested.txt", /path must be/],
    ["a non-text extension", "2026-11/2026-11-01-fix-json.json", /path must be/],
    ["a missing subject", "2026-11/2026-11-01-fix.txt", /path must be/],
    ["an impossible date", "2026-02/2026-02-30-fix-leap.txt", /not a calendar date/],
    ["the wrong month folder", "2026-10/2026-11-01-fix-moved.txt", /belongs in the 2026-11\/ folder/],
    ["an unknown type", "2026-11/2026-11-01-bugfix-label.txt", /unknown type "bugfix"/],
    ["an uppercase subject", "2026-11/2026-11-01-fix-STO-label.txt", /lowercase kebab-case/],
    ["a doubled hyphen", "2026-11/2026-11-01-fix-sto--label.txt", /lowercase kebab-case/],
    [
      "an overlong subject",
      `2026-11/2026-11-01-fix-${"a".repeat(CHANGELOG_SUBJECT_MAX_LENGTH + 1)}.txt`,
      /keep it to 48/,
    ],
  ])("rejects %s", (_label, relativePath, reason) => {
    expect(() => collect({ [relativePath]: "Summary\n" })).toThrow(reason);
  });

  it.each([
    ["empty text", "\n", /text is empty/],
    ["two lines", "First line\nSecond line\n", /single line/],
    ["surrounding whitespace", " Padded summary\n", /leading or trailing whitespace/],
  ])("rejects %s", (_label, text, reason) => {
    expect(() => collect({ "2026-11/2026-11-01-fix-text.txt": text })).toThrow(reason);
  });

  it("rejects two files whose date, type and text would share one public anchor", () => {
    expect(() =>
      collect({
        "2026-11/2026-11-01-fix-first-name.txt": "Fixed the same thing\n",
        "2026-11/2026-11-01-fix-second-name.txt": "Fixed the same thing\n",
      }),
    ).toThrow(/2026-11-01-fix-second-name\.txt: same date, type and text as 2026-11\/2026-11-01-fix-first-name\.txt/);
  });

  it("reports every invalid file in one error", () => {
    expect(() =>
      collect({
        "2026-11/2026-11-01-bugfix-one.txt": "One\n",
        "2026-11/2026-11-01-fix-two.txt": "\n",
        "2026-11/2026-11-01-fix-three.txt": "Valid\n",
      }),
    ).toThrow(/Found 2 invalid changelog entries[\s\S]*bugfix-one[\s\S]*fix-two/);
  });

  it("fails when the changelog folder is missing", () => {
    expect(() => collectChangelog({ changelogDir: join(tmpdir(), "changelog-lib-missing-folder") })).toThrow(
      /Changelog directory not found/,
    );
  });
});
