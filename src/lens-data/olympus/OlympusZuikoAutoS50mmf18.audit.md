# Audit Log — Olympus Zuiko Auto-S 50mm f/1.8

Patent: US 4,728,179, master lens (Figure 3, table in column 6)

## 2026-11-01 — Deployment validation and cleanup

### Patent re-read

Read from page images of `patents/US4728179.pdf` (table PDF page 9, Figure 3 PDF page 2): 10 radii, 9 spacings, 6 indices,
6 Abbe numbers, no mismatches. D5 = 13.0 is split 6.5 + 6.5 around the inferred stop. All surfaces are spherical and the
patent prints no variable gaps. Front page matches `source`: patent number, 1988 grant, Hayashi and Takase, Olympus Optical.

The master has no example designation beside Embodiments 1 to 4, so `source.example` stays absent under
LENS_DATA_SPEC.md § The transcribed example, with the queue row in `agent_docs/patent-example-queue.md`.

### Patent against model

| Quantity | Patent | Model |
|---|---|---|
| f | 51.84 | 51.8405 |
| F-number | 1.86 | 1.860 |
| Back focus | not printed | 37.856 (paraxial, infinity) |
| Total length | not printed | 74.026 |
| Field, conjugate, stop, clear apertures, focus travel | not printed | see below |

Master at infinity plus the printed d0 against the printed converter data:

| Embodiment | d0 | Printed β | Computed β | Printed fR | Computed fR | Printed fM | Computed fM |
|---|---|---|---|---|---|---|---|
| 1 | 3.2334 | 1.6182 | 1.6182 | -70.00 | -70.00 | 494.8 | 494.8 |
| 2 | 1.7334 | 1.6446 | 1.6446 | -71.26 | -71.26 | -753.9 | -753.9 |
| 3 | 1.2334 | 1.6075 | 1.6075 | -79.35 | -79.35 | -365.9 | -365.9 |
| 4 | 1.2334 | 1.6437 | 1.6437 | -72.62 | -72.62 | -952.4 | -952.4 |

On Embodiment 4, β moves 0.0037 per 0.1 mm of gap, so the printed four decimals fix the last gap to about ±0.002 mm.

Figures 4 to 7 are labelled F/3.0, F/3.1, F/3.0, F/3.1 and 14.4°, 14.2°, 14.5°, 14.2°. With the computed combined focal
lengths of 83.888, 85.257, 83.332 and 85.211 mm these give image heights of 21.54, 21.57, 21.55 and 21.56 mm, so 135 format.
Longitudinal spherical aberration at F/1.86 is +0.071, -0.067, -0.105 and -0.081 mm at pupil 1, 0.85, 0.7 and 0.5.

### US 4,291,952 Embodiment 2

Read from the Google Patents text of US 4,291,952 and its GB family member GB 2042209 A, not from page images; the patent
is not in `patents/`. Embodiments 1, 2, 3 and 5 recompute to EFL 100.00 and the printed fB to three decimals, Embodiment 2
at fB 73.063. Embodiment 2's d1 is garbled in the text and is taken from Σd = 69.827, giving 8.686.

Same six indices as the master. At scale 0.5184 the spacing differences are all at most 0.010 mm (D5) and the radii differ
by R1 -0.32 %, R2 -0.43 %, R7 +0.36 %, the others at most 0.07 %. The master meets conditions (1) to (7): mean νd of L1, L5,
L6 35.9; ν3 25.71 and ν4 28.46; n3 - n2 0.182; (d3 + d4)/f 0.152; f1/f6 1.124; r1/f 0.652; (d6 + d7)/f 0.140.

The master was kept as the transcribed source: it is printed at real scale with rounded spacings. Re-sourcing to Embodiment 2
would give a numbered example at f = 100.

### Public diagram comparison

The section at https://allphotolenses.com/public/files/optical/728a84e050a2dc281d617384dabf2736.jpg, labelled the MC version,
shows singlet, cemented doublet, stop gap, cemented doublet, singlet. At 8.35 px/mm:

| Surface | Model x | Drawn x |
|---|---:|---:|
| S4 | 192 | 190 |
| S5 | 203 | 204 |
| S6 | 311 | 305 |
| S7 | 325 | 322 |
| S8/S9 | 372 | ~368 |

Largest difference 6 px, 0.72 mm. The earlier 6/5 drawing, https://allphotolenses.com/public/files/optical/3b1d6f5aaf67b7c8f1a16a1d07d30882.jpg,
has L2 and L3 air-spaced and does not match. The drawing comparison was done by the coordinating review, not re-measured here.

### Figure 3 rims and vignetting

Figure 3 at 600 dpi has an axial scale of 36.9 px/mm from the vertices of R1 and R10. Drawn heights read 16.22 (S1, S2),
13.70 (S3, S4), 10.43 (S5), 11.06 (S6), 12.63 (S7), 13.10 (S8), 13.64 mm (S9, S10). The model's rims are 5-6 % below these,
with ratios within about 1 %. Fitting the printed radii to the drawn arcs gives about 38.4 px/mm, and the difference drops
to about 2 %. Rims were not changed.

Stop-limited geometric transmission from the app's vignetting analysis, wide open at infinity: 82.0 % at 11.5°, 46.9 % at
20.1°, 33.0 % at 23.0°. A separate ray trace gave 80.9 % at 11.8° and 32.9 % at 23.0°, and 32.8 % and 32.5 % with the stop at
z = 17.5 and 20.5 mm. Axial marginal heights at F/1.86 clear every rim; S5 is tightest, 9.66 against 9.887 mm.

### Close focus

Unit focus, solved paraxially: principal planes at z = 30.662 and 22.186 mm, near back focus 45.60 mm, travel 7.74 mm,
object to image 449.99 mm, magnification 0.1494, field 16.07 × 24.10 cm against the published 16 × 24 cm.

### Fields changed

Since the package as received: stem, `key`, `name`, `glass` labels and removal of `indexReferenceNote`; `aperture.fStops`
to the seven stops and removal of `maxFNumber`; `focus.closeFocusM` 0.45 and `gaps` "10" with S10 `d` moved into it. In this
pass: header comment, `subtitle`, `catalog.specs`, element `role`, `cemented` D1/D2 to C1/C2, new `doublets` C1 and C2,
`focus.description`. The analysis was rewritten for public text, with the hedges closed above removed. R, d, nd, vd, sd, stop
and `source` are unchanged.

### Open items

Open: a schema designation for an unnumbered master lens, shared with `nikon/NikonNikkor15mmf56` and the other queue rows.
Open: the changeover date stays "probably" 1982. The OM-10 FC manual's table (printed p. 41, read from the page image)
lists the Zuiko MC 50mm F1.8 at 6-4, f/1.8–16, 0.45 m, 165 g, 32 mm, 49 mm filter, so the maker prints 6/4 for the MC
lens; other listings' 6/5 for it stands against that. The package's leaflet coded 0486 was not checked and is not cited.
Open: read US 4,291,952 from page images if the patent is added to `patents/`.
