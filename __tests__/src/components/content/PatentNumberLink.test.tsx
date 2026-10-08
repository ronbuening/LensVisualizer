// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import PatentNumberLink from "../../../../src/components/content/PatentNumberLink.js";
import { replaceTextForTranslation } from "../../../translationTestUtils.js";

afterEach(cleanup);

it("updates translated patent labels and switches between linked and fallback references", () => {
  const view = (patentNumber: string) => (
    <div>
      <PatentNumberLink patentNumber={patentNumber} color="#999" />
    </div>
  );
  const { container, rerender, unmount } = render(view("Catalog reference"));
  for (const patent of ["US 10,571,651 B2", "US 5,123,456 A", "Catalog reference", "US 10,571,651 B2"]) {
    expect(replaceTextForTranslation(container)).toBeGreaterThan(0);
    rerender(view(patent));
    expect(container.textContent).toBe(patent + (patent.startsWith("US") ? "↗" : ""));
    if (patent.startsWith("US")) {
      const link = screen.getByRole("link", { name: `${patent} in Espacenet (opens in a new tab)` });
      expect(link.getAttribute("target")).toBe("_blank");
      expect(link.querySelector('[aria-hidden="true"]')?.textContent?.trim()).toBe("↗");
    } else expect(screen.queryByRole("link")).toBeNull();
  }
  replaceTextForTranslation(container);
  unmount();
});
