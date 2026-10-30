# Audit Log - Nikon AI-S Nikkor 50mm f/1.2

Patent: US 4,621,909, Example 3 / Table 3

## 2026-06-24 - Patent glass and retained-data audit

### Phase 1 - Glass review

- Rechecked Table 3 against the current data file. No data changes were made in this pass.
- Retained L1 `Unmatched Nikon/Hikari lanthanum glass (797/455; J-LASF017 / TAF2 class)`. It is a high-index lanthanum class, but no exact coefficient-backed public catalog entry was verified for the patent pair.
- Retained L2 `Unmatched lanthanum dense flint (796/410; closest J-LASF02 / S-LAH52 class)` for the same reason.
- Retained the existing catalog/class labels for the remaining rows: `J-SF1 / E-FD1L`, `J-SF4 / N-SF4`, `J-LASF016 / TAF1`, and `S-LAM60 / J-LAF010 / NBF1`.

### Phase 2 - Geometry and SD review

- Confirmed the surface data and the three-unit floating short-distance variables match the patent model.
- The patent does not publish clear apertures. The current SDs remain estimates from the f/1.2 entrance pupil, 52 mm filter constraint, stop region, and rear group geometry.
- Retained the existing semi-diameters. They widen through the fast front positive pair, tighten around the stop, and remain plausible against the patent drawing.

### Phase 3 - Spectral / APD review

- The patent gives only `nd` and `vd`. No ED/APD claim, partial-dispersion data, line-index table, or aspherical surface data was found.
- No APD flags were added.

## 2026-08-21 — Near/close glass-candidate review

- Rechecked US 4,621,909 and assigned NBFD2 as a supplier-neutral spectral proxy for L2's `796410` class.
- The proxy is inside the existing catalog tolerance; no prescription coordinate or geometry changed.

## 2026-10-30 — Fresh F-mount source, rim, and glass reinspection

- Directly inspected original `patents/US4621909.pdf`: common architectural Figure1 PDF p.2 complete 600 dpi crop `/tmp/fb10-50-600.png` and stop detail; third-embodiment Table3 PDF p.11, plus source construction/definition text pp.9–10. Freshly checked all **7 physical n/ν pairs**, f/1.2, stop8.7 mm aheadr7 and full published floating variables: all source values retained. Figure1 represents the common construction, not a separately dimensioned III diagram. Its architectural first/last-vertex normalization to III’s54.116 mm gives≈15.2working/7.6native px/mm (300dpi original); exact clear diameters are unprinted. No explicit table wavelength, C/F/g, θgF, ED/APD claim or named glass supplier is supplied; stored d-line interpretation is coordinate-based.
- Fresh aperture audit confirms the old live caps already clipped sourcef/1.2 to aboutf/1.33 at S5. Applied only the indicated continuous cap floors **S5 15.8→17.8, S8 17.8→19.2, S9 17.8→19.5, S10 18.7→20.8, S11 18.9→21.1 mm** (maximum 12.7%). These are inferred minima from the stated beam, not printed source diameters. The source curves are continuous on those faces; no opaque ceiling is substituted. Recomputed cut guards on this final opened prescription, rather than relying on the formerly clipped beam. Parent approved this source-aperture floor scope after reviewing the concrete trial.
- The final representation uses **S6 original clear14.7 mm +rimExtensionSd17.8** and **S7 original clear14.7 mm +rimExtensionSd19.2**. Both are source-visible concave end lands, with complete outer heights anchored to the opened continuous front/interface floors; no inward optical cap change is retained. Common-figure cap shares are approximately q0.857±0.013 atS6 (native edge≈151px) andq0.878±0.013 atS7 (edge≈148px); these architectural ratios are recorded separately from adopted14.7/17.8=0.825843 and14.7/19.2=0.765625. A deeper trial using depth8.70 mm at both caps, including the explicit Table3 stop plane atS7, passes canonical/full-beam checks but incurs renderer cross-gap trimming: combined sag17.4 exceeds0.9×17.6=15.84 mm. Rejected those numeric cuts, rather than hiding trimming or weakening display/physical tolerances. Retained original caps give depths7.818813151/8.004738024 and combined15.823551175 mm, so the full lands draw untrimmed. The source-common-figure versus third-embodiment cap mismatch is an explicit modeling limitation.
- A diagnostic copy of the exact complete beam-screen/refinement routine checked the final opened prescription at those retained clear caps: S6 reach**14.619235867 mm**, focus1/field0.375268419°, clearance0.080764133 mm; S7 reach**14.498919589 mm**, focus0.8/field0.000222579°, clearance0.201080411 mm. Required margin0.05 mm at both, zero untraced fields. Evidence `/tmp/fb10-50-beam-final.log`. No rimCutDepthSource bypass flag, new numerical trim, stop-offset change, or fake source diameter is used. All source R/d, cemented surface radii and control tables remain unchanged.
- Current compatible coefficient coverage **7/7**. L1 now has a qualified nonidentical J-LASF017 proxy (1.79500/45.31 versus 1.79668/45.5), replacing a suppressing unmatched annotation; L2’s actual NBFD2 proxy (about 1.797199/41.144 versus 1.79631/41.0) replaces the stale public J-LASF02 row. TAF1 L5/L6 and NBF1 L7 remain nonidentical proxy coordinates with suppliers/melts unasserted. No catalog-only line indices or numerical dispersion overrides added. Public glass/aperture/shape caveats synchronized.
- Actual verification: focused surface and image-circle audits pass all three, zero undersized/skipped. Aperture6/6 source stations within3%, zero rim/iris/trace failures after final50mm floor changes; field6/6≥99%, zero unsolved/skipped. Both zoom inferred cuts pass the complete beam guard; both 50mm retained-cap extensions clear the final explicit beam check. Actual native SVGs inspected at nine focus/zoom controls each (27 views), zero renderer trims; every enlarged compound remains connected, without detached wings. Current resolver and `assertCatalogConsistent` pass32/32 physical-element curves. No shared engine/catalog/test, tolerances, global reports, or root files changed.
