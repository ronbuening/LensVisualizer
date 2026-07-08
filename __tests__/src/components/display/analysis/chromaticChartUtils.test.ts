import { describe, expect, it } from "vitest";
import { formatSpreadUmFromMm } from "../../../../../src/components/display/analysis/chromaticChartUtils.js";

describe("formatSpreadUmFromMm", () => {
  it("formats millimeter spreads as micrometer readouts with a zero floor", () => {
    expect(formatSpreadUmFromMm(0)).toBe("< 0.1 µm");
    expect(formatSpreadUmFromMm(0.00005)).toBe("0.1 µm");
    expect(formatSpreadUmFromMm(0.0005)).toBe("0.5 µm");
    expect(formatSpreadUmFromMm(0.005)).toBe("5 µm");
    expect(formatSpreadUmFromMm(-0.005)).toBe("5 µm");
  });
});
