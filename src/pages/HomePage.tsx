/**
 * Home page — default lens visualizer view.
 *
 * Handles legacy ?lens=KEY redirects to /lens/KEY.
 * During SSR, renders SEO text content; the interactive visualizer
 * mounts client-side.
 */

import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router";
import LensVisualization from "../components/layout/LensViewer.js";
import SEOHead from "../components/SEOHead.js";
import ClientOnly from "../components/ClientOnly.js";
import { CATALOG_KEYS } from "../utils/lensCatalog.js";
import { SITE_NAME, SITE_URL } from "../utils/lensMetadata.js";

export default function HomePage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  /* Redirect legacy ?lens=KEY URLs to /lens/KEY */
  useEffect(() => {
    const lensKey = searchParams.get("lens");
    if (lensKey && CATALOG_KEYS.includes(lensKey)) {
      void navigate(`/lens/${lensKey}`, { replace: true });
    }
  }, [searchParams, navigate]);

  return (
    <>
      <SEOHead
        title={`${SITE_NAME} — Interactive Lens Cross-Section Visualizer`}
        description="Explore real camera lens designs with interactive cross-section diagrams, ray tracing, focus and aperture adjustment, element inspection, and chromatic aberration analysis. Built from optical patent data."
        canonicalURL={`${SITE_URL}/`}
      />
      <ClientOnly>
        <LensVisualization />
      </ClientOnly>
    </>
  );
}
