/**
 * Public URL contract: `#group-…` fragment ids.
 *
 * Author and patent pages deep-link to these anchors, so the values below are
 * pinned as exact strings. A change here relocates already-published links —
 * if one of these fails, the fix is usually to restore the id, not the pin.
 */

import { describe, expect, it } from "vitest";
import {
  focalSectionAnchorId,
  focalSubGroupAnchorId,
  formatGroupAnchorId,
  makerGroupAnchorId,
  mountGroupAnchorId,
  patentPartyGroupAnchorId,
  slugifyGroupKey,
  yearGroupAnchorId,
} from "../../../../src/pages/lensIndex/groupAnchors.js";

describe("slugifyGroupKey", () => {
  it.each([
    ["Wide angle", "wide-angle"],
    ["  Asahi/Pentax  ", "asahi-pentax"],
    ["24–35 mm", "24-35-mm"],
    ["1970s", "1970s"],
    // Non-ASCII collapses to a separator rather than transliterating.
    ["Günter Klemt", "g-nter-klemt"],
    ["!!!", ""],
  ])("slugifies %j to %j", (input, expected) => {
    expect(slugifyGroupKey(input)).toBe(expected);
  });
});

describe("group anchor ids", () => {
  it("derives id-stable anchors straight from taxonomy keys", () => {
    expect(makerGroupAnchorId("carl-zeiss-jena")).toBe("group-maker-carl-zeiss-jena");
    expect(mountGroupAnchorId("nikon-z")).toBe("group-mount-nikon-z");
    expect(formatGroupAnchorId("135-full-frame")).toBe("group-format-135-full-frame");
    expect(yearGroupAnchorId("1970s")).toBe("group-year-1970s");
    expect(focalSectionAnchorId("Wide angle")).toBe("group-focal-wide-angle");
    expect(focalSubGroupAnchorId("Wide angle", "24–35 mm")).toBe("group-focal-wide-angle-24-35-mm");
  });

  it("pins hashed patent-party anchors, including the FNV-1a suffix", () => {
    expect(patentPartyGroupAnchorId("author", "Günter Klemt")).toBe("group-inventor-g-nter-klemt-rpuixk");
    expect(patentPartyGroupAnchorId("assignee", "Canon Inc.")).toBe("group-assignee-canon-inc-1chmmri");
    expect(patentPartyGroupAnchorId("assignee", "Asahi Kogaku / Pentax")).toBe(
      "group-assignee-asahi-kogaku-pentax-h35uay",
    );
    expect(patentPartyGroupAnchorId("assignee", "No named assignee or applicant")).toBe(
      "group-assignee-no-named-assignee-or-applicant-q5kall",
    );
  });

  it("falls back to a readable stem when the key slugifies to nothing", () => {
    expect(patentPartyGroupAnchorId("author", "")).toBe("group-inventor-party-ztntfp");
  });

  it("keeps the hash suffix distinguishing keys that slugify identically", () => {
    // Both readable stems are "g-nter-klemt"; only the hash separates them.
    const a = patentPartyGroupAnchorId("author", "Günter Klemt");
    const b = patentPartyGroupAnchorId("author", "Gunter Klemt");
    expect(a).not.toBe(b);
    expect(a.startsWith("group-inventor-g-nter-klemt-")).toBe(true);
  });

  it("keeps roles in separate anchor namespaces", () => {
    expect(patentPartyGroupAnchorId("author", "Canon Inc.")).not.toBe(
      patentPartyGroupAnchorId("assignee", "Canon Inc."),
    );
  });
});
