# VoigtlanderAPOLanthar50mmf35VM — Stage 4 Independent Audit

## Fixed job card

| Field | Fixed value |
|---|---|
| PATENT | JP2025108279A / JP 2025-108279 A |
| LENS | Voigtländer APO-Lanthar 50mm F3.5 Type II VM |
| EMBODIMENT | Example 1 / 第1実施形態 |
| OUTPUT STEM | `VoigtlanderAPOLanthar50mmf35VM` |
| Stage | 4 — independent audit and corrected delivery |

The patent and embodiment were not changed. The first pass was performed from the rendered patent pages and a fresh manual prescription entry before the prior Stage 3 audit, calculations, results, or glass table were consulted.

## Independent source extraction

The rendered Japanese publication establishes the following Example 1 source facts:

- Front page: JP 2025-108279 A, application 特願2024-2112, filed 2024-01-10, published 2025-07-23, applicant 株式会社コシナ, inventors Yoshihisa Yomogida and Yuki Shibata.
- Patent p. 5, ¶0024: `f = 49.10 mm`, `Fno = 3.56`, and half field `ω = 23.94°`.
- Patent pp. 5–6, ¶0025–0030: eight elements, six air-spaced groups, two cemented pairs, one stop, all spherical, and whole-lens unit focusing toward the object.
- Patent p. 7, Table 1: `BF = 33.14 mm`, `OAL = 36.58 mm`, `fsy = 32.96 mm`, `Hf = 6.92 mm`, and `Hr = 5.09 mm`.
- Patent p. 8, Table 2: the complete 15-row prescription used for the fresh calculation. The table defines d-line indices at 587.56 nm, positive radius for a surface convex toward the object, and `D` as the spacing to the next numbered row.

No mixed embodiment, missing active surface, inactive dummy plane, asphere table, spectral line-index table, or finite-distance spacing table was found in Example 1.

## Convention and transcription gate

- Sign convention: center of curvature to image side is positive in the modeled left-to-right sequence, consistent with the rendered Table 2 shapes and the patent's prose.
- Wavelength basis: `nd` and `νd` are d-line quantities.
- Asphere convention: not applicable; all surfaces are spherical.
- Scaling: none.
- Stop: one neutral air stop between patent surfaces 7 and 9.
- Cemented junctions: surface 6 enters L4 and surface 10 enters L6, so both carry the downstream element identity.
- Final gap: patent surface 15 carries the published 33.14 mm distance to the image plane.

The fresh transcription matches every `R`, `D`, `nd`, and `νd` value in the final TypeScript arrays at the displayed source precision.

## Independent optical computation

Two paraxial formulations were run from the fresh source entry: sequential height/reduced-angle (`y–ν`) tracing and height/slope (`y–u`) ABCD tracing. Their system matrices and cardinal quantities agree to better than `1e-10`.

| Quantity | Fresh result | Source/comparison |
|---|---:|---|
| System matrix determinant | 1.000000000000000 | Unit determinant |
| EFL | 49.101170845743 mm | Patent 49.10 mm |
| BFD | 33.142203436276 mm | Patent 33.14 mm |
| First principal plane from surface 1 | 21.661857108721 mm | Computed |
| Second principal plane from surface 15 | -15.958967409467 mm | Computed; negative means objectward of surface 15 |
| Front focal point from surface 1 | -27.439313737021 mm | Computed |
| Table 2 lens OAL | 36.59 mm | Displayed spacings sum to 36.59 mm |
| Table 1 lens OAL | 36.58 mm | Patent summary says 36.58 mm |
| Surface 1 to image track | 69.73 mm | Table spacings plus BFD |
| Entrance-pupil radius | 6.896231860357 mm | From EFL and f/3.56 |
| Fresh inferred stop semi-diameter | 5.197982161631 mm | Final data stores 5.197982 mm |
| Final-array modeled f-number | 3.560000110698 | Matches `nominalFno: 3.56` |

The principal-plane result also closes the BFD relation: the second principal plane is 15.958967409 mm objectward of surface 15, and `49.101170846 − 15.958967409 = 33.142203436 mm`.

## Power distinctions

Every element focal length was recalculated by isolating that element in air. Cemented-pair and larger-subassembly EFLs were separately calculated with their published internal spacings. These are distinct quantities.

