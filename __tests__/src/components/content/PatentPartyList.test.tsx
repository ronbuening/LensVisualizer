// @vitest-environment jsdom

import { describe, expect, it } from "vitest";
import PatentPartyList from "../../../../src/components/content/PatentPartyList.js";
import InventorLinks from "../../../../src/components/content/InventorLinks.js";
import { AUTHORS } from "../../../../src/utils/catalog/authorCatalog.js";
import themes from "../../../../src/utils/theme/themes.js";
import { renderWithRouter } from "../../../testUtils.js";

describe("PatentPartyList", () => {
  it("preserves source order while applying the caller's render strategy", () => {
    const { container, getAllByRole } = renderWithRouter(
      <div>
        <PatentPartyList names={["Third", "First", "Second"]} renderName={(name) => <button>{name}</button>} />
      </div>,
    );

    expect(getAllByRole("button").map((button) => button.textContent)).toEqual(["Third", "First", "Second"]);
    expect(container.textContent).toBe("Third, First, Second");
  });
});

describe("InventorLinks", () => {
  it("links known inventors while leaving the current author as plain text", () => {
    const currentAuthor = AUTHORS[0];
    const linkedAuthor = AUTHORS[1];
    const { container, queryByRole, getByRole } = renderWithRouter(
      <p>
        <InventorLinks
          names={[currentAuthor.name, linkedAuthor.name]}
          currentAuthor={currentAuthor.name}
          theme={themes.dark}
        />
      </p>,
    );

    expect(container.textContent).toBe(`${currentAuthor.name}, ${linkedAuthor.name}`);
    expect(queryByRole("link", { name: currentAuthor.name })).toBeNull();
    expect(getByRole("link", { name: linkedAuthor.name }).getAttribute("href")).toBe(`/authors/${linkedAuthor.slug}/`);
  });
});
