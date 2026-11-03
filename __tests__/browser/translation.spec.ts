import { expect, test, type Page } from "@playwright/test";
import { ANALYSIS_TABS } from "../../src/components/layout/lensDiagram/analysisTabs.js";
import { MTF_PREFERENCES_KEY } from "../../src/utils/state/mtfPreferences.js";
import { auditDetachedReactText, replaceTextForTranslation } from "../translationTestUtils.js";
import { TRANSLATION_ROUTES } from "../translationCoverage.js";

/*
 * Simulated page translation (agent_docs/testing_recipes.md, Translation DOM Replacement). Flows replace text before
 * each interaction, as a live translator keeps doing, and healthy() fails on an error view, on any translation
 * opt-out, and on any React write into a text node the translator detached. The audit stands in for per-readout
 * value checks: owned text cannot go stale, and text that is not owned is caught wherever it renders.
 */

/** Replace text as a translator would, then let the audit watch the React text that replacement detached. */
async function translate(page: Page) {
  // src/main.tsx creates the root only after the router initializes; translate React-owned content, not the shell.
  await page.waitForFunction(() =>
    Object.keys(document.getElementById("root") ?? {}).some((key) => key.startsWith("__reactContainer$")),
  );
  const replaced = await page.locator("body").evaluate(replaceTextForTranslation);
  await page.locator("body").evaluate(auditDetachedReactText);
  return replaced;
}

async function healthy(page: Page) {
  await expect(page.getByText(/Diagram Rendering Error|Something went wrong/)).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "Page Error", exact: true })).toHaveCount(0);
  await expect(page.locator('[translate="no"],.notranslate,meta[name="google"][content="notranslate"]')).toHaveCount(0);
  expect(await page.locator("body").evaluate(auditDetachedReactText)).toMatchObject({ staleWrites: 0 });
}

async function readyHeading(page: Page) {
  // The client removes prerendered head tags after its first React commit.
  await expect(page.locator("[data-prerender-head]")).toHaveCount(0);
  const heading = page.getByRole("heading", { level: 1 }).first();
  await expect(heading).toBeVisible();
  return heading;
}

async function selectAnalysisTab(page: Page, label: string) {
  const button = page.getByRole("button", { name: label, exact: true }).last();
  await button.click();
  await expect(button).toHaveAttribute("aria-pressed", "true");
  const controlledId = await button.getAttribute("aria-controls");
  // The comparison page's shared drawer buttons do not name the panel they control.
  const drawer = controlledId
    ? page.locator(`[id=${JSON.stringify(controlledId)}]`)
    : button.locator("xpath=ancestor::div[@id][1]");
  await expect(drawer).toBeVisible();
  return drawer;
}

async function openAnalysisOnPhone(page: Page, compact: boolean) {
  if (compact)
    await page
      .getByRole("button", { name: /ABERRATIONS & DISTORTIONS/ })
      .first()
      .click();
}

test.beforeEach(async ({ page }) => {
  page.on("pageerror", (error) => {
    throw error;
  });
});

test.describe("every route", () => {
  for (const route of TRANSLATION_ROUTES) {
    test(route.pattern, async ({ page }, testInfo) => {
      test.skip(testInfo.project.name !== "desktop", "Routes run at one width; flows below cover the compact layout.");
      if ("url" in route) await page.goto(route.url);
      else {
        await page.goto(route.index);
        const index = await (await readyHeading(page)).innerText();
        const detail = page.locator(`main a[href^="${route.index}/"]`).first();
        const target = await detail.getAttribute("href");
        await translate(page);
        await detail.click();
        await expect(page).toHaveURL(new RegExp(`${target}$`));
        await expect(page.getByRole("heading", { level: 1 }).first()).not.toHaveText(index);
      }
      const heading = await readyHeading(page);
      const title = await heading.innerText();
      expect(await translate(page)).toBeGreaterThan(0);
      const theme = page.getByRole("button", { name: /theme/i }).first();
      if (await theme.count()) {
        await theme.click();
        await expect(heading).toHaveText(title);
      }
      await healthy(page);
      // Leave through a router link so the translated route is unmounted.
      await page.locator('a[href="/"]').first().click();
      await expect(page).toHaveURL(/\/$/);
      await healthy(page);
    });
  }
});

// A standard prime with display modes and a lens switch at both widths; perspective-control and folded mirror lenses
// add their own analysis paths, which do not change with the phone layout.
const LENS_FLOWS = [
  { url: "/lens/nikkor-85f14g", slider: "FOCUS", switchTo: "NIKON AI NIKKOR 85mm f/1.4 S" },
  { url: "/lens/canon-ts-e-24mm-f35l-ii", slider: "SHIFT", desktopOnly: true },
  { url: "/lens/nikon-reflex-nikkor-500mm-f8-new", slider: "FOCUS", desktopOnly: true },
] as const;

