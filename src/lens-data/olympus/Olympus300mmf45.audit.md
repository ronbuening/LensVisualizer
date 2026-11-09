# Olympus F.Zuiko Auto-T 300mm f/4.5 — audit log

## 2026-11-09 — Deployment validation

Independent check of US 3,819,253 (sole example, PDF p. 4 and the claim repeat): 10 R, 9 d, 6 nd/νd agree; native
f = 300, so no scaling. Engine EFL 299.845, f/4.5, half-field 4.0° (Fig. 2C/2D), telephoto ratio 0.750 (claim: within
0.8). The patent prints no back focus, stop or clear apertures: the stop at the midpoint of d7 and every semi-diameter
come from PhotonsToPhotos' Optical Bench diameters, and the last gap is the paraxial back focus.

Attribution strong: 6 elements / 4 groups, 8° diagonal, f/4.5–32, 3.5 m, OM system launched 1972 (priority JP 47-47166,
May 1972); the mir.com.my OM construction drawing shows the same four groups and proportions.

Deployment changes: added `catalog.lensMounts: ["olympus-om"]` (missing in the package); `patentNumber`
"US 3819253 A" → "US 3,819,253" (house form).
Open: `focus.closeFocusM` 10 is a placeholder (production 3.5 m); `fStops` stop at 22 (lens closes to 32); package
wording ("Qualified patent reconstruction", "P2P") remains for the cleanup pass.
