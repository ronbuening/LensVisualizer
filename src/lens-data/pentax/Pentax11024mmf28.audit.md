# Audit Log — Pentax-110 24mm f/2.8

Patent: US 4,223,982, Example 2

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/US4223982.pdf`.
- Example 2 row confirmed L1 / surface 1 nd = 1.72825, vd = 28.5.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L1 / S1 | `SF6 (Schott) / S-TIH6 (Ohara)` | `S-TIH10 (OHARA)` | Public OHARA catalog row matches the patent nd/vd pair. |

### Analysis sync

- Updated the L1 element paragraph and glass table.

## 2026-06-23 — Pentax folder patent audit

### Patent evidence

- Rechecked local patent file `patents/US4223982.pdf`.
- Example 2 row confirmed L4 / surface 7 nd = 1.76182, vd = 26.6.
- Rendered the first drawing sheet; the compact six-element layout and rear body stop remain consistent with the stored SD proportions.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L4 / S7 | `TiSF6 (Schott) / FD4 (Hoya)` | `S-TIH14 (OHARA) / FD140-N-SF14 class (762265)` | Public OHARA catalog row round-trips the patent nd/vd pair. |

### APD and SD review

- APD status remains `false`; the patent lists only nd/vd and does not identify anomalous partial dispersion for this element.
- No patent clear-aperture table was found. Existing SDs remain unchanged because the drawing supports the small rear body-aperture geometry already modeled.
