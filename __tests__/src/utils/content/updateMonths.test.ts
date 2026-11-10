/**
 * Month helpers shared by the build (one /updates/YYYY-MM route per month) and the /updates pages, so both always
 * agree on which archive pages exist and what each lists.
 */

import { describe, expect, it, vi } from "vitest";
import {
  buildUpdateMonths,
  formatUpdateMonth,
  isUpdateMonth,
  updateMonthOf,
} from "../../../../src/utils/content/updateMonths.js";

describe("buildUpdateMonths", () => {
  it("unions changelog and lens months newest first, counting each", () => {
    expect(
      buildUpdateMonths(["2026-11-02", "2026-11-01", "2026-09-30"], ["2026-11-05", "2026-10-15", "2026-10-01"]),
    ).toEqual([
      { month: "2026-11", changelogCount: 2, lensCount: 1 },
      { month: "2026-10", changelogCount: 0, lensCount: 2 },
      { month: "2026-09", changelogCount: 1, lensCount: 0 },
    ]);
  });

  it("returns no months for no activity", () => {
    expect(buildUpdateMonths([], [])).toEqual([]);
  });
});

describe("month parsing and labels", () => {
  it.each([
    ["2026-01", true],
    ["2026-12", true],
    ["2026-00", false],
    ["2026-13", false],
    ["2026-1", false],
    ["2026-11-01", false],
    [undefined, false],
  ])("isUpdateMonth(%s) is %s", (value, expected) => {
    expect(isUpdateMonth(value)).toBe(expected);
  });

  it("takes the month of an ISO date", () => {
    expect(updateMonthOf("2026-11-09")).toBe("2026-11");
  });

  it("labels a month without shifting it in negative-offset timezones", () => {
    try {
      vi.stubEnv("TZ", "America/New_York");
      expect(formatUpdateMonth("2026-11")).toBe("November 2026");
      expect(formatUpdateMonth("2026-01")).toBe("January 2026");
    } finally {
      vi.unstubAllEnvs();
    }
  });
});
