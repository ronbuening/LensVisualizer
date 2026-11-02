# Audit Log - Sigma APO Macro 180mm F2.8 EX DG OS HSM

Patent: JP 2013-104994 A, Numerical Example 2

## 2026-06-23 - Semi-diameter raw-geometry audit

### SD corrections

| Surface | Before | After | Justification                                                                                         |
| ------- | -----: | ----: | ----------------------------------------------------------------------------------------------------- |
| S7      |   37.0 |  36.0 | Raw extended edge check showed L4 S7/S8 self-crossing by 0.440 mm at the larger authored endpoint.    |
| S18     |   21.0 |  20.2 | Raw extended edge check showed L11 S18/S19 self-crossing by 0.675 mm at the larger authored endpoint. |

### Notes

- JP 2013-104994 A Example 2 does not publish a clear-aperture / effective-radius table.
- Temporary Sigma SD audit after the edits reported 0/27 Sigma files with raw SD/render issues.

## 2026-08-07 - Line-index ambiguity audit

- Rechecked Numerical Example 2's glass-index table in the ignored local `patents/JP2013104994A.pdf`.
- Relabeled L11 from the ambiguous `BK7 / S-BSL7` class to N-BK7 as a catalog equivalent, without asserting Sigma's
  production supplier. The patent gives nC/nF/ng = 1.51432/1.52237/1.52667; N-BK7 reproduces all three within
  1.5e-5 maximum error, while S-BSL7 differs by approximately 4.65e-4.
- The complete patent line indices remain the runtime source of truth and bypass catalog dispersion for this element.

## 2026-10-30 — Fresh original outline and glass reinspection

- Direct source: `patents/JP2013104994A.pdf`, NumericalExample2. Figure11/PDF25 inspected at600dpi; source d-line table PDF15, first-group spectral/focus table PDF16, definitions¶0051/PDF12 and partial-balance¶0041–42/PDF11 directly viewed. Paired Figure12–14 confirm the selected2.92/4.62/5.34 stations.
- Native embedded figure≈400dpi; first-to-last vertices span≈1089px at600dpi for187.458mm, or≈3.87nativepx/mm. Only optical strokes measured; no bracket/ray/leader contributes height. Each convex/concave face and cement boundary inspected.
- Source outer silhouettes support outward continuous caps through the sequence44.5/43.2/40.8mm front singlets;36.1mm first doublet;32.5/31mm G2;23mm G3 singlet;17/16.5mm G4;15mm stabilizer rear of doublet;17/19mm G6. Five independently drawn air-facing lands: S9 cap34→outer36.1, S11 26.5→32.5, S14 26→31, S22 15.5→17, S29 12.2→14.5mm. These preserve prior clear caps rather than infer inward trims.
- Full schematic height conflicts are retained explicitly: S7/S8 body38mm crosses by1.050mm;36.3 crosses by.025mm, adopted36.1 remains positive. S18/S19 common22mm crosses L33 by1.757mm; interface20.2 remains and S19 grows to20.2. No opaque cement-interface land is invented. S27 continuous15mm passes the final geometry/actualSVG checks (the trial14.2+land15 is unnecessary and not authored). Weak end discrepancies do not justify extra cuts. Source outer rims are illustrative, not a physical86mm filter clear-aperture measurement.
- All19 nd/νd pairs exactly confirmed. Source PDF16 lists C/F/g and θ only for first5 elements: exact15 indices and5 rounded θ deviations retained. Source d587.6/C656.3/F486.1/g435.8nm convention is explicit. L33's unsourced C/F/g/dPgF copies removed (4fields). Complete printed first-group indices retain runtime precedence over rounded θ. Printed5decimal indices and3decimal θ need not reproduce each other beyond rounding precision.
- Group-average θ balance does not individually identify anomalous glass. Ordinary L11/L14/L15 badges changed tofalse; correlated FLD positions L12/L13 remain inferred, as L33 already was. L33 has no individual spectral anchor. All catalog families remain qualified current proxies, supplier/melt unproved.
- Final sampled counts:54018retained/0lost/708gained/89679bothblocked.

### Verification and limits

