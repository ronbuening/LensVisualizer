import type { FieldCurvatureResult } from "../../optics/aberrationAnalysis.js";
import type { Theme } from "../../types/theme.js";
import FieldCurvaturePlot from "./FieldCurvaturePlot.js";

interface StandardFieldCurvaturePlotProps {
  result: FieldCurvatureResult;
  t: Theme;
}

export default function StandardFieldCurvaturePlot({ result, t }: StandardFieldCurvaturePlotProps) {
  return <FieldCurvaturePlot result={result} t={t} variant="standard" />;
}
