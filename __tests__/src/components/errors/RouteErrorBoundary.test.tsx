// @vitest-environment jsdom

import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { useEffect } from "react";
import { createMemoryRouter, RouterProvider } from "react-router";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import RouteErrorBoundary, { normalizeRouteError } from "../../../../src/components/errors/RouteErrorBoundary.js";

let errorSpy: ReturnType<typeof vi.spyOn>;
// jsdom forwards expected render exceptions through its virtual console unless the window event is handled.
const preventExpectedWindowError = (event: ErrorEvent) => event.preventDefault();

beforeEach(() => {
  errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
  window.addEventListener("error", preventExpectedWindowError);
});

afterEach(() => {
  cleanup();
  window.removeEventListener("error", preventExpectedWindowError);
  errorSpy.mockRestore();
});

describe("RouteErrorBoundary", () => {
  it("replaces React Router's generic fallback with the GitHub reporting flow", async () => {
    function ThrowingRoute(): never {
      const error = new Error("route-render-failed");
      error.stack = "Error: route-render-failed\n  at ThrowingRoute (Route.tsx:12:3)";
      throw error;
    }

    const router = createMemoryRouter(
      [
        {
          path: "/broken",
          Component: ThrowingRoute,
          ErrorBoundary: RouteErrorBoundary,
        },
      ],
      { initialEntries: ["/broken"] },
    );

    render(<RouterProvider router={router} />);

    expect(await screen.findByText("Page Error")).toBeTruthy();
    expect(screen.queryByText("Unexpected Application Error!")).toBeNull();
    expect(screen.getByText("Stack trace")).toBeTruthy();

    const reportLink = screen.getByRole("link", { name: "Report Issue on GitHub" }) as HTMLAnchorElement;
    const issueBody = new URL(reportLink.href).searchParams.get("body") || "";
    expect(issueBody).toContain("route-render-failed");
    expect(issueBody).toContain("ThrowingRoute (Route.tsx:12:3)");
    expect(issueBody).toContain("**Path:** /broken");

    await waitFor(() => expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining("/broken"), expect.any(Error)));
  });

  it("captures startup effect failures like the legacy WebKit crash", async () => {
    function EffectThrowingRoute() {
      useEffect(() => {
        throw new Error("startup-effect-failed");
      }, []);
      return <div>Starting route</div>;
    }

    const router = createMemoryRouter(
      [
        {
          path: "/startup",
          Component: EffectThrowingRoute,
          ErrorBoundary: RouteErrorBoundary,
        },
      ],
      { initialEntries: ["/startup"] },
    );

    render(<RouterProvider router={router} />);

    expect(await screen.findByText("Page Error")).toBeTruthy();
    expect(screen.getAllByText(/startup-effect-failed/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByRole("link", { name: "Report Issue on GitHub" })).toBeTruthy();
  });

  it("normalizes non-Error route responses for the shared reporter", () => {
    expect(normalizeRouteError("route rejected").message).toBe("route rejected");
    expect(normalizeRouteError({ reason: "bad data" }).message).toBe('{"reason":"bad data"}');
  });
});
