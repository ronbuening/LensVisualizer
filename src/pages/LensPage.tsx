/**
 * Individual lens page — /lens/:slug
 *
 * Renders the interactive visualizer pre-loaded with the specified lens,
 * plus SEO-friendly text content (specs, description, element list).
 */

import { useParams, Navigate } from "react-router";
import LensVisualization from "../components/layout/LensViewer.js";
import SEOHead from "../components/SEOHead.js";
import { LENS_CATALOG, CATALOG_KEYS } from "../utils/lensCatalog.js";
import { lensPageTitle, lensPageDescription, lensCanonicalURL } from "../utils/lensMetadata.js";

export default function LensPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !CATALOG_KEYS.includes(slug)) {
    return <Navigate to="/lenses" replace />;
  }

  const lens = LENS_CATALOG[slug];

  return (
    <>
      <SEOHead
        title={lensPageTitle(lens)}
        description={lensPageDescription(lens)}
        canonicalURL={lensCanonicalURL(slug)}
        ogType="article"
      />
      <LensVisualization initialLensKey={slug} />
    </>
  );
}
