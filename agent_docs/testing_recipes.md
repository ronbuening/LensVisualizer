# Testing Recipes

Copy-paste-ready patterns for writing tests. Layout and coverage expectations are in
`agent_docs/architecture/testing.md`; this doc is the "how do I actually write one" companion.

## Ground Rules

- Test files mirror the source tree under `__tests__/`:
  `src/foo/bar.ts` → `__tests__/src/foo/bar.test.ts`. Never co-locate tests with source.
- Component tests need the jsdom pragma as the FIRST line of the file:
  `// @vitest-environment jsdom`
- Run a single file while iterating: `npx vitest run __tests__/src/foo/bar.test.ts`
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

Before writing state setup by hand, open an existing test of a sibling component (grep
`renderWithLensContext` under `__tests__/`) and copy how it builds `LensState` — there is an
initial-state factory; don't construct the state object literal yourself.

Assert on behavior/content (`getByText`, role queries, `container.querySelector("svg")`), not on
inline style strings.

## Recipe: Reducer / URL-State Round-Trip

For URL state changes, the standard test is parse→build→parse identity plus version gating (fields
dropped without `v=1`). Grep `parseLensViewQuery` in `__tests__/` and extend the existing file
rather than creating a parallel one.

## Recipe: Lens-Data Validation Test

Validation failures are tested by passing intentionally broken prescriptions to `buildLens()` and
asserting the error message mentions the failing rule. Find existing examples with
`grep -rn "buildLens" __tests__ | grep -i "throw\|error"` and follow the established assertion style.

## What NOT To Do

- Don't add benchmark-style timing assertions to normal tests — performance measurement lives in
  `npm run benchmark:optics-rendering` (intentionally excluded from the test gate).
- Don't snapshot large SVG trees for optics correctness; assert specific numbers/attributes.
- Don't mock modules from `src/optics/` in component tests unless the computation is genuinely
  too heavy — prefer a small real lens.
- Generated-report scan tests (`unresolvedGlassScan` etc.) write files under
  `agent_docs/generated/` — regenerate, don't hand-edit those outputs.
