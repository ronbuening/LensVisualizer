# VOIGTLÄNDER 100mm f/2.8 (DE 636,166 Design) — Audit Log

## Earlier optical findings

The original analysis recorded the literal 45 mm vertex track, computed sodium-D EFL of 99.999136874 mm and paraxial BFD of 78.991478548 mm. The nominal marginal ray crossed the axis at 123.782600326 mm, ahead of the 123.991478548 mm paraxial image plane, with a −0.037997 mm intercept at that plane. The image plane was not shifted to reduce spherical aberration.

The original geometry checks found a minimum edge thickness of 2.302339 mm, minimum air-gap clearances of 4.959249 and 6.344096 mm, and maximum sag intrusion below 30%. Small changes in rim radius and iris position preserved positive edges and clearances. The 18.5 mm front rims were rounded above a 17.85699 mm entrance-ray height plus 0.5 mm margin; the second-interface axial height was 17.26545 mm. The remaining 15.25 mm rims included margins above the nominal axial ray heights. These were aperture estimates, not published dimensions.

No separate audit log accompanied those findings. They are retained here as earlier results rather than evidence of factory dimensions or production performance.

## 2026-11-20 — Deployment validation and cleanup

An independent validator read all eight radii, five thicknesses, two air spaces and five nD/Abbe pairs from the patent page images, and checked the drawing, dates, authorship, aperture, paraxial image plane and claim inequalities. Verdict: valid with notes; every printed prescription number agrees. The pages were also inspected during this cleanup. No product link is documented: the five-element/three-group arrangement has a Heliar-style front doublet and Dynar-style rear doublet, which supports a design-family comparison only.

The following changes preserve the printed prescription, inferred stop position and every rim:

- File form: import from `../main/src/types/lensDataV2.js` → `../../types/lensDataV2.js`; `const data` / `export default data` → `const LENS_DATA` / `export default LENS_DATA`. Added one source header identifying the inferred iris, rims and paraxial image plane. `visible`: implicit → `true`.
- `key`: `deser-de636166-100mm-f28-patent-reference` → `voigtlander-100mm-f28-de636166`.
- `name`: `DESER DE636166 — 100mm f/2.8 PATENT REFERENCE` → `VOIGTLÄNDER 100mm f/2.8 (DE 636,166 Design)`. Maker remains `Voigtländer`.
- `subtitle`: the former process description → `DE 636,166 C, Sole example — Hans Deser Heliar-type design`.
- `catalog.specs`: six lines describing preparation and limitations → `5 ELEMENTS / 3 GROUPS`, `DESIGN F/2.8`, `ALL SPHERICAL`, `HELIAR-TYPE`. Counts and design focal length/aperture remain 5/3, 100 mm and f/2.8; no marketing values, mount or format were added.
- Element labels: shape names → `Element 1` through `Element 5`; the shape-derived types remain correct. Added plain optical roles and focal lengths in air from the element probe: absent → +44.66, −146.22, −36.63, +27.65 and −54.17 mm.
- Cemented metadata: absent → `C1` on elements 1/2 and `C2` on elements 4/5, with matching brackets spanning surfaces 1–3 and 6–8. Group captions: `G1 (2 cemented)`, `G2 (1)`, `G3 (2 cemented)` → `Front doublet`, `Central singlet`, `Rear doublet`.
- Glass labels: the generic unmatched description → `LF5 (Schott)` on elements 2/3 and `BASF3 (Sumita)` on element 5. At the sodium-D line, LF5 gives ΔnD = +0.000005473 and ΔνD = +0.042526; BASF3 gives ΔnD = −0.000001044 and ΔνD = +0.031596. Each label was checked with the catalog resolver using reference `D`; the resolved vendors are Schott and Sumita. These are spectral equivalents, not historical supplier identifications.
- Elements 1/4: the generic unmatched description → `Unmatched (nD 1.65772 / ν 51.2)`. All five `indexReference` values remain `D`; the repetitive uncertainty notes were removed because the patent explicitly names nD. No spectral samples were present to remove, and no anomalous-dispersion tags were added.
- Focus distance: `1000000000000000` → `1e15`, numerically identical. Focus description: the former process wording → `Infinity focus only; the patent gives no close-focus spacing or movement.`
- Analysis: added the exact-name H1 and required Patent/Inventors/Assignee/Published rows; corrected spacing and publication dates; documented the catalog equivalents, Heliar/Dynar arrangement and absent product link. Removed the unsupported 52° mention, editor instructions and sampling totals; replaced the former checks section with aberration correction and model limits. The patent itself prints f = 100 mm.

After formatting, every numeric `built.mjs` output is identical to the original: EFL 99.99913687397263 mm, FOPEN 2.8, half-field 5°, stop radius 13.781348807553915 mm and total track 123.99147854817156 mm. The paraxial probe gives BFD 78.99147854817156 mm, zero image-plane defocus and unchanged infinity-only focus states. Real admitted aperture remains about f/2.856 because of pupil aberration.

Surface audit: OK, no errors. Aperture audit: one station within 3% of the stated f-number; zero rim, trace, iris or failed cases. The aperture-raise check found zero surfaces requiring a raise. Image-circle and field-coverage audits on the visible file both skip because neither a published format nor image circle is available. A visible scratch copy with a clearly assumed 17.5 mm circle, used only to check the chosen 5° range, gives zero undersized surfaces, zero skips, 100% rounded coverage and a clear corner; this circle was not added to the lens file. The real-ray clear-aperture probe at 5° and at image height 8.75 mm reports no axial clipping or blocked chief ray. Normal full-bundle vignetting remains at several rims.

Formatting and whitespace checks pass for all three files. The analysis has the exact-name H1, all four required metadata rows and eleven section headings. The data file contains no `//` comments. A page screenshot was attempted, but the headless browser reported thermal-state and DNS-watch errors and wrote no image; rendered-page review could not be completed.

Open: retain the 5° half-field because the patent gives no field angle for its correction claim. The iris midpoint and all rims remain inferred; a later semi-diameter review should compare optical rims against the drawing, whose heights agree within about 3%, without treating leader lines as glass edges. Elements 1/4 remain unmatched, and historical suppliers are unresolved. No source establishes a product, mount, image format, image circle or minimum focus distance; the scratch coverage result establishes none of these. Rendered-page review remains open after the screenshot failure.
