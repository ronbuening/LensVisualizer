# PENTAX SUPER-TAKUMAR 300mm f/4 — audit log

## 2026-11-09 — Deployment validation

Independent check of US 3,502,394 (single unnumbered example, Table I and the claim table, page images): 10 R, 9 d,
5 nd/νd agree at one scale factor ×300 (d6 0.370 → 111 mm, split 82 + 29 by the stop). The patent prints R3 as −0.74505
in Table I and +0.74505 in the claim; the file's negative sign is right, since the patent's Seidel table gives a
Petzval term of −0.560 at surface 3 and the full sum −0.219 reproduces only with R3 < 0. Engine EFL 300.022, f/4,
half-field 4.5°, telephoto ratio 1.271 (printed 1.27). The stop position and every semi-diameter come from
PhotonsToPhotos; the back focus is paraxial.

Attribution probable: 5 elements / 5 groups, f/4, 8° (Spotmatic II manual), M42; the earlier 3/3 Takumar, the K-mount
7/5 lens and the 6×7 300 (±8°) do not fit. No Asahi construction drawing found.

Deployment changes: added `catalog.lensMounts: ["m42"]`; `patentNumber` "US 3502394 A" → "US 3,502,394" (house form);
example label "Example 1" → "Sole example" with `id: null`, as the patent prints one unnumbered example.
Open: `focus.closeFocusM` 10 is a placeholder (production about 5.5 m); package wording and the validation-log style
of the analysis remain for the cleanup pass.
