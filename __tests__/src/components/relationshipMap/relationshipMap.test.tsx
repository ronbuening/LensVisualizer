// @vitest-environment jsdom

/**
 * Interaction coverage for the relationship-map SVG components.
 */

import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent } from "@testing-library/react";
import { renderWithRouter } from "../../../testUtils.js";

afterEach(cleanup);
import themes from "../../../../src/utils/theme/themes.js";
import RelationshipMap from "../../../../src/components/relationshipMap/RelationshipMap.js";
import RelationshipEntityPicker from "../../../../src/components/relationshipMap/RelationshipEntityPicker.js";
import PatentDetailCard from "../../../../src/components/relationshipMap/PatentDetailCard.js";
import { AUTHORS } from "../../../../src/utils/catalog/authorCatalog.js";
import {
  buildRelationshipGraph,
  type PartyRef,
  type RelationshipGraph,
} from "../../../../src/utils/catalog/relationshipGraph.js";

const theme = themes.dark;

/** First author whose graph has ≥ 1 outer party (recentering is meaningful). */
function findConnectedGraph(): RelationshipGraph {
  for (const author of AUTHORS) {
    const graph = buildRelationshipGraph({ role: "author", name: author.name, slug: author.slug });
    if (graph.parties.length > 0) return graph;
  }
  throw new Error("No author in the catalog has a connected party — cannot exercise recentering.");
}

describe("RelationshipMap", () => {
  it("recenters when a party node is clicked", () => {
    const graph = findConnectedGraph();
    const onFocusParty = vi.fn();
    const { getAllByRole } = renderWithRouter(
      <RelationshipMap
        graph={graph}
        theme={theme}
        selectedPatentId={null}
        onSelectPatent={vi.fn()}
        onFocusParty={onFocusParty}
      />,
    );

    const partyButtons = getAllByRole("button", { name: /Recenter map on/ });
    expect(partyButtons.length).toBe(graph.parties.length);
    fireEvent.click(partyButtons[0]);
    expect(onFocusParty).toHaveBeenCalledTimes(1);
    expect((onFocusParty.mock.calls[0][0] as PartyRef).role).toBeDefined();
  });

  it("recenters on keyboard Enter over a party node", () => {
    const graph = findConnectedGraph();
    const onFocusParty = vi.fn();
    const { getAllByRole } = renderWithRouter(
      <RelationshipMap
        graph={graph}
        theme={theme}
        selectedPatentId={null}
        onSelectPatent={vi.fn()}
        onFocusParty={onFocusParty}
      />,
    );
    fireEvent.keyDown(getAllByRole("button", { name: /Recenter map on/ })[0], { key: "Enter" });
    expect(onFocusParty).toHaveBeenCalledTimes(1);
  });

  it("selects and deselects a patent node", () => {
    const graph = findConnectedGraph();
    const onSelectPatent = vi.fn();
    const patentId = graph.patents[0].id;
    const { getAllByRole, rerender } = renderWithRouter(
      <RelationshipMap
        graph={graph}
        theme={theme}
        selectedPatentId={null}
        onSelectPatent={onSelectPatent}
        onFocusParty={vi.fn()}
      />,
    );
    const patentButtons = getAllByRole("button", { name: /^Patent / });
    fireEvent.click(patentButtons[0]);
    expect(onSelectPatent).toHaveBeenCalledWith(patentId);

    onSelectPatent.mockClear();
    rerender(
      <RelationshipMap
        graph={graph}
        theme={theme}
        selectedPatentId={patentId}
        onSelectPatent={onSelectPatent}
        onFocusParty={vi.fn()}
      />,
    );
    fireEvent.click(getAllByRole("button", { name: /^Patent / })[0]);
    expect(onSelectPatent).toHaveBeenCalledWith(null);
  });
});

describe("PatentDetailCard", () => {
  it("renders lens links and recenters non-center inventors", () => {
    const graph = findConnectedGraph();
    // Choose a patent whose inventor list has a non-center inventor.
    const centerRef = graph.center.ref;
    const patent = graph.patents.find((p) => p.authors.some((name) => name !== centerRef.name)) ?? graph.patents[0];
    const onFocusParty = vi.fn();

    const { container, getByText } = renderWithRouter(
      <PatentDetailCard
        patent={patent}
        centerRef={centerRef}
        theme={theme}
        onFocusParty={onFocusParty}
        onClose={vi.fn()}
      />,
    );

    const lensLink = container.querySelector(`a[href^="/lens/"]`);
    expect(lensLink).not.toBeNull();

    // The center's own name renders as plain text, not a button.
    const centerEl = getByText(centerRef.name, { selector: "span" });
    expect(centerEl.tagName).toBe("SPAN");

    const otherInventor = patent.authors.find((name) => name !== centerRef.name);
    if (otherInventor) {
      fireEvent.click(getByText(otherInventor, { selector: "button" }));
      expect(onFocusParty).toHaveBeenCalledTimes(1);
    }
  });
});

describe("RelationshipEntityPicker", () => {
  it("filters by name and picks a ref", () => {
    const onPick = vi.fn();
    const author = AUTHORS[0];
    const { getByRole, getAllByRole } = renderWithRouter(<RelationshipEntityPicker theme={theme} onPick={onPick} />);

    const input = getByRole("searchbox");
    const fragment = author.name.split(" ")[0];
    fireEvent.change(input, { target: { value: fragment } });

    const rows = getAllByRole("button").filter((b) => b.textContent?.includes(author.name));
    expect(rows.length).toBeGreaterThan(0);
    fireEvent.click(rows[0]);
    expect(onPick).toHaveBeenCalledTimes(1);
  });

  it("shows at most 40 rows for an empty query", () => {
    const { getAllByRole } = renderWithRouter(<RelationshipEntityPicker theme={theme} onPick={vi.fn()} />);
    // The only buttons in the full picker are option rows.
    expect(getAllByRole("button").length).toBeLessThanOrEqual(40);
  });
});
