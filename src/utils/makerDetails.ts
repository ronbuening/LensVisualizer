/**
 * Maker history and details — structured metadata for index pages.
 *
 * Keyed by maker slug (matching MAKER_PREFIXES in lensMetadata.ts).
 *
 * Revision history:
 *   2026-03-25  Initial version (commit 6278635)
 *   2026-03-25  Audit corrections: Voigtländer HQ, Ricoh founding narrative,
 *               Carl Zeiss Ernemann/reunification, Nikon rangefinder date,
 *               Ricoh GR IV update.
 */

export interface MakerDetails {
  founded: number;
  headquarters: string;
  summary: string;
  history: string;
  notableDesigns?: string;
}

export const MAKER_DETAILS: Record<string, MakerDetails> = {
  "carl-zeiss": {
    founded: 1846,
    headquarters: "Oberkochen, Germany",
    summary:
      "German optical pioneer whose lens designs — Tessar, Planar, Sonnar — became foundational archetypes in photographic optics, blending scientific rigor with manufacturing precision.",
    history:
      "Carl Zeiss founded his workshop in Jena in 1846, initially producing simple microscopes. The partnership with physicist Ernst Abbe in the 1860s transformed the company into a science-driven enterprise, applying wave optics theory to lens computation rather than relying on trial and error. Abbe's diffraction limit work and Otto Schott's development of new optical glasses at the nearby Schott glassworks gave Zeiss an unmatched foundation in materials and theory.\n\nPaul Rudolph's Planar (1896) and Tessar (1902) designs became two of the most influential lens formulas in history. The Tessar's four-element simplicity delivered sharp, well-corrected images that defined an era of photography. Ludwig Bertele, working at Ernemann and then at Zeiss Ikon after the 1926 merger of four camera makers under Zeiss capital, designed the Sonnar (patented 1929) — a fast telephoto design that eliminated air-glass surfaces to reduce flare, a critical advantage before anti-reflection coatings existed.\n\nAfter World War II, Zeiss split into East (Jena) and West (Oberkochen) operations. Both continued lens development independently until reunification in the early 1990s. The Oberkochen facility partnered with Japanese manufacturers for SLR lens production while maintaining in-house design. Today, Zeiss continues to produce premium photographic, cinema, and industrial optics.",
    notableDesigns: "Tessar, Planar, Sonnar, Biogon, Distagon",
  },
  nikon: {
    founded: 1917,
    headquarters: "Tokyo, Japan",
    summary:
      "Japan's preeminent optical manufacturer, known for the Nikkor lens line spanning seven decades of innovation from rangefinder-era designs through modern computational optics.",
    history:
      "Nippon Kogaku K.K. (later renamed Nikon Corporation) was established in 1917 through the merger of three leading Japanese optical manufacturers, with the goal of producing military-grade optics domestically. German optical engineers were brought in as consultants, and the company's early output focused on binoculars, periscopes, and aerial lenses. The name \"Nikkor\" first appeared on aerial photography lenses in the 1930s.\n\nPost-war, Nikon pivoted to civilian cameras and lenses. The Nikon rangefinder cameras, beginning with the Nikon I (1948), and their Nikkor lenses earned international recognition when photojournalists covering the Korean War praised their optical quality. The Nikon F SLR system (1959) established the F-mount — a lens interface that would remain mechanically compatible for over 60 years across manual focus, autofocus, and digital generations.\n\nNikon's optical design philosophy evolved from adapted double-Gauss and Sonnar derivatives in the manual-focus era to increasingly complex aspherical and ED glass designs in the AF and digital periods. The transition to the Z-mount mirrorless system (2018) brought a shorter flange distance and wider throat, enabling new design freedoms visible in lenses like the Nikkor Z 50mm f/1.2 S and Z 135mm f/1.8 S Plena.",
    notableDesigns: "Noct-Nikkor 58mm f/1.2, Nikkor 13mm f/5.6, AI Nikkor 105mm f/2.5, AF-S 14-24mm f/2.8G, Nikkor Z 58mm f/0.95 S Noct",
  },
  ricoh: {
    founded: 1936,
    headquarters: "Tokyo, Japan",
    summary:
      "Creator of the GR series — compact cameras with premium wide-angle lenses designed for street photography, known for exceptional sharpness and minimal distortion in a pocketable form.",
    history:
      "Ricoh's origins trace to 1936, when Riken Kankoshi Co., Ltd. was spun off from the Institute of Physical and Chemical Research to manufacture sensitized paper. Camera-related work began the following year, and after renaming to Riken Optical Co., Ltd. in 1938 the company started developing its own cameras and lenses. Through the mid-20th century, Ricoh produced a range of affordable consumer cameras — most notably the Ricohflex III TLR (1950), which helped spark Japan's postwar camera boom — but the brand's photographic-optical identity transformed with the GR series.\n\nThe original Ricoh GR1 (1996) paired a high-performance 28mm f/2.8 lens with a compact titanium body, targeting serious photographers who wanted optical quality without bulk. The GR lens formula — a wide-angle design optimized for edge-to-edge sharpness, low distortion, and close-focus performance — became the defining characteristic of the line. Each GR generation refined this formula while maintaining the 28mm focal length and compact philosophy.\n\nRicoh acquired Pentax from Hoya in 2011, consolidating its imaging division. The digital GR series (GR, GR II, GR III, GR IIIx, GR IV) continued the tradition with APS-C sensors behind purpose-designed GR lenses. The GR IV (2025) carries a redesigned 18.3mm f/2.8 (28mm equivalent) lens and a new 25.74-megapixel sensor, delivering resolving power that rivals many interchangeable lenses.",
    notableDesigns: "GR 28mm f/2.8, GR III 18.3mm f/2.8, GR IIIx 26.1mm f/2.8, GR IV 18.3mm f/2.8",
  },
  voigtlander: {
    founded: 1756,
    headquarters: "Nakano, Japan (manufactured by Cosina)",
    summary:
      "The oldest name in optics, now producing high-performance manual-focus lenses under Cosina that combine classic optical formulas with modern glass technology and extreme apertures.",
    history:
      "Voigtländer's origins trace to 1756 in Vienna, making it the oldest optical company name in continuous existence. Johann Christoph Voigtländer began producing mathematical instruments, and his grandson Peter Wilhelm Friedrich von Voigtländer created the first mathematically computed photographic lens — the Petzval Portrait lens (1840), designed by Joseph Petzval, which was 16 times faster than the Daguerreotype's original optic.\n\nThroughout the 19th and 20th centuries, Voigtländer produced landmark designs including the Heliar (1900), a five-element lens noted for its smooth rendering and correction of spherical aberration, and the Color-Skopar and Ultron series. The company relocated from Vienna to Braunschweig, Germany in 1849 and changed hands several times — acquired by Schering AG in the 1920s, sold to the Carl Zeiss Foundation in 1956, merged into Zeiss Ikon in 1965, and eventually passing through Rollei and Plusfoto before the brand was licensed to Cosina.\n\nSince 1999, the Voigtländer brand has been manufactured by Cosina Co. Ltd. of Japan, which produces a line of manual-focus lenses for Leica M, Sony E, Nikon Z, and other mounts. Cosina's Voigtländer lenses are known for pushing aperture boundaries (the Nokton 50mm f/1.0) and for applying modern multi-coating and aspherical technology to refined versions of classic formulas like the Heliar and APO-Lanthar.",
    notableDesigns: "Heliar, Nokton, APO-Lanthar, Color-Skopar, Ultron",
  },
};

/** Look up maker details by slug; returns null if unknown. */
export function getMakerDetails(slug: string): MakerDetails | null {
  return MAKER_DETAILS[slug] ?? null;
}
