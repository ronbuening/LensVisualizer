/**
 * LensIndexFilterPanel — custom filter UI for the /lenses catalog page.
 *
 * This component owns only presentation. All committed filter state, numeric
 * draft text, and update semantics stay in the local filter hook so the route
 * and the panel stay easy to reason about.
 */

import type { CSSProperties, KeyboardEvent } from "react";
import { formatFilterValue } from "./catalog.js";
import type {
  CustomFilterState,
  FilterBounds,
  ImageFormatOption,
  MakerOption,
  MountOption,
  NumericFilterField,
} from "./types.js";
import type { Theme } from "../../types/theme.js";
import type { ImageFormatId, LensMountId } from "../../utils/catalog/lensTaxonomy.js";
import { countSuffix } from "../../utils/style/styles.js";

interface LensIndexFilterPanelProps {
  theme: Theme;
  customFilter: CustomFilterState;
  bounds: FilterBounds;
  makerOptions: MakerOption[];
  mountOptions: MountOption[];
  imageFormatOptions: ImageFormatOption[];
  filterInputValues: Record<NumericFilterField, string>;
  activeFilters: boolean;
  onClearFilters: () => void;
  onClearMakerSelection: () => void;
  onToggleMaker: (makerSlug: string) => void;
  onClearMountSelection: () => void;
  onToggleMount: (mountId: LensMountId) => void;
  onClearImageFormatSelection: () => void;
  onToggleImageFormat: (formatId: ImageFormatId) => void;
  onApplyNumericField: (field: NumericFilterField, value: number) => void;
  onNumericInputChange: (field: NumericFilterField, value: string) => void;
  onNumericInputCommit: (field: NumericFilterField) => void;
  onNumericInputKeyDown: (field: NumericFilterField, event: KeyboardEvent<HTMLInputElement>) => void;
}

interface NumericControlDefinition {
  field: NumericFilterField;
  label: string;
  sliderId: string;
  inputId: string;
  suffix?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  inputMode: "decimal" | "numeric";
}

interface FilterChipSectionProps<TOption, TId extends string> {
  theme: Theme;
  title: string;
  allLabel: string;
  options: readonly TOption[];
  selectedIds: readonly TId[];
  onToggle: (id: TId) => void;
  onClear: () => void;
  getId: (option: TOption) => TId;
  getLabel: (option: TOption) => string;
}

const FILTER_TITLE_STYLE: CSSProperties = {
  fontSize: "0.9rem",
  fontWeight: 600,
  marginTop: 0,
  marginBottom: "0.6rem",
};

const FILTER_CHIP_GROUP_STYLE: CSSProperties = {
  display: "flex",
  gap: "0.5rem",
  flexWrap: "wrap",
};

function buildToggleButtonStyle(theme: Theme, active: boolean): CSSProperties {
  return {
    padding: "0.25rem 0.75rem",
    fontSize: "0.8rem",
    fontFamily: "inherit",
    border: `1px solid ${active ? theme.toggleActiveBorder : theme.toggleBorder}`,
    borderRadius: 4,
    cursor: "pointer",
    backgroundColor: active ? theme.toggleActiveBg : theme.toggleBg,
    color: active ? theme.toggleActiveText : theme.toggleInactiveText,
    fontWeight: active ? 600 : 400,
  };
}

function FilterChipSection<TOption, TId extends string>({
  theme: t,
  title,
  allLabel,
  options,
  selectedIds,
  onToggle,
  onClear,
  getId,
  getLabel,
}: FilterChipSectionProps<TOption, TId>) {
  const allSelected = selectedIds.length === 0;
  const chipStyle = (active: boolean): CSSProperties => ({
    ...buildToggleButtonStyle(t, active),
    textAlign: "left",
  });

  return (
    <section>
      <h3 style={FILTER_TITLE_STYLE}>
        {title}
        <span style={countSuffix(t, { fontSize: "0.78rem" })}>
          {allSelected ? allLabel : `${selectedIds.length} selected`}
        </span>
      </h3>
      <div style={FILTER_CHIP_GROUP_STYLE}>
        <button type="button" style={chipStyle(allSelected)} onClick={onClear} aria-pressed={allSelected}>
          {allLabel}
        </button>
        {options.map((option) => {
          const id = getId(option);
          const selected = selectedIds.includes(id);
          return (
            <button
              key={id}
              type="button"
              style={chipStyle(selected)}
              onClick={() => onToggle(id)}
              aria-pressed={selected}
            >
              {getLabel(option)}
            </button>
          );
        })}
      </div>
    </section>
  );
}

