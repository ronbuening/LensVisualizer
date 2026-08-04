/** Helpers shared by sitemap generation and the production SEO audit. */

/** Return true when rendered HTML contains a robots meta directive with `noindex`. */
function htmlHasNoindexDirective(html) {
  const metaTags = html.match(/<meta\b[^>]*>/gi) ?? [];
  return metaTags.some((tag) => {
    if (!/\bname=["']robots["']/i.test(tag)) return false;
    const content = tag.match(/\bcontent=["']([^"']*)["']/i)?.[1] ?? "";
    return content.split(/[\s,]+/).some((directive) => directive.toLowerCase() === "noindex");
  });
}

export { htmlHasNoindexDirective };
