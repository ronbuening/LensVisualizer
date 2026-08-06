// @vitest-environment jsdom

import { afterEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { useRef, useState } from "react";
import DropdownPanel from "../../../../src/components/layout/DropdownPanel.js";
import themes from "../../../../src/utils/theme/themes.js";

function Harness() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <button ref={triggerRef} type="button" onClick={() => setOpen(true)}>
        Open
      </button>
      <DropdownPanel
        open={open}
        pos={{ top: 10, left: 10 }}
        triggerRef={triggerRef}
        onClose={() => setOpen(false)}
        theme={themes.dark}
      >
        <button type="button">Inside</button>
      </DropdownPanel>
    </>
  );
}

describe("DropdownPanel", () => {
  afterEach(cleanup);

  it("keeps trigger and panel interactions open, then closes on Escape", () => {
    render(<Harness />);
    fireEvent.click(screen.getByRole("button", { name: "Open" }));
    const inside = screen.getByRole("button", { name: "Inside" });

    fireEvent.mouseDown(screen.getByRole("button", { name: "Open" }));
    fireEvent.mouseDown(inside);
    expect(screen.getByRole("button", { name: "Inside" })).toBeDefined();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("button", { name: "Inside" })).toBeNull();
  });

  it("closes on an outside mousedown", () => {
    render(<Harness />);
    fireEvent.click(screen.getByRole("button", { name: "Open" }));
    fireEvent.mouseDown(document.body);
    expect(screen.queryByRole("button", { name: "Inside" })).toBeNull();
  });
});
