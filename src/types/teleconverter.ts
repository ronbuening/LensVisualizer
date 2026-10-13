/**
 * Type definitions for detachable rear teleconverters.
 *
 * A teleconverter is a catalog entity of its own, never a lens: it has no aperture stop, cannot be traced or drawn
 * alone, and only becomes a runtime lens after `attachTeleconverter()` composes it onto a compatible host
 * prescription. Built-in converters that ship inside one lens stay on `OpticalConfigurationData`.
 */

import type { LensMountId } from "../utils/catalog/lensTaxonomy.js";
import type { AsphericCoefficients } from "./asphericSchema.js";
import type { AnnotationData, ElementData, RearPlateData, SurfaceData } from "./optics.js";

/** Complete teleconverter data object, authored in `*.teleconverter.ts` files. */
export interface TeleconverterData {
  /** Optional UTC publication timestamp; otherwise derived from Git history. */
  publishedAt?: string;
  /** URL-safe identifier; becomes the `/teleconverters/<key>` route and the `tc` query value. */
  key: string;
  /** null explicitly records an unconfirmed manufacturer. */
  maker?: string | null;
  /**
   * false: a hidden test model. It gets no index entry, search result, prerendered page or sitemap URL and is not
   * offered by the viewer's TC control; it still mounts through a hand-typed `tc` query.
   */
  visible?: boolean;
  name: string;
  subtitle?: string;
  specs?: string[];
  /** Nominal focal-length multiplier, e.g. 1.4 or 2. */
  magnification: number;
  /** Mounts the converter is made in; a host must share at least one. */
  lensMounts: LensMountId[];
  /** true: fits any host sharing a mount. Otherwise the host must declare `acceptsTeleconverters`. */
  universal?: boolean;
  /** Fastest host f-number whose axial beam the converter's clear apertures pass; faster hosts are rejected. */
  minHostFno?: number;
  /** Host lens keys excluded for reasons vertex geometry cannot express (rim contact, mechanical interference). */
  incompatibleLensKeys?: string[];
  patentNumber?: string;
  patentAuthors?: string[];
  patentAssignees?: string[];
  patentYear?: number;
  elementCount?: number;
  groupCount?: number;
  elements: ElementData[];
  /** Refracting surfaces only, front to rear; no `STO`. The last `d` is the back focus, or the gap to the first plate. */
  surfaces: SurfaceData[];
  /** Source-documented plates behind the converter; they only convert the authored last gap to air-equivalent. */
  rearPlates?: RearPlateData[];
  asph?: Record<string, AsphericCoefficients>;
  groups?: AnnotationData[];
  doublets?: AnnotationData[];
  /**
   * Air-equivalent distance in mm from the converter's first vertex to the host's native image plane — the
   * converter's virtual object. From a patent: master back focus (in air) minus the master-to-converter gap.
   */
  masterImageDistanceMm: number;
}

/** Raw teleconverter shape used in `.teleconverter.ts` files; no fields are defaulted. */
export type TeleconverterDataInput = TeleconverterData;

/** Composer-written record of the converter attached to a composed `LensData`; never authored in catalog files. */
export interface AttachedTeleconverterInfo {
  key: string;
  name: string;
  magnification: number;
  hostKey: string;
  hostName: string;
  /** First and last composed surface labels belonging to the converter. */
  firstSurfaceLabel: string;
  lastSurfaceLabel: string;
  /** Smallest composed element id belonging to the converter. */
  firstElementId: number;
  /**
   * Number of leading host `rearPlates` that sit ahead of the converter (a lens-side drop-in filter).
   * `expandRearPlates()` emits those between the host's last surface and the converter; the rest stay behind it.
   */
  platesAhead?: number;
  patentNumber?: string;
  patentAuthors?: string[];
}

/** Why a converter cannot be mounted on a host lens. */
export type TeleconverterIncompatibility =
  | "mount"
  | "not-declared"
  | "excluded"
  | "stacked"
  | "folded-host"
  | "projection"
  | "perspective-control"
  | "host-too-fast"
  | "clearance";

/** Axial spacing of a composed host + converter system, in mm. */
export interface TeleconverterGeometry {
  /** Leading host rear plates that sit ahead of the converter; 0 when every plate is camera-side. */
  platesAhead: number;
  /**
   * Added to every authored value of the host's last gap to turn it into the host-to-converter junction gap.
   * 0 when a lens-side plate is ahead: the host's last gap still ends at that plate.
   */
  lastGapShiftMm: number;
  /** Gap from the last lens-side plate's rear face to the converter; null when no plate is ahead. */
  plateJunctionGapMm: number | null;
  /** Smallest junction gap across every authored host focus, zoom and aberration-control state. */
  minJunctionGapMm: number;
  /** Composed final gap: converter last vertex to the host's first rear plate, or to the image plane. */
  finalGapMm: number;
  /** How far the converter moves the image plane back from the host's native image plane. */
  extensionMm: number;
}

export type TeleconverterCompatibility =
  | { ok: true; geometry: TeleconverterGeometry }
  | { ok: false; reason: TeleconverterIncompatibility };
