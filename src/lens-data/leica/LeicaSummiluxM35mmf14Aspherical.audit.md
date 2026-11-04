# Audit — LEICA SUMMILUX-M 35mm f/1.4 ASPHERICAL

Patent: US 5,161,060 A, preferred embodiment.

## 2026-09-21 — Patent figure, glass and metadata integration

### Semi-diameters

Reviewed local `US_5161060_A.pdf, p. 2, FIG. 1` at 600 dpi and compared the optical outlines with the viewer. Retained SDs. The rotated figure contains ray overlays and stepped mechanical shoulders; automatic mapping over-reads several cemented rims. Clean optical extents agree within drawing uncertainty and do not justify enlarging the aspheres.

### Glass classification

The patent reference coordinates are retained unchanged. Catalog curves are qualified spectral proxies unless the patent explicitly names the glass supplier; no production-melt identity is inferred from a coordinate match. Compatibility uses the authored d/e reference system, not a mixed-line comparison.

| Element | Before | After |
|---|---|---|
| L1 | Unmatched (native e-line coordinate 503561; OHARA S-FTL10 is coordinate-compatible, supplier unproven) | S-FTL10 class (coordinate-compatible spectral proxy; native e 1.503/56.1; supplier/melt unproven) |
| L2 | Unmatched (native e-line coordinate 820451) | TAFD10 class (coordinate-compatible spectral proxy; native e 1.82/45.1; supplier/melt unproven) |
| L3 | Unmatched (native e-line coordinate 820451) | TAFD10 class (coordinate-compatible spectral proxy; native e 1.82/45.1; supplier/melt unproven) |
| L4 | Unmatched (native e-line coordinate 694310) | N-SF8 class (coordinate-compatible spectral proxy; native e 1.694/31; supplier/melt unproven) |
| L5 | Unmatched (native e-line coordinate 792472; nearby modern high-index lanthanum-glass coordinate only) | N-LAF21 class (coordinate-compatible spectral proxy; native e 1.792/47.2; supplier/melt unproven) |
| L6 | Unmatched (native e-line coordinate 652336; dense-flint-class neighbor only) | SF2 class (coordinate-compatible spectral proxy; native e 1.652/33.6; supplier/melt unproven) |
| L7 | Unmatched (native e-line coordinate 820451) | TAFD10 class (coordinate-compatible spectral proxy; native e 1.82/45.1; supplier/melt unproven) |
| L8 | Unmatched (native e-line coordinate 820451) | TAFD10 class (coordinate-compatible spectral proxy; native e 1.82/45.1; supplier/melt unproven) |
| L9 | Unmatched (native e-line coordinate 624361; F2/PBM2 coordinate class, supplier unproven) | F2 class (coordinate-compatible spectral proxy; native e 1.624/36.1; supplier/melt unproven) |

