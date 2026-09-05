// @vitest-environment jsdom

import type { Dispatch, ReactElement, ReactNode } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router";
import { vi } from "vitest";
import themes from "../src/utils/theme/themes.js";
import { LensDispatchContext, LensStateContext, type LensCtxValue } from "../src/utils/state/LensContext.js";
import { createInitialState } from "../src/utils/state/lensReducer.js";
import type { LensAction, LensState } from "../src/types/state.js";
import type { Theme } from "../src/types/theme.js";

/** Frozen copy of the real dark theme for component tests that need a complete Theme. */
export const mockTheme: Theme = Object.freeze({ ...themes.dark });

export interface MatchMediaController {
  setMatches: (matches: boolean) => void;
  dispatchChange: (matches: boolean) => void;
  addEventListener: ReturnType<typeof vi.fn>;
  removeEventListener: ReturnType<typeof vi.fn>;
}

export interface ResizeObserverController {
  instances: Array<{
    callback: ResizeObserverCallback;
    observe: ReturnType<typeof vi.fn>;
    disconnect: ReturnType<typeof vi.fn>;
  }>;
  trigger: (target?: Element) => void;
}

function createMatchMediaController(matches: boolean): {
  controller: MatchMediaController;
  factory: (query: string) => MediaQueryList;
} {
  const listeners = new Set<(event: MediaQueryListEvent) => void>();
  const addEventListener = vi.fn((event: string, listener: (event: MediaQueryListEvent) => void) => {
    if (event === "change") listeners.add(listener);
  });
  const removeEventListener = vi.fn((event: string, listener: (event: MediaQueryListEvent) => void) => {
    if (event === "change") listeners.delete(listener);
  });

  let currentMatches = matches;

  return {
    controller: {
      setMatches(nextMatches: boolean) {
        currentMatches = nextMatches;
      },
      dispatchChange(nextMatches: boolean) {
        currentMatches = nextMatches;
        const event = { matches: nextMatches } as MediaQueryListEvent;
        listeners.forEach((listener) => listener(event));
      },
      addEventListener,
      removeEventListener,
    },
    factory(query: string) {
      return {
        matches: currentMatches,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener,
        removeEventListener,
        dispatchEvent: vi.fn(),
      } as MediaQueryList;
    },
  };
}

export function installMatchMediaMock(matches = false): MatchMediaController {
  const { controller, factory } = createMatchMediaController(matches);
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => factory(query)),
  });
  return controller;
}

export function installResizeObserverMock(): ResizeObserverController {
  const instances: ResizeObserverController["instances"] = [];

  class MockResizeObserver {
    private callback: ResizeObserverCallback;
    observe = vi.fn();
    disconnect = vi.fn();

    constructor(callback: ResizeObserverCallback) {
      this.callback = callback;
      instances.push({
        callback,
        observe: this.observe,
        disconnect: this.disconnect,
      });
    }
  }

  Object.defineProperty(window, "ResizeObserver", {
    configurable: true,
    writable: true,
    value: MockResizeObserver,
  });
  vi.stubGlobal("ResizeObserver", MockResizeObserver);

  return {
    instances,
    trigger(target = document.body) {
      instances.forEach((instance) => {
        instance.callback([{ target } as ResizeObserverEntry], {} as ResizeObserver);
      });
    },
  };
}

export function mockReplaceState() {
  window.history.replaceState({}, "", "/");
  return vi.spyOn(window.history, "replaceState");
}

export function clearBrowserState() {
  localStorage.clear();
  window.history.replaceState({}, "", "/");
}

export function seedLocalStorage(entries: Record<string, string>) {
  Object.entries(entries).forEach(([key, value]) => {
    localStorage.setItem(key, value);
  });
}

export function renderWithRouter(
  ui: ReactElement,
  { initialEntries = ["/"], ...options }: RenderOptions & { initialEntries?: string[] } = {},
) {
  return render(ui, {
    wrapper: ({ children }: { children: ReactNode }) => (
      <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
    ),
    ...options,
  });
}

/**
 * Render a route-level page component under `HelmetProvider` + `MemoryRouter`.
 * Page tests still declare their own `vi.mock` lines (for example SEOHead);
 * those are hoisted and cannot live inside a shared render helper.
 */
export function renderPage(
  ui: ReactElement,
  { initialEntries = ["/"], ...options }: RenderOptions & { initialEntries?: string[] } = {},
) {
  return render(ui, {
    wrapper: ({ children }: { children: ReactNode }) => (
      <HelmetProvider>
        <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
      </HelmetProvider>
    ),
    ...options,
  });
}

export function renderWithLensContext(
  ui: ReactElement,
  {
    state,
    dispatch = vi.fn(),
    theme = themes.dark,
    isWide = true,
    updateURLWithSliders = vi.fn(),
    ...options
  }: RenderOptions & {
    state: LensState;
    dispatch?: Dispatch<LensAction>;
    theme?: Theme;
    isWide?: boolean;
    updateURLWithSliders?: () => void;
  },
) {
  const value: LensCtxValue = { state, theme, isWide, updateURLWithSliders };
  return render(ui, {
    wrapper: ({ children }: { children: ReactNode }) => (
      <LensStateContext.Provider value={value}>
        <LensDispatchContext.Provider value={dispatch}>{children}</LensDispatchContext.Provider>
      </LensStateContext.Provider>
    ),
    ...options,
  });
}

/* ─────────────────── Lens state construction ─────────────────── */

