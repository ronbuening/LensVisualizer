import { expect, test, type Page } from "@playwright/test";
import { replaceTextForTranslation } from "../translationTestUtils.js";
import { TRANSLATION_ROUTES, TRANSLATION_ANALYSIS_TABS } from "../translationCoverage.js";

const lensName = "NIKON AF-S NIKKOR 85mm f/1.4 G";
const lensUrl = "/lens/nikkor-85f14g";

async function translate(page: Page) {
  return page.locator("body").evaluate(replaceTextForTranslation);
}

async function healthy(page: Page) {
  await expect(page.getByText(/Diagram Rendering Error|Something went wrong/)).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "Page Error", exact: true })).toHaveCount(0);
  await expect(page.locator('[translate="no"],.notranslate,meta[name="google"][content="notranslate"]')).toHaveCount(0);
}

async function selectAnalysisTab(page: Page, name: string) {
  const button = page.getByRole("button", { name: name.toUpperCase(), exact: true }).last();
  await button.click();
  await expect(button).toHaveAttribute("aria-pressed", "true");
  const controlledId = await button.getAttribute("aria-controls");
  const drawer = controlledId
    ? page.locator(`[id=${JSON.stringify(controlledId)}]`)
    : button.locator("xpath=ancestor::div[@id][1]");
  await expect(drawer).toBeVisible();
  await expect(drawer).not.toHaveAttribute("inert");
  await expect(drawer).toHaveCSS("opacity", "1");
  return drawer;
}

test.beforeEach(async ({ page }) => {
  page.on("pageerror", (error) => {
    throw error;
  });
});

for (const route of TRANSLATION_ROUTES) {
  test(`translated route ${route.pattern}: ${route.coverage}`, async ({ page }) => {
    if ("url" in route) {
      await page.goto(route.url);
    } else {
      await page.goto(route.index);
      await expect(page.getByRole("heading", { level: 1 }).first()).toBeVisible();
      const details = page.locator(`main a[href^="${route.index}/"]`);
      if (await details.count()) {
        const indexHeading = await page.getByRole("heading", { level: 1 }).first().innerText();
        const target = await details.first().getAttribute("href");
        await translate(page);
        await details.first().click();
        await expect(page).toHaveURL(new RegExp(`${target}$`));
        await expect(page.getByRole("heading", { level: 1 }).first()).not.toHaveText(indexHeading);
      } else {
        // There may be no public teleconverter yet. Keep this limitation visible.
        expect(route.index).toBe("/teleconverters");
        test.info().annotations.push({
          type: "coverage-limit",
          description: "No published teleconverter; unknown-key view only",
        });
        await page.goto(`${route.index}/translation-missing-converter`);
      }
    }
    const heading = page.getByRole("heading", { level: 1 }).first();
    await expect(heading).toBeVisible();
    // Comparison URLs use the homepage HTML fallback until the client route loads.
    if (route.pattern === "/compare/:slugA/:slugB") await expect(heading).toHaveText(lensName);
    const initialHeading = await heading.innerText();
    expect(await translate(page)).toBeGreaterThan(0);
    const theme = page.getByRole("button", { name: /theme/i }).first();
    if (await theme.count()) {
      await theme.click();
      await expect(heading).toHaveText(initialHeading);
    }
    await healthy(page);
    // Use an existing React Router link so translated content is actually unmounted.
    const home = page.locator('a[href="/"]').first();
    await home.click();
    await expect(page).toHaveURL(/\/$/);
    await healthy(page);
  });
}

