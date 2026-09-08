# Patent Analysis: Voigtländer APO-LANTHAR 50mm f/2.0 Aspherical

## Patent Reference and Design Identification

**Patent:** JP 2021-043376 A

**Application Number:** JP 2019-166556

**Filed:** September 12, 2019

**Published:** March 18, 2021

**Inventor:** Yasuyuki Sugano

**Applicant:** Cosina Co., Ltd.

**Title:** Imaging Optical System (撮像光学系)

**Embodiment analyzed:** Example 5, Table 5, Figure 10; focus scheme F36

The viewer represents the patent example associated with the APO-LANTHAR 50mm f/2, rather than a verified manufacturing prescription. Example 5 has ten elements in eight air-spaced groups, a 49.28 mm focal length, f/1.93 design aperture, and a 23.7° half-field (§0096). Four aspheric surfaces lie on elements 2 and 10. These features support the association with the marketed lens, but do not establish identical prescriptions across Sony E, Nikon Z, or Leica M versions.

Table 5 supplies anomalous partial dispersion values for two elements. It does not identify glass suppliers or establish the APD status of the other eight elements. A production lens's advertised APD count cannot assign APD properties to particular elements in this numerical example. Earlier supplier and additional-APD attributions in this analysis were unsupported and have been withdrawn.

## Optical Architecture

The aperture separates five individual front lenses from a rear assembly consisting of two cemented doublets and an isolated negative aspheric meniscus. The power sequence is:

```text
Object → LF− Lfa+ Lfb+ Lfc+ Lfd− | stop | Lrd−/Lrc+ Lrb+/Lra− LE− → Image
         front group 101                  Jb       Ja
                                         rear group 102
```

The patent describes partial-symmetry groups with positive elements between negative elements (§§0093–0094). The front group provides positive power between its negative end lenses. The rear doublets combine positive and negative powers, followed by a field-correcting meniscus across a 12.49 mm air gap. These optical group labels are distinct from the three independently moving assemblies of F36.

The infinity vertex-to-image track is 76.01 mm, including a 15.00 mm back focal distance. These are axial prescription dimensions, not barrel dimensions. The patent supplies no numerical clear apertures. Most displayed semi-diameters remain conservative estimates; the final element uses a 15.0 mm estimated rim from Figure 10's optical outline.

## Element-by-Element Analysis

### Element 1 — LF: Biconcave Negative

nd = 1.54373, νd = 47.65; glass supplier unresolved; isolated element focal length −45.4625 mm (Table 5).

LF opens the front partial-symmetry group. Its negative power precedes three positive elements. No partial-dispersion value is published for this glass; an unmatched catalog entry does not establish anomalous dispersion or a proprietary supplier.

### Element 2 — Lfa: Positive Meniscus, Double-Sided Aspheric

nd = 1.85249, νd = 42.08; glass supplier unresolved; isolated focal length +74.5266 mm.

Both base surfaces curve toward the object (§0093). The high index permits positive power with relatively modest base curvatures, and both surfaces carry aspheric corrections. At the displayed 14.5 mm semi-diameter, calculated departures from the base spheres are −13.7 µm at surface 3A and +358.0 µm at surface 4A. The patent does not specify a molding or polishing process.

### Element 3 — Lfb: Biconvex Positive

nd = 1.49700, νd = 81.61; S-FPL51 / N-PK52A-compatible catalog models, supplier unspecified; isolated focal length +59.9999 mm.

The high Abbe number provides positive power with low primary dispersion. Table 5 explicitly lists ΔPgF = +0.0376. This supports an anomalous-dispersion designation without identifying which manufacturer's material was used.

### Element 4 — Lfc: Biconvex Positive

nd = 1.59282, νd = 68.62; FCD505-compatible catalog model, supplier unspecified; isolated focal length +55.0002 mm.

Lfc shares positive power with Lfb and carries the other published anomalous-dispersion value, ΔPgF = +0.0195. The runtime retains that patent value. A close catalog coordinate match is a dispersion-model proxy, not evidence of a Cosina–Sumita or Cosina–HOYA supply relationship.

### Element 5 — Lfd: Negative Meniscus

nd = 1.51322, νd = 57.22; glass supplier unresolved; isolated focal length −67.6136 mm.

Lfd closes the front partial-symmetry group before the stop. The air space after it grows by 0.40 mm during F36 focusing. Its APD status is not published.

### Element 6 — Lrd: Biconcave Negative, Doublet Jb

nd = 1.70269, νd = 34.87; glass supplier unresolved; isolated focal length −23.8070 mm.

Lrd is cemented to positive Lrc. Their Abbe numbers differ by 12.31, giving this opposite-power pair a means of balancing primary chromatic contributions. The patent does not publish Lrd's ΔPgF, so neither its sign nor a numerical estimate is assigned.

### Element 7 — Lrc: Biconvex Positive, Doublet Jb

nd = 1.79334, νd = 47.18; glass supplier unresolved; isolated focal length +23.3706 mm.

Lrc provides the positive member of Jb. Surfaces 12–14 remain a rigid assembly during F36 focusing. Its catalog identity is unresolved; a similar lanthanum-glass family name is insufficient to establish a material match.

