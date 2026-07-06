# Lens Mount And Image-Format Options

Reference for the canonical `lensMounts` and `imageFormat` ids used in `*.data.ts` files.

The code source of truth is `src/utils/catalog/lensTaxonomy.ts`. Keep this document in sync when adding or renaming taxonomy
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
| `agfa-ambi-silette` | Agfa Ambi Silette | Agfa Ambi Silette proprietary 35 mm rangefinder bayonet. |
| `canon-ef` | Canon EF | Canon EF SLR mount. |
| `canon-ef-s` | Canon EF-S | Canon EF-derived APS-C DSLR mount; pairs with `aps-c`. |
| `canon-ef-m` | Canon EF-M | Canon EF-M APS-C mirrorless mount; usually pairs with `aps-c`. |
| `canon-fd` | Canon FD | Canon FD manual-focus SLR mount. |
| `canon-fl` | Canon FL | Canon FL manual-focus SLR mount; usually pairs with `135-full-frame`. |
| `canon-r` | Canon R | Canon R manual-focus SLR mount; usually pairs with `135-full-frame`. |
| `canon-rf` | Canon RF | Canon RF mirrorless mount. |
| `contax-645` | Contax 645 | Contax 645 autofocus medium-format mount; usually pairs with `645`. |
| `contax-g` | Contax G | Contax G autofocus rangefinder-style mount; usually pairs with `135-full-frame`. |
| `contax-n` | Contax N | Contax N autofocus SLR mount; usually pairs with `135-full-frame`. |
| `contax-rf` | Contax RF | Contax rangefinder mount; usually pairs with `135-full-frame`. |
| `zeiss-contaflex` | Zeiss Contaflex | Zeiss Ikon Contaflex Pro-Tessar convertible front-cell system; usually pairs with `135-full-frame`. |
| `zeiss-contarex` | Zeiss Contarex | Zeiss Ikon Contarex SLR mount; usually pairs with `135-full-frame`. |
| `dkl` | DKL / Deckel | Deckel bayonet family; usually pairs with `135-full-frame`. |
| `enlarging-lens` | Enlarging Lens | Enlarger-board/thread-mounted darkroom projection lenses. |
| `exakta` | Exakta | Ihagee Exakta/Exa bayonet family; usually pairs with `135-full-frame`. |
| `fixed-lens-camera` | Fixed-lens Camera | Integral camera lens with no interchangeable mount. |
| `fuji-g690` | Fuji G690 | Fuji G690 medium-format rangefinder mount; usually pairs with `6x9`. |
| `fuji-gx680` | Fuji GX680 | Fuji GX680 medium-format SLR mount; usually pairs with `6x8`. |
| `fujifilm-g` | Fujifilm G | Fujifilm G/GFX digital medium-format mount. |
| `fujifilm-x` | Fujifilm X | Fujifilm X APS-C mirrorless mount. |
| `hasselblad-h` | Hasselblad H | Hasselblad H-system medium-format mount; usually pairs with `645`. |
| `hasselblad-v` | Hasselblad V | Hasselblad V-system medium-format mount; usually pairs with `6x6`. |
| `hasselblad-xcd` | Hasselblad XCD | Hasselblad X-system digital medium-format mount; usually pairs with `44x33`. |
| `xpan` | Hasselblad XPan / Fujifilm TX | XPan/TX panoramic 35 mm mount; usually pairs with `135-panoramic`. |
| `konica-ar` | Konica AR | Konica Autoreflex/Hexanon AR SLR mount; usually pairs with `135-full-frame`. |
| `konica-f` | Konica F | Early Konica F SLR mount; usually pairs with `135-full-frame`. |
| `large-format-lens-board` | Large-format Lens Board | Board/shutter-mounted view-camera lenses; usually pairs with `4x5`, `5x7`, or `8x10`. |
| `leica-ltm` | Leica LTM / M39 | Leica thread mount / M39 rangefinder mount. |
| `leica-m` | Leica M | Leica M bayonet rangefinder mount. |
| `leica-r` | Leica R | Leica R manual-focus SLR mount; usually pairs with `135-full-frame`. |
| `leica-s` | Leica S | Leica S medium-format DSLR mount; usually pairs with `leica-s-45x30`. |
| `l-mount` | L-Mount | Leica/Panasonic/Sigma L-mount. |
| `m42` | M42 | M42 / Praktica screw mount; usually pairs with `135-full-frame`. |
| `mamiya-6` | Mamiya 6 | Mamiya 6 medium-format rangefinder mount; usually pairs with `6x6`. |
| `mamiya-7` | Mamiya 7 | Mamiya 7 medium-format rangefinder mount; usually pairs with `6x7`. |
| `mamiya-645` | Mamiya 645 | Mamiya 645 medium-format SLR mount; usually pairs with `645`. |
| `mamiya-nc` | Mamiya NC | Mamiya NC 35 mm SLR mount; usually pairs with `135-full-frame`. |
| `mamiya-rb67` | Mamiya RB67 | Mamiya RB67 medium-format SLR mount; usually pairs with `6x7`. |
| `mamiya-rz67` | Mamiya RZ67 | Mamiya RZ67 medium-format SLR mount; usually pairs with `6x7`. |
| `minolta-sr` | Minolta SR | Minolta SR/MC/MD manual-focus SLR mount family. |
| `minolta-v` | Minolta V | Minolta Vectis APS film mount; usually pairs with `aps-film`. |
| `nikon-1` | Nikon 1 | Nikon 1 mirrorless mount; usually pairs with `1-inch-type`. |
| `nikon-f` | Nikon F | Nikon F SLR mount. |
| `nikonos` | Nikonos | Nikon/Nikkor underwater camera mount; usually pairs with `135-full-frame`. |
| `nikonos-rs` | Nikonos RS | Nikonos RS underwater AF SLR mount; usually pairs with `135-full-frame`. |
| `nikon-s` | Nikon S | Nikon S rangefinder mount; usually pairs with `135-full-frame`. |
| `nikon-z` | Nikon Z | Nikon Z mirrorless mount. |
| `four-thirds` | Four Thirds | Four Thirds DSLR mount; usually pairs with `four-thirds`. |
| `micro-four-thirds` | Micro Four Thirds | Micro Four Thirds mirrorless mount; usually pairs with `four-thirds`. |
| `olympus-om` | Olympus OM | Olympus OM manual-focus SLR mount. |
| `olympus-pen-f` | Olympus Pen F | Olympus Pen F half-frame SLR mount; usually pairs with `half-frame-135`. |
| `pentax-110` | Pentax 110 | Pentax Auto 110 mount. |
| `pentax-645` | Pentax 645 | Pentax 645 medium-format SLR mount; usually pairs with `645`. |
| `pentax-67` | Pentax 67 | Pentax 6x7 / 67 medium-format SLR mount; usually pairs with `6x7`. |
| `pentax-k` | Pentax K | Pentax K mount family. |
| `pentax-q` | Pentax Q | Pentax Q mirrorless mount; usually pairs with `1/2.3-inch-type` or `1/1.7-inch-type`. |
| `praktina` | Praktina | Praktina bayonet mount; usually pairs with `135-full-frame`. |
| `rollei-6000` | Rollei 6000 | Rolleiflex 6000-series medium-format mount; usually pairs with `6x6`. |
| `rollei-qbm` | Rollei QBM | Rolleiflex SL35 / Voigtlander VSL mount; usually pairs with `135-full-frame`. |
| `samsung-nx` | Samsung NX | Samsung NX APS-C mirrorless mount; usually pairs with `aps-c`. |
| `samsung-nx-mini` | Samsung NX Mini | Samsung NX Mini mirrorless mount; usually pairs with `1-inch-type`. |
| `sigma-sa` | Sigma SA | Sigma SA SLR/mirrorless mount; usually pairs with `aps-c` or `135-full-frame`. |
| `sony-a` | Sony A | Minolta/Sony A SLR/SLT mount. |
| `sony-fe` | Sony E | Sony E mount. Use this id for both full-frame FE and APS-C E lenses; the format lives in `imageFormat`. |
| `bronica-etr` | Zenza Bronica ETR | Bronica ETR 6x4.5 medium-format SLR mount; usually pairs with `645`. |
| `bronica-gs` | Zenza Bronica GS | Bronica GS-1 6x7 medium-format SLR mount; usually pairs with `6x7`. |
| `bronica-sq` | Zenza Bronica SQ | Bronica SQ 6x6 medium-format SLR mount; usually pairs with `6x6`. |
| `contax-yashica` | Yashica / Contax | Contax/Yashica 35 mm SLR mount; usually pairs with `135-full-frame`. |