test("lens navigation, translated inspector and display modes", async ({ page }, testInfo) => {
  const compact = testInfo.project.name === "compact";
  await page.goto(lensUrl);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(lensName);
  for (const name of ["NIKON AI NIKKOR 85mm f/1.4 S", lensName]) {
    await translate(page);
    await page.locator('button[aria-haspopup="listbox"]').first().click();
    await page.getByRole("option", { name, exact: true }).click();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(name);
  }
  if (compact) await page.getByRole("button", { name: /^LEGEND/ }).click();
  await translate(page);
  await page.getByRole("button", { name: "COLOR", exact: true }).click();
  const elements = page.getByRole("button", { name: /^Select lens element/ });
  for (const index of [0, 1, 3, 7, 0]) {
    await translate(page);
    if (compact) await elements.nth(index).click();
    else await elements.nth(index).hover();
    await expect(page.getByText("Glass:", { exact: true })).toBeVisible();
    await healthy(page);
  }
  if (!compact) await page.mouse.move(0, 0);
  for (const label of [
    compact ? "∞" : /FROM ∞/,
    compact ? /⟩ F/ : /TRACKS FOCUS/,
    compact ? "ON" : "ON-AXIS",
    compact ? "ON" : "ON-AXIS",
    "COLOR",
    compact ? "PATENT" : "PATENT POSITIONS",
    compact ? "PATENT" : "SLIDERS",
  ]) {
    await translate(page);
    await page.getByRole("button", { name: label, exact: true }).last().click();
    await healthy(page);
  }
  await translate(page);
  await page.getByRole("button", { name: "Enter zoom and pan mode", exact: true }).click();
  await page.getByRole("button", { name: "Reset zoom", exact: true }).click();
  await translate(page);
  await page.getByRole("button", { name: "Exit zoom and pan mode", exact: true }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(lensName);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 2)).toBe(true);
});

test("all analysis tabs open, accept controls and close/reopen after text replacement", async ({ page }, testInfo) => {
  await page.goto(lensUrl);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(lensName);
  const compact = testInfo.project.name === "compact";
  if (compact) await page.getByRole("button", { name: /ABERRATIONS & DISTORTIONS/ }).click();
  for (const tab of TRANSLATION_ANALYSIS_TABS) {
    await translate(page);
    await selectAnalysisTab(page, tab);
    if (tab === "mtf") {
      const plane = page.getByRole("combobox", { name: "MTF image plane", exact: true });
      await expect(plane).toBeVisible();
      await translate(page);
      await plane.selectOption("design");
      await expect(plane).toHaveValue("design");
      const mtf = page.getByRole("region", { name: "Simulated MTF", exact: true });
      await expect(mtf.getByRole("status")).toHaveCount(0, { timeout: 60_000 });
      await expect(mtf.getByRole("alert")).toHaveCount(0);
      await expect(
        mtf.getByRole("group", { name: "MTF chart values: hover, or focus and use the arrow keys" }),
      ).toBeVisible();
    } else {
      const focus = page.getByRole("slider", { name: "FOCUS", exact: true });
      const efl = page.getByText("CURRENT EFL", { exact: true }).locator("xpath=ancestor::div[1]");
      const infinityEfl = tab === "summary" ? await efl.textContent() : null;
      await translate(page);
      await focus.press("End");
      await expect(focus).toHaveValue("1");
      if (infinityEfl !== null) await expect(efl).not.toHaveText(infinityEfl);
      await translate(page);
      await focus.press("Home");
      await expect(focus).toHaveValue("0");
      if (infinityEfl !== null) await expect(efl).toHaveText(infinityEfl);
    }
    await healthy(page);
  }
  const drawer = await selectAnalysisTab(page, "summary");
  await translate(page);
  await page.keyboard.press("Escape");
  await expect(drawer).toHaveAttribute("inert");
  if (compact) await page.getByRole("button", { name: /ABERRATIONS & DISTORTIONS/ }).click();
  await selectAnalysisTab(page, "summary");
  await healthy(page);
});

test("comparison captions and compact details update to the current aperture", async ({ page }) => {
  await page.goto("/compare/nikkor-85f14g/agfa-color-telinear-90mm-f4");
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(2);
  expect(await translate(page)).toBeGreaterThan(0);
  const aperture = page.getByRole("slider", { name: "APERTURE", exact: true });
  await aperture.press("End");
  await expect(page.getByText("A: f/16", { exact: true })).toBeVisible();
  await expect(page.getByText("B: f/32", { exact: true })).toBeVisible();
  await expect(page.getByText("A: f/1.45", { exact: true })).toHaveCount(0);
  for (const details of await page.getByRole("button", { name: /^DETAILS/ }).all()) {
    await translate(page);
    await details.click();
    await translate(page);
    await details.click();
  }
  await translate(page);
  await aperture.press("Home");
  await expect(page.getByText("A: f/1.45", { exact: true })).toBeVisible();
  await expect(page.getByText("B: f/4.0", { exact: true })).toBeVisible();
  const mobileAnalysis = page.getByRole("button", { name: /ABERRATIONS & DISTORTIONS/ });
  if (await mobileAnalysis.count()) await mobileAnalysis.first().click();
  for (const tab of ["BREATHING", "SUMMARY"]) {
    await translate(page);
    await selectAnalysisTab(page, tab);
    await healthy(page);
  }
  await translate(page);
  await page.keyboard.press("Escape");
  await healthy(page);
});

