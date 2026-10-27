// @vitest-environment jsdom
import { afterEach, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import BuilderErrorBoundary from "../../../../src/components/lensBuilder/BuilderErrorBoundary.js";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});
it("contains editor/diagram failures with generic text and an always-available reset", () => {
  vi.spyOn(console, "error").mockImplementation(() => {});
  const reset = vi.fn();
  function Broken(): never {
    throw new Error("Private draft identifier");
  }
  render(
    <BuilderErrorBoundary onReset={reset}>
      <Broken />
    </BuilderErrorBoundary>,
  );
  expect(screen.getByRole("alert").textContent).not.toContain("Private draft");
  fireEvent.click(screen.getByRole("button", { name: "Reset draft" }));
  expect(reset).toHaveBeenCalledOnce();
});
