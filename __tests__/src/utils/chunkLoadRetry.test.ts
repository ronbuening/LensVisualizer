// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { loadChunkWithReload } from "../../../src/utils/chunkLoadRetry.js";

/* Every lazy route and lens-note chunk loads through this guard, so a regression here is either an
 * infinite reload loop after a deploy or no recovery at all. */
const RELOAD_FLAG = "lv-chunk-reload-attempted";

let reload: ReturnType<typeof vi.fn>;

beforeEach(() => {
  sessionStorage.clear();
  reload = vi.fn();
  vi.stubGlobal("location", { ...window.location, reload });
});

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe("loadChunkWithReload", () => {
  it("passes a successful load through without touching the reload flag", async () => {
    await expect(loadChunkWithReload(() => Promise.resolve("module"))).resolves.toBe("module");
    expect(reload).not.toHaveBeenCalled();
    expect(sessionStorage.getItem(RELOAD_FLAG)).toBeNull();
  });

  it("reloads once on the first failure and leaves the caller pending", async () => {
    let settled = false;
    void loadChunkWithReload(() => Promise.reject(new Error("stale chunk"))).then(
      () => (settled = true),
      () => (settled = true),
    );
    await vi.waitFor(() => expect(reload).toHaveBeenCalledTimes(1));
    expect(sessionStorage.getItem(RELOAD_FLAG)).not.toBeNull();
    await Promise.resolve();
    expect(settled).toBe(false);
  });

  it("rethrows instead of reloading again once a reload was attempted this session", async () => {
    sessionStorage.setItem(RELOAD_FLAG, "1");
    await expect(loadChunkWithReload(() => Promise.reject(new Error("still missing")))).rejects.toThrow(
      "still missing",
    );
    expect(reload).not.toHaveBeenCalled();
  });

  it("rethrows without reloading when session storage is unavailable", async () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("storage disabled");
    });
    await expect(loadChunkWithReload(() => Promise.reject(new Error("offline")))).rejects.toThrow("offline");
    expect(reload).not.toHaveBeenCalled();
  });
});
