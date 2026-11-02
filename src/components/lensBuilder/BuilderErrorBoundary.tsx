import { Component, type ReactNode } from "react";
import type { Theme } from "../../types/theme.js";
import { builderButtonStyle } from "./CommitInput.js";

/** Draft failures never report private draft data and always leave a local recovery action. */
export default class BuilderErrorBoundary extends Component<
  { children: ReactNode; onReset: () => void; theme?: Theme },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed)
      return (
        <div role="alert" style={{ padding: 24, color: this.props.theme?.body }}>
          <p>The draft could not be displayed.</p>
          <button
            type="button"
            onClick={this.props.onReset}
            style={this.props.theme ? builderButtonStyle(this.props.theme) : undefined}
          >
            Reset draft
          </button>
        </div>
      );
    return this.props.children;
  }
}
