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
