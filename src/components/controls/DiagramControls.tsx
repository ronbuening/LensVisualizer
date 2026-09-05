/**
 * DiagramControls — Zoom, focus, and aperture slider controls for the
 * lens diagram. Extracted from LensDiagramPanel for separation of concerns.
 */

import { formatFocalLength, formatZoomFocalLength } from "./focalLengthFormatting.js";
import { formatAperture } from "./apertureFormatting.js";
import { useCallback, useEffect, useMemo } from "react";
import { eflAtFocus, formatDist } from "../../optics/optics.js";
import { fisheyeProjectionFocalLengthAtZoom, isFisheyeProjection } from "../../optics/projection.js";
import { getGroupMovementAvailability } from "../../optics/groupMovement.js";
import { isMovementAxisEnabled, perspectiveControlSteps } from "../../optics/lensMovement.js";
import { snapToZeroStop } from "../../utils/style/sliderStops.js";
import SliderControl from "./SliderControl.js";
import SliderResetButton from "./SliderResetButton.js";
import useInteractionSignal from "../hooks/useInteractionSignal.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";
import type { GroupMovementMode } from "../../types/groupMovement.js";

interface VarReadout {
  label: string;
  val: string;
}

interface DiagramControlsProps {
  L: RuntimeLens;
  t: Theme;
  compact: boolean;
  useSideLayout: boolean;
  zoomT: number;
  onZoomChange?: (value: number) => void;
  aberrationT: number;
  onAberrationChange?: (value: number) => void;
  focusT: number;
  onFocusChange?: (value: number) => void;
  shiftMm: number;
  tiltDeg: number;
  onShiftChange?: (value: number) => void;
  onTiltChange?: (value: number) => void;
  focusExpanded: boolean;
  onFocusExpandedChange?: (value: boolean) => void;
  varReadouts: VarReadout[];
  aberrationReadouts: VarReadout[];
  stopdownT: number;
  onStopdownChange?: (value: number) => void;
  fNumber: number;
  currentFOPEN: number;
  currentPhysStopSD: number;
  baseEPSD: number;
  dynamicEFL: number;
  effectiveFNum: number;
  workingApertureNote?: string;
  showEffectiveFocalLength: boolean;
  onToggleEffectiveFocalLength?: () => void;
  showEffectiveAperture: boolean;
  onToggleEffectiveAperture?: () => void;
  apertureExpanded: boolean;
  onApertureExpandedChange?: (value: boolean) => void;
  onSliderPointerUp?: () => void;
  onInteractionChange?: (interacting: boolean) => void;
  showSliders: boolean;
  onOpenGroupMovement?: (mode: GroupMovementMode) => void;
}

