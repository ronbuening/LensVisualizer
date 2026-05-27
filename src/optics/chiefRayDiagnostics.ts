/**
 * Chief-ray diagnostics public barrel — exposes solve-status counters for audit scripts.
 *
 * Keeps diagnostic consumers on the legacy import path while the cache lives in optics/field.
 */

export {
  getChiefRayDiagnostics2 as getChiefRayDiagnostics,
  resetChiefRayDiagnostics2 as resetChiefRayDiagnostics,
  type ChiefRayDiagnostics2 as ChiefRayStatusCounts,
  type ChiefRayStatus2 as ChiefRayStatus,
} from "./compat.js";
