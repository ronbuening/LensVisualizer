## Patent Reference and Design Identification

**Patent:** CN 217606166 U
**Application Number:** 202221381175.8
**Filed:** 2022-06-06
**Published:** 2022-10-18
**Inventor:** Yunhong Li (李云洪)
**Assignee:** Shenzhen Huitian Film and Television Equipment Co., Ltd. (深圳市慧天影视器材有限公司)
**Title:** 一种85mmF1.8全画幅镜头
**Example details:** Paragraph0034, PDF page7; Figure1, PDF page9. The single numerical prescription is reproduced without scaling.

This is a qualified patent-derived Meike85mmf/1.8-family reconstruction, not a proven factory prescription or an identification with the PRO or SE II variants. The primary document names the legal owner above, not simply the retail brand. The maker corporate homepage states that the company was renamed深圳市慧天影视器材有限公司 in July2019 and describes brand operation under美科; this supports a maker-asserted corporate relationship, not an independently established English legal-name equivalence. The current maker page gives85mm,f/1.8,9elements/6groups and a product-specific transparent optical rendering. Its broad section agrees with the patent's arrangement, but overlapping surfaces in the marketing rendering cannot prove exact radii or every cemented junction. Retail close focus0.85m and the patent's1m focusing discussion are not a matching numerical focusing schedule.

## Optical Architecture

Nine spherical elements form six air-separated groups. L1 and L2 precede the cemented L3/L4 pair; the stop follows that pair. Cemented L5/L6 and L7/L8 follow the stop, with L9 completing the rear group. All19 source rows have zero conic constant. Three zero-air, equal-radius duplicate interfaces are merged into physical cemented boundaries, without inventing an air layer. The actual model has15refracting interfaces and one stop.

The aperture heading is 孔径, literally aperture, rather than an explicit radius/diameter definition. Diameters are the qualified interpretation: printed29.75 at the stop yields a paraxialf/1.7845075, close to the printedf/1.8; treating it as a radius would imply approximatelyf/0.892. This consistency is evidence for an interpretation, not a printed definition. Every surface aperture is interpreted as a clear diameter and halved for the engine. At the coincident L3/L4 interface, the two printed cells36.97/37.30 differ; the smaller36.97 is the shared clear diameter. At L7/L8,28.42/29.00 similarly becomes shared28.42. These clear-aperture intersections do not claim the glass blanks have identical physical diameters. Original cells remain in the source packet.

## Element-by-Element Analysis

### L1: Biconvex Positive

nd=1.772500, νd=49.598996. Glass: H-LAF50B (CDGM). The front positive element begins convergence. Curvatures217.50 and−440.08mm and thickness8.06mm are printed values.

### L2: Positive Meniscus

nd=1.834810, νd=42.725177. Glass: H-ZLAF55D (CDGM). The positive meniscus precedes the first cemented pair; its high index is catalog-supported, not a recovered manufacturing melt.

### L3/L4: Cemented Positive/Negative Pair

L3: nd=1.651600, νd=58.403057. Glass: H-LAK50A (CDGM).

L4: nd=1.728250, νd=28.32. Glass: E-FD10 (Hoya). The lower-dispersion positive element and higher-dispersion negative partner provide a chromatic balancing pair. The patent gives the common509.45mm interface twice with zero intervening air.

### L5/L6: Cemented Focus Group

L5: nd=1.846660, νd=23.784497. Glass: H-ZF52 (CDGM).

L6: nd=1.516800, νd=64.198732. Glass: H-K9L (CDGM). The positive meniscus and biconcave partner share−59.18mm. The patent describes moving this pair for focusing, but provides no complete finite-distance prescription.

### L7/L8: Cemented Rear Pair

L7: nd=1.846660, νd=23.784497. Glass: H-ZF52 (CDGM).

L8: nd=1.834810, νd=42.725177. Glass: H-ZLAF55D (CDGM). The negative and positive elements share268.12mm. The18.66mm air space preceding the pair and3.53mm space following it remain literal.

