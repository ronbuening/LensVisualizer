# Qualified hidden draft audit (historical; hidden status closed 2026-11-12)

Scope: RU2549915C1 whole Table1, directly cited by the maker's named Petzval2.2/85 page; representative production-family association only. No factory-exact assertion, rescale, image refocus, cap tuning, geometry override, publication or delivery.

Primary publication copy: https://patenton.ru/patent/RU2549915C1.pdf (six pages, third-party host; page5 visually inspected). SHA256 70a46eb43088719538b94c47a48842fdff4f5299e73bfa92bddc58a74ea268a8. Maker: https://www.zenitcamera.com/archive/lenses/petzval-2-2-85.html . Patent citation is plain text, not hyperlink. Office routes returned403; provenance is not represented as an authenticated office download.

Literal seven surfaces, six thicknesses, four nD/VD pairs, seven printed light diameters and source stop topology preserved. Glass names identify source families only. The 21mm gap is split18+3 solely to encode the printed stop3mm before lens3. Fixed source imageplane101.42mm. Default optical boundaries are exactly published diameter/2. Stop size is derived from nominalf2.2; source does not print iris diameter.

Retail84.74/BF46.04/track56.2 differs from source84.01/BF43.22/track58.2. ComputedEFL84.0769806863/BFL43.2902904763 differs from source by+.0669806863/+.0702904763mm; neither residual silently repaired. No factory melt or full dispersion supplied. Infinity-only; no retail focusing travel or decorative iris modeling.

Fresh dedup before authoring: live main e3434b282271fb499a0c1865061026f56b7202e8 and11openPR heads stable, 1109main+112PR data bodies hash-verified and parsed, zero patent/name or finite-radius scaled/reversed matches. Room searches found no delivery for this model; this is scoped search evidence, not universal archive proof. See adjacent admission checkpoint for full input hashes.

Execution after cloud restart used persistent baseline747785dfd26aa191996d602382229c8ba4ea168f. Its325 optics/types/utils/math/package files match frozene343 hashes. Focused tests use actual retained TypeScript/Vite, with no repository source edits, no clone or reinstall. Older temporary e343 checkout was unavailable; this distinction must remain in claims.

Strict semantic TS: zero diagnostics. Actual data imports equal diagnostic input; native construction passes. Sparse 25pupil+separatechief test at0/8/12/16degrees is rerun from authored draft input. Rays are not integration or MTF acceptance. Edge clipping/blocked samples remain in FIELD_DIAGNOSIS.json; source imageplane retained. Full corpus/build/viewer/MTF remain unrun. Original schema-only diagnostic omission is retained in prior diagnostic checkpoint, corrected by adding display layout and a single fStop, not optics.

Independent authored-triad review is recorded in INDEPENDENT_REVIEW.json and INDEPENDENT_STRUCTURAL_CHECK.json: scoped pass for the hidden qualified draft, not final acceptance. Source, first-order, dedup and native diagnostic predecessor receipts are retained separately, not overwritten. No private archive links are embedded in the public-facing analysis.

## Deployment validation (2026-11-12)

- Source: RU 2549915 C1 (Google Patents PDF, full 6-page publication, `patents/RU2549915C1.pdf`). Seven R, six d,
  four nD/νD pairs, seven printed clear diameters and the printed BF match page 5; scale 1. EFL 84.077 vs printed 84.01,
  BF 43.290 vs 43.22.
- Sodium D kept: LZOS TK21 is 1.656798 at D vs 1.656912 at d against the printed 1.6568.
- Product: the KMZ archive page cites this patent for the Petzval 85 f/2.2 (sold as the Lomography × Zenit New
  Petzval 85; 4 elements / 3 groups, 1 m MFD, Canon EF and Nikon F). The maker section
  (`https://www.zenitcamera.com/archive/lenses/petzval-2-2-85-lens.gif`) matches the topology. Retail EFL/BF/track
  (84.74 / 46.04 / 56.2 mm) differ from the patent example: family match, not the factory prescription.
- Integration fixes:
  - Maker "Zenit" → "KMZ" (folder `kmz/`); assignee → "PJSC Krasnogorsky Zavod named after S. A. Zverev" (registry form;
    the patent prints the OJSC name); patent number → `RU 2549915 C1`.
  - Added `lensMounts` canon-ef / nikon-f and `catalog.closeFocusM` 1 m; focus sentinel 1e15.