function NumericFilterControl({
  theme: t,
  filterInputValues,
  onNumericInputChange,
  onNumericInputCommit,
  onNumericInputKeyDown,
  onSliderChange,
  control,
}: {
  theme: Theme;
  filterInputValues: Record<NumericFilterField, string>;
  onNumericInputChange: (field: NumericFilterField, value: string) => void;
  onNumericInputCommit: (field: NumericFilterField) => void;
  onNumericInputKeyDown: (field: NumericFilterField, event: KeyboardEvent<HTMLInputElement>) => void;
  onSliderChange: (field: NumericFilterField, value: number) => void;
  control: NumericControlDefinition;
}) {
  const sliderLabelStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "0.75rem",
    fontSize: "0.8rem",
    color: t.label,
    marginBottom: "0.35rem",
  };

  const sliderStyle: CSSProperties = {
    width: "100%",
    accentColor: t.descLinkColor,
  };

  const numericInputGroupStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "0.35rem",
  };

  const numericInputStyle: CSSProperties = {
    width: "5.75rem",
    padding: "0.3rem 0.45rem",
    border: `1px solid ${t.panelBorder}`,
    borderRadius: 4,
    backgroundColor: t.bg,
    color: t.body,
    fontFamily: "inherit",
    fontSize: "0.8rem",
  };

  const numericInputSuffixStyle: CSSProperties = {
    color: t.label,
    fontSize: "0.8rem",
  };

  return (
    <div>
      <div style={sliderLabelStyle}>
        <label htmlFor={control.inputId}>{control.label}</label>
        <div style={numericInputGroupStyle}>
          <input
            id={control.inputId}
            type="number"
            min={control.min}
            max={control.max}
            step={control.step}
            inputMode={control.inputMode}
            value={filterInputValues[control.field]}
            onChange={(event) => onNumericInputChange(control.field, event.currentTarget.value)}
            onBlur={() => onNumericInputCommit(control.field)}
            onKeyDown={(event) => onNumericInputKeyDown(control.field, event)}
            style={numericInputStyle}
            aria-label={`${control.label} value`}
          />
          {control.suffix && <span style={numericInputSuffixStyle}>{control.suffix}</span>}
        </div>
      </div>
      <input
        id={control.sliderId}
        aria-label={`${control.label} slider`}
        type="range"
        min={control.min}
        max={control.max}
        step={control.step}
        value={control.value}
        onChange={(event) => onSliderChange(control.field, Number(event.currentTarget.value))}
        style={sliderStyle}
      />
    </div>
  );
}

