import { describe, expect, it } from "vitest";
import routeManifest from "../src/routes/routeManifest.js";
import { ANALYSIS_TABS } from "../src/components/layout/lensDiagram/analysisTabs.js";
import { TRANSLATION_ROUTES, TRANSLATION_ANALYSIS_TABS } from "./translationCoverage.js";

describe("translation coverage inventory", () => {
  it("requires an explicit browser coverage decision for every route", () => {
    expect(TRANSLATION_ROUTES.map((route) => route.pattern).sort()).toEqual(
      routeManifest.map((route) => route.path).sort(),
    );
  });

  it("requires every analysis tab in the interaction sweep", () => {
    expect(TRANSLATION_ANALYSIS_TABS).toEqual(ANALYSIS_TABS.map((tab) => tab.id));
  });
});
