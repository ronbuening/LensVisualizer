# Audit Log — OLYMPUS ZUIKO AUTO-T 180mm f/2

Patent: JP H05-042643 B2 (family US 4,558,928 A), Example 1, scaled 1.8×

## 2026-10-19 — Deployment validation and wording pass

Source re-read: the JP scan (pp. 3–4, Fig. 1 on p. 5) and the US table (p. 16) were read directly. All 18 radii, 17
spacings, 10 nd/νd pairs, the stop position (5.22 behind r13, moving with IIb) and the three variable gaps at all three
printed states divide back from the file by 1.8 with no mismatches. There are no aspheres. The JP scan prints
φa = −0.828; the US prints −0.818, which the model reproduces (φb = −1.142 in both). Fig. 1 matches the element shapes,
the 10/8 construction, the cemented pairs and the stop position.

First-order, patent vs model: f = 100 vs 99.999 (179.998 mm scaled); F/2.0 vs F/2; 2ω = 13.7° vs a chief ray reaching
the 21.65 mm full-frame corner at 6.8°. The back focus is not printed; the Gaussian value is 57.720 mm (32.067 units). Traced
paraxially, the printed −3056 and −1031 gap rows focus at 3047 and 1031 units from the first surface. The printed
xa/xb table is the gap-derived movement transposed (Example 2 repeats the layout); the gap reading is used. The near-row
d13 is taken as 14.12 instead of 14.13 so the rear group stays fixed. The 1.6 m endpoint (magnification −0.140)
extrapolates a quadratic travel law about 37–40% past the last printed state (about 2.07 m, −0.102).

Scale and product: the JP description names 180 mm F/1.8 or F/2.0 telephotos; Example 1 is the F/2.0 design. The OM
Zuiko Auto-T 180mm f/2 is published as 10 elements in 8 groups with internal focus, ED glass, 1.6 m minimum focus and
a 100 mm filter (phillipreeve.net review; kamerastore listing), and the review measured about 1:7 maximum
magnification. No maker cross-section diagram was found to compare against.

Checks: audit:surface OK; audit:image-circle 0 undersized; audit:field-coverage 100% at the corner; real-ray clearance at
infinity shows no axial clipping or chief-ray blocking.

Fields changed in this pass: header comment, subtitle, specs, focus description and gap labels in the data file
(optics unchanged). In the analysis: title, production-correlation paragraph (citing the JP 180 mm F/2.0 statement),
element table with focal lengths and roles, glass note (L1/L4 ED-class, untagged), focus section (transposed table,
patent conditions, extrapolation), and the limits section; process history, test counts and the external archive
link were removed.

Open: the inferred front rim (50.98 mm semi-diameter) exceeds what a 100 mm filter thread allows; a smaller rim
would add corner vignetting. The maker has not published which elements are ED, so the file has no `apd` tags.