## Image Format IDs

Use `imageFormat` for the single image circle or capture format the prescription is intended to cover. The field is
optional while the catalog is being backfilled, but when present it must be exactly one known id.

Dimensions are nominal usable frame dimensions in millimeters and are intended for catalog grouping plus future
distortion, field, and aberration views.

| ID | Display Label | Width x Height (mm) | Diagonal (mm) | Aspect Ratio |
|----|---------------|---------------------|---------------|--------------|
| `110` | 110 | 17 x 13 | 21.4 | 17:13 |
| `1/2.3-inch-type` | 1/2.3-inch type | 6.17 x 4.55 | 7.67 | about 4:3 |
| `1/1.7-inch-type` | 1/1.7-inch type | 7.44 x 5.58 | 9.3 | 4:3 |
| `1-inch-type` | 1-inch type / Nikon CX | 13.2 x 8.8 | 15.86 | 3:2 |
| `four-thirds` | Four Thirds | 17.3 x 13 | 21.64 | 4:3 |
| `aps-c` | APS-C | 23.6 x 15.7 | 28.35 | about 3:2 |
| `aps-film` | APS film | 30.2 x 16.7 | 34.51 | about 16:9 |
| `half-frame-135` | Half-frame 135 | 24 x 18 | 30 | 4:3 |
| `135-full-frame` | 135 / Full-frame | 36 x 24 | 43.3 | 3:2 |
| `135-panoramic` | 135 panoramic | 65 x 24 | 69.3 | about 2.7:1 |
| `44x33` | 44x33 digital medium format | 43.8 x 32.9 | 54.78 | about 4:3 |
| `leica-s-45x30` | Leica S 45x30 | 45 x 30 | 54.08 | 3:2 |
| `645` | 6x4.5 | 56 x 41.5 | 69.7 | about 4:3 |
| `6x6` | 6x6 | 56 x 56 | 79.2 | 1:1 |
| `6x7` | 6x7 | 70 x 56 | 89.6 | 5:4 |
| `6x8` | 6x8 | 76 x 56 | 94.4 | about 4:3 |
| `6x9` | 6x9 | 84 x 56 | 101 | 3:2 |
| `4x5` | 4x5 | 127 x 101.6 | 162.6 | 5:4 |
| `5x7` | 5x7 | 177.8 x 127 | 218.5 | 7:5 |
| `8x10` | 8x10 | 254 x 203.2 | 325.3 | 5:4 |

