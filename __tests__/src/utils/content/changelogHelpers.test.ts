/**
 * Changelog helpers back `/updates`, the homepage feed, and the RSS generator.
 *
 * `changelogEntryId` is a public URL contract twice over: it is the `/updates#…`
 * anchor and the RSS GUID, so its output is pinned exactly.
 */

import { describe, expect, it, vi } from "vitest";
import {
  CHANGELOG_ENTRY_TYPES,
  CHANGELOG_TYPE_COLORS,
  CHANGELOG_TYPE_LABELS,
  changelogEntryId,
  formatDisplayDate,
  groupChangelogByDate,
  monthFromChangelogEntryId,
} from "../../../../src/utils/content/changelogHelpers.js";
import type { ChangelogEntry } from "../../../../src/utils/content/changelogHelpers.js";
import { stripFrontmatter } from "../../../../src/utils/content/stripFrontmatter.js";

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
    try {
      vi.stubEnv("TZ", "America/New_York");
      // Parsing the bare ISO date as UTC would render Dec 31 in this timezone.
      expect(formatDisplayDate("2026-01-01")).toBe("Jan 1, 2026");
    } finally {
      vi.unstubAllEnvs();
    }
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

  it("encodes the month that monthFromChangelogEntryId reads back for the archive redirect", () => {
    expect(monthFromChangelogEntryId(changelogEntryId(entry()))).toBe("2026-08");
    expect(monthFromChangelogEntryId("group-maker-nikon")).toBeNull();
    expect(monthFromChangelogEntryId("changelog-2026-08")).toBeNull();
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
});

describe("changelog type maps", () => {
  it("labels and colors every entry type", () => {
    for (const type of CHANGELOG_ENTRY_TYPES) {
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
