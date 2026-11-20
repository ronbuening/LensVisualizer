import { expect, test } from "@playwright/test";
import { readFileSync, writeFileSync } from "node:fs";
import { finiteOnlyFixture } from "../src/optics/finiteOnlyFixture.js";
import { MTF_PREFERENCES_KEY } from "../../src/utils/state/mtfPreferences.js";

/*
 * The Builder end to end for a finite-only draft: file import adopts the authored default, the state select replaces
 * focus and aperture, export returns the draft unchanged, unvalidated tabs explain themselves, reference-line MTF
 * converges from the finite object, and resetting the draft restores ordinary controls. Unit suites hold hydration,
 * snapping and each control's branches; this keeps only what needs the real page.
 */
test("finite-only Builder draft: import, states, export, analyses and reset", async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(String(error)));
  // Start with the settings asserted below, without first launching an unrelated diffraction job.
  await page.addInitScript((key) => {
    localStorage.setItem(key, JSON.stringify({ method: "geometric", spectrum: "reference", focus: "design" }));
  }, MTF_PREFERENCES_KEY);
  await page.goto("/lens-builder/");
  const draft = finiteOnlyFixture();
  const input = testInfo.outputPath("synthetic-finite.json");
  writeFileSync(input, JSON.stringify(draft));
  await page.getByLabel("Import JSON", { exact: true }).setInputFiles(input);

  const focus = page.getByLabel("Finite focus state");
  await expect(focus).toHaveValue("1");
  await expect(page.getByRole("button", { name: /FROM ∞|^∞$/ })).toHaveCount(0);
  await expect(page.getByLabel("APERTURE", { exact: true })).toHaveCount(0);
  await focus.selectOption("0");
  await expect(focus).toHaveValue("0");

  const download = page.waitForEvent("download");
  await page.getByLabel("Export JSON", { exact: true }).click();
  const output = testInfo.outputPath("export.json");
  await (await download).saveAs(output);
  expect(JSON.parse(readFileSync(output, "utf8"))).toEqual(draft);

  const aberrationsGroup = page.getByRole("button", { name: /ABERRATIONS & DISTORTIONS/ });
  if (await aberrationsGroup.count()) await aberrationsGroup.first().click();
  await page.getByRole("button", { name: "PUPILS", exact: true }).last().click();
  await expect(page.getByText("This analysis has not been validated for finite-only object conjugates.")).toBeVisible();
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
