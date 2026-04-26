export const MAKER_PREFIXES = [
  { prefix: "CANON", display: "Canon", slug: "canon" },
  /* "CARL ZEISS JENA" must come before "CARL ZEISS" — startsWith matching is
     order-sensitive, and a Jena lens must not be caught by the generic prefix. */
  { prefix: "CARL ZEISS JENA", display: "Carl Zeiss Jena", slug: "carl-zeiss-jena" },
  { prefix: "CARL ZEISS", display: "Carl Zeiss Oberkochen", slug: "carl-zeiss-oberkochen" },
  { prefix: "FUJIFILM", display: "Fujifilm", slug: "fujifilm" },
  { prefix: "FUJINON", display: "Fujifilm", slug: "fujifilm" },
  { prefix: "KONICA", display: "Konica", slug: "konica" },
  { prefix: "LEICA", display: "Leica", slug: "leica" },
  { prefix: "MINOLTA", display: "Minolta", slug: "minolta" },
  { prefix: "VOIGTLÄNDER", display: "Voigtländer", slug: "voigtlander" },
  { prefix: "NIKON", display: "Nikon", slug: "nikon" },
  { prefix: "OLYMPUS", display: "Olympus", slug: "olympus" },
  { prefix: "PENTAX", display: "Pentax", slug: "pentax" },
  { prefix: "RICOH", display: "Ricoh", slug: "ricoh" },
  { prefix: "SCHNEIDER", display: "Schneider Kreuznach", slug: "schneider-kreuznach" },
  { prefix: "SIGMA", display: "Sigma", slug: "sigma" },
  { prefix: "SONY", display: "Sony", slug: "sony" },
  { prefix: "VIVITAR", display: "Vivitar", slug: "vivitar" },
];
