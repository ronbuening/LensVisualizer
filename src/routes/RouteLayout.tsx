/** Apply scrolling after the destination route has committed, including its lazy-loaded content. */

import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { hashFragmentId } from "../utils/seo/siteUrls.js";

export default function RouteLayout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0 });
      return;
    }

    const id = hashFragmentId(hash);
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return <Outlet />;
}
