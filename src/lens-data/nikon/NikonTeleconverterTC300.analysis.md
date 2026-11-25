# Nikon TC-300 2× teleconverter

This hidden native integration model reconstructs the 1977 **TC-300** powered optics from Soichi Nakamura's US4154508 Example II and claim 4. Nikon describes the Montreal-era TC-2 as its predecessor; this is not a second TC-2 or TC-301 model.

## Production identification

- [Nikon factory sales manual, PDF p. 106](https://www.pacificrimcamera.com/rl/00594/00594.pdf#page=106) gives the exact labeled TC-300 optical section, five singlets, 2× nominal ratio, 88.5 mm first-to-last vertex distance, 63.1 mm back focus and −237.7 mm converter focal length. The [higher-resolution copy of the same engineering section](https://www.mir.com.my/rb/photography/companies/nikon/nikkoresources/teleconverter/tc300.gif) is the overlay source; the Nikon scan is included for provenance.
- The [original patent](https://patentimages.storage.googleapis.com/a3/4d/9d/bc66def5d8957c/US4154508.pdf) gives the reference host on PDF p. 13 and signed converter claim on p. 15. All ten radii, nine internal gaps and refractive data are unchanged. Example II's ten axial positions register at 0.655 px RMS / 1.135 px maximum over 339 px; Example I has the wrong track and misses by about 73 px RMS. No factory-tolerance claim. Clear rims of 13.3 and 19.8 mm are inferred from the production drawing.
- The isolated converter focal length is −236.42349 mm (printed −236.415), and its track is 88.54 mm. The printed 1.5423 mm is a host-to-converter air gap, not the converter's master image distance. The literal patent host gives 299.99960 mm and 70.05349 mm back focus. This derives 68.51119 mm master image distance, a 600.00771 mm combined EFL and 63.11192 mm back focus from the final converter surface. The 2.000028× result was not forced to 2.000000×.

## Validation and limits

- Verified numerical model transfer from Codex, native schema/round-trip, mounted reference fixture and physical stop preservation; the isolated test results included 267 passing tests. No geometry override or trim. Native compatibility controls reject undeclared, incorrect-mount, or too-fast test hosts. Main catalog Nikon F hosts are excluded pending their own checks, not declared physically incompatible. The patent reference fixture included as evidence is not a retail lens.
- d-line and infinity only. With the reference master at f/4.5 (combined about f/9), the sampled on-axis bundle cleared; off-axis master-rim clipping and unresolved aiming prevent a wider claim. With master f/8 (combined about f/16), the sampled pupil passed through ±2°. The reference master's iris position and rims are estimates. No measured MTF, actual production host fit, finite focus, broadband performance or application UI QA.
