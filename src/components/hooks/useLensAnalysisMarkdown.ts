/**
 * useLensAnalysisMarkdown — async loader for a lens's `.analysis.md` content.
 *
 * Analysis markdown is code-split out of the main bundle (see lensCatalog.ts),
 * so it is fetched on demand when a lens is viewed. Loaded content lands in
 * the module-level cache in lensCatalog.ts, so revisiting a lens renders
 * synchronously; this hook only tracks the in-flight fetch.
 *
 * Return contract:
 * - `undefined` — an analysis file exists and is still loading
 * - `string`    — the loaded markdown
 * - `null`      — the lens has no analysis file (or the fetch failed)
 */

import { useEffect, useState } from "react";
import { cachedMdForKey, hasMdForKey, loadMdForKey } from "../../utils/catalog/lensCatalog.js";

export default function useLensAnalysisMarkdown(lensKey: string): string | null | undefined {
  const [settled, setSettled] = useState<{ key: string; md: string | null } | null>(null);

  useEffect(() => {
    if (!hasMdForKey(lensKey) || cachedMdForKey(lensKey) !== null) return;
    let cancelled = false;
    loadMdForKey(lensKey)
      .then((md) => {
        if (!cancelled) setSettled({ key: lensKey, md });
      })
      .catch(() => {
        if (!cancelled) setSettled({ key: lensKey, md: null });
      });
    return () => {
      cancelled = true;
    };
  }, [lensKey]);

  if (!hasMdForKey(lensKey)) return null;
  const cached = cachedMdForKey(lensKey);
  if (cached !== null) return cached;
  /* File exists but is not cached: either still loading or the fetch failed */
  return settled?.key === lensKey ? settled.md : undefined;
}
