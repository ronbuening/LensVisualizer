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
catalog is being backfilled, but when present it must be a non-empty array of unique known ids. Supported variants may be a documented subset; describe unrepresented sockets and body-specific compatibility limits in the lens analysis. Adapter compatibility alone is not a native production mount.

| ID | Display Label | Notes |
|----|---------------|-------|
| `agfa-ambi-silette` | Agfa Ambi Silette | Agfa Ambi Silette proprietary 35 mm rangefinder bayonet. |
| `alpa` | ALPA (35 mm SLR) | The proprietary bayonet of the Swiss ALPA 35 mm SLR system. |
| `arri-pl` | ARRI PL | The Positive Lock cinema mount used by ARRI and many other camera makers. |
| `arri-standard` | ARRI Standard | The original cylindrical ARRIFLEX lens mount used before ARRI Bayonet and PL. |
| `c-mount` | C-mount | The one-inch, 32-thread-per-inch screw mount used across cine and imaging systems. |
| `d-mount` | D-mount | The smaller screw mount used for many interchangeable-lens 8 mm movie cameras. |
| `fujica-x` | Fujica X | Fuji’s historical Fujica X bayonet for X-Fujinon SLR lenses. |
| `graflex-xl` | Graflex XL | The Graflex XL combination lens bayonet and focusing-ring interface. |
| `mamiya-ze` | Mamiya ZE | Mamiya’s electronic bayonet for the Sekor E and EF lens families. |
| `miranda-bayonet` | Miranda Bayonet | The external Miranda SLR bayonet used by Auto Miranda and Auto EC lenses. |
| `pentacon-six` | Pentacon Six / Praktisix | The medium-format bayonet shared by Praktisix and Pentacon six lenses. |
| `praktica-b` | Praktica B | The Praktica B bayonet used by PRAKTICAR lenses. |
| `voigtlander-prominent` | Voigtländer Prominent | Voigtländer’s interchangeable lens system for the postwar Prominent rangefinder. |
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
| `pentax-q` | Pentax Q | Pentax Q mirrorless mount; usually pairs with `1-2.3-inch-type` or `1-1.7-inch-type`. |
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
| `contax-yashica` | Contax / Yashica | Contax/Yashica 35 mm SLR mount; usually pairs with `135-full-frame`. |

## Image Format IDs

Use `imageFormat` for the single image circle or capture format the prescription is intended to cover. The field is
optional while the catalog is being backfilled, but when present it must be exactly one known id.

Dimensions are nominal usable frame dimensions in millimeters and are used for catalog grouping plus image-field limits
in distortion, vignetting, bokeh, and aberration analysis.

| ID | Display Label | Width x Height (mm) | Diagonal (mm) | Aspect Ratio |
|----|---------------|---------------------|---------------|--------------|
| `1-2.7-inch-type` | 1/2.7-inch type | 5.371 x 4.035 | 6.718 | 5.371/4.035 |
| `1-1.8-inch-type` | 1/1.8-inch type | 7.176 x 5.319 | 8.932 | 7.176/5.319 |
| `2-3-inch-type` | 2/3-inch type | 8.8 x 6.6 | 11.000 | 8.8/6.6 |
| `1.25-inch-tube` | 1¼-inch television tube | 16 x 12 | 20.000 | 16/12 |
| `1.5-inch-type` | 1.5-inch type | 18.7 x 14 | 23.360 | 18.7/14 |
| `super-35-cinema` | Super 35 cinema (24.9 × 18.7 mm) | 24.9 x 18.7 | 31.140 | 24.9/18.7 |
| `super-35-1.9` | Super 35 digital (26.2 × 13.8 mm) | 26.2 x 13.8 | 29.612 | 26.2/13.8 |
| `normal-8` | Normal 8 | 4.9 x 3.6 | 6.08 | 1.361:1 |
| `super-8` | Super 8 | 5.69 x 4.22 | 7.08 | 1.348:1 |
| `16mm-cinema` | 16 mm cinema | 10.26 x 7.49 | 12.70 | 1.37:1 |
| `35mm-cinema` | 35 mm cinema (22 × 16 mm) | 22 x 16 | 27.20 | 1.375:1 |
| `110` | 110 | 17 x 13 | 21.4 | 17:13 |
| `1-2.55-inch-type` | 1/2.55-inch type | 5.6448 x 4.2336 | 7.056 | 4:3 |
| `1-2.3-inch-type` | 1/2.3-inch type | 6.17 x 4.55 | 7.67 | about 4:3 |
| `1-1.7-inch-type` | 1/1.7-inch type | 7.44 x 5.58 | 9.3 | 4:3 |
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
- Use `1-2.3-inch-type` or `1-1.7-inch-type` for Pentax Q lenses when the source format is known.
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

### 1/2.55-inch-type dimension basis

