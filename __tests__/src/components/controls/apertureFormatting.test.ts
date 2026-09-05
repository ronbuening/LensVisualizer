import { describe, expect, it } from "vitest";
import { formatWorkingApertureNote } from "../../../../src/components/controls/apertureFormatting.js";

describe("working aperture diagnostics", () => {
  it("distinguishes successful stop tracing from physical rim clipping", () => {
    expect(formatWorkingApertureNote({ status: "ok", clippedSurfaceIndices: [] })).toBe("");
    expect(formatWorkingApertureNote({ status: "ok", clippedSurfaceIndices: [5] })).toBe(
      "Marginal ray clipped by modeled surface 6.",
    );
    expect(formatWorkingApertureNote({ status: "ok", clippedSurfaceIndices: [5, 8] })).toBe(
      "Marginal ray clipped by modeled surfaces 6, 9.",
    );
  });
  it.each([
    ["failed", "marginal ray could not be traced"],
    ["unsupported", "this optical configuration"],
    ["degenerate", "source or outgoing cone is undefined"],
  ] as const)("explains %s without claiming a clipping measurement", (status, reason) => {
    expect(formatWorkingApertureNote({ status, clippedSurfaceIndices: null })).toContain(reason);
  });
  it("suppresses centered diagnostics under active movement", () => {
    expect(formatWorkingApertureNote({ status: "ok", clippedSurfaceIndices: [5] }, true)).toBe(
      "Working aperture unavailable for active movement.",
    );
    expect(formatWorkingApertureNote(null)).toBe("Working aperture unavailable.");
  });
});
