# Adding a Page / Route

Recipe for adding a new route. Routes have one source of truth consumed by BOTH the browser router
and the SSR prerenderer, so several build steps must stay consistent.

## Where Things Live

- `src/routes/routeManifest.tsx` — the single route table (`path` + `element`). Consumed by
  `src/router.tsx` (client) and `src/entry-server.tsx` (prerender).
- `src/pages/YourPage.tsx` — route-level page component.
- `scripts/prerender.mjs` — renders every metadata route to static HTML in `dist/`; validates
  manifest routes against generated metadata. Client-only dynamic routes are exempted via its
  `CLIENT_ONLY_PATTERNS` list (e.g. `/compare/:slugA/:slugB`).
- `src/generated/build-metadata.json` (gitignored) — emitted by `npm run generate:metadata`;
  drives prerendering and the sitemap.

## Steps

1. Create `src/pages/YourPage.tsx`:
   - Functional component, inline styles with theme tokens, module header comment
     (see `agent_docs/commenting_guide.md`).
   - SEO head tags via `react-helmet-async` — copy the `<Helmet>` usage from an existing simple
     page (e.g. `UpdatesPage.tsx`) including title, description, and canonical URL. Check
     `src/utils/` for existing SEO helper utilities before hand-writing meta tags.
2. Add the entry to `routeManifest.tsx` with a **static import**, above the `*` catch-all.
   - Do NOT use `React.lazy` here: `entry-server.tsx` prerenders with synchronous
     `renderToString`, which cannot resolve lazy components — prerendered pages would lose their
     content.
3. Static route (e.g. `/glossary`): the metadata generator must emit it so it gets prerendered and
   into the sitemap. Run `npm run build` and check the route appears in
   `src/generated/build-metadata.json` and `dist/<route>/index.html` exists with real content. If
   it doesn't, find where `scripts/` enumerates static routes and add yours there.
4. Dynamic route (e.g. `/things/:id`): the generator must emit every concrete URL. Follow how
   `/lens/:slug` or `/mounts/:mountId` routes are enumerated in `scripts/`. If the route genuinely
   cannot be prerendered (depends on client-side pairing like compare), add its pattern to
   `CLIENT_ONLY_PATTERNS` in `scripts/prerender.mjs` instead — prerender validation fails the
   build otherwise.
5. In-app links: add navigation from wherever users should reach the page (header, index pages),
   using the existing link components/styles.

## Verification

```bash
npm run typecheck && npm run format:check && npm run lint && npm run test
npm run build     # REQUIRED for any route change
```

After `npm run build`: confirm the route in `src/generated/build-metadata.json`, the prerendered
HTML in `dist/`, and the entry in `dist/sitemap.xml`. Run `npm run seo:audit` for SEO-sensitive
pages. Add a changelog entry per `agent_docs/changelog.md` if user-visible.
