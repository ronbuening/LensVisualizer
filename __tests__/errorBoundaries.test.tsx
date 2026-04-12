// @vitest-environment jsdom

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import ErrorBoundary, { ErrorDisplay } from "../src/components/errors/ErrorBoundary.js";
import PanelErrorBoundary from "../src/components/errors/PanelErrorBoundary.js";

/* Suppress React error boundary console noise */
let errorSpy: ReturnType<typeof vi.spyOn>;
beforeEach(() => {
  errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
});
afterEach(() => {
  cleanup();
  errorSpy.mockRestore();
});

/* ── Helper: component that throws ── */
function ThrowingChild({ shouldThrow = true }: { shouldThrow?: boolean }) {
  if (shouldThrow) throw new Error("Test error message");
  return <div>Child rendered OK</div>;
}

/* ═══════════════════════════════════════════════════════════════════════
 * ErrorDisplay (named export — reusable error UI)
 * ═══════════════════════════════════════════════════════════════════════ */
describe("ErrorDisplay", () => {
  it("renders the error message", () => {
    const error = new Error("display-test-msg");
    render(<ErrorDisplay error={error} context={{}} />);
    // The message appears in the pre element; may also appear in the stack
    expect(screen.getAllByText(/display-test-msg/).length).toBeGreaterThanOrEqual(1);
  });

  it("renders a default title", () => {
    render(<ErrorDisplay error={new Error("x")} context={{}} />);
    expect(screen.getByText("Rendering Error")).toBeTruthy();
  });

  it("renders a custom title", () => {
    render(<ErrorDisplay error={new Error("x")} context={{}} title="Custom Title" />);
    expect(screen.getByText("Custom Title")).toBeTruthy();
  });

  it("renders the 'Report Issue on GitHub' link", () => {
    render(<ErrorDisplay error={new Error("link-test")} context={{}} />);
    const links = screen.getAllByText("Report Issue on GitHub");
    expect(links.length).toBeGreaterThanOrEqual(1);
    const link = links[0];
    expect(link.tagName).toBe("A");
    expect((link as HTMLAnchorElement).href).toContain("github.com");
  });

  it("renders a Retry button when onRetry is provided", () => {
    const onRetry = vi.fn();
    render(<ErrorDisplay error={new Error("x")} context={{}} onRetry={onRetry} />);
    const btn = screen.getByText("Retry");
    expect(btn).toBeTruthy();
    fireEvent.click(btn);
    expect(onRetry).toHaveBeenCalledOnce();
  });

  it("does not render a Retry button when onRetry is not provided", () => {
    render(<ErrorDisplay error={new Error("x")} context={{}} />);
    expect(screen.queryByText("Retry")).toBeNull();
  });

  it("renders a stack trace in a details element when error has stack", () => {
    const error = new Error("x");
    error.stack = "Error: x\n  at foo (bar.ts:1:1)";
    render(<ErrorDisplay error={error} context={{}} />);
    expect(screen.getByText("Stack trace")).toBeTruthy();
  });

  it("handles null error gracefully", () => {
    render(<ErrorDisplay error={null} context={{}} />);
    // Should not crash
    expect(screen.getByText("Rendering Error")).toBeTruthy();
  });
});

/* ═══════════════════════════════════════════════════════════════════════
 * ErrorBoundary (default export — top-level app boundary)
 * ═══════════════════════════════════════════════════════════════════════ */
describe("ErrorBoundary", () => {
  it("renders children when no error", () => {
    render(
      <ErrorBoundary>
        <div>Hello</div>
      </ErrorBoundary>,
    );
    expect(screen.getByText("Hello")).toBeTruthy();
  });

  it("shows fallback UI when child throws", () => {
    render(
      <ErrorBoundary>
        <ThrowingChild />
      </ErrorBoundary>,
    );
    expect(screen.getByText("Rendering Error")).toBeTruthy();
    expect(screen.getAllByText(/Test error message/).length).toBeGreaterThanOrEqual(1);
  });

  it("shows a Report Issue link in the fallback", () => {
    render(
      <ErrorBoundary>
        <ThrowingChild />
      </ErrorBoundary>,
    );
    expect(screen.getByText("Report Issue on GitHub")).toBeTruthy();
  });

  it("provides a Retry button that re-renders children", () => {
    let shouldThrow = true;
    function ConditionalThrow() {
      if (shouldThrow) throw new Error("temporary");
      return <div>Recovered!</div>;
    }
    render(
      <ErrorBoundary>
        <ConditionalThrow />
      </ErrorBoundary>,
    );
    expect(screen.getAllByText(/temporary/).length).toBeGreaterThanOrEqual(1);

    shouldThrow = false;
    fireEvent.click(screen.getByText("Retry"));
    expect(screen.getByText("Recovered!")).toBeTruthy();
  });
});

/* ═══════════════════════════════════════════════════════════════════════
 * PanelErrorBoundary — panel-level boundary that resets on lensKey change
 * ═══════════════════════════════════════════════════════════════════════ */
describe("PanelErrorBoundary", () => {
  it("renders children when no error", () => {
    render(
      <PanelErrorBoundary lensKey="lens-a">
        <div>Panel content</div>
      </PanelErrorBoundary>,
    );
    expect(screen.getByText("Panel content")).toBeTruthy();
  });

  it("shows ErrorDisplay when child throws", () => {
    render(
      <PanelErrorBoundary lensKey="lens-a">
        <ThrowingChild />
      </PanelErrorBoundary>,
    );
    expect(screen.getByText("Diagram Rendering Error")).toBeTruthy();
    expect(screen.getAllByText(/Test error message/).length).toBeGreaterThanOrEqual(1);
  });

  it("shows a Retry button", () => {
    render(
      <PanelErrorBoundary lensKey="lens-a">
        <ThrowingChild />
      </PanelErrorBoundary>,
    );
    expect(screen.getByText("Retry")).toBeTruthy();
  });

  it("resets error state when lensKey changes", () => {
    let shouldThrow = true;
    function ConditionalThrow() {
      if (shouldThrow) throw new Error("broken-panel");
      return <div>Fixed!</div>;
    }

    const { rerender } = render(
      <PanelErrorBoundary lensKey="lens-a">
        <ConditionalThrow />
      </PanelErrorBoundary>,
    );
    expect(screen.getAllByText(/broken-panel/).length).toBeGreaterThanOrEqual(1);

    shouldThrow = false;
    rerender(
      <PanelErrorBoundary lensKey="lens-b">
        <ConditionalThrow />
      </PanelErrorBoundary>,
    );
    expect(screen.getByText("Fixed!")).toBeTruthy();
  });

  it("Retry button clears error state", () => {
    let shouldThrow = true;
    function ConditionalThrow() {
      if (shouldThrow) throw new Error("panel-temp-error");
      return <div>Panel OK</div>;
    }
    render(
      <PanelErrorBoundary lensKey="lens-a">
        <ConditionalThrow />
      </PanelErrorBoundary>,
    );
    expect(screen.getAllByText(/panel-temp-error/).length).toBeGreaterThanOrEqual(1);

    shouldThrow = false;
    fireEvent.click(screen.getByText("Retry"));
    expect(screen.getByText("Panel OK")).toBeTruthy();
  });
});