### Element 8 — Lrb: Biconvex Positive, Doublet Ja

nd = 1.80258, νd = 46.60; S-LAH65V-compatible catalog model, supplier unspecified; isolated focal length +26.3092 mm.

The existing S-LAH65V catalog entry lies within the runtime's lens-to-catalog coordinate tolerances. Its use improves dispersion coverage while retaining the authored patent coordinates. It is not an assertion of historical OHARA sourcing. Lrb is cemented to Lra.

### Element 9 — Lra: Biconcave Negative, Doublet Ja

nd = 1.55362, νd = 45.38; glass supplier unresolved; isolated focal length −31.4468 mm.

The cemented interface has a large refractive-index contrast (about 0.249), while the pair's Abbe-number difference is only 1.22. This distinguishes Ja from Jb, but does not prove that either pair corrects only one aberration. Ja and LE translate together in F36, preserving the intervening 12.49 mm gap.

### Element 10 — LE: Negative Meniscus, Double-Sided Aspheric

nd = 1.51633, νd = 64.06; S-BSL7 / N-BK7-compatible catalog models, supplier unspecified; isolated focal length −96.1693 mm.

The isolated rear meniscus carries substantial aspheric departures. Figure 10 shows its optical height close to that of the first element, not the much smaller outline produced by the previous 11 mm estimate. Both semi-diameters are now estimated at 15 mm. The corrected surface-19 polynomial and this rim pass the surface-domain, edge-thickness, and air-gap validation checks.

## Glass Identification and Selection

Table 5 publishes nd and νd for all ten elements, and ΔPgF only for Lfb and Lfc. It names no supplier. Catalog-compatible labels denote computational equivalents. They do not establish chemical composition, production identity, or manufacturing process.

| Elements | Dispersion evidence | Runtime treatment |
|---|---|---|
| Lfb (3) | nd/νd and ΔPgF = +0.0376 | Compatible S-FPL51 family curve with authored anomalous-dispersion information |
| Lfc (4) | nd/νd and ΔPgF = +0.0195 | Compatible FCD505 curve with authored anomalous-dispersion information |
| Lrb (8) | nd/νd only | Compatible S-LAH65V catalog curve |
| LE (10) | nd/νd only | Compatible S-BSL7 family curve |
| LF, Lfa, Lfd, Lrd, Lrc, Lra | nd/νd only; identity unresolved | Authored nd/νd approximation |

The absence of an APD badge for an unlisted element means no element-specific evidence is supplied; it does not prove normal partial dispersion. The earlier assignment of additional APD badges to elements 1, 5, and 6 has been removed.

## Focus Mechanism

Section 0095 and Figure 10 present six alternative focusing arrangements. The viewer implements F36, using the F3s infinity column and F36 close column of Table 5. The other schemes are alternatives, not intermediate stations.

| Gap | Infinity F3s (mm) | Close F36 (mm) |
|---|---:|---:|
| ZD10, before stop | 5.49 | 5.89 |
| ZD11, after stop | 3.36 | 3.36 |
| ZD14, between doublets | 0.56 | 3.57 |
| ZD19, back focal distance | 15.00 | 20.53 |

At a fixed image plane, group 101 moves 8.94 mm toward the object, Jb moves 8.54 mm, and Ja+LE move 5.53 mm. The stop follows Jb because ZD11 remains fixed. There is no zoom mechanism in this example.

The patent's ZD0 = 370 mm is the object-to-first-surface spacing. Adding the close-state optical track of 84.95 mm gives an object-to-image distance of **454.95 mm**, used by the focus slider. It is a patent-model endpoint, not a claim about production minimum focus. Intermediate positions interpolate the two authored states; the patent does not provide an intermediate F36 cam law.

## Aspherical Surfaces

Table 5 uses a spherical base (K = 0) plus even radial powers through A10. All four coefficient rows were rechecked on the rendered original. Surface 19's A6 is **+1.8942 × 10⁻⁷**, correcting the negative sign previously stored in the viewer and repeated in this analysis.

| Surface | Estimated displayed rim (mm) | Calculated departure from base sphere (µm) |
|---|---:|---:|
| 3A | 14.5 | −13.7 |
| 4A | 14.5 | +358.0 |
| 18A | 15.0 | −2821.6 |
| 19A | 15.0 | −1531.8 |

These departures are calculations at estimated rim heights, not patent-published manufacturing specifications. The corrected sign changes the rear outline and nonparaxial tracing without changing paraxial focal length. No material transition temperature, supplier, or fabrication method can be inferred solely from the numerical prescription.

## Sources and Verification Boundaries

- [JP 2021-043376 A on Google Patents](https://patents.google.com/patent/JP2021043376A/en): original local publication inspected at 600 dpi; Table 5 on page 27, Figure 10 on page 48, and §§0092–0098 on pages 25–27.
- The local file `patents/JP2021043376A.pdf` is the primary numerical and figure source. It is retained outside version control.
- Catalog dispersion curves use the individually cited sources in the shared glass catalog. Coordinate compatibility is separate from supplier identity.
- Semi-diameters are reconstructed from the figure and geometry constraints. Focus endpoints are source-authored; intermediate movement is interpolated. Production prescription identity and unlisted partial dispersion remain unresolved.
