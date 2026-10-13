import { describe, expect, it } from "vitest";
import { normalLinePgF } from "../../../src/optics/dispersion.js";
import { evaluateSellmeier, resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";
import { TELECONVERTER_CATALOG } from "../../../src/utils/catalog/teleconverterCatalog.js";

/**
 * Data contract for `dPgF`: the deviation is measured from the engine's normal line (`normalLinePgF`), because the
 * g-line index is rebuilt from it. A value copied from a source that measures against another line, most often
 * 0.64833 − 0.0018·νd, is wrong by 0.00453 − 0.000118·νd (src/lens-data/LENS_DATA_SPEC.md, "If the source defines a
 * different normal line").
 *
 * The sweep is a screen: it reads each stored value against the PgF of the catalog glass the element resolves to and
 * lists a lens when a value fits the source line and misses the engine's. `npm run audit:dpgf` prints the elements.
 */

/** The line most patents define their deviation against. Not an engine constant. */
const sourceLinePgF = (vd: number) => 0.64833 - 0.0018 * vd;
/** A stored value within this of a line's reading fits that line. */
const FIT = 0.0006;
/** A stored value further than this from a line's reading misses it. */
const MISS = 0.0012;
const LINE_NM = { C: 656.2725, F: 486.1327, g: 435.8343 };

/**
 * Lenses the screen lists although their values are not copied deviations, or cannot be settled yet. Seven were read
 * against the patent: it prints PgF for the melt, the stored value is that PgF minus the engine's line, and the
 * catalog glass differs from the melt by about the gap between the lines (the Canon EF 8-15mm patent prints its
 * deviation against the engine's own line). Open rows are in agent_docs/glass-relabel-followup.md: the Fujifilm X10,
 * whose patent is not held locally, and one element of the Leica DC Vario-Elmarit, whose patent prints a deviation
 * without stating its line. The sweep compares for equality, so a corrected file must leave this list and no file may
 * join without its source being read.
 */
const SOURCE_LINE_FIT_BY_COINCIDENCE: readonly string[] = [
  "canon-ef-600f4l-is-ii-usm",
  "canon-ef-8-15mm-f4l-fisheye-usm",
  "canon-rf-16-28mm-f28-is-stm",
  "fujifilm-fujinon-gf-500mm-f56-r-lm-ois-wr",
  "fujifilm-fujinon-xf-18-120mm-f4-lm-pz-wr",
  "fujifilm-x10-7-1-28-4-f2-2-8",
  "fujifilm-xf-16-55mm-f28-r-lm-wr-ii",
  "fujifilm-xf50-f1",
  "leica-dc-vario-elmarit-fz2500-fz2000-fzh1",
];

describe("partial-dispersion normal line", () => {
  it("stores dPgF against the engine's line, not a source's", () => {
    let read = 0;
    const offenders = new Set<string>();
    for (const data of [...Object.values(LENS_CATALOG), ...Object.values(TELECONVERTER_CATALOG)]) {
      for (const element of data.elements) {
        const { glass, nd, vd, dPgF, indexReference } = element;
        if (dPgF === undefined || vd === undefined || !glass || indexReference === "e") continue;
        const entry = resolveCompatibleGlass(glass, nd, vd, indexReference);
        if (!entry) continue;
        read++;
        const nF = evaluateSellmeier(entry, LINE_NM.F);
        const catalogPgF = (evaluateSellmeier(entry, LINE_NM.g) - nF) / (nF - evaluateSellmeier(entry, LINE_NM.C));
        const fitsSource = Math.abs(dPgF - (catalogPgF - sourceLinePgF(vd))) < FIT;
        const missesEngine = Math.abs(dPgF - (catalogPgF - normalLinePgF(vd))) > MISS;
        if (fitsSource && missesEngine) offenders.add(data.key);
      }
    }
    expect(read).toBeGreaterThan(0);
    expect([...offenders].sort()).toEqual([...SOURCE_LINE_FIT_BY_COINCIDENCE].sort());
  });
});
