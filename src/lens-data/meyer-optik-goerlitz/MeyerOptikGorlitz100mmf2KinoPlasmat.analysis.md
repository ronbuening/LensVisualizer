## Patent Reference and Design Identification

**Patent:** DE 401630 — *Photographisches Objektiv*\
**Patent effective from:** 31 December 1922\
**Published:** 6 September 1924\
**Inventor:** Paul Rudolph\
**Embodiment analyzed:** Example III

The modeled prescription is Example III of DE 401630. The patent gives this example a relative aperture of 1:2 and a
whole-objective focal length of 100 mm, and describes it as hemisymmetrical: the two halves separated by stop B have the
same general construction but unequal focal lengths. The numerical table is on patent page 3; the corresponding section
is Fig. 3 (*Abb. 3*) on patent page 4.

The link to the production Meyer Optik Görlitz Kino-Plasmat 100 mm f/2 is strong enough for research correlation but is
not manufacturer confirmation of the exact prescription. The patent itself names Rudolph but not Hugo Meyer. Meyer Optik
Görlitz's official history independently places Rudolph's cooperation with Meyer in 1920–1942, associates that cooperation
with the Plasmat family, and identifies the Kino-Plasmat as a product of that period. A surviving 1930 specimen recorded
by Leitz Photographica Auction is explicitly identified as a Hugo Meyer Kino Plasmat 2/10 cm. That object record confirms
that a 10 cm f/2 Kino-Plasmat existed, but it does not publish its prescription. The data file therefore retains the
production correlation as qualified rather than treating DE 401630 Example III as a manufacturer-certified production
formula.

## Optical Architecture

Example III is a six-element, four-group, all-spherical objective arranged around a central aperture stop. From object to
image, the four groups are a cemented positive outer doublet, a negative meniscus, a second negative meniscus, and a
cemented positive outer doublet. The stop lies between the two inner menisci. DE 401630 claim 1 describes the inner
members as dispersing convex-concave components and the two stop-separated halves as essentially proportional in their
successive radii, thicknesses, and separations.

The architecture is deliberately only approximately symmetric. The final d-line model gives the front functional half an
EFL of 159.160 mm and the rear half an EFL of 141.048 mm. Their outer cemented positive groups are likewise unequal: the
front pair has a standalone cemented EFL of 82.318 mm, while the rear pair has 72.773 mm. These are computed group and
half-system quantities, not the same thing as the isolated focal lengths of the individual glass elements.

The first-to-last refracting-vertex track is 63.75 mm, while the modeled whole-system EFL is 100.158 mm. Under the
project's numerical terminology, TL/EFL = 0.636 is below unity, so the modeled prescription meets the telephoto criterion.
Its BFD/EFL = 0.701 is below unity, so it is not retrofocus. These are paraxial classifications of the modeled prescription,
not terms used by DE 401630. The modeled back focal distance is 70.196 mm from the final refracting vertex because the
patent does not publish an image-plane spacing.

## Element-by-Element Analysis

### L1–L2 — Front Cemented Positive Doublet

`L1`: nd = 1.62190; νd unavailable. Glass: Unmatched SK/BSM/BACD-family dense-crown coordinate; isolated
f = +55.973 mm.\
`L2`: nd = 1.54641; νd unavailable. Glass: Unmatched light-flint-class coordinate; isolated f = −158.709 mm.

L1 and L2 share the cemented surface corresponding to patent radius r2. Their isolated powers have opposite signs, but
the cemented pair remains strongly positive, with a computed EFL of 82.318 mm. In the patent's functional description,
this pair belongs to the front collecting portion of the objective. The data model assigns the cemented interface to L2,
the downstream glass, rather than inserting a synthetic cement layer.

The individual focal lengths above are thick-element powers calculated with each element isolated in air. They should not
be read as the power of the cemented pair in situ. The pair's net power and the complete front half are separately
calculated quantities.

