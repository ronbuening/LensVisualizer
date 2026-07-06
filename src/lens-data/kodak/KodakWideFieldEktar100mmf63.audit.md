# Audit Log - KODAK WIDE FIELD EKTAR 100mm f/6.3

Patent: US 2,518,719, Example 2 / Fig. 2

## 2026-07-06 - Mount metadata review

- Added `lensMounts: ["large-format-lens-board"]`.
- The existing file already models the 100 mm f/6.3 design as a 4x5-format wide-field taking lens.
- Source review found the Kodak/Reiss patent describes a wide-angle photographic camera objective, and the Kodak Wide-Field Ektar line is documented as a large-format camera lens family rather than a proprietary bayonet system.
- Existing `imageFormat: "4x5"` was retained.

### Sources

- US 2,518,719, Max Reiss / Eastman Kodak, "Wide-angle camera objective," especially Example 2.
- US 2,518,719 Google Patents record, https://patents.google.com/patent/US2518719A/en
- Kodak lens overview secondary check for Wide-Field Ektar large-format camera use, https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D1%8B_Kodak

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US2518719.pdf`. The patent publishes Example 2 and Fig. 2, but no clear-aperture or semi-diameter table.
- Fig. 2 shows a wide-field four-element layout with large outer positive menisci, smaller inner negative menisci, and a diaphragm in the long central air space.
- Stored SDs match that outline: outer elements are 17.4 mm at the front and 14.1 mm at the rear, while the inner menisci narrow to about 11.35-13.5 mm and the stop remains separate at 6.6845 mm.
- No SD values changed. Current values remain inferred from the patent figure, f/6.3 stop geometry, field ray clearance, edge thickness, and cross-gap sag checks.

### Verification

- `npm test -- elementRenderDiagnostics`
