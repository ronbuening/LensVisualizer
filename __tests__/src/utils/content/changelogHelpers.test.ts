/**
 * Changelog helpers back `/updates`, the homepage feed, and the RSS generator.
 *
 * `changelogEntryId` is a public URL contract twice over: it is the `/updates#…`
 * anchor and the RSS GUID, so its output is pinned exactly.
 */

import { describe, expect, it } from "vitest";
import {
  CHANGELOG_TYPE_COLORS,
  CHANGELOG_TYPE_LABELS,
  changelogEntryId,
  formatDisplayDate,
  groupChangelogByDate,
} from "../../../../src/utils/content/changelogHelpers.js";
import { CHANGELOG } from "../../../../src/utils/content/changelogData.js";
import type { ChangelogEntry } from "../../../../src/utils/content/changelogData.js";
import { stripFrontmatter } from "../../../../src/utils/content/homepageContent.js";

const entry = (over: Partial<ChangelogEntry> = {}): ChangelogEntry =>
  ({ date: "2026-08-04", type: "feature", summary: "Example summary", ...over }) as ChangelogEntry;

describe("formatDisplayDate", () => {
  it.each([
    ["2026-08-04", "Aug 4, 2026"],
    ["2026-01-01", "Jan 1, 2026"],
    ["2026-12-31", "Dec 31, 2026"],
  ])("formats %s as %s", (iso, expected) => {
    expect(formatDisplayDate(iso)).toBe(expected);
  });

  it("does not shift the calendar day in negative-offset timezones", () => {
    // The helper appends T00:00:00 so the date is parsed as local, not UTC;
    // parsing "2026-01-01" as UTC would render Dec 31 west of Greenwich.
    expect(formatDisplayDate("2026-01-01")).toContain("Jan 1");
  });
});

describe("changelogEntryId", () => {
  it("pins the anchor and RSS GUID format", () => {
    expect(changelogEntryId(entry())).toBe("changelog-2026-08-04-feature-1hncxzp");
  });

  it("ignores surrounding whitespace in the identity fields", () => {
    expect(changelogEntryId(entry({ date: " 2026-08-04 ", type: " feature " as ChangelogEntry["type"] }))).toBe(
      changelogEntryId(entry()),
    );
  });

  it("changes when the summary changes", () => {
    // Documented consequence: editing a shipped summary moves its public anchor
    // and RSS GUID. See agent_docs/changelog.md.
    expect(changelogEntryId(entry({ summary: "Different summary" }))).not.toBe(changelogEntryId(entry()));
  });

  it("is unique across every shipped changelog entry", () => {
    const ids = CHANGELOG.map(changelogEntryId);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("groupChangelogByDate", () => {
  it("preserves first-seen date order and within-date entry order", () => {
    const grouped = groupChangelogByDate([
      entry({ date: "2026-08-04", summary: "first" }),
      entry({ date: "2026-08-01", summary: "second" }),
      entry({ date: "2026-08-04", summary: "third" }),
    ]);

    expect([...grouped.keys()]).toEqual(["2026-08-04", "2026-08-01"]);
    expect(grouped.get("2026-08-04")?.map((e) => e.summary)).toEqual(["first", "third"]);
    expect(grouped.get("2026-08-01")?.map((e) => e.summary)).toEqual(["second"]);
  });

  it("returns an empty map for no entries", () => {
    expect(groupChangelogByDate([]).size).toBe(0);
  });

  it("accounts for every shipped entry exactly once", () => {
    const grouped = groupChangelogByDate(CHANGELOG);
    const total = [...grouped.values()].reduce((sum, bucket) => sum + bucket.length, 0);
    expect(total).toBe(CHANGELOG.length);
  });
});

describe("changelog type maps", () => {
  it("labels and colors every type used by the shipped changelog", () => {
    for (const type of new Set(CHANGELOG.map((e) => e.type))) {
      expect(CHANGELOG_TYPE_LABELS[type], type).toBeTruthy();
      expect(CHANGELOG_TYPE_COLORS[type], type).toBeTruthy();
    }
  });
});

describe("stripFrontmatter", () => {
  it("removes a leading frontmatter block", () => {
    expect(stripFrontmatter("---\nslug: a\ntitle: B\n---\n\nBody text\n")).toBe("Body text\n");
  });

  it("leaves content without frontmatter untouched", () => {
    expect(stripFrontmatter("# Heading\n\nBody\n")).toBe("# Heading\n\nBody\n");
  });

  it("only strips the first block, not a later horizontal rule", () => {
    const raw = "---\nslug: a\ntitle: B\n---\n\nIntro\n\n---\n\nAfter the rule\n";
    const stripped = stripFrontmatter(raw);
    expect(stripped.startsWith("Intro")).toBe(true);
    expect(stripped).toContain("---");
  });

  it("handles CRLF line endings", () => {
    expect(stripFrontmatter("---\r\nslug: a\r\n---\r\nBody\r\n")).toBe("Body\r\n");
  });
});