/** Per-slice partial overrides applied on top of the real reducer defaults. */
export type TestLensStateOverrides = { [Slice in keyof LensState]?: Partial<LensState[Slice]> };

/**
 * Build a full LensState from the real `createInitialState` defaults, so test
 * states pick up new slice fields automatically instead of silently drifting.
 * Pass real catalog keys via `options.catalogKeys` when lens identity matters.
 */
export function makeTestLensState(
  overrides: TestLensStateOverrides = {},
  { catalogKeys = ["lens-a", "lens-b"], isWide = true }: { catalogKeys?: string[]; isWide?: boolean } = {},
): LensState {
  const base = createInitialState({}, {}, isWide, catalogKeys);
  return {
    lens: { ...base.lens, ...overrides.lens },
    display: { ...base.display, ...overrides.display },
    rays: { ...base.rays, ...overrides.rays },
    sliders: { ...base.sliders, ...overrides.sliders },
    sharedSliders: { ...base.sharedSliders, ...overrides.sharedSliders },
    panels: { ...base.panels, ...overrides.panels },
    overlays: { ...base.overlays, ...overrides.overlays },
  };
}

/* ─────────────────── LensDiagramPanel hook mocks ─────────────────── */

/** Inert `useLensComputation` result covering every field of the hook's shape. */
export function makeLensComputationResult(overrides: Record<string, unknown> = {}) {
  return {
    L: null,
    buildError: null,
    IMG_MM: 0,
    zPos: [],
    sx: 1,
    sy: 1,
    clampedRayEnd: 0,
    CX: 0,
    IX: 0,
    effectiveSC: 1,
    perspectiveTraceContext: null,
    shapes: [],
    shapeError: null,
    stopZ: 0,
    currentFOPEN: 2,
    fNumber: 2,
    currentPhysStopSD: 5,
    baseEPSD: 5,
    currentEPSD: 5,
    varReadouts: [],
    dynamicEFL: 50,
    effectiveFNum: 2,
    workingApertureNote: "",
    filterId: "filter-test",
    ...overrides,
  };
}

/** Empty `useRayTracing` result in the hook's shape. */
export function makeRayTracingResult(overrides: Record<string, unknown> = {}) {
  return {
    rays: [],
    offAxisRays: [],
    chromaticRays: [],
    chromaticRayFanSpread: null,
    rayError: null,
    ...overrides,
  };
}

/** Inert `useViewBoxZoom` result matching the real hook's return shape. */
export function makeViewBoxZoomResult(overrides: Record<string, unknown> = {}) {
  return {
    state: { zoom: 1 },
    viewBox: "0 0 1200 600",
    isPanning: false,
    reset: vi.fn(),
    zoomIn: vi.fn(),
    zoomOut: vi.fn(),
    panBy: vi.fn(),
    handleWheel: vi.fn(),
    handlePointerDown: vi.fn(),
    handlePointerMove: vi.fn(),
    handlePointerUp: vi.fn(),
    handleTouchStart: vi.fn(),
    handleTouchMove: vi.fn(),
    handleTouchEnd: vi.fn(),
    ...overrides,
  };
}

/** Per-hook implementation overrides for `mockLensDiagramHooks`. */
export interface LensDiagramHookOverrides {
  useLensComputation?: (props: unknown) => unknown;
  useRayTracing?: (props: unknown) => unknown;
  useDispatchAdapters?: () => unknown;
  useOverlayState?: () => unknown;
  useHeaderHeight?: () => unknown;
  useFlashOverlay?: () => unknown;
  useSideLayoutDetection?: () => boolean;
  useViewBoxZoom?: () => unknown;
}

/**
 * Mock-module shapes for the eight hooks LensDiagramPanel consumes.
 *
 * `vi.mock` factories are hoisted, so callers must load this helper with a
 * dynamic import inside each (async) factory rather than a top-level import:
 *
 *   vi.mock("../../../../src/components/hooks/useHeaderHeight.js", async () =>
 *     (await import("../../../testUtils.js")).mockLensDiagramHooks({
 *       useHeaderHeight: () => ({ headerRef: { current: null }, headerHeight: 88 }),
 *     }).useHeaderHeight,
 *   );
 *
 * Defaults return inert results in the hooks' canonical shapes; pass an
 * override to pin per-file values or to delegate to a `vi.hoisted` spy.
 */
export function mockLensDiagramHooks(overrides: LensDiagramHookOverrides = {}) {
  return {
    useLensComputation: { default: overrides.useLensComputation ?? (() => makeLensComputationResult()) },
    useRayTracing: { default: overrides.useRayTracing ?? (() => makeRayTracingResult()) },
    useDispatchAdapters: {
      default: overrides.useDispatchAdapters ?? (() => new Proxy({}, { get: () => vi.fn() })),
    },
    useOverlayState: {
      default:
        overrides.useOverlayState ??
        (() => ({ asphCompareElementId: null, openAsphCompare: vi.fn(), closeAsphCompare: vi.fn() })),
    },
    useHeaderHeight: {
      default: overrides.useHeaderHeight ?? (() => ({ headerRef: { current: null }, headerHeight: 40 })),
    },
    useFlashOverlay: {
      default: overrides.useFlashOverlay ?? (() => ({ flashKey: 0, flashVisible: false, flashFading: false })),
    },
    useSideLayoutDetection: { default: overrides.useSideLayoutDetection ?? (() => false) },
    useViewBoxZoom: { default: overrides.useViewBoxZoom ?? (() => makeViewBoxZoomResult()) },
  };
}
