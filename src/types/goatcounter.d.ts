/**
 * Ambient type declaration for the GoatCounter analytics global.
 * Injected by the GoatCounter script tag in index.html.
 */
interface GoatCounter {
  count(opts: { path: string; title?: string; referrer?: string; event?: boolean }): void;
}

interface Window {
  goatcounter?: GoatCounter;
}
