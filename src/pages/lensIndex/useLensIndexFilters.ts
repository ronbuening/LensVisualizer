/**
 * useLensIndexFilters — local filter controller for the /lenses page.
 *
 * Keeps committed filter state separate from numeric input draft text so the
 * user can type partial values naturally while sliders and grouped results
 * continue to work from canonical committed state.
 */

import { useEffect, useMemo, useState } from "react";
import {
  clampNumericFilterValue,
  defaultCustomFilter,
  hasActiveCustomFilters,
  matchesCustomFilter,
  numericFilterInputValues,
} from "./catalog.js";
import { isSameCustomFilter } from "./urlState.js";
import type { CatalogLensEntry, CustomFilterState, FilterBounds, NumericFilterField } from "./types.js";
import type { ImageFormatId, LensMountId } from "../../utils/catalog/lensTaxonomy.js";

export interface NumericFilterConfig {
  min: number;
  max: number;
  step: number;
}

interface UseLensIndexFiltersParams {
  entries: CatalogLensEntry[];
  bounds: FilterBounds;
  initialFilter?: CustomFilterState;
}

interface LensIndexFiltersResult {
  customFilter: CustomFilterState;
  filterInputValues: Record<NumericFilterField, string>;
  filteredEntries: CatalogLensEntry[];
  activeFilters: boolean;
  numericConfigs: Record<NumericFilterField, NumericFilterConfig>;
  clearFilters: () => void;
  toggleMaker: (makerSlug: string) => void;
  clearMakerSelection: () => void;
  toggleMount: (mountId: LensMountId) => void;
  clearMountSelection: () => void;
  toggleImageFormat: (formatId: ImageFormatId) => void;
  clearImageFormatSelection: () => void;
  applyNumericField: (field: NumericFilterField, value: number) => void;
  handleNumericInputChange: (field: NumericFilterField, value: string) => void;
  commitNumericInput: (field: NumericFilterField) => void;
  handleNumericInputKeyDown: (field: NumericFilterField, event: React.KeyboardEvent<HTMLInputElement>) => void;
}

function updateNumericField(previous: CustomFilterState, field: NumericFilterField, value: number): CustomFilterState {
  switch (field) {
    case "focalMin":
      return { ...previous, focalMin: value, focalMax: Math.max(previous.focalMax, value) };
    case "focalMax":
      return { ...previous, focalMin: Math.min(previous.focalMin, value), focalMax: value };
    case "apertureMin":
      return { ...previous, apertureMin: value, apertureMax: Math.max(previous.apertureMax, value) };
    case "apertureMax":
      return { ...previous, apertureMin: Math.min(previous.apertureMin, value), apertureMax: value };
    case "patentYearMin":
      return { ...previous, patentYearMin: value, patentYearMax: Math.max(previous.patentYearMax, value) };
    case "patentYearMax":
      return { ...previous, patentYearMin: Math.min(previous.patentYearMin, value), patentYearMax: value };
  }
}

/**
 * Manage the committed and draft state for the lens-index custom filter UI.
 *
 * @param params - catalog entries and derived numeric bounds for the feature
 * @returns committed filter state, derived filtered entries, and UI handlers
 */