test("search text and counts follow empty, matching and zero-result queries", async ({ page }) => {
  await page.goto("/search");
  const search = page.getByRole("searchbox");
  for (const query of ["nikon", "translation-no-such-lens", "agfa", ""]) {
    await translate(page);
    await search.fill(query);
    if (query === "translation-no-such-lens")
      await expect(page.getByText(`No results for “${query}”`, { exact: false })).toBeVisible();
    else if (query) await expect(page.locator('[aria-live="polite"]').last()).toContainText(`for “${query}”`);
    else await expect(page.getByText("Enter a lens or teleconverter name", { exact: false })).toBeVisible();
    await expect(search).toBeFocused();
    await healthy(page);
  }
});

test("catalog filtering and regrouping keep translated counts current", async ({ page }) => {
  await page.goto("/lenses");
  const count = page.getByText(/^Showing \d+ of \d+ interactive/);
  await expect(count).toBeVisible();
  const initial = await count.innerText();
  for (const grouping of ["By Inventor", "By Assignee", "By Focal Length", "By Mount", "By Format", "By Maker"]) {
    await translate(page);
    await page.getByRole("button", { name: grouping, exact: true }).click();
    await expect(count).toHaveText(initial);
    await healthy(page);
  }
  await page.getByRole("button", { name: "Custom Filter", exact: true }).click();
  await translate(page);
  const minimum = page.getByRole("spinbutton", { name: "Minimum focal length value", exact: true });
  await minimum.fill("500");
  await minimum.press("Enter");
  await expect(count).not.toHaveText(initial);
  await expect(page.getByText(/^500–.+mm$/)).toBeVisible();
  await translate(page);
  await page.getByRole("button", { name: "Clear Filters", exact: true }).click();
  await expect(count).toHaveText(initial);
  await healthy(page);
});

test("author filtering and sorting preserve translated cards and live counts", async ({ page }) => {
  await page.goto("/authors");
  const status = page.getByRole("status");
  await expect(status).toContainText("authors across");
  const initial = await status.innerText();
  await translate(page);
  await page.getByRole("button", { name: "Patent count", exact: true }).click();
  await expect(status).toHaveText(initial);
  await page.getByRole("button", { name: "Company / assignee", exact: true }).click();
  const company = page.getByRole("option").nth(1);
  await translate(page);
  await company.click();
  await expect(status).toContainText("authors shown for");
  await expect(status).not.toHaveText(initial);
  await translate(page);
  await page.getByRole("button", { name: "Company / assignee", exact: true }).click();
  await page.getByRole("option").first().click();
  await expect(status).toHaveText(initial);
  await healthy(page);
});

test("translated primer content changes level and dialogs close, restore focus and reopen", async ({ page }) => {
  await page.goto(lensUrl);
  for (const [buttonName, dialogName] of [
    ["Optics", "Optics primer"],
    ["Aberrations", "Aberrations primer"],
    ["Site", "About this site"],
    ["Author", "About the author"],
  ]) {
    const opener = page.getByRole("button", { name: buttonName, exact: true });
    await opener.click();
    const dialog = page.getByRole("dialog", { name: dialogName, exact: true });
    await expect(dialog).toBeVisible();
    expect(await translate(page)).toBeGreaterThan(0);
    if (dialogName.endsWith("primer")) {
      await dialog.getByRole("button", { name: /Want more detail/ }).click();
      await expect(dialog.getByRole("button", { name: /Back to Simple Primer/ })).toBeVisible();
      await translate(page);
      await dialog.getByRole("button", { name: /Back to Simple Primer/ }).click();
      await expect(dialog.getByRole("button", { name: /Want more detail/ })).toBeVisible();
    }
    await translate(page);
    await page.keyboard.press("Escape");
    await expect(dialog).toHaveCount(0);
    await expect(opener).toBeFocused();
    await opener.click();
    await expect(dialog).toBeVisible();
    await translate(page);
    await dialog.getByRole("button", { name: "Close", exact: true }).click();
    await expect(dialog).toHaveCount(0);
    await healthy(page);
  }
});

