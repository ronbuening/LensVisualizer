/**
 * PanelErrorBoundary — Panel-level error boundary that resets automatically
 * when lensKey changes. Shows an ErrorDisplay with retry option.
 */
import { Component } from "react";
import type { ReactNode, ErrorInfo } from "react";
import { ErrorDisplay } from "./ErrorBoundary.js";

interface PanelErrorBoundaryProps {
  lensKey: string;
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
            lensKey: this.props.lensKey,
            componentStack: this.state.componentStack || undefined,
          }}
          title="Diagram Rendering Error"
          onRetry={() => this.setState({ error: null, componentStack: null })}
        />
      </div>
    );
  }
}
