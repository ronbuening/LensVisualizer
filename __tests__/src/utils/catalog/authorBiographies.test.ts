/**
 * Editorial integrity checks for the hand-authored inventor profiles.
 */

import { describe, expect, it } from "vitest";
import { AUTHOR_BIOGRAPHIES, getAuthorBiography } from "../../../../src/utils/catalog/authorBiographies.js";
import { getAuthorByName } from "../../../../src/utils/catalog/authorCatalog.js";

const PROFILED_AUTHORS = [
  "Albrecht Wilhelm Tronnier",
  "Carl August Hans Harting",
  "Ellis I. Betensky",
  "Erhard Glatzel",
  "Günther Lange",
  "Harry Zöllner",
  "Haruo Sato",
  "Hideo Azuma",
  "Hiroshi Ito",
  "Jihei Nakagawa",
  "Koichi Wakamiya",
  "Kouichi Ohshita",
  "Ludwig Bertele",
  "Paul Rudolph",
  "Robert Richter",
  "Saburo Murakami",
  "Walter Mandler",
  "Yoshiyuki Shimizu",
  "Zenji Wakimoto",
];

describe("author biographies", () => {
  it("profiles every selected historical author and no unknown catalog names", () => {
    expect(Object.keys(AUTHOR_BIOGRAPHIES).sort()).toEqual(PROFILED_AUTHORS);

    for (const name of PROFILED_AUTHORS) {
      expect(getAuthorByName(name), `${name} should exist in the generated author catalog`).toBeDefined();
      expect(getAuthorBiography(name), `${name} should have a biography`).toBeDefined();
    }
  });

  it("keeps every profile substantive and backed by secure source links", () => {
    for (const [name, biography] of Object.entries(AUTHOR_BIOGRAPHIES)) {
      expect(biography.summary.length, `${name} biography length`).toBeGreaterThan(200);
      expect(biography.sources.length, `${name} source count`).toBeGreaterThan(0);
      expect(new Set(biography.sources.map((source) => source.url)).size, `${name} source URLs`).toBe(
        biography.sources.length,
      );

      for (const source of biography.sources) {
        expect(source.label.trim(), `${name} source label`).not.toBe("");
        expect(source.url, `${name} source URL`).toMatch(/^https:\/\//);
      }
    }
  });

  it("returns no profile for an uncurated author", () => {
    expect(getAuthorBiography("Carl Baur")).toBeUndefined();
  });

  it("uses Nikon's spelling for Kouichi Ohshita's catalog identity", () => {
    expect(getAuthorByName("Kouichi Ohshita")).toBeDefined();
    expect(getAuthorByName("Koichi Ohshita")).toBeUndefined();
    expect(getAuthorBiography("Koichi Ohshita")).toBeUndefined();
  });
});
