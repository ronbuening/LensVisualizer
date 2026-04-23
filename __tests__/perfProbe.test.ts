import { describe, it, expect, vi, beforeEach } from "vitest";
import { probe, resetPerfProbe } from "../src/utils/perfProbe.js";

// import.meta.env.DEV is true in Vitest (test mode is not production), so the
// probe's timing/logging path runs without any stubbing needed.

describe("perfProbe", () => {
  beforeEach(() => {
    resetPerfProbe();
    vi.restoreAllMocks();
  });

  it("calls fn and returns its value", () => {
    const result = probe("test", () => 42);
    expect(result).toBe(42);
  });

  it("returns the correct value for non-primitive return types", () => {
    const obj = { x: 1 };
    const result = probe("test", () => obj);
    expect(result).toBe(obj);
  });

  it("does not call console.table before LOG_EVERY (10) calls", () => {
    const spy = vi.spyOn(console, "table").mockImplementation(() => {});
    for (let i = 0; i < 9; i++) probe("a", () => i);
    expect(spy).not.toHaveBeenCalled();
  });

  it("calls console.table on the 10th call", () => {
    const spy = vi.spyOn(console, "table").mockImplementation(() => {});
    for (let i = 0; i < 10; i++) probe("a", () => i);
    expect(spy).toHaveBeenCalledOnce();
  });

  it("calls console.table again on the 20th call", () => {
    const spy = vi.spyOn(console, "table").mockImplementation(() => {});
    for (let i = 0; i < 20; i++) probe("a", () => i);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it("tracks multiple probe names independently", () => {
    const spy = vi.spyOn(console, "table").mockImplementation(() => {});
    for (let i = 0; i < 10; i++) probe("foo", () => i);
    for (let i = 0; i < 10; i++) probe("bar", () => i);
    // Each name reaches 10 separately → two log events
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it("resetPerfProbe clears call counts so log fires again at 10", () => {
    const spy = vi.spyOn(console, "table").mockImplementation(() => {});
    for (let i = 0; i < 10; i++) probe("x", () => i);
    expect(spy).toHaveBeenCalledOnce();
    resetPerfProbe();
    spy.mockClear();
    for (let i = 0; i < 9; i++) probe("x", () => i);
    expect(spy).not.toHaveBeenCalled();
    probe("x", () => 99);
    expect(spy).toHaveBeenCalledOnce();
  });
});