export default function useLensIndexFilters({
  entries,
  bounds,
  initialFilter,
}: UseLensIndexFiltersParams): LensIndexFiltersResult {
  const [customFilter, setCustomFilter] = useState<CustomFilterState>(
    () => initialFilter ?? defaultCustomFilter(bounds),
  );
  const [filterInputValues, setFilterInputValues] = useState<Record<NumericFilterField, string>>(() =>
    numericFilterInputValues(initialFilter ?? defaultCustomFilter(bounds)),
  );

  useEffect(() => {
    if (!initialFilter) return;
    setCustomFilter((previous) => (isSameCustomFilter(previous, initialFilter) ? previous : initialFilter));
  }, [initialFilter]);

  useEffect(() => {
    setFilterInputValues(numericFilterInputValues(customFilter));
  }, [customFilter]);

  const filteredEntries = useMemo(
    () => entries.filter((entry) => matchesCustomFilter(entry, customFilter, bounds)),
    [entries, customFilter, bounds],
  );

  const activeFilters = hasActiveCustomFilters(customFilter, bounds);

  const numericConfigs: Record<NumericFilterField, NumericFilterConfig> = {
    focalMin: { min: bounds.focalMin, max: bounds.focalMax, step: 0.1 },
    focalMax: { min: bounds.focalMin, max: bounds.focalMax, step: 0.1 },
    apertureMin: { min: bounds.apertureMin, max: bounds.apertureMax, step: 0.05 },
    apertureMax: { min: bounds.apertureMin, max: bounds.apertureMax, step: 0.05 },
    patentYearMin: { min: bounds.patentYearMin, max: bounds.patentYearMax, step: 1 },
    patentYearMax: { min: bounds.patentYearMin, max: bounds.patentYearMax, step: 1 },
  };

  const resetNumericInputField = (field: NumericFilterField) =>
    setFilterInputValues((previous) => ({
      ...previous,
      [field]: numericFilterInputValues(customFilter)[field],
    }));

  const applyNumericField = (field: NumericFilterField, value: number) =>
    setCustomFilter((previous) => updateNumericField(previous, field, value));

  const clearFilters = () => setCustomFilter(defaultCustomFilter(bounds));

  const toggleMaker = (makerSlug: string) =>
    setCustomFilter((previous) => ({
      ...previous,
      makerSlugs: previous.makerSlugs.includes(makerSlug)
        ? previous.makerSlugs.filter((slug) => slug !== makerSlug)
        : [...previous.makerSlugs, makerSlug].sort((a, b) => a.localeCompare(b)),
    }));

  const clearMakerSelection = () =>
    setCustomFilter((previous) => ({
      ...previous,
      makerSlugs: [],
    }));

  const toggleMount = (mountId: LensMountId) =>
    setCustomFilter((previous) => ({
      ...previous,
      lensMountIds: previous.lensMountIds.includes(mountId)
        ? previous.lensMountIds.filter((id) => id !== mountId)
        : [...previous.lensMountIds, mountId].sort((a, b) => a.localeCompare(b)),
    }));

  const clearMountSelection = () =>
    setCustomFilter((previous) => ({
      ...previous,
      lensMountIds: [],
    }));

  const toggleImageFormat = (formatId: ImageFormatId) =>
    setCustomFilter((previous) => ({
      ...previous,
      imageFormatIds: previous.imageFormatIds.includes(formatId)
        ? previous.imageFormatIds.filter((id) => id !== formatId)
        : [...previous.imageFormatIds, formatId].sort((a, b) => a.localeCompare(b)),
    }));

  const clearImageFormatSelection = () =>
    setCustomFilter((previous) => ({
      ...previous,
      imageFormatIds: [],
    }));

  const handleNumericInputChange = (field: NumericFilterField, value: string) =>
    setFilterInputValues((previous) => ({
      ...previous,
      [field]: value,
    }));

  const commitNumericInput = (field: NumericFilterField) => {
    const rawValue = filterInputValues[field].trim();
    const config = numericConfigs[field];
    if (rawValue.length === 0) {
      resetNumericInputField(field);
      return;
    }

    const parsed = Number(rawValue);
    if (Number.isNaN(parsed)) {
      resetNumericInputField(field);
      return;
    }

    applyNumericField(field, clampNumericFilterValue(parsed, config.min, config.max, config.step));
  };

  const handleNumericInputKeyDown = (field: NumericFilterField, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      commitNumericInput(field);
      event.currentTarget.blur();
    }
    if (event.key === "Escape") {
      resetNumericInputField(field);
      event.currentTarget.blur();
    }
  };

  return {
    customFilter,
    filterInputValues,
    filteredEntries,
    activeFilters,
    numericConfigs,
    clearFilters,
    toggleMaker,
    clearMakerSelection,
    toggleMount,
    clearMountSelection,
    toggleImageFormat,
    clearImageFormatSelection,
    applyNumericField,
    handleNumericInputChange,
    commitNumericInput,
    handleNumericInputKeyDown,
  };
}
