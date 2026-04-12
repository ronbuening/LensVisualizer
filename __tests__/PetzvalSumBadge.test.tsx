// @vitest-environment jsdom

import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import PetzvalSumBadge from "../src/components/diagram/PetzvalSumBadge.js";
import type { RuntimeLens } from "../src/types/optics.js";
import type { Theme } from "../src/types/theme.js";

const mockTheme = {
  panelBg: "#111",
  panelBorder: "#333",
  muted: "#888",
  value: "#fff",
} as unknown as Theme;

function makeLens(petzvalSum: number) {
  return { petzvalSum } as unknown as RuntimeLens;
}

describe("PetzvalSumBadge", () => {
  it("renders PETZVAL label", () => {
    render(
      <svg>
        <PetzvalSumBadge L={makeLens(0.005)} t={mockTheme} />
      </svg>,
    );
    expect(screen.getByText("PETZVAL")).toBeTruthy();
  });

  it("displays positive petzval sum with + sign", () => {
    const { container } = render(
      <svg>
        <PetzvalSumBadge L={makeLens(0.0123)} t={mockTheme} />
      </svg>,
    );
    const texts = container.querySelectorAll("text");
    // Second text element is the sum value
    const sumText = texts[1]?.textContent || "";
    expect(sumText).toContain("+0.0123");
    expect(sumText).toContain("mm");
  });

  it("displays negative petzval sum with minus sign", () => {
    const { container } = render(
      <svg>
        <PetzvalSumBadge L={makeLens(-0.0045)} t={mockTheme} />
      </svg>,
    );
    const texts = container.querySelectorAll("text");
    const sumText = texts[1]?.textContent || "";
    expect(sumText).toContain("0.0045");
    expect(sumText).toContain("\u2212"); // minus sign
  });

  it("displays the Petzval field radius", () => {
    const { container } = render(
      <svg>
        <PetzvalSumBadge L={makeLens(0.005)} t={mockTheme} />
      </svg>,
    );
    // Third text element is the radius
    const texts = container.querySelectorAll("text");
    expect(texts.length).toBe(3);
    const radiusText = texts[2]?.textContent || "";
    // 1/0.005 = 200mm radius
    expect(radiusText).toContain("200");
  });

  it("calls onClick when clicked", () => {
    const onClick = vi.fn();
    const { container } = render(
      <svg>
        <PetzvalSumBadge L={makeLens(0.005)} t={mockTheme} onClick={onClick} />
      </svg>,
    );
    fireEvent.click(container.querySelector("g")!);
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("has pointer cursor when onClick is provided", () => {
    const { container } = render(
      <svg>
        <PetzvalSumBadge L={makeLens(0.005)} t={mockTheme} onClick={() => {}} />
      </svg>,
    );
    expect(container.querySelector("g")!.style.cursor).toBe("pointer");
  });
});
