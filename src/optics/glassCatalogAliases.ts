/**
 * Informal and historical glass-name aliases resolved by glassCatalog.ts.
 */

export type GlassAliasKind = "informal" | "legacy-name" | "vendor-equivalent" | "catalog-variant" | "class-surrogate";

export interface GlassAliasRecord {
  readonly alias: string;
  readonly target: string;
  readonly kind: GlassAliasKind;
  readonly note: string;
}

export const ALIAS_RECORDS: readonly GlassAliasRecord[] = [
  { alias: "BK7", target: "N-BK7", kind: "informal", note: "Common shorthand for the Schott N-BK7 catalog row." },
  {
    alias: "BSC7",
    target: "S-BSL7",
    kind: "vendor-equivalent",
    note: "Hoya crown shorthand used as an S-BSL7-class match.",
  },
  { alias: "FLUORITE", target: "CaF2", kind: "informal", note: "Material name for the cataloged CaF2 crystal entry." },
  { alias: "CAF2", target: "CaF2", kind: "informal", note: "Uppercase token form of the CaF2 crystal entry." },
  {
    alias: "FUSED-SILICA",
    target: "SiO2",
    kind: "informal",
    note: "Material name for the cataloged fused-silica SiO2 entry.",
  },
  {
    alias: "SILICA",
    target: "SiO2",
    kind: "informal",
    note: "Common shorthand for fused silica / silica glass.",
  },
  {
    alias: "QUARTZ",
    target: "SiO2",
    kind: "informal",
    note: "Common UV-lens material shorthand routed to fused-silica optical constants.",
  },
  {
    alias: "SF57",
    target: "S-TIH53",
    kind: "vendor-equivalent",
    note: "Schott high-dispersion family name sharing the 847/238 code class with S-TIH53.",
  },
  {
    alias: "N-SF57",
    target: "S-TIH53",
    kind: "vendor-equivalent",
    note: "Modern Schott high-dispersion family name sharing the 847/238 code class with S-TIH53.",
  },
  {
    alias: "H-ZF88A",
    target: "S-TIH53",
    kind: "class-surrogate",
    note: "Laowa annotations use the 847/238 dense-flint class, not CDGM's distinct H-ZF88 row.",
  },
  { alias: "SK16", target: "N-SK16", kind: "legacy-name", note: "Legacy Schott name superseded by N-SK16." },
  {
    alias: "BACD5",
    target: "N-SK16",
    kind: "vendor-equivalent",
    note: "Hoya trade name for N-SK16-equivalent optical constants.",
  },
  {
    alias: "L-TIM28",
    target: "S-TIM28",
    kind: "catalog-variant",
    note: "Ohara large-format designation with the same published optical constants as S-TIM28.",
  },
  {
    alias: "L-BAL42",
    target: "S-BAL42",
    kind: "catalog-variant",
    note: "Ohara low-softening / PGM variant sharing the S-BAL42 optical constants.",
  },
  {
    alias: "L-BSL7",
    target: "S-BSL7",
    kind: "catalog-variant",
    note: "Ohara low-softening / PGM variant sharing the S-BSL7 optical constants.",
  },
  {
    alias: "L-BAL35",
    target: "S-BAL35",
    kind: "catalog-variant",
    note: "Ohara low-softening / PGM variant sharing the S-BAL35 optical constants.",
  },
  {
    alias: "L-LAH53",
    target: "S-LAH53",
    kind: "catalog-variant",
    note: "Ohara low-softening / PGM variant sharing the S-LAH53 optical constants.",
  },
  {
    alias: "L-LAM60",
    target: "S-LAM60",
    kind: "catalog-variant",
    note: "Ohara low-softening / PGM variant sharing the S-LAM60 optical constants.",
  },
  {
    alias: "L-LAL13",
    target: "S-LAL13",
    kind: "catalog-variant",
    note: "Ohara low-softening / PGM variant sharing the S-LAL13 optical constants.",
  },
  {
    alias: "L-LAL14",
    target: "S-LAL14",
    kind: "catalog-variant",
    note: "Ohara low-softening / PGM variant sharing the S-LAL14 optical constants.",
  },
  {
    alias: "L-PHM52",
    target: "S-PHM52",
    kind: "catalog-variant",
    note: "Ohara low-softening / PGM variant sharing the S-PHM52 optical constants.",
  },
  { alias: "SK5", target: "N-SK5", kind: "legacy-name", note: "Legacy Schott name superseded by N-SK5." },
  { alias: "SK10", target: "N-SK10", kind: "legacy-name", note: "Legacy Schott name superseded by N-SK10." },
  { alias: "SK14", target: "N-SK14", kind: "legacy-name", note: "Legacy Schott name superseded by N-SK14." },
  { alias: "N-F2", target: "F2", kind: "legacy-name", note: "Route N-F2 annotations to the cataloged F2 row." },
  { alias: "N-SF1", target: "SF1", kind: "legacy-name", note: "Route N-SF1 annotations to the cataloged SF1 row." },
  { alias: "N-SF6", target: "SF6", kind: "legacy-name", note: "Route N-SF6 annotations to the cataloged SF6 row." },
  { alias: "SF8", target: "N-SF8", kind: "legacy-name", note: "Legacy Schott name superseded by N-SF8." },
  { alias: "FK5", target: "N-FK5", kind: "legacy-name", note: "Legacy Schott name superseded by N-FK5." },
  { alias: "LAF21", target: "N-LAF21", kind: "legacy-name", note: "Legacy Schott name superseded by N-LAF21." },
  { alias: "LA-F21", target: "N-LAF21", kind: "legacy-name", note: "Alternate legacy token for N-LAF21." },
  { alias: "SK2", target: "N-SK2", kind: "legacy-name", note: "Legacy Schott name superseded by N-SK2." },
  {
    alias: "TAFD35L",
    target: "TAFD35",
    kind: "catalog-variant",
    note: "Hoya PGM/pressed-glass row sharing TAFD35 911/353 optical constants.",
  },
  {
    alias: "BSC3",
    target: "E-C3",
    kind: "vendor-equivalent",
    note: "Historical Hoya crown annotations use the 518/590 E-C3 row; incompatible barium rows stay unmatched.",
  },
  {
    alias: "TAF1",
    target: "S-LAH66",
    kind: "vendor-equivalent",
    note: "Hoya TAF1 annotations share the 773/496 optical-constant class with S-LAH66 when the stored d-line index agrees.",
  },
  {
    alias: "PCD51",
    target: "M-PCD51",
    kind: "vendor-equivalent",
    note: "Hoya PCD51-family annotations route to the coefficient-backed M-PCD51 row; mismatch checks reject incompatible rows.",
  },
  {
    alias: "MP-PCD51-70",
    target: "M-PCD51",
    kind: "catalog-variant",
    note: "Hoya molded preform notation for the PCD51 family, using the coefficient-backed M-PCD51 row.",
  },
  {
    alias: "M-NBFD130",
    target: "NBFD13",
    kind: "vendor-equivalent",
    note: "Hoya cross-reference places M-NBFD130 in the 806/407 NBFD13 optical-constant family.",
  },
  {
    alias: "MP-NBFD130",
    target: "NBFD13",
    kind: "catalog-variant",
    note: "Hoya molded preform notation for the 806/407 NBFD13 family.",
  },
];

/** Aliases that route to a canonical entry. Common informal names. */
export const ALIASES: ReadonlyMap<string, string> = new Map(
  ALIAS_RECORDS.map(({ alias, target }) => [alias.toUpperCase(), target]),
);