test("perspective movement and unavailable folded analysis survive replacement", async ({ page }, testInfo) => {
  await page.goto("/lens/canon-ts-e-24mm-f35l-ii");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("CANON TS-E 24mm f/3.5 L II");
  const shift = page.getByRole("slider", { name: "SHIFT", exact: true });
  const tilt = page.getByRole("slider", { name: "TILT", exact: true });
  await translate(page);
  await shift.press("End");
  await translate(page);
  await tilt.press("End");
  if (testInfo.project.name === "compact")
    await page.getByRole("button", { name: /ABERRATIONS & DISTORTIONS/ }).click();
  for (const tab of TRANSLATION_ANALYSIS_TABS) {
    await translate(page);
    const drawer = await selectAnalysisTab(page, tab);
    const labels: Partial<Record<(typeof TRANSLATION_ANALYSIS_TABS)[number], string>> = {
      summary: "SHIFT",
      aberrations: "MAX T-S SPLIT",
      chromatic: "MAX FOCUS SPAN",
      coma: "SHARED RANGE",
      bokeh: "CENTER BLUR RMS",
      distortion: "RESIDUAL RMS",
      vignetting: "CENTER RI",
    };
    const label = labels[tab];
    const readout = label
      ? drawer.getByText(label, { exact: true }).locator("xpath=ancestor::div[1]")
      : tab === "pupils"
        ? drawer.locator('[aria-label="Pupil sample status"]')
        : null;
    const original = readout ? await readout.textContent() : null;
    await translate(page);
    await shift.press("Home");
    if (readout) await expect(readout).not.toHaveText(original!);
    await healthy(page);
    await translate(page);
    await shift.press("End");
    if (readout) await expect(readout).toHaveText(original!);
    if (tab === "mtf") await expect(drawer).toContainText("not available while tilt or shift is active");
    if (tab === "breathing") {
      const efl = drawer.getByText("EFL", { exact: true }).locator("xpath=ancestor::div[1]");
      const far = await efl.textContent();
      const focus = page.getByRole("slider", { name: "FOCUS", exact: true });
      await translate(page);
      await focus.press("End");
      await expect(efl).not.toHaveText(far!);
      await translate(page);
      await focus.press("Home");
      await expect(efl).toHaveText(far!);
    }
    await healthy(page);
  }
  await page.goto("/lens/nikon-reflex-nikkor-500mm-f8-new");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("REFLEX");
  if (testInfo.project.name === "compact")
    await page.getByRole("button", { name: /ABERRATIONS & DISTORTIONS/ }).click();
  for (const tab of ["SUMMARY", "MTF", "VIGNETTING", "PUPILS"]) {
    await translate(page);
    await selectAnalysisTab(page, tab);
    await healthy(page);
  }
});

test("translated comparison survives width boundaries and short-viewport details", async ({ page }) => {
  await page.goto("/compare/nikkor-85f14g/agfa-color-telinear-90mm-f4");
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(2);
  for (const width of [1200, 900, 899, 390, 1440]) {
    await translate(page);
    await page.setViewportSize({ width, height: 780 });
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(2);
    await expect(page.getByRole("slider", { name: "APERTURE", exact: true })).toBeVisible();
    await healthy(page);
  }
  for (const details of await page.getByRole("button", { name: /^DETAILS/ }).all()) {
    await translate(page);
    await details.click();
    await translate(page);
    await details.click();
    await healthy(page);
  }
});

