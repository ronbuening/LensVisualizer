// @vitest-environment jsdom
import type { ReactNode } from "react";
import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { cleanup, fireEvent, screen, waitFor } from "@testing-library/react";
import { clearBrowserState, installMatchMediaMock, installResizeObserverMock, renderPage } from "../../testUtils.js";
import LensBuilderPage from "../../../src/pages/LensBuilderPage.js";
import { createTemplate } from "../../../src/lensBuilder/draft.js";
import { STORAGE_KEY, BACKUP_KEY } from "../../../src/lensBuilder/storage.js";

const viewer = vi.hoisted(() => ({ telemetryId: "", lensKey: "", fail: false }));
vi.mock("../../../src/components/layout/SingleLensContent.js", () => ({
  default: (props: { telemetryId?: string; lensKey: string; sidePanel: ReactNode }) => {
    viewer.telemetryId = props.telemetryId ?? "";
    viewer.lensKey = props.lensKey;
    if (viewer.fail) throw new Error("private-project-name");
    return <>{props.sidePanel}</>;
  },
}));
beforeEach(() => {
  clearBrowserState();
  installMatchMediaMock(false);
  installResizeObserverMock();
  viewer.fail = false;
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

it("passes only a constant telemetry id as the draft key changes", async () => {
  renderPage(<LensBuilderPage />);
  await screen.findByText("Valid prescription");
  fireEvent.change(screen.getByLabelText("Key"), { target: { value: "confidential-project" } });
  fireEvent.blur(screen.getByLabelText("Key"));
  await waitFor(() => expect(viewer.lensKey).toBe("confidential-project"));
  expect(viewer.telemetryId).toBe("lens-builder");
});

it("recovers a diagram render failure with Reset draft and clears both stored payloads", async () => {
  vi.spyOn(console, "error").mockImplementation(() => {});
  const privateDraft = { ...createTemplate(), name: "Private draft" };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(privateDraft));
  localStorage.setItem(BACKUP_KEY, "rejected bytes");
  viewer.fail = true;
  renderPage(<LensBuilderPage />);
  await screen.findByRole("alert");
  expect(screen.getByRole("alert").textContent).not.toContain("private-project-name");
  viewer.fail = false;
  fireEvent.click(screen.getByRole("button", { name: "Reset draft" }));
  await screen.findByText("Valid prescription");
  expect((screen.getByLabelText("Name") as HTMLInputElement).value).toBe(createTemplate().name);
  expect(localStorage.getItem(BACKUP_KEY)).toBeNull();
  expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
});
