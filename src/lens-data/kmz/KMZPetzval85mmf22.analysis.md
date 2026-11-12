## Patent Reference and Design Identification

**Patent:** [RU 2549915 C1](https://patents.google.com/patent/RU2549915C1/en)
**Filed:** December 18, 2013
**Published:** May 10, 2015
**Inventors:** Vladimir Alexandrovich Bogdankov; Artem Andreevich Timirev; Sergey Ivanovich Shcheglov
**Assignee:** OJSC Krasnogorsky Zavod im. S. A. Zvereva (now PJSC Krasnogorsky Zavod named after S. A. Zverev)
**Title:** Four-element objective (Четырёхлинзовый объектив)
**Example details:** whole Table 1, original publication page 5.

The [original publication copy](https://patenton.ru/patent/RU2549915C1.pdf) is hosted by a third party, not downloaded from the patent office. Its table was visually verified. The [maker's Petzval 2.2/85 archive](https://www.zenitcamera.com/archive/lenses/petzval-2-2-85.html) explicitly cites RU2549915 in its Sources section as plain text, not a patent hyperlink. This supports a named production-family association, not a factory-exact prescription.

The maker lists actual focal length 84.74 mm, back focus 46.04 mm and vertex track 56.2 mm. The patent prints 84.01 mm, 43.22 mm and a table track totaling 58.2 mm. These differences remain explicit; the prescription is neither rescaled nor fitted to retail dimensions. Native first-order EFL is 84.07698069 mm and matrix BFL is 43.29029048 mm, residuals +0.06698069 and +0.07029048 mm relative to the printed patent values. These exceed half the last printed digit and are not dismissed as rounding. The image remains at the printed source position, z101.42 mm.

## Optical Architecture

Four spherical glasses in three groups: front cemented positive/negative pair, separated negative singlet and positive rear singlet. Radii, thicknesses and materials are literal, unscaled Table 1. Source optical clear diameters are 37.5, 35.2, 33.2, 23.1, 21.5, 22.4 and 22.4 mm; corresponding model semidiameters are exactly half. They are published light diameters, not inferred mechanical shoulders or performance-fitted rims.

The patent explicitly places the aperture 3 mm before lens 3. Its vertex coordinate is z35 mm, splitting the 21 mm air gap into 18 + 3 mm without changing the prescription. Physical stop semidiameter 11.41240538 mm is engine-derived from nominal f/2.2, not separately printed by the patent. No aperture diameter or geometry override was used. Native entrance-pupil semidiameter is 19.10840470 mm; effective f-number is 2.2, not a silently clamped value.

## Element-by-Element Analysis

- L1: positive biconvex TK21, R43.05/-66.53, thickness13 mm, nD1.6568/VD51.11.
- L2: negative concave-plane TF5 cemented to L1, R-66.53/flat, thickness4 mm, nD1.755/VD27.52.
- L3: negative biconcave LF5, R-45.29/26.3, thickness8 mm, nD1.5749/VD41.3.
- L4: positive symmetric biconvex TK21, R42.17/-42.17, thickness8.8 mm, nD1.6568/VD51.11.

These describe geometrical power signs and material assignments, not measured isolated aberration contributions. The publication's aberration table is a source claim, not reproduced performance evidence for this draft.

## Glass and Dispersion

The original explicitly names spectral D and labels nD/VD. Each material retains `indexReference: D`; no helium-d relabeling, LZOS catalog replacement or fitted index conversion is used. Named glass families do not establish factory melt data. Native Abbe-based dispersion is approximate; full wavelength-dependent indices and anomalous partial dispersion are not supplied. Monochromatic diagnostic success does not validate chromatic performance or the patent's 435–656 nm correction claim.

## Focus and Operating Limits

Static infinity-only model. The maker's rack-and-pinion focusing mechanism does not supply a prescription travel law here; the infinity sentinel is not a claim of reconstructed close focus. Source full field is 32 degrees, implemented explicitly as 16-degree maximum semi-field. Only the source f/2.2 state is exposed; additional retail aperture inserts have not been modeled.

Fresh bounded native construction and geometry checks pass at the unchanged source dimensions. A 25-sample circular pupil plus separately traced chief (center counted twice) gives: axis26 successful; 8 degrees14 successful/12 clipped; 12 degrees12 successful/14 clipped; 16 degrees4 successful/17 clipped/5 blocked. Chiefs pass and field bundles exist at every sampled field. Counts are sparse diagnostic samples, not throughput or relative-illumination estimates. Strong peripheral losses and blocked edge launches remain; no rims were enlarged to remove them.

This hidden draft is for qualified downstream review, not a finished acceptance claim. Strict TypeScript, isolated native import and sparse rays are focused checks only. Full corpus integration, production build, rendered viewer comparison, dense pupil analysis and MTF/aberration reproduction remain unrun. Source-v-retail dimensional differences remain unresolved.

## Aspherical Surfaces and Special Components

No aspheric coefficients, cover plates or filters are added: Table 1 contains only spherical/plane optical surfaces and intervening air. The flat cemented-pair exit is literal, not a guessed sensor plate. The maker's interchangeable decorative aperture inserts are not reproduced; the diagnostic uses the source circular nominal aperture. The patent's source image plane and published optical boundaries are retained without refocusing or compensating hidden surfaces.
