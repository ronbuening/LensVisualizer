/** Guard user edits only. Links, patent rows and comparison can inspect exact supplied coordinates. */
import { useLayoutEffect, useRef, useState } from "react";
import type { RuntimeLens } from "../../types/optics.js";
import { focusReadingAt, focusStepReadings } from "../../optics/optics.js";

type Selection = "nearest" | "forward" | "backward" | "finite";

interface Scan {
  lens: RuntimeLens;
  zoomT: number;
  aberrationT: number;
  controller: AbortController;
  accepted: Map<number, boolean>;
  usable: number[];
  finite: number[];
  pending?: Promise<void>;
}

async function scanFocusSteps(scan: Scan) {
  const { lens, zoomT, aberrationT, controller, accepted, usable, finite } = scan;
  let started = performance.now();
  for (const { focusT, kind } of focusStepReadings(lens, zoomT, aberrationT)) {
    accepted.set(focusT, kind !== "beyond-infinity" && kind !== "unavailable");
    if (kind === "finite") finite.push(focusT);
    if (kind === "finite" || kind === "infinity") usable.push(focusT);
    if (performance.now() - started >= 2) {
      await new Promise<void>((resolve) => setTimeout(resolve, 0));
      if (controller.signal.aborted) return;
      started = performance.now();
    }
  }
}

function chooseStep(steps: readonly number[], requested: number, selection: Selection, currentFocus: number): number {
  if (!steps.length) return 0;
  const next = steps.findIndex((step) => step >= requested);
  if (next === -1) return selection === "forward" ? currentFocus : steps[steps.length - 1];
  const lower = steps[next - 1] ?? 0;
  const upper = steps[next];
  if (selection === "forward") return upper;
  if (selection === "backward") return lower;
  if (selection === "finite" && next === 0) return upper;
  // Half-step ties from decimal controls can differ in their final binary digit.
  return requested - lower <= upper - requested + Number.EPSILON ? lower : upper;
}

export default function useFocusSelection(
  L: RuntimeLens,
  zoomT: number,
  aberrationT: number,
  focusT: number,
  active: boolean,
) {
  const scan = useRef<Scan | null>(null);
  const generation = useRef(0);
  const [empty, setEmpty] = useState<Pick<Scan, "lens" | "zoomT" | "aberrationT"> | null>(null);

  useLayoutEffect(
    () => () => {
      generation.current++;
    },
    [L, zoomT, aberrationT, focusT, active],
  );
  useLayoutEffect(
    () => () => {
      scan.current?.controller.abort();
      scan.current = null;
    },
    [L, active],
  );

  function select(
    requested: number,
    zoom: number,
    aberration: number,
    selection: Selection,
    commit: (focus: number) => void,
  ) {
    const current = ++generation.current;
    let entry = scan.current;
    if (entry && (entry.lens !== L || entry.zoomT !== zoom || entry.aberrationT !== aberration)) {
      entry.controller.abort();
      scan.current = null;
      entry = null;
    }
    // A drag can cross the same rejected interval for dozens of frames. Reuse its grid verdicts
    // without preparing every rejected position in the interactive geometry cache.
    let accepted = entry?.accepted.get(requested);
    if (accepted === undefined) {
      const { kind } = focusReadingAt(requested, L, zoom, aberration);
      accepted = kind !== "beyond-infinity" && kind !== "unavailable";
    }
    if (accepted) {
      commit(requested);
      return;
    }
    if (!entry) {
      entry = scan.current = {
        lens: L,
        zoomT: zoom,
        aberrationT: aberration,
        controller: new AbortController(),
        accepted: new Map(),
        usable: [],
        finite: [],
      };
      const started = entry;
      started.pending = scanFocusSteps(started).then(() => {
        started.pending = undefined;
      });
    }
    const steps = entry;
    function applySelection() {
      if (generation.current !== current || steps.controller.signal.aborted) return;
      if (!steps.finite.length) setEmpty(steps);
      commit(chooseStep(selection === "finite" ? steps.finite : steps.usable, requested, selection, focusT));
    }
    // Once classified, snap the controlled input in the native change event's React batch.
    if (steps.pending) void steps.pending.then(applySelection);
    else applySelection();
  }

  return {
    select,
    noFiniteFocus: active && empty?.lens === L && empty.zoomT === zoomT && empty.aberrationT === aberrationT,
  };
}
