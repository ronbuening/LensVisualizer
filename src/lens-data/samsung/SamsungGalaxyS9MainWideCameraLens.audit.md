# Audit Log — SamsungGalaxyS9MainWideCameraLens

Patent: US 2021/0149156 A1, Example 1; local `patents/US20210149156A1.pdf`, Fig. 1 p. 2 and Tables 1–4.

## 2026-09-16 — Asphere sign correction (supersedes the rim conclusion below)

The earlier audit incorrectly accepted polynomial negation as a coordinate conversion and attributed
its L4 crossing to the patent. Reinspection of PDF pages 2, 37, and 40 establishes a conflict between
the negative conic numerator in Equation (1) and the tabulated prescription/figure. Retaining Table-4
R, K, and polynomial signs with the engine's positive conic reproduces the expected central contours
and greatly improves exact axial convergence. This is an explicit interpretation of a source equation
error; the printed equation itself has not been silently relabeled.

At a 1.0 mm axial launch, the normalized image-plane intercept changes from +0.384126 to -0.001576 mm.
The formerly clipped 1.193380869 mm launch now traverses all powered surfaces and gives -0.004673 mm.
L4 edge thickness at the published common 1.192 mm height is +0.225050 mm, not -0.052468 mm.
The stop, radii, conic constants, spacings, and material coordinates are unchanged.

Rims are common within each element, excluding leaders and mechanical features in Fig. 1:
L1 1.39536; L2 1.27908; L3 1.1934; L4 1.21584; L5 1.326; L6 1.75542; L7 2.0 mm.
The first four use a 2% allowance over the larger effective radius. L5/L6 use the smaller effective
radius plus 2% because extending their front surfaces to the larger rear radii produces divergence.
L7 remains deliberately truncated: the source's seven-decimal coefficients cannot recover the full
rear envelope without crossing, and S13 turns back near 2.0 mm. At 2.72 mm, a half-unit rounding
interval in A18 alone corresponds to ±3.321 mm sag. Related US10935759B2 Table 4 offers no more precision.
No coefficients were fitted, and no engine validation threshold was relaxed. The corrected geometry
is substantially closer centrally, but is explicitly a partial full-aperture reconstruction.

Validation: shared surface validator passes; exact axial replay at 0.2, 0.5, 0.8, 1.0, 1.193380869,
and 1.35 mm passes all surfaces. Image-circle screening has no supported format identifier.

## 2026-09-16 — Source aperture and material review

All SDs retained. Fig. 1 was inspected at 600 dpi with crop 0.25,0.32,0.65,0.74 and axis 0.53.
It shows the rear expansion but is schematic: it does not override the tabulated ray-used effective radii
or the geometry limits of the aspheric polynomial prescription. Enlarging L4 to its drawn envelope would
contradict the documented S7A/S8A edge-thickness limit. The rear rims retain their slope-safe caps.
The existing wide-open pupil clipping limitation remains prominently documented, without modifying radii,
coefficients, or the calibrated stop to conceal it.

The four material coordinates (1.544 / 56.094, 1.661 / 20.353, 1.639 / 23.528, 1.534 / 55.656)
remain unmatched across seven elements. The patent gives no supplier identities or measured spectral indices,
and no compatible coefficient-backed catalog entry was established. No generic glass or polymer identity is assigned.
The display name already identifies the Samsung 4.3mm f/1.5 and Galaxy S9 association; the subtitle preserves
its inferred, unconfirmed status. Image-circle floor screening lacks a supported image-format entry.