### L3 — Front Inner Negative Meniscus

nd = 1.62616; νd unavailable. Glass: Unmatched F1-family coordinate; modern 626357 class match, supplier unconfirmed; isolated f = −132.838 mm.

L3 is the front inner dispersing member. It is air-separated from the front cemented doublet and terminates just before
the stop region. Its isolated sign is negative, consistent with the patent's description of the inner components as
dispersing members. The evidence does not justify assigning a specific aberration-correction task to L3 beyond that
source-described structural role.

### L4 — Rear Inner Negative Meniscus

nd = 1.62616; νd unavailable. Glass: Unmatched F1-family coordinate; modern 626357 class match, supplier unconfirmed; isolated f = −117.170 mm.

L4 is the rear counterpart to L3 and uses the same source glass coordinate. It is also a negative meniscus, but its
curvatures and thickness belong to the reduced-scale rear half rather than forming an exact mirror image of L3. Its
isolated power is correspondingly stronger in magnitude than L3's. As with L3, no element-specific coma, spherical, or
chromatic correction claim is inferred solely from its power sign or glass class.

### L5–L6 — Rear Cemented Positive Doublet

`L5`: nd = 1.54641; νd unavailable. Glass: Unmatched light-flint-class coordinate; isolated f = −140.081 mm.\
`L6`: nd = 1.62190; νd unavailable. Glass: Unmatched SK/BSM/BACD-family dense-crown coordinate; isolated
f = +49.456 mm.

L5 and L6 form the rear cemented outer group. Their isolated powers again oppose one another, but the cemented pair is net
positive, with a computed EFL of 72.773 mm. The rear pair is therefore stronger than the front pair, consistent with the
patent's statement that the two same-form halves have different focal lengths.

The cemented interface is carried by L6 in the data model because L6 is the downstream medium after that surface. The
pair then exits directly to the final air space leading to the modeled image plane.

## Glass Identification and Selection

The patent does not publish modern d-line `nd`/`νd` pairs. It gives only `nD` and `nG′` for three repeated glass
coordinates: one used by L1/L6, one by L2/L5, and one by L3/L4. G′ is the hydrogen H-gamma line near 434.047 nm and is
not the modern g line. Because the LensVisualizer data slot is d-line based, the model converts each D/G′ pair to
587.562 nm using a two-point `n(λ) = A + B/λ²` interpolation and stores the resulting d-line indices to five decimals.
That transformation changes the index reference; it does not create an Abbe number or a full dispersion model.

| Elements | Authored nd | νd | Retained glass identification |
|---|---:|---:|---|
| L1, L6 | 1.62190 | unavailable | Unmatched SK/BSM/BACD-family dense-crown coordinate |
| L2, L5 | 1.54641 | unavailable | Unmatched light-flint-class coordinate |
| L3, L4 | 1.62616 | unavailable | Unmatched F1-family coordinate; modern 626357 class match, supplier unconfirmed |

The cross-vendor catalog review supports an F1-family classification for the third coordinate, with modern 626357 rows
represented by HIKARI J-F1 and CDGM H-F13, but it does not establish the historical supplier or melt. It therefore remains
`Unmatched (...)` in the data file rather than resolving to a modern Sellmeier glass. The first coordinate is likewise
retained only at the SK/BSM/BACD dense-crown family level, and the second remains a light-flint-class coordinate. No `nC`,
`nF`, `ng`, or `dPgF` values are authored, and no apochromatic or anomalous-partial-dispersion performance claim follows
from these data.

## Focus Mechanism

The optical model uses `NO_INTERNAL_RECONSTRUCTION`. DE 401630 Example III publishes no finite-focus state, no moving
optical group, no variable spacing law, and no minimum focus distance. Accordingly, `var` and `varLabels` are empty. The runtime schema requires `closeFocusM`,
so the 1 m endpoint is an explicitly documented UI placeholder, not a measured production MFD or a reconstructed
finite-focus state.