- Fresh direct original figure/table views; all source index/Abbe pairs independently compared with the original table. All 19 physical glasses resolve to qualified coefficient curves; no resin, cement layer or plate counted as extra glass. Source R/d, asphere coefficients, stops, focus/zoom/aperture controls and tolerances are unchanged.
- Focused surface/image-circle/field/aperture checks pass for all3 records; source-format field coverage ≥99%, design-aperture errors within3%. Full shared cut guards report no errors; no new inward cap or numeric inferred cut exists.
- Actual buildLens/computeElementShapes nine-state SVG for each lens was rasterized and inspected: connected compounds, no renderer trim. Exact d-line before/after collimated sampling uses144405 rays/lens across focus0/.5/1 and fields0/.25/.5/.75/1; counts are samples, not flux or source-certified finite-object performance. No old transmitted ray is lost. Published finite focus geometry is retained and checked in the nine-state layouts.
- Existing dispersion/glass-resolution/partial-line suites:3files/94tests pass. No new catalog row, tolerance waiver, hidden clipping or production-supplier assertion.


## 2026-10-31 — Source-vector catalog follow-up

Exact local original JP 2013-104994 A, Numerical Example 2, paragraph 0062: prescription PDF/printed p15 and first-five-element spectral table p16. Paragraph 0051 p12 explicitly names d587.6/C656.3/F486.1/g435.8nm, and paragraphs 0041–42 p11 define θgF=(ng−nF)/(nF−nC) and a group-average balance. The source table prints absolute θgF values0.534/0.533/0.533/0.536/0.567, not five directly published ΔPgF deviations. Existing stored dPgF values are rounded conversions using the model normal line0.6438−0.001682νd. All those numeric fields remain unchanged. The actual C/F/g-derived ratios for the targeted L11/L14/L15 are0.534161490683/0.536117381490/0.566953006569, whereas stored-deviation reconstruction gives0.5340156/0.5360060/0.56699214. The complete indices remain the tracing evidence; do not rank substitutes against the reconstructed values alone.

L11 now uses BSC7 as a qualified full-spectrum proxy. Maximum anchored C/d/F/g residual falls from14.55246×10⁻⁶ for N-BK7 to1.50061×10⁻⁶; RMS falls from8.00392×10⁻⁶ to0.83081×10⁻⁶. Source F−C span error improves from+0.048975% to+0.000433%. The gain exceeds the source's five-decimal half-rounding unit5×10⁻⁶ and the new vector fits all printed line bins. The old August7 conclusion favoring N-BK7 over S-BSL7 remains dated history; the current BSC7 evidence is a further qualified comparison, not proof of historical HOYA supply.

L15 now uses NBFD13 as a qualified full-spectrum proxy. Maximum anchored residual falls from53.94707×10⁻⁶ for M-NBFD130 to6.21800×10⁻⁶; RMS falls from27.20060×10⁻⁶ to4.32760×10⁻⁶. The remaining residual means this is approximate, not a source melt identification. P-LASF47 has closer raw θ but worsens the maximum line residual to109.38761×10⁻⁶ and F−C span error to−0.408892%; it is rejected. L63 shares nd/νd but has no individual published C/F/g or θ row, so its existing M-NBFD130 proxy is retained rather than silently importing L15's measured spectrum or a manufacturing claim.

L14 keeps PCD51. M-PCD51, Q-PSKH4S and J-PSKH4 improve a scalar θ ranking but worsen the complete anchored maximum residual from7.45277×10⁻⁶ to38.50003/20.36952/14.95814×10⁻⁶. A smaller catalog index difference or partial-ratio difference is insufficient against the full available source vector.

All fifteen genuine first-group C/F/g values, all five rounded source partial conversions, all nineteen nd/νd pairs and every APD flag stay unchanged. Both new labels are numerical proxies only; source chemistry, historical supplier, melt and forming process remain unestablished. Complete line-index tracing gives exactly the same R/G/B/V channels before/after. Figure 11 on PDF p25 is the native 1058×532 optical bitmap at about 400 ppi (not the neighboring aberration images). Only the relevant first singlet and L14/L15 cemented interface were reinspected; no rim, land, bonded fill or curvature is changed. The completed 2026-10-30 whole-lens shape review and actual June23/August7 dates remain reused.

This is a scoped source/catalog assignment follow-up, not a new whole-lens shape review. Source reference/table pages were rendered at180dpi, separately from native figure pixels. No upsampled figure detail is treated as new evidence. The preserved production-correlation and sampled-runtime limits remain separate from source fidelity. No shared catalog row, tolerance, test or engine change is introduced.
