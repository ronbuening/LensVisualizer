/**
 * Canonical lens catalog taxonomy.
 *
 * Lens data files store stable ids from this module rather than free-typed
 * display labels. That keeps catalog filters and future image-field analysis
 * working from the same vocabulary.
 */

export const LENS_MOUNTS = [
  { id: "canon-ef", label: "Canon EF", sortOrder: 100 },
  { id: "canon-fd", label: "Canon FD", sortOrder: 110 },
  { id: "canon-rf", label: "Canon RF", sortOrder: 120 },
  { id: "fujifilm-x", label: "Fujifilm X", sortOrder: 200 },
  { id: "leica-ltm", label: "Leica LTM / M39", sortOrder: 300 },
  { id: "leica-m", label: "Leica M", sortOrder: 310 },
  { id: "l-mount", label: "L-Mount", sortOrder: 320 },
  { id: "minolta-sr", label: "Minolta SR", sortOrder: 400 },
  { id: "nikon-f", label: "Nikon F", sortOrder: 500 },
  { id: "nikon-z", label: "Nikon Z", sortOrder: 510 },
  { id: "olympus-om", label: "Olympus OM", sortOrder: 600 },
  { id: "pentax-110", label: "Pentax 110", sortOrder: 700 },
  { id: "pentax-k", label: "Pentax K", sortOrder: 710 },
  { id: "sony-a", label: "Sony A", sortOrder: 800 },
  { id: "sony-fe", label: "Sony E", sortOrder: 810 },
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
    id: "aps-c",
    label: "APS-C",
    widthMm: 23.6,
    heightMm: 15.7,
    diagonalMm: 28.35,
    aspectRatio: 23.6 / 15.7,
    sortOrder: 200,
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
    id: "4x5",
    label: "4x5",
    widthMm: 127,
    heightMm: 101.6,
    diagonalMm: 162.6,
    aspectRatio: 5 / 4,
    sortOrder: 700,
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

export function isImageFormatId(value: unknown): value is ImageFormatId {
  return typeof value === "string" && value in IMAGE_FORMAT_BY_ID;
}
