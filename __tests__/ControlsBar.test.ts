// @vitest-environment jsdom

/**
 * ControlsBar behavior tests.
 *
 * Replaces the old contract-only coverage with interaction checks for the
 * shared ray toggles, chromatic controls, and scale-mode buttons that the
 * viewer shell depends on.
 */

import { createElement } from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import ControlsBar from "../src/components/layout/ControlsBar.js";
import { SET_RAY_TOGGLE, SET_SCALE_MODE } from "../src/utils/lensReducer.js";
import themes from "../src/utils/themes.js";

describe("ControlsBar", () => {
  const dispatch = vi.fn();

  beforeEach(() => {
    dispatch.mockReset();
  });

  afterEach(() => {
    cleanup();
  });

  it("dispatches the expected actions for ray toggles and ray mode changes", () => {
    render(
      createElement(ControlsBar, {
        theme: themes.dark,
        compact: false,
        showScaleMode: true,
        showOnAxis: true,
        showOffAxis: "off",
        rayTracksF: false,
        showChromatic: false,
        chromR: true,
        chromG: true,
        chromB: true,
        showPupils: false,
        scaleMode: "independent",
        dispatch,
      }),
    );

    fireEvent.click(screen.getByRole("button", { name: "ON-AXIS" }));
    fireEvent.click(screen.getByRole("button", { name: "OFF-AXIS" }));
    fireEvent.click(screen.getByRole("button", { name: /TRACKS FOCUS$/ }));

    expect(dispatch).toHaveBeenCalledWith({ type: SET_RAY_TOGGLE, field: "showOnAxis", value: false });
    expect(dispatch).toHaveBeenCalledWith({ type: SET_RAY_TOGGLE, field: "showOffAxis", value: "trueAngle" });
    expect(dispatch).toHaveBeenCalledWith({ type: SET_RAY_TOGGLE, field: "rayTracksF", value: true });
  });

  it("shows chromatic channel controls when color tracing is enabled and updates scale mode", () => {
    render(
      createElement(ControlsBar, {
        theme: themes.dark,
        compact: false,
        showScaleMode: true,
        showOnAxis: true,
        showOffAxis: "trueAngle",
        rayTracksF: true,
        showChromatic: true,
        chromR: true,
        chromG: false,
        chromB: true,
        showPupils: false,
        scaleMode: "independent",
        dispatch,
      }),
    );

    expect(screen.queryByRole("button", { name: "PUPILS" })).toBeNull();

    fireEvent.click(screen.getByRole("button", { name: "G" }));
    fireEvent.click(screen.getAllByRole("button", { name: "NORMALIZED" })[0]!);

    expect(dispatch).toHaveBeenCalledWith({ type: SET_RAY_TOGGLE, field: "chromG", value: true });
    expect(dispatch).toHaveBeenCalledWith({ type: SET_SCALE_MODE, scaleMode: "normalized" });
  });
});
