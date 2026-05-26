export type Optics2ToleranceReason =
  | "iterative-root-solve"
  | "clip-boundary"
  | "projection-inversion"
  | "old-engine-bug-compatibility";

export interface Optics2AbsoluteTolerance {
  abs: number;
  reason?: Optics2ToleranceReason;
}

export const OPTICS_2_TOLERANCE_REASONS: readonly Optics2ToleranceReason[] = [
  "iterative-root-solve",
  "clip-boundary",
  "projection-inversion",
  "old-engine-bug-compatibility",
];

export const OPTICS_2_PARITY_TOLERANCES = {
  surface: {
    sag: { abs: 1e-10 },
    slope: { abs: 1e-10 },
    normalComponent: { abs: 1e-10 },
    renderTrimHeight: { abs: 1e-8, reason: "iterative-root-solve" },
  },
  ray: {
    point: { abs: 1e-8 },
    imageHeight: { abs: 1e-8 },
    directionSlope: { abs: 1e-10 },
    nearClipBoundaryPoint: { abs: 1e-5, reason: "clip-boundary" },
  },
  foldedTrace: {
    imagePlanePoint: { abs: 1e-7, reason: "iterative-root-solve" },
    terminalDirection: { abs: 1e-10 },
    finalMedium: { abs: 0 },
  },
  analysis: {
    samplePosition: { abs: 1e-10 },
    boundedValue: { abs: 1e-7, reason: "iterative-root-solve" },
    nearClipBoundaryValue: { abs: 1e-4, reason: "clip-boundary" },
  },
  fisheyeLaunch: {
    launchCoordinate: { abs: 1e-7, reason: "projection-inversion" },
    boundedOutput: { abs: 1e-6, reason: "projection-inversion" },
  },
} as const;

export type Optics2ParityToleranceGroup = keyof typeof OPTICS_2_PARITY_TOLERANCES;
