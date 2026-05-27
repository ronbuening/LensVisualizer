import { analysisJobsForState2 } from "./analysisJobs.js";
import type { FieldGeometryState } from "../optics.js";
import type { PreparedOpticalState } from "../types.js";

export interface AnalysisComputationContextParams {
  preparedState: PreparedOpticalState;
  dynamicEFL: number;
  currentEPSD: number;
  currentPhysStopSD: number;
  fieldGeometry?: FieldGeometryState | null;
}

export interface AnalysisComputationContext extends AnalysisComputationContextParams {
  computeOpticalSummary: () => ReturnType<typeof analysisJobsForState2.computeOpticalSummary>;
  computeDistortionCurve: () => ReturnType<typeof analysisJobsForState2.computeDistortionCurve>;
  computeDistortionFieldGrid: () => ReturnType<typeof analysisJobsForState2.computeDistortionFieldGrid>;
  computeVignettingCurve: () => ReturnType<typeof analysisJobsForState2.computeVignettingCurve>;
  computeBothPupilAberrationProfiles: () => ReturnType<typeof analysisJobsForState2.computeBothPupilAberrationProfiles>;
  computeBokehPreviewPair: () => ReturnType<typeof analysisJobsForState2.computeBokehPreviewPair>;
  computeBestFocusZ: () => ReturnType<typeof analysisJobsForState2.computeBestFocusZ>;
  computeSphericalAberration: () => ReturnType<typeof analysisJobsForState2.computeSphericalAberration>;
  computeSAProfile: () => ReturnType<typeof analysisJobsForState2.computeSAProfile>;
  computeSphericalAberrationBlurCharacter: () => ReturnType<
    typeof analysisJobsForState2.computeSphericalAberrationBlurCharacter
  >;
  computeFieldCurvatureBundle: () => ReturnType<typeof analysisJobsForState2.computeFieldCurvatureBundle>;
  computeComaAnalysis: () => ReturnType<typeof analysisJobsForState2.computeComaAnalysis>;
}

export function createAnalysisComputationContext({
  preparedState,
  dynamicEFL,
  currentEPSD,
  currentPhysStopSD,
  fieldGeometry = null,
}: AnalysisComputationContextParams): AnalysisComputationContext {
  const resolvedFieldGeometry = fieldGeometry ?? undefined;
  let opticalSummary: ReturnType<typeof analysisJobsForState2.computeOpticalSummary> | undefined;
  let distortionCurve: ReturnType<typeof analysisJobsForState2.computeDistortionCurve> | undefined;
  let distortionFieldGrid: ReturnType<typeof analysisJobsForState2.computeDistortionFieldGrid> | undefined;
  let vignettingCurve: ReturnType<typeof analysisJobsForState2.computeVignettingCurve> | undefined;
  let pupilProfiles: ReturnType<typeof analysisJobsForState2.computeBothPupilAberrationProfiles> | undefined;
  let bokehPreviewPair: ReturnType<typeof analysisJobsForState2.computeBokehPreviewPair> | undefined;
  let bestFocusZ: ReturnType<typeof analysisJobsForState2.computeBestFocusZ> | undefined;
  let sphericalAberration: ReturnType<typeof analysisJobsForState2.computeSphericalAberration> | undefined;
  let saProfile: ReturnType<typeof analysisJobsForState2.computeSAProfile> | undefined;
  let sphericalAberrationBlurCharacter:
    | ReturnType<typeof analysisJobsForState2.computeSphericalAberrationBlurCharacter>
    | undefined;
  let fieldCurvatureBundle: ReturnType<typeof analysisJobsForState2.computeFieldCurvatureBundle> | undefined;
  let comaAnalysis: ReturnType<typeof analysisJobsForState2.computeComaAnalysis> | undefined;

  return {
    preparedState,
    dynamicEFL,
    currentEPSD,
    currentPhysStopSD,
    fieldGeometry,
    computeOpticalSummary: () =>
      (opticalSummary ??= analysisJobsForState2.computeOpticalSummary(
        preparedState,
        dynamicEFL,
        currentEPSD,
        currentPhysStopSD,
        resolvedFieldGeometry,
      )),
    computeDistortionCurve: () =>
      (distortionCurve ??= analysisJobsForState2.computeDistortionCurve(
        preparedState,
        dynamicEFL,
        currentPhysStopSD,
        resolvedFieldGeometry,
      )),
    computeDistortionFieldGrid: () =>
      (distortionFieldGrid ??= analysisJobsForState2.computeDistortionFieldGrid(
        preparedState,
        currentPhysStopSD,
        resolvedFieldGeometry,
      )),
    computeVignettingCurve: () =>
      (vignettingCurve ??= analysisJobsForState2.computeVignettingCurve(
        preparedState,
        currentEPSD,
        currentPhysStopSD,
        resolvedFieldGeometry,
      )),
    computeBothPupilAberrationProfiles: () =>
      (pupilProfiles ??= analysisJobsForState2.computeBothPupilAberrationProfiles(
        preparedState,
        undefined,
        resolvedFieldGeometry,
      )),
    computeBokehPreviewPair: () =>
      (bokehPreviewPair ??= analysisJobsForState2.computeBokehPreviewPair(
        preparedState,
        currentEPSD,
        currentPhysStopSD,
      )),
    computeBestFocusZ: () =>
      (bestFocusZ ??= analysisJobsForState2.computeBestFocusZ(preparedState, currentEPSD, currentPhysStopSD)),
    computeSphericalAberration: () =>
      (sphericalAberration ??= analysisJobsForState2.computeSphericalAberration(
        preparedState,
        currentEPSD,
        currentPhysStopSD,
      )),
    computeSAProfile: () =>
      (saProfile ??= analysisJobsForState2.computeSAProfile(preparedState, currentEPSD, currentPhysStopSD)),
    computeSphericalAberrationBlurCharacter: () => {
      if (sphericalAberrationBlurCharacter === undefined) {
        sphericalAberration ??= analysisJobsForState2.computeSphericalAberration(
          preparedState,
          currentEPSD,
          currentPhysStopSD,
        );
        sphericalAberrationBlurCharacter = analysisJobsForState2.computeSphericalAberrationBlurCharacter(
          preparedState,
          currentEPSD,
          currentPhysStopSD,
          sphericalAberration,
        );
      }
      return sphericalAberrationBlurCharacter;
    },
    computeFieldCurvatureBundle: () =>
      (fieldCurvatureBundle ??= analysisJobsForState2.computeFieldCurvatureBundle(
        preparedState,
        currentEPSD,
        currentPhysStopSD,
        resolvedFieldGeometry,
      )),
    computeComaAnalysis: () =>
      (comaAnalysis ??= analysisJobsForState2.computeComaAnalysis(
        preparedState,
        currentEPSD,
        currentPhysStopSD,
        resolvedFieldGeometry,
      )),
  };
}