| Quantity | EFL |
|---|---:|
| L1 standalone | -96.247194310 mm |
| L2 standalone | +61.211191113 mm |
| L3 standalone | +17.606466564 mm |
| L4 standalone | -15.657185052 mm |
| L5 standalone | -35.343944993 mm |
| L6 standalone | +65.800658018 mm |
| L7 standalone | +28.497104088 mm |
| L8 standalone | -127.948064341 mm |
| L3/L4 cemented pair | +313.386215716 mm |
| L5/L6 cemented pair | -79.890326810 mm |
| Isolated L2–L4 front core | +44.922978259 mm |
| Isolated L5–L7 rear core | +37.247688923 mm |
| Isolated L2–L7 partial-symmetric core | +32.956239035 mm |

The previous analysis incorrectly called the isolated larger-subassembly results “in-situ.” The numerical values were correct; the classification was not.

## Petzval, conditions, and architecture tests

Petzval was recomputed surface by surface as `φ/(n·n′)`. The sum is `+0.003207057727 mm⁻¹`, giving a reciprocal radius of `+311.812285670 mm` under the project convention.

All patent conditions pass from the final arrays:

| Condition | Evaluated result |
|---|---:|
| Rear-core positive lens `νd > 70` | L6 = 81.61 |
| Front-core positive lens `nd > 1.72` | L2 = 1.88300; L3 = 1.72916 |
| `1.25 < Hf/Hr < 1.45` | 1.359119644 |
| `0.48 < fsy/f < 0.72` | 0.671190492 |
| `0.73 < fsy/BF < 1.15` | 0.994388894 |
| `0.9 < OAL/BF < 1.55` | 1.103728666 using Table 1 OAL |
| All spherical | true |

Using the patent Table 1 OAL, `TL/EFL = 0.744992418`, so the project criterion classifies the layout as telephoto. `BFD/EFL = 0.674977864`, so it is not retrofocus.

## Geometry and ray gate

The official Cosina optical-section SVG was parsed directly. Curve vertices were fitted to the patent axial stations at `9.310742591892 px/mm`. Final authored surface semi-diameters differ from the fresh SVG derivation by no more than `0.005083999 mm`; the final stop differs from the fresh pupil inference by `-0.000000161631 mm`.

Final-array geometry results:

- minimum edge thickness: 2.190847709 mm;
- maximum actual spherical rim angle: 35.093382012°;
- maximum positive shared-gap intrusion: 48.349176368% of the air gap;
- conic limit: not applicable;
- required hidden render trim under the independent geometry model: 0 mm;
- minimum clearance for the default on-axis and 0.6-field fans: 0.217740432 mm.

The maximum-field diagnostic clips portions of the sampled full-pupil bundle at surfaces 1, 2, 3, 4, 5, 6, 7, 11, 12, 13, 14, 15. This is non-blocking physical vignetting from manufacturer-derived apertures; the configured default 0.6-field ray fans remain contained.

## Glass and spectral audit

The fresh catalog search began from the patent `(nd, νd)` pairs rather than the existing labels. Current vendor catalogs provide multiple exact or rounding-equivalent candidates for every element. Examples include HOYA FC5 versus Schott N-FK5 for L1, HOYA TAFD30 versus OHARA S-LAH58 for L2, HOYA FCD1 versus Schott N-PK52A for L6, and HOYA E-FD8 versus HIKARI J-SF8 for L8.

Because the patent does not name a vendor and multiple candidates fit, the generic six-digit/class labels are retained. The official section marks L1, L4, L6, and L8 as special-dispersion positions, but the selected sources do not establish unique catalog glasses or publish `nC`, `nF`, `ng`, or `dPgF`. No Sellmeier coefficients or quantitative APO claim was added.

The complete residual table is in `VoigtlanderAPOLanthar50mmf35VM.glass-audit.csv`.

## Production correlation and focus treatment

Cosina's official Type I and Type II product pages both publish 50 mm f/3.5, eight elements in six groups, four anomalous-partial-dispersion elements, Leica M compatibility, 135 full-frame coverage, and the same optical-section topology. The mechanical minimum-focus endpoints differ: 0.45 m for Type I and 0.35 m for Type II. Example 1 remains a strong correlation, but the analysis correctly describes it as convergent evidence rather than an explicit manufacturer declaration that the patent table is the released prescription.

The patent discloses whole-lens unit focus but no finite-distance optical prescription. The final data therefore has `var: {}`, `varLabels: []`, and one infinity state. `closeFocusM: 0.35` is Type II product metadata, not an encoded optical reconstruction.

## Corrections made

