# Audit Log - SONY FE 20mm f/1.8 G

Patent: WO 2020/213337 A1, Numerical Example 2 / FIG. 4

## 2026-10-08 - dPgF moved to the engine's normal line

- Patent formula: none. WO 2020/213337 A1 (ignored local `patents/WO_2020213337_A1.pdf`, an image scan read from the
  rendered pages) never mentions partial dispersion. ¶0067 (PDF page 17, printed page 15) defines the lens-data
  symbols as Si, ri, di, ndi (d-line index) and νdi (d-line Abbe number) only; Numerical Example 2 Table 5 (PDF page
  24, printed page 22) prints only those five columns; and none of conditional expressions (1)–(6) (PDF pages 8–14,
  values in Table 25 on PDF page 39) uses a partial dispersion. There is no patent `θgF`, no patent deviation and no
  patent normal line to convert.
- All twelve elements that carry `dPgF` also author `nC`, `nF` and `ng`, so the trace reads g from those indices and
  `dPgF` is an annotation. With nothing printed by the patent, the value is the partial dispersion of the element's
  own indices, PgF = (ng − nF)/(nF − nC), minus the engine line 0.6438 − 0.001682 × νd at the stored νd.
- The stored numbers were vendor catalog ΔPg,F figures, each against the vendor's own normal line rather than the
  engine's. The six OHARA-labelled values equal the ΔPg,F entries of the local OHARA AGF data file (S-LAL18 −0.0086,
  S-NPH5 +0.0237, S-TIH13 +0.0130, S-LAH58 −0.0088, S-TIH4 +0.0133, S-NBH56 +0.0109), in which OHARA's reference
  glasses NSL7 and PBM2 carry 0. The HOYA-labelled values match the HOYA AGF data file (M-BACD12 −0.0008, FDS18
  +0.0386, M-TAFD305 −0.0067; FCD705 and BSC7 are listed there as +0.0277 and +0.0016, one last-place digit from the
  stored +0.0276 and +0.0015), in which HOYA's reference glasses C7 and F2 carry 0; on the repo's HOYA curves they
  fit `0.64833 − 0.0018 × νd` within 0.0001. The largest errors were at the ends of the Abbe range: L12 +0.0039,
  L31 +0.0032 and L25 −0.0024.

| Element | νd | Source figure | Stored before | Stored after |
|---|---:|---|---:|---:|
| L11 | 54.7 | Patent prints none; authored nC/nF/ng PgF = 0.544228 | −0.0086 | −0.007567 |
| L12 | 75.5 | Patent prints none; authored nC/nF/ng PgF = 0.540466 | 0.0276 | 0.023657 |
| L13 | 59.5 | Patent prints none; authored nC/nF/ng PgF = 0.541837 | −0.0008 | −0.001884 |
| L14 | 22.7 | Patent prints none; authored nC/nF/ng PgF = 0.628360 | 0.0237 | 0.022742 |
| L15 | 27.8 | Patent prints none; authored nC/nF/ng PgF = 0.609521 | 0.013 | 0.012481 |
| L16 | 40.8 | Patent prints none; authored nC/nF/ng PgF = 0.566733 | −0.0088 | −0.008442 |
| L22 | 27.5 | Patent prints none; authored nC/nF/ng PgF = 0.610273 | 0.0133 | 0.012728 |
| L24 | 24.8 | Patent prints none; authored nC/nF/ng PgF = 0.612231 | 0.0109 | 0.010145 |
| L25 | 18.0 | Patent prints none; authored nC/nF/ng PgF = 0.654563 | 0.0386 | 0.041039 |
| L26 | 24.8 | Patent prints none; authored nC/nF/ng PgF = 0.612231 | 0.0109 | 0.010145 |
| L27 | 40.1 | Patent prints none; authored nC/nF/ng PgF = 0.569477 | −0.0067 | −0.0067 (unchanged) |
| L31 | 64.2 | Patent prints none; authored nC/nF/ng PgF = 0.534161 | 0.0015 | −0.001654 |

- The L12 `apdNote` now quotes the PgF of the authored indices, the runtime value and HOYA's own +0.0276 with the
  line it is taken against; a header note in the data file states that `dPgF` is PgF minus the engine line and that
  the patent has no formula of its own. The analysis keeps its catalog ΔPgF column as vendor figures; the one
  sentence that said the data file stores those ΔPgF values now says what `dPgF` holds.
- Left: L27. Its own indices give −0.006875, 0.000175 from the stored −0.0067 and inside the 0.0003 tolerance, so
  the value stays as written (the HOYA line and the engine line differ by only 0.0002 at νd 40.1).
- Left: L21 and L23 carry no `dPgF` and a vendor-undetermined 497/816 label; none was added.
- The five-decimal HOYA indices resolve PgF only to about ±0.001 on the low-dispersion glasses, so the own-index
  value can sit that far from the catalog curve (L13: −0.001884 from its indices, −0.003188 from the repo's
  M-BACD12 curve). The own-index value is stored because those indices are what the trace uses.
- No `nd`, `νd`, `nC`, `nF`, `ng`, glass label, `apd` tag or surface changed, and no traced quantity changes.
