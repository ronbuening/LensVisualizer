// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import type { ComponentProps } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import ViewerChrome from "../../../../../src/components/layout/lensViewer/ViewerChrome.js";
import { SET_PATENT_POSITIONS, SET_RAY_TOGGLE } from "../../../../../src/utils/state/lensReducer.js";
import themes from "../../../../../src/utils/theme/themes.js";

vi.mock("../../../../../src/utils/featureFlags.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../../../../src/utils/featureFlags.js")>();
  return { ...actual, ENABLE_CARDINAL_ELEMENTS: true };
});

vi.mock("../../../../../src/components/layout/BreadcrumbBar.js", () => ({
  default: () => <div data-testid="breadcrumb" />,
}));

vi.mock("../../../../../src/components/layout/TopBar.js", () => ({
  default: () => <div data-testid="topbar" />,
}));

vi.mock("../../../../../src/components/layout/ViewToggleBar.js", () => ({
  default: ({ options, activeValue, onChange }: Record<string, any>) => (
    <div data-testid="view-toggle">
      {options.map((option: { label: string; val: string }) => (
        <button key={option.val} onClick={() => onChange(option.val)} data-active={activeValue === option.val}>
          {option.label}
        </button>
      ))}
    </div>
  ),
}));

afterEach(() => cleanup());

function renderChrome(dispatch = vi.fn(), overrides: Partial<ComponentProps<typeof ViewerChrome>> = {}) {
  return {
    dispatch,
    ...render(
      <ViewerChrome
        theme={themes.dark}
        isWide={false}
        comparing={false}
        lensKeyA="nokton-50f1"
        lensKeyB="apo-lanthar-50f2"
        showCompareBtn={true}
        onSwitchLensA={vi.fn()}
        onSwitchLensB={vi.fn()}
        onSwapLenses={vi.fn()}
        onToggleCompare={vi.fn()}
        onOpenAboutSite={vi.fn()}
        onOpenAboutAuthor={vi.fn()}
        onOpenOpticsPrimer={vi.fn()}
        onOpenAberrationsPrimer={vi.fn()}
        catalogKeys={["nokton-50f1", "apo-lanthar-50f2"]}
        catalogNames={{ "nokton-50f1": "Nokton", "apo-lanthar-50f2": "APO-Lanthar" }}
        configurationOptions={[]}
        activeConfigurationKey="nokton-50f1"
        onConfigurationChange={vi.fn()}
        teleconverterOptions={[]}
        activeTeleconverterKey={null}
        teleconverterOptionsB={[]}
        activeTeleconverterKeyB={null}
        onTeleconverterChange={vi.fn()}
        controlsBarProps={{
          theme: themes.dark,
          showOnAxis: true,
          showOffAxis: "off",
          rayDensity: "normal",
          rayTracksF: false,
          showChromatic: false,
          chromR: true,
          chromG: true,
          chromB: true,
          chromV: false,
          showPupils: false,
          showCardinals: false,
          showCardinalDimensions: false,
          scaleMode: "independent",
          dispatch,
        }}
        mobileView="diagram"
        onMobileViewChange={vi.fn()}
        showDesktopToggle={false}
        desktopViewOptions={[]}
        effectiveDesktopView="both"
        onDesktopViewChange={vi.fn()}
        {...overrides}
      />,
    ),
  };
}

describe("ViewerChrome mobile cardinal control paging", () => {
  it("uses active arrow styling and hides existing controls on the cardinal page", () => {
    const { dispatch } = renderChrome();
    const left = screen.getByRole("button", { name: "Show ray controls" });
    const right = screen.getByRole("button", { name: "Show cardinal controls" });

    expect(left.style.background).toContain("0, 200, 220");
    expect(right.style.background).toContain("255, 255, 255");
    expect(screen.getByRole("button", { name: "ON" })).toBeTruthy();

    fireEvent.click(right);

    expect(left.style.background).toContain("255, 255, 255");
    expect(right.style.background).toContain("0, 200, 220");
    expect(screen.queryByRole("button", { name: "ON" })).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "CARD" }));
    expect(dispatch).toHaveBeenCalledWith({ type: SET_RAY_TOGGLE, field: "showCardinals", value: true });
  });
});

describe("ViewerChrome position-mode toggle", () => {
  it("offers the toggle in the mobile single-lens strip and dispatches the mode", () => {
    const { dispatch } = renderChrome();

    fireEvent.click(screen.getByRole("button", { name: "PATENT" }));
    expect(dispatch).toHaveBeenCalledWith({ type: SET_PATENT_POSITIONS, enabled: true });
  });

  it("leaves the toggle out of the comparison controls", () => {
    renderChrome(vi.fn(), { comparing: true });

    expect(screen.getByRole("button", { name: "ON-AXIS" })).toBeTruthy();
    expect(screen.queryByRole("group", { name: "Zoom and focus positions" })).toBeNull();
  });
});
