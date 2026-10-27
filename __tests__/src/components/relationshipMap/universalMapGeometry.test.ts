import { describe, expect, it } from "vitest";
import {
  boundsIntersect,
  directionalUniversalNode,
  placeUniversalLabels,
  universalEdgeCurve,
} from "../../../../src/components/relationshipMap/universalMapGeometry.js";
import type {
  UniversalLayoutEdge,
  UniversalLayoutNode,
} from "../../../../src/components/relationshipMap/universalLayout.js";

function node(id: string, x: number, y: number, r = 4): UniversalLayoutNode {
  return { id, x, y, r, kind: "patent", label: id, fullLabel: id, componentIndex: 0, clusterId: "cluster" };
}

const bounds = { x: 0, y: 0, width: 1000, height: 600 };

describe("universalMapGeometry", () => {
  it("intersects touching bounds and culls wholly offscreen bounds on either axis", () => {
    expect(boundsIntersect(bounds, { x: 1000, y: 600, width: 20, height: 20 })).toBe(true);
    expect(boundsIntersect(bounds, { x: 1001, y: 0, width: 20, height: 20 })).toBe(false);
    expect(boundsIntersect(bounds, { x: 0, y: -21, width: 20, height: 20 })).toBe(false);
    expect(boundsIntersect({ x: 10, y: 10, width: 2, height: 2 }, bounds)).toBe(true);
  });

  it.each([0.2, 1, 3])("places priority labels first without overlaps at scale %s", (scale) => {
    const nodes = Array.from({ length: 200 }, (_, i) =>
      node(`node-${i}`, 100 + (i % 20) * 40, 50 + Math.floor(i / 20) * 50),
    );
    const labels = placeUniversalLabels(nodes, bounds, scale, ["node-100", "node-101"], new Set(["node-0"]));
    expect(labels[0].id).toBe("node-100");
    for (const [i, label] of labels.entries()) {
      expect(label.box.x).toBeGreaterThanOrEqual(0);
      expect(label.box.y).toBeGreaterThanOrEqual(0);
      expect(label.box.x + label.box.width).toBeLessThanOrEqual(bounds.width * scale);
      expect(label.box.y + label.box.height).toBeLessThanOrEqual(bounds.height * scale);
      for (const other of labels.slice(i + 1)) expect(boundsIntersect(label.box, other.box)).toBe(false);
    }
  });

  it("keeps a selected label at the viewport edge even when its usual placements cannot fit", () => {
    const selected = node("selected", 999, 599);
    const labels = placeUniversalLabels([selected], bounds, 1, [selected.id], new Set());
    expect(labels).toHaveLength(1);
    expect(labels[0].box.x + labels[0].box.width).toBeLessThanOrEqual(1000);
    expect(labels[0].box.y + labels[0].box.height).toBeLessThanOrEqual(600);
  });

  it("keeps labels out of blocked screen areas and never floats an offscreen selection's label", () => {
    const blocked = { x: 100, y: 80, width: 200, height: 40 };
    const [label] = placeUniversalLabels([node("hub", 100, 100)], bounds, 1, [], new Set(["hub"]), [blocked]);
    expect(boundsIntersect(label.box, blocked)).toBe(false);
    expect(label.box.x + label.box.width).toBeLessThanOrEqual(100);
    expect(placeUniversalLabels([node("selected", 5000, 200)], bounds, 1, ["selected"], new Set())).toEqual([]);
  });

  it("shows hubs at fit scale and adds smaller nodes as their screen radius grows", () => {
    const nodes = [node("hub", 200, 200), node("small", 600, 200), node("offscreen", 5000, 200)];
    const hubIds = new Set(["hub"]);
    expect(placeUniversalLabels(nodes, bounds, 0.25, [], hubIds).map((label) => label.id)).toEqual(["hub"]);
    expect(placeUniversalLabels(nodes, bounds, 1, [], hubIds).map((label) => label.id)).toEqual(["hub", "small"]);
  });

  it.each([
    [0, 0, 200, 0],
    [0, 0, 0, 200],
    [200, 300, -100, -50],
    [20, 20, 20, 20],
  ])("bounds the entire quadratic curve from (%s, %s) to (%s, %s)", (x1, y1, x2, y2) => {
    const edge: UniversalLayoutEdge = { id: "edge", from: "a", to: "b", x1, y1, x2, y2 };
    const curved = universalEdgeCurve(edge, true);
    const straight = universalEdgeCurve(edge, false);
    expect(straight.bounds).toEqual({
      x: Math.min(x1, x2),
      y: Math.min(y1, y2),
      width: Math.abs(x2 - x1),
      height: Math.abs(y2 - y1),
    });
    const [, , , , cx, cy] = curved.d.split(" ");
    for (let i = 0; i <= 20; i++) {
      const t = i / 20;
      const x = (1 - t) ** 2 * x1 + 2 * (1 - t) * t * Number(cx) + t ** 2 * x2;
      const y = (1 - t) ** 2 * y1 + 2 * (1 - t) * t * Number(cy) + t ** 2 * y2;
      expect(x).toBeGreaterThanOrEqual(curved.bounds.x - 1e-10);
      expect(x).toBeLessThanOrEqual(curved.bounds.x + curved.bounds.width + 1e-10);
      expect(y).toBeGreaterThanOrEqual(curved.bounds.y - 1e-10);
      expect(y).toBeLessThanOrEqual(curved.bounds.y + curved.bounds.height + 1e-10);
    }
    if (x1 !== x2 || y1 !== y2) expect(curved.d).not.toBe(straight.d);
  });

  it("picks the nearest directionally aligned node with deterministic ties and no wrap", () => {
    const current = node("current", 0, 0);
    const right = node("right", 20, 0);
    const left = node("left", -20, 0);
    const up = node("up", 0, -20);
    const down = node("down", 0, 20);
    const nodes = [current, node("diagonal", 15, 15), down, up, left, right];
    for (const [key, expected] of [
      ["ArrowRight", right],
      ["ArrowLeft", left],
      ["ArrowUp", up],
      ["ArrowDown", down],
    ] as const) {
      expect(directionalUniversalNode(nodes, current, key)).toBe(expected);
    }
    expect(directionalUniversalNode([current, left], current, "ArrowRight")).toBeUndefined();
    expect(directionalUniversalNode([node("b", 20, 0), node("a", 20, 0)], current, "ArrowRight")?.id).toBe("a");
  });
});
