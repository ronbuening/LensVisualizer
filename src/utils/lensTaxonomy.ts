/**
 * Canonical lens catalog taxonomy.
 *
 * Lens data files store stable ids from this module rather than free-typed
 * display labels. That keeps catalog filters and future image-field analysis
 * working from the same vocabulary.
 */

export const LENS_MOUNTS = [
  { id: "canon-ef", label: "Canon EF", sortOrder: 100 },
  { id: "canon-ef-m", label: "Canon EF-M", sortOrder: 105 },
  { id: "canon-fd", label: "Canon FD", sortOrder: 110 },
  { id: "canon-fl", label: "Canon FL", sortOrder: 115 },
  { id: "canon-r", label: "Canon R", sortOrder: 120 },
  { id: "canon-rf", label: "Canon RF", sortOrder: 125 },
  { id: "contax-645", label: "Contax 645", sortOrder: 150 },
  { id: "contax-g", label: "Contax G", sortOrder: 160 },
  { id: "contax-n", label: "Contax N", sortOrder: 170 },
  { id: "contax-rf", label: "Contax RF", sortOrder: 180 },
  { id: "dkl", label: "DKL / Deckel", sortOrder: 190 },
  { id: "exakta", label: "Exakta", sortOrder: 195 },
  { id: "fujifilm-x", label: "Fujifilm X", sortOrder: 200 },
  { id: "fujifilm-g", label: "Fujifilm G", sortOrder: 210 },
  { id: "fuji-g690", label: "Fuji G690", sortOrder: 220 },
  { id: "fuji-gx680", label: "Fuji GX680", sortOrder: 230 },
  { id: "hasselblad-h", label: "Hasselblad H", sortOrder: 250 },
  { id: "hasselblad-v", label: "Hasselblad V", sortOrder: 260 },
  { id: "hasselblad-xcd", label: "Hasselblad XCD", sortOrder: 270 },
  { id: "xpan", label: "Hasselblad XPan / Fujifilm TX", sortOrder: 280 },
  { id: "konica-ar", label: "Konica AR", sortOrder: 285 },
  { id: "konica-f", label: "Konica F", sortOrder: 290 },
  { id: "leica-ltm", label: "Leica LTM / M39", sortOrder: 300 },
  { id: "leica-m", label: "Leica M", sortOrder: 310 },
  { id: "leica-r", label: "Leica R", sortOrder: 320 },
  { id: "leica-s", label: "Leica S", sortOrder: 330 },
  { id: "l-mount", label: "L-Mount", sortOrder: 340 },
  { id: "m42", label: "M42", sortOrder: 350 },
  { id: "mamiya-6", label: "Mamiya 6", sortOrder: 360 },
  { id: "mamiya-7", label: "Mamiya 7", sortOrder: 365 },
  { id: "mamiya-645", label: "Mamiya 645", sortOrder: 370 },
  { id: "mamiya-nc", label: "Mamiya NC", sortOrder: 375 },
  { id: "mamiya-rb67", label: "Mamiya RB67", sortOrder: 380 },
  { id: "mamiya-rz67", label: "Mamiya RZ67", sortOrder: 385 },
  { id: "minolta-sr", label: "Minolta SR", sortOrder: 400 },
  { id: "minolta-v", label: "Minolta V", sortOrder: 410 },
  { id: "nikon-1", label: "Nikon 1", sortOrder: 490 },
  { id: "nikon-f", label: "Nikon F", sortOrder: 500 },
  { id: "nikonos", label: "Nikonos", sortOrder: 503 },
  { id: "nikon-s", label: "Nikon S", sortOrder: 505 },
  { id: "nikon-z", label: "Nikon Z", sortOrder: 510 },
  { id: "four-thirds", label: "Four Thirds", sortOrder: 580 },
  { id: "micro-four-thirds", label: "Micro Four Thirds", sortOrder: 590 },
  { id: "olympus-om", label: "Olympus OM", sortOrder: 600 },
  { id: "olympus-pen-f", label: "Olympus Pen F", sortOrder: 610 },
  { id: "pentax-110", label: "Pentax 110", sortOrder: 700 },
  { id: "pentax-645", label: "Pentax 645", sortOrder: 705 },
  { id: "pentax-67", label: "Pentax 67", sortOrder: 708 },
  { id: "pentax-k", label: "Pentax K", sortOrder: 710 },
  { id: "pentax-q", label: "Pentax Q", sortOrder: 720 },
  { id: "praktina", label: "Praktina", sortOrder: 730 },
  { id: "rollei-6000", label: "Rollei 6000", sortOrder: 740 },
  { id: "rollei-qbm", label: "Rollei QBM", sortOrder: 750 },
  { id: "samsung-nx", label: "Samsung NX", sortOrder: 760 },
  { id: "samsung-nx-mini", label: "Samsung NX Mini", sortOrder: 765 },
  { id: "sigma-sa", label: "Sigma SA", sortOrder: 770 },
  { id: "sony-a", label: "Sony A", sortOrder: 800 },
  { id: "sony-fe", label: "Sony E", sortOrder: 810 },
  { id: "bronica-etr", label: "Zenza Bronica ETR", sortOrder: 850 },
  { id: "bronica-gs", label: "Zenza Bronica GS", sortOrder: 860 },
  { id: "bronica-sq", label: "Zenza Bronica SQ", sortOrder: 870 },
  { id: "yashica-contax", label: "Yashica / Contax", sortOrder: 880 },
  { id: "fixed-lens-camera", label: "Fixed-lens Camera", sortOrder: 900 },
] as const;

