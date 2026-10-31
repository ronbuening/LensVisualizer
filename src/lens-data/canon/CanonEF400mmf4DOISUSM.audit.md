# Canon EF 400mm f/4 DO IS USM — Audit Log

Patent: US 2002/0015231 A1, Numerical Example 1

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent surface-27 gap (65.507775640 mm) with the patent's image-side stack, read from the
  rendered Numerical Example 1 table (PDF page 17, ¶0104): d27 = 0.72 mm, plate r28–r29 2.20 mm, n16 1.51633,
  ν16 64.1. The table ends at r29 = ∞ with no d29 or back focus, so the 63.3369041 mm plate-to-image air is derived as
  65.507775640 − 0.72 − 2.20/1.51633 to keep the file's paraxial image plane. The patent prints no designation, so the
  plate carries no label; the 52 mm drop-in filter association stays a modeling inference. Labeled S-BSL7, a
  coordinate-compatible catalog match (catalog νd 64.14).
- Paraxial check against the previous data: EFL identical and defocus unchanged at the single infinity state (worst
  difference 2.7×10⁻⁸ mm, the rounding of the derived gap). Physical track grows by 2.20 × (1 − 1/1.51633) = 0.749 mm
  to 256.337 mm. `closeFocusM` keeps Canon's quoted 3.5 m; no focus motion is reconstructed.

## 2026-10-04 — Rear plate drawn as an element

- The image-side plate F moved out of `rearPlates` into the drawn prescription: surfaces 28–29 and element 16
  (`Plane-Parallel Plate`), with the same thickness, index and gaps. The patent prescription is computed with the
  plate in place and a teleconverter mounts behind it, so it is part of the lens rather than a camera-side plate.
- The source lists no clear aperture for the plate. Its semi-diameter, 18.5 mm, is a ray-trace estimate: the largest
  height on the plate of any ray that reaches the 135 format or the diagram's off-axis field at infinity, mid and
  close focus (17.25 mm), plus 5%, rounded up to 0.5 mm. Not figure-audited.
- Before/after check: EFL, entrance pupil, stop radius, image plane, half-field, analysis half-field and the traced
  axial, mid-field, corner and diagram bundles are unchanged. `npm run audit:field-coverage` still reports 100% of the
  corner.

## 2026-10-30 — Original shape/glass review and unresolved radius provenance

### Exact original, native figure and source components

Fresh inspection uses `patents/US20020015231A1.pdf`, Numerical Example 1 ¶0104 on PDF page 17/printed 7 and
matching Figure 1 on page 2/sheet 1 of 9. Paragraph 0099 begins on page 16 and continues page 17. Figure 10/11
on page 8 and ¶0084/page 16 provide the adjacent laminated DOE materials, geometry and incidence evidence.
The selected original is usable. The family PDFs previously cited for corrections, US6473232B2 and
US20030053212A1, are absent locally; they are not silently substituted or treated as freshly checked.

Pages are native 2320 × 3408 rasters at 300 dpi. The main section was rotated without resampling and inspected in
native optical/shoulder crops; the numerical column and UV-layer paragraphs were inspected visually. The previous
600 dpi view and current 3× radius-label viewing aid are upsampling. Local scale varies around 7–8 native px/mm;
two-pixel reading uncertainty is approximately ±0.25 mm, but schematic geometry adds roughly ±5–10% blank-height
uncertainty. Optical ends are separated from rays, leaders, stop blades, axis and projected pupil strokes.

### All modeled elements and every concave/bonded end

| Element | Faces | Clear front / rear radius (mm) | Drawn front / rear radius (mm) |
| ------- | ----- | -----------------------------: | -----------------------------: |
| L1      | 1–2   |                    54.5 / 54.5 |                    54.5 / 54.5 |
| L2      | 2–3   |                    54.5 / 54.5 |                    54.5 / 54.5 |
| L3      | 4–5   |                        39 / 39 |                        39 / 39 |
| L4      | 6–7   |                  36.75 / 36.75 |                  36.75 / 36.75 |
| L5      | 8–9   |                        34 / 34 |                        34 / 34 |
| L6      | 10–11 |                      31 / 28.1 |                        31 / 31 |
| L7      | 12–13 |                        20 / 20 |                        20 / 20 |
| L8      | 15–16 |                        12 / 12 |                        12 / 12 |
| L9      | 16–17 |                        12 / 12 |                        12 / 12 |
| L10     | 18–19 |                        12 / 12 |                        12 / 12 |
| L11     | 19–20 |                        12 / 12 |                        12 / 12 |
| L12     | 21–22 |                    11.5 / 11.5 |                    11.5 / 11.5 |
| L13     | 23–24 |                    12.5 / 12.5 |                    12.5 / 12.5 |
| L14     | 24–25 |                    12.5 / 12.5 |                    12.5 / 12.5 |
| L15     | 26–27 |                        17 / 17 |                        17 / 17 |
| F       | 28–29 |                    18.5 / 18.5 |                    18.5 / 18.5 |

