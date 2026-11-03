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
- `auditDetachedReactText(root)` finds the React-owned Text nodes outside the document and gives each one an
  instance-level `nodeValue`/`data` setter, so every later React write into it counts in `staleWrites`. Call it right
  after each replacement, then after interactions and expect `staleWrites: 0`. It reads React internals
  (`__reactContainer$…`, HostText tag 6), so revisit it on a React major upgrade.

Owned text (a single primitive child) cannot go stale, and the audit catches text that is not owned wherever it
renders, so translation tests do not compare readouts with clean-page values. Tests are layered:

- `translation/owned-text` lint is the first guard; its rule test lints synthetic cases in a throwaway TypeScript
  project.
- Unit tests cover the shared contracts lint cannot see: `textRun`, `rehypeOwnedText` through `ThemedMarkdown`,
  `AnalysisMetricRow` plus the audit's own self-test, `PatentPartyList`, and one panel-level check
  (`LensDiagramTranslation.test.tsx`). Do not add per-component translation tests.
- `__tests__/browser/translation.spec.ts` replaces text before each step of real flows and asserts the audit in
  `healthy()`. It visits every route in `__tests__/translationCoverage.ts` (whose unit test fails when the route manifest
  gains a route without a sample), and runs lens flows through every analysis tab, primers and overlays, comparison
  and width changes, and catalog/relationship controls at desktop and compact widths. It gates pull requests through
  Quality Checks.

```sh
npx playwright install chromium
npm run test:browser
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
