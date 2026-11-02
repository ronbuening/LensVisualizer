# Fujifilm GF32–90mm T3.5 — construction audit

The Japanese front page and continuation establish all three inventors; the US family front page supports their Latin spellings and matching priority. Three S21 coefficient digits misread in the first transcription were corrected from the page image. The default gap margin was refused before tracing; gapSagFrac 0.9134, the smallest value rounded to 1E-4 that admits the printed rims, keeps positive real clearances and leaves zero diagram trim. No factory prescription is claimed.

## 2026-11-02 — Deployment validation and cleanup

**Patent re-read.** All 45 surface rows (R, D, Nd, νd), 12 variable-gap values, 90 Table 3 values, 44 ED halves, 26 θgF values and the plate were read from PDF pages 32–34; 238 fields were compared by machine. There were three mismatches, all thicknesses, now corrected to the printed S3 8.0700 (was 8.7), S11 2.9900 (was 2.9) and S21 6.8600 (was 6.8). They caused the former EFL residual of +0.33 to +0.54%. The PDF at 300 dpi and the US family text confirm all three. All 90 coefficients matched. The third inventor is 宮城島 峻介, and the publication runs to 106 pages with Figures 1–3 on pages 79–81.

**Patent against model.** f 32.94/59.13/87.33 against EFL 32.9422/59.1259/87.3314 mm; each rounds to the printed value. Paraxial BFD 0.9884/1.0214/1.0529 mm against the printed 0.9910 mm gap, with real axial crossings within about 0.09 mm of the plane. TL 248.034 mm by sum; the patent prints no TL. FNo 3.19/3.25/3.30 against real rays at the printed stop radius, 3.193/3.254/3.295; the engine's paraxial rule at the fixed 12.2685 mm radius reads 3.190/3.233/3.265. Half-field 41.1/23.2/16.0° against 41.14/23.26/16.05° at 27.39 mm. Of 22 Table 34 conditional values computed, 21 fall within 1.5E-4, including Bfw/fw 1.0503, DStw/TLw 0.6691 and TLw/ft 2.8277 against 2.8276; conditional expression (36) = 1.0000 sets the constant iris. A single-slip search over 9,789 candidates found no one-cell explanation of the old residual, because there were three slips.

**Maker diagram.** Fujifilm's section matches Fig. 2 element by element: 25 elements in 19 groups, aspherical L23, L33 and L41, ED L33, L51 and L54, and the flat L42/L43 joint. The association is strong by construction, but Fujifilm has not named the patent.

**Fields changed.** Thicknesses and L12, L23, L33 focal lengths; `source.errata` removed; zoom path to 10 stations with a fixed iris; `closeFocusM` 0.8. In the cleanup: header, `subtitle`, `specs`, `focus.description`, element `name`, `diagramLabel`, `role`, `apdNote` and `cemented` text (D1–D6 to C1–C6), `apd: "inferred"` on L33, L51 and L54, new `groups` and `doublets`, and the rear-plate `label` and `source` text. No optical value changed in the cleanup.

Open: conditional expression (10) computes 0.01020 against the printed 0.01022, about 0.24 µm of sag on S11. All S11 coefficients agree with the US family text, so the difference stays unexplained.

Open: L23's proxy label L-BSL7 has catalog θgF 0.5334 against the printed 0.541; L55's TAFD40 has 0.6136 against 0.617. L23 is a weak element at f = +209.7 mm.

Open: the patent prints no close-focus spacings, so focus stays static at infinity.
