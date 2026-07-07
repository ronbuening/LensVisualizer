# React Types Downgrade to 18 Line (2026-07-07)

## Summary

- `package.json` paired the React 18 runtime (`react`/`react-dom` `^18.3.1`) with React 19 type packages
  (`@types/react` `^19.2.14`, `@types/react-dom` `^19.2.3`). The 19 types allow patterns the 18 runtime does not
  support (ref-as-prop without `forwardRef` silently produces a dead ref; `use` / `useActionState` typecheck but do
  not exist at runtime). Downgraded both type packages to the 18 line so the compiler matches the runtime.

## Changes

- `@types/react` → `^18.3.28` (resolves 18.3.31), `@types/react-dom` → `^18.3.7`.
- Replaced React-19-idiom `RefObject<T | null>` annotations with the React 18 idiom `RefObject<T>` in
  `src/components/hooks/useHeaderHeight.ts`, `src/components/hooks/useSideLayoutDetection.ts`,
  `src/components/layout/lensDiagram/panelModel.ts`, and `src/components/layout/DropdownPanel.tsx`.
- `DropdownPanel`: local merged ref now uses `useRef<HTMLDivElement | null>(null)` (the 18-types
  `MutableRefObject` overload) so assigning `.current` compiles; dropped a now-unnecessary
  `MutableRefObject` cast on the forwarded ref.
- `LensDiagramPanel`: `panelContainerRef` created via `useRef<HTMLDivElement>(null)` (18-types `RefObject`
  overload).

## Verification

- `npm run typecheck` — pass (also confirms nothing uses 19-only APIs like `use`/`useActionState`)
- `npm run lint` — pass
- `npm run format:check` — pass
- `npm run test` — 185 files / 2240 tests pass

## React 19 Upgrade Blocker

A real React 19 runtime upgrade is currently **blocked on `react-helmet-async`** (`^2.0.5`): the package is
unmaintained and its peer dependencies exclude React 19. Before upgrading React (runtime or types) to 19,
replace `react-helmet-async` — candidates include React 19's built-in document metadata hoisting (`<title>`/
`<meta>` in components), which would remove the dependency entirely, or a maintained fork. SSR/prerender usage
(`src/entry-server.tsx`, prerender scripts) must be migrated with it. Do not bump `@types/react` /
`@types/react-dom` back to 19 ahead of the runtime; mismatched types re-introduce the dead-ref and phantom-API
hazards above.
