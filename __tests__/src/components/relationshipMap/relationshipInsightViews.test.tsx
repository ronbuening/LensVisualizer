// @vitest-environment jsdom
import { useState } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, fireEvent, screen, within } from "@testing-library/react";
import CompanyRelationshipViews, {
  type CompanyRelationshipView,
} from "../../../../src/components/relationshipMap/CompanyRelationshipViews.js";
import InventorRelationshipViews from "../../../../src/components/relationshipMap/InventorRelationshipViews.js";
import RelationshipEvidenceLanes from "../../../../src/components/relationshipMap/RelationshipEvidenceLanes.js";
import { buildRelationshipInsights } from "../../../../src/utils/catalog/relationshipInsights.js";
import {
  relationshipViewHash,
  type InventorRelationshipView,
} from "../../../../src/utils/state/relationshipViewUrl.js";
import { relationshipInsightFixture } from "../../../fixtures/relationshipInsights.js";
import { renderPage } from "../../../testUtils.js";
import themes from "../../../../src/utils/theme/themes.js";

const insights = buildRelationshipInsights(relationshipInsightFixture());
const select = vi.fn();

function Harness({
  view,
  inventor,
  initial = "",
}: {
  view: CompanyRelationshipView | Exclude<InventorRelationshipView, "relationships">;
  inventor?: string;
  initial?: string;
}) {
  const [params, setParams] = useState(new URLSearchParams(initial));
  const props = {
    insights,
    theme: themes.light,
    params,
    onSelectPatent: select,
    onParamsChange: (changes: Record<string, string | null>) =>
      setParams((previous) => new URLSearchParams(relationshipViewHash(previous.toString(), changes).slice(1))),
  };
  return (
    <>
      {inventor ? (
        <InventorRelationshipViews
          {...props}
          view={view as Exclude<InventorRelationshipView, "relationships">}
          inventorId={inventor}
        />
      ) : view === "evidence" ? (
        <RelationshipEvidenceLanes {...props} />
      ) : (
        <CompanyRelationshipViews {...props} view={view as CompanyRelationshipView} />
      )}
      <div data-testid="view-parameters">{params.toString()}</div>
    </>
  );
}

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
  vi.useRealTimers();
});

