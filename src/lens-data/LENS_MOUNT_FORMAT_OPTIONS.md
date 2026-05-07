# Lens Mount And Image-Format Options

Reference for the canonical `lensMounts` and `imageFormat` ids used in `*.data.ts` files.

The code source of truth is `src/utils/lensTaxonomy.ts`. Keep this document in sync when adding or renaming taxonomy
entries. Lens files should store ids, not display labels.

```ts
lensMounts: ["nikon-z", "sony-fe"],
imageFormat: "135-full-frame",
```

## Lens Mount IDs

Use `lensMounts` for production mount variants represented by the optical formula. The field is optional while the
catalog is being backfilled, but when present it must be a non-empty array of unique known ids.

| ID | Display Label | Notes |
|----|---------------|-------|
| `canon-ef` | Canon EF | Canon EF SLR mount. |
| `canon-fd` | Canon FD | Canon FD manual-focus SLR mount. |
| `canon-rf` | Canon RF | Canon RF mirrorless mount. |
| `fixed-lens-camera` | Fixed-lens Camera | Integral camera lens with no interchangeable mount. |
| `fujifilm-g` | Fujifilm G | Fujifilm G/GFX digital medium-format mount. |
| `fujifilm-x` | Fujifilm X | Fujifilm X APS-C mirrorless mount. |
| `hasselblad-h` | Hasselblad H | Hasselblad H-system medium-format mount; usually pairs with `645`. |
| `hasselblad-v` | Hasselblad V | Hasselblad V-system medium-format mount; usually pairs with `6x6`. |
| `hasselblad-xcd` | Hasselblad XCD | Hasselblad X-system digital medium-format mount; usually pairs with `44x33`. |
| `leica-ltm` | Leica LTM / M39 | Leica thread mount / M39 rangefinder mount. |
| `leica-m` | Leica M | Leica M bayonet rangefinder mount. |
| `l-mount` | L-Mount | Leica/Panasonic/Sigma L-mount. |
| `minolta-sr` | Minolta SR | Minolta SR/MC/MD manual-focus SLR mount family. |
| `nikon-f` | Nikon F | Nikon F SLR mount. |
| `nikon-z` | Nikon Z | Nikon Z mirrorless mount. |
| `olympus-om` | Olympus OM | Olympus OM manual-focus SLR mount. |
| `pentax-110` | Pentax 110 | Pentax Auto 110 mount. |
| `pentax-k` | Pentax K | Pentax K mount family. |
| `sony-a` | Sony A | Minolta/Sony A SLR/SLT mount. |
| `sony-fe` | Sony E | Sony E mount. Use this id for both full-frame FE and APS-C E lenses; the format lives in `imageFormat`. |

## Image Format IDs

Use `imageFormat` for the single image circle or capture format the prescription is intended to cover. The field is
optional while the catalog is being backfilled, but when present it must be exactly one known id.

Dimensions are nominal usable frame dimensions in millimeters and are intended for catalog grouping plus future
distortion, field, and aberration views.

| ID | Display Label | Width x Height (mm) | Diagonal (mm) | Aspect Ratio |
|----|---------------|---------------------|---------------|--------------|
| `110` | 110 | 17 x 13 | 21.4 | 17:13 |
| `aps-c` | APS-C | 23.6 x 15.7 | 28.35 | about 3:2 |
| `half-frame-135` | Half-frame 135 | 24 x 18 | 30 | 4:3 |
| `135-full-frame` | 135 / Full-frame | 36 x 24 | 43.3 | 3:2 |
| `44x33` | 44x33 digital medium format | 43.8 x 32.9 | 54.78 | about 4:3 |
| `645` | 6x4.5 | 56 x 41.5 | 69.7 | about 4:3 |
| `6x6` | 6x6 | 56 x 56 | 79.2 | 1:1 |
| `6x7` | 6x7 | 70 x 56 | 89.6 | 5:4 |
| `6x9` | 6x9 | 84 x 56 | 101 | 3:2 |
| `4x5` | 4x5 | 127 x 101.6 | 162.6 | 5:4 |
| `5x7` | 5x7 | 177.8 x 127 | 218.5 | 7:5 |
| `8x10` | 8x10 | 254 x 203.2 | 325.3 | 5:4 |

## Selection Guidance

- Prefer official product specs, patent examples, or documented production variants over filename inference.
- Multi-mount lenses should list every known production mount represented by the same optical formula.
- Fixed-lens cameras should use `lensMounts: ["fixed-lens-camera"]` plus the appropriate `imageFormat`.
- Use `44x33` for Hasselblad XCD and Fujifilm G/GFX lenses designed around the 43.8 x 32.9 mm digital format.
- Use `645` for Hasselblad H lenses that cover the 6x4.5 format, and `6x6` for Hasselblad V lenses that cover square
  56 x 56 mm frames.
- Leave uncertain metadata unset and record the question in `agent_docs/lens-mount-format-backfill.md`.
- Do not add a new id for a spelling or label preference; add one only for a genuinely distinct mount or image format.
