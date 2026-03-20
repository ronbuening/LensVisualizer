import { Component } from "react";
import { buildIssueURL, REPO_URL } from "../utils/errorReporting.js";

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

/**
 * ErrorDisplay — reusable error UI with "Report Issue" link.
 *
 * Can be used standalone (e.g. inside LensDiagramPanel) or by
 * the ErrorBoundary class.  When no theme is provided, uses
 * hardcoded dark-theme colors.
 */
export function ErrorDisplay({ error, context, onRetry, title = "Rendering Error" }) {
  let issueURL;
  try { issueURL = buildIssueURL(error, context); } catch { issueURL = `${REPO_URL}/issues/new`; }

  return (
    <div style={{
      maxWidth: 560, padding: 24, textAlign: "center",
      fontFamily: "'JetBrains Mono','SF Mono','Fira Code',monospace",
    }}>
      <h2 style={{ color: FALLBACK.errorTitle, fontSize: 16, marginBottom: 10 }}>
        {title}
      </h2>
      <pre style={{
        background: FALLBACK.errorBg, border: `1px solid ${FALLBACK.errorBorder}`,
        borderRadius: 6, padding: 14, whiteSpace: "pre-wrap", wordBreak: "break-word",
        fontSize: 12, color: FALLBACK.errorText, marginBottom: 12, textAlign: "left",
        maxHeight: 180, overflowY: "auto",
      }}>
        {error?.message || String(error)}
      </pre>

      {error?.stack && (
        <details style={{ textAlign: "left", marginBottom: 14 }}>
          <summary style={{ cursor: "pointer", fontSize: 11, color: FALLBACK.mutedText, marginBottom: 6 }}>
            Stack trace
          </summary>
          <pre style={{
            background: FALLBACK.errorBg, border: `1px solid ${FALLBACK.errorBorder}`,
            borderRadius: 6, padding: 10, whiteSpace: "pre-wrap", wordBreak: "break-word",
            fontSize: 10, color: FALLBACK.mutedText, maxHeight: 200, overflowY: "auto",
          }}>
            {error.stack}
          </pre>
        </details>
      )}

      <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
        {onRetry && (
          <button
            onClick={onRetry}
            style={{
              background: FALLBACK.btnBg, color: FALLBACK.btnText, border: "none", borderRadius: 4,
              padding: "7px 18px", cursor: "pointer", fontSize: 12, fontWeight: 600,
              fontFamily: "inherit",
            }}
          >
            Retry
          </button>
        )}
        <a
          href={issueURL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block", background: FALLBACK.linkBg,
            border: `1.5px solid ${FALLBACK.linkBorder}`, borderRadius: 4,
            padding: "6px 16px", fontSize: 12, fontWeight: 600,
            color: FALLBACK.linkText, textDecoration: "none",
            fontFamily: "inherit", cursor: "pointer",
          }}
        >
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
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, componentStack: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error("[LensVisualizer] Uncaught render error:", error, info?.componentStack);
    this.setState({ componentStack: info?.componentStack || null });
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div style={{
        background: FALLBACK.bg, color: FALLBACK.text, minHeight: "100vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'JetBrains Mono','SF Mono','Fira Code',monospace",
      }}>
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
