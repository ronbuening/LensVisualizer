import type { PointerEvent, ReactNode, RefObject, TouchEvent, WheelEvent } from "react";
import type { CardinalElements } from "../../../optics/cardinalElements.js";
import type { LensMovementTransform } from "../../../optics/lensMovement.js";
import type { GroupMovementMode } from "../../../types/groupMovement.js";
import type {
  ChromaticSpread,
  ChromaticSpreadByAxis,
  ElementData,
  ElementShape,
  RuntimeLens,
} from "../../../types/optics.js";
import type { AnalysisTabId, OffAxisMode } from "../../../types/state.js";
import type { Theme } from "../../../types/theme.js";
import type { ChromaticRaySegment } from "../../hooks/useChromaticRays.js";
import type { RaySegment } from "../../hooks/useOnAxisRays.js";

export interface VarReadout {
  label: string;
  val: string;
}

export interface PanelComputedModel {
  L: RuntimeLens;
  focusT: number;
  zoomT: number;
  aberrationT: number;
  stopdownT: number;
  shiftMm: number;
  tiltDeg: number;
  sx: (z: number) => number;
  sy: (y: number) => number;
  CX: number;
  IX: number;
  effectiveSC: number;
  movementTransform: LensMovementTransform;
  lensAxis: [[number, number], [number, number]] | null;
  zPos: number[];
  IMG_MM: number;
  shapes: ElementShape[];
  filterId: string;
  stopZ: number;
  currentFOPEN: number;
  fNumber: number;
  currentPhysStopSD: number;
  baseEPSD: number;
  varReadouts: VarReadout[];
  aberrationReadouts: VarReadout[];
  dynamicEFL: number;
  effectiveFNum: number;
  info: ElementData | null;
  act: number | null;
  sel: number | null;
  cardinalElements: CardinalElements | null;
}

export interface PanelRayDataModel {
  chromSpread: ChromaticSpread | null;
  chromaticSpreads: ChromaticSpreadByAxis;
  rays: RaySegment[];
  offAxisRays: RaySegment[];
  chromaticRays: ChromaticRaySegment[];
}

export interface PanelDisplayFlagsModel {
  theme: Theme;
  dark: boolean;
  isWide: boolean;
  compact: boolean;
  showControls: boolean;
  showSliders: boolean;
  headerHeight: number;
  maxSvgHeight: string;
  useSideLayout: boolean;
  zoomPanActive: boolean;
  showOnAxis: boolean;
  showOffAxis: OffAxisMode;
  showChromatic: boolean;
  showPupils: boolean;
  showCardinals: boolean;
  showCardinalFocal: boolean;
  showCardinalPrincipal: boolean;
  showCardinalNodal: boolean;
  showCardinalDimensions: boolean;
  showCardinalEfl: boolean;
  showCardinalBfd: boolean;
  showCardinalFfd: boolean;
  showCardinalHiatus: boolean;
  showCardinalTotalTrack: boolean;
  chromR: boolean;
  chromG: boolean;
  chromB: boolean;
  chromV: boolean;
  rayTracksF: boolean;
  flashVisible: boolean;
  flashKey: number;
  flashFading: boolean;
  analysisDrawerOpen: boolean;
  analysisDrawerTab: AnalysisTabId;
  bokehPreviewOpen: boolean;
  groupMovementOpen: boolean;
  groupMovementMode: GroupMovementMode;
  focusExpanded: boolean;
  apertureExpanded: boolean;
  legendExpanded: boolean;
  showEffectiveAperture: boolean;
  abbeShowGlassType: boolean;
}

export interface PanelOverlaysModel {
  showLcaOverlay: boolean;
  showPetzvalOverlay: boolean;
  showAbbeDiagram: boolean;
  closeLcaOverlay: () => void;
  closePetzvalOverlay: () => void;
  openLcaOverlay: () => void;
  openPetzvalOverlay: () => void;
  openAbbeDiagram: () => void;
  closeAbbeDiagram: () => void;
  asphCompareElementId: number | null;
  openAsphCompare: (eid: number) => void;
  closeAsphCompare: () => void;
}

export interface PanelAdaptersModel {
  onAnalysisDrawerToggle: (open: boolean) => void;
  onAnalysisTabChange: (tab: AnalysisTabId) => void;
  onGroupMovementOpen: (mode: GroupMovementMode) => void;
  onGroupMovementClose: () => void;
  onGroupMovementModeChange: (mode: GroupMovementMode) => void;
  onBokehPreviewToggle: (open: boolean) => void;
  onAberrationsExpandedChange: (expanded: boolean) => void;
  onEffectiveApertureChange: (expanded: boolean) => void;
  onZoomChange: (value: number) => void;
  onAberrationChange: (value: number) => void;
  onFocusChange: (value: number) => void;
  onStopdownChange: (value: number) => void;
  onShiftChange: (value: number) => void;
  onTiltChange: (value: number) => void;
  onFocusExpandedChange: (expanded: boolean) => void;
  onApertureExpandedChange: (expanded: boolean) => void;
  onLegendExpandedChange: (expanded: boolean) => void;
  onSliderPointerUp: () => void;
  onAbbeShowGlassTypeChange: (value: boolean) => void;
  onGlassMapOpenChange: (value: boolean) => void;
}

export interface PanelZoomHookModel {
  state: { zoom: number };
  viewBox: string;
  isPanning: boolean;
  reset: () => void;
  zoomIn: () => void;
  zoomOut: () => void;
  panBy: (dx: number, dy: number) => void;
  handleWheel: (e: WheelEvent<SVGSVGElement>) => void;
  handlePointerDown: (e: PointerEvent<SVGSVGElement>) => void;
  handlePointerMove: (e: PointerEvent<SVGSVGElement>) => void;
  handlePointerUp: (e: PointerEvent<SVGSVGElement>) => void;
  handleTouchStart: (e: TouchEvent<SVGSVGElement>) => void;
  handleTouchMove: (e: TouchEvent<SVGSVGElement>) => void;
  handleTouchEnd: (e: TouchEvent<SVGSVGElement>) => void;
}

export interface PanelInteractionsModel {
  onHover: (eid: number | null) => void;
  onSelect: (eid: number | null) => void;
  zoomHook: PanelZoomHookModel;
  onZoomPanToggle: (active: boolean) => void;
  onSliderInteractionChange?: (interacting: boolean) => void;
}

export interface LensDiagramLoadedStateProps {
  panelContainerRef: RefObject<HTMLDivElement | null>;
  computed: PanelComputedModel;
  rayData: PanelRayDataModel;
  displayFlags: PanelDisplayFlagsModel;
  overlays: PanelOverlaysModel;
  adapters: PanelAdaptersModel;
  interactions: PanelInteractionsModel;
  analysisContent: ReactNode;
  bokehPreviewContent: ReactNode;
  groupMovementContent: ReactNode;
  header: ReactNode;
}