The L6 rear surface has resolved short vertical shoulders above and below the optical arc. Native cap/outer
half-height ratio is near 0.90 ±0.02 before schematic uncertainty. S11 becomes clear 28.1/outer 31 mm (0.906),
with `rimExtensionSd` preserving the existing blank size and no flat cut. Its exact axial boundary is 26.224735 mm;
off-axis survivor counts stay unchanged. The first DO pair and other clear caps remain inferred and pupil-critical,
not dimensioned from source ink. No opaque land is added at S2/S16/S19/S24 and no unsupported square blank or
resin wing is created. No `rimCutDepthMm` or fabricated `rimCutDepthSource` is authored.

The exact f/4.12 axial boundary reaches 36.742904 mm at S6, exceeding old 36.6 mm. S6/S7 become 36.75 mm.
The 36.8 mm trial fails the unchanged S5–S6 guard (about 2.80 mm intrusion against 2.799 allowed across 3.110 mm);
it is rejected and no tolerance is relaxed. Every optical R/d, stop, DOE term and inferred reference wavelength is
otherwise preserved, including the previously nonliteral radii disclosed below.

### Bulk media, UV layers and spectral qualification

| Medium | Printed N / ν  | Qualified d-line coordinate candidate |
| ------ | -------------- | ------------------------------------- |
| L1     | 1.56384 / 60.7 | S-BAL41                               |
| L2     | 1.51633 / 64.1 | S-BSL7                                |
| L3     | 1.51823 / 58.9 | S-NSL3                                |
| L4     | 1.74950 / 35.3 | S-LAM7                                |
| L5     | 1.48749 / 70.2 | S-FSL5                                |
| L6     | 1.67270 / 32.1 | S-TIM25                               |
| L7     | 1.43387 / 95.1 | CaF2 curve                            |
| L8     | 1.80518 / 25.4 | 805254 class                          |
| L9     | 1.48749 / 70.2 | S-FSL5                                |
| L10    | 1.76182 / 26.5 | 762265 class                          |
| L11    | 1.80400 / 46.6 | 804465/804466 class                   |
| L12    | 1.80400 / 46.6 | 804465/804466 class                   |
| L13    | 1.63980 / 34.5 | S-TIM27                               |
| L14    | 1.80400 / 46.6 | 804465/804466 class                   |
| L15    | 1.51633 / 64.1 | S-BSL7                                |
| F      | 1.51633 / 64.1 | S-BSL7                                |

All 16 bulk pairs match the original. Paragraph 0099 defines only bare ni/νi with no d/e reference, so every medium
now remains Unmatched with an index-reference note; coefficient-curve coverage is 0/16. Default d-line tracing is
approximate. Numerical candidates do not identify supplier, melt, CaF2 chemistry or production fluorite. No C/F/g,
partial-dispersion or measured APD value is printed for these bulk media, and no per-lens override was present.

The first-embodiment microstructure is explicitly separate: Figure 10/page 8 depicts UV layers 23/24 attached to their
substrates 21/22 and separated by air 25. Paragraph 0084/page 16 prints first-layer nd 1.6685/νd 19.7 and third-layer
nd 1.5240/νd 50.8, with 5 µm/7.5 µm heights and minimum pitch 156 µm at zone 155. Neither layer has printed line indices,
partial dispersion or exact chemistry. The macro phase polynomial represents their combined diffractive action;
no extra smooth resin medium, fictitious air thickness or disconnected wing is invented. Microscopic efficiencies,
non-effective-face shading and higher diffraction orders remain outside this reduced model.

The source plate r28–r29 stays 2.20 mm at 1.51633/64.1 with d27=.72 mm. The original has no d29, BF or filter label;
the retained 63.3369041 mm following air is derived. The drawn representation and inferred 18.5 mm radius remain,
while production drop-in association/ownership is a qualified interpretation. The largest sampled passing format ray
at its rear face is 16.916810 mm. No new source-camera-cover definition was found.

### Nonliteral radius block and missing correction provenance

| Face | Original A1 (mm) | Retained model (mm) |
| ---- | ---------------: | ------------------: |
| r17  |          +87.040 |             −87.040 |
| r19  |          +59.203 |             −59.203 |
| r22  |         +131.344 |            +131.844 |

The native table really prints all three original values. Earlier notes missed the r19 sign difference and relied
on family publications for r17/r22. Those family originals are unavailable in this local review. Every adopted value
is preserved by coordination instruction; no fresh exact-replacement or corrected-erratum claim is made. All three
pairs now have a structured unresolved source.errata note and public nonliteral-model qualification.

