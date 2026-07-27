// @vitest-environment jsdom

import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ThemedMarkdown from "../../../../src/components/markdown/ThemedMarkdown.js";
import themes from "../../../../src/utils/theme/themes.js";
import { renderWithRouter } from "../../../testUtils.js";

describe("ThemedMarkdown article links", () => {
  it("opens external and lens links in a new tab while keeping internal articles in place", () => {
    renderWithRouter(
      <ThemedMarkdown
        markdown={[
          "[Manufacturer article](https://example.com/lens-story)",
          "[Series index](/articles/manufacturer-lens-stories)",
          "[Lens diagram](/lens/example-lens)",
        ].join("\n\n")}
        theme={themes.dark}
        variant="article"
      />,
    );

    const manufacturerLink = screen.getByRole("link", { name: "Manufacturer article" });
    expect(manufacturerLink.getAttribute("target")).toBe("_blank");
    expect(manufacturerLink.getAttribute("rel")).toBe("noopener noreferrer");

    expect(screen.getByRole("link", { name: "Series index" }).getAttribute("target")).toBeNull();
    expect(screen.getByRole("link", { name: "Lens diagram" }).getAttribute("target")).toBe("_blank");
  });
});
