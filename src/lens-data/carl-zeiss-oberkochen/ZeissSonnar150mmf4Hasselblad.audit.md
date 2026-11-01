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
