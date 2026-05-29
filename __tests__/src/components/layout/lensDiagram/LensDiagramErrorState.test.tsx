// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import LensDiagramErrorState from "../../../../../src/components/layout/lensDiagram/LensDiagramErrorState.js";

afterEach(() => cleanup());

describe("LensDiagramErrorState", () => {
  it("normalizes non-Error values for the shared error display", () => {
    render(<LensDiagramErrorState error="bad lens" lensKey="lens-a" component="Panel" title="Panel failed" />);

    expect(screen.getByText("Panel failed")).toBeTruthy();
    expect(screen.getAllByText(/bad lens/).length).toBeGreaterThan(0);
    expect(screen.getByText(/Panel/)).toBeTruthy();
    expect(screen.getByRole("link", { name: "Report Issue on GitHub" }).getAttribute("href")).toContain("lens-a");
  });
});