### L9: Biconvex Positive

nd=1.834810, νd=42.725177. Glass: H-ZLAF55D (CDGM). Radii83.44/−142.56mm and thickness4.08mm close the design. Printed final air42.53mm is preserved, not replaced by a computed focus.

## Glass Identification and Selection

Glass names are literal patent entries. Numerical nd/νd and C/F/g line indices are catalog-derived from the exact named CDGM types and Hoya E-FD10. CDGM uses the AGF Sellmeier formula2; Hoya uses the AGF Schott formula1. Complete explicit C/F/g fields make the engine use those line indices while retaining the authored catalog nd at d. The catalogνd is retained as metadata; the C/F separation comes from the catalog coefficients and differs from rounded Hoyaνd by approximately0.000486. Maximum catalog coefficient versus stored nd discrepancy is2.18×10⁻⁷. No manufacturing melt, proprietary anomalous-dispersion measurement, or historical formula identity is established. These chromatic results are catalog-based reconstructions rather than measurements of the retail lens.

## Focus Mechanism

The patent describes moving L5/L6, but only the infinity-style numerical row is available. The model is static: no finite-focus law is invented, and the large schema close-focus sentinel does not represent a retail focus claim. Product minimum focus0.85m is metadata only. The source image plane is113.92mm after the first vertex,42.53mm after the final surface.

## Verification Summary

Native geometry passes the default90% gap-sag rules, with zero hidden render trim and no per-model threshold overrides. The shared aperture audit nevertheless identifies surface3, not the stop, as the axial limiter: effectivef/1.829292968 versus nominalf/1.8 (1.627%slower). Its default3% tolerance labels this “ok”, which must not be read as fully stop-limited. A32-grid axial stop sample passes788/812rays (97.04%); the boundary-radius calculation gives96.823%of intended pupil area. The printed aperture is retained without enlargement. Computed d-line EFL is85.645440376mm rather than forced85mm. The repository's ordinary-prime stop contract derives the stop from source nominalf/1.8, giving diameter29.493943806mm. The printed29.75mm would implyf/1.784507524; the0.256056194mm stop discrepancy remains unresolved and is tested separately as a diagnostic, not silently substituted in production data.

The printed image plane lies0.268005815mm beyond paraxial focus with the named catalog glasses. Source-plane MTF is poor and does not reproduce the patent's performance claim. Separately labeled axial-focus diagnostics move the image plane−0.292469mm for d-line geometric MTF and−0.313051mm for C/d/F diffraction atf/1.8; those shifts are not applied to the stored prescription. At field fraction0.9, geometricf/1.8 MTF remains unconverged at64grid:1234valid,1994blocked,0failed rays. C/d/F diffraction converges within its128grid cap, with strong clipping. Atf/4 all sampled0/0.5/0.9fields converge. Finite-focus performance and interactive visual behavior remain unverified. These results qualify a source-preserving research model, not optical acceptance of a commercial lens.

## Sources

- [Primary CN217606166U document](https://patentimages.storage.googleapis.com/c0/b5/5f/d8cd8a4d1cb103/CN217606166U.pdf), first-page owner and inventor, paragraph0034, Figure1.
- [Maker85mm product page](https://www.mkgrip.com/productInfo/12054.html),85-specific9/6rendering and specifications. The printed field-label ordering appears inconsistent and is not silently corrected or used as a numerical field authority.
- [CDGM catalog download](https://www.cdgmgd.com/downloadFile.htm?uid=3f4d14c82d2c11eeb5ac000c29c8de8c), exact named glass records.
- [Hoya2017 AGF mirror](https://refractiveindex.info/download/data/2017/hoya_2017-04-01.agf), E-FD10 record; a mirror, not manufacturing-melt evidence.

- [Maker corporate homepage](https://www.mkgrip.com/), retained2026-11-09; primary self-description of the2019company rename and brand relationship.
