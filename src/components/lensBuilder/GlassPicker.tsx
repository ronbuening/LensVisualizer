import { useEffect, useRef, useState } from "react";
import type { ElementV2Input } from "../../types/lensDataV2.js";
import type { Theme } from "../../types/theme.js";
import type { GlassEntry } from "../../optics/glassCatalog.js";
import { searchGlass, nearestGlass } from "../../lensBuilder/glassSearch.js";
import { toggleBtn } from "../../utils/style/styles.js";
import DropdownPanel, { type DropdownPanelPos } from "../layout/DropdownPanel.js";
import { builderCaptionStyle, builderInputStyle } from "./CommitInput.js";

interface GlassPickerProps {
  element: ElementV2Input;
  theme: Theme;
  onPick: (glass: GlassEntry) => void;
}

export default function GlassPicker({ element, theme: t, onPick }: GlassPickerProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<DropdownPanelPos | null>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const results = !open ? [] : query.trim() ? searchGlass(query) : nearestGlass(element.nd, element.vd ?? 50);
  useEffect(() => {
    if (open) input.current?.focus();
  }, [open]);
  const close = () => {
    setOpen(false);
    trigger.current?.focus();
  };
  return (
    <>
      <button
        ref={trigger}
        type="button"
        aria-label={`Choose glass for ${element.name}`}
        title={`Choose a catalog glass for ${element.name}`}
        style={{ ...toggleBtn(t, open, { hasRightBorder: false, padding: "2px 6px" }), minHeight: 22, fontSize: 10 }}
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => {
          const rect = trigger.current?.getBoundingClientRect();
          if (!rect) return;
          const width = Math.min(340, window.innerWidth - 16);
          const maxHeight = Math.min(340, window.innerHeight - 32);
          setPos({
            width,
            maxHeight,
            left: Math.max(8, Math.min(rect.right - width, window.innerWidth - width - 8)),
            top: Math.max(8, Math.min(rect.bottom + 4, window.innerHeight - maxHeight - 8)),
          });
          setOpen(!open);
        }}
      >
        Pick…
      </button>
      <DropdownPanel open={open} pos={pos} triggerRef={trigger} onClose={() => setOpen(false)} theme={t}>
        <div
          role="dialog"
          aria-label={`Glass for ${element.name}`}
          style={{ padding: 10, color: t.body, fontSize: 12 }}
          onKeyDown={(e) => {
            if (e.key === "Escape") close();
          }}
        >
          <input
            ref={input}
            aria-label={`Search glass for ${element.name}`}
            placeholder="Glass name, e.g. N-BK7"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={builderInputStyle(t)}
          />
          <div style={{ ...builderCaptionStyle(t), margin: "8px 0 4px" }}>
            {query.trim() ? "Name matches" : `Nearest to nd ${element.nd} / νd ${element.vd ?? "—"}`}
          </div>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 2 }}>
            {results.map((g) => (
              <li key={`${g.vendor}-${g.name}`}>
                <button
                  type="button"
                  style={{
                    ...toggleBtn(t, false, { hasRightBorder: false, padding: "4px 8px" }),
                    width: "100%",
                    justifyContent: "flex-start",
                    fontSize: 11,
                    letterSpacing: "0.02em",
                    borderRadius: 4,
                    minHeight: 24,
                    color: t.selectorText,
                  }}
                  onClick={() => {
                    onPick(g);
                    close();
                  }}
                >
                  {g.name} · {g.vendor} · {g.nd} / {g.vd}
                </button>
              </li>
            ))}
          </ul>
          {!results.length && <p style={{ margin: "4px 0", color: t.muted }}>No glass matches</p>}
          <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
            {query && (
              <button
                type="button"
                style={{ ...toggleBtn(t, false, { hasRightBorder: false }), borderRadius: 4 }}
                onClick={() => setQuery("")}
              >
                Nearest to nd/vd
              </button>
            )}
            <button
              type="button"
              style={{ ...toggleBtn(t, false, { hasRightBorder: false }), borderRadius: 4 }}
              onClick={close}
            >
              Close glass search
            </button>
          </div>
        </div>
      </DropdownPanel>
    </>
  );
}