// Learn expected display values from an unmodified DOM, then repeat the same
// state transitions after replacement. This tests freshness, not optics math.
for (const [tab, label] of [
  ["summary", "CURRENT EFL"],
  ["aberrations", "EDGE T / S"],
  ["chromatic", "LOCA"],
  ["coma", "OUTER RMS"],
  ["bokeh", ""],
  ["distortion", "EDGE"],
  ["breathing", "EFL"],
  ["vignetting", "EDGE RI"],
  ["pupils", "MAX EP SHIFT"],
]) {
  test(`translated ${tab} readout matches clean focus states`, async ({ page }, testInfo) => {
    await page.goto(lensUrl);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(lensName);
    if (testInfo.project.name === "compact")
      await page.getByRole("button", { name: /ABERRATIONS & DISTORTIONS/ }).click();
    const drawer = await selectAnalysisTab(page, tab);
    // Bokeh's numerical readouts are SVG: assert freshness after HTML replacement,
    // without claiming this simulates translation inside SVG.
    const value = label
      ? drawer.getByText(label, { exact: true }).locator("xpath=ancestor::div[1]")
      : drawer.getByText(/^Defocus:/).first();
    await expect(value).toContainText(/\d/);
    const far = await value.textContent();
    const focus = page.getByRole("slider", { name: "FOCUS", exact: true });
    await focus.press("End");
    await expect(value).not.toHaveText(far!);
    const near = await value.textContent();
    await focus.press("Home");
    await expect(value).toHaveText(far!);
    await translate(page);
    await focus.press("End");
    await expect(value).toHaveText(near!);
    await translate(page);
    await focus.press("Home");
    await expect(value).toHaveText(far!);
    await healthy(page);
  });
}

test("translated MTF table matches clean aperture results from the real worker", async ({ page }, testInfo) => {
  await page.goto(lensUrl);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(lensName);
  if (testInfo.project.name === "compact")
    await page.getByRole("button", { name: /ABERRATIONS & DISTORTIONS/ }).click();
  await selectAnalysisTab(page, "mtf");
  const mtf = page.getByRole("region", { name: "Simulated MTF", exact: true });
  await mtf.getByRole("combobox", { name: "MTF image plane", exact: true }).selectOption("design");
  const summary = mtf
    .locator("details")
    .filter({ has: page.locator("table") })
    .locator("summary");
  await expect(mtf.getByRole("status")).toHaveCount(0, { timeout: 60_000 });
  await summary.click();
  const value = mtf.getByRole("table").locator("tbody tr").first().locator("td").first();
  await expect(value).toHaveText(/\d\.\d{3} \/ \d\.\d{3}/);
  const wide = await value.textContent();
  const aperture = page.getByRole("slider", { name: "APERTURE", exact: true });
  await aperture.press("End");
  await expect(value).not.toHaveText(wide!, { timeout: 60_000 });
  await expect(mtf.getByRole("status")).toHaveCount(0, { timeout: 60_000 });
  const stopped = await value.textContent();
  await aperture.press("Home");
  await expect(value).toHaveText(wide!, { timeout: 60_000 });
  await translate(page);
  await aperture.press("End");
  await expect(value).toHaveText(stopped!, { timeout: 60_000 });
  await translate(page);
  await aperture.press("Home");
  await expect(value).toHaveText(wide!, { timeout: 60_000 });
  await healthy(page);
});

test("translated inspector shows the current glass during element changes", async ({ page }, testInfo) => {
  await page.goto(lensUrl);
  if (testInfo.project.name === "compact") await page.getByRole("button", { name: /^LEGEND/ }).click();
  const elements = page.getByRole("button", { name: /^Select lens element/ });
  const glass = page.getByText("Glass:", { exact: true }).locator("xpath=ancestor::div[1]");
  const values: string[] = [];
  for (const index of [0, 1, 3]) {
    await elements.nth(index).press("Enter");
    await expect(glass).toContainText(/OHARA|HOYA/);
    values.push((await glass.textContent())!);
  }
  expect(new Set(values).size).toBe(3);
  for (const [position, index] of [0, 1, 3].entries()) {
    await translate(page);
    await elements.nth(index).press("Enter");
    await expect(glass).toHaveText(values[position]);
    await healthy(page);
  }
});

