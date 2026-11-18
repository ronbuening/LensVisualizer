# Kapella / Warmisham Example II 100.4 mm f/2

## Patent Reference and Design Identification

**Patent:** [US 2,130,760](https://patentimages.storage.googleapis.com/46/03/37/6ba37a50f6a7a4/US2130760.pdf), Example II, Figure 6.  
**Inventor:** Arthur Warmisham. **Assignee:** Kapella Limited.  
**US application:** 5 May 1937. **British priority:** 5 May 1936. **Grant:** 20 September 1938.

This is a patent-only reconstruction, not a verified production-lens prescription. Neither a retail model nor a factory glass supplier has been established. The scanned numerical table and Figure 6 were visually inspected; OCR alone was not used as authority. It is distinct from previously delivered Kapella/Lee US2012822 and Warmisham/Wynne US2194413.

## Optical Architecture

Eight spherical glass elements form four air-spaced groups: a front singlet, a cemented triplet, a second cemented triplet, and a rear singlet. The inner compound meniscus components surround the diaphragm. The patent describes their arrangement as a means of improving oblique spherical aberration; that claim is not treated as verified modern image-quality performance.

## Prescription and Scaling

The source gives relative aperture f/2 and EFL 1.004. All dimensional values are uniformly scaled by 100, producing the nominal 100.4 mm class, without changing radii ratios, refractive indices, Abbe values, or spacings. The independent paraxial result is **100.40104104780512 mm**, about **+0.001037%** versus the printed scaled EFL. The calculated infinity image distance is **71.10541418018414 mm** from the last vertex. This BFD is a modeled paraxial result, not a printed source value.

| Interface | Radius, mm | Following thickness/space, mm | Following element |
|---|---:|---:|---|
| 1 | 69.25 | 8.2 | L1 |
| 2 | 263.2 | 0.1 | Air |
| 3 | 36.97 | 6.2 | L2 |
| 4 | 142.9 | 4 | L3 |
| 5 | 20.12 | 5.4 | L4 |
| 6 | 24.39 | 8 | Air |
| STO | flat | 8 | Air |
| 7 | -28.82 | 5.4 | L5 |
| 8 | -21.32 | 3 | L6 |
| 9 | 200 | 5.5 | L7 |
| 10 | -38.7 | 0.1 | Air |
| 11 | 208.3 | 6 | L8 |
| 12 | -100.12 | 71.1054141802 | Air |

The two outer source air gaps of 0.001 are retained as 0.1 mm after scaling. The 0.160 central source gap remains 16 mm, split into 8 mm on either side of the inferred diaphragm. No source radius, thickness, index, or Abbe value was repaired or fitted.

## Glass Identification and Selection

The table specifies sodium D-line indices, preserved using `indexReference: "D"`, not silently converted to helium d. No catalog glass identity or historical supplier is asserted. Dispersion inferred from the index/Abbe pairs is a modeling approximation; no partial-dispersion, APO, or melt-level claim follows.

| Element | Shape label | nD | V |
|---|---|---:|---:|
| L1 | Positive Meniscus | 1.613 | 59.3 |
| L2 | Positive Meniscus | 1.621 | 60.4 |
| L3 | Negative Meniscus | 1.605 | 38.2 |
| L4 | Positive Meniscus | 1.652 | 33.5 |
| L5 | Positive Meniscus | 1.652 | 33.5 |
| L6 | Biconcave | 1.605 | 38.2 |
| L7 | Biconvex | 1.621 | 60.4 |
| L8 | Biconvex | 1.621 | 60.4 |

## Stop, Clear Apertures, and Focus

The source establishes the diaphragm's central region but does not tabulate its precise coordinate or clear diameter. Centering it in the 16 mm gap is an explicit estimate. Clear semi-diameters by numbered interface are **28, 28, 23, 23, 17.5, 17.5, 17.5, 17.5, 18, 18, 25, 25 mm**. These are heuristic reconstruction limits, not factory dimensions. Generous initial estimates failed geometry and were reduced without altering literal optics. No gap-sag allowance override was used.

The model is infinity-only, with the supported effectively infinite close-focus convention (`closeFocusM: 1e15`); it makes no claim about a historical focusing mechanism or near-focus performance.

## Verification Summary and Qualifications

Fresh scoped checks found zero canonical errors and zero render trims. All 181 axial samples spanning ±90% of the paraxial pupil passed. Seven shared independent exact-Snell and native image-height samples agreed within **4.2633e-14 mm**. The physical iris sweep has minimum clearances **0.725012 mm** before and **2.172258 mm** after. Independent interface sampling retained positive thickness/clearance, minimum **0.037535 mm**. Scoped strict TypeScript, eslint and prettier passed.

Full f/2 pupil performance is not established: native exploratory ±99% rays clip at the estimated surface-5 rim; the independent extended trace fails its spherical-intersection domain. The 10° and 20° diagnostic field samples clip 4/9 and 6/9 respectively. These are not source coverage claims. MTF support probes do not validate MTF quality.

The file remains hidden (`visible: false`). Full-app regression, compiled viewer/browser QA and final integration compatibility remain integration work. See the companion audit for provenance and inherited-versus-fresh evidence.
