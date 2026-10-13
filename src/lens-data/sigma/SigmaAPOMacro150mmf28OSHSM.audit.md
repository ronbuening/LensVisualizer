# Audit Log - SIGMA APO MACRO 150mm f/2.8 EX DG OS HSM

Patent: JP 2012-63403 A, Numerical Example 2 / FIG. 8

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JP2012063403A.pdf`. Numerical Example 2 is shown by FIG. 8 on PDF page 20.
- The patent does not publish clear apertures. Stored SDs are conservative renderer apertures derived from the design F2.92 marginal ray with local reductions for edge-thickness and cross-gap sag clearance.
- FIG. 8 shows a large front L1/L2 section, a smaller stop-adjacent middle, and rear/internal-focus/OS groups tapering toward the image side. Current SDs match this progression: 28.3-25.9 mm front surfaces, a 16.7 mm stop, and rear values descending from about 17.85 mm to 10.2 mm.
- No SD values changed.

## 2026-10-08 - dPgF moved to the engine's normal line

- Reviewed local `patents/JP2012063403A.pdf` (26 pages; PDF page 1 identifies JP 2012-63403 A, published 2012-03-29, applicant Sigma). The patent states no partial-dispersion deviation and no normal line. Paragraph 0075 on PDF page 11 lists the lens-data columns as surface number, r, d, nd and νd, and the Numerical Example 2 table (paragraph 0086, PDF page 13) prints exactly those: no PgF, no θgF, no ΔPgF. Conditions (1)-(11) (claims on PDF page 2; Example 2 values in paragraph 0089 on PDF page 14) carry no partial-dispersion term; (6) and (7) are mean Abbe numbers. Paragraphs 0070-0071 (the number 0070 is the last line of PDF page 10; the text of both is on PDF page 11) recommend anomalous-partial-dispersion, low-dispersion media in L3 and L1 in words only.
- The stored `dPgF` values were Hoya catalog ΔPgF figures, which are measured from Hoya's own normal line. Adding 0.64833 − 0.0018·νd to each stored figure reproduces the PgF of the element's own authored nC/nF/ng to within the rounding of five-decimal indices (largest gap 0.0007, L61). Read on the engine's line, 0.6438 − 0.001682·νd, the same figures miss that PgF by up to 0.0053 (FCD1) and 0.0040 (FC5). The two lines differ by 0.00453 − 0.000118·νd.
- All 19 elements author nC, nF and ng, so the trace uses those indices and ignores `dPgF`; the field is an annotation here and no traced result moves. With no patent figure to use, each value was replaced by PgF = (ng − nF)/(nF − nC) of the element's own indices minus 0.6438 − 0.001682·νd, to six decimals. nC, nF, ng, nd, νd, glass labels and `apd` tags are unchanged. No element had an `apdNote` and none was added. The header box gained a partial-dispersion note.

| Element | νd | Source figure (PgF of the element's own nC/nF/ng) | Stored before | Stored after |
| --- | ---: | ---: | ---: | ---: |
| L11 | 50.85 | 0.557529 | 0.0008 | −0.000741 |
| L12 | 81.61 | 0.538588 | 0.0374 | 0.032056 |
| L13 | 25.46 | 0.615555 | 0.0132 | 0.014579 |
| L14 | 81.61 | 0.538588 | 0.0374 | 0.032056 |
| L15 | 49.62 | 0.550771 | −0.0086 | −0.009568 |
| L21 | 54.67 | 0.544978 | −0.0046 | −0.006868 |
| L22 | 23.78 | 0.619101 | 0.0137 | 0.015299 |
| L23 | 70.44 | 0.530347 | 0.009 | 0.005027 |
| L24 | 54.67 | 0.544978 | −0.0046 | −0.006868 |
| L31 | 54.67 | 0.544978 | −0.0046 | −0.006868 |
| L32 | 81.61 | 0.538588 | 0.0374 | 0.032056 |
| L33 | 25.46 | 0.615555 | 0.0132 | 0.014579 |
| L41 | 31.16 | 0.598824 | 0.0067 | 0.007435 |
| L51 | 25.46 | 0.615555 | 0.0132 | 0.014579 |
| L52 | 54.67 | 0.544978 | −0.0046 | −0.006868 |
| L53 | 53.94 | 0.543873 | −0.0071 | −0.009200 |
| L61 | 40.73 | 0.568687 | −0.0056 | −0.006605 |
| L62 | 27.53 | 0.609187 | 0.0103 | 0.011692 |
| L63 | 37.35 | 0.579042 | −0.0021 | −0.0021 (unchanged) |

- Left as stored: L63. Its index-derived value is −0.001936, within 0.0003 of the stored −0.0021 (the two lines nearly cross at νd 37.35), so it was not re-rounded.
- L61 note: at νd 40.73 the two lines differ by only 0.00028. Most of its 0.0010 move is the gap between the PgF the old Hoya figure implies (0.5694) and the PgF of the authored indices (0.568687), about 1.4e-5 in ng − nF. The stored value now annotates the indices the trace actually uses.
- L53 is written `-0.0092` in the data file; the formatter drops the trailing zeros of −0.009200.
- Analysis sidecar: the glass table keeps Hoya's catalog ΔPgF, now labelled as Hoya's, and gained a column for the stored engine-line `dPgF`; the two sentences that said the file stores Hoya's ΔPgF were corrected, and the FCD1 figure in the L12 paragraph is labelled as measured from Hoya's line. The patent has no partial-dispersion condition, so no conditional-expression text changed.
- Second read: the Example 2 table on PDF page 13 was re-read for all 19 νd, and each changed value was recomputed from the element's own nC/nF/ng; all 18 agree to six decimals and L63 is the only stored value within 0.0003. The local Hoya file `tmp/pdfs/HOYA20260707_include_obsolete.agf` confirms the reading of the old figures. Its ΔPgF column carries the same numbers for nine of the twelve glasses (FCD1 0.0375, FC5 0.0092 and LAC8 −0.0070 differ by 0.0001-0.0002 from the 2026-04-01 sheet the analysis cites). Its dispersion formula returns the authored nC/nF/ng to within one unit in the fifth decimal, and PgF from that formula minus 0.64833 − 0.0018·νd reproduces its ΔPgF column within 0.00013 for all twelve. The full-precision catalog PgF differs from the PgF of the five-decimal authored indices by up to 0.0007 (L61), so the last decimals of the stored figures describe the authored indices the trace uses, not the catalog glass.