for (const flow of LENS_FLOWS) {
  test(`lens view ${flow.url}`, async ({ page }, testInfo) => {
    const compact = testInfo.project.name === "compact";
    test.skip(compact && "desktopOnly" in flow, "Lens-specific analysis paths run at one width.");
    // The default MTF model takes minutes in a dev build; the fastest stored options still exercise its worker result.
    await page.addInitScript((key) => {
      const fast = { method: "geometric", spectrum: "reference", maxGridSize: 128, gridCapRevision: 2 };
      localStorage.setItem(key, JSON.stringify(fast));
    }, MTF_PREFERENCES_KEY);
    await page.goto(flow.url);
    const heading = await readyHeading(page);
    if ("switchTo" in flow) {
      const original = await heading.innerText();
      for (const name of [flow.switchTo, original]) {
        await translate(page);
        await page.locator('button[aria-haspopup="listbox"]').first().click();
        await page.getByRole("option", { name, exact: true }).click();
        await expect(heading).toHaveText(name);
      }
      if (compact) await page.getByRole("button", { name: /^LEGEND/ }).click();
      for (const index of [0, 2, 0]) {
        await translate(page);
        await page
          .getByRole("button", { name: /^Select lens element/ })
          .nth(index)
          .press("Enter");
        await expect(page.getByText("Glass:", { exact: true })).toBeVisible();
      }
      await healthy(page);
      for (const label of [
        compact ? /⟩ F/ : /TRACKS FOCUS/,
        compact ? "∞" : /FROM ∞/,
        "COLOR",
        "COLOR",
        compact ? "PATENT" : "PATENT POSITIONS",
        compact ? "PATENT" : "SLIDERS",
      ]) {
        await translate(page);
        await page.getByRole("button", { name: label, exact: true }).last().click();
      }
      await healthy(page);
    }
    await openAnalysisOnPhone(page, compact);
    const slider = page.getByRole("slider", { name: flow.slider, exact: true });
    for (const tab of ANALYSIS_TABS) {
      await translate(page);
      const drawer = await selectAnalysisTab(page, tab.label);
      await translate(page);
      await slider.press("End");
      // Let the MTF worker finish so its result renders into the translated tab; other statuses are final notices.
      const progress = drawer.getByRole("status").filter({ hasText: /Calculating|Updating/ });
      if (tab.id === "mtf") await expect(progress).toHaveCount(0, { timeout: 60_000 });
      await healthy(page);
      await slider.press("Home");
    }
    await translate(page);
    await page.keyboard.press("Escape");
    await healthy(page);
  });
}

test("primers, about dialogs and detail overlays", async ({ page }, testInfo) => {
  await page.goto("/lens/nikkor-85f14g");
  await readyHeading(page);
  // Switching a translated primer's level used to replace the whole route with "Page Error".
  for (const [opener, name] of [
    ["Optics", "Optics primer"],
    ["Aberrations", "Aberrations primer"],
    ["Site", "About this site"],
    ["Author", "About the author"],
  ]) {
    await page.getByRole("button", { name: opener, exact: true }).click();
    const dialog = page.getByRole("dialog", { name, exact: true });
    await expect(dialog).toBeVisible();
    if (name.endsWith("primer")) {
      for (const level of [/Want more detail/, /Back to Simple Primer/]) {
        await translate(page);
        await dialog.getByRole("button", { name: level }).click();
        await healthy(page);
      }
    }
    await translate(page);
    await page.keyboard.press("Escape");
    await expect(dialog).toHaveCount(0);
    await healthy(page);
  }
  if (testInfo.project.name === "compact") await page.getByRole("button", { name: /^LEGEND/ }).click();
  await page.getByRole("button", { name: "COLOR", exact: true }).click();
  for (const [opener, name] of [
    ["Abbe ↗", "Glass map"],
    ["Open chromatic aberration detail", "Chromatic aberration detail"],
    ["Open Petzval field curvature detail", "Petzval field curvature detail"],
    ["Open focus group motion chart", "Group movement detail"],
  ]) {
    await translate(page);
    await page.getByRole("button", { name: opener, exact: true }).click();
    const dialog = page.getByRole("dialog", { name, exact: true });
    await expect(dialog).toBeVisible();
    if (name === "Glass map") {
      await translate(page);
      await dialog.getByRole("button", { name: "GLASS TYPE", exact: true }).click();
    }
    await translate(page);
    await page.keyboard.press("Escape");
    await expect(dialog).toHaveCount(0);
    await healthy(page);
  }
  await page.goto("/lens/canon-ts-e-24mm-f35l-ii");
  if (testInfo.project.name === "compact") await page.getByRole("button", { name: /^LEGEND/ }).click();
  await page
    .getByRole("button", { name: /^Select lens element/ })
    .first()
    .press("Enter");
  await page.getByRole("button", { name: /Compare to sphere/ }).click();
  const aspheric = page.getByRole("dialog", { name: "Aspheric surface comparison", exact: true });
  for (const control of ["Best-fit sphere", "Base sphere (R)", "zoom in", "reset zoom"]) {
    await translate(page);
    await aspheric.getByRole("button", { name: control, exact: true }).click();
  }
  await translate(page);
  await aspheric.getByRole("slider").press("End");
  await healthy(page);
});