Samsung specifies the Galaxy S9 main camera as 1/2.55-inch type, 4:3, with 1.4 µm pixels
([Samsung camera specifications](https://www.samsung.com/sg/support/mobile-devices/everything-you-need-to-know-about-your-samsung-galaxy-s9-and-s9-plus-camera/)).
NTT DOCOMO lists a 4032 × 3024 still-image size for the Galaxy S9 SC-02K
([carrier specifications](https://www.docomo.ne.jp/support/product/sc02k/spec.html)).
The nominal active area is derived as 4032 × 0.0014 by 3024 × 0.0014 mm, with a 7.056 mm diagonal.
These calculated dimensions represent the nominal capture area, not a measurement of the sensor die;
the optical-inch designation is not converted directly into millimeters.

The standard 16 mm gate follows [SMPTE Journal, Table I](https://journal.smpte.org/periodicals/SMPTE%20Journal/88/9/4/07241916.pdf). The 22 × 16 mm cinema reference follows the [Kinoptik brochure, page 2](https://www.pacificrimcamera.com/rl/00030/00030.pdf); it does not represent every 35 mm cinema gate. These diagonals are minimum format coverage, not measured maximum lens image circles.

### 8 mm cinema coverage sources

Schneider’s [historical Variogon publication](https://schneiderkreuznach.com/application/files/6115/0781/8896/variogon-zoom-lenses.pdf), PDF p. 5, gives Normal-8 as 3.6 × 4.9 mm and Super-8 as 4.22 × 5.69 mm; it lists the 2.8/10–40 under Normal-8. US 3,442,573 explicitly gives the latter gate for the 1.8/8–40 prescription. These format diagonals are minimum frame-coverage references, not measured optical-circle limits.

### Compact-camera, television and cinema formats

Inch-type names describe optical classes, not physical diagonals in inches. Dimensions are nominal frame references,
not measurements of the individual production camera or of a patent's variable image height.

- `1-2.7-inch-type`: COOLPIX SQ is specified as 1/2.7-inch CCD in [Nikon's manual, p.107](https://cdn-10.nikon-cdn.com/pdf/manuals/coolpix/CPSQman.pdf).
  Nominal 5.371 × 4.035 mm follows [Autodesk's sensor preset](https://help.autodesk.com/cloudhelp/2026/JPN/VRED-Basics/files/VRED-Editors-and-Modules/Cameras/VRED_Cameras_CameraSet_CameraEd.html).
- `1-1.8-inch-type`: COOLPIX 4300 is specified as 1/1.8-inch CCD in [Nikon's manual, p.144](https://cdn-10.nikon-cdn.com/pdf/manuals/coolpix/CP4300man.pdf).
  Nominal 7.176 × 5.319 mm follows the same Autodesk reference. Neither Nikon manual measures the active area.
- `2-3-inch-type`: 8.8 × 6.6 mm follows [FUJIFILM's format table](https://www.fujifilm.com/ch/de/business/optical-devices/mvlens/terms).
  Production sizes are supported by [the X10 release](https://www.fujifilm.co.jp/corporate/news/articleffnr_0559.html)
  and [Olympus's E-10 release listing](https://olycojp.olympus-global.com/news/imaging/2000/).
- `1.25-inch-tube`: [Schneider's manufacturer advertisement](https://www.worldradiohistory.com/Archive-All-BC-Engineering/BME/80s/BME-1980-09.pdf)
  lists the 2.1/20–600 under 1¼-inch pickup tubes. The nominal 16 × 12 mm target follows
  [BBC R&D 1964/19, p.1](https://downloads.bbc.co.uk/rd/pubs/reports/1964-19.pdf), describing the 30 mm Plumbicon.
  This is a tube-format reference, not an identification of the camera or prism used with the patent.
- `1.5-inch-type`: 18.7 × 14.0 mm follows [Canon's G1 X brochure](https://downloads.canon.com/cpr/software/camera/2012CES_0162W812.pdf)
  and [Canon's G1 X Mark II sales sheet](https://device.report/m/a4df8e71c17310fa51e7f6b594febf20fec3401f37c55af516a88ccecd3977b1.pdf).
  Mark II records different 3:2 and 4:3 crops on a multi-aspect sensor. This ID records the nominal sensor envelope;
  it does not reconstruct either crop or imply the patent covers the entire envelope at every zoom station.
- `super-35-cinema`: ANSI silent aperture 24.9 × 18.7 mm from [ARRI's Ultra Prime technical table](https://www.arri.com/en/cine-lenses/arri-zeiss-fujinon-lenses/legacy/ultra-prime-lenses/arri-ultra-prime-lenses-technical-data).
- `super-35-1.9`: 26.2 × 13.8 mm is the EOS C500 1.9:1 reference in [Canon's CN7×17 manual](https://downloads.canon.com/nw/camera/products/cine-lenses/cine-servo/pdfs/b-im-20237-4-web.pdf).
  The CN7 also covers a 24.6 × 13.8 mm C300 frame. Keep its explicit 29.6 mm image circle; the larger silent-aperture
  Super 35 format would exceed this lens's disclosed coverage.

Production-format assignments retain each lens's existing patent/product correlation caveat. A format is not proof of
production prescription identity or unvignetted full-field performance. The S-100 remains unresolved: Nikon's
[historical account](https://imaging.nikon.com/imaging/information/chronicle/cousins20-e/) establishes a pickup tube but
publishes no tube size; its 1/2-inch and 1/4-inch numbers describe recording tape. The modern COOLPIX S100 and JVC S-100
are different cameras and must not supply this record's format.