## Selection Guidance

- Prefer official product specs, patent examples, or documented production variants over filename inference.
- Multi-mount lenses should list every known production mount represented by the same optical formula.
- Fixed-lens cameras should use `lensMounts: ["fixed-lens-camera"]` plus the appropriate `imageFormat`.
- Use `1/2.3-inch-type` or `1/1.7-inch-type` for Pentax Q lenses when the source format is known.
- Use `1-inch-type` for Nikon 1 / CX-format lenses.
- Use `four-thirds` for both Four Thirds DSLR and Micro Four Thirds lenses.
- Use `aps-c` for Canon EF-M, Samsung NX, Fujifilm X, and most Sigma SA digital lenses unless the source explicitly
  describes a different covered field.
- Use `aps-film` for Minolta Vectis lenses.
- Use `half-frame-135` for Olympus Pen F lenses.
- Use `135-full-frame` for 35 mm SLR and rangefinder mounts unless a narrower or wider covered field is documented.
- Use `135-panoramic` for Hasselblad XPan / Fujifilm TX lenses.
- Use `44x33` for Hasselblad XCD and Fujifilm G/GFX lenses designed around the 43.8 x 32.9 mm digital format.
- Use `leica-s-45x30` for Leica S lenses designed around the 45 x 30 mm Leica ProFormat sensor.
- Use `645` for Hasselblad H lenses that cover the 6x4.5 format, and `6x6` for Hasselblad V lenses that cover square
  56 x 56 mm frames.
- Use `6x8` for Fuji GX680 lenses and `6x9` for Fuji G690 lenses.
- Leave uncertain metadata unset and record the question in `agent_docs/lens-mount-format-backfill.md`.
- Do not add a new id for a spelling or label preference; add one only for a genuinely distinct mount or image format.
