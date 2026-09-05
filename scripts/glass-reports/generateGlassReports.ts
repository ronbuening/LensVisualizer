/** Render every report against one shared catalog inventory; writing belongs to the CLI. */
import { patentInventory } from "./glassScanLib.js";
import type { LensData } from "../../src/types/optics.js";
import { renderUnresolvedGlassScan } from "./unresolvedGlassScan.js";
import { renderCatalogMismatchScan } from "./catalogMismatchScan.js";
import { renderGlassRelabelCandidatesScan } from "./glassRelabelCandidatesScan.js";
import { renderGlassRelabelByLensScan } from "./glassRelabelByLensScan.js";
import { renderGlassAmbiguityScan } from "./glassAmbiguityScan.js";
import { renderSixDigitGlassCodeScan } from "./sixDigitGlassCodeScan.js";
import { renderSellmeierCoverageScan } from "./sellmeierCoverageScan.js";
import { renderGlassCoverageOpportunitiesScan } from "./glassCoverageOpportunitiesScan.js";
const modules = import.meta.glob<{ default: LensData }>("../../src/lens-data/**/*.data.ts", { eager: true });
export function generateGlassReports(): Record<string, string> {
  const patentFiles = patentInventory();
  return Object.assign(
    {},
    renderUnresolvedGlassScan(modules),
    renderCatalogMismatchScan(modules),
    renderGlassRelabelCandidatesScan(modules),
    renderGlassRelabelByLensScan(modules),
    renderGlassAmbiguityScan(modules),
    renderSixDigitGlassCodeScan(modules, patentFiles),
    renderSellmeierCoverageScan(modules),
    renderGlassCoverageOpportunitiesScan(modules, patentFiles),
  );
}
