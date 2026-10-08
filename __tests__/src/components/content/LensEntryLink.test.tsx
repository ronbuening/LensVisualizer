// @vitest-environment jsdom

import { describe, expect, it } from "vitest";
import LensEntryLink from "../../../../src/components/content/LensEntryLink.js";
import themes from "../../../../src/utils/theme/themes.js";
import { renderWithRouter } from "../../../testUtils.js";
import { replaceTextForTranslation } from "../../../translationTestUtils.js";

describe("LensEntryLink", () => {
  it("updates translated link labels and removes optional metadata without replacing the link", () => {
    const { container, getByRole, rerender } = renderWithRouter(
      <LensEntryLink lensKey="sample-lens" text="First Lens" meta="50 mm" theme={themes.dark} />,
    );
    const link = getByRole("link");
    link.focus();
    expect(replaceTextForTranslation(container)).toBeGreaterThan(0);
    rerender(<LensEntryLink lensKey="other-lens" text="Second Lens" meta={null} theme={themes.dark} />);
    expect(getByRole("link", { name: "Second Lens" })).toBe(link);
    expect(link.textContent).toBe("Second Lens");
    expect(link.getAttribute("href")).toBe("/lens/other-lens/");
    expect(document.activeElement).toBe(link);
  });

  it("links to the canonical lens page and shows two specs by default", () => {
    const { getByRole } = renderWithRouter(
      <LensEntryLink
        lensKey="sample-lens"
        text="Custom Lens"
        specs={["50 mm", "f/2", "full frame"]}
        theme={themes.dark}
      />,
    );

    const link = getByRole("link", { name: /Custom Lens/ });
    expect(link.getAttribute("href")).toBe("/lens/sample-lens/");
    expect(link.textContent).toContain("50 mm, f/2");
    expect(link.textContent).not.toContain("full frame");
  });

  it("supports three specs and a custom navigation target", () => {
    const { getByRole } = renderWithRouter(
      <LensEntryLink
        lensKey="sample-lens"
        text="Sample Lens"
        specs={["50 mm", "f/2", "full frame", "manual focus"]}
        specsCount={3}
        theme={themes.dark}
        hrefForLens={() => ({ to: "/custom-target", state: { from: "test" } })}
      />,
    );

    const link = getByRole("link", { name: /Sample Lens/ });
    expect(link.getAttribute("href")).toBe("/custom-target");
    expect(link.textContent).toContain("50 mm, f/2, full frame");
    expect(link.textContent).not.toContain("manual focus");
  });
});
