// @vitest-environment jsdom

/** Interaction coverage for the universal relationship SVG and entity panel. */

import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent } from "@testing-library/react";
import UniversalEntityDetailCard from "../../../../src/components/relationshipMap/UniversalEntityDetailCard.js";
import UniversalRelationshipMap from "../../../../src/components/relationshipMap/UniversalRelationshipMap.js";
import type {
  UniversalPartyNode,
  UniversalRelationshipGraph,
  UniversalRelationshipNode,
} from "../../../../src/utils/catalog/universalRelationshipGraph.js";
import themes from "../../../../src/utils/theme/themes.js";
import { renderWithRouter } from "../../../testUtils.js";

afterEach(cleanup);

const author: UniversalPartyNode = {
  id: "author:ada",
  kind: "author",
  name: "Ada Inventor",
  ref: { role: "author", name: "Ada Inventor", slug: "ada" },
  patentCount: 1,
};
const assignee: UniversalPartyNode = {
  id: "assignee:example",
  kind: "assignee",
  name: "Example Optics",
  ref: { role: "assignee", name: "Example Optics", slug: "example" },
  patentCount: 1,
};

const graph: UniversalRelationshipGraph = {
  nodes: [
    { id: "family:example", kind: "family", name: "Example family" },
    assignee,
    author,
    {
      id: "patent:US 1",
      kind: "patent",
      name: "US 1",
      patent: {
        id: "patent:US 1",
        patentNumber: "US 1",
        patentYear: 2001,
        authors: [author.name],
        assignees: [assignee.name],
        lenses: [],
      },
    },
  ],
  edges: [
    { id: "edge-0", from: "patent:US 1", to: author.id, kind: "authorship" },
    { id: "edge-1", from: "patent:US 1", to: assignee.id, kind: "assignment" },
    {
      id: "edge-2",
      from: assignee.id,
      to: "family:example",
      kind: "family",
      effectiveFrom: "2000-01-01",
      sourceUrl: "https://example.com/source",
    },
  ],
  patents: [],
  components: [["family:example", assignee.id, author.id, "patent:US 1"]],
  stats: {
    authors: 1,
    assignees: 1,
    patents: 1,
    organizations: 0,
    families: 1,
    patentRelationships: 2,
    corporateRelationships: 1,
    components: 1,
  },
};

function makeMultiHubGraph(): UniversalRelationshipGraph {
  const alpha: UniversalPartyNode = {
    id: "assignee:alpha",
    kind: "assignee",
    name: "Alpha Optics",
    ref: { role: "assignee", name: "Alpha Optics", slug: "alpha" },
    patentCount: 8,
  };
  const beta: UniversalPartyNode = {
    id: "assignee:beta",
    kind: "assignee",
    name: "Beta Optics",
    ref: { role: "assignee", name: "Beta Optics", slug: "beta" },
    patentCount: 8,
  };
  const sharedAuthor: UniversalPartyNode = {
    id: "author:shared",
    kind: "author",
    name: "Shared Inventor",
    ref: { role: "author", name: "Shared Inventor", slug: "shared" },
    patentCount: 2,
  };
  const patents: UniversalRelationshipNode[] = Array.from({ length: 16 }, (_, index) => {
    const patentNumber = `${index < 8 ? "AA" : "BB"} ${(index % 8) + 1}`;
    const id = `patent:${patentNumber}`;
    return {
      id,
      kind: "patent",
      name: patentNumber,
      patent: {
        id,
        patentNumber,
        patentYear: 2000 + index,
        authors: [],
        assignees: [],
        lenses: [],
      },
    };
  });
  const nodes = [alpha, beta, sharedAuthor, ...patents];
  const edges = [
    ...patents.map((patent, index) => ({
      id: `assignment-${index}`,
      from: patent.id,
      to: index < 8 ? alpha.id : beta.id,
      kind: "assignment" as const,
    })),
    { id: "authorship-alpha", from: patents[0].id, to: sharedAuthor.id, kind: "authorship" as const },
    { id: "authorship-beta", from: patents[8].id, to: sharedAuthor.id, kind: "authorship" as const },
    { id: "acquisition", from: alpha.id, to: beta.id, kind: "acquisition" as const },
  ];

  return {
    nodes,
    edges,
    patents: [],
    components: [nodes.map((node) => node.id)],
    stats: {
      authors: 1,
      assignees: 2,
      patents: 16,
      organizations: 0,
      families: 0,
      patentRelationships: 18,
      corporateRelationships: 1,
      components: 1,
    },
  };
}

