/** Permanent converter dispatch; the app's ingest accepts only V2. */
import type { LensDataInput } from "../../../types/optics.js";
import type { TeleconverterData } from "../../../types/teleconverter.js";
import type { LensDataV2Input, TeleconverterDataV2Input } from "../../../types/lensDataV2.js";
import type { IngestRequest } from "../canonical.js";
import { ingestLens as ingestV2Lens, ingestTeleconverter as ingestV2Teleconverter, isV1File } from "../ingestV2.js";
import { associateCanonical } from "../identity.js";
import { ingestLensV1, ingestTeleconverterV1 } from "./ingestV1.js";

export function ingestLens(input: LensDataInput | LensDataV2Input, request?: IngestRequest) {
  const ingested = isV1File(input) ? ingestLensV1(input, request) : ingestV2Lens(input, request);
  associateCanonical(ingested.prescription, ingested);
  return ingested;
}

export function ingestTeleconverter(input: TeleconverterData | TeleconverterDataV2Input, request?: IngestRequest) {
  return isV1File(input) ? ingestTeleconverterV1(input, request) : ingestV2Teleconverter(input, request);
}
