// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { useMemo, useState } from "react";
import GlassMap from "../../../../src/components/lensBuilder/GlassMap.js";
import type { GlassEntry } from "../../../../src/optics/glassCatalog.js";
import BuilderEditor from "../../../../src/components/lensBuilder/BuilderEditor.js";
import { createTemplate, validateDraft } from "../../../../src/lensBuilder/draft.js";
import type { LensDataV2Input } from "../../../../src/types/lensDataV2.js";
import themes from "../../../../src/utils/theme/themes.js";

let latest: LensDataV2Input;
const onHighlight = vi.fn();

function Harness({
  initial,
  selectedElementId = null,
}: {
  initial: LensDataV2Input;
  selectedElementId?: number | null;
}) {
  const [draft, setDraft] = useState(initial);
  const validation = useMemo(() => validateDraft(draft), [draft]);
  latest = draft;
  return (
    <BuilderEditor
      draft={draft}
      theme={themes.light}
      validation={validation}
      pending={false}
      onChange={setDraft}
      onReplace={() => true}
      onDirty={() => {}}
      selectedElementId={selectedElementId}
      onHighlight={onHighlight}
    />
  );
}

function edit(label: string, value: string) {
  const input = screen.getByLabelText(label);
  fireEvent.change(input, { target: { value } });
  fireEvent.blur(input);
}

