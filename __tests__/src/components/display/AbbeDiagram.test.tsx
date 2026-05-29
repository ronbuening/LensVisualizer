// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import AbbeDiagram from "../../../../src/components/display/AbbeDiagram.js";
import themes from "../../../../src/utils/theme/themes.js";
import type { RuntimeLens } from "../../../../src/types/optics.js";
import { buildSimplePositiveElementLens } from "../../optics/testLensFixtures.js";

function lensWithGlassMap(): RuntimeLens {
  const lens = buildSimplePositiveElementLens("test-abbe-diagram");
  return {
    ...lens,
    data: { ...lens.data, name: "Glass map fixture" },
    elements: [
      {
        id: 1,
        name: "L1",
        label: "L1",
        type: "positive",
        glass: "Dense flint",
        nd: 1.9,
        vd: 20,
      },
      {
        id: 2,
        name: "L2",
        label: "L2",
        type: "negative",
        glass: "Missing Vd",
        nd: 1.7,
      },
    ],
  } as RuntimeLens;
}

afterEach(() => cleanup());

describe("AbbeDiagram", () => {
  it("renders glass-map points, omitted-glass footnote, and a toggle callback", () => {
    const onToggleGlassType = vi.fn();
    render(
      <AbbeDiagram L={lensWithGlassMap()} t={themes.dark} showGlassType={true} onToggleGlassType={onToggleGlassType} />,
    );

    expect(screen.getByLabelText("Abbe diagram glass map")).toBeTruthy();
    expect(screen.getByText("Glass map fixture")).toBeTruthy();
    expect(screen.getByText("Dense flint")).toBeTruthy();
    expect(screen.getByText("1 element omitted (no Vd data)")).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "GLASS TYPE" }));
    expect(onToggleGlassType).toHaveBeenCalledTimes(1);
  });

  it("omits glass labels when disabled and flips labels near the right edge", () => {
    render(<AbbeDiagram L={lensWithGlassMap()} t={themes.dark} showGlassType={false} onToggleGlassType={vi.fn()} />);
    expect(screen.queryByText("Dense flint")).toBeNull();

    cleanup();
    render(<AbbeDiagram L={lensWithGlassMap()} t={themes.dark} showGlassType={true} onToggleGlassType={vi.fn()} />);
    expect(screen.getByText("Dense flint").getAttribute("text-anchor")).toBe("end");
  });
});
