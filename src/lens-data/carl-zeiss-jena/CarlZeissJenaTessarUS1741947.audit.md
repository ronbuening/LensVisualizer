# US 1,741,947 A audit

## Source

Willy Merté's sole numerical example appears in the drawing on PDF page 1 and in the typed specification on page 2. The patent was published on 31 December 1929, filed on 11 June 1927 and claims German priority of 26 June 1926. It names the firm Carl Zeiss, Jena; the assignee entry uses Carl-Zeiss-Stiftung.

## Transcription

Two independent readings of the page images agree on all seven signed radii, seven axial thicknesses and separations, four D-line indices, four Abbe values in the typed table, the 4.42/2.29 mm stop split and the cemented R6 interface. R2 and R5 are optical flats. Element III's Abbe number is 51 in the drawing and 51.4 in the typed table; the prescription retains 51.4. There are no aspheres or variable gaps.

The diagram's I–IV sequence agrees with the four elements in three groups: I | II | III+IV. Every finite radius sign is printed.

## First-order Properties

The printed nominal focal length is 100, the maximum aperture is f/3.5 and the full field is 55°. The D-line calculation gives EFL 100.04746793 mm, paraxial f/3.5 and BFD 85.28442869 mm. The first-to-last vertex track is 29.99 mm and total distance to the image is 115.27442869 mm. The patent does not print a back focal distance; the last gap is the computed paraxial infinity distance.

The derived iris radius is 11.90008518 mm. Exact axial tracing gives a real-ray entrance equivalent of f/3.5490; an iris radius of 12.07199844 mm would accept the nominal f/3.5 marginal ray. The 27.5° chief-ray image height is 51.64093803 mm, giving an image-circle diameter of 103.28187607 mm.

The stated curvature conditions hold: the outer absolute radii sum to 79.30 mm against a 75 mm minimum, the middle element's absolute radii sum to 99.98 mm against 90 mm, and the cemented radius 28.50 mm is below five sixths of the rear radius magnitude.

## Values Not Printed

The iris diameter, every clear semi-diameter, the image distance and the image-circle diameter are inferred or calculated. The stop position itself is printed. The infinity-only focus setting does not establish a production focusing mechanism or minimum focus distance.

The glass suppliers and spectral curves are unprinted. Sumita K-SK7 and Hoya FL57 match the first two elements' coordinates at the D line, but do not identify the historical melts. Elements III and IV remain unmatched.

## Product Relationship

The positive singlet, biconcave singlet and rear cemented pair have the Tessar form. ZEISS's [Tessar history](https://lenspire.zeiss.com/photo/app/uploads/2018/02/cln39_en_web_special_tessar.pdf) documents the architecture and f/3.5 production lenses. No source links this numerical prescription to a specific production Tessar. Merté and Wandersleb's later [US 1,849,681 A](https://patents.google.com/patent/US1849681A/en), with German priority in 1930, has different prescriptions.

## Corrections and Retained Decisions

The front semi-diameter estimate was reduced from 19 to 16.2 mm to remove unnecessary overhang without reducing the accepted rays in the comparison. The other retained estimates are R2 15.8, R3 16.0, R4/R5 15.2, R6 15.7 and R7 16.5 mm. No source radius, axial spacing or glass coordinate was adjusted to change image quality.

The original spectral description covered the D-line result and did not identify any historical glass supplier. Catalogue matches for the first two elements now supply dispersion curves; the remaining two use Abbe-based estimates.

## Remaining Questions

Open: The drawing suggests smaller outer rims, about 13.7 mm, and about 11.7 mm before the R4/R5 chamfers. The estimated rims are larger, with an approximately 0.24 mm edge on I and a pointed IV rim extending beyond the cemented interface. The drawn front radius also falls short of the nominal f/3.5 axial beam. The rim dimensions remain unchanged pending resolution of these competing constraints.

Open: No production prescription, historical melt identity or measured spectral performance has been established.

## 2026-11-21 — Deployment validation and cleanup

Two independent re-readings of the page images found no prescription mismatch, apart from the drawing's rounded ν(III) = 51 versus the typed 51.4 retained in the model. The prescription is consistent with the sole example; the Tessar connection is a design-family relationship, without evidence for a particular production lens.

Changes:

- Type import: a scratch-relative path → the house `../../types/lensDataV2.js` path; object and default export: `data` → `LENS_DATA`. Added one source header explaining the printed stop station, inferred rims and iris diameter, computed image plane and III's Abbe-number difference.
- Key: `merte-us1741947-dline-reference` → `carl-zeiss-jena-tessar-100mm-f35-us1741947`; maker: null → Carl Zeiss Jena; name: the short Merté patent title → CARL ZEISS JENA TESSAR 100mm f/3.5 (US 1,741,947 Design); visible: false → true.
- Subtitle: the aperture-and-identity disclaimer → “US 1,741,947 A, sole example — Tessar-type design.” Six crowded specification lines → “4 ELEMENTS / 3 GROUPS,” “ALL SPHERICAL,” and “DESIGN F/3.5.”
- Catalogue design focal length: 100 → 100.05 mm, the rounded computed EFL. The four-element/three-group counts, f/3.5 design aperture, 55° full field, 27.5° tracing limit and chief-ray-derived image circle remain unchanged.
- Element labels: L1–L4 → Element 1–Element 4, with diagram numerals I–IV added. Added standalone focal lengths +52.84, −35.16, −54.13 and +29.70 mm, and short optical roles. Added C1 to III and IV and an R5–R7 doublet annotation. All four shape names remain unchanged.
- Glass I: the generic unmatched description → K-SK7 (Sumita), resolving to Sumita K-SK7. At D, Δn = +0.00002708 and Δν = −0.04314. Glass II: the same generic description → FL57 (Hoya), resolving to Hoya FL57, with Δn = +0.00008119 and Δν = +0.08456. Printed indices and Abbe numbers remain unchanged.
- Glass III and IV: generic unmatched descriptions → “Unmatched (nD 1.52648 / ν 51.4)” and “Unmatched (nD 1.62377 / ν 56.9).” No catalogue row meets the matching limits for either; relabelling changes neither coordinate (Δn = 0, Δν = 0).
- Focus description: compressed source and aperture notes → “Infinity focus only; the patent gives no close-focus data.” The close-focus placeholder remains numerically 1e15, written in exponential form. No minimum-focus catalogue claim, mount, format or special-dispersion tag was added.
- Analysis: replaced internal production notes, sampling counts, tuning instructions and MTF convergence tables with the patent identification, architecture, element powers, glass evidence, focus limits, aperture/field explanation, curvature conditions and cited family relationship. The audit now records source evidence, transcription, first-order results, unprinted values, product relationship, corrections and remaining questions.

Before → after: EFL 100.04746793 → 100.04746793 mm; paraxial f-number 3.5 → 3.5; BFD 85.28442869 → 85.28442869 mm; half-field 27.5° → 27.5°; iris radius 11.90008518 → 11.90008518 mm. The prescribed surfaces, stop position, image plane and rims are unchanged.

Surface checks report no errors. Aperture checks find no rim limit or trace failure and place the real-ray aperture within 3% of the stated f-number. Image-circle checks report no undersized lens and no skipped lens. Field coverage is 100% at the 27.5° corner: the chief ray reaches 51.64 mm of the 51.64 mm required radius, with no chief-ray blockage. This describes chief-ray coverage, not uniform pupil illumination.

Open: Resolve the oversized rims against the drawing, especially the thin edge of I and pointed rim of IV, without cutting the required axial beam. The production-lens connection and historical glass identities remain unestablished.
