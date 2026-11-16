# Audit Log — Angénieux Retrofocus 24 mm f/3.5 R61-lineage Reconstruction

Patent: FR 1,214,945, sole example, PDF pp. 1–3.
Engine/catalog baseline: `db50c52df466bbcf1b9654411b186a27d280f16e`.

## 2026-11-14 — Single-model representative reconstruction

This audit concerns one newly authored prescription. It does not revise another lens, certify a factory prescription, or authorize general source corrections. The literal patent remains separate from the reconstruction.

### Phase 1 — Glass and reference convention

All eight source index/Abbe pairs were read from the freshly rendered table and retained. L1/L4/L5/L6/L8 use 1.6203/60.20; L2/L3 use 1.6751/32.30; L7 uses 1.6498/33.70. The source says spectrum D line without a chemical/numeric wavelength. The modeled helium-d reference is an explicit convention. `Unmatched` labels keep all eight materials on Abbe estimates; no supplier, catalog identity or partial dispersion was inferred.

### Phase 2 — Retained-information audit and explicit exception

| Quantity | Source of record | Reconstruction | Status |
|---|---:|---:|---|
| R15, native units | −289.16 | +289.16 | Explicitly authorized single-model sign assumption |
| R16, native units | −67.745 | −67.745 | Unchanged |
| Other fifteen radii | Printed table | Same signs and values × 0.24 | Fidelity check passed |
| Fifteen axial intervals | Printed table | Same values × 0.24; e12 split for STO | Fidelity check passed |
| Native EFL | Stated 100 | Computed 100.11723262 | Residual retained |
| Native BFD | Stated 153.3 | Computed 153.42839841 | Residual retained |
| Last image spacing | Not a table row | 36.82281562 mm | Computed paraxial infinity plane |

The unchanged literal prescription gives EFL 253.89824385 and BFD 400.35501950 source units. The positive-R15 variant restores the biconvex last element in both original sections and closely reproduces the source summary. The period Pignons drawing supplies no numerical radius and does not prove the replacement value or exact factory identity.

The maintainer specifically approved proceeding on this sign-error assumption on 13 November 2026 after the primary drawing comparison. This overrides the ordinary keep-literal rule only for this separately labeled reconstruction. The source-errata policy normally requires two enumerated kinds of source-internal evidence for a `corrected` entry. A section drawing is not an aberration plot, and the Pignons leaflet is not a family patent publication. No such categories were fabricated. `source.errata` therefore retains an `unresolved` disclosure of the source uncertainty and states the actual applied override. Machine-readable private provenance records printed/applied values, scale and the exact approval reference. The model is not a verified corrected-source transcription.

The original PDF, archived literal radii, independently authored `literal-patent.json` and sign-preserving `literal-patent.csv` retain negative R15/R16. An automated parity check rejoins the STO split and verifies every source radius, interval, medium assignment and index/Abbe pair, allowing only R15's disclosed sign.

### Aperture and native geometry

The iris location is inferred from the sole section, between E6/E7. Its modeled midpoint splits e12 into 1.1256 + 1.1256 mm. The engine derives the f/3.5 radius, 5.37416420 mm. No numeric clear apertures are published. All inferred radii and the final 24.2 mm front cap are listed in the analysis and data.

The initial 24.0 mm front cap missed one of 317 stop-plane targets at each signed 41.5° wide-open field. A bounded launch scan identified the first-cap boundary; enlarging the two inferred L1 caps to 24.2 mm resolves those targets. Previous results remain in the private attempts archive. No R/d/index change, artificial rim cut, `gapSagFrac` override, maximum-rim override or optical engine edit was used.

Native validation and 257-height geometry samples give minimum material thickness 1.2072 mm, minimum shared-gap clearance 0.1224 mm, maximum shared-gap intrusion fraction 0.83827367, and maximum rim angle 64.06919°. Iris clearances over the f/3.5–f/22 stroke remain positive; wide-open clearances are at least 0.825807 mm before and 0.712227 mm after STO. Native diagnostics report zero hidden render trim.

### Phase 3 — Numerical and metadata checks

