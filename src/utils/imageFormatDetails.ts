/**
 * Image-format descriptions for the /formats index and detail pages.
 *
 * Keyed by canonical ImageFormatId values from lensTaxonomy.ts. Only formats
 * represented by the current catalog need entries; tests enforce that coverage.
 */

import type { ImageFormatId } from "./lensTaxonomy.js";

export interface ImageFormatDetails {
  summary: string;
  description: string;
  commonUses?: string;
  coverageNotes?: string;
}

export const IMAGE_FORMAT_DETAILS: Partial<Record<ImageFormatId, ImageFormatDetails>> = {
  "110": {
    commonUses: "Pocket film cameras and miniature interchangeable-lens systems",
    coverageNotes: "Small film frame with a roughly 21 mm diagonal",
    summary: "A compact cartridge-film format whose small frame enabled very small cameras and unusually tiny lenses.",
    description:
      "The 110 format was introduced for pocket cameras, using cartridge film to make loading simple and camera bodies extremely compact. Its small image area means lenses can be physically tiny while still covering the full frame.\n\nOptically, 110 designs operate in a very different scale from 35 mm systems. Focal lengths are short, image circles are small, and depth of field is naturally deep. In this catalog, 110-format lenses are useful for seeing how optical formulas shrink when the capture area becomes much smaller than full-frame.",
  },
  "four-thirds": {
    commonUses: "Olympus and Panasonic Four Thirds / Micro Four Thirds stills and video systems",
    coverageNotes: "17.3 x 13 mm sensor with a 21.64 mm diagonal",
    summary:
      "A digital-native sensor format smaller than APS-C, used by Four Thirds and Micro Four Thirds lens systems.",
    description:
      "Four Thirds was designed as a digital camera format rather than inherited from film. Its 4:3 aspect ratio and smaller image circle let lenses be more compact than equivalent 35 mm designs, especially in telephoto and standard zoom ranges.\n\nThe format also changes photographic tradeoffs. For the same field of view and f-number, depth of field is deeper than full-frame, and lens designers can use shorter focal lengths to achieve familiar angles of view. The catalog's Four Thirds entries show how compact digital-era lens systems can be when sensor size, mount geometry, and optical design are planned together.",
  },
  "aps-c": {
    commonUses: "Fujifilm X, Nikon DX, Canon crop-sensor, Sony E, Ricoh GR, and many compact digital systems",
    coverageNotes: "Roughly 24 x 16 mm class image area, varying slightly by maker",
    summary:
      "The most common crop-sensor still-photo format, balancing smaller bodies and lenses with strong image quality.",
    description:
      "APS-C sits between Four Thirds and full-frame in both image area and lens scale. It became the dominant consumer and enthusiast digital camera format because it offered a practical balance: sensors large enough for strong image quality, but small enough to keep cameras and lenses more compact than 35 mm full-frame systems.\n\nLens design for APS-C can take two paths. Some systems, such as Fujifilm X, are built around dedicated APS-C image circles; others adapt or share full-frame mount families. The catalog's APS-C pages make those choices visible by grouping dedicated mirrorless lenses, DSLR crop lenses, and fixed-lens compact-camera optics together.",
  },
  "135-full-frame": {
    commonUses: "35 mm film, full-frame DSLR, full-frame mirrorless, and rangefinder systems",
    coverageNotes: "36 x 24 mm image area with a 43.3 mm diagonal",
    summary: "The classic 35 mm still-photo frame, now the reference point for full-frame digital lens design.",
    description:
      "The 135 still-camera frame became the dominant small-format photographic standard in the twentieth century. Its 36 x 24 mm image area defined familiar focal-length categories: 28 mm wide angle, 50 mm normal, 85 mm portrait, 135 mm telephoto, and many more.\n\nFull-frame digital cameras inherited that geometry, making 135-format coverage the modern reference for many optical comparisons. The format is large enough to demand careful correction across a broad field, but small enough to support fast primes, compact rangefinder lenses, professional zooms, and highly specialized optics in one ecosystem.",
  },
  "44x33": {
    commonUses: "Fujifilm GFX, Hasselblad X, and related digital medium-format systems",
    coverageNotes: "43.8 x 32.9 mm sensor with a 54.78 mm diagonal",
    summary: "A modern digital medium-format size larger than full-frame but smaller than traditional 645 film.",
    description:
      "The 44 x 33 mm digital medium-format class is a practical compromise between full-frame portability and larger medium-format capture. It offers a substantially larger image area than 35 mm full-frame while fitting into mirrorless camera bodies and lenses that are more manageable than many traditional medium-format systems.\n\nLenses for this format must cover a wider field and satisfy very high-resolution sensors, so field uniformity, chromatic correction, and mechanical precision matter. In the catalog, 44 x 33 designs are useful for comparing how mirrorless lens layouts scale when the image circle grows beyond full-frame.",
  },
  "645": {
    commonUses: "6x4.5 film SLR and autofocus medium-format systems",
    coverageNotes: "Nominal 56 x 41.5 mm film image area with a roughly 70 mm diagonal",
    summary:
      "A medium-format film size that trades the larger 6x6 frame for more exposures and a rectangular composition.",
    description:
      "6x4.5, often called 645, is the most compact common roll-film medium format. It preserves much of the larger negative advantage over 35 mm while giving more frames per roll and a rectangular image shape that maps naturally to many print and magazine layouts.\n\nOptically, 645 lenses need a much larger image circle than full-frame lenses, and SLR mirror clearance often increases back-focus demands. The format's catalog entries show medium-format design priorities: coverage, even performance across a large field, and manageable lens size for handheld or studio camera systems.",
  },
};

export function getImageFormatDetails(formatId: ImageFormatId): ImageFormatDetails | null {
  return IMAGE_FORMAT_DETAILS[formatId] ?? null;
}
