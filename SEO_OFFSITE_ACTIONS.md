# SEO Off-Site Actions

Use this checklist after the SEO metadata changes are deployed to Cloudflare Pages.

## Cloudflare Pages

- Confirm the production deployment serves the latest build from `dist/`.
- Purge cache for `/`, `/lenses`, `/sitemap.xml`, `/robots.txt`, one representative `/lens/...` URL, and one `/articles/...` URL.
- Verify the apex and `www` host redirect policy resolves to the canonical `https://surfaceandstop.com` URLs.
- Confirm `/sitemap.xml` and `/robots.txt` return `200` without authentication or bot restrictions.

## Search Engines

- Submit `https://surfaceandstop.com/sitemap.xml` in Google Search Console.
- Submit the same sitemap in Bing Webmaster Tools.
- Run URL inspection for `/`, `/lenses`, one lens page, and one article page.
- Request indexing for any inspected page that has not been crawled since this deployment.

## Social Preview Validation

- Test `/`, `/lenses`, one lens page, and one article page in LinkedIn Post Inspector.
- Test the same representative URLs with Facebook Sharing Debugger and X Card Validator.
- Re-scrape cached previews after the PNG social card replacement lands.

## Monitoring

- Recheck Search Console coverage and sitemap processing after 48 hours.
- Compare impressions, clicks, and indexed URL count after 2-4 weeks.
- Watch for parameterized lens URLs in Search Console; canonicals should point to clean `/lens/:slug` URLs.
