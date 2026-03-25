# Gotchas — LensVisualizer

- Optical calculations use paraxial approximation (small-angle) — standard for patent data
- `buildLens()` calls `validateLensData()` internally; malformed data throws descriptive errors with all issues listed
- Theme colors use semantic names (`rayWarm`, `rayCool`, `apdPatentBg`) — update all 4 themes when changing colors
- `vite.config.js` sets `base: '/'` — GitHub Actions deploy workflow handles the Pages base path
- Lens data globs match `*.data.ts`; analysis globs match `*.analysis.md` — naming convention matters for auto-registration
- `src/lens-data/defaults.ts` values are merged under each lens — per-lens values in `.data.ts` take precedence
- Glob paths in `lensCatalog.ts` are relative to the file's location (`../lens-data/`)
- Lens data files are TypeScript (`.data.ts`) with `satisfies LensDataInput` for compile-time type checking — also validated at runtime by `validateLensData()`
- Test files are `.ts` — both Vitest and tsc process them; Vitest resolves `.js` import extensions to `.ts` sources automatically
- `tsconfig.json` uses `strict: true` with `allowJs: false`; lens data `.data.ts` files are included in tsc via the `"src"` include
- `.git-blame-ignore-revs` lists the initial Prettier commit — GitHub respects it automatically; for local blame run `git config blame.ignoreRevsFile .git-blame-ignore-revs`
