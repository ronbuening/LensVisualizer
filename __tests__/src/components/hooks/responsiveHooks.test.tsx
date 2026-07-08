// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { act } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useRef, type RefObject } from "react";
import useHeaderHeight from "../../../../src/components/hooks/useHeaderHeight.js";
import useSideLayoutDetection from "../../../../src/components/hooks/useSideLayoutDetection.js";
import { installResizeObserverMock } from "../../../testUtils.js";

const originalScrollHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "scrollHeight");
const originalGetBoundingClientRect = HTMLElement.prototype.getBoundingClientRect;

let scrollHeight = 120;
let rectTop = 100;
let rectWidth = 300;

function installElementMeasurements() {
  Object.defineProperty(HTMLElement.prototype, "scrollHeight", {
    configurable: true,
    get() {
      return scrollHeight;
    },
  });
  HTMLElement.prototype.getBoundingClientRect = vi.fn(
    () =>
      ({
        top: rectTop,
        bottom: rectTop + scrollHeight,
        left: 0,
        right: rectWidth,
        width: rectWidth,
        height: scrollHeight,
        x: 0,
        y: rectTop,
        toJSON: () => ({}),
      }) as DOMRect,
  );
}

function restoreElementMeasurements() {
  if (originalScrollHeight) {
    Object.defineProperty(HTMLElement.prototype, "scrollHeight", originalScrollHeight);
  } else {
    delete (HTMLElement.prototype as { scrollHeight?: number }).scrollHeight;
  }
  HTMLElement.prototype.getBoundingClientRect = originalGetBoundingClientRect;
}

function HeaderHeightProbe({
  panelId = "a",
  lensKey = "lens-a",
  onHeaderHeight,
}: {
  panelId?: string;
  lensKey?: string;
  onHeaderHeight?: (panelId: string, height: number) => void;
}) {
  const { headerRef, headerHeight } = useHeaderHeight({ panelId, lensKey, onHeaderHeight });
  return (
    <>
      <div ref={headerRef}>Header</div>
      <output>{headerHeight}</output>
    </>
  );
}

function SideLayoutProbe({ enabled, dep }: { enabled: boolean; dep: string }) {
  const containerRef = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;
  const useSideLayout = useSideLayoutDetection({ enabled, containerRef, deps: [dep] });
  return (
    <div ref={containerRef}>
      <output>{useSideLayout ? "side" : "stacked"}</output>
    </div>
  );
}

describe("responsive layout hooks", () => {
  beforeEach(() => {
    scrollHeight = 120;
    rectTop = 100;
    rectWidth = 300;
    Object.defineProperty(window, "innerHeight", { configurable: true, writable: true, value: 400 });
    installElementMeasurements();
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
    restoreElementMeasurements();
    vi.unstubAllGlobals();
  });

  it("reports measured header height and remeasures through ResizeObserver", () => {
    const resizeObserver = installResizeObserverMock();
    const onHeaderHeight = vi.fn();

    render(<HeaderHeightProbe panelId="left" lensKey="lens-a" onHeaderHeight={onHeaderHeight} />);

    expect(screen.getByText("120")).toBeTruthy();
    expect(onHeaderHeight).toHaveBeenLastCalledWith("left", 120);
    expect(resizeObserver.instances[0].observe).toHaveBeenCalledTimes(1);

    scrollHeight = 148;
    act(() => resizeObserver.trigger());

    expect(screen.getByText("148")).toBeTruthy();
    expect(onHeaderHeight).toHaveBeenLastCalledWith("left", 148);
  });

  it("cleans up header ResizeObserver subscriptions on unmount", () => {
    const resizeObserver = installResizeObserverMock();
    const { unmount } = render(<HeaderHeightProbe />);

    unmount();

    expect(resizeObserver.instances[0].disconnect).toHaveBeenCalledTimes(1);
  });

  it("keeps side layout disabled when detection is off", () => {
    installResizeObserverMock();
    scrollHeight = 1000;

    render(<SideLayoutProbe enabled={false} dep="a" />);

    expect(screen.getByText("stacked")).toBeTruthy();
  });

  it("enables side layout on wide panels and disables after width hysteresis", () => {
    const resizeObserver = installResizeObserverMock();

    rectWidth = 900;
    render(<SideLayoutProbe enabled={true} dep="a" />);

    expect(screen.getByText("side")).toBeTruthy();

    rectWidth = 740;
    act(() => resizeObserver.trigger());

    expect(screen.getByText("stacked")).toBeTruthy();
  });

  it("does not switch side layout because content height changes", () => {
    const resizeObserver = installResizeObserverMock();

    rectWidth = 820;
    scrollHeight = 100;
    render(<SideLayoutProbe enabled={true} dep="a" />);

    expect(screen.getByText("stacked")).toBeTruthy();

    scrollHeight = 2000;
    act(() => resizeObserver.trigger());

    expect(screen.getByText("stacked")).toBeTruthy();
  });

  it("subscribes to resize changes and removes listeners on unmount", () => {
    const resizeObserver = installResizeObserverMock();
    const addEventListener = vi.spyOn(window, "addEventListener");
    const removeEventListener = vi.spyOn(window, "removeEventListener");

    const { unmount } = render(<SideLayoutProbe enabled={true} dep="a" />);

    expect(addEventListener).toHaveBeenCalledWith("resize", expect.any(Function));
    expect(resizeObserver.instances[0].observe).toHaveBeenCalledTimes(1);

    unmount();

    expect(removeEventListener).toHaveBeenCalledWith("resize", expect.any(Function));
    expect(resizeObserver.instances[0].disconnect).toHaveBeenCalledTimes(1);
  });
});
