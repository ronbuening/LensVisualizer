# Theme Tokens — Adding and Changing Colors

How the theme system works and the exact steps for adding a color token. The core rule from
CLAUDE.md: **update all four theme variants together** — a token added to one variant is a
typecheck error in the others, which is the safety net.

## Structure

- `src/types/theme.ts` — `ThemeColorTokens` (flat color-token contract) and `Theme` (tokens plus
  computed closures).
- `src/utils/theme/themes.ts` — `createTheme(tokens)` factory adds the closure-based properties
  (`gridDash`, `grid`, `elemNum`, `elemFill`, `elemStroke`), then four variants are built from it:
  **dark, light, darkHC, lightHC** (Dark/Light × Default/High-Contrast). These are the "four
  themes" the rules refer to.
- `src/utils/theme/holidayThemes.ts` — seasonal overrides layered on the base variants; check
  whether a new token needs a holiday override (usually not, but look at what it already overrides).
- Preference/selection logic: `themePreferences.ts`, `usePageTheme.ts`, `usePageThemeToggle.ts`.

## Token Conventions

- Semantic names grouped by prefix (`ray*`, `elem*`, `desc*`, `toggle*`, `panel*`, `header*`).
  Name tokens for their ROLE (`rayChromR`, `sliderAccent`), not their color.
- `_`-prefixed tokens are internal: consumed only inside `createTheme()`'s closures
  (element fills/strokes, grid colors). Components must never read `theme._anything`.
- Components never hardcode hex/rgba values — every color routes through the `Theme` object.
  (Grep check before finishing: your new component files contain no `#` color literals outside
  `themes.ts`/`holidayThemes.ts`.)

## Steps to Add a Token

1. Add the field to `ThemeColorTokens` in `src/types/theme.ts` with a one-line JSDoc saying where
   it's used.
2. In `src/utils/theme/themes.ts`, add a value to ALL FOUR variant token objects (dark, light,
   darkHC, lightHC). Typecheck fails until all four are done. For the HC variants, pick
   higher-contrast values, not copies of the base — compare how an existing similar token differs
   between `dark` and `darkHC`.
3. Check `holidayThemes.ts`: if the token is thematically tied to something holiday themes restyle,
   add overrides there too; otherwise leave it inheriting.
4. Use it in components as `t.myToken` / `theme.myToken`.

## Categorical Chart Colors (`chartSeries`)

`chartSeries` is a five-slot categorical palette (blue, orange, green, violet, magenta) for charts whose series keep
fixed identities: MTF frequency chips use slot *i* for the *i*-th chip, so hiding a series never repaints the others.
Vignetting and pupil-aberration charts use slots 0 and 1 for their two series, and lens-group movement rows repeat the
five slots down their labelled rows.
Validate any change per variant against its `panelBg`: OKLab lightness band and chroma floor, adjacent-pair color-vision
separation ΔE ≥ 8 (Machado simulation), normal-vision ΔE ≥ 15, and 3:1 contrast. The current values pass with adjacent
color-vision ΔE ≥ 9.1 and normal-vision ΔE ≥ 19.5. `darkHC` reuses the `dark` values: they already sit at the top of
the dark-mode lightness band, and brighter candidates fail it. No five-hue set keeps every pair separable for
color-vision deficiencies, so charts pair these colors with direct labels or marker shapes. `themes.test.ts` checks
five distinct slots with 3:1 panel contrast in every variant; holiday themes leave the token alone.

## Steps to Change an Existing Color

Change it in all variants where it appears, including `holidayThemes.ts` overrides. Search the
token name across `src/utils/theme/` — a value updated in `dark` but not `darkHC` is the classic
mistake.

## Verification

```bash
npm run typecheck && npm run test
```

Manual: `npm run dev`, cycle all four themes via the UI theme toggle and eyeball the affected
surface in each. There are no automated color-contrast tests — the visual pass is the check.
