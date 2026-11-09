// @vitest-environment jsdom

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import ApertureStop from "../../../../src/components/diagram/ApertureStop.js";
import type { Theme } from "../../../../src/types/theme.js";

const identity = (v: number) => v;
const mockTheme = { stop: "#ff0", stopLabel: "#ccc" } as unknown as Theme;

describe("ApertureStop", () => {
  it("renders two blade lines and the STO label", () => {
    const { container } = render(
      <svg>
        <ApertureStop
          sx={identity}
          sy={identity}
          stopZ={50}
          stopPhysSD={10}
          stopHousingSD={12}
          currentPhysStopSD={8}
          bladeStubFrac={0.1}
          lyStoPad={2}
          t={mockTheme}
        />
      </svg>,
    );
    const lines = container.querySelectorAll("line");
    expect(lines.length).toBe(2);
    // Both blades use the stop color
    expect(lines[0].getAttribute("stroke")).toBe("#ff0");
    expect(lines[1].getAttribute("stroke")).toBe("#ff0");

    const text = container.querySelector("text");
    expect(text).toBeTruthy();
    expect(text!.textContent).toBe("STO");
    expect(text!.getAttribute("fill")).toBe("#ccc");
  });

  it("positions blades at the stop z-coordinate", () => {
    const sx = (z: number) => z * 10;
    const { container } = render(
      <svg>
        <ApertureStop
          sx={sx}
          sy={identity}
          stopZ={5}
          stopPhysSD={10}
          stopHousingSD={12}
          currentPhysStopSD={8}
          bladeStubFrac={0.1}
          lyStoPad={2}
          t={mockTheme}
        />
      </svg>,
    );
    const lines = container.querySelectorAll("line");
    // sx(5) = 50
    expect(lines[0].getAttribute("x1")).toBe("50");
    expect(lines[0].getAttribute("x2")).toBe("50");
  });

  it("uses bladeStubFrac to compute inner blade position", () => {
    const { container } = render(
      <svg>
        <ApertureStop
          sx={identity}
          sy={identity}
          stopZ={0}
          stopPhysSD={10}
          stopHousingSD={12}
          currentPhysStopSD={10}
          bladeStubFrac={0.5}
          lyStoPad={2}
          t={mockTheme}
        />
      </svg>,
    );
    // bladeInner = min(10, 10 * (1 - 0.5)) = min(10, 5) = 5
    const lines = container.querySelectorAll("line");
    // Top blade: y2 = sy(-bladeInner) = -5
    expect(lines[0].getAttribute("y2")).toBe("-5");
    // Bottom blade: y2 = sy(bladeInner) = 5
    expect(lines[1].getAttribute("y2")).toBe("5");
  });

  it("renders a central blocked segment for annular stops", () => {
    const { container } = render(
      <svg>
        <ApertureStop
          sx={identity}
          sy={identity}
          stopZ={0}
          stopPhysSD={10}
          stopHousingSD={12}
          currentPhysStopSD={8}
          innerBlockedSD={3}
          bladeStubFrac={0.1}
          lyStoPad={2}
          t={mockTheme}
        />
      </svg>,
    );

    const lines = container.querySelectorAll("line");
    expect(lines.length).toBe(3);
    expect(lines[2].getAttribute("y1")).toBe("-3");
    expect(lines[2].getAttribute("y2")).toBe("3");
  });

  it("omits invalid central blockers and clamps oversized blockers to the current aperture", () => {
    const { container, rerender } = render(
      <svg>
        <ApertureStop
          sx={identity}
          sy={identity}
          stopZ={0}
          stopPhysSD={10}
          stopHousingSD={12}
          currentPhysStopSD={8}
          innerBlockedSD={Number.NaN}
          bladeStubFrac={0.1}
          lyStoPad={2}
          t={mockTheme}
        />
      </svg>,
    );

    expect(container.querySelectorAll("line").length).toBe(2);

    rerender(
      <svg>
        <ApertureStop
          sx={identity}
          sy={identity}
          stopZ={0}
          stopPhysSD={10}
          stopHousingSD={12}
          currentPhysStopSD={8}
          innerBlockedSD={0}
          bladeStubFrac={0.1}
          lyStoPad={2}
          t={mockTheme}
        />
      </svg>,
    );

    expect(container.querySelectorAll("line").length).toBe(2);

    rerender(
      <svg>
        <ApertureStop
          sx={identity}
          sy={identity}
          stopZ={0}
          stopPhysSD={10}
          stopHousingSD={12}
          currentPhysStopSD={8}
          innerBlockedSD={30}
          bladeStubFrac={0.1}
          lyStoPad={2}
          t={mockTheme}
        />
      </svg>,
    );

    const lines = container.querySelectorAll("line");
    expect(lines.length).toBe(3);
    expect(lines[2].getAttribute("y1")).toBe("-8");
    expect(lines[2].getAttribute("y2")).toBe("8");
  });

  it("lifts the label clear of a rim land beside the stop and leaves it in place otherwise", () => {
    const labelY = (sideLands?: { z: number; outerSD: number }[]) => {
      const { container, unmount } = render(
        <svg>
          <ApertureStop
            sx={identity}
            sy={identity}
            stopZ={0}
            stopPhysSD={10}
            stopHousingSD={12}
            currentPhysStopSD={8}
            sideLands={sideLands}
            bladeStubFrac={0.1}
            lyStoPad={2}
            t={mockTheme}
          />
        </svg>,
      );
      const y = Number(container.querySelector("text")!.getAttribute("y"));
      unmount();
      return y;
    };
    // Default baseline: sy(-(12 + 2)).
    expect(labelY()).toBe(-14);
    // A land 8 px from the stop that stands to 20 mm puts the baseline 4 px above its corner.
    expect(labelY([{ z: -8, outerSD: 20 }])).toBe(-24);
    // A land wider of the stop than the label, or one whose top stays below the baseline, leaves it alone.
    expect(labelY([{ z: 20, outerSD: 20 }])).toBe(-14);
    expect(labelY([{ z: 5, outerSD: 9 }])).toBe(-14);
  });
});
