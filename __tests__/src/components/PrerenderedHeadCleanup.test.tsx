// @vitest-environment jsdom
/**
 * The client mounts without hydration, so React 19 hoists a second head-tag
 * set beside the prerendered one. This guards the fix: after the first commit
 * only React's tags remain. Kept because no other suite renders into
 * `document.head`.
 */

import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PrerenderedHeadCleanup from "../../../src/components/PrerenderedHeadCleanup.js";
import { PRERENDERED_HEAD_ATTRIBUTE } from "../../../src/utils/seo/prerenderedHead.js";

describe("PrerenderedHeadCleanup", () => {
  it("leaves exactly React's own head tags after the first commit", () => {
    document.head.innerHTML =
      '<meta charset="UTF-8"/>' +
      `<title ${PRERENDERED_HEAD_ATTRIBUTE}="">Prerendered shell</title>` +
      `<link rel="canonical" href="https://example.test/" ${PRERENDERED_HEAD_ATTRIBUTE}=""/>`;

    render(
      <>
        <PrerenderedHeadCleanup />
        <title>Client route</title>
        <link rel="canonical" href="https://example.test/compare/a/b/" />
      </>,
    );

    const titles = Array.from(document.head.querySelectorAll("title"));
    const canonicals = Array.from(document.head.querySelectorAll<HTMLLinkElement>('link[rel="canonical"]'));
    expect(titles.map((el) => el.textContent)).toEqual(["Client route"]);
    expect(canonicals.map((el) => el.href)).toEqual(["https://example.test/compare/a/b/"]);
    expect(document.head.querySelector("meta[charset]")).not.toBeNull();
  });
});
