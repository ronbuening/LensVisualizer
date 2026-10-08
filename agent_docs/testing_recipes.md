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

Use `replaceTextForTranslation` from `__tests__/translationTestUtils.ts` after rendering, then update
props or interact with the view. The helper **replaces**, rather than moves, Text nodes with nested
`font` elements. It skips already simulated text, form options, scripts and SVG text, and includes
HTML inside `foreignObject`. It is closure-free so the same function runs through Playwright's
`locator.evaluate`. Assert current visible values, absence of old values, removal/reinsertion, and
preservation of unaffected translated text or focus; absence of an exception alone misses stale text.
The quality workflow runs the browser suite before its build job and uploads failure screenshots/traces.

The browser inventory is `__tests__/translationCoverage.ts`; its unit test compares the route manifest
and analysis tab list, requiring an explicit coverage decision when either grows. Browser route checks
cover representative catalog entries, theme rerenders and route removal. Interaction checks separately
cover lens navigation/inspector/modes, ten drawers (including the MTF worker result), comparison
aperture/details, search, catalog grouping and filters, author filters, and primer/about dialogs at
desktop and compact widths. Additional cases cover perspective movement, representative folded
analysis, and comparison layout changes at 1200/900/899/390/1440px with a short viewport.
Readout tests capture clean-page values, then repeat focus/aperture changes after replacement: one
representative value per regular tab (including the real MTF worker), perspective readout changes and
restoration, and current inspector glass. Overlay cases cover glass labels, chromatic close/change/reopen,
Petzval lifecycle, aspheric mode/exaggeration/zoom and group-motion modes. Mount profiles exercise both
views and the legend; relationship tests exercise focused headings, search selection and detail changes.
SVG-only bokeh/glass/mount readouts are checked after HTML replacement, without mutating SVG text.
Universal map search exercises its supported Enter selection.
MTF integration checks cover translated blocking/informational warning titles and counts, stale traced-aperture
notes, and comparison labels. Browser checks migrate legacy method preferences and compare both method tables
with clean baselines; marketed-aperture notes must disappear and return with aperture changes.

```sh
npx playwright install chromium
npm run test:browser
# Use an already running development or production-preview server/system browser:
PLAYWRIGHT_BASE_URL=http://127.0.0.1:5173 \
PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm run test:browser
```

These are **scripted DOM-replacement tests in Chromium**, not actual Chrome Translate. They do not
certify every catalog lens/state combination, SVG translation, translation before hydration, disabled
feature-flag views, or all third-party renderers. Perspective/folded/unavailable states also need their
component regressions. If no teleconverter is published, that detail-route browser check explicitly
annotates its unknown-key-only coverage. A successful build/prerender does not exercise translation
before hydration. Updating source text may replace its translated copy with source-language text until
the translator processes it again; unchanged translated text must remain intact.

When Chrome's translation service is available, manually translate the lens and comparison routes,
change lenses, hover/select elements, adjust focus/aperture, cycle drawer tabs and MTF modes, close and
reopen drawers, switch display modes, and repeat at compact width. Record the actual browser/service
capability separately from simulated results; service/network failures are unrun coverage, not passes.

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
