import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div style={{
        background: "#0c0d10", color: "#e2e8f0", minHeight: "100vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'JetBrains Mono','SF Mono','Fira Code',monospace",
      }}>
        <div style={{ maxWidth: 520, padding: 32, textAlign: "center" }}>
          <h1 style={{ color: "#ff6060", fontSize: 18, marginBottom: 12 }}>
            Rendering Error
          </h1>
          <pre style={{
            background: "rgba(255,60,60,0.08)", border: "1px solid rgba(255,60,60,0.25)",
            borderRadius: 6, padding: 16, whiteSpace: "pre-wrap", wordBreak: "break-word",
            fontSize: 13, color: "#ffa0a0", marginBottom: 20, textAlign: "left",
          }}>
            {this.state.error.message}
          </pre>
          <button
            onClick={() => this.setState({ error: null })}
            style={{
              background: "#00d4e6", color: "#0c0d10", border: "none", borderRadius: 4,
              padding: "8px 20px", cursor: "pointer", fontSize: 13, fontWeight: 600,
              fontFamily: "inherit",
            }}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }
}