export default function LensIndexFilterPanel({
  theme: t,
  customFilter,
  bounds,
  makerOptions,
  mountOptions,
  imageFormatOptions,
  filterInputValues,
  activeFilters,
  onClearFilters,
  onClearMakerSelection,
  onToggleMaker,
  onClearMountSelection,
  onToggleMount,
  onClearImageFormatSelection,
  onToggleImageFormat,
  onApplyNumericField,
  onNumericInputChange,
  onNumericInputCommit,
  onNumericInputKeyDown,
}: LensIndexFilterPanelProps) {
  const filterBlockStyle: CSSProperties = {
    backgroundColor: t.panelBg,
    border: `1px solid ${t.panelBorder}`,
    borderRadius: 8,
    padding: "1rem",
    marginBottom: "1.5rem",
  };

  const rangeGridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "0.75rem 1rem",
  };

  const focalControls: NumericControlDefinition[] = [
    {
      field: "focalMin",
      label: "Minimum focal length",
      sliderId: "custom-filter-focal-min-slider",
      inputId: "custom-filter-focal-min-input",
      suffix: "mm",
      value: customFilter.focalMin,
      min: bounds.focalMin,
      max: bounds.focalMax,
      step: 0.1,
      inputMode: "decimal",
    },
    {
      field: "focalMax",
      label: "Maximum focal length",
      sliderId: "custom-filter-focal-max-slider",
      inputId: "custom-filter-focal-max-input",
      suffix: "mm",
      value: customFilter.focalMax,
      min: bounds.focalMin,
      max: bounds.focalMax,
      step: 0.1,
      inputMode: "decimal",
    },
  ];

  const apertureControls: NumericControlDefinition[] = [
    {
      field: "apertureMin",
      label: "Minimum aperture",
      sliderId: "custom-filter-aperture-min-slider",
      inputId: "custom-filter-aperture-min-input",
      value: customFilter.apertureMin,
      min: bounds.apertureMin,
      max: bounds.apertureMax,
      step: 0.05,
      inputMode: "decimal",
    },
    {
      field: "apertureMax",
      label: "Maximum aperture",
      sliderId: "custom-filter-aperture-max-slider",
      inputId: "custom-filter-aperture-max-input",
      value: customFilter.apertureMax,
      min: bounds.apertureMin,
      max: bounds.apertureMax,
      step: 0.05,
      inputMode: "decimal",
    },
  ];

  const patentYearControls: NumericControlDefinition[] = [
    {
      field: "patentYearMin",
      label: "Minimum patent year",
      sliderId: "custom-filter-patent-year-min-slider",
      inputId: "custom-filter-patent-year-min-input",
      value: customFilter.patentYearMin,
      min: bounds.patentYearMin,
      max: bounds.patentYearMax,
      step: 1,
      inputMode: "numeric",
    },
    {
      field: "patentYearMax",
      label: "Maximum patent year",
      sliderId: "custom-filter-patent-year-max-slider",
      inputId: "custom-filter-patent-year-max-input",
      value: customFilter.patentYearMax,
      min: bounds.patentYearMin,
      max: bounds.patentYearMax,
      step: 1,
      inputMode: "numeric",
    },
  ];

  return (
    <section id="custom-filter-panel" aria-label="Custom filter controls" style={filterBlockStyle}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.75rem",
          flexWrap: "wrap",
          marginBottom: "1rem",
        }}
      >
        <div>
          <h2 style={{ ...FILTER_TITLE_STYLE, marginBottom: "0.25rem" }}>Custom Filter</h2>
          <p style={{ margin: 0, fontSize: "0.78rem", color: t.muted }}>
            Adjust the ranges below and optionally select makers, mounts, or image formats.
          </p>
        </div>
        <button
          type="button"
          style={buildToggleButtonStyle(t, activeFilters)}
          onClick={onClearFilters}
          disabled={!activeFilters}
        >
          Clear Filters
        </button>
      </div>

      <div style={{ display: "grid", gap: "1rem" }}>
        <section>
          <h3 style={FILTER_TITLE_STYLE}>
            Focal Length
            <span style={countSuffix(t, { fontSize: "0.78rem" })}>
              {formatFilterValue(customFilter.focalMin)}–{formatFilterValue(customFilter.focalMax)}mm
            </span>
          </h3>
          <div style={rangeGridStyle}>
            {focalControls.map((control) => (
              <NumericFilterControl
                key={control.field}
                theme={t}
                filterInputValues={filterInputValues}
                onNumericInputChange={onNumericInputChange}
                onNumericInputCommit={onNumericInputCommit}
                onNumericInputKeyDown={onNumericInputKeyDown}
                onSliderChange={onApplyNumericField}
                control={control}
              />
            ))}
          </div>
        </section>

        <section>
          <h3 style={FILTER_TITLE_STYLE}>
            Aperture
            <span style={countSuffix(t, { fontSize: "0.78rem" })}>
              f/{formatFilterValue(customFilter.apertureMin)}–f/{formatFilterValue(customFilter.apertureMax)}
            </span>
          </h3>
          <div style={rangeGridStyle}>
            {apertureControls.map((control) => (
              <NumericFilterControl
                key={control.field}
                theme={t}
                filterInputValues={filterInputValues}
                onNumericInputChange={onNumericInputChange}
                onNumericInputCommit={onNumericInputCommit}
                onNumericInputKeyDown={onNumericInputKeyDown}
                onSliderChange={onApplyNumericField}
                control={control}
              />
            ))}
          </div>
        </section>

        <section>
          <h3 style={FILTER_TITLE_STYLE}>
            Patent Date
            <span style={countSuffix(t, { fontSize: "0.78rem" })}>
              {customFilter.patentYearMin}–{customFilter.patentYearMax}
            </span>
          </h3>
          <div style={rangeGridStyle}>
            {patentYearControls.map((control) => (
              <NumericFilterControl
                key={control.field}
                theme={t}
                filterInputValues={filterInputValues}
                onNumericInputChange={onNumericInputChange}
                onNumericInputCommit={onNumericInputCommit}
                onNumericInputKeyDown={onNumericInputKeyDown}
                onSliderChange={onApplyNumericField}
                control={control}
              />
            ))}
          </div>
        </section>

        <FilterChipSection
          theme={t}
          title="Maker"
          allLabel="All Makers"
          options={makerOptions}
          selectedIds={customFilter.makerSlugs}
          onToggle={onToggleMaker}
          onClear={onClearMakerSelection}
          getId={(maker) => maker.slug}
          getLabel={(maker) => `${maker.display} (${maker.count})`}
        />

        <FilterChipSection
          theme={t}
          title="Mount"
          allLabel="All Mounts"
          options={mountOptions}
          selectedIds={customFilter.lensMountIds}
          onToggle={onToggleMount}
          onClear={onClearMountSelection}
          getId={(mount) => mount.id}
          getLabel={(mount) => `${mount.label} (${mount.count})`}
        />

        <FilterChipSection
          theme={t}
          title="Image Format"
          allLabel="All Formats"
          options={imageFormatOptions}
          selectedIds={customFilter.imageFormatIds}
          onToggle={onToggleImageFormat}
          onClear={onClearImageFormatSelection}
          getId={(format) => format.id}
          getLabel={(format) => `${format.label} (${format.count})`}
        />
      </div>
    </section>
  );
}
