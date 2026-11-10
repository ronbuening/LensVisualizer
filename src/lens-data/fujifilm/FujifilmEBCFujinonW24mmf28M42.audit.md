# Audit Log — Fujifilm EBC Fujinon W 24mm f/2.8 (US 3,958,865 A)

Patent: US 3,958,865 A, sole example, Table I (PDF page 4) and Figure 1 (PDF page 2). Original PDF 384661 bytes,
SHA-256 `01061d9a76a1d481c8f4500b44b974bbb986a0cf61738e08ce8863a5c85ec42f`.

## 2026-11-10 — Transcription, reference line, glass, rims and identity

**Transcription.** Every radius, interval, index and Abbe number in Table I was re-read from the original PDF and
checked against the file at the ×24 scale. All 17 radii, 16 intervals, 9 indices and 9 Abbe numbers agree. An
independent exact trace reproduces EFL 23.99985 mm and BFL 37.43351 mm (printed 37.44 mm at scale).

**Reference line.** The text says “refractive indices for the sodium d-line”. The numerical line test in
`LENS_DATA_SPEC.md` (|Δn| ≤ 6e-5, |Δν| ≤ 0.15 against catalog Sellmeier rows) gives:

| Line | Pairs reproduced (of 9) |
| --- | ---: |
| helium d, 587.5618 nm | 9 |
| sodium D, 589.2938 nm | 0 |
| mercury e, 546.074 nm | 0 |

The values are helium-d catalog coordinates (for example SF2 1.64769/33.85, SF10 1.72825/28.41, SF14 1.76182/26.53,
SK16 1.62041/60.32), so “sodium d-line” is a misnomer. The earlier `indexReference: "D"` was removed; the elements now
use the default d line. No index value changed.

**Glass.** No supplier is named. HOYA has a catalog row within the window for L1–L8 (L1's BAFD3 at Δν +0.16, with
Sumita BASF3 exact), so those elements carry HOYA equivalents: BAFD3, LAC13 ×2, E-FD2, E-FD10, FD140, TAF1, BACD16.
L9's 1.51633/64.0 has no HOYA row in the catalog (its BSC7 row is the modern 1.51680), so it carries OHARA S-BSL7.
Every label resolves through `resolveCompatibleGlass` at the authored coordinates. They are spectral proxies, not
production melts.

**Rims.** `audit:aperture` found surface 15 (L8 rear) at 6.5 mm below the stated f/2.8 on-axis ray (needs 6.6 mm).
L8 is drawn with a square rim, so both faces 14 and 15 rose to 6.6 mm. No other rim moved. After the change
`audit:aperture` reports no surface below the stated ray, `audit:image-circle` reports nothing undersized, and
`audit:field-coverage` reaches the declared 42° half-field (20.96 mm of the 21.65 mm frame corner).

`audit:patent-figure` over-reads this sheet (leader lines and labels sit above most elements; L8 and L9 read
`DIFF`), so Figure 1 was measured by eye against a millimetre grid on a 300 dpi render, averaging the upper and
lower halves:

| Element | Figure 1 (mm) | Model (mm) | Disposition |
| --- | --- | --- | --- |
| L1 | 15.2 | 15.0 / 15.0 | within noise; matches the ~30 mm front diameter |
| L2 | 10.4 front, 8.3 rear | 9.5 / 7.8 | within noise |
| L3 | 8.7 front, 6.0 rear | 7.5 / 7.5 | within noise (±20%); stepped blank |
| L4 | 5.4 front (chamfer), 7.4 rear | 7.0 / 7.0 | within noise; front chamfer is not glass |
| L5 | 7.0–7.4 | 7.0 / 7.0 | agrees |
| L6–L8 | about 7.4 | 6.5, 6.5, 6.6 | L8 raised for the ray only |
| L9 | 9.0 | 8.5 / 8.5 | within noise |
| Stop | ⌀ about 11.5 | derived ⌀ 11.65 | agrees |

The figure places the stop about 27% into d10; the model's 30% split is kept.

**Identity and metadata.** Fuji's Fujica AZ-1 instruction manual (“Changing the Lens”, manual page 39) lists the
EBC FUJINON W 1:2.8 24mm as 8 components / 9 elements, 84°, f/16, 0.3 m, 49 mm filter. The title became
`FUJIFILM EBC FUJINON W 24mm f/2.8` (Fuji's designation; lens-db's “SW” disagrees with the manual).
`catalog.closeFocusM.marketing` and `focus.closeFocusM` are 0.3 m; no focus motion is modeled. Groups follow the
patent's front negative (L1–L3) and rear positive (L4–L9) components.