The Leitz Auction record describes the surviving 10 cm f/2 sample as being in a heavy brass focusing mount, but that is
mechanical evidence only. It does not establish whether the optical cell moved as a unit, whether any internal motion was
used, or what the minimum object distance was. None of those unknowns is promoted into the prescription.

## Patent Conditions and Source Discrepancy

DE 401630 claim 1 requires the sum of the two outer air separations to exceed the separation of the two enclosed inner
dispersing members. With the Example III mapping, `h1 + h2 = 16.42 mm` and `b1 + b2 = 2.07 mm`; the modeled prescription
therefore satisfies the condition by 14.35 mm. These distances are direct source values, not fitted quantities.

The patent also prints half-system focal lengths of 163 mm for the front half and 141 mm for the rear half. The final
stored d-line model reproduces the rear value at 141.048 mm but gives 159.160 mm for the front half. The 163 mm figure is
therefore retained as a source discrepancy rather than being silently repaired. The complete objective still reproduces
the printed 100 mm focal length within the precision of the source, at 100.158 mm in the final d-line model.

## Verification Summary

The aperture stop is physically located at the patent's B plane, but its radius is not published. The authored
`STO.sd = 18.689528 mm` is calibrated so that the modeled entrance pupil gives f/2. Agreement with f/2 is therefore a
calibration dependency, not independent confirmation of a manufactured diaphragm diameter.

The patent gives full physical element diameters rather than optical clear semi-diameters. The model places each
refracting clear semi-diameter 0.25 mm inside the corresponding published physical rim. On the final parsed data, the
minimum modeled edge thickness is 2.554 mm, the maximum spherical rim-slope angle is 28.297°, and the maximum shared-band
air-gap intrusion fraction is 0.684. An exact meridional spherical/Snell trace through modeled fields from −6° to +6°
leaves at least 0.175 mm clearance at the refracting surfaces. The ±6° range is only a construction diagnostic; it is not
claimed as a patent or production field limit because Example III publishes no field angle or image circle.

The final model is all-spherical. No aspheric equation, conic constant, polynomial coefficient, diffractive phase term,
filter, cover glass, dummy plane, or flare-cutter plane is present in the selected example or added to the data.

## Sources and References

1. Dr. Paul Rudolph, **DE 401630, “Photographisches Objektiv”**, Reichspatentamt, issued 6 September 1924; Example III
   and numerical table on patent p. 3, optical section *Abb. 3* on patent p. 4, claims on patent p. 3. The unchanged PDF
   is included in the dossier as `DE_401630_C.pdf`.
2. Meyer Optik Görlitz, **History**, manufacturer history of the Rudolph cooperation and Plasmat/Kino-Plasmat family:
   https://www.meyer-optik-goerlitz.com/en/history/
3. Leitz Photographica Auction, **Hugo Meyer Kino Plasmat 2/10cm**, lot 619, product record AI_30_34091, surviving lens
   dated 1930: https://www.leitz-auction.com/en/Hugo-Meyer-Kino-Plasmat-2-10cm/AI-30-34091
4. NIST Atomic Spectra Database, **H I line near 434.047 nm**, used only to identify the patent's G′/H-gamma reference:
   https://physics.nist.gov/asd
5. OHARA optical-glass catalogs: https://www.ohara-inc.co.jp/en/product/catalog/
6. HOYA Optical Glass data downloads: https://www.hoya-opticalworld.com/english/datadownload/index.html
7. SCHOTT Advanced Optics glass search/datasheets: https://www.us.schott.com/shop/advanced-optics/en/search/
8. HIKARI Optical Glass catalog: https://www.hikari-g.co.jp/optical_glass/catalog/
9. CDGM optical-glass database: https://www.cdgmgd.com/database/toWebDatabase.htm?url=database
10. SUMITA Optical Glass downloads: https://www.sumita-opt.co.jp/en/download/
