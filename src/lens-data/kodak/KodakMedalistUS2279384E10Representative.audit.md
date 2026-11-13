# Qualified pre-integration audit
- Literal US2279384 E10,5/3f3.5, primary Kodak product section compatible but not unique factory-example proof. ExistingE6 enlarger same patentfamily/different source prescription/application; no family novelty or duplicate E6.
- Correct originalR5+29.9 retained; EFL101.245322971,+1.2453% nominal residual, no fitting. CalculatedBFL84.173575804 not printed. Infinity only, no factory focusing reconstruction.
- Source nD/Nu interpretedconventionalAbbe, D→engine d approximation; no measured fullcurve/melt identity.
- Inferred midpoint6.54mmgap iris and geometry-onlycaps16/13.5/15.5 before rays, no override or unequal cemented-bodycaps. Independent full-cap geometry/iris review passed.
- Native/strictisolatedTypeScript pass. Finaldata differs frompilot onlykey/name; opticalparity preserved.
- Source52° vsretail54° distinct. Sourceedge26° sampled21OK5clip/26; no fullpupil/throughput/imageplane/MTF orcoverage validation.
- Current-corpus/app/lint/format/build/browser/MTF deferred/unpassed. Hidden/unintegrated/undeployed. Count only after final independent closure and verified private archive.

Important: inferred iris front full-cap clearance is only 0.04883 mm. This is a mathematical geometry pass, not mechanical tolerance, shutter fit or manufacturing validation.

## 2026-11-13 — Deployment validation

The independent validator re-read the patent page images (drawing sheet on PDF page 2, front page on page 3, and Example 10 specification on page 6). They checked all eight radii, seven intervals and ten glass coordinates, five elements in three groups, both cemented pairs, element shapes, nominal focal length, aperture, field and patent parties. Their report and evidence are in `scratchpad/v-medalist/report.md` and `evidence.md`. This integration rechecked the literal file with the current optical tools and compared every surface, element, focus, aperture and projection value against the delivered file; all remain unchanged.

Verdict: retain the literal patent-design candidate, hidden, with its focal-length residual disclosed. The Kodak brochure and Medalist II manual support 100 mm f/3.5, five elements, 54° retail coverage, unit focus and a 3.5 ft minimum distance; the five-element/three-group association is plausible but does not uniquely prove Example 10 as the factory prescription, and the validator could not visually retrieve the primary retail construction diagram.

Changes:

- Type-only import: `../LensVisualizer/src/types/lensDataV2.js` → `../../types/lensDataV2.js`; anonymous default object → `const LENS_DATA` with `satisfies LensDataV2Input` and a final default export, matching the required file form.
- Missing source header → one JSDoc block identifying Example 10, scale factor 1, millimetres without conversion, and the inferred stop/rims and calculated infinity back focus.
- `source.patentNumber`: `US 2279384` → `US 2,279,384`; missing `source.example` → `{ label: "Example 10", id: "10" }`.
- Missing `catalog.lensMounts` → `["fixed-lens-camera"]`; missing `catalog.imageFormat` → `"6x9"`, using canonical catalog ids.
- Missing `catalog.closeFocusM.marketing` → `1.0668` m, the Medalist II manual's 3.5 ft. The infinity-only focus placeholder is unchanged; no near-focus motion is invented.
- `catalog.focalLengthMm.design`: `100` → `101.24532297117585` mm, the computed EFL; marketing remains 100 mm.
- Analysis: the D-to-d approximation now states its consistency with Example 6 and the source precision; the focal-result paragraph records the two-table check, misprint scan and Example 6 comparison; the focus paragraph distinguishes marketing MFD from the unchanged infinity-only prescription.

Authors and assignees already exactly match the Example 6 file: `Fred E. Altman` and `Eastman Kodak Company`; no changes were needed. All `indexReference` values remain `"d"`, consistent with Example 6 from the same patent. The D-versus-d difference is below the patent's printed precision; this approximation does not establish historical glass identities or measured dispersion curves.

EFL is 101.245 mm versus the patent's nominal f = 100 mm (+1.2453%, about +1.25%). Both printed tables agree on the radii and intervals, including R5 = +29.9 mm. The validator's 475-case single-value scan found no proven misprint correction; the plausible focal-length alternatives contradict both tables. The drawing's L2 Abbe value is 57.4 while the specification prints 57.5; the delivered specification value is retained. Main's Example 6 file computes to 100.355145 mm, +0.36% on the same nominal f = 100 normalization. The Example 10 residual is therefore kept as the patent's own, without changing a radius, thickness, gap or glass coordinate.

After the changes, `built.mjs` succeeds: EFL 101.24532297117585 mm, f/3.5, stop semi-diameter 11.766110125076459 mm, 26° half-field, Petzval sum 0.0025441019163245163 mm⁻¹ and total front-to-image track 113.003575804 mm. The unchanged calculated infinity back focus is 84.173575804 mm; the literal lens-only length is 28.83 mm.

Validation results:

- `audit:surface`: OK, no validation errors.
- `audit:aperture`: one lens/one station within 3% of the stated f-number; zero rim, trace, iris or failed stations. `--raise` finds no surface below the stated axial beam and proposes no raises.
- `audit:image-circle`: at 6x9, one lens checked, zero undersized and zero skipped. This lenient rim-floor check does not certify full-field illumination.
- `audit:field-coverage --below=1.01`: the actual file is skipped because it remains hidden. A scratch copy changing only `visible` to true reaches 49.378512726 mm at 26° out of the 50.5 mm format semi-diagonal: 97.779233%. The limitation is the declared projection field, not a chief-ray rim clip; the corner chief ray is clear at 26.515684°. Image-circle was also rechecked on this copy with the same zero-undersized result.

Open: the later cleanup pass still owns keys, file/display names, subtitle/specs/analysis wording, element types and glass labels. The inferred rims remain unmeasured against retail hardware; their figure proportions and the 0.048831 mm full-cap iris clearance do not establish manufacturing tolerance or retail vignetting. The declared 52° source field remains distinct from the 54° retail statement and does not reach the full canonical 6x9 corner. The authored aperture range still ends at f/22 although the validator cites retail f/32; no range change was assigned to this row. No exact factory-example identification, close-focus reconstruction, application tests, lint, build, browser validation or deployment is claimed. No command or edit was refused by the sandbox during this integration.
