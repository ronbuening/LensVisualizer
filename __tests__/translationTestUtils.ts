/**
 * Reproduce page translators replacing React-owned text with <font> elements.
 * Moving the original Text inside a wrapper is insufficient: React must retain
 * a reference to a detached node, as in react/react#11538. This is a DOM-mutation
 * simulation, not a substitute for checking Chrome's live translation service.
 */
export function replaceTextForTranslation(root: Element): number {
  const document = root.ownerDocument;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];
  while (walker.nextNode()) {
    const text = walker.currentNode as Text;
    const parent = text.parentElement;
    if (
      text.textContent?.trim() &&
      parent?.namespaceURI === "http://www.w3.org/1999/xhtml" &&
      !parent.closest("script, style, textarea, option, [data-translation-simulation]")
    )
      textNodes.push(text);
  }
  for (const text of textNodes) {
    const outer = document.createElement("font");
    const inner = document.createElement("font");
    outer.dataset.translationSimulation = "true";
    inner.textContent = text.textContent;
    outer.appendChild(inner);
    text.parentNode!.replaceChild(outer, text);
  }
  return textNodes.length;
}
