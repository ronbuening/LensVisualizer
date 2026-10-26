import { describe, expect, it } from "vitest";
import { balancedColumns, widthClass } from "../../../../src/components/hooks/useBalancedColumns.js";

describe("balancedColumns", () => {
  it("keeps every item on one row when they all fit", () => {
    expect(balancedColumns(7, 912, 112, 9)).toBe(7);
  });

  it("splits wrapped rows as evenly as the width allows", () => {
    expect(balancedColumns(8, 912, 150, 12)).toBe(4); // 4 + 4, not 5 + 3
    expect(balancedColumns(7, 720, 112, 9)).toBe(4); // 4 + 3, not 6 + 1
    expect(balancedColumns(8, 342, 150, 12)).toBe(2);
  });

  it("handles one item, no items and very narrow widths", () => {
    expect(balancedColumns(1, 912, 150, 12)).toBe(1);
    expect(balancedColumns(0, 912, 150, 12)).toBe(1);
    expect(balancedColumns(5, 40, 150, 12)).toBe(1);
  });

  it("classes container widths as phone, tablet or desktop", () => {
    expect(widthClass(342)).toBe("phone");
    expect(widthClass(720)).toBe("tablet");
    expect(widthClass(912)).toBe("desktop");
  });
});
