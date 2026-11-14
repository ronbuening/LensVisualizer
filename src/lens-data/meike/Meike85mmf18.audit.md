# Meike85 source audit

Primary table and Figure1 were inspected as pixels. All19literal rows are preserved in source_packet.json. Source-format merging removes rows6,11,15 only as coincident zero-air duplicate interfaces. Aperture units are a disclosed diameter interpretation, with shared clear apertures taking min(36.97,37.30) and min(28.42,29.00). No radii, thicknesses, materials, source image-plane distance, or global checks are altered. Zero conics become ordinary spherical surfaces. No cover plate or finite-focus motion is invented.

Source nominalf/1.8 implies a stop0.861% smaller than printed29.75 under catalog-based paraxial computation. Conversely, diameter-derivedf/1.784507524 rounds tof/1.8, so the numerical difference does not by itself prove a source contradiction. Production draft follows source nominalf/1.8 because the engine's ordinary-prime contract derives its stop; diameter-derivedf/1.784507524 is separately tested. The source plane is deliberately retained despite paraxial and MTF discrepancy.

As delivered, the geometry passed the default 90 % gap-sag rules with no hidden trim; strong peripheral clipping at the printed rims was kept. Catalog dispersion is not factory or melt data. Integration: closed, integrated on 2026-11-09 after the deployment validation below.

## 2026-11-09 — Deployment validation

Independent check against CN 217606166 U (PDF p. 7, para. 0034): 19 rows of R, d, glass and 孔径 agree; the three
zero-air rows are merged as cemented joins, as the text says. Engine EFL 85.645 against the printed nominal f = 85
(no wavelength reaches 85.0, so the 85 is nominal). Claim values φ9/φ12 and φU3/φU1 reproduce. Front page: 深圳市慧天影视器材有限公司,
inventor Li Yunhong, granted 2022-10-18. Meike's corporate site (mkgrip.com) records that its Shenzhen company took
that name in July 2019, so the patentee is Meike's own. Attribution: the original Meike 85mm f/1.8 STM (Sony E in
June 2022, later Nikon Z, Fujifilm X and L-mount) is 9 elements / 6 groups; the Pro (11/8) and Mark II (11/7) do
not fit. Meike publishes only a stylised render, which agrees in outline.

Deployment change: `source.assignees` → "Shenzhen Huitian Film and Television Equipment Co., Ltd." (house English
form; the analysis keeps the Chinese name beside it); `focalLengthMm.design` → 85, the printed value;
`catalog.lensMounts` ["sony-fe", "nikon-z", "fujifilm-x", "l-mount"].

Open: printed rims at S3–S5 clip the f/1.8 real-ray bundle by up to 0.31 mm (the engine's paraxial stop clears);
wording. (Wording closed in the cleanup pass below, which also corrects the rim note.)

## 2026-11-09 — Cleanup and wording pass

Data file: plain header comment keeping every source fact (sole example, no scaling, 孔径 read as diameter, merged
cemented rows, stop from F/1.8, printed image plane 0.268 mm past paraxial focus, rim clipping, static focus).
`subtitle` "CN 217606166 U — qualified associated patent model" → "CN 217606166 U, Sole example — probable match to
the 2022 production lens". Added `catalog.specs` ["9 ELEMENTS / 6 GROUPS", "DESIGN f = 85 mm", "DESIGN F/1.8",
"ALL SPHERICAL"], `aperture.blades` 9 (Meike's specification table) and a `role` on every element. Focus stays static
(`closeFocusM` 1e15); the description now says what the patent prints and that the 0.85 m retail minimum focus is not
modeled. Glass labels keep the patent's names in vendor form, "<name> (CDGM; named in the patent)" and "E-FD10 (HOYA;
named in the patent)". H-LaF50B, E-FD10, H-ZF52 and H-K9L resolve to their catalog rows at the stored nd/νd;
H-ZLaF55D (L2, L8, L9) and H-LaK50A (L3) are not in the site catalog and keep the patent's names, their dispersion
coming from the stored CDGM line indices (closed below: both rows are now in the catalog). No relabel to another vendor was made, because the patent names these
glasses. No apd: Meike publishes no special-dispersion element.

Analysis: run-together text fixed throughout; "Curvatures" corrected to radii; the Verification Summary replaced by
Model Scope and Limitations without process detail (test grids, ray counts, diagnostics); one attribution paragraph
(Meike's own patentee through the 2019 rename, 9/6 match, the stylized maker rendering, Pro and SE II excluded, the
2018 EF lens unresolved, linear motor against the retail stepping motor); product facts with sources; a glass table;
the patent's conditions checked (φ9/φ12 = 1.233, φU3/φU1 = −0.681, both index orderings); a paraxial note that the
claim-2 travel is about 8.1 mm toward the image for 1 m (L/|fU2| = 0.137), not applied; an aperture section.

Engine values before and after are identical: EFL 85.6454 mm, F/1.8, half-field 15.250°, stop radius 14.747 mm,
paraxial BFD 42.262 mm, total track 113.92 mm. Surface audit OK. Aperture audit: rim-limited at S3, f/1.80 → f/1.83
(+1.6 %), unchanged.

