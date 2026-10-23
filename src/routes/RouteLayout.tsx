/** Apply scrolling after the destination route has committed, including its lazy-loaded content. */

import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

export default function RouteLayout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0 });
      return;
    }

    let id = hash.slice(1);
    try {
      id = decodeURIComponent(id);
    } catch {
      // A malformed escape can still be part of a literal element id.
    }
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return <Outlet />;
}
