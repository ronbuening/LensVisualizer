# Audit Log — Minor US 1,360,667 Figure 2

Patent: US 1,360,667 A, Figure 2; specification page 2, left column.

## 2026-11-08 — Literal source reconstruction and independent transcription review

| Item | Authored value / disposition | Source and rationale |
| --- | --- | --- |
| r1–r8, mm | +37.0, +76.0, +31.5, plane, −160.0, +22.5, +80.0, −72.0 | Figure 2 numerical table, literal signs and scale. |
| d1, b1, d2, b2, d3, b3, d4, mm | 4.34, 0.05, 6.90, 1.20, 3.20, **10.00**, 7.24 | Same table; b3 visually checked. |
| L1 nC/nD/nF; νD | 1.6088/1.6120/1.61963; 56.6 | Figure 2 glass table; derived νD 56.5097 kept separate. |
| L2 nC/nD/nF; νD | 1.51446/1.5170/1.52305; 60.2 | Same table; derived νD 60.1863 is consistent with rounding. |
| L3 nC/nD/nF; νD | 1.61205/1.6169/1.62896; 36.4 | Same table; derived νD 36.4814 kept separate. |
| L4 nC/nD/nF; νD | 1.56967/1.5726/1.57962; 57.4 | Same table; derived νD 57.5477 kept separate. |
| Spectral reference | Native sodium D; 589.2938 nm engine convention | Source explicitly names solar C, D, F; no individual D component specified. No helium-d relabeling. |
| Glass identity | All four intentionally unmatched; no modern proxy | Source names crown/flint classes but no vendor or melt. No measured g supplied. |
| Groups / orientation | Four air-separated elements, incident light from left | Specification page 1 and Figure 2; L2/L3 explicitly uncemented on page 2. |
| Stop plane | Inferred 9.5 mm behind r6; 0.5 mm before r7 | Figure 2/text establish L3–L4 gap only; exact coordinate unknown. |
| Clear semi-diameters | Inferred L1 19 mm; L2–L4 17.6 mm, both faces | Largest source diameter 38 mm; drawing heights approximately 303:280. No per-face optical aperture table. |
| Rear image distance | Derived D-line paraxial BFD 63.84069249 mm | Literal prescription matrix; not a source-listed image gap. |
| Close focus | Illustrative 2 m unit focus, BFD 67.89141082 mm | Derived conjugate; no source focus motion or endpoint supplied. |
| Focal-distance statement | Unresolved, retained verbatim in notes | Printed “focal distance 65 mm”; literal EFL 85.90659261 mm and BFD 63.84069249 mm. No source evidence isolates a correction. |
| Aperture statement | Unresolved, clear-aperture limited | Printed f/2; required paraxial pupil 42.9533 mm exceeds largest glass diameter 38 mm. Exact reconstructed axial census ≈ f/2.3161, limited at r3. |
| Field statement | Source claim ≈65°; performance unverified | No source image height or modern format assigned; runtime field is not certification. |

The original PDF is preserved. The copied source has 460339 bytes and SHA-256
`bd2e4ed80d6e371bd1330c5f710b8412d0c74162169278b35ad822aea25e0785`.
The table, figure, line labels, and accompanying text were visually inspected. An independent
review reproduced the literal transcription and first-order matrix without using the authored file.
No source radius, spacing, glass index, Abbe number, or sign was corrected or optimized.

The first-to-last vertex length is 32.93 mm. An independent exact sphere/Snell calculation
converges to the paraxial BFD near the axis, but axial crossings at launch heights 5/10/15 mm
are approximately 64.12458/65.35113/69.44559 mm behind the last vertex. Consequently the
source's stated spherical-aberration correction is not established by this literal reconstruction.

### Open source limitations

The exact clear apertures, stop coordinate, and meaning of “focal distance” remain unknown.
The f/2 and 65 mm claims cannot both be asserted as reproduced specifications. Do not enlarge
glass or change the table to force them. This lens is a qualified reconstruction pending a
source-consistency decision; it is not ready to publish as a performance-validated example.

## 2026-11-08 — Historical reconstruction scope and aperture semantics

The title now identifies Figure 2 as a patent reconstruction, without combining the computed
86 mm rounding with the unresolved f/2 source rating. Source notes remain available in the
default viewer even while companion descriptions are disabled. No literal optical value changed.

The nominal f/2 iris has physical diameter 33.0583 mm and paraxial entrance pupil 42.9533 mm.
The modeled accepted axial collimated beam is 37.0913 mm across, limited by r3. EFL divided
by that beam diameter is 2.3161; the limiting ray's real image-space NA instead corresponds
to f/2.8069. Neither number is a T-stop or a measurement of historical transmission.