Correction to the deployment note above: at the engine's stop the real axial bundle is still clipped. The aperture
audit lists S3 22.02 → 22.37, S4 21.56 → 21.70, S5 19.81 → 19.94, S7 18.485 → 18.569 and S8 15.865 → 16.061 mm as
the radii that would pass the full f/1.8 bundle.

Open: the printed rims at S3–S8 trim the f/1.8 axial bundle (f/1.83 effective); kept as printed in this pass.

## 2026-11-09 — Semi-diameter pass against the patent figure

Source: `patents/CN217606166U.pdf`, PDF page 9, Fig. 1 (a ray-trace layout embedded at 150 dpi native, measured at
300 dpi). The optical axis is row 798.5. Scale: the drawn rim heights of L1, L2, U1, U2 and U3 against their larger
printed rims give 15.45, 15.48, 15.41, 15.44 and 15.52 px/mm, mean 15.46 px/mm (spread 0.3 %). Arc fits of the L1
front (R 217.50) and L3 front (R 33.09) give the same scale horizontally, so the drawing is not anamorphic.

Fig. 1 is not drawn to the tabulated spacings. At 15.46 px/mm, L1 is drawn 3.9 mm thick (printed 8.06). L8 and L9
almost touch on the axis (printed gap 3.53 mm). L8 is drawn 5.4 mm thick (printed 4.16) and L9 5.7 mm (4.08). S1 to
the image is drawn as 108.5 mm (113.92), and L4 to the stop as 8.3 mm (9.25). The stop-to-L7 spacings agree with the
table to within 0.4 mm. The
transcription was re-read against the table image and is correct, so the figure looks like a drawing of a slightly
different state of the design; its rim heights still agree with the printed 孔径.

| Surface | Stored sd | Fig. 1 | Ratio | Note |
|---|---|---|---|---|
| S1 | 24.1 | 24.08 | 1.00 | rim of L1 |
| S2 | 23.71 | ≈24.1 | 1.02 | face reaches L1's square rim; a 0.39 mm land is below the figure's resolution |
| S3 | 22.02 | 22.04 | 1.00 | |
| S4 | 21.56 | ≈22.0 | 1.02 | as S2, 0.46 mm |
| S5 | 19.81 | 19.74 | 1.00 | top of the drawn U1 block |
| S7 (L3–L4) | 18.485 | junction drawn to 19.74 | — | printed 36.97 and 37.30; see below |
| S8 | 15.865 | face ends at 15.56, land to 19.74 | 0.98 | land added, to 18.485 |
| S10 | 14.495 | 14.47 | 1.00 | top of the drawn U2 block |
| S12 (L5–L6) | 14.35 | junction drawn to 14.47 | — | |
| S13 | 13.495 | face ends at 13.21, land to 14.47 | 0.98 | land added, to 14.35 |
| S14 | 13.5 | face ends at 13.20, land to 15.51 | 0.98 | land added, to 14.21 |
| S16 (L7–L8) | 14.21 | junction drawn to 15.51 | — | printed 28.42 and 29.00; see below |
| S17 | 15.45 | 15.51 | 1.00 | top of the drawn U3 block |
| S18 | 17.0 | 17.25 | 1.01 | |
| S19 | 21.5 | 17.25 | 0.80 | kept; see below |

All `sd` values are unchanged: they are the patent's printed 孔径/2 and stay as floors. Three lands were added with
`rimExtensionSd`: S8 to 18.485 mm, S13 to 14.35 mm and S14 to 14.21 mm. Fig. 1 draws each of these faces ending short of
the element edge with a vertical stroke. Each land stops at the element's cemented junction rim, so L4, L6 and L7 draw
square-edged. The figure continues each land to the full height of its doublet block (19.74, 14.47 and 15.51 mm). The
model cannot follow that, because the merged junction keeps the smaller printed value and a cemented face takes no
extension. The lands cost no light: corner illumination is 27.4 % at 14.1° before and after, and the axial value is
95.9 %. The leave-one-out restore wins back 0.0 points at every field.

Cemented junctions: the figure draws the S7 and S16 junction lines up to the top of each doublet block, above both
printed values. It therefore cannot choose between 36.97 and 37.30 mm, or between 28.42 and 29.00 mm. The smaller value
stays: a ray must pass both of the patent's zero-gap surfaces, so their common clear aperture is the smaller.

S19: Fig. 1 draws L9 square at 17.25 mm, with its rear face ending at the element edge. The printed 43.00 mm would
give 21.5 mm and a rim 4.25 mm taller than the drawn element. No other surface departs from the figure by more than
2 %. A trial S19 of 17.3 mm passes the surface audit and costs no light (27.4 % at the corner); 17.0 mm costs 0.5
points. The value could be a misprint or a mechanical diameter. It is kept here because the patent prints it; the
render shows L9 with a sharp, flared rear rim that the figure does not draw.

Engine values are unchanged: EFL 85.6454 mm, F/1.8, half-field 15.250°, stop radius 14.747 mm, paraxial BFD 42.262
mm. The surface audit reports no validation errors. The aperture audit finds f/1.83 at S3, within its 3 % window. The
image-circle check finds nothing undersized, and field coverage is 100 % to the 21.65 mm corner. The focus is static,
so the live page check at infinity covers every printed state.

