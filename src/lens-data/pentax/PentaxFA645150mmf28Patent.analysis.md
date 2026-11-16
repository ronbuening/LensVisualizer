## Patent Reference and Design Identification
**Patent:** US 6,313,955 B1
**Inventor:** Shuji Yoneyama
**Assignee:** Asahi Kogaku Kogyo Kabushiki Kaisha
**Filed:** May 24, 2000; priority May 25, 1999
**Granted:** November 6, 2001
**Title:** Rear-focusing telephoto lens system
**Example details:** Table 1, Figures 1 and 4; infinity and both literal finite-focus rows, unscaled.

This is a representative 147 mm F2.9 patent model, NOT a verified factory prescription of the FA645 150 mm F2.8. The historical association predates this build. Seven elements in seven groups, roughly 150 mm focal length, F2.9 versus marketed F2.8 and 26.4-degree full design field versus the maker's 26-degree 645-film field support correlation, not identity. The maker's current 21-degree field refers to the smaller digital format. No usable manufacturer optical section was obtained to discriminate Embodiments 1 and 2. Embodiment 3 has six elements and is not the seven-element retail match.

Sources: [Patent and Table 1](https://patents.google.com/patent/US6313955), [primary PDF](https://patentimages.storage.googleapis.com/d3/74/ba/9ac07001808059/US6313955.pdf), [manufacturer film-format specifications](https://www.ricoh-imaging.co.jp/japan/products/filmcamera/lens/index645n2_long.html), [manufacturer current product](https://www.ricoh-imaging.co.jp/english/products/lens/645/telephoto/smcpentax-fa645-150/).

## Optical Architecture
A three-singlet positive front group precedes the stationary stop; a four-singlet positive rear group follows. All radii, axial thicknesses, indices and Abbe numbers are literal Table 1 values. Stop location is explicit. Clear semidiameters are heuristic engineering envelopes, not measured factory apertures; vignetting predictions are therefore provisional. No gap or radius correction and no geometry allowance override was applied. The inferred square-cut L5 rims (S9/S10) are now 14.05 mm rather than 14.00 mm: the wide-open infinity marginal ray needs 14.04312 mm at S9. This minimal clearance correction retains the small rear-group proportions visible in Figures 1 and 4; other rims are unchanged. The figures are not literal clear-aperture specifications.

## Element-by-Element Analysis
| Element | Power/layout | Literal nd | Vd |
|---|---|---:|---:|
| L1 | Positive front meniscus | 1.72916 | 54.7 |
| L2 | Positive meniscus | 1.61800 | 63.4 |
| L3 | Negative meniscus | 1.66680 | 33.0 |
| L4 | Positive rear-group meniscus | 1.80400 | 46.6 |
| L5 | Negative singlet | 1.64769 | 33.8 |
| L6 | Negative meniscus | 1.84666 | 23.8 |
| L7 | Positive rear singlet | 1.83400 | 37.2 |

## Glass Identification and Selection
The source supplies nd/Vd but no verified modern catalog identities. Literal values are retained. Chromatic behavior derived from nd/Vd is an approximate dispersion model, not measured spectral glass data. No ED brand or melt identity is asserted.

## Focus Mechanism
The front three singlets and stop remain fixed; the rear four singlets move toward the stop. All three Table 1 rows are now implemented, with source positions marked for patent-positions mode:

| Source state | Stop to S7 (mm) | Source BFD (mm) | Solved object-to-first-surface distance (mm) |
|---|---:|---:|---:|
| Infinity | 28.65 | 77.08 | infinity |
| Magnification −0.025 | 23.46 | 82.26 | 5800.50 |
| Closest, magnification −0.147 | 1.20 | 104.52 | 1032.86 |

The finite distances are Gaussian solves of the literal prescription at its printed image plane, not patent-published distances. Resulting magnifications −0.02534427 and −0.14711125 round to the printed decimal magnifications and pass the engine's source-magnification conjugate audit. Object-to-image distances are approximately 5.96539 m and 1.19775 m; the latter agrees with, but does not prove, the marketed 1.2 m / 0.15× product association. E2 remains an equally plausible retail association.

The source gaps place the image plane at 164.900 mm at infinity and 164.890 mm at both finite positions: the 0.010 mm printed-rounding difference is retained, not silently repaired. Stop z remains 32.930 mm throughout. Rear-group travel is −5.19 mm and −27.45 mm. Internal rear-group thicknesses remain constant. Intermediate slider states interpolate the source gaps; they are illustrative, not additional patent-certified focus positions, and have no certified finite MTF conjugates.

The printed infinity BFD 77.08 mm is retained. Independent Gaussian EFL is 146.985203 mm and infinity BFD 77.020589 mm, leaving −0.059411 mm source-plane residual. This is unchanged from the delivered baseline. The close-focus metadata now describes the model's computed 1.1977456064 m endpoint; the maker's 1.2 m is separately labeled marketing metadata.

## Aspherical Surfaces
None. Every refracting surface is spherical.

## Validation and Qualifications
Fresh refinement checks on main snapshot f5b456fec7: canonical ingestion and full surface validation pass without allowances; all literal radii, glass indices, Abbe numbers and source station gaps remain unchanged. The corrected infinity aperture passes the nominal F2.9 axial beam. Twenty-two focus states, including all three authored positions, retain zero render trimming; a 257-sample iris stroke at each state remains in air. The rear group translates rigidly and the stop stays fixed. Isolated strict TypeScript checking passes.

Reference-line (587.5618 nm), design-plane simulated geometric MTF converges at seven field fractions (0, .25, .5, .75, .9, .98, 1) for each of the three authored positions, through 40 lp/mm, with no failed or unaimed rays. This is not measured, diffraction or polychromatic MTF. The test covers the 645-format radius 34.85 mm; its infinity chief angle is 13.22874°, slightly beyond the patent's 13.2°. The finite source-conjugate audit passes both rows: paraxial source-plane residuals are approximately +0.00000136 mm and −0.00009508 mm after distance rounding to 0.01 mm.

Heuristic apertures remain a material uncertainty. Sampled axial passing fractions are 100% at infinity, 90.95% at −0.025 and 69.52% at −0.147; sampled corner fractions are 34.33%, 41.75% and 63.20%. These are aperture-dependent model results, not measured transmission. The finite stop-rim ray clips at S7, so a real working-f-number value is unavailable in those states; this is disclosed rather than enlarging the rear group to force a nominal infinity F-number at close focus. Synthetic nd/Vd dispersion remains approximate.

Full-app regression, compiled viewer/browser QA and repository integration remain separate gates unless reported completed with this refined package. No publication, deployment or factory-prescription identity is implied.
