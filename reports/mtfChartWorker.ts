/**
 * Worker thread of the MTF chart regression report (`mtfChartRegression.report.ts`), never a module to import.
 *
 * The report starts one per core under plain Node, with the `.js` → `.ts` specifier hook in its `execArgv`, and posts
 * it one whole chart configuration at a time. The worker imports the lens module itself, traces the configuration
 * exactly as a serial run would, and posts the result back; structured clone keeps every number bit for bit.
 */
import { parentPort } from "node:worker_threads";
import type { LensDataV2Input } from "../src/types/lensDataV2.js";
import { runChartConfiguration, type Anchor, type Configuration } from "./mtfChartLib.js";

/** One chart for a worker: the file URL of its lens module and its anchors, which share one zoom position. */
export interface ChartTask {
  index: number;
  lensUrl: string;
  zoomT: number;
  anchors: Anchor[];
}

export interface ChartTaskResult {
  index: number;
  configuration: Configuration;
}

const port = parentPort!;
port.on("message", async ({ index, lensUrl, zoomT, anchors }: ChartTask) => {
  const { default: lens } = (await import(lensUrl)) as { default: LensDataV2Input };
  port.postMessage({ index, configuration: runChartConfiguration(lens, zoomT, anchors) } satisfies ChartTaskResult);
});