Open: S19 against Fig. 1 (printed 43.00 mm against about 34.5 mm drawn), for an owner decision on a source-errata
entry. The S3–S8 axial clipping above is unchanged. (S19 closed: the owner approved 17.0 mm; see "S19 clear
aperture".)

## 2026-11-09 — Glass coverage

CDGM H-ZLaF55D and H-LaK50A are added to the glass catalog from CDGM's September 2026 Zemax file (the same file the
existing CDGM rows cite), so L2, L3, L8 and L9 now resolve to their named rows. The C, F and g line indices stored on
all nine elements were the catalog curves of the named glasses (identical to the catalog rows to 1e-15), so they are
removed and every element traces on its catalog Sellmeier curve; the chromatic result is unchanged.

## 2026-11-09 — S19 clear aperture

S19 sd 21.5 → 17.0 mm, approved by the owner. The printed S19 cell, 43.00 mm, reads as a transposed 34.00 mm: halved,
that is 17.0 mm, exactly L9's printed front rim (S18 34.00 mm). Fig. 1 draws L9 square-edged at about 17.3 mm on both
faces, and Meike's cutaway render shows the rearmost element as a square-edged disc about 1.1× the size of the cemented
pair ahead of it (17.0 mm gives 1.10×, 21.5 mm would give 1.39× with a flared rear face). No two-dimensional production
section is published. Cost against the starting rims: 0.5 corner points at 14.1° (45.4 → 45.2 % at 11.8°, 27.4 → 26.9 %
at 14.1°), inside the 3-point rule. audit:surface OK; audit:aperture within 3 %, no rim limit; image circle and field
coverage pass.

## 2026-11-09 — Second review: diagram, labels and movement

Compared the live page at infinity (and at `focus=1`, `mv=focus`, `el=4`, `el=9`) with Fig. 1 on PDF page 9. The scale
was re-proved at 300 dpi: rim heights give 15.46 px/mm with a 0.3 % spread, and the L1-front and L3-front arc sags give
the same horizontal scale.

| Change | Before | After | Evidence |
|---|---|---|---|
| S2 `rimExtensionSd` | none | 24.1 | Fig. 1 draws L1 as a square block whose rear face reaches the 24.1 mm top edge; the site showed a bevel |
| S4 `rimExtensionSd` | none | 22.02 | as S2, for L2 (top edge 22.04 mm on the figure) |
| `focalLengthMm` on L1–L9 | missing (inspector "FL = —") | 189.44, 132.56, 53.9, −42.06, 158.32, −43.5, −57.08, 54.54, 63.57 | paraxial element focal lengths |
| `doublets` | none | U1 (5–8), U2 (10–13), U3 (14–17) | the patent's own bracket labels in Fig. 1 |
| Header author order | Li Yunhong | Yunhong Li | matches `source.authors` |

Lands and cuts against the starting rims (`.lens-work/base1116sd`):

| Item | Verdict | Cost |
|---|---|---|
| S2, S4, S8, S13 and S14 lands | keep: drawn by Fig. 1, outside printed clear apertures | 0.0 points |
| S19 cut 21.5 → 17.0 | keep: owner-approved; slight | 0.5 points at 14.1° |

The worst loss is 0.5 points, at 14.1° (corner 27.4 → 26.9 %).

The step at U1 and U3 stays. Fig. 1 draws each doublet as one block (19.74 and 15.51 mm). The merged junctions keep the
smaller printed value (18.485 and 14.21 mm), and a cemented face takes no land, so L3 and L8 keep their bevels.

Checked and found correct:
- Element names L1–L9 follow the patent's lenses 1–9, and every `type` agrees with the signs of R.
- There are no aspheres, which matches the zero conics. The stop sits between L4 and L5 (the patent's 光阑 10).
- There are no `apd` tags: the patent names no special glass and Meike lists none.
- The model is static. The focus slider's far end shows ∞ and "Not modeled".
- Engine half-field 15.14° and f/1.8 are unchanged by this review. Surface audit OK; aperture within 3 %; the image
  circle and 21.65 mm corner coverage pass.

Colour, against Fig. 3 (field curvature at g, F, e, d and C): at Y = 0 the plot's five paraxial foci lie at −0.050 to
+0.141 mm from the image plane. The model's lie at −0.390 (F) to −0.148 (C). The model's set therefore sits about
0.29 mm closer to the lens, which is the known 0.268 mm image-plane offset. Its spread, 0.24 mm, is about 0.05 mm
larger than the plot's 0.19 mm. The monochrome plot cannot assign lines to wavelengths, so no element can be named.
Distortion agrees: +0.27 % at 13.06° against about +0.3 % plotted. All nine glasses resolve to the patent's named rows,
and no relabel is proposed.

Open: the paraxial-focus offset and a 0.05 mm larger longitudinal-colour spread against Fig. 3; the S3–S8 axial
trimming by printed rims; the U1 and U3 doublet steps.