With the unchanged DOE first-order power, fully literal values give EFL 1088.527323 mm versus printed 392.00;
literal-r19-only gives 362.836584, literal-r22-only 392.515701, and adopted values 392.025204 mm. The fully literal
block shifts Gaussian focus by −200.685974 mm against the retained model plane; r19-only gives +8.002706 mm.
The source itself does not dimension that final plane, so these are optical consequences rather than a claim against
an original BF row. Source focal summary and outline suggest errors, but do not uniquely prove the exact adopted
replacements. The generic follow-up queue remains needed for correction provenance. Original inspection is usable
and complete; missing auxiliary family evidence is a retained provenance limitation, not a fabricated fresh check.

### Actual SVGs, available states and runtime limits

Actual SVGs were compared with native Figure 1, particularly the S11 shoulder and compact rear bonded groups.
All 16 paths are finite, closed and connected with zero hidden renderer trim. All 21 sampled focus-slider positions
have identical geometry/image plane: one unique infinity state. The source provides no finite-focus or numerical IS
cam, so production 3.5 m and IS metadata do not represent traced close or displaced states. No zoom exists.

All 147 full-open pupil launches are aimed. Axial/0.6-format/corner survivors of 49 are 49/38/26, and all three chiefs
clear. Surface, image-circle, strict aperture and modeled-format-corner checks pass without tolerance changes.
No inferred cut needs an exemption. The 3.16° source chief reaches 21.825210 mm (100.9% of format); the runtime
format corner is independently solved and clear. Full-field pupil transmission is not claimed. The paraxial-pupil
marginal launch reaches S2 at approximately −0.554° incidence, consistent with Figure 11's −0.55° rounded entry.

The DOE coefficients remain −4.22716e−5 and +4.71244e−10 on radial powers 2/4, order 1. The source does not supply
λ0 for Example 1; 587.6 nm remains an explicit inference. The retained derived plane closes adopted Gaussian focus
to rounding, with physical track 256.3369041 mm and reduced-air track 255.5877756 mm. Source fidelity, sampled
clearance and production correlation remain distinct; bulk spectra, exact radius provenance, finite focus, lateral IS
and microscopic diffraction efficiency remain explicit limitations.

## 2026-10-31 — d-line inferred from printed coordinates

Scope: reference-line classification and catalog curves only. No source pair, geometry, rim, stop or control changed, and no new whole-lens review is claimed.

The patent names no spectral line for its index and Abbe columns, and the 2026-10-30 review marked every medium `Unmatched` for that reason. Under the coordinate test in `src/lens-data/LENS_DATA_SPEC.md`, 16 of 16 printed pairs match a catalog nd/νd within |Δn| ≤ 6e-5 and |Δν| ≤ 0.15, and none matches a catalog ne/νe. The table is therefore read as d-line, and the per-element `indexReferenceNote` fields are removed.

16 media carry qualified catalog curves. Rows keep the earlier selection where it is still an exact match. Catalog-copied C/F/g indices and dPgF stay removed. Supplier, melt and chemistry stay unspecified.

| Element | Printed n / ν | Curve | Δn | Δν |
| --- | --- | --- | --- | --- |
| Element 1 | 1.56384 / 60.7 | S-BAL41 | -0.000001 | -0.033 |
| Element 2 | 1.51633 / 64.1 | S-BSL7 | -0.000000 | +0.042 |
| Element 3 | 1.51823 / 58.9 | S-NSL3 | -0.000001 | +0.002 |
| Element 4 | 1.7495 / 35.3 | S-LAM7 | -0.000003 | -0.017 |
| Element 5 | 1.48749 / 70.2 | S-FSL5 | -0.000000 | +0.036 |
| Element 6 | 1.6727 / 32.1 | S-TIM25 | -0.000000 | -0.001 |
| Element 7 | 1.43387 / 95.1 | CaF2 | -0.000021 | -0.104 |
| Element 8 | 1.80518 / 25.4 | N-SF6 | +0.000000 | -0.040 |
| Element 9 | 1.48749 / 70.2 | S-FSL5 | -0.000000 | +0.036 |
| Element 10 | 1.76182 / 26.5 | S-TIH14 | +0.000001 | +0.018 |
| Element 11 | 1.804 / 46.6 | H-ZLaF50D | -0.000000 | -0.025 |
| Element 12 | 1.804 / 46.6 | H-ZLaF50D | -0.000000 | -0.025 |
| Element 13 | 1.6398 / 34.5 | S-TIM27 | -0.000001 | -0.034 |
| Element 14 | 1.804 / 46.6 | H-ZLaF50D | -0.000000 | -0.025 |
| Element 15 | 1.51633 / 64.1 | S-BSL7 | -0.000000 | +0.042 |
| Rear plate F | 1.51633 / 64.1 | S-BSL7 | -0.000000 | +0.042 |