| File/location | Old wording | Corrected wording | Source and independent evidence | Downstream consequence |
|---|---|---|---|---|
| Analysis, Optical Architecture | “has an in-situ equivalent focal length” | “when isolated in air … has an equivalent focal length”; explicitly “isolated-subassembly EFLs, not in-situ powers” | Fresh calculation extracted L2–L7 from the system, retained its internal spacings, and placed air on both outside boundaries | No numerical or data-file change; prevents standalone/in-situ power confusion |
| Analysis, D1 | “front-core section has a much stronger in-situ focal length” | “isolated L2–L4 front-core subassembly [has] an EFL” | The reported +44.922978 mm comes from an isolated subassembly matrix, not an embedded power evaluation | No dependent numbers changed |
| Analysis, D2 | “positive in-situ subassembly” | “isolated L5–L7 subassembly … has a positive EFL” | The reported +37.247689 mm comes from an isolated subassembly matrix | No dependent numbers changed |
| Analysis, Focus Mechanism | “no finite-object prescription” | “no finite-distance optical prescription” | Patent ¶0016 and ¶0022 state unit focus; Example 1 supplies only the infinity prescription and no finite-distance table | Clarifies why no focus state was reconstructed; no data change |

The TypeScript data file required no correction and remains byte-identical to the Stage 3 input.

## Targeted final gate

Completed locally:

- rendered-page prescription and summary-table extraction: PASS;
- fresh `y–ν` and independent `y–u` ABCD calculation: PASS;
- exact spherical marginal-ray, pupil, condition, geometry, and ray-containment checks: PASS;
- standalone element, cemented-pair, isolated-subassembly, and surface-by-surface Petzval checks: PASS;
- fresh glass-label residual audit: PASS;
- TypeScript syntax transpilation: PASS;
- schema-equivalent field, taxonomy, count, surface, cemented-junction, focus, and base-spacing checks: PASS;
- data-to-analysis metadata, element, quantitative, focus, and spectral-claim checks: PASS;
- package name, size, checksum, and ZIP integrity checks: recorded in the final manifest.

Unavailable because the LensVisualizer repository is not mounted:

- repository `LensDataInput` typecheck;
- repository Prettier executable (`prettier` was not installed in the available runtime);
- `buildLens()` / `validateLensData()`;
- repository `computeElementRenderDiagnostics()`;
- repository glass mismatch scanner and targeted corpus tests.

No batch metadata generation, full build, full-corpus tests, Git operation, or publication action was performed.

## Stage result

The corrected data/analysis pair is internally consistent and passes the independent local optical and geometry gates. Repository-only integration checks remain for the later batch stage.

**READY_FOR_BATCH**

## Repository integration audit — 2026-08-01

The untracked publication `patents/JPA 2025108279-000000.pdf` was rendered again at repository integration. Figure 1
on PDF page 22 was checked against the authored section. Relative surface heights remain within roughly 10% of the
patent silhouette, while the Cosina optical-section fit documented above remains the more precise aperture source.
`audit:image-circle` reports no undersized surface, and the production render diagnostics report no hidden trim.
Accordingly, no semi-diameter was changed: forcing the noisier patent drawing onto the existing manufacturer-derived
fit would reduce confidence rather than improve it.

The display name is now `VOIGTLÄNDER APO-LANTHAR 50mm f/3.5 Type II VM`. Cosina publishes separate Type I and
Type II product names; the prescription is shared, but this record's 0.35 m close-focus metadata identifies Type II.
The prior generic display name did not make that distinction and placed `VM` in a non-product-name position.

## Second SD audit — 2026-08-02

The repository silhouette was compared again with Example 1 Figure 1 on PDF page 22. It reproduces the source's front
height taper, compact L5/L6 pair, and wider L7/L8 rear pair; the higher-precision Cosina SVG fit remains internally
consistent. `audit:image-circle` and the production render-diagnostics test pass, so no SD correction was supported.
Inventor metadata now reuses the repository's established `Yoshihisa Yomogida` and `Yuki Shibata` romanizations.

## Screenshot and label audit — 2026-08-02

The supplied diagram confirms the existing manufacturer-SVG fit; its surface heights remain within about 0.0051 mm
of the fitted Cosina section and also remain within the patent drawing's lower-precision tolerance.

- No semi-diameter changed.
- The display name is corrected from `VOIGTLÄNDER APO-LANTHAR 50mm f/3.5 Type II VM` to
  `VOIGTLÄNDER APO-LANTHAR 50mm f/3.5 (Type II) VM`, following Cosina's product styling.
- Figure 1's complete `G1` label and its `G1F` / `G1B` subdivisions are now represented. The unsupported `D1` / `D2`
  diagram labels were removed; cemented membership remains identified factually as L3/L4 and L5/L6.
- The applicant now reuses the established romanized `Cosina Co., Ltd.` entry.
- The header now separates modeled, patent, and marketed focal, aperture, and angle-of-view values.

Verification: `audit:image-circle`, `audit:surface`, production render diagnostics, glass reports, typecheck, formatting,
lint, full tests, and production build all pass.
