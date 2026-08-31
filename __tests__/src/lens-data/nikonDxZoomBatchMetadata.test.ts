import { describe, expect, it } from "vitest";
import zoom1755 from "../../../src/lens-data/nikon/NikonAFSDXZoomNikkor1755mmf28GIFED.data.js";
import zoom1855 from "../../../src/lens-data/nikon/NikonAFSDXZoomNikkor1855mmf3556GEDII.data.js";
import zoom1870 from "../../../src/lens-data/nikon/NikonAFSDXZoomNikkor1870mmf3545GIFED.data.js";
import { resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";

const lenses = [zoom1755, zoom1855, zoom1870];

function resolvedGlassNames(lens: (typeof lenses)[number]): (string | null)[] {
  return lens.elements.map((element) => resolveCompatibleGlass(element.glass, element.nd, element.vd)?.name ?? null);
}

describe("Nikon AF-S DX zoom batch metadata", () => {
  it("keeps the reviewed production display names", () => {
    expect(lenses.map(({ name }) => name)).toEqual([
      "NIKON AF-S DX ZOOM-NIKKOR 17-55mm f/2.8G IF-ED",
      "NIKON AF-S DX ZOOM-NIKKOR 18-55mm f/3.5-5.6G ED II",
      "NIKON AF-S DX ZOOM-NIKKOR 18-70mm f/3.5-4.5G IF-ED",
    ]);
  });

  it("preserves the patent-figure SD refinements", () => {
    expect(Object.fromEntries(zoom1755.surfaces.map(({ label, sd }) => [label, sd]))).toMatchObject({
      "11A": 16,
      "12": 16,
    });
    expect(Object.fromEntries(zoom1855.surfaces.map(({ label, sd }) => [label, sd]))).toMatchObject({
      "4": 12.4,
      "5": 12.4,
    });
    expect(Object.fromEntries(zoom1870.surfaces.map(({ label, sd }) => [label, sd]))).toMatchObject({
      "6A": 11.5,
      "20": 10,
      "24": 11.8,
      "26": 12,
      "29": 12.2,
    });
  });

  it("uses every defensible catalog-compatible dispersion proxy", () => {
    expect(resolvedGlassNames(zoom1755)).toEqual([
      "M-NBF1",
      "J-PKH1",
      "SF6",
      "S-LAL12",
      "S-TIH53",
      "S-PHM52",
      null,
      "S-TIH53",
      "S-LAH65V",
      "S-LAH65V",
      "J-FKH1",
      "S-PHM52",
      "J-FKH1",
      "S-TIH53",
    ]);
    expect(resolvedGlassNames(zoom1855)).toEqual([
      "J-LASF016",
      null,
      "J-SFH2",
      "H-FK61",
      "N-BK7",
      "J-LASF016",
      "S-LAH60",
      "N-BK7",
    ]);
    expect(resolvedGlassNames(zoom1870)).toEqual([
      "J-SF03",
      "S-BSM81",
      "LAC8",
      null,
      "H-ZLaF50D",
      "H-ZLaF50D",
      "J-LAFH3",
      "H-ZLaF50D",
      "S-LAH63Q",
      "J-FKH1",
      "N-FK5",
      "J-SF03",
      "S-LAH55",
      "J-FKH1",
      "J-FKH1",
      "S-TIH6",
    ]);
  });

  it("keeps production ED correlations explicitly inferred", () => {
    expect(
      zoom1855.elements.filter((element) => "apd" in element && element.apd === "inferred").map(({ name }) => name),
    ).toEqual(["L2a"]);
    expect(
      zoom1870.elements.filter((element) => "apd" in element && element.apd === "inferred").map(({ name }) => name),
    ).toEqual(["L32", "L51", "L52"]);
  });
});
