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
 * the document. Each detached node gets an instance-level `nodeValue`/`data` setter, so every later React write into
 * it, a readout that silently stopped updating on screen, is counted in `staleWrites` the moment it happens, even if
 * the value later changes back. Call it right after each translation pass, then after interactions and expect
 * `staleWrites` to be 0. It covers any component, including the lint rule's blind spots (opaque `ReactNode` props,
 * components that return bare strings, third-party renderers). Closure-free so `locator.evaluate` can run it.
 * Test-only: it reads React's fiber tree from the root container (`__reactContainer$…`, HostText tag 6), so a React
 * major upgrade may need it revisited.
 */
export function auditDetachedReactText(root: Element): { detached: number; staleWrites: number } {
  interface Fiber {
    tag: number;
    stateNode: unknown;
    child: Fiber | null;
    sibling: Fiber | null;
  }
  const view = root.ownerDocument.defaultView as unknown as typeof globalThis;
  const containerKey = (element: Element) => Object.keys(element).find((key) => key.startsWith("__reactContainer$"));
  let container: Element | null = containerKey(root) ? root : null;
  const walker = root.ownerDocument.createTreeWalker(root, view.NodeFilter.SHOW_ELEMENT);
  while (!container && walker.nextNode()) {
    if (containerKey(walker.currentNode as Element)) container = walker.currentNode as Element;
  }
  if (!container) throw new Error("auditDetachedReactText: no React root at or below the given element");
  const audit = container as Element & { __translationStaleWrites?: number };
  audit.__translationStaleWrites ??= 0;
  const accessors = [
    ["nodeValue", Object.getOwnPropertyDescriptor(view.Node.prototype, "nodeValue")!],
    ["data", Object.getOwnPropertyDescriptor(view.CharacterData.prototype, "data")!],
  ] as const;
  const hostRoot = (container as unknown as Record<string, { stateNode: { current: Fiber } }>)[
    containerKey(container)!
  ];
  let detached = 0;
  const stack: Fiber[] = [hostRoot.stateNode.current];
  while (stack.length) {
    const fiber = stack.pop()!;
    if (fiber.tag === 6) {
      const text = fiber.stateNode as Text;
      if (!text.isConnected) {
        detached++;
        if (!Object.prototype.hasOwnProperty.call(text, "nodeValue")) {
          for (const [name, native] of accessors) {
            Object.defineProperty(text, name, {
              configurable: true,
              get() {
                return native.get!.call(this);
              },
              set(value: string) {
                if (value !== native.get!.call(this)) audit.__translationStaleWrites! += 1;
                native.set!.call(this, value);
              },
            });
          }
        }
      }
    }
    if (fiber.sibling) stack.push(fiber.sibling);
    if (fiber.child) stack.push(fiber.child);
  }
  return { detached, staleWrites: audit.__translationStaleWrites };
}
