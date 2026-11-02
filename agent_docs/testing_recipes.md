# Testing Recipes

Copy-paste-ready patterns for writing tests. Layout and coverage expectations are in
`agent_docs/architecture/testing.md`; this doc is the "how do I actually write one" companion.

## Ground Rules

- Test files mirror the source tree under `__tests__/` (`src/<dir>/<name>.ts` → `__tests__/src/<dir>/<name>.test.ts`);
  layout details are in `agent_docs/architecture/testing.md`. Never co-locate tests with source.
- Component tests need the jsdom pragma as the FIRST line of the file:
  `// @vitest-environment jsdom`
- Run a single file while iterating: `npx vitest run __tests__/src/<dir>/<name>.test.ts`
  (or `npm test -- <pattern>`). Full gate: `npm run test`.
- Optics tests: build real lenses with `buildLens()` from catalog data or a minimal inline
  prescription — don't hand-mock `RuntimeLens` objects; helpers cache by object identity and
  hand-built partials miss invariants. Never mutate `L` in a test.

## Shared Helpers — `__tests__/testUtils.tsx`

| Helper | Use for |
|---|---|
| `renderWithRouter(ui, { initialEntries })` | Components using react-router hooks/links |
| `renderWithLensContext(ui, { state, dispatch?, theme?, isWide? })` | Anything reading lens state/theme context; `state` is required, `theme` defaults to `themes.dark`, `dispatch` defaults to `vi.fn()` |
| `installMatchMediaMock(matches?)` | Components using media queries; returns a controller with `setMatches` / `dispatchChange` |
| `installResizeObserverMock()` | Components observing size; returns `{ instances, trigger }` |
| `seedLocalStorage(entries)` / `clearBrowserState()` | Preference-dependent components; clear in `afterEach` |
| `mockReplaceState()` | Asserting URL updates (returns a spy on `history.replaceState`) |

## Recipe: Pure Optics/Utility Function

```ts
import { describe, expect, it } from "vitest";
// import the function under test from its real module

describe("computeThing", () => {
  it("matches the hand-checked value for a known input", () => {
    expect(computeThing(5, 50)).toBeCloseTo(0.25, 5);
  });
});
```

Use `toBeCloseTo` with an explicit precision for float results, never `toBe`. Prefer inputs whose
expected outputs you can verify by hand or against a patent value; state the source in the test name
or a comment.

## Recipe: Component Smoke Test with Lens Context

```tsx
// @vitest-environment jsdom
import { describe, expect, it, vi } from "vitest";
import { renderWithLensContext } from "../../../testUtils.js";
// import the component and the initial-state factory used by existing sibling tests
```

Build `LensState` with `makeTestLensState` (grep `renderWithLensContext` under `__tests__/` for a sibling to
copy) rather than a hand-written state literal. Assert on behavior/content (`getByText`, role queries,
`container.querySelector("svg")`), not on inline style strings.

## Recipe: Reducer / URL-State Round-Trip

For URL state changes, the standard test is parse→build→parse identity plus version gating (fields
dropped without `v=1`). Grep `parseLensViewQuery` in `__tests__/` and extend the existing file
rather than creating a parallel one.

## Translation DOM Replacement

`__tests__/translationTestUtils.ts` holds two closure-free helpers that run in Vitest and through Playwright's
`locator.evaluate`:

- `replaceTextForTranslation(root)` **replaces**, rather than moves, each HTML Text node with nested
  `<font dir="auto" style="vertical-align: inherit">` wrappers, the markup Google's translator leaves. It skips already
  simulated text, form options, scripts and SVG text, and includes HTML inside `foreignObject`.
- `auditDetachedReactText(root)` walks React's fiber tree from the root container and returns `{ detached,
  staleWrites }`: React-owned Text nodes outside the document, and those React has rewritten since the audit first saw
  them detached. Call it right after each replacement to record values, then after interactions and expect
  `staleWrites: 0`. It covers components the lint rule cannot see. It reads React internals (`__reactContainer$…`,
  HostText tag 6), so revisit it on a React major upgrade.

After replacing text, update props or interact, then assert current visible values, absence of old values,
removal/reinsertion, and that unaffected translated text or focus survives; absence of an exception alone misses stale
text.

The browser suite is `__tests__/browser/translation.spec.ts`; its `translate()` records and its `healthy()` asserts the
audit at every check. The route inventory is `__tests__/translationCoverage.ts`; its unit test compares the route
manifest and analysis tab list, requiring an explicit coverage decision when either grows. Route checks cover
representative catalog entries, theme rerenders and route removal. Interaction checks cover lens
navigation/inspector/modes, ten drawers (including the MTF worker result), comparison aperture/details, search, catalog
grouping and filters, author filters, and primer/about dialogs at desktop and compact widths, plus perspective movement,
representative folded analysis, comparison layout changes at 1200/900/899/390/1440px with a short viewport, overlays,
mount profiles and relationship pickers. Readout tests capture clean-page values, then repeat focus/aperture changes
after replacement. SVG-only bokeh/glass/mount readouts are checked after HTML replacement, without mutating SVG text.

Tests tagged `@smoke` (lens navigation and modes, the primer level switch, the summary readout, comparison captions,
catalog filters) gate every pull request through Quality Checks, desktop only. `.github/workflows/translation-browser.yml`
runs the full matrix at both widths nightly, on demand, and on pull requests that touch rendered UI or this harness.
Both upload failure screenshots/traces.

```sh
npx playwright install chromium
npm run test:browser:smoke   # the gating subset
npm run test:browser         # the full matrix
# Use an already running development or production-preview server/system browser:
PLAYWRIGHT_BASE_URL=http://127.0.0.1:5173 \
PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm run test:browser
```

These are scripted replacements in Chromium. They do not certify every catalog lens/state combination, disabled
feature-flag views, Firefox's or Safari's translators, or all third-party renderers. Updating source text replaces
its translated copy with source-language text until the translator processes it again; unchanged translated text must
remain intact.

**Real-translator check.** Chrome's built-in translate UI cannot be driven headlessly, but Google's website
translator makes the same `<font>` rewrite and `<html class="translated-ltr" lang="…">` marks. On a dev page, define a
callback that runs `new google.translate.TranslateElement({ pageLanguage: "en" }, "<host element id>")`, load
`https://translate.googleapis.com/translate_a/element.js?cb=<callback>`, then set `select.goog-te-combo` to a
language and dispatch `change`. It needs `translate.googleapis.com` and `translate-pa.googleapis.com`. It also
translates `aria-label`, so tag elements (a `data-*` attribute) before translating instead of selecting them by
accessible name. Without text ownership, translating a lens page, opening the Optics primer and choosing "Want more
detail?" crashed the route every time. Record service or network failures as unrun coverage, not passes.

## Recipe: Lens-Data Validation Test

Validation failures are tested by passing intentionally broken prescriptions to `buildLens()` and
asserting the error message mentions the failing rule. Find existing examples with
`grep -rn "buildLens" __tests__ | grep -i "throw\|error"` and follow the established assertion style.

## What NOT To Do

- Per-lens or per-batch test files: see "Per-Lens And Audit Test Retention" in `agent_docs/architecture/testing.md`.
- Don't add benchmark-style timing assertions to normal tests; performance measurement lives in
  `npm run benchmark:optics-rendering`, which is excluded from the test gate.
- Don't snapshot large SVG trees for optics correctness; assert specific numbers/attributes.
- Don't mock modules from `src/optics/` in component tests unless the computation is genuinely
  too heavy — prefer a small real lens.
