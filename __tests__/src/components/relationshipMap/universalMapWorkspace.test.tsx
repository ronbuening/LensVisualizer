// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, screen, within } from "@testing-library/react";
import UniversalMapExplore from "../../../../src/components/relationshipMap/UniversalMapExplore.js";
import UniversalMapResearch from "../../../../src/components/relationshipMap/UniversalMapResearch.js";
import { layoutUniversalRelationshipGraph } from "../../../../src/components/relationshipMap/universalLayout.js";
import { UNIVERSAL_EDGE_KINDS } from "../../../../src/utils/catalog/universalRelationshipQueries.js";
import themes from "../../../../src/utils/theme/themes.js";
import { universalFixture, assignee, patent, organization } from "../../../universalGraphFixture.js";
import { installMatchMediaMock, renderWithRouter } from "../../../testUtils.js";

const patents = Array.from({ length: 60 }, (_, i) => patent(`US ${1000 + i}`, 1960 + i));
const graph = universalFixture(
  [assignee("Alpha"), ...patents, organization("Unconnected")],
  patents.map((p) => ({ id: `edge:${p.id}`, from: p.id, to: "Alpha", kind: "assignment" })),
);
const layout = layoutUniversalRelationshipGraph(graph);
beforeEach(() => installMatchMediaMock(false));
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("universal workspace views", () => {
  it("offers a narrow-screen directory and paginates all local neighbors with searchable evidence", () => {
    const open = vi.fn(),
      select = vi.fn(),
      openFullMap = vi.fn();
    const props = {
      graph,
      layout,
      theme: themes.light,
      edgeKinds: UNIVERSAL_EDGE_KINDS,
      onSelectNode: select,
      onOpenFullMap: openFullMap,
      onOpenNeighborhood: open,
    };
    const { rerender } = renderWithRouter(
      <UniversalMapExplore {...props} selectedNodeId={null} neighborhoodId={null} />,
    );
    expect(screen.queryByRole("group", { name: "Neighborhood overview" })).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: /Alpha.*60 patents/ }));
    expect(screen.getByRole("region", { name: "Selected neighborhood" })).toBeDefined();
    fireEvent.click(screen.getByRole("button", { name: "Open neighborhood" }));
    expect(open).toHaveBeenCalledWith("cluster:Alpha", "Alpha");
    rerender(<UniversalMapExplore {...props} selectedNodeId="Alpha" neighborhoodId="cluster:Alpha" />);
    const center = screen.getByRole("button", { name: "Open full map with Alpha selected" });
    expect(center.textContent).toContain("Alpha");
    expect(screen.queryByText("Selected")).toBeNull();
    fireEvent.click(center);
    expect(openFullMap).toHaveBeenLastCalledWith("Alpha");
    expect(screen.getByRole("status").textContent).toContain("1–25 of 60");
    fireEvent.click(screen.getByRole("button", { name: "Next neighbors" }));
    expect(screen.getByRole("status").textContent).toContain("26–50 of 60");
    fireEvent.change(screen.getByRole("searchbox", { name: /Search all 60 neighbors/ }), {
      target: { value: "US 1059" },
    });
    expect(screen.getByRole("status").textContent).toContain("1–1 of 1");
    fireEvent.click(screen.getByRole("button", { name: "Evidence for US 1059" }));
    expect(screen.getByText("US 1059 is assigned to Alpha")).toBeDefined();
    fireEvent.click(screen.getByRole("button", { name: /US 1059 · Patent/ }));
    expect(select).toHaveBeenCalledWith("US 1059");
    rerender(<UniversalMapExplore {...props} selectedNodeId="US 1059" neighborhoodId="cluster:Alpha" />);
    fireEvent.click(screen.getByRole("button", { name: "Open full map" }));
    expect(openFullMap).toHaveBeenLastCalledWith("US 1059");
    rerender(<UniversalMapExplore {...props} selectedNodeId={null} neighborhoodId="cluster:Alpha" />);
    fireEvent.click(screen.getByRole("button", { name: "Open full map" }));
    expect(openFullMap).toHaveBeenLastCalledWith("Alpha");
  });
  it("provides table pagination, filtering, sorting and source evidence", () => {
    renderWithRouter(
      <UniversalMapResearch
        graph={graph}
        theme={themes.dark}
        edgeKinds={UNIVERSAL_EDGE_KINDS}
        selectedNodeId={null}
        fromId={null}
        toId={null}
        onSelectNode={vi.fn()}
        onFindPath={vi.fn()}
      />,
    );
    let table = screen.getByRole("table", { name: "Catalog entities" });
    expect(within(table).getAllByRole("row")).toHaveLength(51);
    fireEvent.click(screen.getByRole("button", { name: "Next records" }));
    expect(within(table).getAllByRole("row")).toHaveLength(13);
    fireEvent.click(screen.getByRole("button", { name: "Relationships" }));
    table = screen.getByRole("table", { name: "Recorded relationships" });
    fireEvent.change(screen.getByRole("searchbox", { name: "Search records" }), { target: { value: "US 1000" } });
    expect(within(table).getAllByRole("row")).toHaveLength(2);
    fireEvent.click(within(table).getByRole("button", { name: "Evidence" }));
    expect(screen.getByText("US 1000 is assigned to Alpha")).toBeDefined();
    expect(screen.getByRole("link", { name: /US 1000 in Espacenet/ })).toBeDefined();
    fireEvent.click(within(table).getByRole("button", { name: /^From/ }));
    expect(within(table).getByRole("columnheader", { name: /^From/ }).getAttribute("aria-sort")).toBe("descending");
  });
  it("prefills a new starting endpoint without discarding the unsubmitted destination", () => {
    const find = vi.fn();
    const props = {
      graph,
      theme: themes.light,
      edgeKinds: UNIVERSAL_EDGE_KINDS,
      selectedNodeId: null,
      fromId: null,
      toId: null,
      onSelectNode: vi.fn(),
      onFindPath: find,
    };
    const { rerender } = renderWithRouter(<UniversalMapResearch {...props} />);
    const end = screen.getByRole("combobox", { name: "Connection end" });
    fireEvent.change(end, { target: { value: "US 1000" } });
    fireEvent.keyDown(end, { key: "Enter" });
    rerender(<UniversalMapResearch {...props} selectedNodeId="Alpha" fromId="Alpha" />);
    fireEvent.click(screen.getByRole("button", { name: "Find connection" }));
    expect(find).toHaveBeenLastCalledWith("Alpha", "US 1000");
    rerender(<UniversalMapResearch {...props} selectedNodeId="Alpha" fromId="Unconnected" toId="US 1001" />);
    fireEvent.click(screen.getByRole("button", { name: "Find connection" }));
    expect(find).toHaveBeenLastCalledWith("Unconnected", "US 1001");
  });

  it("explains reversed paths and distinguishes filtered-out from missing connections", () => {
    const props = {
      graph,
      theme: themes.light,
      selectedNodeId: null,
      fromId: "Alpha",
      toId: "US 1000",
      onSelectNode: vi.fn(),
      onFindPath: vi.fn(),
    };
    const { rerender } = renderWithRouter(<UniversalMapResearch {...props} edgeKinds={UNIVERSAL_EDGE_KINDS} />);
    expect(
      within(screen.getByRole("list", { name: "Connection path evidence" })).getByText("US 1000 is assigned to Alpha"),
    ).toBeDefined();
    rerender(<UniversalMapResearch {...props} edgeKinds={[]} />);
    expect(screen.getByText(/No connection under these filters/)).toBeDefined();
    rerender(<UniversalMapResearch {...props} toId="Unconnected" edgeKinds={UNIVERSAL_EDGE_KINDS} />);
    expect(screen.getByText(/No recorded connection between/)).toBeDefined();
  });
});