beforeEach(() => {
  onHighlight.mockClear();
  vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => setTimeout(() => cb(0), 0));
});
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("lens builder optical train", () => {
  it("edits a fixed air gap and both ends of the focus-scheduled back focus", () => {
    render(<Harness initial={createTemplate()} />);
    const train = screen.getByRole("region", { name: "Optical train" });
    expect(within(train).getAllByRole("article")).toHaveLength(3);
    expect(within(train).getByRole("group", { name: "Aperture stop" })).toBeTruthy();
    edit("Air gap after L1", "6");
    expect(latest.surfaces[1].d).toBe(6);
    expect((screen.getByLabelText("Air gap after L1") as HTMLInputElement).value).toBe("6");
    /* The template's 40.6407… mm back focus displays rounded; leaving it untouched keeps the authored value. */
    const infinity = screen.getByLabelText("Back focus after L3 at infinity") as HTMLInputElement;
    expect(infinity.value).toBe("40.6408");
    fireEvent.focus(infinity);
    fireEvent.blur(infinity);
    expect(latest.gaps?.["6"].values[0][0]).toBe(createTemplate().gaps!["6"].values[0][0]);
    edit("Back focus after L3 at close focus", "44");
    expect(latest.gaps?.["6"].values).toEqual([[createTemplate().gaps!["6"].values[0][0], 44]]);
    expect(validateDraft(latest).ok).toBe(true);
  });

  it("keeps an explicitly renamed element in sync with the editor and exported draft", () => {
    render(<Harness initial={createTemplate()} />);
    edit("L1 name", "L10");
    expect(latest.elements[0].name).toBe("L10");
    expect((screen.getByLabelText("L10 name") as HTMLInputElement).value).toBe("L10");
    edit("L10 thickness", "4.2");
    expect(latest.elements[0].name).toBe("L10");
    const exported = JSON.parse((screen.getByLabelText("Advanced JSON") as HTMLTextAreaElement).value);
    expect(exported.elements[0].name).toBe("L10");
    expect((screen.getByLabelText("L10 name") as HTMLInputElement).value).toBe(exported.elements[0].name);
  });

  it("keeps glass map Pick and Enter within the vendor filter and a replaced collection", () => {
    const a: GlassEntry = { name: "A", vendor: "Schott", nd: 1.5, vd: 60, source: "Synthetic" };
    const b: GlassEntry = { name: "B", vendor: "Ohara", nd: 1.6, vd: 50, source: "Synthetic" };
    const c: GlassEntry = { ...b, name: "C", nd: 1.61 };
    const onPick = vi.fn();
    const props = { current: a, theme: themes.light, label: "test", touch: false, onPick };
    const { rerender } = render(<GlassMap {...props} glasses={[a, b]} />);
    const map = screen.getByRole("application");
    expect(screen.getByRole("button", { name: "Pick A" })).toBeTruthy();
    fireEvent.change(screen.getByLabelText("Glass map vendor for test"), { target: { value: "Ohara" } });
    expect(screen.queryByRole("button", { name: "Pick A" })).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Pick B" }));
    expect(onPick).toHaveBeenLastCalledWith(b);
    fireEvent.keyDown(map, { key: "Enter" });
    expect(onPick).toHaveBeenLastCalledWith(b);
    rerender(<GlassMap {...props} glasses={[a, c]} />);
    fireEvent.keyDown(map, { key: "Enter" });
    expect(onPick).toHaveBeenLastCalledWith(c);
    expect(screen.getByRole("button", { name: "Pick C" })).toBeTruthy();
    rerender(<GlassMap {...props} glasses={[a]} />);
    onPick.mockClear();
    expect(screen.queryByRole("button", { name: /^Pick / })).toBeNull();
    fireEvent.keyDown(map, { key: "Enter" });
    expect(onPick).not.toHaveBeenCalled();
  });

  it("cements two elements into one card with a shared junction, then splits them again", () => {
    const before = createTemplate();
    render(<Harness initial={before} />);
    fireEvent.click(screen.getByRole("button", { name: "Cement L1 to L2" }));
    const card = screen.getByRole("article", { name: "Cemented group L1+L2" });
    expect(latest.elements.slice(0, 2).map((e) => e.cemented)).toEqual(["D1", "D1"]);
    expect(latest.surfaces).toHaveLength(before.surfaces.length - 1);
    expect((within(card).getByLabelText("L1/L2 junction radius") as HTMLInputElement).value).toBe("-50");
    expect(screen.queryByLabelText("Air gap after L1")).toBeNull();
    expect(validateDraft(latest).ok).toBe(true);

    fireEvent.click(within(card).getByRole("button", { name: "Split L1 from L2" }));
    expect(screen.queryByRole("article", { name: "Cemented group L1+L2" })).toBeNull();
    expect(latest.surfaces).toHaveLength(before.surfaces.length);
    expect(latest.elements.every((e) => e.cemented === undefined)).toBe(true);
    expect(screen.getByLabelText("Air gap after L1")).toBeTruthy();
    expect(validateDraft(latest).ok).toBe(true);
  });

  it("picks a material by common glass, by search, by glass map keyboard and by typed nd/νd", () => {
    render(<Harness initial={createTemplate()} />);
    const chip = screen.getByRole("button", { name: "L2 material" });
    fireEvent.click(chip);
    let dialog = screen.getByRole("dialog", { name: "Choose material for L2" });
    expect(document.activeElement).toBe(within(dialog).getByLabelText("Search glass for L2"));
    fireEvent.click(within(dialog).getByRole("button", { name: /^Use N-SF5 / }));
    expect(screen.queryByRole("dialog")).toBeNull();
    expect(document.activeElement).toBe(chip);
    expect(latest.elements[1]).toMatchObject({ glass: "N-SF5", nd: 1.67271, vd: 32.25 });
    expect(chip.textContent).toContain("N-SF5");
    expect(chip.textContent).toContain("Schott");

    fireEvent.click(chip);
    dialog = screen.getByRole("dialog", { name: "Choose material for L2" });
    fireEvent.change(within(dialog).getByLabelText("Search glass for L2"), { target: { value: "n-bk7" } });
    fireEvent.click(within(dialog).getByRole("button", { name: /^N-BK7 · Schott · 1\.5168 \/ 64\.17/ }));
    expect(latest.elements[1]).toMatchObject({ glass: "N-BK7", nd: 1.5168, vd: 64.17 });

    fireEvent.click(chip);
    dialog = screen.getByRole("dialog", { name: "Choose material for L2" });
    fireEvent.click(within(dialog).getByRole("tab", { name: "Glass map" }));
    const map = within(dialog).getByRole("application", { name: /^Glass map for L2/ });
    fireEvent.keyDown(map, { key: "ArrowRight" });
    const readout = dialog.querySelector("p[aria-live]")!.textContent!;
    const [name] = readout.split(" · ");
    fireEvent.keyDown(map, { key: "Enter" });
    expect(latest.elements[1].glass).toBe(name);
    expect(latest.elements[1].vd).toBeLessThan(64.17);

    fireEvent.click(chip);
    dialog = screen.getByRole("dialog", { name: "Choose material for L2" });
    fireEvent.click(within(dialog).getByRole("tab", { name: "Custom" }));
    fireEvent.change(within(dialog).getByLabelText("Custom nd for L2"), { target: { value: "1.7" } });
    fireEvent.change(within(dialog).getByLabelText("Custom vd for L2"), { target: { value: "40" } });
    expect(within(dialog).getByRole("list", { name: /^Nearest matches to nd 1\.7/ })).toBeTruthy();
    fireEvent.click(within(dialog).getByRole("button", { name: "Use custom nd/νd" }));
    expect(latest.elements[1]).toMatchObject({ nd: 1.7, vd: 40 });
    expect(latest.elements[1].glass).toBeUndefined();
    expect(validateDraft(latest).ok).toBe(true);
  });

  it("inserts an element, keeps type in step with shape, and shows refusals in the alert", () => {
    render(<Harness initial={createTemplate()} />);
    fireEvent.click(screen.getByRole("button", { name: "Insert element after L1" }));
    expect(latest.elements.map((e) => e.name)).toEqual(["L1", "L2", "L3", "L4"]);
    expect(latest.elements[1].glass).toBe("N-BK7");
    expect(validateDraft(latest).ok).toBe(true);
    /* Flattening L1's rear makes it plano-convex; its authored type followed the computed shape, so it updates. */
    fireEvent.click(screen.getByRole("button", { name: "L1 rear flat" }));
    expect(latest.surfaces[1].R).toBe("flat");
    expect(latest.elements[0].type).toBe("Plano-Convex Positive");
    fireEvent.click(screen.getByRole("button", { name: "L1 rear flat" }));
    expect(latest.surfaces[1].R).toBe(-50);

    edit("L1 front diameter", "-10");
    expect(screen.getByRole("alert").textContent).toMatch(/Semi-diameter must be a finite, positive number/);
    expect(latest.surfaces[0].sd).toBe(11);
    for (let n = 0; n < 3; n++) fireEvent.click(screen.getByRole("button", { name: "Delete L1" }));
    expect(latest.elements).toHaveLength(1);
    fireEvent.click(screen.getByRole("button", { name: "Delete L1" }));
    expect(screen.getByRole("alert").textContent).toMatch(/at least one glass element/);
    expect(latest.elements).toHaveLength(1);
  });

  it("links the diameters of a group, reports hover and focus, and marks the diagram's selection", () => {
    render(<Harness initial={createTemplate()} selectedElementId={3} />);
    expect(screen.getByRole("article", { name: "Element L3" }).getAttribute("aria-current")).toBe("true");
    expect(screen.getByRole("article", { name: "Element L1" }).getAttribute("aria-current")).toBeNull();
    expect(screen.getByRole("button", { name: "Link L1 diameters" }).getAttribute("aria-pressed")).toBe("true");
    edit("L1 front diameter", "24");
    expect([latest.surfaces[0].sd, latest.surfaces[1].sd]).toEqual([12, 12]);
    fireEvent.click(screen.getByRole("button", { name: "Link L1 diameters" }));
    edit("L1 rear diameter", "20");
    expect([latest.surfaces[0].sd, latest.surfaces[1].sd]).toEqual([12, 10]);
    act(() => (screen.getByLabelText("L2 thickness") as HTMLInputElement).focus());
    expect(onHighlight).toHaveBeenLastCalledWith(2);
    act(() => (screen.getByLabelText("L2 thickness") as HTMLInputElement).blur());
    expect(onHighlight).toHaveBeenLastCalledWith(null);
  });

  it("falls back to Advanced JSON with readable reasons when the train cannot show the draft", () => {
    const draft = createTemplate();
    draft.media = [{ id: "oil", name: "Immersion oil", nd: 1.515 }];
    render(<Harness initial={draft} />);
    const train = screen.getByRole("region", { name: "Optical train" });
    expect(within(train).getByText("Undrawn media layers need Advanced JSON.")).toBeTruthy();
    expect(screen.queryByRole("button", { name: "L1 material" })).toBeNull();
    const details = screen.getByLabelText("Advanced JSON").closest("details") as HTMLDetailsElement;
    expect(details.open).toBe(true);
    /* Removing the media in Advanced JSON brings the train back. */
    const { media: _media, ...plain } = draft;
    fireEvent.change(screen.getByLabelText("Advanced JSON"), { target: { value: JSON.stringify(plain) } });
    fireEvent.click(screen.getByRole("button", { name: "Apply JSON" }));
    expect(screen.getByRole("button", { name: "L1 material" })).toBeTruthy();
  });
});
