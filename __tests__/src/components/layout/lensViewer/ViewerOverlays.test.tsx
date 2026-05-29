// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import ViewerOverlays from "../../../../../src/components/layout/lensViewer/ViewerOverlays.js";
import themes from "../../../../../src/utils/theme/themes.js";

vi.mock("../../../../../src/components/display/AboutFooter.js", () => ({
  default: ({ onOpenAboutSite }: { onOpenAboutSite: () => void }) => (
    <button data-testid="about-footer" onClick={onOpenAboutSite}>
      Footer
    </button>
  ),
}));

vi.mock("../../../../../src/components/layout/DescriptionPanel.js", () => ({
  default: ({ markdown }: { markdown: string }) => <div data-testid="description-panel">{markdown}</div>,
}));

vi.mock("../../../../../src/components/layout/OverlayModal.js", () => ({
  default: ({ children, onClose }: { children: ReactNode; onClose: () => void }) => (
    <div data-testid="overlay-modal">
      <button onClick={onClose}>Close</button>
      {children}
    </div>
  ),
}));

vi.mock("../../../../../src/components/layout/PrimerToggleButton.js", () => ({
  default: ({ onToggle }: { onToggle: () => void }) => (
    <button data-testid="primer-toggle" onClick={onToggle}>
      Toggle primer
    </button>
  ),
}));

function props() {
  return {
    theme: themes.dark,
    isWide: true,
    showAbout: false,
    showAboutSite: false,
    showOpticsPrimer: false,
    showAberrationsPrimer: false,
    primerLevel: "simple" as const,
    aberrationsLevel: "simple" as const,
    onTogglePrimerLevel: vi.fn(),
    onToggleAberrationsLevel: vi.fn(),
    onOpenOpticsPrimer: vi.fn(),
    onOpenAberrationsPrimer: vi.fn(),
    onOpenAboutSite: vi.fn(),
    onOpenAboutAuthor: vi.fn(),
    onCloseAboutSite: vi.fn(),
    onCloseAboutAuthor: vi.fn(),
    onCloseOpticsPrimer: vi.fn(),
    onCloseAberrationsPrimer: vi.fn(),
    aboutSiteMarkdown: "site",
    aboutAuthorMarkdown: "author",
    opticsPrimerSimpleMarkdown: "simple optics",
    opticsPrimerIntermediateMarkdown: "intermediate optics",
    aberrationsPrimerSimpleMarkdown: "simple aberrations",
    aberrationsPrimerIntermediateMarkdown: "intermediate aberrations",
  };
}

afterEach(() => cleanup());

describe("ViewerOverlays", () => {
  it("renders footer controls and about modals", () => {
    const overlayProps = props();
    render(<ViewerOverlays {...overlayProps} showAboutSite={true} showAbout={true} />);

    fireEvent.click(screen.getByTestId("about-footer"));
    expect(overlayProps.onOpenAboutSite).toHaveBeenCalledTimes(1);
    expect(screen.getByText("site")).toBeTruthy();
    expect(screen.getByText("author")).toBeTruthy();

    fireEvent.click(screen.getAllByRole("button", { name: "Close" })[0]);
    expect(overlayProps.onCloseAboutSite).toHaveBeenCalledTimes(1);
  });

  it("renders selected primer levels and toggle callbacks", () => {
    const overlayProps = props();
    render(
      <ViewerOverlays
        {...overlayProps}
        showOpticsPrimer={true}
        showAberrationsPrimer={true}
        primerLevel="intermediate"
      />,
    );

    expect(screen.getByText("intermediate optics")).toBeTruthy();
    expect(screen.getByText("simple aberrations")).toBeTruthy();
    fireEvent.click(screen.getAllByTestId("primer-toggle")[0]);
    fireEvent.click(screen.getAllByTestId("primer-toggle")[1]);
    expect(overlayProps.onTogglePrimerLevel).toHaveBeenCalledTimes(1);
    expect(overlayProps.onToggleAberrationsLevel).toHaveBeenCalledTimes(1);
  });
});
