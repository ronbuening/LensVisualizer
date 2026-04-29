// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import ViewerChrome from "../src/components/layout/lensViewer/ViewerChrome.js";
import { SET_RAY_TOGGLE } from "../src/utils/lensReducer.js";
import themes from "../src/utils/themes.js";

vi.mock("../src/components/layout/BreadcrumbBar.js", () => ({
  default: () => <div data-testid="breadcrumb" />,
}));

vi.mock("../src/components/layout/TopBar.js", () => ({
  default: () => <div data-testid="topbar" />,
}));

vi.mock("../src/components/layout/ViewToggleBar.js", () => ({
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

function renderChrome(dispatch = vi.fn()) {
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
