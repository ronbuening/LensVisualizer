/**
 * Warn when Chrome or Edge page translation is rewriting React-owned DOM.
 *
 * The banner is deliberately created outside the React root: translation can
 * leave React unable to commit the very fallback that would otherwise explain
 * the problem. Normal browser sessions get only two narrow attribute observers
 * and no added DOM.
 */

const GOOGLE_TRANSLATION_CLASSES = ["translated-ltr", "translated-rtl"];
const ACTIVE_MESSAGE =
  "Browser page translation can interfere with this interactive viewer and may cause it to stop responding. " +
  "Switch back to the original language, then reload the page.";
const RESTORE_MESSAGE = "Page translation has been turned off. Reload the page to restore the interactive viewer.";

export function isBrowserTranslationActive(doc: Document = document): boolean {
  const root = doc.documentElement;
  if (GOOGLE_TRANSLATION_CLASSES.some((className) => root.classList.contains(className))) return true;

  // Microsoft Edge marks translated text with this attribute; its title marker
  // is stable and avoids scanning the entire interactive document.
  return doc.querySelector("title")?.hasAttribute("_msttexthash") ?? false;
}

function createWarning(doc: Document): HTMLDivElement {
  const warning = doc.createElement("div");
  warning.id = "browser-translation-warning";
  warning.className = "notranslate";
  warning.setAttribute("translate", "no");
  warning.setAttribute("role", "alert");
  warning.setAttribute("aria-live", "assertive");

  const message = doc.createElement("span");
  message.dataset.translationWarningMessage = "";
  warning.append(message);

  const reload = doc.createElement("a");
  reload.href = doc.defaultView?.location.href ?? "/";
  reload.textContent = "Reload";
  Object.assign(reload.style, {
    color: "#fff7ed",
    fontWeight: "700",
    marginLeft: "0.45rem",
  });
  warning.append(reload);

  Object.assign(warning.style, {
    background: "#7c2d12",
    color: "#fff7ed",
    display: "block",
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontSize: "0.85rem",
    lineHeight: "1.45",
    padding: "0.65rem 1rem",
    position: "relative",
    textAlign: "center",
    zIndex: "10000",
  });

  doc.body.prepend(warning);
  return warning;
}

/**
 * Install a React-independent warning for browser translation. The returned
 * cleanup is primarily useful to focused tests.
 */
export function installBrowserTranslationWarning(doc: Document = document): () => void {
  let warning: HTMLDivElement | null = null;
  let translationWasDetected = false;

  const update = () => {
    const active = isBrowserTranslationActive(doc);
    if (active) translationWasDetected = true;
    if (!translationWasDetected) return;

    warning ??= createWarning(doc);
    const message = warning.querySelector<HTMLElement>("[data-translation-warning-message]");
    if (message) message.textContent = active ? ACTIVE_MESSAGE : RESTORE_MESSAGE;
  };

  const rootObserver = new MutationObserver(update);
  rootObserver.observe(doc.documentElement, { attributes: true, attributeFilter: ["class"] });

  const headObserver = new MutationObserver(update);
  headObserver.observe(doc.head, {
    attributes: true,
    attributeFilter: ["_msttexthash"],
    childList: true,
    subtree: true,
  });

  update();

  return () => {
    rootObserver.disconnect();
    headObserver.disconnect();
    warning?.remove();
  };
}
