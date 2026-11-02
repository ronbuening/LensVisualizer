# Audit Log - NIKON PC NIKKOR 19mm f/4E ED

Patent: JP 2017-161685 A, Example 1

## 2026-05-19 - Glass relabel audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L15 / S9, L19 / S15 | `glass` | `NBFD3 (HOYA)` | `E-FD2 (HOYA)` | Patent rows 9 and 15 list nd=1.64769, vd=33.84; E-FD2 round-trips the stored pair, while NBFD3 does not. |
| L17 / S12, L26 / S27 | `glass` | `TAFD25 (HOYA)` | `S-LAH55V (OHARA)` | Patent rows 12 and 27 list nd=1.83481, vd=42.72; S-LAH55V matches the stored pair. |
| L21 / S18 | `glass` | `S-TIM28 (OHARA)` | `S-FTM16 (OHARA)` | Patent row 18 lists nd=1.59270, vd=35.44, theta_gF=0.5926; S-FTM16 is the catalog match. |
| L23 / S21 | `glass` | `S-NSL5 (OHARA)` | `S-NSL36 (OHARA)` | Patent row 21 lists nd=1.51742, vd=52.15; S-NSL36 is the closer catalog relabel. |
| L24 / S23 | `glass` | `TAFD55 (HOYA)` | `TAFD35 (HOYA)` | Patent row 23 lists nd=1.91082, vd=35.25; TAFD35 round-trips the stored pair. |

### Phase 2 - Retained-information audit

- Checked the flagged rows against Example 1 surface data; stored nd/vd values match the patent table.
- Existing surface radii, thicknesses, variable gap notes, and asphere narrative were already aligned with Example 1 in the data and analysis files.

### Phase 3 - Spectral / metadata enrichment

- Retained existing theta_gF/APD annotations for patent-listed anomalous-dispersion rows.
- No new top-level metadata was needed; the file already records patent year, element count, group count, and focus behavior.

### Phase 4 - Analysis sync

- Updated the analysis file's element narratives and glass palette for E-FD2, S-LAH55V, S-FTM16, S-NSL36, and TAFD35.


## 2026-10-30 — Fresh patent shape, glass and partial-dispersion reinspection

Directly inspected JP2017161685A Figure 1/PDF24, Example 1 material/aspheric tables/PDF15–17, material convention paragraph0067/PDF14, θgf definitions/conditions paragraphs0043/0049/PDF10–11 and composite-coating description paragraph0062/PDF13. All 31 curved faces, four ordinary cemented interfaces and the coating interface were reviewed. The figure's original embedded image is native 300 ppi; the 600 dpi view is a 2× enlargement. Its first/last vertex span≈513 native pixels for 112.52 mm gives≈4.56 native px/mm.

The four leading concavities have real flat ends. Source cap/outer q≈.767/.758/.814/.782 for S2/S4/S6A/S8, with one-native-pixel bands ±.0103/±.0133/±.0178/±.0228 before ink ambiguity. Measured outer heights are approximately37.7/29.0/22.4/17.1 mm. Adopted clear/outer heights are26.9/36,20.5/28.8,15.8/22.3,14.2/18 mm (q=.747222/.711806/.708520/.788889). These are guarded approximations: rounded source-sized S2cap 29.5 and S4cap 22.5 trials have77.7°/80.1° rim slopes and cross-gap failures; S5A22.5 mm also exceeds the unchanged64.2° guard. S6A17.8 mm intrudes10.175359 mm into a gap allowing8.469; its exact gap-limited cap is15.888468 mm, so15.8 is adopted. All four clear caps grow relative to baseline; no clear-cap reduction is hidden in an extension.

Continuous whole compounds use Ja S9–11=13.3, Jb S12–14=12, Jd S27–29=13.3 mm. Ja13.8 and Jd14.2 trials have negative edges−.411/−.554 mm; actual contact radii13.557848/13.913832 bound their adopted heights. L25 uses11.4 on both faces below contact12.032260. S15/S16 rise to a paired10.8, S18/S19 to9, and the entire coating/body S30A/S31/S32 to15.4 mm. No opaque land is placed at a powered interface. Other concave faces retain continuous curves where no distinct source end stroke is resolved.

All 18 modeled media pairs match the printed source. Seventeen compatible coefficient curves remain selected; L28 is an intentionally unresolved coating, interpreted as resin without proof of chemistry, UV curing or supplier. The old definite UV-cure wording is removed. Five actual θgf values are preserved in tracing through ΔPgF=θgf−(.6438−.001682νd): L16 .5947→+.00358024; L18 .5737→−.00335824; L21 .5926→+.00841008; L25/L27 .5388→+.03226802. The derived decimals retain the source's four-place θ precision (about ±.00005), not eight-place measurement accuracy. Catalog C/d/F shapes remain qualified proxies. Source conditions select L16/L18 numerically; their APD flags change from patent to inferred to avoid claiming an explicit anomalous-material identification. All glass/vendor labels now name actual selected spectral proxies, and stale public S-LAH79/S-LAH55V mappings for L16/L22 are corrected to S-LAH95/S-LAH66.

Source R/d/aspheric coefficients/material pairs, stop, focus/perspective controls and tolerances are unchanged. Current public cap metrics are synchronized: S5A at 22.3 mm departure +2.168433 mm/slope 61.3761°; S6A at 15.8 mm sag 9.174303/slope 43.5581° (same-radius sphere is undefined beyond R13.901, so no false spherical-departure number); S30A at 15.4 mm departure −.585268/slope 20.8794°. Surface, image-circle screening, aperture and centered FX field checks pass (≥99% coverage). All nine actual SVG states were inspected with zero hidden trim and no detached coating wing. Shared glass suites pass 2 files/93 tests; all 33 triad media source pairs, 32 curve selections and five intended g-channel changes were checked directly; duplicate-key scan is clean.


### Extended source-circle refinement

Paragraph0077/PDF17 explicitly prints y′max = 33.0 mm. A separate 66 mm reference-circle chief-ray probe initially reached only 31.82982 mm (96.454%) with S2 = 26.5 mm; the 33 mm corner requires S2 = 26.79520 mm at 60.12151°. Both 26.8 and 26.9 mm opening trials pass the unchanged geometric guards. The adopted 26.9 mm clear cap retains the 36 mm land (q = 0.747222) and reaches 33.0 mm with all chief-ray apertures clear. No source R/d, spectrum, stop, focus/shift/tilt metadata, physical gap or tolerance changes. The ordinary FX analysis bounds are retained; this supplemental infinity chief-ray result is not a full shifted-pupil/tilt or manufacturing-coverage certification.
