// @vitest-environment jsdom

import { afterEach, describe, expect, it } from "vitest";
import {
  installBrowserTranslationWarning,
  isBrowserTranslationActive,
} from "../../../src/utils/browserTranslationWarning.js";

let cleanup: (() => void) | undefined;

afterEach(() => {
  cleanup?.();
  cleanup = undefined;
  document.documentElement.className = "";
  document.querySelector("title")?.removeAttribute("_msttexthash");
});

async function letObserverRun(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 0));
}

describe("browser translation warning", () => {
  it("does not add UI during an ordinary browser session", () => {
    cleanup = installBrowserTranslationWarning();

    expect(isBrowserTranslationActive()).toBe(false);
    expect(document.getElementById("browser-translation-warning")).toBeNull();
  });

  it("warns when Google translation marks the document", async () => {
    cleanup = installBrowserTranslationWarning();
    document.documentElement.classList.add("translated-ltr");
    await letObserverRun();

    const warning = document.getElementById("browser-translation-warning");
    expect(warning?.textContent).toContain("Browser page translation can interfere");
    expect(warning?.getAttribute("translate")).toBe("no");
    expect(warning?.classList.contains("notranslate")).toBe(true);
  });

  it("recognizes Microsoft Edge translation markers", () => {
    const title = document.querySelector("title") ?? document.head.appendChild(document.createElement("title"));
    title.setAttribute("_msttexthash", "123");

    expect(isBrowserTranslationActive()).toBe(true);
    cleanup = installBrowserTranslationWarning();
    expect(document.getElementById("browser-translation-warning")?.textContent).toContain(
      "Browser page translation can interfere",
    );
  });

  it("keeps reload guidance visible after translation is turned off", async () => {
    document.documentElement.classList.add("translated-rtl");
    cleanup = installBrowserTranslationWarning();
    document.documentElement.classList.remove("translated-rtl");
    await letObserverRun();

    expect(document.getElementById("browser-translation-warning")?.textContent).toContain(
      "Page translation has been turned off",
    );
  });
});
