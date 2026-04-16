import type { ReactElement } from "react";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import type { HelmetServerState } from "react-helmet-async";
import { describe, expect, it } from "vitest";
import SEOHead from "../src/components/SEOHead.js";
import {
  SOCIAL_IMAGE_HEIGHT,
  SOCIAL_IMAGE_URL,
  SOCIAL_IMAGE_WIDTH,
} from "../src/utils/lensMetadata.js";

function renderHead(element: ReactElement) {
  const context: { helmet?: HelmetServerState } = {};
  renderToString(<HelmetProvider context={context}>{element}</HelmetProvider>);
  return context.helmet!;
}

describe("SEOHead", () => {
  it("omits canonical and og:url when canonicalURL is not provided", () => {
    const helmet = renderHead(<SEOHead title="Example" description="Example description" robots="noindex,follow" />);

    expect(helmet.link.toString()).not.toContain('rel="canonical"');
    expect(helmet.meta.toString()).not.toContain('property="og:url"');
    expect(helmet.meta.toString()).toContain('name="robots" content="noindex,follow"');
  });

  it("renders social image metadata when provided", () => {
    const helmet = renderHead(
      <SEOHead
        title="Example"
        description="Example description"
        canonicalURL="https://opticalbench.net/example"
        twitterCard="summary_large_image"
        socialImageURL="https://opticalbench.net/og/example.png"
        socialImageAlt="Example alt"
        socialImageWidth={1200}
        socialImageHeight={630}
      />,
    );

    const meta = helmet.meta.toString();
    expect(meta).toContain('name="twitter:card" content="summary_large_image"');
    expect(meta).toContain('property="og:image" content="https://opticalbench.net/og/example.png"');
    expect(meta).toContain('property="og:image:alt" content="Example alt"');
    expect(meta).toContain('property="og:image:width" content="1200"');
    expect(meta).toContain('property="og:image:height" content="630"');
    expect(meta).toContain('name="twitter:image" content="https://opticalbench.net/og/example.png"');
    expect(meta).toContain('name="twitter:image:alt" content="Example alt"');
  });

  it("uses the shared social card defaults when no image props are provided", () => {
    const helmet = renderHead(
      <SEOHead title="Example" description="Example description" canonicalURL="https://opticalbench.net/example" />,
    );

    const meta = helmet.meta.toString();
    expect(meta).toContain('name="twitter:card" content="summary_large_image"');
    expect(meta).toContain(`property="og:image" content="${SOCIAL_IMAGE_URL}"`);
    expect(meta).toContain(`property="og:image:width" content="${SOCIAL_IMAGE_WIDTH}"`);
    expect(meta).toContain(`property="og:image:height" content="${SOCIAL_IMAGE_HEIGHT}"`);
    expect(meta).toContain(`name="twitter:image" content="${SOCIAL_IMAGE_URL}"`);
  });

  it("renders multiple JSON-LD scripts", () => {
    const helmet = renderHead(
      <SEOHead
        title="Example"
        description="Example description"
        jsonLd={[
          { "@context": "https://schema.org", "@type": "WebSite", name: "Optical Bench" },
          { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [] },
        ]}
      />,
    );

    const scripts = helmet.script.toString();
    expect(scripts.match(/application\/ld\+json/g)?.length).toBe(2);
    expect(scripts).toContain('"@type":"WebSite"');
    expect(scripts).toContain('"@type":"BreadcrumbList"');
  });
});
