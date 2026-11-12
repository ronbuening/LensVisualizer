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
- Rendered page review could not be completed: shot.sh produced no screenshot, and localhost:5173 refused the
  subsequent connection check. No server was started or stopped.

Denial: an attempted baseline copy mistakenly targeted the main checkout and was refused with "Operation not
permitted". That copy operation was stopped without retry or workaround; before-edit engine outputs were
already recorded. No state-changing git commands or prohibited full-suite commands were run.

## 2026-11-12 — Semi-diameter pass against the patent figure

Source: local `patents/RU2549915C1.pdf`, Table 1 on PDF page 5 and the sole, unnumbered optical section on
PDF page 2. All seven clear diameters were visually re-read on page 5. Native prescription scale is 1;
these are printed optical diameters, not inferred mechanical blank sizes. Every stored semi-diameter equals
the corresponding printed diameter divided by two, so no rim changes, cuts, lands or tolerance changes are
justified. The stop is derived and is not included in the seven printed diameters.

| Surface | Printed clear diameter, mm | Before sd, mm | After sd, mm | Evidence |
| --- | ---: | ---: | ---: | --- |
| 1 | 37.5 | 18.75 | 18.75 | Table 1, diameter / 2 |
| 2 | 35.2 | 17.6 | 17.6 | Table 1, diameter / 2 |
| 3 | 33.2 | 16.6 | 16.6 | Table 1, diameter / 2 |
| 4 | 23.1 | 11.55 | 11.55 | Table 1, diameter / 2 |
| 5 | 21.5 | 10.75 | 10.75 | Table 1, diameter / 2 |
| 6 | 22.4 | 11.2 | 11.2 | Table 1, diameter / 2 |
| 7 | 22.4 | 11.2 | 11.2 | Table 1, diameter / 2 |

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
