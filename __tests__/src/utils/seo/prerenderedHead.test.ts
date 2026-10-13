// @vitest-environment jsdom
/**
 * Guards the SSR/client head-tag contract: the SSR entry stamps every emitted
 * head tag and the client bootstrap removes exactly the stamped ones. Kept
 * because no corpus sweep exercises the post-boot document head.
 */

import { describe, expect, it } from "vitest";
import {
  PRERENDERED_HEAD_ATTRIBUTE,
  markPrerenderedHeadTags,
  removePrerenderedHeadTags,
} from "../../../../src/utils/seo/prerenderedHead.js";

describe("markPrerenderedHeadTags", () => {
  it("stamps opening title, meta, link, and script tags without touching their bodies", () => {
    const markup =
      "<title>Lens</title>" +
      '<meta name="description" content="a &gt; b"/>' +
      '<link rel="canonical" href="https://example.test/lens/"/>' +
      '<script type="application/ld+json">{"name":"\\u003ctitle\\u003e"}</script>';

    expect(markPrerenderedHeadTags(markup)).toBe(
      `<title ${PRERENDERED_HEAD_ATTRIBUTE}="">Lens</title>` +
        `<meta name="description" content="a &gt; b" ${PRERENDERED_HEAD_ATTRIBUTE}=""/>` +
        `<link rel="canonical" href="https://example.test/lens/" ${PRERENDERED_HEAD_ATTRIBUTE}=""/>` +
        `<script type="application/ld+json" ${PRERENDERED_HEAD_ATTRIBUTE}="">{"name":"\\u003ctitle\\u003e"}</script>`,
    );
  });
});

describe("removePrerenderedHeadTags", () => {
  it("removes only stamped head tags", () => {
    document.head.innerHTML =
      '<meta charset="UTF-8"/>' +
      `<title ${PRERENDERED_HEAD_ATTRIBUTE}="">Static</title>` +
      `<link rel="canonical" href="https://example.test/" ${PRERENDERED_HEAD_ATTRIBUTE}=""/>` +
      '<link rel="stylesheet" href="/assets/katex.css"/>';

    expect(removePrerenderedHeadTags()).toBe(2);
    expect(document.head.querySelectorAll(`[${PRERENDERED_HEAD_ATTRIBUTE}]`)).toHaveLength(0);
    expect(document.head.querySelector("meta[charset]")).not.toBeNull();
    expect(document.head.querySelector('link[rel="stylesheet"]')).not.toBeNull();
  });
});
