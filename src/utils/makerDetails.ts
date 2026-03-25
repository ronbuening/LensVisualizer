/**
 * Maker history and details — structured metadata for index pages.
 *
 * Keyed by maker slug (matching MAKER_PREFIXES in lensMetadata.ts).
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
      "Carl Zeiss founded his workshop in Jena in 1846, initially producing simple microscopes. The partnership with physicist Ernst Abbe in the 1860s transformed the company into a science-driven enterprise, applying wave optics theory to lens computation rather than relying on trial and error. Abbe's diffraction limit work and Otto Schott's development of new optical glasses at the nearby Schott glassworks gave Zeiss an unmatched foundation in materials and theory.\n\nPaul Rudolph's Planar (1896) and Tessar (1902) designs became two of the most influential lens formulas in history. The Tessar's four-element simplicity delivered sharp, well-corrected images that defined an era of photography. Ludwig Bertele, working at Zeiss subsidiary Ernemann and later at Zeiss Ikon, created the Sonnar (1929) — a fast telephoto design that eliminated air-glass surfaces to reduce flare, a critical advantage before anti-reflection coatings existed.\n\nAfter World War II, Zeiss split into East (Jena) and West (Oberkochen) operations. Both continued lens development independently until reunification in 1990. The Oberkochen facility partnered with Japanese manufacturers for SLR lens production while maintaining in-house design. Today, Zeiss continues to produce premium photographic, cinema, and industrial optics.",
    notableDesigns: "Tessar, Planar, Sonnar, Biogon, Distagon",
  },
  nikon: {
    founded: 1917,
    headquarters: "Tokyo, Japan",
    summary:
      "Japan's preeminent optical manufacturer, known for the Nikkor lens line spanning seven decades of innovation from rangefinder-era designs through modern computational optics.",
    history:
      "Nippon Kogaku K.K. (later renamed Nikon Corporation) was established in 1917 through the merger of three leading Japanese optical manufacturers, with the goal of producing military-grade optics domestically. German optical engineers were brought in as consultants, and the company's early output focused on binoculars, periscopes, and aerial lenses. The name \"Nikkor\" first appeared on aerial photography lenses in the 1930s.\n\nPost-war, Nikon pivoted to civilian cameras and lenses. The Nikon S rangefinder series (1948) and its Nikkor lenses earned international recognition when photojournalists covering the Korean War praised their optical quality. The Nikon F SLR system (1959) established the F-mount — a lens interface that would remain mechanically compatible for over 60 years across manual focus, autofocus, and digital generations.\n\nNikon's optical design philosophy evolved from adapted double-Gauss and Sonnar derivatives in the manual-focus era to increasingly complex aspherical and ED glass designs in the AF and digital periods. The transition to the Z-mount mirrorless system (2018) brought a shorter flange distance and wider throat, enabling new design freedoms visible in lenses like the Nikkor Z 50mm f/1.2 S and Z 135mm f/1.8 S Plena.",
    notableDesigns: "Nikkor-S Auto, Noct-Nikkor, AF-S G series, Nikkor Z S-line",
  },
  ricoh: {
    founded: 1936,
    headquarters: "Tokyo, Japan",
    summary:
      "Creator of the GR series — compact cameras with premium wide-angle lenses designed for street photography, known for exceptional sharpness and minimal distortion in a pocketable form.",
    history:
      "Ricoh entered the camera market in 1936 with the Ricoh Six, though the company (founded in 1936 as Riken Kankoshi) initially focused on sensitized paper and office equipment. Through the mid-20th century, Ricoh produced a range of affordable consumer cameras, but the brand's optical identity transformed with the GR series.\n\nThe original Ricoh GR1 (1996) paired a high-performance 28mm f/2.8 lens with a compact titanium body, targeting serious photographers who wanted optical quality without bulk. The GR lens formula — a wide-angle design optimized for edge-to-edge sharpness, low distortion, and close-focus performance — became the defining characteristic of the line. Each GR generation refined this formula while maintaining the 28mm focal length and compact philosophy.\n\nRicoh acquired Pentax from Hoya in 2011, consolidating its imaging division. The digital GR series (GR, GR II, GR III, GR IIIx, GR IV) continued the tradition with APS-C sensors behind purpose-designed GR lenses. The GR III's 18.3mm f/2.8 (28mm equivalent) uses a new optical formula with two aspherical elements, delivering resolving power that rivals many interchangeable lenses.",
    notableDesigns: "GR 28mm f/2.8, GR III 18.3mm f/2.8, GR IIIx 26.1mm f/2.8",
  },
  voigtlander: {
    founded: 1756,
    headquarters: "Furth, Germany",
    summary:
      "The oldest name in optics, now producing high-performance manual-focus lenses under Cosina that combine classic optical formulas with modern glass technology and extreme apertures.",
    history:
      "Voigtländer's origins trace to 1756 in Vienna, making it the oldest optical company in continuous existence. Johann Christoph Voigtländer began producing mathematical instruments, and his grandson Peter Wilhelm Friedrich von Voigtländer created the first mathematically computed photographic lens — the Petzval Portrait lens (1840), designed by Joseph Petzval, which was 16 times faster than the Daguerreotype's original optic.\n\nThroughout the 19th and 20th centuries, Voigtländer produced landmark designs including the Heliar (1900), a five-element lens noted for its smooth rendering and correction of spherical aberration, and the Color-Skopar and Ultron series. The company changed hands several times — merging with Schering AG, then passing through Zeiss Ikon and eventually to Rollei.\n\nSince 1999, the Voigtländer brand has been manufactured by Cosina Co. Ltd. of Japan, which produces a line of manual-focus lenses for Leica M, Sony E, Nikon Z, and other mounts. Cosina's Voigtländer lenses are known for pushing aperture boundaries (the Nokton 50mm f/1.0) and for applying modern multi-coating and aspherical technology to refined versions of classic formulas like the Heliar and APO-Lanthar.",
    notableDesigns: "Heliar, Nokton, APO-Lanthar, Color-Skopar, Ultron",
  },
};

/** Look up maker details by slug; returns null if unknown. */
export function getMakerDetails(slug: string): MakerDetails | null {
  return MAKER_DETAILS[slug] ?? null;
}