Added OHARA S-FTL10 from its [manufacturer datasheet](https://oharacorp.com/wp-content/uploads/2023/06/esftl10.pdf), code(d) 501564 / code(e) 503561. All nine elements now have compatible spectral proxies. The bare d-code retains its previous K10 resolver preference; explicit OHARA context selects S-FTL10.

### Live geometry and travel follow-up

Retained SDs after comparison with the rotated FIG. 1 optical rims. Source element labels 30–46, five groups and two aspheric elements agree with the diagram. Focus remains explicitly not modeled. The patent-era Leica Camera GmbH attribution is retained and linked to the Leitz–Leica succession rather than rewritten as the later AG entity. No zoom travel applies to this prime lens.

## 2026-09-25 — MTF image-plane census

Visually inspected `patents/US_5161060_A.pdf`, FIG. 1 preferred-embodiment construction table and equation/coefficient table, PDF pp. 5–6 (columns 2–4). All fourteen refracting radii, spacings, nine native ne/νe pairs and twelve polynomial K(n) values match the authored conversion. No scaling or plate; single infinity state. The source expressly states K(1)=1/Rvertex, so R4=1/0.035278 and R13=1/0.016659 correctly supersede rounded 28.346/60.026. LensVisualizer K=−1 is an algebraic carrier for the polynomial, with A(2n)=K(n)/2^n; every coefficient was rechecked.

Column 3 explicitly defines S15 spacing 19.595 as distance to image plane 16; column 2 prose instead says 19 mm. Independent native-e EFL 35.411722282 versus nominal 35 and BFL 19.636495674 versus 19.595 remain source inconsistencies. Do not silently interpret the native e-line data as d-line indices.

For the small-offset inquiry, column 4 explicitly mentions a best focusing plane and −0.07 mm defocus improving meridional field curvature. It does not identify either with the tabulated S15 image distance, and −0.07 is not the measured +0.041496 residual. A reference-index axial geometric diagnostic (32 grid, 812 rays, 10/20/40 lp/mm) prefers +1.262108 mm, score .047536→.282942, so it certainly does not demonstrate that the authored plane is the reconstructed lens’s axial best focus. This larger finite-ray mismatch is a source/model limitation, not permission to change coefficients or tune the image plane.

**Cause/action:** source numerical inconsistency with explicit but non-identical best-focus discussion; preserve published values and equation convention. Offset **+0.041496 → +0.041496 mm**; Section E row deleted, no numerical change/changelog.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.

## 2026-11-03 — Image-plane consistency (deferred: chord-law asphere finding)

Policy: LENS_DATA_SPEC § Image-Plane Consistency. No data change in this pass, because the image-plane decision
waits for an asphere refit.

| Field | Before | After | Justification |
| --- | --- | --- | --- |
| (none) | — | — | Real-ray focus is not trustworthy until surfaces 4A and 13A follow the patent's chord law |

- Paraxial residual: +0.041496 mm (18 depths at f/1.4). It fits the three-decimal e-line indices: a ±0.0005 index
  Monte Carlo gives a BF spread of 0.039 mm (1σ). The census real-ray best focus of +1.267 mm is a modeling artefact.
- Finding:
  - Col. 3 (PDF p. 6) defines the sag p as a function of the chord s, "the separation of a point on the lens surface
    from the lens vertex", so p(s)=ΣK(n)(s²/2)^n with s² = h² + p². With K(1) alone that law is an exact sphere of
    radius 1/K(1).
  - The file treats s as the radial height (K = −1 carrier, A2n = K(n)/2^n), which is a different surface. At the rim
    the sag is 2.464 against 2.546 mm on 4A (h = 12.6) and 1.462 against 1.476 mm on 13A (h = 14.2).
- Independent on-axis trace at the e line:
  - Height law (as authored): the marginal rays focus about 1.2 mm behind the plane, the geometric 10/20/40 lp/mm
    best focus is +1.264 mm (reproducing the census +1.262 / +1.267 mm) and the best-focus RMS spot is 57 µm.
  - Chord law: the zonal intercepts lie −0.03 to −0.06 mm from the plane, the best focus is −0.044 mm and the RMS spot
    is 3.7 µm. That agrees with cols. 3–4: aberration below 20 µm, and under 7 µm in the best focusing plane.
- Consequence: with the chord law, the printed 19.595 mm plane sits between paraxial focus (+0.041) and real-ray best
  focus (−0.044). Re-solving the last gap to the paraxial 19.636496 mm would put the plane 0.085 mm from best focus,
  so the image-plane class is decided after the refit.

Follow-ups:
- Refit 4A and 13A to the chord law as `K = -1` plus A-terms over the stored clear radius, as
  `src/lens-data/leica/LeitzNoctilux50mmf12.data.ts` does.
- Then re-census the infinity plane and choose between keeping it as a best-focus plane and re-solving 15.d. The
  coordinator queues this in Section G of `agent_docs/sd-audit-queue.md`.

## 2026-11-03 — Asphere refit to the chord law; image plane kept as a best-focus plane

Source: US 5,161,060 A col. 3 (PDF p. 6): p(s)=ΣK(n)(s²/2)^n, "The chord s is the separation of a point on the lens
surface from the lens vertex"; K(1)…K(6) for surfaces 4 and 13 as printed in the coefficient table on the same page.

| Surface | Field | Before | After | Justification |
|---|---|---|---|---|
| 4A | asphere | K −1, A4–A12 = K(n)/2^n (radial-height reading) | K −1, A4–A20 least-squares fit to the implicit chord law over h ≤ 12.6 | col. 3 defines s as the chord; residual < 1e-5 µm |
| 13A | asphere | K −1, A4–A12 = K(n)/2^n | K −1, A4–A20 fit over h ≤ 14.2 | same; residual < 1e-6 µm |

- R stays 1/K(1). Rim sag 4A 2.464 → 2.546 mm, 13A 1.462 → 1.476 mm (old model off by up to 82.5 and 13.4 µm).
  The surface scans are monotone with no turnover inside either clear radius; aperture, image-circle, field-coverage
  and surface-probe audits are unchanged.
- Real-ray axial best focus (MTF, reference line): +1.269 → −0.045 mm; the design-plane score rises 0.030 → 0.348.
  Paraxial offset unchanged at +0.041496 mm (18 depths); EFL 35.411722 mm unchanged.
- Image-plane class C (kept): FIG. 2 (sheet 2) plots the on-axis 546 nm transverse aberration with a small positive
  rise that crosses zero at a quarter to a third of the plotted aperture. Traced on the refitted model, that curve
  crosses at 26 % of the pupil at the printed 19.595 mm plane, at 60 % at real-ray best focus and not at all at
  paraxial focus, so the patent evaluates at (or within about 0.01 mm of) the printed intercept. 15.d stays 19.595.
- Header, aspherical-surface section, image-plane passages of the analysis, Section E/G rows and the decisions list
  are updated.

Follow-ups: none.
