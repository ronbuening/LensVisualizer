/**
 * Reproduce page translators replacing React-owned text with <font> elements.
 * Moving the original Text inside a wrapper is insufficient: React must retain
 * a reference to a detached node, as in facebook/react#11538. The wrappers carry
 * the `dir="auto"` and `vertical-align: inherit` markup Google's translator
 * leaves. This is a DOM-mutation simulation, not a substitute for checking a
 * live translation service.
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
    for (const wrapper of [outer, inner]) {
      wrapper.dir = "auto";
      wrapper.style.verticalAlign = "inherit";
    }
    outer.dataset.translationSimulation = "true";
    inner.textContent = text.textContent;
    outer.appendChild(inner);
    text.parentNode!.replaceChild(outer, text);
  }
  return textNodes.length;
}

/**
 * Audit the Text nodes React still owns under `root` after a translation pass. `detached` counts those no longer in
 * the document; `staleWrites` counts the detached ones whose text React has rewritten since this audit first saw them
 * detached, i.e. readouts that silently stopped updating on screen. Call it once right after each translation pass to
 * record the displaced values, then again after interactions and expect `staleWrites` to be 0; this covers any
 * component, including the lint rule's blind spots (opaque `ReactNode` props, components that return bare strings,
 * third-party renderers). Closure-free so `locator.evaluate` can run it. Test-only: it reads React's fiber tree from
 * the root container (`__reactContainer$…`, HostText tag 6), so a React major upgrade may need it revisited.
 */
export function auditDetachedReactText(root: Element): { detached: number; staleWrites: number } {
  interface Fiber {
    tag: number;
    stateNode: unknown;
    child: Fiber | null;
    sibling: Fiber | null;
  }
  const view = root.ownerDocument.defaultView as unknown as { __translationTextAudit?: WeakMap<Node, string | null> };
  const seen = (view.__translationTextAudit ??= new WeakMap());
  const containerKey = (element: Element) => Object.keys(element).find((key) => key.startsWith("__reactContainer$"));
  let container: Element | null = containerKey(root) ? root : null;
  const walker = root.ownerDocument.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
  while (!container && walker.nextNode()) {
    if (containerKey(walker.currentNode as Element)) container = walker.currentNode as Element;
  }
  if (!container) throw new Error("auditDetachedReactText: no React root at or below the given element");
  const hostRoot = (container as unknown as Record<string, { stateNode: { current: Fiber } }>)[
    containerKey(container)!
  ];
  let detached = 0;
  let staleWrites = 0;
  const stack: Fiber[] = [hostRoot.stateNode.current];
  while (stack.length) {
    const fiber = stack.pop()!;
    if (fiber.tag === 6) {
      const text = fiber.stateNode as Text;
      if (!text.isConnected) {
        detached++;
        if (!seen.has(text)) seen.set(text, text.nodeValue);
        else if (seen.get(text) !== text.nodeValue) staleWrites++;
      }
    }
    if (fiber.sibling) stack.push(fiber.sibling);
    if (fiber.child) stack.push(fiber.child);
  }
  return { detached, staleWrites };
}
