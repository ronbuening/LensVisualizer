import { expect, test } from "@playwright/test";
import { readFileSync, writeFileSync } from "node:fs";
import { finiteFixture } from "../src/optics/finiteOnly/fixture.js";
import { MTF_PREFERENCES_KEY } from "../../src/utils/state/mtfPreferences.js";

// A synthetic finite singlet guards the Builder/viewer contract without adding a catalog lens.
test("finite-only Builder states, round trip, finite MTF and draft reset", async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(String(error)));
  // Start with the exact settings asserted below, without launching an unrelated default diffraction job first.
  await page.addInitScript((key) => {
    localStorage.setItem(key, JSON.stringify({ method: "geometric", spectrum: "reference", focus: "design" }));
  }, MTF_PREFERENCES_KEY);
  await page.goto("/lens-builder/?focus=0.2&aperture=1");
  const draft = finiteFixture();
  const input = testInfo.outputPath("synthetic-finite.json");
  writeFileSync(input, JSON.stringify(draft));
  await page.getByLabel("Import JSON", { exact: true }).setInputFiles(input);
  const focus = page.getByLabel("Finite focus state");
  await expect(focus).toHaveValue("1");
  await expect(page.getByRole("button", { name: "FROM ∞", exact: true })).toHaveCount(0);
  await expect(page.getByRole("button", { name: "∞", exact: true })).toHaveCount(0);
  await expect(page.getByLabel("APERTURE", { exact: true })).toHaveCount(0);
  await focus.selectOption("0");
  await expect(focus).toHaveValue("0");
  const download = page.waitForEvent("download");
  await page.getByLabel("Export JSON", { exact: true }).click();
  const output = testInfo.outputPath("export.json");
  await (await download).saveAs(output);
  expect(JSON.parse(readFileSync(output, "utf8"))).toEqual(draft);

  // Builder autosaves the prescription; view controls hydrate from the URL independently.
  for (const [query, expected] of [
    ["focus=0", "0"],
    ["focus=0.8", "1"],
    ["focus=invalid", "1"],
  ]) {
    await page.goto(`/lens-builder/?${query}`);
    await expect(focus).toHaveValue(expected);
  }
  await focus.selectOption("0");
  if (await page.getByRole("button", { name: /ABERRATIONS & DISTORTIONS/ }).count())
    await page
      .getByRole("button", { name: /ABERRATIONS & DISTORTIONS/ })
      .first()
      .click();
  await page.getByRole("button", { name: "PUPILS", exact: true }).last().click();
  await expect(
    page.getByText("Unavailable: this analysis has not been validated for finite-only object conjugates."),
  ).toBeVisible();
  await page.getByRole("button", { name: "MTF", exact: true }).last().click();
  await page.getByLabel("MTF method", { exact: true }).selectOption("geometric");
  await page.getByLabel("MTF image plane", { exact: true }).selectOption("design");
  await expect(page.getByLabel("MTF spectrum", { exact: true }).locator("option")).toHaveCount(1);
  await expect(
    page.locator("summary").filter({ hasText: "11 converged · 0 unconverged · 0 unavailable" }),
  ).toBeVisible();
  await expect(
    page.getByText(/Diagram Rendering Error|Something went wrong|Showing the last valid version/),
  ).toHaveCount(0);

  await page.getByRole("button", { name: "Reset draft", exact: true }).click();
  await expect(focus).toHaveCount(0);
  await expect(page.getByLabel("FOCUS", { exact: true })).toBeVisible();
  expect(errors).toEqual([]);
});

test("ordinary prime keeps continuous focus and infinity controls", async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(String(error)));
  await page.goto("/lens/nikkor-85f14g?focus=0.5");
  await expect(page.getByLabel("Finite focus state")).toHaveCount(0);
  await expect(page.getByRole("slider", { name: "FOCUS", exact: true })).toHaveValue("0.5");
  await expect(
    page.getByRole("button", { name: testInfo.project.name === "compact" ? "∞" : /FROM ∞/, exact: true }),
  ).toBeVisible();
  expect(errors).toEqual([]);
});
