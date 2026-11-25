## Patent Reference and Design Identification

**Patent:** US 4170403 A, Retro focus type wide angle lens
**Application Number:** US848016A
**Filed:** 1977-11-02; Japanese priority1976-11-09
**Granted:** 1979-10-09
**Inventor:** Toshiko Shimokura
**Applicant:** Konishiroku Photo Industry Co., Ltd.
**Example details:** Example3, Figure5; original signed numerical table and infinity/diaphragm footnote on PDFp8.

Production-correlated patent reconstruction for the **late Konica Hexanon AR28mm f/3.5,5elements/5groups, dealer703-191, f/22 minimum**, documented on the actual Konica/Berkey dealer notebookp6. Both original PDFs are locally in custody with SHA-256 in SOURCE_CUSTODY.json. This is not an earlier seven-glass28/3.5, the same family's35/2.8 Example1 already in Surface & Stop, or its f/2.8 Example2. No factory-exact prescription assertion.

The exact factory-section crop at400dpi is rotated90degrees, then source numerical spherical profiles are registered between x60/x416 on axis149. Each example uses one uniform scale and translation for the entire stack, with no anisotropic scaling or per-element adjustment. Example3 matches the front meniscus, central positive singlet, rear biconcave and two rear menisci. At twelve repeatable samples on six unmerged profiles, RMS is1.41244pixels versus6.26493 for Example2. Close rear interfaces merge in the OEM line weight and are not individually measured. Diagram rim extents limit profile display only and do not supply native clear-aperture dimensions. Glass identity cannot be checked from this monochrome schematic; literal patent indices are retained.

Source f=1, f/3.5, full75degrees and fB1.241 are documentary. One uniform multiplier28 converts source radii/thicknesses/air gaps/iris position to millimetres; computed native EFL is28.0074587423mm. Literal rear air34.748000mm and detector z66.992800mm are retained, while the independent paraxial BFD34.765190mm is17.190micrometres behind the printed plane. No focus correction, shim or filter is introduced.

## Optical Architecture

Five air-separated spherical singlets: negative front meniscus, positive biconvex, negative biconcave, and two positive menisci whose concave surfaces face the object. There are no cemented contacts, aspheres or plates in this example. All signed source values remain unchanged apart from the single disclosed dimensional scale.

## Element-by-Element Analysis

| Element | Printed nd/Vd | Form |
|---|---|---|
|E1|1.5891/61.1|Negative meniscus|
|E2|1.7200/43.7|Positive biconvex|
|E3|1.7847/26.2|Negative biconcave|
|E4|1.8061/40.9|Positive meniscus|
|E5|1.6230/58.2|Positive meniscus|

The source explicitly places the iris0.087 behind its fourth surface for infinity. Its physical z23.4444mm,2.4360mm afterS4 and2.2540mm beforeS5 are preserved. Iris radius and optical caps are estimates. All0.0035-source-unit rear air is preserved as0.0980mm; no trim or override.

## Glass Identification and Selection

Exact printed nd/Vd, without a stock-glass or chemical identity substitution. Source states d-line. Runtime qualification is only helium d587.5618nm, not a broadband/color claim. No sensor or coating effects are modeled.

## Focus Mechanism

Stationary source infinity configuration only. The marketed close-focus specification is documentary and does not create a numerical finite mode, focus schedule or mechanical drive model.

## Scoped Validation and Integration

The operational model is stopped to **f/8-control, static infinity, actual±5degrees only**, not source f/3.5 or75degree coverage. The native paraxial iris estimate is2.122070362773mm; independent real axial marginal entrance ratio isf/8.028884. Conservative estimated caps come from actual independent f8 pupil sweeps plus margin and satisfy default native geometry; they are not factory rims. Minimum dense co-radial separation is0.098mm. Default native import and exact JSON roundtrip pass with zero render trim.

1173 full2D pupil samples at each of−5,−2.5,0,+2.5,+5degrees all reach the fixed source plane without clipping or unknown failures. Native intersections are independently compared surface-by-surface. Native geometric and scalar sheared-pupil diffraction MTF converge at0,2.50335 and4.99973degrees with no focus shift/unknown flux. Independent geometric64/96cell pupil calculations differ from native by at most0.002330 and between grids by0.001003. These are simulated, not measured factory MTF. Six output files reproduce byte-identically in fresh isolated processes. The existing201 Builder/geometry/MTF tests passed on this same pinned engine commit in the preceding Takumar task; that shared baseline is not claimed as a new run here.

Per Ron's updated direction, **actual desktop/mobile import/render/control/export/reload QA is deferred to integration, not passed, and is not alone a batch-eligibility blocker**. No unsupported browser route was retried, and no service was started. This candidate is eligible only as this disclosed scoped production-correlated reconstruction, pending parent custody/admission and completion of six-family assembly. No user delivery, public registration or publication has occurred.

## Sources

- Exact patent original: https://patentimages.storage.googleapis.com/04/e4/41/0cfb6ccdc6aeed/US4170403.pdf
- Original Konica/Berkey manufacturer dealer notebook,1980,p6: https://pacificrimcamera.com/rl/02831/02831.pdf
- Signed structured cross-reference: https://patents.google.com/patent/US4170403A/en (web reader unavailable here; original signed facsimile supplies numerical authority).
