import type { ReactElement } from "react";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { describe, expect, it } from "vitest";
import SEOHead from "../../../src/components/SEOHead.js";
import {
  SOCIAL_IMAGE_HEIGHT,
  SOCIAL_IMAGE_TYPE,
  SOCIAL_IMAGE_URL,
  SOCIAL_IMAGE_WIDTH,
} from "../../../src/utils/catalog/lensMetadata.js";

function renderHead(element: ReactElement) {
  return renderToString(<HelmetProvider>{element}</HelmetProvider>);
}

describe("SEOHead", () => {
  it("omits canonical and og:url when canonicalURL is not provided", () => {
    const head = renderHead(<SEOHead title="Example" description="Example description" robots="noindex,follow" />);

    expect(head).not.toContain('rel="canonical"');
    expect(head).not.toContain('property="og:url"');
    expect(head).toContain('name="robots" content="noindex,follow"');
  });

  it("renders social image metadata when provided", () => {
    const head = renderHead(
      <SEOHead
        title="Example"
        description="Example description"
        canonicalURL="https://surfaceandstop.com/example"
        twitterCard="summary_large_image"
        socialImageURL="https://surfaceandstop.com/og/example.png"
        socialImageAlt="Example alt"
        socialImageWidth={1200}
        socialImageHeight={630}
      />,
    );

    expect(head).toContain('href="https://surfaceandstop.com/example/"');
    expect(head).toContain('property="og:url" content="https://surfaceandstop.com/example/"');
    expect(head).toContain('name="twitter:card" content="summary_large_image"');
    expect(head).toContain('property="og:image" content="https://surfaceandstop.com/og/example.png"');
    expect(head).toContain('property="og:image:alt" content="Example alt"');
    expect(head).toContain(`property="og:image:type" content="${SOCIAL_IMAGE_TYPE}"`);
    expect(head).toContain('property="og:image:width" content="1200"');
    expect(head).toContain('property="og:image:height" content="630"');
    expect(head).toContain('name="twitter:image" content="https://surfaceandstop.com/og/example.png"');
    expect(head).toContain('name="twitter:image:alt" content="Example alt"');
  });

  it("uses the shared social card defaults when no image props are provided", () => {
    const head = renderHead(
      <SEOHead title="Example" description="Example description" canonicalURL="https://surfaceandstop.com/example" />,
    );

    expect(head).toContain('name="twitter:card" content="summary_large_image"');
    expect(head).toContain(`property="og:image" content="${SOCIAL_IMAGE_URL}"`);
    expect(head).toContain(`property="og:image:type" content="${SOCIAL_IMAGE_TYPE}"`);
    expect(head).toContain(`property="og:image:width" content="${SOCIAL_IMAGE_WIDTH}"`);
    expect(head).toContain(`property="og:image:height" content="${SOCIAL_IMAGE_HEIGHT}"`);
    expect(head).toContain(`name="twitter:image" content="${SOCIAL_IMAGE_URL}"`);
  });

  it("renders multiple JSON-LD scripts", () => {
    const head = renderHead(
      <SEOHead
        title="Example"
        description="Example description"
        jsonLd={[
          { "@context": "https://schema.org", "@type": "WebSite", name: "Surface & Stop" },
          { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [] },
        ]}
      />,
    );

    expect(head.match(/application\/ld\+json/g)?.length).toBe(2);
    expect(head).toContain('"@type":"WebSite"');
    expect(head).toContain('"@type":"BreadcrumbList"');
  });
});
