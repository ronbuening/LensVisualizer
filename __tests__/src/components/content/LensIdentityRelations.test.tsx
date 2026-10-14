// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LensIdentityRelations from "../../../../src/components/content/LensIdentityRelations.js";
import themes from "../../../../src/utils/theme/themes.js";

describe("LensIdentityRelations", () => {
  const lens = {
    name: "PRIMARY 50mm f/2",
    aliases: [
      {
        maker: "Alternate",
        name: "ALTERNATE 50mm f/2",
        kind: "rebrand" as const,
        sources: [{ label: "Alias source", url: "https://example.com/alias" }] as const,
      },
    ],
    manufacturedBy: [
      {
        maker: "Factory",
        entity: "Factory Optical",
        sources: [{ label: "Factory source", url: "https://example.com/factory" }] as const,
      },
    ],
  };

  it("renders compact identity text without source details", () => {
    render(<LensIdentityRelations lens={lens} theme={themes.dark} compact />);
    expect(screen.getByText(/Also sold as ALTERNATE 50mm/)).toBeTruthy();
    expect(screen.queryByRole("link")).toBeNull();
  });

  it("renders full sourced alias and manufacturer details", () => {
    render(<LensIdentityRelations lens={lens} theme={themes.dark} />);
    expect(screen.getByRole("heading", { name: "Product identity" })).toBeTruthy();
    expect(screen.getByRole("link", { name: /Alias source/ }).getAttribute("href")).toBe("https://example.com/alias");
    expect(screen.getByRole("link", { name: /Factory source/ }).getAttribute("href")).toBe(
      "https://example.com/factory",
    );
  });
});
