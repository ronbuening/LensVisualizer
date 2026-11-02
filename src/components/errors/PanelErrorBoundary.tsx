/**
 * PanelErrorBoundary — Panel-level error boundary that resets automatically
 * when lensKey changes. Shows an ErrorDisplay with retry option. A panel whose
 * key is private draft data passes `telemetryId`, which replaces the key in the
 * error beacon and the issue link.
 */
import { Component } from "react";
import type { ReactNode, ErrorInfo } from "react";
import { ErrorDisplay } from "./ErrorBoundary.js";
import { reportErrorBeacon } from "../../utils/errorBeacon.js";

interface PanelErrorBoundaryProps {
  lensKey: string;
  /** Constant id reported in place of `lensKey`; the beacon then also omits the error message. */
  telemetryId?: string;
  children: ReactNode;
}

interface PanelErrorBoundaryState {
  error: Error | null;
  componentStack: string | null;
}

export default class PanelErrorBoundary extends Component<PanelErrorBoundaryProps, PanelErrorBoundaryState> {
  constructor(props: PanelErrorBoundaryProps) {
    super(props);
    this.state = { error: null, componentStack: null };
  }
  static getDerivedStateFromError(error: Error): Partial<PanelErrorBoundaryState> {
    return { error };
  }
  componentDidCatch(error: Error, info: ErrorInfo): void {
    const stack = info?.componentStack || null;
    console.error(`[LensDiagramPanel] Render error for lens "${this.props.lensKey}":`, error, stack);
    reportErrorBeacon("lens-diagram-panel", error, this.props.lensKey, { telemetryId: this.props.telemetryId });
    this.setState({ componentStack: stack });
  }
  componentDidUpdate(prevProps: PanelErrorBoundaryProps): void {
    if (prevProps.lensKey !== this.props.lensKey) this.setState({ error: null, componentStack: null });
  }
  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: 24 }}>
        <ErrorDisplay
          error={this.state.error}
          context={{
            component: "LensDiagramPanel",
            lensKey: this.props.telemetryId ?? this.props.lensKey,
            componentStack: this.state.componentStack || undefined,
          }}
          title="Diagram Rendering Error"
          onRetry={() => this.setState({ error: null, componentStack: null })}
        />
      </div>
    );
  }
}
