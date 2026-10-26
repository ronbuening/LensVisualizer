// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, fireEvent, screen, waitFor } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import LensBuilderPage from "../../../src/pages/LensBuilderPage.js";
import { clearBrowserState, installMatchMediaMock, installResizeObserverMock, renderPage } from "../../testUtils.js";
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
    edit("1 thickness", "4.5");
    await waitFor(() => expect(screen.queryByText("Rebuilding…")).toBeNull());
    expect(svg()).not.toBe(original);
    const valid = svg();
    edit("1 R", "0");
    await screen.findByText("Showing the last valid version");
    expect(svg()).toBe(valid);
    expect(screen.getByText(/surfaces\[0\]/)).toBeTruthy();
    expect((screen.getByRole("button", { name: "Download .data.ts" }) as HTMLButtonElement).disabled).toBe(true);
    edit("1 R", "30");
    await screen.findByText("Valid prescription");
    expect((screen.getByLabelText("1 thickness") as HTMLInputElement).value).toBe("4.5");
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
    edit("1 thickness", "oops");
    expect((screen.getByLabelText("1 thickness") as HTMLInputElement).value).toBe("oops");
    expect(screen.getByLabelText("1 thickness").getAttribute("aria-invalid")).toBe("true");
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

  it("exercises viewer sliders, analysis dock and keyboard glass popover", async () => {
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
    fireEvent.click(screen.getByRole("button", { name: "Choose glass for L1" }));
    expect(screen.getByRole("dialog", { name: "Glass for L1" })).toBeTruthy();
    fireEvent.keyDown(screen.getByLabelText("Search glass for L1"), { key: "Escape" });
    expect(screen.queryByRole("dialog", { name: "Glass for L1" })).toBeNull();
  });

  it("confirms and clears uncommitted invalid text on replacement", async () => {
    const confirm = vi.spyOn(window, "confirm").mockReturnValue(false);
    renderPage(<LensBuilderPage />);
    await screen.findByText("Valid prescription");
    edit("1 thickness", "oops");
    fireEvent.click(screen.getByRole("button", { name: "Reset" }));
    expect(confirm).toHaveBeenCalledOnce();
    expect((screen.getByLabelText("1 thickness") as HTMLInputElement).value).toBe("oops");
    confirm.mockReturnValue(true);
    fireEvent.click(screen.getByRole("button", { name: "Reset" }));
    expect((screen.getByLabelText("1 thickness") as HTMLInputElement).value).toBe("4");
  });

  it("starts from a catalog query and confirms before replacing an autosaved draft", async () => {
    const key = ALL_CATALOG_KEYS[0];
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

  it("restores an unfinished draft even when its surface labels fail ingest", async () => {
    const draft = createTemplate();
    draft.surfaces[1].label = "1";
    localStorage.setItem("surface-stop-lens-builder-v2", exportJson(draft));
    renderPage(<LensBuilderPage />);
    await screen.findByText("Showing the last valid version");
    expect(screen.getAllByLabelText("1 label")).toHaveLength(2);
    expect(screen.getByText(/surfaces\[1\]\.label/)).toBeTruthy();
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
});
