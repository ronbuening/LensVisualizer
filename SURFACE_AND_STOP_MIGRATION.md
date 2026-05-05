# Surface & Stop Migration Handoff

These are the exact manual steps required after this rebrand branch is merged.

## 1. Deploy Surface & Stop on Cloudflare Pages

1. In Cloudflare, go to **Workers & Pages**.
2. Create a new Pages project from the GitHub repository `ronbuening/LensVisualizer`.
3. Use these build settings:
   - Framework preset: `React (Vite)`
   - Production branch: `main`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: repository root
4. Add these production environment variables:
   - `NODE_VERSION=24.15.0`
   - `VITE_GOATCOUNTER_URL=<the current GoatCounter URL value, if analytics should remain enabled>`
5. Save and run the first production deployment.
6. Open the Cloudflare Pages preview URL and verify:
   - `/`
   - `/lenses`
   - `/articles/about-site`
   - one known `/lens/<slug>` page
   - one known `/compare/<slug-a>/<slug-b>?focus=0.300` URL

## 2. Attach the new production domain

1. Make sure `surfaceandstop.com` exists as a Cloudflare zone in the same Cloudflare account as the Pages project.
2. At the domain registrar for `surfaceandstop.com`, replace the current nameservers with the two Cloudflare nameservers shown for the zone.
3. Wait until Cloudflare shows the `surfaceandstop.com` zone as active.
4. In Cloudflare, go to **Workers & Pages**.
5. Select the Surface & Stop Pages project.
6. Go to **Custom domains**.
7. Select **Set up a domain**.
8. Enter `surfaceandstop.com`.
9. Select **Continue**.
10. Confirm the DNS record Cloudflare proposes. For an apex domain, Cloudflare should create the required Pages DNS record automatically once the zone is active on Cloudflare nameservers.
11. Wait for the custom domain status to become active and for the SSL certificate to finish issuing.
12. Open `https://surfaceandstop.com/` and verify it serves the Cloudflare Pages deployment.
13. Add `www.surfaceandstop.com` if the `www` hostname should work:
   - In the same Pages project, go to **Custom domains**.
   - Select **Set up a domain**.
   - Enter `www.surfaceandstop.com`.
   - Select **Continue**.
   - Confirm the DNS record Cloudflare proposes. If the zone is managed in Cloudflare, Cloudflare should add the CNAME automatically.
   - Wait for the custom domain status and SSL certificate to become active.
14. Open `https://www.surfaceandstop.com/` and verify it serves the same Pages deployment.
15. Decide the canonical host:
   - Canonical host in this codebase is `https://surfaceandstop.com`.
   - If `www.surfaceandstop.com` is added, create a Cloudflare Redirect Rule from `www.surfaceandstop.com` to `surfaceandstop.com` that keeps the original path and query string. Use the same wildcard pattern format shown in section 3.
16. Do not manually create only a DNS CNAME to the Pages project without adding the custom domain in the Pages dashboard first; Cloudflare documents that this can fail to resolve correctly.

## 3. Redirect OpticalBench.net to SurfaceAndStop.com

1. Make sure `opticalbench.net` is active in Cloudflare and uses Cloudflare nameservers.
2. In the `opticalbench.net` zone, make sure these DNS records are proxied:
   - `opticalbench.net`
   - `www.opticalbench.net`
3. Go to **Rules > Redirect Rules**.
4. Create a new redirect rule for the apex hostname:
   - Rule name: `opticalbench.net to surfaceandstop.com`
   - Match type: `Wildcard pattern`
   - Request URL:

```txt
http*://opticalbench.net/*
```

5. Configure that redirect action:
   - Target URL:

```txt
https://surfaceandstop.com/${2}
```

   - Status code: `301`
   - Preserve query string: `Enabled`
6. Create a second redirect rule for the `www` hostname:
   - Rule name: `www.opticalbench.net to surfaceandstop.com`
   - Match type: `Wildcard pattern`
   - Request URL:

```txt
http*://www.opticalbench.net/*
```

7. Configure the second redirect action:
   - Target URL:

```txt
https://surfaceandstop.com/${2}
```

   - Status code: `301`
   - Preserve query string: `Enabled`
8. Deploy both rules.
9. Test these exact redirects:

```txt
https://opticalbench.net/
  -> https://surfaceandstop.com/

https://opticalbench.net/lenses
  -> https://surfaceandstop.com/lenses

https://opticalbench.net/lens/<known-slug>?zoom=1.2
  -> https://surfaceandstop.com/lens/<known-slug>?zoom=1.2

https://opticalbench.net/compare/<slug-a>/<slug-b>?focus=0.300&aperture=0.500
  -> https://surfaceandstop.com/compare/<slug-a>/<slug-b>?focus=0.300&aperture=0.500

https://opticalbench.net/?lens=<known-slug>
  -> https://surfaceandstop.com/?lens=<known-slug>
  -> client redirects to https://surfaceandstop.com/lens/<known-slug>
```

## 4. Retire GitHub Pages for production

1. After the Cloudflare Pages production deployment is healthy, go to the GitHub repository.
2. Open **Settings > Pages**.
3. Remove the old custom domain if GitHub still shows one.
4. Change the Pages source to disabled if GitHub offers that option.
5. In **Actions**, disable or remove the `Deploy to GitHub Pages` workflow after Cloudflare Pages is the confirmed production deploy path.
6. Keep the `Quality Checks` workflow enabled.

## 5. Post-cutover verification

1. Run a local production check from the merged branch:

```bash
npm run build
npm run seo:audit
```

2. Verify the live production pages contain:
   - Canonical URLs on `https://surfaceandstop.com`.
   - `robots.txt` with `Sitemap: https://surfaceandstop.com/sitemap.xml`.
   - `sitemap.xml` URLs on `https://surfaceandstop.com`.
   - No visible `Optical Bench`, `OpticalBench.net`, or `opticalbench.net` public branding.
3. In Google Search Console, add `surfaceandstop.com` as a property and submit `https://surfaceandstop.com/sitemap.xml`.
4. Keep the `opticalbench.net` 301 redirect rule indefinitely so old shared URLs, indexed pages, and backlinks continue to resolve to the corresponding Surface & Stop URL.

## References

- Cloudflare Pages build settings: https://developers.cloudflare.com/pages/configuration/build-configuration/
- Cloudflare Pages `_redirects`: https://developers.cloudflare.com/pages/configuration/redirects/
- Cloudflare Single Redirects: https://developers.cloudflare.com/rules/url-forwarding/single-redirects/
- Cloudflare Redirect Rule examples: https://developers.cloudflare.com/rules/url-forwarding/examples/redirect-all-different-hostname/
