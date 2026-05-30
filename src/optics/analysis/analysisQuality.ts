export type AnalysisQuality = "settled" | "interactive";

export interface AnalysisSamplingOptions {
  distortionCurveSampleCount?: number;
  distortionGridSegmentCount?: number;
  distortionGridLineCoordinates?: readonly number[];
  distortionPupilCorrectionSampleCount?: number;
  vignettingFieldSampleCount?: number;
  vignettingPupilSampleCount?: number;
  pupilAberrationSampleCount?: number;
  bokehFieldFractions?: readonly number[];
  bokehRingSamples?: readonly number[];
  comaFieldFractions?: readonly number[];
  comaRingSamples?: readonly number[];
  comaFanSampleCount?: number;
  fieldCurvatureFieldFractions?: readonly number[];
  fieldCurvatureCurveFieldFractions?: readonly number[];
  fieldCurvatureDiagnosticSampleCount?: number;
  sphericalBlurRingSamples?: readonly number[];
}

export const INTERACTIVE_ANALYSIS_SAMPLING: AnalysisSamplingOptions = {
  distortionCurveSampleCount: 9,
  distortionGridSegmentCount: 9,
  distortionGridLineCoordinates: [-1, 0, 1],
  distortionPupilCorrectionSampleCount: 5,
  vignettingFieldSampleCount: 7,
  vignettingPupilSampleCount: 48,
  pupilAberrationSampleCount: 7,
  bokehFieldFractions: [0, 0.5, 1],
  bokehRingSamples: [1, 8, 16, 24],
  comaFieldFractions: [0, 0.5, 1],
  comaRingSamples: [1, 8, 16],
  comaFanSampleCount: 9,
  fieldCurvatureFieldFractions: [0, 0.5, 1],
  fieldCurvatureCurveFieldFractions: [0, 0.25, 0.5, 0.75, 1],
  fieldCurvatureDiagnosticSampleCount: 9,
  sphericalBlurRingSamples: [1, 8, 16, 24],
};

export function analysisSamplingForQuality(quality: AnalysisQuality): AnalysisSamplingOptions | undefined {
  return quality === "interactive" ? INTERACTIVE_ANALYSIS_SAMPLING : undefined;
}
