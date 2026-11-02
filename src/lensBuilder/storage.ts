import type { LensDataV2Input } from "../types/lensDataV2.js";
import { parseUntrustedDraft } from "./untrusted.js";

export const STORAGE_KEY = "surface-stop-lens-builder-v2";
export const BACKUP_KEY = `${STORAGE_KEY}-backup`;
export interface RestoredDraft {
  draft?: LensDataV2Input;
  notice: string;
  hasBackup: boolean;
  preserveOriginal?: boolean;
}

/** Preserve rejected bytes before the template's first autosave can replace them. */
export function restoreDraft(storage: Storage): RestoredDraft {
  try {
    const text = storage.getItem(STORAGE_KEY);
    const hasBackup = storage.getItem(BACKUP_KEY) !== null;
    if (text === null) return { notice: hasBackup ? "A rejected autosave backup is available." : "", hasBackup };
    const parsed = parseUntrustedDraft(text);
    if (parsed.ok)
      return { draft: parsed.draft, notice: hasBackup ? "A rejected autosave backup is available." : "", hasBackup };
    try {
      storage.setItem(BACKUP_KEY, text);
      return { notice: "Rejected autosave saved as a backup. Started from the template.", hasBackup: true };
    } catch {
      return {
        notice: "Autosave rejected; backup storage failed. Original retained; autosave paused until discarded.",
        hasBackup: true,
        preserveOriginal: true,
      };
    }
  } catch {
    return { notice: "Draft storage is unavailable. Changes may not be saved.", hasBackup: false };
  }
}