test("translated glass, chromatic and Petzval overlays update and reopen", async ({ page }, testInfo) => {
  await page.goto(lensUrl);
  if (testInfo.project.name === "compact") await page.getByRole("button", { name: /^LEGEND/ }).click();
  await page.getByRole("button", { name: "COLOR", exact: true }).click();
  for (const [button, name] of [
    ["Abbe ↗", "Glass map"],
    ["Open chromatic aberration detail", "Chromatic aberration detail"],
    ["Open Petzval field curvature detail", "Petzval field curvature detail"],
  ]) {
    const opener = page.getByRole("button", { name: button, exact: true });
    await opener.click();
    const dialog = page.getByRole("dialog", { name, exact: true });
    await expect(dialog).toBeVisible();
    const initial = await dialog.textContent();
    if (name === "Glass map") {
      await translate(page);
      await dialog.getByRole("button", { name: "GLASS TYPE", exact: true }).click();
      await expect(dialog).not.toHaveText(initial!);
      await translate(page);
      await dialog.getByRole("button", { name: "GLASS TYPE", exact: true }).click();
      await expect(dialog).toHaveText(initial!);
    } else if (name === "Chromatic aberration detail") {
      const value = dialog.getByText(/^LoCA \/ AXIAL COLOR \d/);
      const wide = await value.textContent();
      const aperture = page.getByRole("slider", { name: "APERTURE", exact: true });
      // The modal traps focus. Change the background control only after closing,
      // then reopen to check the newly computed detail value.
      await page.keyboard.press("Escape");
      await aperture.press("End");
      await opener.click();
      await expect(value).not.toHaveText(wide!);
      const stopped = await value.textContent();
      await page.keyboard.press("Escape");
      await aperture.press("Home");
      await opener.click();
      await expect(value).toHaveText(wide!);
      await translate(page);
      await page.keyboard.press("Escape");
      await aperture.press("End");
      await opener.click();
      await expect(value).toHaveText(stopped!);
      await translate(page);
      await page.keyboard.press("Escape");
      await aperture.press("Home");
      await opener.click();
      await expect(value).toHaveText(wide!);
    }
    await translate(page);
    await page.keyboard.press("Escape");
    await expect(dialog).toHaveCount(0);
    await opener.click();
    await expect(dialog).toBeVisible();
    await expect(dialog).toHaveText(initial!);
    await translate(page);
    await dialog.getByRole("button", { name: "Close", exact: true }).click();
    await expect(dialog).toHaveCount(0);
    await healthy(page);
  }
});

test("translated aspheric overlay preserves mode, exaggeration and zoom readouts", async ({ page }, testInfo) => {
  await page.goto("/lens/canon-ts-e-24mm-f35l-ii");
  if (testInfo.project.name === "compact") await page.getByRole("button", { name: /^LEGEND/ }).click();
  await page
    .getByRole("button", { name: /^Select lens element/ })
    .first()
    .press("Enter");
  await page.getByRole("button", { name: /Compare to sphere/ }).click();
  const dialog = page.getByRole("dialog", { name: "Aspheric surface comparison", exact: true });
  const peak = dialog.locator("span").filter({ hasText: /^peak / });
  const base = await peak.textContent();
  await dialog.getByRole("button", { name: "Best-fit sphere", exact: true }).click();
  await expect(peak).not.toHaveText(base!);
  const best = await peak.textContent();
  await dialog.getByRole("button", { name: "Base sphere (R)", exact: true }).click();
  await expect(peak).toHaveText(base!);
  await translate(page);
  await dialog.getByRole("button", { name: "Best-fit sphere", exact: true }).click();
  await expect(peak).toHaveText(best!);
  const exaggeration = dialog.getByRole("slider");
  const factor = exaggeration.locator("..").locator(":scope > span").last();
  await translate(page);
  await exaggeration.press("End");
  await expect(factor).toHaveText("1000×");
  await translate(page);
  await exaggeration.press("Home");
  await expect(factor).toHaveText("1×");
  await translate(page);
  await dialog.getByRole("button", { name: "zoom in", exact: true }).click();
  await expect(dialog.getByText("1.1×", { exact: true })).toBeVisible();
  await translate(page);
  await dialog.getByRole("button", { name: "reset zoom", exact: true }).click();
  await expect(dialog.getByText("1.0×", { exact: true })).toBeVisible();
  await translate(page);
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await healthy(page);
});

