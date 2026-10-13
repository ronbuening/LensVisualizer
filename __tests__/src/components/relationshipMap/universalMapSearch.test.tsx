// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import UniversalMapSearch from "../../../../src/components/relationshipMap/UniversalMapSearch.js";
import { buildUniversalRelationshipGraph } from "../../../../src/utils/catalog/universalRelationshipGraph.js";
import type { UniversalRelationshipNode } from "../../../../src/utils/catalog/universalRelationshipGraph.js";
import {
  buildUniversalSearchIndex,
  searchUniversalNodes,
} from "../../../../src/utils/catalog/universalRelationshipSearch.js";
import themes from "../../../../src/utils/theme/themes.js";

afterEach(cleanup);

const graph = buildUniversalRelationshipGraph();

describe("universal map search", () => {
  it.each(["author", "assignee", "patent", "organization", "family"] as const)("finds graph %s nodes", (kind) => {
    const node = graph.nodes.find((entry) => entry.kind === kind)!;
    expect(searchUniversalNodes(buildUniversalSearchIndex(graph.nodes), node.name)).toContain(node);
  });

  it("normalizes names and ranks exact, prefix, and reordered words deterministically", () => {
    const nodes: UniversalRelationshipNode[] = [
      { id: "organization:3", kind: "organization", name: "Optics Ada" },
      { id: "organization:2", kind: "organization", name: "Ada Optics Ltd." },
      { id: "organization:1", kind: "organization", name: "Áda Optics" },
    ];
    const index = buildUniversalSearchIndex(nodes);
    expect(searchUniversalNodes(index, "ADA optics").map((n) => n.id)).toEqual([
      "organization:1",
      "organization:2",
      "organization:3",
    ]);
    expect(searchUniversalNodes(index, "optics, áda")).toHaveLength(3);
    expect(searchUniversalNodes(index, " !!! ")).toEqual([]);
    const patent = graph.nodes.find((n) => n.kind === "patent")!;
    expect(
      searchUniversalNodes(buildUniversalSearchIndex([patent]), patent.name.replace(/[^\p{L}\p{N}]/gu, "")),
    ).toEqual([patent]);
  });

  it("selects the highlighted result with Enter and keeps focus without navigation", () => {
    const pick = vi.fn();
    render(<UniversalMapSearch graph={graph} theme={themes.dark} onSelectNode={pick} />);
    const input = screen.getByRole("combobox");
    input.focus();
    const location = window.location.href;
    fireEvent.change(input, { target: { value: "Nikon" } });
    const options = screen.getAllByRole("option");
    fireEvent.keyDown(input, { key: "ArrowDown" });
    expect(input.getAttribute("aria-activedescendant")).toBe(options[1].id);
    fireEvent.keyDown(input, { key: "Enter", isComposing: true });
    expect(pick).not.toHaveBeenCalled();
    fireEvent.keyDown(input, { key: "Enter" });
    expect(pick).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("listbox")).toBeNull();
    expect((input as HTMLInputElement).value).toBe("");
    expect(document.activeElement).toBe(input);
    expect(window.location.href).toBe(location);
  });

  it("bounds results, reports no matches, and dismisses without selecting", () => {
    const pick = vi.fn();
    render(<UniversalMapSearch graph={graph} theme={themes.light} onSelectNode={pick} />);
    const input = screen.getByRole("combobox");
    expect(screen.queryByRole("listbox")).toBeNull();
    fireEvent.change(input, { target: { value: "a" } });
    expect(screen.getAllByRole("option")).toHaveLength(8);
    expect(screen.getByRole("status").textContent).toContain("refine your search");
    fireEvent.keyDown(input, { key: "Escape" });
    expect(screen.queryByRole("listbox")).toBeNull();
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: "Tab" });
    expect(screen.queryByRole("listbox")).toBeNull();
    fireEvent.focus(input);
    fireEvent.mouseDown(document.body);
    expect(screen.queryByRole("listbox")).toBeNull();
    fireEvent.change(input, { target: { value: "no such node zqx" } });
    expect(screen.getByRole("status").textContent).toBe("No matches");
    fireEvent.keyDown(input, { key: "Enter" });
    expect(pick).not.toHaveBeenCalled();
    fireEvent.change(input, { target: { value: "Nikon" } });
    fireEvent.click(screen.getAllByRole("option")[0]);
    expect(pick).toHaveBeenCalledTimes(1);
  });
});
