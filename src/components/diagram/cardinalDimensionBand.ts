/**
 * Cardinal dimension band — the strip below the lens drawing that holds the EFL, BFD, FFD, Hiatus and
 * Total track spans.
 *
 * Spans at fixed offsets below the axis ran through the surface numbers and group labels, which fill the
 * lower part of the drawing. The band instead extends the diagram viewBox downward by just enough for the
 * visible spans, so the lens keeps its own layout and scale.
 */

export type CardinalDimensionId = "efl" | "bfd" | "ffd" | "hiatus" | "totalTrack";

export interface CardinalDimensionVisibility {
  showCardinalDimensions?: boolean;
  showCardinalEfl?: boolean;
  showCardinalBfd?: boolean;
  showCardinalFfd?: boolean;
  showCardinalHiatus?: boolean;
  showCardinalTotalTrack?: boolean;
}

/** Spacing between stacked span lines. */
const LANE_PITCH = 16;
/** First span line's drop below the drawing; its label sits above the line. */
const BAND_TOP_PAD = 16;
/** Room below the last span line for its end ticks. */
const BAND_BOTTOM_PAD = 8;

/** Visible spans in lane order, top to bottom. Sub-toggles default on, as in the overlay. */
export function visibleCardinalDimensions(visibility: CardinalDimensionVisibility): CardinalDimensionId[] {
  if (!visibility.showCardinalDimensions) return [];
  const lanes: Array<[CardinalDimensionId, boolean | undefined]> = [
    ["efl", visibility.showCardinalEfl],
    ["bfd", visibility.showCardinalBfd],
    ["ffd", visibility.showCardinalFfd],
    ["hiatus", visibility.showCardinalHiatus],
    ["totalTrack", visibility.showCardinalTotalTrack],
  ];
  return lanes.filter(([, shown]) => shown !== false).map(([id]) => id);
}

/** SVG y of the span line in lane `laneIndex` (0 = top) for a drawing `svgH` tall. */
export function cardinalDimensionLaneY(svgH: number, laneIndex: number): number {
  return svgH + BAND_TOP_PAD + laneIndex * LANE_PITCH;
}

/** Height the band adds below the drawing for `laneCount` visible spans. */
export function cardinalDimensionBandHeight(laneCount: number): number {
  return laneCount > 0 ? BAND_TOP_PAD + (laneCount - 1) * LANE_PITCH + BAND_BOTTOM_PAD : 0;
}

/**
 * Full diagram viewBox height: the lens drawing plus the dimension band when spans are drawn.
 * Pass `hasCardinals` false when the lens has no cardinal result, so no empty band is added.
 */
export function diagramViewHeight(
  svgH: number,
  hasCardinals: boolean,
  visibility: CardinalDimensionVisibility,
): number {
  return hasCardinals ? svgH + cardinalDimensionBandHeight(visibleCardinalDimensions(visibility).length) : svgH;
}
