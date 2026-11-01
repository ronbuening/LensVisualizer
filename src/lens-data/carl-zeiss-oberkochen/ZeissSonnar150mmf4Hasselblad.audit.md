# Audit Log — CARL ZEISS SONNAR 150mm f/4 (Hasselblad)

Patent: US 2,720,140, Example III (col. 2 table, Fig. 3), repeated in claim 4.

## 2026-11-01 — Deployment validation and cleanup

Patent re-read: the scan has no text layer, so the tables were read from page renders. All 8 radii, 7 spacings (l2
split around the stop) and 5 nd/V pairs match the data file at ×151.2, with no mismatches, and claim 4 repeats the
table. The printed Δn/r column recomputes to 6 places on all 8 surfaces. The table heads nd, and the claims say the
index refers to the d-line. There are no aspheres and no variable gaps. The page prints Günther Lange and "Carl Zeiss,
Heidenheim (Brenz)"; `Carl-Zeiss-Stiftung` is the corpus form required for 1891–2003.

Patent vs model: the patent prints f = 1, f/4 and ±14°, and no back focus or track. Unit f computes to 0.999994, so
×151.2 gives EFL 151.199 mm, f/4.00, half field 14°. The last gap 81.019 mm is the paraxial BFD, the track is 81.816 mm
and first vertex to image is 162.835 mm. Spherical aberration stays within 0.165 mm at f/4. The claim 1 conditions hold
(0.583/f, 0.277f, 0.142f). Examples II and IV, scaled the same way, give vertex lengths of 88.4 and 80.7 mm.

Zeiss sheets vs model: f 151.2/151.2; vertex length 81.8/81.82; BFD 80.4/81.02; H 11.6/9.98; H′ −70.8/−70.18; entrance
pupil 63.8/67.9; exit pupil −32.1/−28.3. Stop sweeps show the pupils imply a stop at 51–55 % of l2 (z 45.2–46.4 mm).
Fig. 3 draws it at 60.2 % (z 48.07 mm), the file has 60 % (z 47.99 mm), and the figure is kept. The sheets postdate 1973,
so the association is a close relative, not a proven identical prescription.

Public diagram: the section on the C150 sheet shows meniscus, cemented pair with a step at its junction, stop, cemented
pair with the larger rear element. At 5.77 px/mm and thick lines it reads stop z about 46.8 (model 47.99), the S5 vertex
z about 32.9 (model 29.43), its rim land z about 36.7 (model 33.05), S6 z about 62.0 (model 60.36), and rims about
24.7 / 19.9 / 15.6 / 18.2 / 22.2 mm. The icon is too small and heavy to weigh against Fig. 3, so the model's rims and
spacings stay at the patent.

Rims: Fig. 3 was measured at its own axial scale, 11.05 px/mm (vertex centres over the model track). The package's set
was anchored at 1.1 × the entrance-pupil radius, which ran 7–14 % under the figure. Raised to S1/S2 22.6, S3/S4 19.2,
S6 15.1, S7 16.5, S8 19.7; S5 stays 12.771 against the figure's 12.1–12.7 mm. Corner beam at 14° went from 40.0 to
57.3 %. Current axial margins are 0.18 mm at S5 and 1.82 mm at S3. S7 no longer clips on its own: opening it changes no
field. `audit:surface` prints OK with no `gapSagFrac`, and `audit:aperture` reports the lens within 3 %. The image-circle
audit reports nothing undersized, and field coverage is 96 %, stopped by the declared 14°.

Fields changed: `maker`, `key`, `name`, `glass`, and removal of `indexReferenceNote` (d7d3920dd); the seven `sd` values
and `closeFocusM` 1e15 → 1.4 (445f79c7a); then the header comment, `subtitle`, `catalog.specs`, element `role`,
`cemented` D1/D2 → C1/C2, `focus.description`, and new `groups` (FRONT, MIDDLE, REAR) and `doublets` (C1, C2). The
analysis was rewritten to the skeleton. `built.mjs` and `probe.mjs` output is identical across the wording step.
`protcmp.mjs` stops on a file with no `gaps`, so a deep diff against the received file was used; it shows only these
fields.

Open: one search extract of the CFi sheet gave 151.5 / 83.4 / 80.5 mm, while retail listings give 151.2 mm. It is
unconfirmed, and if true the CFi is a different computation. The analysis says only that the CFi is unconfirmed.

Open: the Rolleiflex SL66 Sonnar 150mm f/4 is listed at 5/3, but only a mailing-list post calls its layout similar.

Open: `closeFocusM` 1.4 is the retail figure with static geometry, because the patent prints no focus data. The near
state reads infinity in `probe.mjs`.

Open: hasselbladhistorical.eu fails its TLS check for some clients; its links are kept as the sheets' citations, as in
`ZeissTeleTessar500mmf8C.audit.md`.

## 2026-11-01 — Semi-diameter pass against the patent figure

Source: `patents/US2720140.pdf`, page 1, Fig. 3, the figure of Example III. The page is a 1-bit scan, 2320 × 3408 native
pixels. One native pixel is 2 px on the render behind the 11.05 px/mm figure in the validation section. The readings below
are in native pixels.

