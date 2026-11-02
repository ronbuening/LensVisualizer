import { describe, expect, it } from "vitest";
import routeManifest from "../src/routes/routeManifest.js";
import { TRANSLATION_ROUTES } from "./translationCoverage.js";

describe("translation coverage inventory", () => {
  it("has a browser sample for every route", () => {
    expect(TRANSLATION_ROUTES.map((route) => route.pattern).sort()).toEqual(
      routeManifest.map((route) => route.path).sort(),
    );
  });
});
