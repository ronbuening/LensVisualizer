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
 *   2026-03-26  Added Canon maker entry.
 *   2026-03-27  Added Fujifilm maker entry.
 *   2026-04-07  Added Vivitar maker entry.
 */

export interface MakerDetails {
  founded: number;
  headquarters: string;
  summary: string;
  history: string;
  notableDesigns?: string;
}

export const MAKER_DETAILS: Record<string, MakerDetails> = {
  fujifilm: {
    founded: 1934,
    headquarters: "Tokyo, Japan",
    summary:
      "Japanese imaging company whose FUJINON lens division produces the X-mount mirrorless system and professional cinema and broadcast optics, known for applying advanced optical glass and aspherical technology to compact, high-performance designs.",
    history:
      "Fuji Photo Film Co., Ltd. was founded in 1934 in Ashigara, Kanagawa, with the goal of producing photographic film domestically in Japan. The company expanded rapidly into photographic paper, motion picture film, and industrial imaging. Fujifilm's optical research division — which would become the FUJINON brand — originated from the need to produce precision lenses for aerial reconnaissance cameras during World War II and continued postwar as a supplier of broadcast, cinema, and industrial optics.\n\nFujifilm entered the consumer camera market with the Fujica brand in the 1960s, but the company's most consequential photographic move came in 2012 with the launch of the X-Pro1 and the X-mount mirrorless system. Rather than competing directly in the full-frame market, Fujifilm committed fully to APS-C format and built an extensive native lens ecosystem — the XF series — optimized specifically for the crop-sensor format. This focus allowed Fujifilm's optical engineers to design lenses whose image circles, element sizes, and aberration corrections were tuned to the smaller sensor rather than adapted from full-frame designs.\n\nThe XF lens lineup spans ultra-wide to super-telephoto focal lengths, with particular strength in fast primes (XF 35mm f/1.4, XF 56mm f/1.2, XF 50mm f/1.0) and macro optics (XF 80mm f/2.8 Macro). Fujifilm's optical construction features advanced glass types — including Super ED elements equivalent to calcium fluoride in anomalous partial dispersion performance — combined with floating focus systems, internal linear motor autofocus, and sealed weather-resistant construction.\n\nBeyond stills, FUJINON cinema zooms (the MK and Premista series) and broadcast lenses are used in major film and television productions worldwide. Fujifilm also produces optical components for medical imaging, surveillance, and semiconductor manufacturing — a diversification that has allowed the company to remain profitable even as the consumer film and camera markets contracted.",
    notableDesigns:
      "XF 35mm f/1.4 R, XF 56mm f/1.2 R APD, XF 80mm f/2.8 R LM OIS WR Macro, XF 50mm f/1.0 R WR, XF 8-16mm f/2.8 R LM WR",
  },
  canon: {
    founded: 1937,
    headquarters: "Tokyo, Japan",
    summary:
      "Japan's largest camera and lens manufacturer, whose EF and RF mount systems redefined autofocus and optical engineering across four decades of professional and consumer photography.",
    history:
      "Canon's origins trace to 1934, when Goro Yoshida and Saburo Uchida built the Kwanon — Japan's first 35mm focal-plane shutter camera, named after the Buddhist goddess of mercy — as a proof of concept. Precision Optical Instruments Co., Ltd. was formally founded in 1937 to commercialise the design, and the company renamed itself Canon Camera Co., Ltd. in 1947.\n\nThrough the 1950s and 1960s, Canon produced competitive rangefinder and SLR cameras, but the landmark product of the era was the AE-1 (1976). Its CPU-controlled exposure automation, made possible by Canon's early investment in microelectronics, democratised SLR photography and became the best-selling SLR of the decade. The Canon F-1 (1971) and New F-1 (1981) served professional photojournalists and studio photographers during the same period.\n\nThe EOS system (1987) was a deliberate architectural break: Canon abandoned the FD mount and introduced the EF mount with a fully electronic lens-body interface and a wide 54 mm throat. Every EF lens drives its own autofocus motor internally, removing the mechanical body-to-lens coupling that limited earlier AF designs. The EOS 1 series and a succession of fast L-series telephotos made Canon the dominant force in professional sport and press photography through the 1990s and 2000s. Canon also introduced in-lens Image Stabilisation in 1995 and Diffractive Optics (DO) elements in 2000.\n\nThe RF mount system, launched with the EOS R (2018), shortened the flange distance to 20 mm and widened the mount throat to 54 mm, enabling shorter back-focus lens designs. The RF 50mm f/1.2L USM and RF 85mm f/1.2L USM demonstrated what this freedom enabled at wide apertures, while the RF 100mm f/2.8L Macro IS USM introduced an SA (spherical aberration) control ring — an adjustable element group that allows photographers to dial in or out foreground and background bokeh character at any focus distance.",
    notableDesigns:
      "EF 50mm f/1.0L USM, EF 85mm f/1.2L II USM, EF 200mm f/2L IS USM, RF 50mm f/1.2L USM, RF 100mm f/2.8L Macro IS USM",
  },
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
    notableDesigns:
      "Noct-Nikkor 58mm f/1.2, Nikkor 13mm f/5.6, AI Nikkor 105mm f/2.5, AF-S 14-24mm f/2.8G, Nikkor Z 58mm f/0.95 S Noct",
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
  vivitar: {
    founded: 1938,
    headquarters: "Santa Monica, California, USA (marketing brand; lenses manufactured in Japan)",
    summary:
      "American photographic brand best known for the Series 1 line of high-performance lenses developed in the 1970s and early 1980s, designed by prominent optical engineers including Ellis Betensky and produced by Japanese manufacturers under contract.",
    history:
      "Vivitar Corporation traces its origins to Ponder & Best, Inc., a photographic equipment importer founded in 1938 in Los Angeles. The company sold imported Japanese photographic accessories under the Vivitar brand starting in 1959, eventually adopting Vivitar Corporation as its corporate name in 1971.\n\nVivitar's commercial model was unusual: the company designed and marketed lenses but contracted their manufacture to Japanese optical firms — primarily Komine, Tokina, Cosina, Kiron, and Mamiya, among others. The brand became known primarily for affordable third-party lenses for the SLR market, but its premium tier, the Series 1, earned a distinct reputation for optical quality that rivaled — and in some cases surpassed — first-party alternatives.\n\nThe Series 1 designation was introduced in 1973 to mark lenses whose designs were developed or supervised by independent optical engineers rather than being straightforward copies of existing formulas. The most prominent contributor was Ellis I. Betensky, an American optical designer and patent holder who collaborated with Ponder & Best on several Series 1 designs. Betensky's patents — including US 3,942,876 covering the 200mm f/3.0 VMC — introduced design innovations such as fixed rear corrector elements that remained stationary during focusing, reducing focus breathing and improving off-axis performance at close distances. Other Series 1 contributors included David Betensky and William Peck.\n\nProduction quality varied by manufacturer: Series 1 lenses made by Komine are generally regarded as the highest-quality examples, with Kiron-made units also well-regarded. The VMC (Variable Multi-Coating) designation, introduced in the mid-1970s, indicated multi-layer anti-reflection coatings applied to all air-glass surfaces — a feature that markedly improved contrast and flare resistance relative to single-coated alternatives.\n\nVivitar was acquired by Hanson Photo in 1992. The brand has since changed hands multiple times and today is largely a consumer electronics label with no connection to the optical engineering tradition of the Series 1 era.",
    notableDesigns: "Series 1 200mm f/3.0 VMC, Series 1 90mm f/2.5 Macro, Series 1 28-90mm f/2.8-3.5",
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
