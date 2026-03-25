/**
 * Reusable SEO head component using react-helmet-async.
 *
 * Sets <title>, meta description, canonical URL, Open Graph, and Twitter Card tags.
 */

import { Helmet } from "react-helmet-async";
import { SITE_NAME } from "../utils/lensMetadata.js";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalURL: string;
  ogType?: string;
}

export default function SEOHead({ title, description, canonicalURL, ogType = "website" }: SEOHeadProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalURL} />

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalURL} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