export type LensMountId = (typeof LENS_MOUNTS)[number]["id"];

export interface LensMountMetadata {
  id: LensMountId;
  label: string;
  sortOrder: number;
}

export const LENS_MOUNT_BY_ID = Object.fromEntries(LENS_MOUNTS.map((mount) => [mount.id, mount])) as Record<
  LensMountId,
  LensMountMetadata
>;

export function isLensMountId(value: unknown): value is LensMountId {
  return typeof value === "string" && value in LENS_MOUNT_BY_ID;
}

export const IMAGE_FORMATS = [
  {
    id: "110",
    label: "110",
    widthMm: 17,
    heightMm: 13,
    diagonalMm: 21.4,
    aspectRatio: 17 / 13,
    sortOrder: 100,
  },
  {
    id: "1/2.3-inch-type",
    label: "1/2.3-inch type",
    widthMm: 6.17,
    heightMm: 4.55,
    diagonalMm: 7.67,
    aspectRatio: 6.17 / 4.55,
    sortOrder: 120,
  },
  {
    id: "1/1.7-inch-type",
    label: "1/1.7-inch type",
    widthMm: 7.44,
    heightMm: 5.58,
    diagonalMm: 9.3,
    aspectRatio: 4 / 3,
    sortOrder: 130,
  },
  {
    id: "1-inch-type",
    label: "1-inch type / Nikon CX",
    widthMm: 13.2,
    heightMm: 8.8,
    diagonalMm: 15.86,
    aspectRatio: 3 / 2,
    sortOrder: 150,
  },
  {
    id: "four-thirds",
    label: "Four Thirds",
    widthMm: 17.3,
    heightMm: 13,
    diagonalMm: 21.64,
    aspectRatio: 4 / 3,
    sortOrder: 180,
  },
  {
    id: "aps-c",
    label: "APS-C",
    widthMm: 23.6,
    heightMm: 15.7,
    diagonalMm: 28.35,
    aspectRatio: 23.6 / 15.7,
    sortOrder: 200,
  },
  {
    id: "aps-film",
    label: "APS film",
    widthMm: 30.2,
    heightMm: 16.7,
    diagonalMm: 34.51,
    aspectRatio: 30.2 / 16.7,
    sortOrder: 220,
  },
  {
    id: "half-frame-135",
    label: "Half-frame 135",
    widthMm: 24,
    heightMm: 18,
    diagonalMm: 30,
    aspectRatio: 4 / 3,
    sortOrder: 250,
  },
  {
    id: "135-full-frame",
    label: "135 / Full-frame",
    widthMm: 36,
    heightMm: 24,
    diagonalMm: 43.3,
    aspectRatio: 3 / 2,
    sortOrder: 300,
  },
  {
    id: "135-panoramic",
    label: "135 panoramic",
    widthMm: 65,
    heightMm: 24,
    diagonalMm: 69.3,
    aspectRatio: 65 / 24,
    sortOrder: 320,
  },
  {
    id: "44x33",
    label: "44x33 digital medium format",
    widthMm: 43.8,
    heightMm: 32.9,
    diagonalMm: 54.78,
    aspectRatio: 43.8 / 32.9,
    sortOrder: 450,
  },
  {
    id: "leica-s-45x30",
    label: "Leica S 45x30",
    widthMm: 45,
    heightMm: 30,
    diagonalMm: 54.08,
    aspectRatio: 3 / 2,
    sortOrder: 470,
  },
  {
    id: "645",
    label: "6x4.5",
    widthMm: 56,
    heightMm: 41.5,
    diagonalMm: 69.7,
    aspectRatio: 56 / 41.5,
    sortOrder: 500,
  },
  {
    id: "6x6",
    label: "6x6",
    widthMm: 56,
    heightMm: 56,
    diagonalMm: 79.2,
    aspectRatio: 1,
    sortOrder: 520,
  },
  {
    id: "6x7",
    label: "6x7",
    widthMm: 70,
    heightMm: 56,
    diagonalMm: 89.6,
    aspectRatio: 70 / 56,
    sortOrder: 540,
  },
  {
    id: "6x8",
    label: "6x8",
    widthMm: 76,
    heightMm: 56,
    diagonalMm: 94.4,
    aspectRatio: 76 / 56,
    sortOrder: 550,
  },
  {
    id: "6x9",
    label: "6x9",
    widthMm: 84,
    heightMm: 56,
    diagonalMm: 101,
    aspectRatio: 84 / 56,
    sortOrder: 560,
  },
  {
    id: "4x5",
    label: "4x5",
    widthMm: 127,
    heightMm: 101.6,
    diagonalMm: 162.6,
    aspectRatio: 5 / 4,
    sortOrder: 700,
  },
  {
    id: "5x7",
    label: "5x7",
    widthMm: 177.8,
    heightMm: 127,
    diagonalMm: 218.5,
    aspectRatio: 7 / 5,
    sortOrder: 720,
  },
  {
    id: "8x10",
    label: "8x10",
    widthMm: 254,
    heightMm: 203.2,
    diagonalMm: 325.3,
    aspectRatio: 5 / 4,
    sortOrder: 740,
  },
] as const;

export type ImageFormatId = (typeof IMAGE_FORMATS)[number]["id"];

export interface ImageFormatMetadata {
  id: ImageFormatId;
  label: string;
  widthMm: number;
  heightMm: number;
  diagonalMm: number;
  aspectRatio: number;
  sortOrder: number;
}

export const IMAGE_FORMAT_BY_ID = Object.fromEntries(IMAGE_FORMATS.map((format) => [format.id, format])) as Record<
  ImageFormatId,
  ImageFormatMetadata
>;

export const DEFAULT_IMAGE_FORMAT_ID: ImageFormatId = "135-full-frame";

export function isImageFormatId(value: unknown): value is ImageFormatId {
  return typeof value === "string" && value in IMAGE_FORMAT_BY_ID;
}

export function resolveImageFormatMetadata(value: unknown): ImageFormatMetadata {
  return isImageFormatId(value) ? IMAGE_FORMAT_BY_ID[value] : IMAGE_FORMAT_BY_ID[DEFAULT_IMAGE_FORMAT_ID];
}