Scale along the axis: the S1 and S8 vertex centres lie 451.9 px apart over 81.816 mm, 5.523 px/mm (11.05 on the 2× render).
Local spans run 5.37–5.65 px/mm, and the S2–S3 air gap is drawn 1.2 mm against 0.25 mm, which shifts the middle component
about 7 px to the right of the model.

Scale across the axis: with the axial scale held and each printed R fitted to its drawn arc, S1 gives 5.44 (band
5.26–5.61), S3 5.37 (5.29–5.51), S5 5.26 (5.13–5.49) and S7 5.26 (5.14–5.37). The weighted mean is 5.33 ± 0.07 px/mm (10.65
on the 2× render), 3.6 % under the axial scale. S2 and S8 are too shallow to constrain it. As a separate check, the stop
ticks end 63 px from the axis, which gives 5.29 px/mm against the 11.915 mm f/4 stop. The figure is mildly anamorphic, or
its arcs are drawn slightly tight, so rims taken at 11.05 px/mm read about 3.6 % low.

| Surface | Stored sd | Figure, px | At 5.52 px/mm | At 5.33 px/mm | Result |
| --- | ---: | --- | ---: | ---: | --- |
| S1/S2 | 22.6 | 124.5 | 22.5 | 23.4 | Kept: 3.3 % under at 5.33 |
| S3/S4 | 19.2 | 105.1 | 19.0 | 19.7 | Kept: drawn S3 rim sag gives 19.6 |
| S5 cap end | 12.771 | 64.5–67 | 11.7–12.1 | 12.1–12.6 | Kept: band below |
| S5 land | none | 96 to the chamfer, 105 at the rim | 17.4 / 19.0 | 18.0 / 19.7 | `rimExtensionSd` 19.2 |
| S6 | 15.1 | 80 straight, 89 at the rim | 14.5 / 16.1 | 15.0 / 16.7 | Kept; `rimExtensionSd` 16.5 |
| S7 | 16.5 | 89 | 16.1 | 16.7 | Kept: drawn sag at the end gives 16.5 |
| S8 | 19.7 | 108.25 | 19.6 | 20.3 | Kept: 3.0 % under at 5.33 |

S5: the land stands 19.3 ± 1 px behind the S5 vertex, a sag of 3.50 mm and so a cap end of 12.6 mm (12.2–12.9). With the
height readings the band is 12.1–12.9 mm, and 12.771 mm lies inside it. The figure rounds the corner, so no finer reading is
available. The value stays the package's. The stop-limited f/4 ray reaches 12.59 mm there (12.62 mm for a ray launched at the
full entrance pupil), so the 0.18 mm margin is real and the cap cannot go lower.

Steps: the package and earlier passes joined the S4 rim to the S5 rim with one slanted edge, where Fig. 3 draws a flat rim
running 4.5 mm past the S4 junction, a chamfer of about 2 × 1.7 mm, and a flat land down to the cap. The extension to 19.2 mm
restores the flat rim and land. Ending the land at the chamfer, 17.4 mm, was tried: the connecting edge then tapers along the
whole rim, and the overlay fits worse. L4 was slanted from S6 to S7 where the figure cuts it square with a rounded front
corner; the 16.5 mm extension on S6 squares it.

Fig. 3 joins the S7 end to the L5 rim with a 45° chamfer and then a flat rim of 14 mm. An element is drawn with one straight
edge between its two face rims, and a cemented face cannot take a land, so the model keeps the slanted edge, up to 2.7 mm under
the figure at the top of the chamfer. `sd` cannot repair this: raising S7 toward 19.7 mm runs its arc forward over L4, where the
figure has the L4 rim at 16.5 mm.

Light: the extensions pass no ray and stop none. Beam at f/4 over 0 / 2.3 / 4.7 / 7 / 9.3 / 11.7 / 14° is 100.0 / 96.3 / 91.3 /
86.5 / 80.0 / 70.3 / 57.3 %, identical before and after, against 100.0 / 93.1 / 86.0 / 78.6 / 68.3 / 55.1 / 40.0 % on the
package rims. No face sits below its package value. Taking the arc scale would lift the 14° beam to 62.5 %, but those rises
sit inside the noise band with no shape wrong, so they were not made. Engine half field 14°, f/4 and stop radius 11.915 mm are
unchanged. `audit:surface` prints OK with no `gapSagFrac`, `audit:aperture` reports the lens within 3 %, the image-circle audit
reports nothing undersized, field coverage stays 96 % at the declared 14°, and the trace shows no axial clip or blocked chief ray.

Maker drawing, as a check only: the Sonnar T* 150 section shows the same order and counts, and marks no aspherical surface or
special glass. It shows the S5 curve ending at a short land and L5 rising from the L4 rim by a chamfer to a flat rim, the same
shapes as Fig. 3. It differs in giving L2 a taller rim than L3, with a step at their junction that Fig. 3 does not draw. No value
was fitted to it. The live page shows the flat S5 land, the square L4 and the slanted L5 edge.

Open: the L5 chamfer and flat rim need a land on a cemented face, which the validator refuses. The model draws them only if the
engine gains that.