describe("UniversalRelationshipMap", () => {
  it("renders every node as a keyboard-operable control", () => {
    const onSelectNode = vi.fn();
    const { container, getAllByRole, getByRole, getByText } = renderWithRouter(
      <UniversalRelationshipMap graph={graph} theme={themes.dark} selectedNodeId={null} onSelectNode={onSelectNode} />,
    );
    expect(getByRole("group", { name: /Universal relationship map/ })).toBeDefined();
    expect(getAllByRole("button", { name: /^Select / })).toHaveLength(graph.nodes.length);
    expect(getByText("Example Optics · 4 nodes")).toBeDefined();
    expect(container.querySelectorAll("ellipse")).toHaveLength(1);

    const familyButton = getByRole("button", { name: "Select corporate family Example family" });
    fireEvent.click(familyButton);
    expect(onSelectNode).toHaveBeenCalledWith("family:example");

    fireEvent.keyDown(getByRole("button", { name: "Select patent US 1" }), { key: "Enter" });
    expect(onSelectNode).toHaveBeenCalledWith("patent:US 1");
  });

  it("highlights a node and its edges on keyboard focus", () => {
    const { getByRole, container } = renderWithRouter(
      <UniversalRelationshipMap graph={graph} theme={themes.dark} selectedNodeId={null} onSelectNode={vi.fn()} />,
    );
    const button = getByRole("button", { name: "Select assignee Example Optics" });
    fireEvent.focus(button);
    const activeLines = [...container.querySelectorAll("line")].filter((line) => line.getAttribute("opacity") === "1");
    expect(activeLines).toHaveLength(2);
  });

  it("draws cross-neighborhood connections as brightly as matching internal connections", () => {
    const { container } = renderWithRouter(
      <UniversalRelationshipMap
        graph={makeMultiHubGraph()}
        theme={themes.dark}
        selectedNodeId={null}
        onSelectNode={vi.fn()}
      />,
    );
    expect(container.querySelectorAll("ellipse")).toHaveLength(2);

    const authorshipLines = [...container.querySelectorAll("line")].filter((line) =>
      line.querySelector("title")?.textContent?.includes("Shared Inventor named on"),
    );
    expect(authorshipLines).toHaveLength(2);
    expect(new Set(authorshipLines.map((line) => line.getAttribute("opacity")))).toEqual(new Set(["0.3"]));

    const acquisitionLine = [...container.querySelectorAll("line")].find(
      (line) => line.querySelector("title")?.textContent === "Alpha Optics acquired by Beta Optics",
    );
    expect(acquisitionLine?.getAttribute("opacity")).toBe("0.62");
    expect(acquisitionLine?.getAttribute("stroke-width")).toBe("1.35");
  });
});

describe("UniversalEntityDetailCard", () => {
  it("shows dates, sources, and the focused-map link", () => {
    const { getByRole, getByText } = renderWithRouter(
      <UniversalEntityDetailCard graph={graph} node={assignee} theme={themes.dark} onClose={vi.fn()} />,
    );
    expect(getByText("2000-01-01 onward")).toBeDefined();
    expect(getByRole("link", { name: "Source ↗" }).getAttribute("href")).toBe("https://example.com/source");
    expect(getByRole("link", { name: /Open focused relationship map/ }).getAttribute("href")).toBe(
      "/relationships/#focus=assignee:example",
    );
  });

  it("links corporate-family members to their focused relationship maps", () => {
    const family = graph.nodes.find((node) => node.kind === "family")!;
    if (family.kind !== "family") throw new Error("missing family fixture");
    const { getByRole } = renderWithRouter(
      <UniversalEntityDetailCard graph={graph} node={family} theme={themes.dark} onClose={vi.fn()} />,
    );
    expect(getByRole("link", { name: assignee.name }).getAttribute("href")).toBe(
      "/relationships/#focus=assignee:example",
    );
  });
});