- Uniform scale: 24/source-stated 100 = 0.24. Actual EFL 24.02813583 mm; BFD 36.82281562 mm; glass track 55.77168 mm; first vertex to derived image 92.59449562 mm. Independent matrix, sequential trace and native paraxial basis agree.
- Native aperture census: f/3.499999997 at the marked f/3.5, with no rim/trace limiter.
- Declared 83° full field: exact edge chief height 21.33907105 mm, 98.5638% of the project's full-frame corner radius. The clear-chief corner diagnostic is 41.86737°; it remains outside the declared 41.5° bound. No field inflation or fake published image circle was introduced.
- 317 uniformly sampled physical-stop targets × seven signed fields × two apertures = 4,438 final reference-index rays. All aim and transmit with no clipped hits, unresolved targets or non-forward segments. Largest stop-target residual is below 1e−9 mm; intersection residuals are near machine precision. This is sampled geometric validation, not proof of continuous-pupil or radiometric behavior.
- Centroid-relative geometric RMS at the fixed paraxial plane: axial 10.649 µm at f/3.5 and 2.819 µm at f/8; 41.5° edge 193.116 µm and 31.081 µm. The large wide-open edge blur is retained as a reconstruction limit, with no invented production-performance threshold.
- Eight spherical singlets; no aspheres or specified plates. Infinity-only sentinel 1e9 m, no variable gaps, identical focus endpoints. Period ALPA 16-inch MFD is separate 0.4064 m marketing metadata. Canonical mount `alpa` and format `135-full-frame` refer to the correlated product family, not a mechanical identity proof.

### Phase 4 — Analysis and qualification scope

The analysis names the primary sources, uncertainty, the sign assumption, scaling, inferred apertures/iris, glass convention, infinity-only state and numerical limits. The title and subtitle call the model a representative R61-lineage reconstruction.

Current-main textual checks found no FR 1,214,945/R61 entry. Scale-invariant ordered R/d/nd comparison scanned 1,122 data files including this addition; 40 other files had sixteen physical surfaces. Neither the literal nor reconstructed signature matched a prior entry. STO splits were merged and the final image spacing excluded.

The available private delivery/hold/source ledgers were read and searched, including Historical SourceQueue v21, Historical Reserve Inventory v7, Current Three Final Delivery v015, Eighth Six Qualified Integration v2, Eighth B Final Qualified v2 and Summilux-R50 hold clarification. No completed R61 model was found. Recent room history treats this Angénieux item as a held sign hypothesis before the scoped approval. These are bounded custody checks, not exhaustive nested-archive proof or a claim that the private search index is current through every November 13 artifact. The parent must reconcile the live next-pack ledger before crediting the entry; no pack count or ledger was changed here.

Scoped source/geometry validation is suitable for a qualified representative handoff under the disclosed assumption. Final full-suite and browser outcomes, private custody receipts and any remaining integration checks are recorded in the accompanying validation report. No commit, push, PR, merge, publication, deployment or pack delivery occurred.

## 2026-11-15 — Deployment validation

An independent checker re-read the three 300-dpi page scans of FR 1,214,945 (front page, table page, figure) without relying on the package's own transcription. Checked on the page image: all 16 radii with their signs, all 15 axial distances, all 8 index and 8 Abbe values, the stated F = 100 and "distance frontale" 153.3, the four stated focal lengths, the figure, and the front-page bibliographic data. Radii, distances and indices were also compared numerically with the data file divided by 0.24: no mismatch.

Verdict: valid with notes. The data file is a faithful 0.24× copy of the printed table and reproduces the patent's stated values. The product link is strong: the Pignons ALPA Reflex supplement (p. 3) lists the Angénieux 24 mm f/3.5 Retrofocus with 8 air-spaced elements and 83° coverage, and its section (drawn reversed) shows four front and four rear singlets, a biconvex last element and the stop between elements 6 and 7, as in this model.

### Correction to the earlier sections: R15 is printed positive

The statements above that the source prints R15 = −289.16, and that +289.16 is an assumption or reconstruction, are wrong. The table uses two sign glyphs. Measured on the 300-dpi bitmap of page 2:

| Glyph | Bar width | Surfaces |
|---|---:|---|
| Plus (short bar, hairline vertical stroke that often drops out) | 24–27 px | R1, R2, R3, R5, R7, R8, R9, R11, R12, R14, R15 |
| Minus (long dash) | 36–40 px | R4, R6, R10, R13, R16 |

