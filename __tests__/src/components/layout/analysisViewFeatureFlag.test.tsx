// @vitest-environment jsdom

import { cleanup, render, renderHook, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

const catalogMocks = vi.hoisted(() => ({
  cachedMdForKey: vi.fn(() => null),
  hasMdForKey: vi.fn(() => true),
  loadMdForKey: vi.fn(async () => "# Analysis"),
}));

vi.mock("../../../../src/utils/featureFlags.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../../../src/utils/featureFlags.js")>();
  return {
    ...actual,
    ENABLE_ANALYSIS_VIEW: false,
    ENABLE_CARDINAL_ELEMENTS: false,
  };
});

vi.mock("../../../../src/utils/catalog/lensCatalog.js", () => catalogMocks);

vi.mock("../../../../src/components/layout/LensDiagramPanel.js", () => ({
  default: ({ lensKey }: { lensKey: string }) => <div data-testid="diagram">{lensKey}</div>,
}));

vi.mock("../../../../src/components/layout/DescriptionPanel.js", () => ({
  default: () => <div data-testid="description" />,
}));

vi.mock("../../../../src/components/layout/BreadcrumbBar.js", () => ({
  default: () => <div data-testid="breadcrumb" />,
}));

vi.mock("../../../../src/components/layout/TopBar.js", () => ({
  default: () => <div data-testid="topbar" />,
}));

vi.mock("../../../../src/components/layout/ControlsBar.js", () => ({
  default: () => <div data-testid="controls" />,
}));

vi.mock("../../../../src/components/layout/ViewToggleBar.js", () => ({
  default: () => <div data-testid="view-toggle" />,
}));

import useLensAnalysisMarkdown from "../../../../src/components/hooks/useLensAnalysisMarkdown.js";
import SingleLensContent from "../../../../src/components/layout/SingleLensContent.js";
import ViewerChrome from "../../../../src/components/layout/lensViewer/ViewerChrome.js";
import themes from "../../../../src/utils/theme/themes.js";

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe("ENABLE_ANALYSIS_VIEW disabled behavior", () => {
  it("does not load companion analysis markdown", () => {
    const { result } = renderHook(() => useLensAnalysisMarkdown("lens-a"));

    expect(result.current).toBeNull();
    expect(catalogMocks.hasMdForKey).not.toHaveBeenCalled();
    expect(catalogMocks.loadMdForKey).not.toHaveBeenCalled();
  });

  it("forces diagram-only content for persisted desktop and mobile analysis views", () => {
    const baseProps = {
      theme: themes.dark,
      isWide: true,
      effectiveDesktopView: "both" as const,
      showDesktopToggle: true,
      mobileView: "description" as const,
      lensKeyA: "lens-a",
      markdown: "# Analysis",
    };

    const desktop = render(<SingleLensContent {...baseProps} />);
    expect(screen.getByTestId("diagram")).toBeTruthy();
    expect(screen.queryByTestId("description")).toBeNull();
    desktop.unmount();

    render(<SingleLensContent {...baseProps} isWide={false} />);
    expect(screen.getByTestId("diagram")).toBeTruthy();
    expect(screen.queryByTestId("description")).toBeNull();
  });

  it("hides analysis view controls while retaining mobile diagram controls", () => {
    render(
      <ViewerChrome
        theme={themes.dark}
        isWide={false}
        comparing={false}
        lensKeyA="lens-a"
        lensKeyB="lens-b"
        showCompareBtn={true}
        onSwitchLensA={vi.fn()}
        onSwitchLensB={vi.fn()}
        onSwapLenses={vi.fn()}
        onToggleCompare={vi.fn()}
        onOpenAboutSite={vi.fn()}
        onOpenAboutAuthor={vi.fn()}
        onOpenOpticsPrimer={vi.fn()}
        onOpenAberrationsPrimer={vi.fn()}
        catalogKeys={["lens-a", "lens-b"]}
        catalogNames={{ "lens-a": "Lens A", "lens-b": "Lens B" }}
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
          showCardinalFocal: false,
          showCardinalPrincipal: false,
          showCardinalNodal: false,
          showCardinalDimensions: false,
          showCardinalEfl: false,
          showCardinalBfd: false,
          showCardinalFfd: false,
          showCardinalHiatus: false,
          showCardinalTotalTrack: false,
          scaleMode: "independent",
          dispatch: vi.fn(),
        }}
        mobileView="description"
        onMobileViewChange={vi.fn()}
        showDesktopToggle={true}
        desktopViewOptions={[
          { label: "DIAGRAM", val: "diagram" },
          { label: "BOTH", val: "both" },
          { label: "ANALYSIS", val: "analysis" },
        ]}
        effectiveDesktopView="analysis"
        onDesktopViewChange={vi.fn()}
      />,
    );

    expect(screen.queryByTestId("view-toggle")).toBeNull();
    expect(screen.getByTestId("controls")).toBeTruthy();
  });
});
