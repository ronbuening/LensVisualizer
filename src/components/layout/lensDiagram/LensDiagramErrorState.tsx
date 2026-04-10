/**
 * LensDiagramErrorState — shared error wrapper for LensDiagramPanel failures.
 *
 * The panel can fail at a few distinct computation stages. Centralizing the
 * fallback UI keeps those branches readable in the hook-heavy parent component.
 */

import { ErrorDisplay } from "../../errors/ErrorBoundary.js";

interface LensDiagramErrorStateProps {
  error: unknown;
  lensKey: string;
  component: string;
  title: string;
}

export default function LensDiagramErrorState({ error, lensKey, component, title }: LensDiagramErrorStateProps) {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 24 }}>
      <ErrorDisplay
        error={error instanceof Error ? error : new Error(String(error))}
        context={{ component, lensKey }}
        title={title}
      />
    </div>
  );
}
