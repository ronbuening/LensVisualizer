/**
 * ErrorBoundary — error handling UI with two exports.
 *
 * • ErrorDisplay (named export) — reusable error card with a pre-filled
 *   "Report Issue" link to GitHub. Used standalone inside LensDiagramPanel's
 *   panel-level boundary and anywhere else an error needs rendering.
 *
 * • ErrorBoundary (default export) — React class-based error boundary that
 *   wraps the entire app in main.jsx. Catches unhandled render-phase errors
 *   and displays ErrorDisplay as a full-page fallback.
 *
 * Both use hardcoded dark-theme colors (FALLBACK) so they render correctly
 * even when the theme context is unavailable (e.g. the error occurred
 * before the theme loaded).
 */

import { Component } from "react";
import type { ReactNode, ErrorInfo, CSSProperties } from "react";
import { buildIssueURL, REPO_URL } from "../utils/errorReporting.js";

interface ErrorDisplayProps {
  error: Error | null;
  context: Record<string, string>;
  onRetry?: () => void;
  title?: string;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
  componentStack: string | null;
}

/* ── Shared styles (dark fallback — used when theme is unavailable) ── */
const FALLBACK = {
  bg: "#0c0d10",
  text: "#e2e8f0",
  errorTitle: "#ff6060",
  errorText: "#ffa0a0",
  errorBg: "rgba(255,60,60,0.08)",
  errorBorder: "rgba(255,60,60,0.25)",
  btnBg: "#00d4e6",
  btnText: "#0c0d10",
  linkBg: "transparent",
  linkBorder: "#ff6060",
  linkText: "#ffa0a0",
  mutedText: "#888",
};

/* ── Hoisted static styles (all reference FALLBACK, which is module-level) ── */
const ERROR_DISPLAY_CONTAINER: CSSProperties = {
  maxWidth: 560,
  padding: 24,
  textAlign: "center",
  fontFamily: "'JetBrains Mono','SF Mono','Fira Code',monospace",
};

const ERROR_PRE_BASE: CSSProperties = {
  background: FALLBACK.errorBg,
  border: `1px solid ${FALLBACK.errorBorder}`,
  borderRadius: 6,
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
  textAlign: "left",
  overflowY: "auto",
};

const ERROR_ACTIONS_ROW: CSSProperties = { display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" };

const RETRY_BTN_STYLE: CSSProperties = {
  background: FALLBACK.btnBg,
  color: FALLBACK.btnText,
  border: "none",
  borderRadius: 4,
  padding: "7px 18px",
  cursor: "pointer",
  fontSize: 12,
  fontWeight: 600,
  fontFamily: "inherit",
};

const REPORT_LINK_STYLE: CSSProperties = {
  display: "inline-block",
  background: FALLBACK.linkBg,
  border: `1.5px solid ${FALLBACK.linkBorder}`,
  borderRadius: 4,
  padding: "6px 16px",
  fontSize: 12,
  fontWeight: 600,
  color: FALLBACK.linkText,
  textDecoration: "none",
  fontFamily: "inherit",
  cursor: "pointer",
};

const BOUNDARY_WRAPPER: CSSProperties = {
  background: FALLBACK.bg,
  color: FALLBACK.text,
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "'JetBrains Mono','SF Mono','Fira Code',monospace",
};

/**
 * ErrorDisplay — reusable error UI with "Report Issue" link.
 *
 * Can be used standalone (e.g. inside LensDiagramPanel) or by
 * the ErrorBoundary class.  When no theme is provided, uses
 * hardcoded dark-theme colors.
 *
 * @param {Object}   props
 * @param {Error}    props.error    — the caught error object
 * @param {Object}   props.context  — extra context passed to the GitHub issue builder
 *                                    (e.g. { component, lensKey })
 * @param {Function} [props.onRetry] — if provided, shows a "Retry" button that
 *                                     resets error state in the parent boundary
 * @param {string}   [props.title]   — heading text shown above the error message
 */
export function ErrorDisplay({ error, context, onRetry, title = "Rendering Error" }: ErrorDisplayProps) {
  /* Build a pre-filled GitHub issue URL; fall back to bare /issues/new on failure */
  let issueURL;
  try {
    issueURL = buildIssueURL(error!, context);
  } catch {
    issueURL = `${REPO_URL}/issues/new`;
  }

  return (
    <div style={ERROR_DISPLAY_CONTAINER}>
      <h2 style={{ color: FALLBACK.errorTitle, fontSize: 16, marginBottom: 10 }}>{title}</h2>
      <pre
        style={{
          ...ERROR_PRE_BASE,
          padding: 14,
          fontSize: 12,
          color: FALLBACK.errorText,
          marginBottom: 12,
          maxHeight: 180,
        }}
      >
        {error?.message || String(error)}
      </pre>

      {error?.stack && (
        <details style={{ textAlign: "left", marginBottom: 14 }}>
          <summary style={{ cursor: "pointer", fontSize: 11, color: FALLBACK.mutedText, marginBottom: 6 }}>
            Stack trace
          </summary>
          <pre style={{ ...ERROR_PRE_BASE, padding: 10, fontSize: 10, color: FALLBACK.mutedText, maxHeight: 200 }}>
            {error.stack}
          </pre>
        </details>
      )}

      <div style={ERROR_ACTIONS_ROW}>
        {onRetry && (
          <button onClick={onRetry} style={RETRY_BTN_STYLE}>
            Retry
          </button>
        )}
        <a href={issueURL} target="_blank" rel="noopener noreferrer" style={REPORT_LINK_STYLE}>
          Report Issue on GitHub
        </a>
      </div>
    </div>
  );
}

/**
 * Top-level React error boundary.
 * Wraps the entire app in main.jsx.  Catches unhandled render-phase errors.
 */
export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null, componentStack: null };
  }

  /* React calls this during the render phase — synchronously captures the error
   * so the next render can show the fallback UI instead of the broken tree. */
  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { error };
  }

  /* Called after the error is committed — used for logging and capturing the
   * component stack trace (which component tree led to the error). */
  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error("[LensVisualizer] Uncaught render error:", error, info?.componentStack);
    this.setState({ componentStack: info?.componentStack || null });
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div style={BOUNDARY_WRAPPER}>
        <ErrorDisplay
          error={this.state.error}
          context={{ component: "ErrorBoundary (top-level)" }}
          title="Rendering Error"
          onRetry={() => this.setState({ error: null, componentStack: null })}
        />
      </div>
    );
  }
}
