/**
 * RelationshipEntityPicker — searchable inventor/assignee chooser.
 *
 * Merges the author and assignee indexes into one option list (sorted by patent
 * count), filters by normalized search text, and calls onPick with the chosen
 * PartyRef. The full variant renders a grid of cards for the no-focus intro; the
 * compact variant renders a single input with a small dropdown above an active
 * map.
 */

import { useMemo, useRef, useState, type CSSProperties } from "react";
import { AUTHORS } from "../../utils/catalog/authorCatalog.js";
import { ASSIGNEES } from "../../utils/catalog/assigneeCatalog.js";
import { normalizeSearchText } from "../../utils/catalog/searchCatalog.js";
import type { Theme } from "../../types/theme.js";
import type { PartyRef } from "../../utils/catalog/relationshipGraph.js";
import { panelCard, searchInput, VISUALLY_HIDDEN } from "../../utils/style/styles.js";
import roleChip from "./roleChip.js";
import { pluralize } from "../../utils/text.js";
import useDismissableDropdown from "../hooks/useDismissableDropdown.js";

interface RelationshipEntityPickerProps {
  theme: Theme;
  onPick: (ref: PartyRef) => void;
  compact?: boolean;
}

interface PickerOption {
  ref: PartyRef;
  normalized: string;
  patentCount: number;
  lensCount: number;
}

const FULL_LIMIT = 40;
const COMPACT_LIMIT = 8;

/** All inventors and assignees as picker options, sorted by patent count desc. */
function buildOptions(): PickerOption[] {
  const options: PickerOption[] = [
    ...AUTHORS.map((a) => ({
      ref: { role: "author" as const, name: a.name, slug: a.slug },
      normalized: normalizeSearchText(a.name),
      patentCount: a.patentCount,
      lensCount: a.lensKeys.length,
    })),
    ...ASSIGNEES.map((a) => ({
      ref: { role: "assignee" as const, name: a.name, slug: a.slug },
      normalized: normalizeSearchText(a.name),
      patentCount: a.patentCount,
      lensCount: a.lensKeys.length,
    })),
  ];
  return options.sort(
    (left, right) => right.patentCount - left.patentCount || left.ref.name.localeCompare(right.ref.name),
  );
}

export default function RelationshipEntityPicker({ theme: t, onPick, compact = false }: RelationshipEntityPickerProps) {
  const [query, setQuery] = useState("");
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const compactInputRef = useRef<HTMLInputElement>(null);
  const compactListRef = useDismissableDropdown<HTMLUListElement>(suggestionsOpen, compactInputRef, () =>
    setSuggestionsOpen(false),
  );
  const options = useMemo(buildOptions, []);

  const limit = compact ? COMPACT_LIMIT : FULL_LIMIT;
  const normalizedQuery = normalizeSearchText(query);
  const filtered = useMemo(
    () => (normalizedQuery ? options.filter((option) => option.normalized.includes(normalizedQuery)) : options),
    [options, normalizedQuery],
  );
  const shown = filtered.slice(0, limit);
  const compactListOpen = suggestionsOpen && normalizedQuery.length > 0 && shown.length > 0;

  const inputStyle: CSSProperties = {
    ...searchInput(t),
    width: "100%",
    boxSizing: "border-box",
  };

  if (compact) {
    return (
      <div style={{ position: "relative" }}>
        <label htmlFor="relationship-picker-compact" style={VISUALLY_HIDDEN}>
          Search inventors and assignees
        </label>
        <input
          ref={compactInputRef}
          id="relationship-picker-compact"
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setSuggestionsOpen(event.target.value.trim().length > 0);
          }}
          onFocus={() => setSuggestionsOpen(normalizedQuery.length > 0)}
          placeholder="Change focus — search inventors or assignees"
          aria-autocomplete="list"
          aria-controls="relationship-picker-options"
          aria-expanded={compactListOpen}
          aria-haspopup="listbox"
          style={inputStyle}
        />
        {compactListOpen && (
          <ul
            ref={compactListRef}
            id="relationship-picker-options"
            role="listbox"
            aria-label="Inventor and assignee suggestions"
            style={{
              position: "absolute",
              zIndex: 5,
              top: "100%",
              left: 0,
              right: 0,
              margin: "0.25rem 0 0",
              padding: 0,
              listStyle: "none",
              ...panelCard(t),
              maxHeight: 320,
              overflowY: "auto",
            }}
          >
            {shown.map((option) => (
              <li key={option.ref.role + ":" + option.ref.slug}>
                <button
                  type="button"
                  role="option"
                  aria-selected="false"
                  onClick={() => {
                    setQuery("");
                    setSuggestionsOpen(false);
                    onPick(option.ref);
                  }}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    borderBottom: `1px solid ${t.panelDivider}`,
                    padding: "0.5rem 0.6rem",
                    color: t.body,
                    cursor: "pointer",
                    font: "inherit",
                    fontSize: "0.78rem",
                  }}
                >
                  {option.ref.name}
                  <span style={roleChip(t, option.ref.role)}>{option.ref.role}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <div>
      <label htmlFor="relationship-picker" style={VISUALLY_HIDDEN}>
        Search inventors and assignees
      </label>
      <input
        id="relationship-picker"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search inventors or assignees"
        style={inputStyle}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "0.6rem",
          marginTop: "0.9rem",
        }}
      >
        {shown.map((option) => (
          <button
            key={option.ref.role + ":" + option.ref.slug}
            type="button"
            onClick={() => onPick(option.ref)}
            style={{
              textAlign: "left",
              ...panelCard(t),
              padding: "0.7rem",
              cursor: "pointer",
              font: "inherit",
            }}
          >
            <span style={{ color: t.descLinkColor, fontSize: "0.85rem", fontWeight: 600 }}>
              {option.ref.name}
              <span style={roleChip(t, option.ref.role)}>{option.ref.role}</span>
            </span>
            <span style={{ display: "block", color: t.label, fontSize: "0.7rem", marginTop: "0.3rem" }}>
              {option.patentCount} {pluralize(option.patentCount, "patent")} · {option.lensCount}{" "}
              {pluralize(option.lensCount, "lens")}
            </span>
          </button>
        ))}
      </div>
      {filtered.length > limit && (
        <p style={{ color: t.muted, fontSize: "0.72rem", marginTop: "0.75rem" }}>
          Showing {limit} of {filtered.length} — type to narrow.
        </p>
      )}
    </div>
  );
}
