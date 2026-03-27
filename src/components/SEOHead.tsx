/**
 * Reusable SEO head component using react-helmet-async.
 *
 * Sets <title>, meta description, canonical URL, Open Graph, and Twitter Card tags.
 */

import { Helmet } from "react-helmet-async";
import {
  SITE_NAME,
  SOCIAL_IMAGE_ALT,
  SOCIAL_IMAGE_HEIGHT,
  SOCIAL_IMAGE_URL,
  SOCIAL_IMAGE_WIDTH,
} from "../utils/lensMetadata.js";

export interface JsonLdSchema {
  [key: string]: unknown;
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalURL?: string;
  robots?: string;
  ogType?: string;
  twitterCard?: "summary" | "summary_large_image";
  socialImageURL?: string;
  socialImageAlt?: string;
  socialImageWidth?: number;
  socialImageHeight?: number;
  jsonLd?: JsonLdSchema | JsonLdSchema[];
}

function normalizeJsonLd(jsonLd?: JsonLdSchema | JsonLdSchema[]): JsonLdSchema[] {
  if (!jsonLd) return [];
  return Array.isArray(jsonLd) ? jsonLd : [jsonLd];
}

export default function SEOHead({
  title,
  description,
  canonicalURL,
  robots,
  ogType = "website",
  twitterCard = "summary_large_image",
  socialImageURL = SOCIAL_IMAGE_URL,
  socialImageAlt = SOCIAL_IMAGE_ALT,
  socialImageWidth = SOCIAL_IMAGE_WIDTH,
  socialImageHeight = SOCIAL_IMAGE_HEIGHT,
  jsonLd,
}: SEOHeadProps) {
  const jsonLdEntries = normalizeJsonLd(jsonLd);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {robots && <meta name="robots" content={robots} />}
      {canonicalURL && <link rel="canonical" href={canonicalURL} />}

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {canonicalURL && <meta property="og:url" content={canonicalURL} />}
      <meta property="og:site_name" content={SITE_NAME} />
      {socialImageURL && <meta property="og:image" content={socialImageURL} />}
      {socialImageAlt && <meta property="og:image:alt" content={socialImageAlt} />}
      {socialImageWidth && <meta property="og:image:width" content={String(socialImageWidth)} />}
      {socialImageHeight && <meta property="og:image:height" content={String(socialImageHeight)} />}

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {socialImageURL && <meta name="twitter:image" content={socialImageURL} />}
      {socialImageAlt && <meta name="twitter:image:alt" content={socialImageAlt} />}

      {jsonLdEntries.map((entry, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}
    </Helmet>
  );
}
