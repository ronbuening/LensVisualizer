/**
 * Reproduce page translators replacing React-owned text with <font> elements.
 * Moving the original Text inside a wrapper is insufficient: React must retain
 * a reference to a detached node, as in react/react#11538. This is a DOM-mutation
 * simulation, not a substitute for checking Chrome's live translation service.
 */
export function replaceTextForTranslation(root: Element): number {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];
  while (walker.nextNode()) {
    const text = walker.currentNode as Text;
    if (text.textContent?.trim() && !text.parentElement?.closest("svg, script, style")) textNodes.push(text);
  }
  for (const text of textNodes) {
    const outer = document.createElement("font");
    const inner = document.createElement("font");
    inner.textContent = text.textContent;
    outer.appendChild(inner);
    text.parentNode!.replaceChild(outer, text);
  }
  return textNodes.length;
}