R15's bar is 25 px wide with no visible vertical stroke, the same as R14 (24 px), R7 and R8, all of which are positive and were read as positive by the package. R15 is therefore printed +289.16. Supporting evidence: read as a minus, the prescription gives EFL 253.90 and back focus 400.36 against the stated 100 and 153.3, and from that reading flipping R15 is the only single sign change that gives a usable lens (the other fifteen give EFL between −282 and +727); the patent text calls the last element "une lentille convergente"; the patent figure and the ALPA section both draw it biconvex. Nothing in the prescription is assumed or corrected.

### First-order check (patent / model, normalized units)

| Quantity | Patent | Model |
|---|---:|---:|
| Focal length | 100 | 100.117 |
| Back focus | 153.3 | 153.428 |
| Component I | −137.80 | −137.86 |
| Component II | +109.67 | +109.61 |
| Second lens | +937.60 | +937.57 |
| Third lens | +938.33 | +938.30 |

The patent prints no f-number table, field angle, apertures, stop position or close-focus data; it says only that the aperture is of the order of 1:3.5.

### Changes made

- `source.errata`: the single `unresolved` R15 entry removed. The printed sign is plus, so there is no source error to record.
- `subtitle`: clause "assumed positive R15;" removed (false).
- `catalog.specs`: chip "R15 SIGN ASSUMPTION" removed (false).
- Element 8 `role`: "Final converger; biconvex only under the disclosed R15 sign assumption." → "Final converger."
- Header comment: rewritten to state the source, scale, the sign reading and the inferred values; the wording about an authorized assumption and a separate literal transcription is gone.
- `focus.closeFocusM`: 1e9 → 1e15, the house infinity placeholder.
- `catalog.lensMounts`: `["alpa"]` → `["alpa", "exakta"]`. The Exakta Circle lens list (exaktacircle.org/length.html) carries the R61 24 mm f/3.5 for the 35 mm Exakta in 1959 and 1961. That list's "6El" entry conflicts with the ALPA leaflet's eight elements and looks like a list error.
- Float noise rounded in nine surface values (for example 54.016799999999996 → 54.0168, 1.1256000000000002 → 1.1256). No prescription value changed.
- `indexReference` kept at `"d"`. The patent heads the column nd "pour la raie D". The one recognisable glass, 1.6203/60.2, sits near SK16 (nd 1.62041, sodium-D index about 1.6203), which leans towards sodium D, but the two lines differ by about one unit in the last printed digit, which does not exceed print precision.
- Analysis: the section "Explicit R15 reconstruction assumption" replaced by "Reading of the R15 sign"; the L8 heading and text, the opening description, the reference-line sentence, the infinity placeholder value and the "literal and reconstructed" sentence corrected to match.

### Results after the changes

- Built model: EFL 24.0281 mm, f/3.500, back focus 36.8228 mm, first vertex to image 92.5945 mm, stop radius 5.3742 mm.
- Surface audit: OK, no validation errors.
- Aperture audit: within 3 % of the stated f-number; no rim, trace or iris limit.
- Image circle: 0 undersized. Field coverage: 21.34 of 21.65 mm at the declared 41.5° (99 %), corner clear at 41.9°.
- Real-ray clearance at 21.63 mm image height: no axial clipping and no blocked chief ray; the inferred 5.8 mm rear rims vignette the corner bundle by 13 %, 14 % and 25 % at surfaces 14, 15 and 16.

Open:

- Name, key, file name and subtitle still say "R61-lineage reconstruction" and "representative"; with the sign question settled this is a plain scaled transcription correlated with the Type R61.
- The 2026-11-14 sections above and several analysis passages keep the "reconstruction" wording and package terms (private ledgers, literal-patent files, custody checks).
- Glass labels read "Unmatched (… coordinate …)"; specs chips use "MODELED" and "PERIOD PRODUCT" wording.
- `patentNumber` is "FR 1,214,945" without a kind code, matching the sibling R11 file; decide the house form.
- Rear rims (surfaces 14–16) are inferred and not compared with the figure.
