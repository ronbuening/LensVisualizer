// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { useState } from "react";
import UniversalConnectionTrace from "../../../../src/components/relationshipMap/UniversalConnectionTrace.js";
import InventorAffiliationMap from "../../../../src/components/relationshipMap/InventorAffiliationMap.js";
import { buildUniversalRelationshipGraph } from "../../../../src/utils/catalog/universalRelationshipGraph.js";
import { buildInventorAffiliations } from "../../../../src/utils/catalog/inventorAffiliations.js";
import themes from "../../../../src/utils/theme/themes.js";

afterEach(cleanup);
const graph = buildUniversalRelationshipGraph();

describe("universal exploration views", () => {
  it("selects trace endpoints through keyboard search and opens the supporting patent", () => {
    const select = vi.fn();
    const edge = graph.edges.find((entry) => entry.kind === "authorship")!;
    const patent = graph.nodes.find((node) => node.id === edge.from)!;
    const author = graph.nodes.find((node) => node.id === edge.to)!;
    function Trace() {
      const [endpoints, setEndpoints] = useState<{ from: string | null; to: string | null; corporate: boolean }>({
        from: null,
        to: null,
        corporate: true,
      });
      return (
        <UniversalConnectionTrace
          graph={graph}
          theme={themes.dark}
          selectedNodeId={null}
          from={endpoints.from}
          to={endpoints.to}
          includeCorporate={endpoints.corporate}
          onChange={(from, to, corporate) => setEndpoints({ from, to, corporate })}
          onSelectNode={select}
        />
      );
    }
    render(<Trace />);
    const start = screen.getByRole("combobox", { name: "Start entity" });
    fireEvent.change(start, { target: { value: patent.name } });
    fireEvent.keyDown(start, { key: "Enter" });
    const end = screen.getByRole("combobox", { name: "End entity" });
    fireEvent.change(end, { target: { value: author.name } });
    fireEvent.keyDown(end, { key: "Enter" });
    expect(screen.getByRole("status").textContent).toBe("1 step · 1 shortest path.");
    fireEvent.click(screen.getByRole("button", { name: "Inspect supporting patent" }));
    expect(select).toHaveBeenCalledWith(patent.id, true);
    fireEvent.click(screen.getByRole("button", { name: "Clear trace" }));
    expect(screen.queryByRole("group", { name: "Connection path" })).toBeNull();
  });

  it("shows counts and patent evidence for an inventor and retains other ties when filtering by organization", () => {
    const network = buildInventorAffiliations(graph);
    const inventor = network.inventors.find((record) => record.affiliations.length > 1)!;
    const select = vi.fn();
    render(<InventorAffiliationMap graph={graph} theme={themes.dark} selectedNodeId={null} onSelectNode={select} />);
    const map = screen.getByRole("group", { name: "Inventor affiliation map" });
    const inventorNode = within(map).getByRole("button", { name: `${inventor.inventor.name}, inventor` });
    fireEvent.keyDown(inventorNode, { key: "Enter" });
    expect(select).toHaveBeenCalledWith(inventor.inventor.id, true);
    const evidence = screen.getByRole("region", { name: "Affiliation evidence" });
    for (const link of inventor.affiliations) {
      const assignee = graph.nodes.find((node) => node.id === link.assigneeId)!;
      expect(within(evidence).getByRole("button", { name: assignee.name })).toBeDefined();
      expect(within(evidence).getAllByText(`Supporting patents (${link.patentIds.length})`).length).toBeGreaterThan(0);
    }
    fireEvent.change(screen.getByRole("combobox", { name: "Organization" }), {
      target: { value: inventor.affiliations[0].assigneeId },
    });
    for (const link of inventor.affiliations) {
      const assignee = graph.nodes.find((node) => node.id === link.assigneeId)!;
      expect(
        within(screen.getByRole("group", { name: "Inventor affiliation map" })).getByRole("button", {
          name: `${assignee.name}, assignee`,
        }),
      ).toBeDefined();
    }
    const details = within(screen.getByRole("region", { name: "Affiliation evidence" }))
      .getAllByText(/Supporting patents/)[0]
      .closest("details")!;
    fireEvent.click(details.querySelector("summary")!);
    const supportingPatent = within(details).getAllByRole("button")[0];
    fireEvent.click(supportingPatent);
    expect(select).toHaveBeenLastCalledWith(inventor.affiliations[0].patentIds[0], true);
  });

  it("offers to reveal a selected single-assignee inventor and reports unassigned inventors", () => {
    const inventor = buildInventorAffiliations(graph).inventors.find((record) => record.affiliations.length === 1)!;
    render(
      <InventorAffiliationMap
        graph={graph}
        theme={themes.light}
        selectedNodeId={inventor.inventor.id}
        onSelectNode={vi.fn()}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: "Show selected inventor" }));
    expect(
      (screen.getByRole("checkbox", { name: "Include single-assignee inventors" }) as HTMLInputElement).checked,
    ).toBe(true);
    expect(
      within(screen.getByRole("group", { name: "Inventor affiliation map" })).getByRole("button", {
        name: `${inventor.inventor.name}, inventor`,
      }),
    ).toBeDefined();
    expect(screen.getByRole("status").textContent).toContain("without a named assignee");
  });
});