export default function DiagramControls({
  L,
  t,
  compact,
  useSideLayout,
  zoomT,
  onZoomChange,
  aberrationT,
  onAberrationChange,
  focusT,
  onFocusChange,
  shiftMm,
  tiltDeg,
  onShiftChange,
  onTiltChange,
  focusExpanded,
  onFocusExpandedChange,
  varReadouts,
  aberrationReadouts,
  stopdownT,
  onStopdownChange,
  fNumber,
  currentFOPEN,
  currentPhysStopSD,
  baseEPSD,
  dynamicEFL,
  effectiveFNum,
  workingApertureNote,
  showEffectiveFocalLength,
  onToggleEffectiveFocalLength,
  showEffectiveAperture,
  onToggleEffectiveAperture,
  apertureExpanded,
  onApertureExpandedChange,
  onSliderPointerUp,
  onInteractionChange,
  showSliders,
  onOpenGroupMovement,
}: DiagramControlsProps) {
  const { interacting, beginInteraction, endInteraction, onChangeActivity } = useInteractionSignal();
  const pcSteps = L.perspectiveControl ? perspectiveControlSteps(L.perspectiveControl) : null;
  const shiftEnabled = L.perspectiveControl ? isMovementAxisEnabled(L.perspectiveControl.shiftRangeMm) : false;
  const tiltEnabled = L.perspectiveControl ? isMovementAxisEnabled(L.perspectiveControl.tiltRangeDeg) : false;
  const groupMovementAvailability = getGroupMovementAvailability(L);

  useEffect(() => {
    onInteractionChange?.(interacting);
  }, [interacting, onInteractionChange]);

  const handlePointerUp = useCallback(() => {
    endInteraction();
    onSliderPointerUp?.();
  }, [endInteraction, onSliderPointerUp]);

  const handleZoomChange = useCallback(
    (v: number) => {
      onChangeActivity();
      onZoomChange?.(v);
    },
    [onChangeActivity, onZoomChange],
  );

  const handleFocusChange = useCallback(
    (v: number) => {
      onChangeActivity();
      onFocusChange?.(v);
    },
    [onChangeActivity, onFocusChange],
  );

  const handleAberrationChange = useCallback(
    (v: number) => {
      onChangeActivity();
      onAberrationChange?.(v);
    },
    [onChangeActivity, onAberrationChange],
  );

  const handleStopdownChange = useCallback(
    (v: number) => {
      onChangeActivity();
      onStopdownChange?.(v);
    },
    [onChangeActivity, onStopdownChange],
  );

  const handleShiftChange = useCallback(
    (v: number) => {
      onChangeActivity();
      onShiftChange?.(pcSteps ? snapToZeroStop(v, pcSteps.shiftStepMm) : v);
    },
    [onChangeActivity, onShiftChange, pcSteps],
  );

  const handleTiltChange = useCallback(
    (v: number) => {
      onChangeActivity();
      onTiltChange?.(pcSteps ? snapToZeroStop(v, pcSteps.tiltStepDeg) : v);
    },
    [onChangeActivity, onTiltChange, pcSteps],
  );

  const handleShiftReset = useCallback(() => {
    handleShiftChange(0);
    handlePointerUp();
  }, [handlePointerUp, handleShiftChange]);

  const handleTiltReset = useCallback(() => {
    handleTiltChange(0);
    handlePointerUp();
  }, [handlePointerUp, handleTiltChange]);

  const infinityEFL = useMemo(() => eflAtFocus(0, zoomT, L, aberrationT), [L, zoomT, aberrationT]);
  const zoomEndpoints = useMemo(
    () => (L.isZoom ? [eflAtFocus(0, 0, L, aberrationT), eflAtFocus(0, 1, L, aberrationT)] : []),
    [L, aberrationT],
  );
  const projection = L.projection ?? { kind: "rectilinear" };
  const isFisheye = isFisheyeProjection(projection);
  const apertureReferenceLabel = isFisheye ? "Projection f" : "EFL";
  const apertureReferenceValue = fisheyeProjectionFocalLengthAtZoom(projection, zoomT) ?? dynamicEFL;
  const eflChanged = Number.isFinite(dynamicEFL) && Math.abs(dynamicEFL - infinityEFL) > 0.1;
  const availableFStops = [
    currentFOPEN,
    ...L.fstopSeries.filter((value) => value > currentFOPEN + 1e-6 && value <= L.maxFstop),
  ];
  const hasApertureRange = L.maxFstop > currentFOPEN + 0.15;
  const showApertureControl = showSliders && (hasApertureRange || availableFStops.length > 1);
  const signed = (value: number, digits: number, unit: string) =>
    `${value > 0 ? "+" : ""}${value.toFixed(digits)} ${unit}`;
  const aberrationValue = (() => {
    const min = Number(L.aberrationControl?.minLabel);
    const center = Number(L.aberrationControl?.centerLabel);
    const max = Number(L.aberrationControl?.maxLabel);
    if (L.aberrationControl?.centerLabel && Number.isFinite(min) && Number.isFinite(center) && Number.isFinite(max)) {
      return (aberrationT <= 0 ? center + (center - min) * aberrationT : center + (max - center) * aberrationT).toFixed(
        1,
      );
    }
    if (Number.isFinite(min) && Number.isFinite(max)) return (min + (max - min) * aberrationT).toFixed(1);
    return `${Math.round(aberrationT * 100)}%`;
  })();
  const motionButton = (mode: GroupMovementMode, label: string) => (
    <button
      type="button"
      aria-label={`Open ${label.toLowerCase()} group motion chart`}
      onClick={() => onOpenGroupMovement?.(mode)}
      style={{
        borderRadius: 10,
        cursor: "pointer",
        padding: "3px 8px",
        fontSize: 8,
        fontFamily: "inherit",
        letterSpacing: "0.08em",
        background: t.toggleBg,
        border: `1px solid ${t.toggleBorder}`,
        color: t.muted,
      }}
    >
      MOTION
    </button>
  );

  return (
    <>
      {showSliders && L.isZoom && (
        <SliderControl
          t={t}
          compact={compact}
          useSideLayout={useSideLayout}
          label="ZOOM"
          labelMinWidth={55}
          displayValue={formatZoomFocalLength(infinityEFL, dynamicEFL, showEffectiveFocalLength)}
          value={zoomT}
          step={L.zoomStep}
          onPointerDown={beginInteraction}
          onChange={handleZoomChange}
          onPointerUp={handlePointerUp}
          minLabel={formatFocalLength(zoomEndpoints[0])}
          maxLabel={formatFocalLength(zoomEndpoints[1])}
          flexBasis="200px"
          action={groupMovementAvailability.zoom ? motionButton("zoom", "zoom") : undefined}
        >
          <button
            onClick={onToggleEffectiveFocalLength}
            aria-pressed={showEffectiveFocalLength}
            style={{
              marginTop: 8,
              fontSize: 9,
              color: t.desc,
              cursor: "pointer",
              userSelect: "none",
              transition: "color 0.3s",
              background: "none",
              border: "none",
              padding: 0,
              fontFamily: "inherit",
              textAlign: "left",
              display: "block",
            }}
          >
            <span style={{ opacity: showEffectiveFocalLength ? 1 : 0.5 }}>
              {showEffectiveFocalLength ? "\u2611" : "\u2610"} Show effective focal length
            </span>
          </button>
        </SliderControl>
      )}

      {showSliders && (
        <SliderControl
          t={t}
          compact={compact}
          useSideLayout={useSideLayout}
          label="FOCUS"
          labelMinWidth={85}
          displayValue={formatDist(focusT, L)}
          value={focusT}
          step={L.focusStep}
          onPointerDown={beginInteraction}
          onChange={handleFocusChange}
          onPointerUp={handlePointerUp}
          minLabel={"\u221e"}
          maxLabel={`${L.closeFocusM} m`}
          disabled={!groupMovementAvailability.focus}
          disabledReason="No modeled focus travel data"
          flexBasis="260px"
          collapsible={true}
          expanded={focusExpanded}
          onExpandedChange={onFocusExpandedChange}
          action={groupMovementAvailability.focus ? motionButton("focus", "focus") : undefined}
        >
          {focusExpanded && (
            <>
              <div
                style={{
                  marginTop: 8,
                  fontSize: 9.5,
                  color: t.desc,
                  lineHeight: 1.6,
                  transition: "color 0.3s",
                }}
              >
                {L.focusDescription}
              </div>
              <div
                style={{
                  marginTop: 6,
                  display: "flex",
                  gap: 14,
                  fontSize: 9,
                  color: t.spacingVal,
                  fontVariantNumeric: "tabular-nums",
                  transition: "color 0.3s",
                }}
              >
                {varReadouts.map(({ label, val }) => (
                  <span key={label}>
                    {label} {val}
                  </span>
                ))}
              </div>
              {eflChanged && (
                <div
                  style={{
                    marginTop: 6,
                    fontSize: 9,
                    color: t.spacingVal,
                    fontVariantNumeric: "tabular-nums",
                    transition: "color 0.3s",
                  }}
                >
                  EFL {Number.isFinite(dynamicEFL) ? `${dynamicEFL.toFixed(2)} mm` : "unavailable"}
                </div>
              )}
            </>
          )}
        </SliderControl>
      )}

      {showSliders && L.aberrationControl && (
        <SliderControl
          t={t}
          compact={compact}
          useSideLayout={useSideLayout}
          label={L.aberrationControl.label}
          labelMinWidth={85}
          displayValue={aberrationValue}
          value={aberrationT}
          step={L.aberrationControl.step ?? 0.01}
          min={L.aberrationControl.centerLabel ? -1 : 0}
          onPointerDown={beginInteraction}
          onChange={handleAberrationChange}
          onPointerUp={handlePointerUp}
          minLabel={L.aberrationControl.minLabel ?? (L.aberrationControl.centerLabel ? "min" : "normal")}
          centerLabel={L.aberrationControl.centerLabel}
          maxLabel={L.aberrationControl.maxLabel ?? "max"}
          flexBasis="230px"
        >
          {L.aberrationControl.description && (
            <div
              style={{
                marginTop: 8,
                fontSize: 9.5,
                color: t.desc,
                lineHeight: 1.6,
                transition: "color 0.3s",
              }}
            >
              {L.aberrationControl.description}
            </div>
          )}
          {aberrationReadouts.length > 0 && (
            <div
              style={{
                marginTop: 6,
                display: "flex",
                gap: 14,
                fontSize: 9,
                color: t.spacingVal,
                fontVariantNumeric: "tabular-nums",
                transition: "color 0.3s",
              }}
            >
              {aberrationReadouts.map(({ label, val }) => (
                <span key={label}>
                  {label} {val}
                </span>
              ))}
            </div>
          )}
        </SliderControl>
      )}

      {showSliders && L.perspectiveControl && pcSteps && shiftEnabled && (
        <SliderControl
          t={t}
          compact={compact}
          useSideLayout={useSideLayout}
          label="SHIFT"
          labelMinWidth={55}
          displayValue={signed(shiftMm, 1, "mm")}
          value={shiftMm}
          min={L.perspectiveControl.shiftRangeMm[0]}
          max={L.perspectiveControl.shiftRangeMm[1]}
          step={pcSteps.shiftStepMm}
          onPointerDown={beginInteraction}
          onChange={handleShiftChange}
          onPointerUp={handlePointerUp}
          minLabel={signed(L.perspectiveControl.shiftRangeMm[0], 1, "mm")}
          maxLabel={signed(L.perspectiveControl.shiftRangeMm[1], 1, "mm")}
          flexBasis="190px"
          action={<SliderResetButton axisLabel="shift" value={shiftMm} onReset={handleShiftReset} t={t} />}
        />
      )}

      {showSliders && L.perspectiveControl && pcSteps && tiltEnabled && (
        <SliderControl
          t={t}
          compact={compact}
          useSideLayout={useSideLayout}
          label="TILT"
          labelMinWidth={55}
          displayValue={signed(tiltDeg, 1, "deg")}
          value={tiltDeg}
          min={L.perspectiveControl.tiltRangeDeg[0]}
          max={L.perspectiveControl.tiltRangeDeg[1]}
          step={pcSteps.tiltStepDeg}
          onPointerDown={beginInteraction}
          onChange={handleTiltChange}
          onPointerUp={handlePointerUp}
          minLabel={signed(L.perspectiveControl.tiltRangeDeg[0], 1, "deg")}
          maxLabel={signed(L.perspectiveControl.tiltRangeDeg[1], 1, "deg")}
          flexBasis="190px"
          action={<SliderResetButton axisLabel="tilt" value={tiltDeg} onReset={handleTiltReset} t={t} />}
        />
      )}

      {showApertureControl && (
        <SliderControl
          t={t}
          compact={compact}
          useSideLayout={useSideLayout}
          label="APERTURE"
          labelMinWidth={85}
          displayValue={`${formatAperture(fNumber)}${showEffectiveAperture ? ` (working ${formatAperture(effectiveFNum)})` : ""}`}
          displayValueStyle={{ minWidth: "3.5em" }}
          value={stopdownT}
          step={L.apertureStep}
          onPointerDown={beginInteraction}
          onChange={handleStopdownChange}
          onPointerUp={handlePointerUp}
          minLabel={formatAperture(currentFOPEN)}
          maxLabel={`f/${L.maxFstop}`}
          flexBasis="220px"
          collapsible={true}
          expanded={apertureExpanded}
          onExpandedChange={onApertureExpandedChange}
        >
          {showEffectiveAperture && workingApertureNote && (
            <div style={{ marginTop: 6, fontSize: 9.5, lineHeight: 1.5, color: t.spacingVal }}>
              {workingApertureNote}
            </div>
          )}
          {apertureExpanded && (
            <>
              <div
                style={{
                  marginTop: 8,
                  fontSize: 9.5,
                  color: t.desc,
                  lineHeight: 1.6,
                  transition: "color 0.3s",
                }}
              >
                {apertureReferenceLabel}{" "}
                {Number.isFinite(apertureReferenceValue) ? `${apertureReferenceValue.toFixed(2)} mm` : "unavailable"} ·
                Paraxial EP {"\u2300"} {((baseEPSD * currentPhysStopSD * 2) / L.stopPhysSD).toFixed(2)} mm · Stop{" "}
                {"\u2300"} {(currentPhysStopSD * 2).toFixed(2)} mm
              </div>
              <p style={{ color: t.muted, fontSize: 9 }}>
                Selected aperture uses the design calibration. Working f-number measures the real-ray cone; paraxial
                estimates are listed separately in Summary.
              </p>
              <div
                style={{
                  marginTop: 6,
                  display: "flex",
                  gap: 14,
                  flexWrap: "wrap",
                  fontSize: 9,
                  color: t.spacingVal,
                  fontVariantNumeric: "tabular-nums",
                  transition: "color 0.3s",
                }}
              >
                {availableFStops.map((n) => (
                  <button
                    key={n}
                    onClick={() => {
                      handleStopdownChange(Math.log(n / L.FOPEN) / Math.log(L.maxFstop / L.FOPEN));
                      handlePointerUp();
                    }}
                    aria-label={`Set aperture to f/${Number(n.toFixed(2))}`}
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      font: "inherit",
                      color: "inherit",
                      cursor: "pointer",
                      opacity: Math.abs(fNumber - n) < 0.15 ? 1 : 0.55,
                      transition: "opacity 0.15s",
                    }}
                  >
                    f/{Number(n.toFixed(2))}
                  </button>
                ))}
              </div>
              <button
                onClick={onToggleEffectiveAperture}
                aria-pressed={showEffectiveAperture}
                style={{
                  marginTop: 8,
                  fontSize: 9,
                  color: t.desc,
                  cursor: "pointer",
                  userSelect: "none",
                  transition: "color 0.3s",
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontFamily: "inherit",
                  textAlign: "left",
                  display: "block",
                }}
              >
                <span style={{ opacity: showEffectiveAperture ? 1 : 0.5 }}>
                  {showEffectiveAperture ? "\u2611" : "\u2610"} Show working f-number (real rays)
                </span>
              </button>
            </>
          )}
        </SliderControl>
      )}
    </>
  );
}