- The printed clear diameters are kept: they trim the axial beam to about f/2.24, within the audit's 3 %.

## 2026-11-12 — Cleanup and wording pass

The Table 1 page and patent figure in the preceding deployment review were re-read: seven optical radii, six
spacings, four nD/νD pairs, seven clear diameters and the printed 43.22 mm back focus agree with the data. There
are no aspheric coefficients or variable gaps. The stop remains 3 mm before L3, splitting the 21 mm gap into
18 + 3 mm; its radius is derived rather than printed. The KMZ archive section agrees with the front cemented
doublet, negative rear singlet and symmetric positive rear singlet. The patent dimensions are unscaled.

Public fields now describe the patent and production-family association in plain language. The subtitle is
"RU 2549915 C1, sole example — Lomography × Zenit New Petzval 85 family". Specs give 4 elements / 3 groups,
all-spherical construction, f/2.2–16 Waterhouse stops, rack-and-pinion focus and 1 m close focus, following
[Lomography's published specifications](https://www.lomography.com/magazine/312485-lomopedia-new-petzval-lens-85).
The aperture list now records endpoints 2.2 and 16; decorative shapes are not modeled. The focus description
states infinity-only scope and the production mechanism; closeFocusM remains the 1e15 placeholder, with catalog
minimum focus still 1 m. Existing Canon EF/Nikon F mounts, counts, name, key and visibility are retained.
Catalog design focal length remains the patent's stated 84.01 mm, consistent with the stated-design convention
in the neighbouring Zenitar files. The example label changes from "Whole Table 1" to "Sole example", with null
id as required for an unnumbered example. Element types follow the surface signs; roles describe position and
power. L1 and L2 both carry cemented C1, and doublets includes C1 from surfaces 1 to 3. No apd tags are added:
the cited maker sources publish no special-dispersion positions.

Glass relabels retain all printed coordinates and sodium-D references. Each new label resolves with trylabel;
the differences below are catalog minus patent, evaluated at sodium D rather than helium d:

- L1/L4: "TK21 literal patent nD/vD; no catalog substitution" → "TK21 (LZOS)";
  ΔnD = −0.000002108, ΔνD = +0.012628.
- L2: "TF5 literal patent nD/vD; no catalog substitution" → "SF4 (Schott; patent TF5)";
  ΔnD = −0.000035930, ΔνD = +0.050839. The historical Schott SF4 row meets the exact-row thresholds.
- L3: "LF5 literal patent nD/vD; no catalog substitution" → "QF3 (CDGM; patent LF5)";
  ΔnD = +0.000003685, ΔνD = −0.011868. The catalog's Schott LF5 row does not match this Soviet LF5.

The catalog curves are dispersion equivalents, not evidence of production suppliers or melts. No copied
nC/nF/ng fields were present. The analysis now cites Google Patents rather than the former third-party PDF,
identifies KMZ manufacture and Lomography × Zenit branding, corrects the aperture/dispersion descriptions,
and replaces process, hidden-draft and sparse-ray passages with optical limits. The historical log and dated
deployment section above are retained; hidden status is closed in the title.

Before/after engine values are identical: EFL 84.07698068633528 mm; FOPEN 2.2; halfField 16°; stop radius
11.41240538402449 mm; BFD 43.2903 mm (probe precision); first-to-last vertex track 58.2 mm; printed-image
total track 101.42 mm. Both probe endpoints are unchanged: t = 0 last gap 43.2200 mm and total track 101.4200 mm;
t = 1 last gap 43.2903 mm and total track 101.4903 mm, object at infinity. No finite-focus state is introduced.
The patent EFL/BF are 84.01/43.22 mm; residuals remain +0.06698069/+0.07029048 mm. Surface audit is OK;
aperture audit reports one station within 3 %, zero rim/trace/iris failures; field coverage reaches ≥99 % with
zero unsolved stations. The separate clear-aperture probe still flags axial clipping at surfaces 1–3 and
strong peripheral losses; its real marginal construction gives a different stop radius from the engine's
paraxial stop, so it is not an alternative authored stop size. Prettier is skipped per the addendum.

Open:

- Retail EFL/BF/vertex track 84.74/46.04/56.2 mm differ from patent 84.01/43.22/58.2 mm; factory identity remains
  unproven despite the maker's explicit patent citation.
- Printed clear diameters limit the axial beam to about f/2.24 and cause heavy peripheral vignetting. Rims are
  unchanged; no throughput or measured relative-illumination claim is made.
- At 16° the chief reaches 24.690 mm rather than the printed 21.63 mm image height, which occurs near 14.12°.
- No close-focus spacings or travel law are printed; the production 1 m state is not modeled. Decorative
  Waterhouse insert shapes are omitted.
- Factory melt dispersion and the patent's 435–656 nm correction and aberration claims remain unconfirmed.
- Closed 2026-11-12: the second review inspected the coordinator's current page and all four inspector shots.
  The earlier shot.sh failure and localhost:5173 refusal did not prevent that review; no server was started or stopped.

Denial: an attempted baseline copy mistakenly targeted the main checkout and was refused with "Operation not
permitted". That copy operation was stopped without retry or workaround; before-edit engine outputs were
already recorded. No state-changing git commands or prohibited full-suite commands were run.

## 2026-11-12 — Semi-diameter pass against the patent figure

Source: local `patents/RU2549915C1.pdf`, Table 1 on PDF page 5 and the sole, unnumbered optical section on
PDF page 2. All seven clear diameters were visually re-read on page 5. Native prescription scale is 1;
these are printed optical diameters, not inferred mechanical blank sizes. Every stored semi-diameter equals
the corresponding printed diameter divided by two, so no rim changes, cuts, lands or tolerance changes are
justified. The stop is derived and is not included in the seven printed diameters.

| Surface | Printed clear diameter, mm | Before sd, mm | After sd, mm | Evidence              |
| ------- | -------------------------: | ------------: | -----------: | --------------------- |
| 1       |                       37.5 |         18.75 |        18.75 | Table 1, diameter / 2 |
| 2       |                       35.2 |          17.6 |         17.6 | Table 1, diameter / 2 |
| 3       |                       33.2 |          16.6 |         16.6 | Table 1, diameter / 2 |
| 4       |                       23.1 |         11.55 |        11.55 | Table 1, diameter / 2 |
| 5       |                       21.5 |         10.75 |        10.75 | Table 1, diameter / 2 |
| 6       |                       22.4 |          11.2 |         11.2 | Table 1, diameter / 2 |
| 7       |                       22.4 |          11.2 |         11.2 | Table 1, diameter / 2 |

At 600 dpi the optical axis is near page y = 967 px. Near-axis ink-run centres for surfaces 1, 3 and 7
are approximately x = 1776.5, 2065.5 and 2784.5 px. The full vertex span gives 1008 / 58.2 = 17.3196 px/mm;
independent front and rear spans give 289 / 17 = 17.0000 and 719 / 41.2 = 17.4515 px/mm. Radial ink heights
are approximately 337–338 px for the front doublet and 220–221 px for the rear singlets. At the full-span
scale these correspond to about 19.5 and 12.7–12.8 mm. The section draws common heights within the front
doublet and across the rear singlets, whereas Table 1 explicitly prints unequal clear diameters. Thus the
figure is a topology and misreading check, not a reason to replace the authoritative printed apertures.
Leader lines, hatch marks and stop housing were excluded from the rim readings.

The current and saved baseline surface arrays are identical. Before/after engine values are EFL
84.07698068633528 / 84.07698068633528 mm, half-field 16 / 16 degrees, nominal FOPEN 2.2 / 2.2 and physical
stop radius 11.41240538402449 / 11.41240538402449 mm. The engine's format-corner field is 14.1332393 degrees;
the corner chief is clear, with modeled height 21.6499396 mm against the 21.65 mm format corner
(99.99972% coverage). Image-circle audit finds zero undersized surfaces. Surface audit reports
“OK — no validation errors”. Aperture audit is within its standard 3% tolerance, with zero flagged rim,
trace or iris stations. With zero reporting threshold, its traced value is f/2.2031774, +0.14443%, limited
by surface 1; this is not a failed nominal-aperture check.

The independent clear-aperture probe at printed Y = 21.63 mm solves 14.12 degrees. It reports axial
heights 19.108, 17.951 and 16.901 mm at surfaces 1–3, exceeding their printed rims by approximately
0.358, 0.351 and 0.301 mm. That probe solves a real marginal stop radius of 11.623 mm rather than the
engine's paraxial-derived 11.412405 mm; its flags must not be interpreted as permission to enlarge
published apertures. The simple EFL / 37.5 mm front-clear-diameter ratio is approximately f/2.242,
distinct from the engine aperture audit's stop-relative result above. No surface blocks the corner chief.
At the stated 16-degree semi-field, the probe still reaches 24.690 mm and reports no chief-ray block.
Its upper unvignetted marginal bundle has no solution; heavy peripheral clipping remains a limitation.

Full-pupil rim-cost comparison with the saved starting rims, including leave-one-out evaluation, gives
identical baseline/current/final curves. At sampled fields 0.0, 2.4, 4.7, 7.1, 9.4, 11.8 and 14.1 degrees,
geometric illumination is respectively 99.5, 93.6, 82.1, 68.4, 53.8, 38.7 and 23.8%. Thus full-frame-corner
illumination is 23.8% before and 23.8% after, with zero-point loss at every sampled field. This is simulated
geometric pupil transmission, not measured radiometric illumination. There are no changed rims to restore.

The matched-scale model/patent comparison was rendered and viewed at
`/private/tmp/claude-501/-Users-ronbuening--claude-spares-spare-JJvsUM/5d6b978d-236f-4b6b-95b4-43ea08b0f623/scratchpad/sd/petzval85/overlay.png`.
Black current outlines coincide with the blue baseline. The front cemented pair, separated biconcave L3
and positive symmetric L4 agree with the patent topology; source-table apertures account for the sloping
front-doublet and L3 edge joins instead of the schematic square joins. This is an infinity-state model
sketch, not a live-page check; the coordinator retains the page review. No finite-focus or zoom states
are supplied by this prescription.

The existing local maker image `v-petzval85/diagrams/petzval-2-2-85-lens.gif` was also viewed. It agrees
on four elements in three groups, the front L1/L2 cemented pair and separated L3/L4. Its square-ended
schematic groups do not establish individual clear diameters or exact production proportions. No
aspherical or special-dispersion positions are identified; all four modeled elements are spherical.

Page 1 names Vladimir Alexandrovich Bogdankov, Artem Andreevich Timirev and Sergey Ivanovich Shcheglov;
the holder is OJSC Krasnogorsky Zavod im. S. A. Zvereva, publication RU 2549915 C1, 10 May 2015
(application 18 December 2013). The data's PJSC assignee is the existing canonical registry form;
the historical OJSC attribution is already retained in the analysis. No new name or metadata issue was
found. Retail/patent dimensional differences, the printed field/image-height discrepancy, unavailable
close-focus spacings and qualified dispersion/production identity remain open as recorded above.

Only the data header's semi-diameter source note and this audit record needed edits; the analysis already
describes the retained printed rims. No sandbox refusal occurred during this semi-diameter pass; the
earlier cleanup copy refusal recorded above is historical. No browser, server, full-suite command or
state-changing git operation was used.

## 2026-11-12 — Second review: diagram, labels and movement

Compared the coordinator's current `shots/petzval85/page.png` and `el-1.png` through `el-4.png` with the local
RU 2549915 C1 publication: page 2 optical section, page 5 Table 1, page 1 bibliography and page 6 aberration
table. Re-viewed the SD pass's matched-scale `sd/petzval85/overlay.png`. The earlier maker-diagram comparison
is the evidence for four elements in three groups, the front cemented doublet and no identified special-glass
or aspherical positions; no maker image was downloaded or viewed in this review.

No rim change is warranted. Independently re-read page 5 clear diameters 37.5/35.2/33.2/23.1/21.5/22.4/22.4 mm:
all seven stored values are exactly half. The page 2 schematic uses square common outer heights, while the
printed optical diameters vary. The current page consequently shows sloping front-doublet/L3 edge joins;
those are not transcription errors and do not justify enlarging the printed optical apertures. The complete
surface array equals the pre-SD package baseline. There are no cuts, lands or policy overrides. Full-pupil
rimcost with leave-one-out gives 0.0-point worst loss against that baseline at every sample; the format-corner
geometric transmission remains 23.8% before and after (on-axis 99.5%). These are simulated pupil-transmission
values, not measured radiometric illumination.

| Field                   | Before                                 | After                                                            | Evidence and verdict                                                                                       |
| ----------------------- | -------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| L1 element focal length | absent (`FL = —`)                      | +41.76 mm                                                        | Isolated thick-lens calculation in air at printed nD, R1/R2 and 13 mm thickness                            |
| L2 element focal length | absent (`FL = —`)                      | −88.12 mm                                                        | Same calculation, R2/flat and 4 mm thickness                                                               |
| L3 element focal length | absent (`FL = —`)                      | −27.81 mm                                                        | Same calculation, R4/R5 and 8 mm thickness                                                                 |
| L4 element focal length | absent (`FL = —`)                      | +33.49 mm                                                        | Same calculation, R6/R7 and 8.8 mm thickness                                                               |
| L2 glass wording        | SF4 (Schott catalog equivalent of TF5) | SF4 (Schott catalog equivalent; production supplier unspecified) | Exact same catalog row; standard supplier-qualified wording. Patent TF5 remains identified in the analysis |
| L3 glass wording        | QF3 (CDGM catalog equivalent of LF5)   | QF3 (CDGM catalog equivalent; production supplier unspecified)   | Exact same catalog row; standard supplier-qualified wording. Patent LF5 remains identified in the analysis |

Element focal lengths use the isolated thick-lens relation, not the individual powers in the cemented assembly.
Unrounded results are 41.75870448, −88.11920530, −27.80669519 and 33.48777388 mm. The runtime element records
contain the four rounded values above. The analysis now explains the convention. R/d/nD/νD, aperture and stop
fields are unchanged.

Labels, shapes and roles are correct: patent lenses 1–4 correspond to model L1–L4 and page IDs 1–4; the R signs
give biconvex, concave/flat, biconcave and symmetric biconvex respectively. C1 brackets surfaces 1–3, and only
L1/L2 are cemented. The stop at z = 35 mm is 3 mm before L3, with the 21 mm gap split 18 + 3 mm. The patent
describes two components but assigns no group letters; no invented group brackets were added. All surfaces
are spherical or plane; no A suffixes, asphere coefficients or APD tags are justified. The current shots show
the bracket, stop and all inspector roles without overlap or a false triplet.

Movement verdict: C1 (L1/L2), L3 and L4 each have 0 mm authored zoom travel and 0 mm authored focus travel.
There is no zoom, no variable gap and no focus keyframe table to reverse. The fixed vertex positions are
0/13/17/35 (stop)/38/46/49.4/58.2 mm. The infinity-only sentinel remains 1e15 m and the current focus control
is disabled at infinity, labeled "Not modeled". The probe's synthetic t = 1 endpoint changes only its image
offset from 43.2200 to 43.2903 mm; it is not authored lens motion or a finite-focus state. The cited
[Lomography specifications](https://www.lomography.com/magazine/312485-lomopedia-new-petzval-lens-85), re-read
online, explicitly give "Gear rack focusing" and closest focus 1 m. Thus the existing rack-and-pinion wording
is supported; no focusing-group motion or travel law is asserted.

Glasscheck and trylabel resolve every element. Their displayed d-line summaries must not be mistaken for
the patent's sodium-D coordinates. Direct coefficient evaluation at D gives the following catalog-minus-source
residuals; all satisfy |ΔnD| ≤ 0.0001 and |ΔνD| ≤ 0.15:

| Elements | Catalog row  |          ΔnD |       ΔνD |
| -------- | ------------ | -----------: | --------: |
| L1/L4    | TK21 (LZOS)  | −0.000002108 | +0.012628 |
| L2       | SF4 (Schott) | −0.000035930 | +0.050839 |
| L3       | QF3 (CDGM)   | +0.000003685 | −0.011868 |

TK21 and QF3 are the only existing rows inside that D-coordinate window for their pairs. L2 also admits
S-TIH4, E-FD4, H-ZF6 and E-FD4L; these do not establish Soviet production identity or a better source match
than the retained legacy SF4 proxy. No unresolved element or missing catalog-row proposal remains. Page 5
names TK21/TF5/LF5/TK21 and provides only nD/νD, not extra line indices or partial dispersion. There is one
numerical example; only TK21 recurs within it. Runtime dispersion is `sellmeier` for every glass and `air`
for the other media, with no constant-index medium. No copied line indices are present. The patent prints
no C/d/F/g focus plots; page 6 contains a single-wavelength (546.07 nm) aberration table, not chromatic curves.
The claimed 435–656 nm correction and the aberration table remain unreproduced; catalog completeness is not
confirmation of production colour correction.

Page 1 names Bogdankov, Timirev and Shcheglov, application 18 December 2013 and publication 10 May 2015.
Its holder is OJSC Krasnogorsky Zavod im. S. A. Zvereva. The authored PJSC Krasnogorsky Zavod named after
S. A. Zverev exactly matches the two other KMZ data files' canonical assignee. The analysis already preserves
the historical OJSC name; no consolidation or source-field edit is proposed.

Final surface audit reports "OK — no validation errors"; aperture audit has one station within 3% and zero
rim/trace/iris failures; image-circle audit has zero undersized/skipped; field coverage reaches the clear
21.65 mm corner at 14.1 degrees. Engine values remain EFL 84.07698068633528 mm, half-field 16 degrees,
nominal FOPEN 2.2 and stop radius 11.41240538402449 mm, before and after. The separate clearap probe needs
an explicit `--scan 75`: its default range includes the un-authored STO sd and otherwise becomes NaN.
With that supported option it solves Y = 21.63 mm at 14.12 degrees; no corner chief is blocked. Its real
marginal stop radius 11.623 mm still yields the known S1–S3 axial flags, unlike the engine's paraxial-derived
stop; the printed apertures remain authoritative. At 16 degrees it reaches 24.690 mm. The upper unvignetted
bundle has no solution, consistent with the existing peripheral-vignetting limitation.

The final outline was rendered and viewed at
`/private/tmp/claude-501/-Users-ronbuening--claude-spares-spare-JJvsUM/5d6b978d-236f-4b6b-95b4-43ea08b0f623/scratchpad/sd/petzval85/rv-final.png`;
current and baseline outlines coincide. The re-checked patent/model side-by-side is
`/private/tmp/claude-501/-Users-ronbuening--claude-spares-spare-JJvsUM/5d6b978d-236f-4b6b-95b4-43ea08b0f623/scratchpad/sd/petzval85/overlay.png`.
The supplied browser shots precede the text/focal-length edits; post-edit browser inspection remains for the
coordinator's re-shoot. No browser, server, full-suite command, changelog edit or git mutation was used, and
no sandbox refusal occurred in this review. The earlier cleanup refusal above is historical.

Open: factory identity remains unproven because retail EFL/BF/track differ from the patent. Page 5's printed
84.01/43.22 mm values retain the known +0.06698/+0.07029 mm paraxial residuals. The 16-degree/21.63 mm
field discrepancy, printed-aperture axial clipping, peripheral vignetting, absent near-focus spacings,
decorative Waterhouse shapes and unconfirmed factory dispersion remain as qualified in the analysis.

## 2026-11-12 — Coordinator follow-up to the second review

The patent names the L2 glass as GOST TF5. A catalog row for it was added: LZOS TF5, a formula-3 least-squares fit to the
LZOS index table mirrored by refractiveindex.info (`specs/lzos/optical/TF5.yml`), 23 wavelengths over 365–1014 nm, maximum
index error 5.9e-6. The fit gives nD 1.754998 and νD 27.52 against the printed 1.755/27.52. L2 changed from
`SF4 (Schott catalog equivalent; production supplier unspecified)` to `TF5 (LZOS)`, the form L1/L4 use for TK21. L3's
patent glass, GOST LF5, matches the LZOS table at nD 1.574900 / νD 41.30. It cannot get its own row because the catalog's `LF5`
name belongs to the different Schott glass (1.58144/40.85). L3 therefore keeps CDGM QF3, now labelled
`QF3 (CDGM catalog equivalent of GOST LF5; supplier unconfirmed)`, the form the Zenitars use. The Zenitar 35 and 50 TF5
elements, which named `H-ZF6` first, were afterwards relabelled `TF5 (LZOS)` as well (their audit logs, same date).

