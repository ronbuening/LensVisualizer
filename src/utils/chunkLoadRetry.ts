/**
 * Reload-once guard for dynamically imported chunks.
 *
 * After a deploy, cached prerendered HTML can reference hashed chunk files
 * that no longer exist on the CDN; every dynamic import then rejects until
 * the page picks up the new asset manifest. Wrapping chunk loaders here
 * forces one full reload in that situation and rethrows if the failure
 * persists, so genuine errors still surface.
 */

const RELOAD_FLAG = "lv-chunk-reload-attempted";

/* The flag is intentionally never cleared within a session: clearing it on a
 * later successful load would let a persistently failing chunk trigger an
 * infinite reload loop. */
function reloadAlreadyAttempted(): boolean {
  try {
    return sessionStorage.getItem(RELOAD_FLAG) !== null;
  } catch {
    /* Storage can be unavailable (privacy modes); fall back to no auto-reload */
    return true;
  }
}

function markReloadAttempted(): void {
  try {
    sessionStorage.setItem(RELOAD_FLAG, "1");
  } catch {
    /* ignore — reloadAlreadyAttempted() already reports true in this case */
  }
}

/**
 * Run a dynamic-import thunk, force-reloading the page once if it rejects.
 *
 * @param load - thunk wrapping a dynamic `import()`
 * @returns the loaded module (or a never-resolving promise while reloading)
 */
export async function loadChunkWithReload<T>(load: () => Promise<T>): Promise<T> {
  try {
    return await load();
  } catch (err) {
    if (typeof window !== "undefined" && !reloadAlreadyAttempted()) {
      markReloadAttempted();
      window.location.reload();
      /* Halt this code path; the reload replaces the document */
      return new Promise<never>(() => {});
    }
    throw err;
  }
}
