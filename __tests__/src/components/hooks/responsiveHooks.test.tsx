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
  enabled = true,
}: {
  panelId?: string;
  lensKey?: string;
  onHeaderHeight?: (panelId: string, height: number) => void;
  enabled?: boolean;
}) {
  const { headerRef, headerHeight } = useHeaderHeight({ panelId, lensKey, onHeaderHeight, enabled });
  return (
    <>
      {enabled && <div ref={headerRef}>Header</div>}
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

/** The measured container can be absent, as while the panel shows an error state. */
function LateContainerProbe({ mounted }: { mounted: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;
  const useSideLayout = useSideLayoutDetection({ enabled: true, containerRef, deps: ["a"] });
  return (
    <>
      {mounted ? <div ref={containerRef} /> : null}
      <output>{useSideLayout ? "side" : "stacked"}</output>
    </>
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
    scrollHeight = 71.5;
    act(() => resizeObserver.trigger());
    expect(onHeaderHeight).toHaveBeenLastCalledWith("left", 72);
  });

  it("remeasures a header restored after zoom mode removes it", () => {
    const resizeObserver = installResizeObserverMock();
    const onHeaderHeight = vi.fn();
    const { rerender } = render(<HeaderHeightProbe enabled onHeaderHeight={onHeaderHeight} />);
    rerender(<HeaderHeightProbe enabled={false} onHeaderHeight={onHeaderHeight} />);
    expect(resizeObserver.instances[0].disconnect).toHaveBeenCalled();
    scrollHeight = 80;
    rerender(<HeaderHeightProbe enabled onHeaderHeight={onHeaderHeight} />);
    expect(onHeaderHeight).toHaveBeenLastCalledWith("a", 80);
    expect(resizeObserver.instances[1].observe).toHaveBeenCalled();
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

  it("picks up a container that mounts later and keeps its decision while the container is absent", () => {
    const resizeObserver = installResizeObserverMock();

    rectWidth = 900;
    const { rerender } = render(<LateContainerProbe mounted={false} />);
    expect(screen.getByText("stacked")).toBeTruthy();

    // No dependency changes when the content returns; the hook must still attach to the new element.
    rerender(<LateContainerProbe mounted />);
    expect(screen.getByText("side")).toBeTruthy();
    expect(resizeObserver.instances).toHaveLength(1);

    rerender(<LateContainerProbe mounted={false} />);
    expect(screen.getByText("side")).toBeTruthy();
    expect(resizeObserver.instances[0].disconnect).toHaveBeenCalledTimes(1);

    rerender(<LateContainerProbe mounted />);
    expect(screen.getByText("side")).toBeTruthy();
    expect(resizeObserver.instances).toHaveLength(2);
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
