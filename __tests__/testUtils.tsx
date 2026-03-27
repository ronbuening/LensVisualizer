// @vitest-environment jsdom

import type { Dispatch, ReactElement, ReactNode } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { vi } from "vitest";
import themes from "../src/utils/themes.js";
import { LensDispatchContext, LensStateContext, type LensCtxValue } from "../src/utils/LensContext.js";
import type { LensAction, LensState } from "../src/types/state.js";
import type { Theme } from "../src/types/theme.js";

export interface MatchMediaController {
  setMatches: (matches: boolean) => void;
  dispatchChange: (matches: boolean) => void;
  addEventListener: ReturnType<typeof vi.fn>;
  removeEventListener: ReturnType<typeof vi.fn>;
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
    wrapper: ({ children }: { children: ReactNode }) => <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>,
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
