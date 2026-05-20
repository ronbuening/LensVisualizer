// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import buildLens from "../../../../src/optics/buildLens.js";
import LENS_DEFAULTS from "../../../../src/lens-data/defaults.js";
import LensGroupMovementOverlay from "../../../../src/components/display/LensGroupMovementOverlay.js";
import NikonAfpDx70300Raw from "../../../../src/lens-data/nikon/NikonAFPDX70300mmf4563G.data.js";
import NikonZ100400Raw from "../../../../src/lens-data/nikon/NikonNikkorZ100400f4556.data.js";
import themes from "../../../../src/utils/themes.js";
import type { LensData } from "../../../../src/types/optics.js";

function build(raw: object) {
  return buildLens({ ...LENS_DEFAULTS, ...raw } as LensData);
}

describe("LensGroupMovementOverlay", () => {
  afterEach(() => cleanup());

  it("shows disabled radio modes that are not applicable", () => {
    render(
      <LensGroupMovementOverlay
        L={build(NikonAfpDx70300Raw)}
        t={themes.dark}
        focusT={0}
        zoomT={0.5}
        mode="focus"
        onModeChange={vi.fn()}
      />,
    );

    expect((screen.getByRole("radio", { name: /focus/i }) as HTMLInputElement).disabled).toBe(true);
    expect((screen.getByRole("radio", { name: /zoom/i }) as HTMLInputElement).disabled).toBe(false);
    expect((screen.getByRole("radio", { name: /combined/i }) as HTMLInputElement).disabled).toBe(true);
    expect(screen.getByText("Lens Group Movement")).toBeTruthy();
    expect(screen.getByText("FOCUS PLANE")).toBeTruthy();
  });

  it("enables all three modes for a zoom with modeled focus travel", () => {
    render(
      <LensGroupMovementOverlay
        L={build(NikonZ100400Raw)}
        t={themes.dark}
        focusT={0.5}
        zoomT={1}
        mode="combined"
        onModeChange={vi.fn()}
      />,
    );

    expect((screen.getByRole("radio", { name: /focus/i }) as HTMLInputElement).disabled).toBe(false);
    expect((screen.getByRole("radio", { name: /zoom/i }) as HTMLInputElement).disabled).toBe(false);
    expect((screen.getByRole("radio", { name: /combined/i }) as HTMLInputElement).disabled).toBe(false);
    expect(screen.getByText("MAX TRAVEL")).toBeTruthy();
  });
});
