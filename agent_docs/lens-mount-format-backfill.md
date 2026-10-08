# Lens Mount And Image-Format Backfill

Track progress for optional `lensMounts` and `imageFormat` metadata in `src/lens-data/**/*.data.ts`.

Canonical ids live in `src/utils/catalog/lensTaxonomy.ts`. Do not free-type labels in lens files. If a lens is ambiguous, leave
the fields unset and add a note here until a source check resolves it.

## Current Coverage

- Total lens data files: **900**
- Files with both `lensMounts` and `imageFormat`: **859**
- Files missing `lensMounts`: **32** (23 public lenses and 9 hidden reference fixtures)
- Files missing `imageFormat`: **31** (22 public lenses and 9 hidden reference fixtures)
- Files missing both fields: **22**
- Formats currently in use: `1-1.7-inch-type`, `1-1.8-inch-type`, `1-2.3-inch-type`, `1-2.55-inch-type`,
  `1-2.7-inch-type`, `1-inch-type`, `1.25-inch-tube`, `1.5-inch-type`, `110`, `135-full-frame`,
  `16mm-cinema`, `2-3-inch-type`, `35mm-cinema`, `44x33`, `4x5`, `5x7`, `645`, `6x6`, `6x7`, `6x9`, `8x10`,
  `aps-c`, `four-thirds`, `normal-8`, `super-35-1.9`, `super-35-cinema`, `super-8`
- Mounts currently in use: `agfa-ambi-silette`, `alpa`, `arri-pl`, `arri-standard`, `c-mount`, `canon-ef`, `canon-ef-m`, `canon-ef-s`, `canon-fd`, `canon-fl`, `canon-r`, `canon-rf`, `contax-rf`, `contax-yashica`, `d-mount`, `dkl`, `enlarging-lens`, `exakta`, `fixed-lens-camera`, `four-thirds`, `fujica-x`, `fujifilm-g`, `fujifilm-x`, `graflex-xl`, `hasselblad-h`, `hasselblad-xcd`, `konica-ar`, `konica-f`, `l-mount`, `large-format-lens-board`, `leica-ltm`, `leica-m`, `leica-r`, `m42`, `mamiya-645`, `mamiya-7`, `mamiya-nc`, `mamiya-rb67`, `mamiya-ze`, `micro-four-thirds`, `minolta-sr`, `miranda-bayonet`, `nikon-1`, `nikon-f`, `nikon-s`, `nikon-z`, `nikonos`, `nikonos-rs`, `olympus-om`, `pentacon-six`, `pentax-110`, `pentax-645`, `pentax-67`, `pentax-k`, `pentax-q`, `praktica-b`, `praktina`, `samsung-nx`, `sigma-sa`, `sony-a`, `sony-fe`, `voigtlander-prominent`, `zeiss-contaflex`, `zeiss-contarex`

## Source-Review Queue

### Remaining public mount questions

Every public record still missing `lensMounts` is listed below. A patent’s lens barrel, lens-cell thread or rear
spacing does not by itself identify a camera mount. Native production variants may be cataloged as a supported subset,
with remaining compatibility questions explained in the lens analysis.

| Records | Remaining source limitation |
|---------|-----------------------------|
| Zeiss Mirotar 500mm f/4.5 | The cited ZEISS sheet identifies a tube and bellows assembly, but the reviewed source set does not select the camera-side fitting of that assembly. Do not assign a Contax or Contarex mount from the family name. |
| Angénieux Retrofocus R1 35mm; R11 28mm | Historical specimen and secondary references indicate several native fittings. A period manufacturer listing tied to these selected production variants is still needed before enumerating their mounts. |
| Zeiss Biotar 50mm f/1.4; Kodak Ektar 52mm f/1.5 | The scaled patent examples are not securely mapped to one factory installation. The Biotar family’s Kinamo and other cine contexts do not establish the fitting of this model. |
| Kodak Ektar 50mm f/3.5 | Kodak literature documents both Ektra and Retina same-name products. The selected patent correlation does not uniquely choose between their different installations. |
| Schneider Curtagon 35mm f/2.8, generation 2 | Period mount lists must be tied to the selected six-element generation, not inherited from a different Curtagon version. |
| Schneider Variogon 10–40mm f/2.8 | Manufacturer literature supports the Normal-8 product but does not identify a standardized camera fitting for the selected production correlation. |
| Schneider Variogon 8–40mm f/1.8 | Existing analysis identifies the Beaulieu C-mount context, but the cited manufacturer scan could not be retrieved during this review. Restore or independently inspect that exact brochure before filling the field; do not substitute the later 8–48mm lens. |
| Schneider TV-Variogon 20–600mm f/2.1 | The 1¼-inch tube application does not identify the lens-to-camera/prism mounting interface. Do not substitute a modern ⅔-inch B4 fitting. |
| Schneider Xenar 50mm f/2.8 | The source set does not select one historical mechanical variant for the scaled patent example. |
| Vivitar Series 1 70–210mm f/2.8–4 | The 1984 brochure supports the exact 14/10 production generation, but does not establish its complete mount list. The earlier f/3.5 service manual is not evidence for this version. |
| Vivitar Series 1 450mm f/4.5 | Secondary material describes T-mount, but the source set lacks a manufacturer mechanical specification for this rare production correlation. |
| Nikon Ultra-Micro-Nikkor 29.5mm | Photolithography installation; its optical back focus and reduction ratio do not identify a consumer camera mount. |
| Meyer Kino-Plasmat 100mm; Double-Plasmat 135mm | Historical barrel/specimen evidence and normalized patent scaling do not select a standard factory camera mount. |
| Russar-21; Russar-22 | Experimental prescription sources lack a manufacturer-issued standardized production fitting. |
| KMZ Industar ITMO Variant 2; Voigtländer Dynar | Teaching/normalized patent models lack a selected commercial installation; leave mount and format unset. |
| Zeiss S-Biogon 40mm f/5.6; Voigtländer Cine-Tele-Anastigmat 100mm f/4.5; Voigtländer Tele-Dynar 100mm f/6.3 | Added after the last source review; neither field has been reviewed against sources yet. |

