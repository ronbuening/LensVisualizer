# PENTAX SMC M 40mm f/2.8 — source audit

## 2026-11-02 — Deployment validation and cleanup

**Patent re-read.** US 4,154,509 read from the page images: 9 radii, 8 spacings, 5 index/Abbe pairs and the back focus, in both the example table and claim 1, which agree. Every R and d in the file is the printed value × 0.4 exactly, with d4 split into two parts that sum to 2.572 mm. No mismatches. No aspheres, no variable gaps. The table prints plain n; column 2 defines it as d-line. The bibliographic data match; the printed "Asahi Kogaku Kogyo Kabushiki Kaisha" stays in the corpus form "Asahi Kogaku Kogyo Co., Ltd.".

**Patent against model.** F = 100 / model at that scale:

| Quantity | Patent | Model |
|---|---|---|
| Focal length | 100 | 100.001 |
| Back focus | 91.90 | 91.909 paraxial |
| Length l | 41.62 | 41.62 |
| F1 | 70.13 | 70.12 |
| F1,2 | −329.93 | −329.91 |
| Petzval sum | 0.240 | 0.2404 |

All ten conditions hold. A single-slip search over 868 one-digit and sign variants found nothing to correct: the residuals are rounding, and neither the file nor the print is at fault.

**Axial contrast.** The printed back focus is the paraxial focus, 36.7637 mm computed against the 36.760 mm kept. Traced LSA of −0.150 mm at 0.7 pupil and +0.083 mm at the rim reproduces the SA curve of Fig. 2, so low f/2.8 axial contrast at that plane is a property of the design, not a slip or a wrong plane. Independent axial MTF at 30 lp/mm is about 0.11 at the plane and 0.82 at −0.12 mm. No refocus is authored.

**Stop.** Fig. 1 draws none and the text is silent. Digitized ΔS, ΔM and distortion from Fig. 2 place the chief-ray crossing 7.0 to 7.4 mm behind S1, inside L2 (rms 0.03/0.04 on the F = 100 scale). Flat-stop limits in air at f/2.8 are 4.07 to 5.83 mm in d2 and 8.91 to 10.25 mm in d4. Rms against the plots: package midpoint 9.682 mm 0.29/0.25, adopted 9.039 mm 0.18/0.17, d2 limit 5.8 mm 0.14/0.12. The stop stays in d4 because it moves only within the gap the package used and clears audit limits; the d2 position fits slightly better. Open disc clearance is S4 0.13 mm and S5 1.22 mm. The plane meets the S4 rim at sd 6.7 mm to within 0.0001 mm.

**Public diagram.** Pentax's *Lenses and Accessories* catalog, p. 5 (cameramanuals.org/pentax_pdf/Asahi_Pentax_Lenses.pdf), prints the lens in mirror order with the thin meniscus tallest and no stop mark. Reversed, the prescription has a 28.795 mm back focus, 16.66 mm inside the K-mount flange distance, so the drawing is read as flipped art of this design. Fig. 1 scaled by its axial length reads L1 7.5, L2 6.65, L3–L4 7.2, L5 8.0 mm.

**Fields changed.** Data step: stop 9.682 → 9.039 mm (S4 d 0.643, STO d 1.929), L1 sd 7.9 → 7.7, L5 sd 7.3 → 8.0, `closeFocusM` 0.6. At 28°, the f/2.8 beam passing goes from 49.5 % to 55.1 %, with a worst loss of 0.7 points at 8.4°. L1 at 7.5 mm was declined: it nets 2.6 points against package rims but costs 5.1 by itself. Cleanup step: header comment, `subtitle`, `specs`, element `role` and `focalLengthMm`, `cemented` D1 → C1, `doublets` C1, analysis rewritten in public language.

**Retail facts.** Five elements in four groups, 49 mm filter, 110 g, about 18 mm long, f/2.8 to f/22, 0.6 m minimum focus, K mount, 1976 to 1984. Lens-DB's 56.8° was seen only as a search excerpt, because the page refused the connection.

Open: the stop is inferred and the 28° curves do not fully match Fig. 2 (ΔS +0.88 against about +0.45).