test("comparison sliders, details, drawer and width changes", async ({ page }, testInfo) => {
  await page.goto("/compare/nikkor-85f14g/agfa-color-telinear-90mm-f4");
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(2);
  const aperture = page.getByRole("slider", { name: "APERTURE", exact: true });
  const focus = page.getByRole("slider", { name: "FOCUS", exact: true });
  for (const [slider, key] of [
    [aperture, "End"],
    [focus, "End"],
    [aperture, "Home"],
  ] as const) {
    await translate(page);
    await slider.press(key);
  }
  await expect(page.getByText("A: f/1.45", { exact: true })).toBeVisible();
  for (const details of await page.getByRole("button", { name: /^DETAILS/ }).all()) {
    await translate(page);
    await details.click();
  }
  await healthy(page);
  await openAnalysisOnPhone(page, testInfo.project.name === "compact");
  for (const tab of ["BREATHING", "SUMMARY"]) {
    await translate(page);
    await selectAnalysisTab(page, tab);
  }
  await translate(page);
  await page.keyboard.press("Escape");
  await healthy(page);
  for (const width of [900, 390, 1440]) {
    await translate(page);
    await page.setViewportSize({ width, height: 780 });
    await expect(aperture).toBeVisible();
    await healthy(page);
  }
});

test("catalog, search, author, mount and relationship controls", async ({ page }) => {
  await page.goto("/lenses");
  const count = page.getByText(/^Showing \d+ of \d+ interactive/);
  const initial = await count.innerText();
  for (const grouping of ["By Inventor", "By Focal Length", "By Maker"]) {
    await translate(page);
    await page.getByRole("button", { name: grouping, exact: true }).click();
    await expect(count).toHaveText(initial);
  }
  // The page re-syncs the panel's open state from the URL after a regroup, which can undo an immediate click.
  const customFilter = page.getByRole("button", { name: "Custom Filter", exact: true });
  const minimum = page.getByRole("spinbutton", { name: "Minimum focal length value", exact: true });
  await expect(async () => {
    if ((await customFilter.getAttribute("aria-expanded")) !== "true") await customFilter.click();
    await expect(minimum).toBeVisible({ timeout: 1_000 });
  }).toPass({ timeout: 15_000 });
  await translate(page);
  await minimum.fill("500");
  await minimum.press("Enter");
  await expect(count).not.toHaveText(initial);
  await translate(page);
  await page.getByRole("button", { name: "Clear Filters", exact: true }).click();
  await expect(count).toHaveText(initial);
  await healthy(page);

  await page.goto("/search");
  const search = page.getByRole("searchbox");
  for (const query of ["nikon", "translation-no-such-lens", "agfa", ""]) {
    await translate(page);
    await search.fill(query);
  }
  await expect(page.getByText("Enter a lens or teleconverter name", { exact: false })).toBeVisible();
  await healthy(page);

  await page.goto("/authors");
  const status = page.getByRole("status");
  await expect(status).toContainText("authors across");
  await translate(page);
  await page.getByRole("button", { name: "Patent count", exact: true }).click();
  for (const option of [1, 0]) {
    await page.getByRole("button", { name: "Company / assignee", exact: true }).click();
    await translate(page);
    await page.getByRole("option").nth(option).click();
  }
  await expect(status).toContainText("authors across");
  await healthy(page);

  await page.goto("/mounts/nikon-f");
  const profile = page.getByRole("combobox", { name: "Profile", exact: true });
  const original = await profile.inputValue();
  for (const value of ["nikon-f/non-ai", original]) {
    await translate(page);
    await profile.selectOption(value);
  }
  await healthy(page);

  await page.goto("/relationships");
  const picker = page.getByRole("searchbox", { name: "Search inventors and assignees", exact: true });
  await translate(page);
  await picker.fill("Wakamiya");
  await page.getByRole("button", { name: /Koichi Wakamiya.*author/i }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Koichi Wakamiya");
  await translate(page);
  await picker.fill("Nikon Corporation");
  await page.getByRole("list", { name: "Inventor and assignee suggestions" }).getByRole("button").first().click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Nikon Corporation");
  await healthy(page);
});