The native-D estimate converges at sampled fractions 0–0.7 at f/4 and 0–0.9 at f/8,
under the existing numerical criterion. At f/2 every sampled field remains unconverged.
These are numerical limits of the reconstruction, not reproduced historical ratings.
The release scope is a faithful, qualified numerical example; the 65 mm/f/2/field claims
remain unresolved and cannot be advertised as validated performance.

## 2026-11-08 — Spectral review and independent performance cross-check

The catalog title now follows the historical source-rated convention: **MINOR PHOTOGRAPHIC
OBJECTIVE 65mm f/2**. Figure 2 attribution and the unresolved rating discrepancies remain in
source metadata, specs, and visible notes. Catalog design focal length records the explicitly
computed 85.9065926111 mm EFL; no commercial marketing value, manufacturer, mount, format,
or image circle is inferred.

Missing g now uses the C/F-derived Abbe coordinate rather than the rounded printed value.
Published C/D/F and Abbe values remain unchanged. The independent analytic Snell/RMS check
in the companion analysis confirms substantial literal axial blur even after refocusing;
no supported transcription correction emerged. The native-D convergence envelope is unchanged.
The small photopic changes and the distinction between physical blur and numerical
nonconvergence are quantified in the companion analysis.

## 2026-11-09 — Sibling-example cross-check, misprint scan and retitle

The title returns to **MINOR PHOTOGRAPHIC OBJECTIVE (Figure 2 patent reconstruction)**, and the
display-name rule for unresolved historical ratings is restored in `LENS_DATA_SPEC.md`. The
reason is new evidence that the 65 mm and f/2 statements are not properties of Figure 2.
No optical value, rim, stop or focus setting changed.

**Shared rating text.** Figures 3 and 4 close with the same words as Figure 2: “focal distance
65 mm; diameter of largest lens 38 mm; effective aperture .5 or f/2”. An independent D-line
exact trace (spherical surfaces, vector Snell) of each printed table, which reproduces this
file's Figure 2 EFL, BFD and axial crossings to the printed digits, gives:

| Example | Paraxial EFL | Paraxial BFD | Min-RMS axial spot, 32.5 mm beam | Crossings at h = 5/10/15 mm |
| --- | ---: | ---: | ---: | --- |
| Figure 2 | 85.907 mm | 63.841 mm | 0.267 mm | 64.125 / 65.351 / 69.446 mm |
| Figure 3 | 82.774 mm | 56.351 mm | 0.040 mm | 56.130 / 55.663 / 55.969 mm |
| Figure 4 | 67.654 mm | 43.676 mm | 0.179 mm | 43.285 / 42.152 / 40.496 mm |

Both later tables list the rear-doublet radii in numeric order (r7, r8, then the common radius).
Read in that order, each doublet has negative edge thickness. The only realizable order puts
the common radius in the middle: Figure 3 r7 +210 / r9 +35 / r8 −48, Figure 4 r7 +210 /
r9a −22.5 / r8 −48. Both rows depend on that inferred order, which edge thickness forces. The 65 mm statement matches
neither the EFL nor the BFD of Figures 3 and 4, so its closeness to Figure 2's BFD is best read
as coincidence, not as a back-focus convention.

**Aperture reading.** Against the source's own 65 mm, “.5 or f/2” is a 32.5 mm beam, which fits
the 38 mm largest lens in all three examples. At Figure 2's computed EFL that beam is f/2.64.
`aperture.nominalFNumber` stays at the source's stated f/2 (spec § patent transcription, item 8).

**Single-slip misprint scan.** Figure 3 shares L2/L3 glass and has similar radii but is well
corrected, so a Figure 2 misprint is plausible. Every radius and spacing was varied by sign
flip, one-digit change, adjacent-digit transposition and ×10/÷10, scored by min-RMS axial spot
on the 32.5 mm beam (literal 0.267 mm). Best plausible results:

| Edit | EFL | BFD | Min-RMS spot |
| --- | ---: | ---: | ---: |
| r5 −160.0 → −360.0 | 76.41 mm | 54.52 mm | 0.014 mm |
| b2 1.20 → 4.20 | 80.47 mm | 51.37 mm | 0.018 mm |
| r6 22.5 → 25.5 | 73.16 mm | 51.77 mm | 0.021 mm |
| r1 37.0 → 32.0 | 71.60 mm | 47.94 mm | 0.024 mm |

d3 3.20 → 32.0 scores best numerically but gives a 15.6 mm BFD and an implausible element, so it
is rejected. r1 = 32.0 matches the front radius of Figures 3 and 4 (32.2 and 32.0), which makes
it the leading candidate, but Figure 2's other radii also differ from those examples. None of
the edits reproduces 65 mm. The patent prints no aberration curves and no family publication is
on file, so no edit meets the two-evidence errata standard; the literal table is retained.
