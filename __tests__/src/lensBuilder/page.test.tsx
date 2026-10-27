// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, fireEvent, screen, waitFor } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import LensBuilderPage from "../../../src/pages/LensBuilderPage.js";
import { clearBrowserState, installMatchMediaMock, installResizeObserverMock, renderPage } from "../../testUtils.js";
import { parseUntrustedDraft } from "../../../src/lensBuilder/untrusted.js";
import { createTemplate } from "../../../src/lensBuilder/draft.js";
import { exportDataTs, exportJson } from "../../../src/lensBuilder/serialize.js";
import { ALL_CATALOG_KEYS, authoredInputForKey } from "../../../src/utils/catalog/lensCatalog.js";
import { ENABLE_LENS_BUILDER } from "../../../src/utils/featureFlags.js";

beforeEach(() => {
  clearBrowserState();
  installMatchMediaMock(false);
  installResizeObserverMock();
  vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => setTimeout(() => cb(0), 0));
  vi.stubGlobal("cancelAnimationFrame", clearTimeout);
  Object.defineProperty(navigator, "clipboard", {
    configurable: true,
    value: { writeText: vi.fn().mockResolvedValue(undefined) },
  });
  Object.defineProperty(URL, "createObjectURL", { configurable: true, value: vi.fn(() => "blob:builder-test") });
  Object.defineProperty(URL, "revokeObjectURL", { configurable: true, value: vi.fn() });
  vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(() => {});
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

function edit(label: string, value: string) {
  const input = screen.getByLabelText(label);
  fireEvent.change(input, { target: { value } });
  fireEvent.blur(input);
}

describe("lens builder page", () => {
  it("renders a real SVG and editor, rebuilds, and keeps the last valid SVG on errors", async () => {
    expect(ENABLE_LENS_BUILDER).toBe(true);
    const { container } = renderPage(<LensBuilderPage />, { initialEntries: ["/lens-builder/"] });
    expect(await screen.findByRole("heading", { name: "Build your own lens" })).toBeTruthy();
    await screen.findByText("Valid prescription");
    const svg = () => container.querySelector('svg[aria-label^="Lens cross-section"]')?.innerHTML;
    const original = svg();
    expect(original).toBeTruthy();
    edit("L1 thickness", "4.5");
    await waitFor(() => expect(screen.queryByText("Rebuilding…")).toBeNull());
    expect(svg()).not.toBe(original);
    const valid = svg();
    /* A steep front radius passes the element model but fails the geometry check at the rim. */
    edit("L1 front radius", "12");
    await screen.findByText("Showing the last valid version");
    expect(svg()).toBe(valid);
    expect(screen.getAllByText(/surfaces\[0\]/).length).toBeGreaterThan(0);
    expect(screen.getByLabelText("L1 front radius").getAttribute("aria-invalid")).toBe("true");
    expect((screen.getByRole("button", { name: "Download .data.ts" }) as HTMLButtonElement).disabled).toBe(true);
    edit("L1 front radius", "30");
    await screen.findByText("Valid prescription");
    expect((screen.getByLabelText("L1 thickness") as HTMLInputElement).value).toBe("4.5");
  });

  it("downloads and copies the authored export; retains invalid typed text", async () => {
    renderPage(<LensBuilderPage />);
    await screen.findByText("Valid prescription");
    fireEvent.click(screen.getByRole("button", { name: "Copy .data.ts" }));
    await waitFor(() => expect(navigator.clipboard.writeText).toHaveBeenCalledWith(exportDataTs(createTemplate())));
    fireEvent.click(screen.getByRole("button", { name: "Download .data.ts" }));
    const blob = vi.mocked(URL.createObjectURL).mock.calls[0][0] as Blob;
    expect(await blob.text()).toBe(exportDataTs(createTemplate()));
    expect(HTMLAnchorElement.prototype.click).toHaveBeenCalledOnce();
    edit("L1 thickness", "oops");
    expect((screen.getByLabelText("L1 thickness") as HTMLInputElement).value).toBe("oops");
    expect(screen.getByLabelText("L1 thickness").getAttribute("aria-invalid")).toBe("true");
    expect(screen.getByText("Enter a finite number")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Copy .data.ts" }));
    expect(navigator.clipboard.writeText).toHaveBeenLastCalledWith(exportDataTs(createTemplate()));
  });

  it("restores autosave, confirms replacement, and accepts validated Advanced JSON", async () => {
    const draft = createTemplate();
    draft.name = "My saved lens";
    localStorage.setItem("surface-stop-lens-builder-v2", exportJson(draft));
    const confirm = vi.spyOn(window, "confirm").mockReturnValue(false);
    renderPage(<LensBuilderPage />);
    await screen.findByText("Valid prescription");
    expect((screen.getByLabelText("Name") as HTMLInputElement).value).toBe("My saved lens");
    fireEvent.click(screen.getByRole("button", { name: "Reset" }));
    expect(confirm).toHaveBeenCalledOnce();
    expect((screen.getByLabelText("Name") as HTMLInputElement).value).toBe("My saved lens");
    const next = { ...draft, name: "Advanced edit" };
    fireEvent.change(screen.getByLabelText("Advanced JSON"), { target: { value: exportJson(next) } });
    fireEvent.click(screen.getByRole("button", { name: "Apply JSON" }));
    expect((screen.getByLabelText("Name") as HTMLInputElement).value).toBe("Advanced edit");
    await waitFor(() =>
      expect(JSON.parse(localStorage.getItem("surface-stop-lens-builder-v2")!).name).toBe("Advanced edit"),
    );
  });

  it("exercises viewer sliders, analysis dock, the keyboard material picker and the diagram link", async () => {
    installMatchMediaMock(true);
    const { container } = renderPage(<LensBuilderPage />, { initialEntries: ["/lens-builder/"] });
    await screen.findByText("Valid prescription");
    const focus = screen.getByRole("slider", { name: "FOCUS" });
    const aperture = screen.getByRole("slider", { name: "APERTURE" });
    const svg = container.querySelector('svg[aria-label^="Lens cross-section"]')!;
    const before = svg.innerHTML;
    fireEvent.change(focus, { target: { value: "0.5" } });
    expect(svg.innerHTML).not.toBe(before);
    fireEvent.change(aperture, { target: { value: "0.5" } });
    expect((aperture as HTMLInputElement).value).toBe("0.5");
    const dock = screen.getByRole("group", { name: "Aberrations & distortions" });
    const summary = Array.from(dock.querySelectorAll("button")).find((b) => b.textContent?.includes("SUMMARY"))!;
    expect(summary).toBeTruthy();
    fireEvent.click(summary);
    expect(summary.getAttribute("aria-pressed")).toBe("true");
    const chip = screen.getByRole("button", { name: "L1 material" });
    fireEvent.click(chip);
    expect(screen.getByRole("dialog", { name: "Choose material for L1" })).toBeTruthy();
    fireEvent.keyDown(screen.getByLabelText("Search glass for L1"), { key: "Escape" });
    expect(screen.queryByRole("dialog", { name: "Choose material for L1" })).toBeNull();
    expect(document.activeElement).toBe(chip);
    /* Focusing a card's field highlights its element in the diagram; clicking the element there marks its card. */
    const path = () => svg.querySelector('path[aria-label="Select lens element L2"]')!;
    const idle = path().getAttribute("stroke-width");
    const card = screen.getByRole("article", { name: "Element L2" });
    const thickness = screen.getByLabelText("L2 thickness") as HTMLInputElement;
    act(() => thickness.focus());
    await waitFor(() => expect(path().getAttribute("stroke-width")).not.toBe(idle));
    act(() => thickness.blur());
    await waitFor(() => expect(path().getAttribute("stroke-width")).toBe(idle));
    fireEvent.click(path());
    await waitFor(() => expect(card.getAttribute("aria-current")).toBe("true"));
  });

  it("confirms and clears uncommitted invalid text on replacement", async () => {
    const confirm = vi.spyOn(window, "confirm").mockReturnValue(false);
    renderPage(<LensBuilderPage />);
    await screen.findByText("Valid prescription");
    edit("L1 thickness", "oops");
    fireEvent.click(screen.getByRole("button", { name: "Reset" }));
    expect(confirm).toHaveBeenCalledOnce();
    expect((screen.getByLabelText("L1 thickness") as HTMLInputElement).value).toBe("oops");
    confirm.mockReturnValue(true);
    fireEvent.click(screen.getByRole("button", { name: "Reset" }));
    expect((screen.getByLabelText("L1 thickness") as HTMLInputElement).value).toBe("4");
  });

  it("starts from a catalog query and confirms before replacing an autosaved draft", async () => {
    const key = ALL_CATALOG_KEYS.find((key) => parseUntrustedDraft(authoredInputForKey(key)).ok)!;
    const confirm = vi.spyOn(window, "confirm").mockReturnValue(false);
    const view = renderPage(<LensBuilderPage />, { initialEntries: [`/lens-builder/?from=${key}`] });
    await screen.findByRole("heading", { name: "Build your own lens" });
    expect((screen.getByLabelText("Key") as HTMLInputElement).value).toBe(`${key}-copy`);
    expect(confirm).not.toHaveBeenCalled();
    view.unmount();
    localStorage.setItem("surface-stop-lens-builder-v2", exportJson(createTemplate()));
    renderPage(<LensBuilderPage />, { initialEntries: [`/lens-builder/?from=${key}`] });
    await screen.findByRole("heading", { name: "Build your own lens" });
    expect(confirm).toHaveBeenCalledOnce();
    expect((screen.getByLabelText("Name") as HTMLInputElement).value).toBe(createTemplate().name);
    expect(authoredInputForKey(key)?.key).toBe(key);
  });

  it("restores an unfinished draft even when its surface labels fail ingest, falling back to Advanced JSON", async () => {
    const draft = createTemplate();
    draft.surfaces[1].label = "1";
    localStorage.setItem("surface-stop-lens-builder-v2", exportJson(draft));
    renderPage(<LensBuilderPage />);
    await screen.findByText("Showing the last valid version");
    expect(screen.getByText(/surfaces\[1\]\.label/)).toBeTruthy();
    expect(screen.getByText(/Surface labels must be unique/)).toBeTruthy();
    expect(screen.queryByRole("button", { name: "L1 material" })).toBeNull();
    expect((screen.getByLabelText("Advanced JSON").closest("details") as HTMLDetailsElement).open).toBe(true);
  });

  it("works with unavailable storage and renders no browser viewer during SSR", async () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("blocked");
    });
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("blocked");
    });
    renderPage(<LensBuilderPage />);
    await screen.findByText("Valid prescription");
    await act(async () => {});
    const html = renderToString(
      <HelmetProvider>
        <LensBuilderPage />
      </HelmetProvider>,
    );
    expect(html).not.toContain("svg");
    expect(html).not.toContain("textarea");
  });
  it("recovers a malformed autosave, preserves exact bytes, and discards the backup", async () => {
    const bad = JSON.stringify({ ...createTemplate(), zoom: { stations: {} } });
    localStorage.setItem("surface-stop-lens-builder-v2", bad);
    renderPage(<LensBuilderPage />);
    await screen.findByText("Valid prescription");
    expect(screen.getByText(/Rejected autosave saved as a backup/)).toBeTruthy();
    expect(localStorage.getItem("surface-stop-lens-builder-v2-backup")).toBe(bad);
    expect((screen.getByLabelText("Name") as HTMLInputElement).value).toBe(createTemplate().name);
    fireEvent.click(screen.getByRole("button", { name: "Discard backup" }));
    expect(localStorage.getItem("surface-stop-lens-builder-v2-backup")).toBeNull();
    expect(screen.queryByRole("button", { name: "Discard backup" })).toBeNull();
  });

  it("retains the original and pauses autosave when the rejected payload cannot be backed up", async () => {
    const bad = '{"schema":2}';
    localStorage.setItem("surface-stop-lens-builder-v2", bad);
    const originalSet = Storage.prototype.setItem;
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(function (this: Storage, key, value) {
      if (key === "surface-stop-lens-builder-v2-backup") throw new Error("quota");
      originalSet.call(this, key, value);
    });
    renderPage(<LensBuilderPage />);
    await screen.findByText("Valid prescription");
    expect(screen.getByText(/Original retained; autosave paused/)).toBeTruthy();
    edit("Name", "Safe edit");
    expect(localStorage.getItem("surface-stop-lens-builder-v2")).toBe(bad);
    fireEvent.click(screen.getByRole("button", { name: "Discard backup" }));
    await waitFor(() =>
      expect(JSON.parse(localStorage.getItem("surface-stop-lens-builder-v2")!).name).toBe("Safe edit"),
    );
  });

  it("surfaces quota failures in the status line and always offers a reset that clears the saved draft", async () => {
    localStorage.setItem("surface-stop-lens-builder-v2-backup", "bad backup");
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("quota");
    });
    renderPage(<LensBuilderPage />);
    await screen.findByText(/Autosave failed: browser storage/);
    edit("Name", "Edited");
    fireEvent.click(screen.getByRole("button", { name: "Reset draft" }));
    expect((screen.getByLabelText("Name") as HTMLInputElement).value).toBe(createTemplate().name);
    expect(localStorage.getItem("surface-stop-lens-builder-v2-backup")).toBeNull();
  });

  it("rejects unsafe typed edits inline and keeps the committed draft intact", async () => {
    renderPage(<LensBuilderPage />);
    await screen.findByText("Valid prescription");
    edit("Maker", "../../../escape");
    expect(screen.getByText("Maker must form one safe path segment")).toBeTruthy();
    edit("Key", "constructor/escape");
    expect(screen.getByText("Use lowercase words separated by hyphens")).toBeTruthy();
    edit("Name", "Secret\u202elens");
    expect(screen.getByText(/Control characters, BiDi controls/)).toBeTruthy();
    edit("L1 thickness", "1e400");
    expect(screen.getByText("Enter a finite number")).toBeTruthy();
    edit("L1 thickness", "2e18");
    expect(screen.getByText("Magnitude must be at most 1e+18")).toBeTruthy();
    expect(screen.getByLabelText("Maker").getAttribute("maxlength")).toBe("60");
    expect(screen.getByLabelText("Key").getAttribute("maxlength")).toBe("80");
    expect(screen.getByLabelText("L1 description").getAttribute("maxlength")).toBe("200");
    expect(JSON.parse(localStorage.getItem("surface-stop-lens-builder-v2")!)).toEqual(createTemplate());
  });

  it("refuses wrong-typed paste and file imports, and checks file size before reading", async () => {
    renderPage(<LensBuilderPage />);
    await screen.findByText("Valid prescription");
    const draft = createTemplate();
    const bad = JSON.stringify({ ...draft, subtitle: {} });
    fireEvent.change(screen.getByLabelText("Advanced JSON"), { target: { value: bad } });
    fireEvent.click(screen.getByRole("button", { name: "Apply JSON" }));
    expect(screen.getByRole("alert").textContent).toContain("draft.subtitle");
    expect((screen.getByLabelText("Name") as HTMLInputElement).value).toBe(draft.name);
    const file = new File([bad], "bad.json", { type: "application/json" });
    const read = vi.fn().mockResolvedValue(bad);
    Object.defineProperty(file, "text", { value: read });
    fireEvent.change(screen.getByLabelText("Import JSON"), { target: { files: [file] } });
    await waitFor(() => expect(read).toHaveBeenCalledOnce());
    await waitFor(() => expect(screen.getByRole("alert").textContent).toContain("draft.subtitle"));
    Object.defineProperty(file, "size", { value: 1_000_001 });
    fireEvent.change(screen.getByLabelText("Import JSON"), { target: { files: [file] } });
    expect(screen.getByRole("alert").textContent).toContain("at most 1 MB");
    expect(read).toHaveBeenCalledOnce();
    expect(JSON.parse(localStorage.getItem("surface-stop-lens-builder-v2")!)).toEqual(draft);
  });
});