describe("relationship insight views", () => {
  it("compares every bridge tie and opens the focused inventor with the pair preserved", () => {
    renderPage(<Harness view="bridge" initial="left=assignee:alpha&right=assignee:beta" />);
    expect(screen.getByRole("status").textContent).toContain("2 shared inventor records");
    fireEvent.keyDown(screen.getByRole("button", { name: "Ada: 2 patents with Alpha, 2 with Beta" }), { key: "Enter" });
    const evidence = screen.getByRole("region", { name: "Company bridge evidence" });
    const link = within(evidence).getAllByRole("link", { name: "Ada" })[1];
    const params = new URLSearchParams(link.getAttribute("href")!.split("#")[1]);
    expect(params.get("focus")).toBe("author:ada");
    expect(params.get("view")).toBe("evidence");
    expect(params.get("left")).toBe("assignee:alpha");
    expect(params.get("right")).toBe("assignee:beta");
    const patents = within(evidence).getAllByText("Supporting patents (2)")[0].closest("details")!;
    fireEvent.click(patents.querySelector("summary")!);
    fireEvent.click(within(patents).getByRole("button", { name: "P1 · 2000" }));
    expect(select).toHaveBeenCalledWith("patent:P1", true);
    fireEvent.click(screen.getByRole("button", { name: "Swap companies" }));
    expect((screen.getByRole("combobox", { name: "Left company" }) as HTMLSelectElement).value).toBe("assignee:beta");
  });

  it("shows exact matrix shares, source patents, filters, and a deliberate empty company selection", () => {
    renderPage(<Harness view="matrix" initial="companies=assignee:alpha,assignee:beta&measure=share" />);
    const cell = screen.getByRole("button", { name: "Ada, Alpha: 67% of assigned patents" });
    fireEvent.click(cell);
    expect(screen.getByRole("region", { name: "Matrix cell evidence" }).textContent).toContain(
      "2 of 3 assigned patents (67%)",
    );
    fireEvent.change(screen.getByRole("textbox", { name: "Find inventor in matrix" }), { target: { value: "nobody" } });
    expect(screen.getByRole("status").textContent).toContain("0 inventor records");
    fireEvent.change(screen.getByRole("textbox", { name: "Find inventor in matrix" }), { target: { value: "" } });
    fireEvent.click(screen.getByText("Choose assignees (2/8)"));
    fireEvent.click(screen.getByRole("checkbox", { name: "Alpha" }));
    fireEvent.click(screen.getByRole("checkbox", { name: "Beta" }));
    expect(screen.getByRole("status").textContent).toContain("0 assignees");
    expect(screen.queryByRole("table")).toBeNull();
  });

  it("provides undirected chord counts and evidence outside the SVG", () => {
    renderPage(<Harness view="chords" initial="companies=assignee:alpha,assignee:beta,assignee:gamma" />);
    expect(screen.getByRole("status").textContent).toContain("3 company pairs");
    fireEvent.keyDown(screen.getByRole("button", { name: "Alpha and Beta: 2 shared inventors" }), { key: " " });
    const evidence = screen.getByRole("region", { name: "Chord evidence" });
    expect(within(evidence).getByRole("link", { name: "Ada" })).toBeDefined();
    expect(within(evidence).getByRole("link", { name: "Bea" })).toBeDefined();
    fireEvent.change(screen.getByRole("combobox", { name: "Minimum shared inventors" }), { target: { value: "3" } });
    expect(screen.getByRole("status").textContent).toContain("0 company pairs");
    expect(screen.queryByRole("group", { name: "Shared inventor chords" })).toBeNull();
  });

  it("renders jointly assigned patents once in evidence lanes and keeps them in both source lists", () => {
    renderPage(<Harness view="evidence" inventor="author:ada" initial="left=assignee:alpha&right=assignee:beta" />);
    const diagram = screen.getByRole("group", { name: "Patent evidence lanes" });
    expect(within(diagram).getAllByRole("button", { name: "Inspect P3" })).toHaveLength(1);
    fireEvent.keyDown(within(diagram).getByRole("button", { name: "Inspect P3" }), { key: "Enter" });
    expect(select).toHaveBeenCalledWith("patent:P3", true);
    expect(screen.getByText("Jointly assigned patents (1)")).toBeDefined();
    expect(screen.getAllByText("Supporting patents (2)")).toHaveLength(2);
  });

  it("retains assignee shares and missing attribution on the focused inventor view", () => {
    renderPage(<Harness view="assignees" inventor="author:ada" />);
    expect(screen.getByText("3 assigned patents · 2 assignees · 1 patent without a named assignee")).toBeDefined();
    expect(screen.getByRole("button", { name: "Alpha: 2 patents, 67%" })).toBeDefined();
    expect(screen.getByText("Patents without named assignees (1)")).toBeDefined();
  });

  it("filters timeline dots by year without hiding undated evidence and cleans up playback", () => {
    vi.useFakeTimers();
    const rendered = renderPage(<Harness view="timeline" inventor="author:ada" initial="year=2005" />);
    const timeline = screen.getByRole("group", { name: "Inventor patent timeline" });
    expect(within(timeline).queryByRole("button", { name: /P3/ })).toBeNull();
    expect(screen.getByRole("status").textContent).toContain("2 distinct dated patents through 2005");
    fireEvent.click(screen.getByRole("button", { name: "Play timeline" }));
    act(() => vi.advanceTimersByTime(900));
    expect((screen.getByRole("slider", { name: "Timeline through year" }) as HTMLInputElement).value).toBe("2006");
    fireEvent.click(screen.getByRole("button", { name: "Show all years" }));
    expect(within(timeline).getAllByRole("button", { name: /P3/ })).toHaveLength(2);
    expect(screen.getByRole("status").textContent).toContain("4 distinct dated patents");
    rendered.unmount();
    expect(vi.getTimerCount()).toBe(0);
    renderPage(<Harness view="timeline" inventor="author:dora" />);
    expect(screen.getByText("No recorded patent years are available for this inventor.")).toBeDefined();
    expect(screen.getByText("Patents with no recorded year (1)")).toBeDefined();
    expect(document.querySelector("svg")).toBeNull();
  });

  it("shows collaborator affiliations and actual coauthored patents, with a cross-group filter", () => {
    renderPage(<Harness view="co-inventors" inventor="author:ada" />);
    const graph = screen.getByRole("group", { name: "Co-inventor network" });
    fireEvent.keyDown(within(graph).getByRole("button", { name: "Ada and Bea: 2 shared patents" }), { key: "Enter" });
    expect(screen.getByRole("region", { name: "Coauthorship evidence" }).textContent).toContain(
      "Jointly authored patents (2)",
    );
    fireEvent.click(screen.getByRole("checkbox", { name: "Show only links across assignee groups" }));
    expect(within(graph).queryByRole("button", { name: "Ada and Bea: 2 shared patents" })).toBeNull();
    expect(screen.getByRole("status").textContent).toContain("2 coauthorship links displayed");
    fireEvent.click(within(graph).getByRole("button", { name: "Cy, 2 assignees" }));
    expect(screen.getByRole("region", { name: "Co-inventor affiliation evidence" }).textContent).toContain("Gamma");
  });

  it("handles an inventor with no co-inventors without inventing links", () => {
    renderPage(<Harness view="co-inventors" inventor="author:dora" />);
    expect(screen.getByText("No co-inventors are recorded on this inventor’s represented patents.")).toBeDefined();
    expect(screen.getByText("All direct collaborators (0)")).toBeDefined();
  });

  it("renders single-assignee and single-year evidence without fabricated second lanes", () => {
    const view = renderPage(<Harness view="evidence" inventor="author:solo" initial="left=unknown&right=__proto__" />);
    expect(screen.getByRole("combobox", { name: "Left assignee" })).toBeDefined();
    expect(screen.queryByRole("combobox", { name: "Right assignee" })).toBeNull();
    expect(screen.getByRole("button", { name: "Inspect P8" })).toBeDefined();
    view.unmount();
    renderPage(<Harness view="timeline" inventor="author:solo" initial="year=Infinity" />);
    expect(screen.getByRole("status").textContent).toContain("1 distinct dated patent through 2000");
    expect((screen.getByRole("button", { name: "Play timeline" }) as HTMLButtonElement).disabled).toBe(true);
    expect(document.querySelector("svg")!.outerHTML).not.toMatch(/NaN|Infinity|undefined/);
  });
});
