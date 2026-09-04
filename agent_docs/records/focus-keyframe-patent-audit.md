# Focus Keyframe Patent Audit (2026-09-04)

## Scope and result

This audit reviewed the repository's 674 lens prescriptions, their companion analyses, and the 665 locally retained
patent PDFs for focus behavior that could not be represented by the former two-endpoint model. Of the 622 prescriptions
with non-empty `var` data, 54 additional lenses now use explicit `focusPositions`; together with the Nikon AI AF Micro-
Nikkor 105mm f/2.8 S that motivated the feature, the catalog has 55 keyframed prescriptions.

The conversion criterion was deliberately narrow: add a keyframe only when the selected patent publishes another
complete focus state inside the lens's already modeled infinity-to-close range. The authored keyframe contains the
published variable spacings, and its normalized coordinate follows the existing inverse-distance convention:

`focusT = closeFocusM * 1000 / objectToImageDistanceMm`

Object-to-image distance was independently recomputed from the authored paraxial prescription after applying the
published spacing row. All source states and existing close endpoints remain exact. Motion between them is piecewise-
linear visualization and is not presented as a patent-published cam trajectory.

## Converted prescriptions

- Canon: `CanonEF100mmf28Macro`, `CanonEF180mmf35LMacroUSM`, `CanonRF24mmF14LVCM`, `CanonRF85mmf2Macro`,
  and `CanonRF100f28`.
- Carl Zeiss: `ZeissTouit50mmf28Macro`.
- Fujifilm: `FujifilmXF23mmf2RWR` and `FujifilmXF60mmf24R`.
- Hasselblad: `HasselbladXCD65mmf28` and `HasselbladXCD120mmf35Macro`.
- Mamiya: `MamiyaSekorDAF150mmf28IF`.
- Minolta: `MinoltaAF20mmf28` and `MinoltaAF100mmf28Macro`.
- Nikon: `Nikon1Nikkor32mmf12`, `NikonAFFisheyeNikkor16mmf28D`, `NikonAFMicroNikkor200mmf4D`,
  `NikonAFSDXMicroNikkor40mmf28G`, `NikonAFSDXMicroNikkor85mmf35GEDVR`, `NikonAFSMicroNikkor60f28G`,
  `NikonAFSNIKKOR500mmf4EFLEDVR`, `NikonAFSNikkor500mmf56EPFEDVR`, `NikonAINikkor600mmf56IFED`,
  `NikonMedicalNikkor120mmf4IF`, `NikonNikkorAFS24mmf14G`, `NikonNikkorZ20mmf18S`,
  `NikonRUWMicroNikkor50mmf28`, and `NikonZ105f28`.
- Olympus: `OlympusZuikoAutoMacro90mmf2` and `OlympusZuikoAutoW18mmf35`.
- Panasonic: `PanasonicLumixG25mmf17`.
- Pentax: `PentaxA135mmf18`, `PentaxA200mmf4MacroED`, and `PentaxDA35mmf28MacroLimited`.
- Samsung: `Samsung20mmf28`.
- Sigma: `Sigma16mmf14DCDN`, `Sigma20mmf14DGHSMArt`, `Sigma30mmf14DCHSMA`, `Sigma60mmf28DN`,
  `SigmaAPOMacro105mmf28OSHSM`, `SigmaAPOMacro150mmf28OSHSM`, `SigmaAPOMacro180mmf28`,
  `SigmaDGDNA35mmf14`, and `SigmaDp2M30mmf28`.
- Sony: `SonyE50mmf18OSS`, `SonyFE55mmf18ZA`, `SonyFE90mmf28`, `SonyFE135mmf18GM`, and
  `SonyPlanarFE50mmf14ZA`.
- Tamron: `TamronSP90mmf28Di`, `TamronSPAF60mmf2Di`, and `TamronSPAF180mmf35Di`.
- Vivitar: `VivitarSeries1135mmf23`.
- Voigtlander: `VoigtlanderColorSkopar28mmf28Aspherical` and `VoigtlanderNokton60mmf95`.

Several of these store a patent calibration row between infinity and an existing constrained production-distance
endpoint. Others directly publish three or four source states. The Olympus 90mm macro also now represents the patent's
differential whole-lens/floating-group movement rather than holding its rear image gap fixed.

## Reviewed exclusions

- Zoom prescriptions whose published intermediate focus row lands at a different inverse-distance coordinate at each
  zoom station cannot use the current shared `focusPositions` axis without moving at least one source row. Examples
  include `NikonAFSDXZoomNikkor1855mmf3556GEDII` (`focusT` about 0.2963 / 0.1675 / 0.1115),
  `NikonZ1424f28S`, `Sigma2845mmf18DN`, `FujifilmGF3570mmf4556`, and `SonyFE2070mmf4G`. Their source rows remain
  documented, and their authored endpoints are unchanged.
- A published state outside the declared production focus range is not inserted. Examples include
  `NikonAFINikkor600mmf4DIFED` (`focusT = 1.1565` relative to the 6 m endpoint),
  `OlympusMZuiko150mmf2ED`, and `NikonAISZoomNikkorED200400mmf4`.
- Discontinuous modes and accessories are not flattened into one focus axis. This includes the two focus modes of
  `CanonEFM28mmf34MacroISSTM`, the optional macro spacer for `MamiyaSekorMacroC80mmf4`, the macro cam of
  `VivitarSeries170210mmf35`, and the separate macro mode in `Leica28mmf17`.
- A partial source row is not presented as a complete exact state. `OlympusZuiko24mmf2J` publishes the floating-
  correction gaps at beta=1/40 but not the simultaneous helicoid/image-plane extension, so its existing constrained
  two-state representation remains unchanged.
- Prescriptions with exactly two complete published states already remain exact under the legacy two-value path and do
  not benefit from an explicit keyframe array. Prescriptions with no published finite-focus spacings remain unchanged.

## Regression guard

`focusKeyframePatentAudit.test.ts` runs every explicit focus coordinate in all 55 keyframed prescriptions through the
runtime thickness resolver and requires exact agreement with every authored prime or zoom focus vector. It also pins
representative reversing trajectories and patent-row-plus-reconstruction cases so the catalog cannot silently regress
to endpoint-only motion.
