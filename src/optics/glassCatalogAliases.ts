/**
 * Informal glass-name aliases resolved by glassCatalog.ts.
 */

/** Aliases that route to a canonical entry. Common informal names. */
export const ALIASES: ReadonlyMap<string, string> = new Map([
  ["BK7", "N-BK7"],
  ["BSC7", "S-BSL7"],
  ["FLUORITE", "CaF2"],
  ["CAF2", "CaF2"],
  // SF57 and N-SF57 are Schott names for the same high-dispersion glass family;
  // S-TIH53 is the Ohara equivalent sharing the same 6-digit code (847/238 ≈ 847/239).
  ["SF57", "S-TIH53"],
  ["N-SF57", "S-TIH53"],
  // CDGM H-ZF88A annotations in Laowa Probe data use the 847/238 dense-flint
  // class; CDGM's cataloged H-ZF88 is a different 946/179 glass.
  ["H-ZF88A", "S-TIH53"],
  // SK16 is the legacy Schott name for N-SK16 (same glass, modernized designation).
  ["SK16", "N-SK16"],
  // BACD5 is the Hoya trade name for N-SK16-equivalent glass (same nd/vd).
  ["BACD5", "N-SK16"],
  // L-TIM28 is the Ohara large-format designation for S-TIM28 (identical Sellmeier).
  ["L-TIM28", "S-TIM28"],
  // Low-softening / PGM Ohara variants that share the same optical constants in
  // the public catalog data used by the lens files.
  ["L-BAL42", "S-BAL42"],
  ["L-BSL7", "S-BSL7"],
  ["L-BAL35", "S-BAL35"],
  // SK10 and SK14 are legacy Schott names superseded by N-SK10 and N-SK14.
  ["SK5", "N-SK5"],
  ["SK10", "N-SK10"],
  ["SK14", "N-SK14"],
  // Legacy Schott names with modern N- prefixed equivalents.
  ["FK5", "N-FK5"],
  ["LAF21", "N-LAF21"],
  ["LA-F21", "N-LAF21"],
  ["SK2", "N-SK2"],
]);
