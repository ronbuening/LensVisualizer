// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import ChangelogBox from "../../../../src/components/content/ChangelogBox.js";
import themes from "../../../../src/utils/theme/themes.js";

afterEach(() => cleanup());

describe("ChangelogBox", () => {
  it("renders the changelog heading and curated entries", () => {
    render(<ChangelogBox theme={themes.dark} />);
    expect(screen.getByRole("heading", { name: "Changelog" })).toBeTruthy();
    expect(screen.getAllByText(/May \d{1,2}, 2026/).length).toBeGreaterThan(0);
  });
});
