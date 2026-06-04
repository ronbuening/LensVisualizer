// @vitest-environment jsdom

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, screen } from "@testing-library/react";
import { Route, Routes } from "react-router";
import MountPage from "../../../../src/pages/MountPage.js";
import { clearBrowserState, installMatchMediaMock, renderWithRouter } from "../../../testUtils.js";

vi.mock("../../../../src/components/SEOHead.js", () => ({
  default: function SEOHead() {
    return null;
  },
}));

describe("MountPage mount SVG diagrams", () => {
  beforeEach(() => {
    clearBrowserState();
    installMatchMediaMock(false);
  });

  afterEach(() => {
    cleanup();
  });

  it("renders the mount diagram set for mounts with SVG records", () => {
    renderWithRouter(
      <Routes>
        <Route path="/mounts/:mountId" element={<MountPage />} />
      </Routes>,
      { initialEntries: ["/mounts/nikon-f"] },
    );

    expect(screen.getByText("Mount Reference Geometry")).toBeTruthy();
    expect(screen.getAllByRole("img")).toHaveLength(3);
    expect(screen.getByText("Camera Side")).toBeTruthy();
    expect(screen.getByText("Lens Side")).toBeTruthy();
    expect(screen.getByText("Axial Register")).toBeTruthy();
  });
});
