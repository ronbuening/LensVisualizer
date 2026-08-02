/**
 * React Router catches route render and lazy-load failures before the outer
 * app boundary can see them. Replace its generic fallback with the same
 * stack-aware GitHub reporting flow used by the rest of the application.
 */

import { useEffect, useMemo } from "react";
import { isRouteErrorResponse, useLocation, useRouteError } from "react-router";
import { reportErrorBeacon } from "../../utils/errorBeacon.js";
import { FullPageErrorDisplay } from "./ErrorBoundary.js";

function describeRouteErrorData(data: unknown): string {
  if (typeof data === "string") return data;
  try {
    const serialized = JSON.stringify(data);
    if (serialized) return serialized;
  } catch {
    /* Fall through to the safe string conversion below. */
  }
  try {
    return String(data);
  } catch {
    return "Unknown route error";
  }
}

/** Normalize every value React Router permits into the ErrorDisplay contract. */
export function normalizeRouteError(routeError: unknown): Error {
  if (routeError instanceof Error) return routeError;

  if (isRouteErrorResponse(routeError)) {
    const status = `${routeError.status}${routeError.statusText ? ` ${routeError.statusText}` : ""}`;
    const detail = describeRouteErrorData(routeError.data);
    const error = new Error(detail ? `${status}: ${detail}` : status);
    error.name = "RouteErrorResponse";
    return error;
  }

  return new Error(describeRouteErrorData(routeError));
}

export default function RouteErrorBoundary() {
  const routeError = useRouteError();
  const error = useMemo(() => normalizeRouteError(routeError), [routeError]);
  const path = useLocation().pathname;

  useEffect(() => {
    console.error(`[LensVisualizer] Route error at "${path}":`, error);
    reportErrorBeacon("route-error-boundary", error, path);
  }, [error, path]);

  return (
    <FullPageErrorDisplay
      error={error}
      context={{
        component: "React Router",
        extra: `- **Path:** ${path}`,
      }}
      title="Page Error"
      onRetry={() => window.location.reload()}
    />
  );
}
