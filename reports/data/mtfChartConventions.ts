/**
 * How each maker computes the MTF charts it publishes.
 *
 * A published chart is only comparable to a simulated one computed the same way. A geometric chart ignores
 * diffraction, so it sits above a diffraction chart of the same design, most visibly at small apertures and high
 * frequencies; a measured chart also carries the tolerances of the lens on the bench. Few makers print their method,
 * so every row carries a `basis`, and the basis is part of the claim: quote a method together with its basis or not
 * at all. An inferred method rests on reading charts against the aberration-free diffraction limit and nothing else.
 *
 * Keys are the catalog's `LensData.maker` strings. Used by reports/mtfChartRegression.report.ts.
 */

/** `measured` charts come from lenses on a bench; `unknown` means no evidence either way. */
export type MtfChartMethod = "geometric" | "diffraction" | "measured" | "unknown";

/** `documented`: the maker or its staff state the method in print. `inferred`: read off the charts. */
export type MtfChartBasis = "documented" | "inferred" | "unknown";

export interface MtfChartConvention {
  method: MtfChartMethod;
  /** How the method is known. Part of the claim: an inferred method is not a documented one. */
  basis: MtfChartBasis;
  /** The statement or chart readings the row rests on, with where to find them. */
  citation: string;
}

/** Convention of a maker without a row. */
const UNEXAMINED_CONVENTION: MtfChartConvention = {
  method: "unknown",
  basis: "unknown",
  citation: "Maker's charts not examined.",
};

/**
 * Maker (catalog `LensData.maker` string) → chart convention. Diffraction limits in the citations are those of an
 * aberration-free circular pupil at the chart's stated f-number and the wavelength given.
 */
export const MTF_CHART_CONVENTIONS: Readonly<Record<string, MtfChartConvention>> = {
  Canon: {
    method: "diffraction",
    basis: "inferred",
    citation: "Charts published since 2018 sit at or below the diffraction limit at the stated aperture.",
  },
  // Carl Zeiss Jena is a separate organization that the cited paper does not cover, so it has no row.
  "Carl Zeiss Oberkochen": {
    method: "measured",
    basis: "documented",
    citation:
      'H. Nasse, "How to Read MTF Curves" (Carl Zeiss Camera Lens Division): published data come from measured ' +
      "lenses, in white light, at infinity.",
  },
  Fujifilm: {
    method: "unknown",
    basis: "unknown",
    citation: "No statement of method found, and none established from the charts.",
  },
  Nikon: {
    method: "geometric",
    basis: "inferred",
    citation:
      "Charts exceed the diffraction limit at the stated aperture: f/4 zooms read 0.99 / 0.95 at 10 / 30 lp/mm " +
      "against a limit of 0.972 / 0.915 at 555 nm. https://imaging.nikon.com/imaging/lineup/lens/mtf_chart/",
  },
  Sigma: {
    method: "diffraction",
    basis: "documented",
    citation:
      'Sigma publishes a "Diffraction MTF" and a "Geometrical MTF" chart for each lens; the anchors are digitized ' +
      "from the diffraction charts. https://www.sigma-global.com/en/lenses/a020_105_28/",
  },
  Sony: {
    method: "geometric",
    basis: "inferred",
    citation:
      "Every F8 panel reads 0.97-0.995 at 30 lp/mm against a diffraction limit of 0.86 at 450 nm (0.83 at 555 nm).",
  },
  Tamron: {
    method: "geometric",
    basis: "inferred",
    citation:
      "The 300 mm f/6.3 chart reads 0.944 at 30 lp/mm against a diffraction limit of 0.892 at 450 nm (0.867 at " +
      "555 nm).",
  },
};

/**
 * Chart convention of a maker.
 *
 * @param maker - catalog `LensData.maker` string; null or undefined for an unconfirmed maker
 * @returns the maker's convention with its basis, or an unknown convention when the maker has no row
 */
export function mtfChartConvention(maker: string | null | undefined): MtfChartConvention {
  return maker && Object.hasOwn(MTF_CHART_CONVENTIONS, maker) ? MTF_CHART_CONVENTIONS[maker] : UNEXAMINED_CONVENTION;
}
