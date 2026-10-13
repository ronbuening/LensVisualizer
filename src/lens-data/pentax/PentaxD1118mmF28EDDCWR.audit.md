# Audit Log - PENTAX HD DA* 11-18mm f/2.8 ED DC AW

Patent: US 2018/0164556 A1, Numerical Example 1

## 2026-09-30 — Same-application assignee verification

- Visually checked the local A1 front page: it omits an organizational assignee.
- Verified US application 15/825,178 and its publication linkage in the [assignment history](https://patents.google.com/patent/US20180164556A1/en). It reports **Ricoh Co., Ltd. (recorded as RICOH COMPANY, LTD.)**, recorded **2017-11-29**, effective 2017-11-27, reel/frame **044243/0469**.
- Updated `patentAssignees` to Ricoh Co., Ltd. and documented the prepublication assignment basis in the analysis. The underlying instrument was not independently inspected.
- This restores the assignee-to-patent relationship in the universal map. Optical data and production-correlation qualifications are unchanged. Earlier audit entries retain their historical metadata state.

## 2026-07-30 - Glass-code source review

### Patent verification

- Rendered and visually reviewed PDF page 32 / patent page 6 from local `patents/US20180164556A1.pdf`.
- Numerical Example 1 / Table 1 prints L14 at `nd = 1.54732`, `vd = 46.0`, confirming the stored prescription coordinate.
- The patent supplies no glassmaker, trade name, secondary line index, or partial-dispersion value.

### Catalog disposition

- Rechecked the current and discontinued-inclusive first-party vendor catalogs.
- OHARA PBL1/S-TIL1, HOYA E-FEL1, and SUMITA LLF1/LLF7 converge on the same light-flint family. The closest group is `nd = 1.54814`, `vd = 45.75–45.90`, safely inside the runtime compatibility window.
- Their coefficient curves are materially interchangeable at the trace lines: across Schott LLF1, OHARA S-TIL1, and HOYA E-FEL1, the largest evaluated index spread is about `0.000032` at the g line.
- Relabeled L14 to HOYA E-FEL1 as the catalog equivalent because its `45.82` Abbe number has the smallest residual against the patent row. The annotation explicitly leaves the production supplier unspecified.