### Hidden reference fixtures

`src/lens-data/reference/*.data.ts` are synthetic mirror/folded fixtures and intentionally remain outside public
catalog mount/format taxonomy unless a separate reference-fixture convention is added.

### Remaining public image-format questions

The source review covers every public record still lacking `imageFormat`. Do not turn a family resemblance, chosen
patent scaling, angular field, or circular image into an unsupported rectangular recording format.

| Records | Remaining source limitation |
|---------|-----------------------------|
| Nikon S-100 | [Nikon’s history](https://imaging.nikon.com/imaging/information/chronicle/cousins20-e/) confirms a pickup tube but gives no size. Tape widths and the unrelated COOLPIX S100/JVC S-100 do not establish its active format. |
| Apple iPhone 7 Wide; iPhone 12 Wide | Apple’s cited product specifications do not give active sensor dimensions or establish the patent’s production identity. The iPhone 12 patent image circle remains explicit; neither receives a guessed inch-type format. |
| Kinoptik Super-Tegea 1.9mm | Manufacturer brochures establish an 8.7 mm circular image and multiple applications, not a single rectangular capture frame. Keep `imageCircleMm`. |
| Nikon Ultra-Micro-Nikkor 29.5mm | Fixed-conjugate photolithography objective; its reduction ratio/field does not imply a consumer film or sensor class. |
| KMZ Industar ITMO Variant 2 | Teaching prescription lacks a verified factory/camera-format mapping. |
| Zeiss Biotar 50mm f/1.4; Kodak Ektar 52mm f/1.5; Schneider Xenar 50mm f/2.8 | The cited sources do not securely identify the selected scaled patent example with a production variant’s recording frame. Family listings alone do not resolve that boundary. |
| Russar-21; Russar-22 | Experimental/patent field evidence lacks a manufacturer-issued recording-frame specification for these exact prototypes. |
| Meyer Kino-Plasmat 100mm; Double-Plasmat 135mm | Exact production mapping and format are not established by the source set; chosen scales and historic specimen names do not supply them. |
| Fujinar 210mm | The manufacturer history and museum record establish the large-format family and 21 cm product, but no specific frame or image-circle class for this example. Do not substitute Fujinon/SC specifications. |
| Agfa Color-Magnolar II 100mm; Kodak Enlarging Ektar 100mm | Finite-conjugate enlarger objectives: Kodak’s cited brochure describes a negative up to 2¼ × 3¼ inches, not the modeled image-plane frame. A catalog format needs an explicit object/image-side convention; no arbitrary output-print format is assigned. |
| Voigtländer Dynar; symmetric Heliar; second asymmetric Heliar | Normalized patent examples are not tied to a uniquely chosen production focal length/frame combination. |
| Zeiss S-Biogon 40mm f/5.6; Voigtländer Cine-Tele-Anastigmat 100mm f/4.5; Voigtländer Tele-Dynar 100mm f/6.3 | Added after the last source review; neither field has been reviewed against sources yet. |

Source details and the product/patent qualifications remain in each lens’s analysis. Sources for completed compact-camera,
tube and cinema assignments are centralized in `src/lens-data/LENS_MOUNT_FORMAT_OPTIONS.md`; completed production
assignments also cite the manufacturer document in their analysis. Hidden synthetic fixtures remain intentionally unset.

Useful scan commands:

```bash
rg -n '^\s*"?(lensMounts|imageFormat)"?:' src/lens-data -g "*.data.ts"
rg --files-without-match '^\s*"?lensMounts"?:' src/lens-data -g "*.data.ts"
rg --files-without-match '^\s*"?imageFormat"?:' src/lens-data -g "*.data.ts"
```
