import { Component, type ReactNode } from "react";

/** Draft failures never report private draft data and always leave a local recovery action. */
export default class BuilderErrorBoundary extends Component<
  { children: ReactNode; onReset: () => void },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed)
      return (
        <div role="alert" style={{ padding: 24 }}>
          <p>The draft could not be displayed.</p>
          <button type="button" onClick={this.props.onReset}>
            Reset draft
          </button>
        </div>
      );
    return this.props.children;
  }
}