test("translated group movement modes show current labels and travel", async ({ page }) => {
  await page.goto("/lens/nikon-afs-24-70mm-f28g");
  await page.getByRole("button", { name: "Open focus group motion chart", exact: true }).click();
  const dialog = page.getByRole("dialog", { name: "Group movement detail", exact: true });
  const current = dialog.getByText("CURRENT", { exact: true }).locator("xpath=ancestor::div[1]");
  const travel = dialog.getByText("MAX TRAVEL", { exact: true }).locator("xpath=ancestor::div[1]");
  const expected: string[] = [];
  for (const mode of ["Zoom", "Combined", "Focus"]) {
    await dialog.getByRole("radio", { name: mode, exact: true }).check();
    await expect(current).toHaveText(`CURRENT${mode}`);
    expected.push((await travel.textContent())!);
  }
  expect(new Set(expected).size).toBeGreaterThan(1);
  for (const [index, mode] of ["Zoom", "Combined", "Focus"].entries()) {
    await translate(page);
    await dialog.getByRole("radio", { name: mode, exact: true }).check();
    await expect(current).toHaveText(`CURRENT${mode}`);
    await expect(travel).toHaveText(expected[index]);
  }
  await translate(page);
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await page.getByRole("button", { name: "Open zoom group motion chart", exact: true }).click();
  await expect(current).toHaveText("CURRENTZoom");
  await healthy(page);
});

test("translated mount profiles preserve both views and refresh the feature legend", async ({ page }) => {
  await page.goto("/mounts/nikon-f");
  const panel = page.getByRole("region", { name: "Nikon F mount interface", exact: true });
  const profile = panel.getByRole("combobox", { name: "Profile", exact: true });
  const images = panel.getByRole("img");
  await expect(images).toHaveCount(2);
  const original = await profile.inputValue();
  const before = await images.allTextContents();
  const beforePanel = await panel.textContent();
  await profile.selectOption("nikon-f/non-ai");
  const after = await images.allTextContents();
  const afterPanel = await panel.textContent();
  expect(after).not.toEqual(before);
  await profile.selectOption(original);
  await translate(page);
  await profile.selectOption("nikon-f/non-ai");
  await expect(images).toHaveText(after);
  await expect(panel).toHaveText(afterPanel!);
  await expect(panel.getByText("Camera-side front", { exact: true })).toBeVisible();
  await expect(panel.getByText("Lens-side rear", { exact: true })).toBeVisible();
  await translate(page);
  await profile.selectOption(original);
  await expect(images).toHaveText(before);
  await expect(panel).toHaveText(beforePanel!);
  await healthy(page);
});

test("translated relationship pickers and details follow the current selection", async ({ page }) => {
  await page.goto("/relationships");
  const picker = page.getByRole("searchbox", { name: "Search inventors and assignees", exact: true });
  await translate(page);
  await picker.fill("Wakamiya");
  await page.getByRole("button", { name: /Koichi Wakamiya.*author/i }).click();
  await expect(page).toHaveURL(/focus=author/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Koichi Wakamiya");
  await translate(page);
  await picker.fill("Nikon Corporation");
  await page.getByRole("list", { name: "Inventor and assignee suggestions" }).getByRole("button").first().click();
  await expect(page).toHaveURL(/focus=assignee/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Nikon Corporation");
  await expect(page.getByRole("heading", { level: 1 })).not.toContainText("Koichi Wakamiya");
  await healthy(page);
  await page.goto("/relationships/universal");
  const search = page.getByRole("combobox", { name: "Search the map", exact: true });
  const card = page.locator("article").filter({ has: page.getByRole("button", { name: "Close entity details" }) });
  for (const name of ["Koichi Wakamiya", "Nikon Corporation"]) {
    await translate(page);
    await search.fill(name);
    await expect(page.getByRole("option").first()).toContainText(name);
    await search.press("Enter");
    await expect(card.getByRole("heading", { level: 3 })).toHaveText(name);
    await expect(search).toHaveValue("");
    await healthy(page);
  }
  const related = card.getByRole("region", { name: "Related patents" }).getByRole("button").first();
  const patent = await related.textContent();
  await translate(page);
  await related.click();
  const patentCard = page
    .locator("article")
    .filter({ has: page.getByRole("button", { name: "Close patent details" }) });
  await expect(patentCard.getByRole("heading", { level: 3 })).toContainText(patent!);
  await translate(page);
  await patentCard.getByRole("button", { name: "Close patent details", exact: true }).click();
  await expect(patentCard).toHaveCount(0);
  await healthy(page);
});
