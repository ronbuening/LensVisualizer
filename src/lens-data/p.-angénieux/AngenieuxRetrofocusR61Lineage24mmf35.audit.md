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
