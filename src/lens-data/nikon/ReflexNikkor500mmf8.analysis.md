# Reflex-Nikkor 500 mm f/8

## Patent & Attribution

**Production designer:** Teruyoshi Tsunashima (Nikon, 1st Optical Section, Optical Designing Department)
**Design completed:** August 1982
**Production launch:** 1983 (Reflex-Nikkor 500 mm f/8 "New")
**Canonical patent for the design family:** US 4,666,259 A (Yutaka Iizuka, Nikon, filed 1985, priority 1984)
**Design type:** Bouwers-type catadioptric — biconvex front lens + Mangin primary mirror + Mangin secondary mirror + rear refocusing group

The Reflex-Nikkor 500 mm f/8 (New) is the second-generation mirror telephoto in Nikon's F-mount lineup, succeeding earlier Reflex-Nikkor 500 mm f/8 designs from the late 1960s. Tsunashima's redesign halved the lens's physical length compared to a refractive 500 mm telephoto, and remained in production until the early 2000s. The catadioptric optical layout follows the Bouwers-Maksutov tradition: light passes through a biconvex front corrector, reflects off a Mangin primary at the rear, returns to a Mangin secondary spot embedded near the optical axis on the front of the assembly, and exits through a rear refocusing group nested inside the primary's annular obstruction.

US 4,666,259 (Iizuka, 1985) is the canonical Nikon-assigned patent documenting this catadioptric family. Its Example 1 prescription (f ≈ 499.5 mm, F/6.7, 14 surfaces) encodes the Mangin reflection round-trips via signed thickness conventions and threads the six-surface rear L2 focusing group through the primary's central hole. The patent disclaims aspheric correction; everything is spherical.

## Lens Specifications

| Parameter | Value |
|---|---|
| Focal length | 500 mm (nominal and design) |
| Maximum aperture | f/8 |
| Angular field | 2ω = 5° (35 mm format) |
| Front aperture | 62.5 mm (D = f/Fno) |
| Length | 116 mm (production, infinity focus) |
| Weight | 840 g (production) |
| Close focus | 1.5 m (production) |
| Mount | Nikon F |
| Filter | 39 mm rear-mounted, 82 mm front threading on the production lens |
| Image circle | 35 mm full-frame |

## Optical Configuration

Light path through the lens:

1. **Front corrector (L1):** Biconvex BK7-equivalent glass, mild positive power. Refracts entering light, corrects the spherical aberration of the primary mirror.
2. **Primary mirror (M1):** Silvered rear surface of a Mangin element at the back of the assembly. The annular silvering leaves a central transmissive disk through which the exit beam returns to the image plane. The mirror's curvature provides most of the system's positive power.
3. **Secondary mirror (M2):** Silvered central spot on the rear of the front corrector (or a separate small element near the axis). Receives the converging beam from the primary and reflects it forward toward the image plane. The spot is the lens's central obstruction.
4. **Rear refocusing group (L2):** Six-surface refractive group (not modeled in this simplified catalog entry — see "Catalog representation" below) that re-images the converging beam at the desired focus distance and corrects residual aberrations. In the patent the L2 group is geometrically nested inside the central transmissive hole of the primary mirror.

## Catalog representation

This catalog entry uses a **proportional simplification** of US 4,666,259 Example 1 — sized for a 500 mm focal length and f/8 aperture, but reduced to three optical elements (front corrector L1, Mangin primary M1, silvered central spot M2 on the corrector rear). The rear L2 refocusing group is omitted in this build because faithfully transcribing it requires nesting six refractive surfaces inside the primary mirror's central hole, which is a multi-element geometric constraint that warrants its own follow-up.

What the simplification means in practice:

- The Phase A–E mirror schema features all work end-to-end: `reflect: { kind: "second" }`, `region`, `opaqueFrom`, the explicit traceSequence, the annular entrance pupil.
- The placeholder radii do not match the patent values to better than ~20%, so the computed paraxial EFL is approximate. `focalLengthDesign` is not declared so the build's EFL assertion is skipped.
- Analysis-tab features that depend on accurate ray bundles at the image plane (e.g., MTF, vignetting curves) will reflect the placeholder's geometry rather than the production lens's behavior. Donut-pupil support is implemented separately as Item 4 of the catadioptric enablement work.

## Aspherical surfaces

**None.** Like the patent disclosure, this design uses entirely spherical surfaces.

## Field & coverage

The production Reflex-Nikkor 500 mm f/8 covers the 35 mm full-frame image circle at a 5° diagonal field. The catalog entry inherits the `imageFormat: "135-full-frame"` setting (implied) and the default ray-fraction distribution remapped to the annular entrance pupil per `entrancePupilObstructionSD`.

## Related reading

- "NIKKOR — The Thousand and One Nights" No. 13 (Reflex-Nikkor 500 mm f/8 history and design notes, Nikon Consumer Imaging).
- US 4,666,259 A — Iizuka, Nikon (Patent disclosure of the catadioptric family).
