# Audit Log - CANON RF 24 mm f/1.4 L VCM

Patent: JP 2025-15010 A, Numerical Example 3 / Figure 5

## 2026-08-20 - Patent-figure, identity, and glass audit

### Semi-diameter review

- Inspected PDF page 27, Figure 5, at 600 dpi with `audit:patent-figure`; the calibrated figure scale was 57.50 µm/px.
- The clean rows have a median figure/data ratio of 1.001. E1-E8 and E12-E15 already follow the patent silhouette closely.
- Refined the shared E9/E10 cemented rim on surfaces 16-18 from 13.5 mm to 11.7 mm, matching the figure's 11.67 mm optical-rim measurement.
- The trial values pass the surface validator. The stop semi-diameter remains unchanged because it is calibrated to the patent F/1.46 entrance pupil.

### Glass classification

- Confirmed all 15 glass elements resolve to coordinate-compatible Sellmeier curves while their supplier-neutral annotations avoid claiming Canon's production melts.
- The patent publishes only nd and νd, so no line indices or anomalous-partial-dispersion values were invented and no new catalog row is justified.

### Identity and metadata

- Verified the display name `CANON RF 24 mm f/1.4 L VCM` against Canon's `RF24 mm F1.4 L VCM` product name and repository spacing conventions.
- Romanized the inventors as Kenji Shinohara and Yuki Matsuba from the English patent-family metadata.
- Normalized the route key to `canon-rf-24 mm-f 14-l-vcm`, matching the sibling RF VCM prime keys.

## 2026-08-20 - Screenshot, movement, and chromatic follow-up

- Rechecked all 15 Figure 5 elements at 600 dpi after reviewing the site screenshot. The median figure/data ratio remains 1.001 and every clean comparison is within 10%, so the corrected E9/E10 rim and all other SDs were retained.
- Verified all four published focus rows: L2 moves 3.62 mm imageward and L4 moves 2.88 mm objectward from infinity to the closest state. Both directions are now explicit in the group captions; the prime correctly exposes no zoom travel.
- Replaced generic six-digit glass labels with the exact catalog-equivalent curves already selected by the resolver. Every label states that the production supplier is unspecified, and the audit still reports 15/15 strict Sellmeier coverage with zero mismatches.
- Added inferred special-element tags to E9 and E11, the two patent `1.497/81.5` elements that correlate with Canon's published two-UD production count. This does not assert a patent or supplier material identity.

## 2026-10-30 — Original-PDF shape, camera-plate and glass review

- Fresh exact original JP2025015010A Numerical Example 3 ¶0089 PDF pp 15–16; native Fig 5/6 p 27, definition¶0082 p 12,
  GB definition¶0017 p 5, Table 1 p 22. Front pp 1/30 confirm Kenji Shinohara/Yuki Matsuba, Canon, filing 2023-07-20,
  publication 2025-01-30. Actual August 20 history preserved. All 15 elements, four bonds, concave ends and both full
  A4–A12 profiles reviewed; no hybrid layer. Source lens R/d/media/aspheres/stop/four gap rows retained.
- Figure 5 native 1181×1859 at 423 ppi; Figure 6 native 1182×1859 at 423 ppi. Earlier 600 dpi is~1.42× upsampling.
  Vector tables inspected at 200 dpi; Table 1 native 720×1826 at 235 ppi. Axial native scale~12.2–12.3 px/mm, endpoint
  uncertainty±.16–.24 mm plus schematic calibration uncertainty. Leaders/axes/brackets/focus arrows/GB/IP excluded.
- Restored source camera GB via rearPlates: D27=13.52,t 1 mm,nd 1.51633/vd 64.1,trailingair 1 mm. No published plateSD,
  no invented clipping rim. Former 15.18 was a rounded reduced fold. Exact reducedrear 15.179487051, physical 15.52;
  source reducedtotal 118.169487→printed 118.17, physical 118.51. New image plane+.34 mm versus old rounded fold;
  t(1−1/n)=.340512949 and foldrounding.000512949 are distinct. EFL/iris unchanged; no new active lens element.
- All 16 media explicitd 587.6/F486.1/C656.3/g 435.8 provenance¶0082. All 15 prior lens curves retained, GB adds qualified
  S-BSL7 proxy. No source numerical C/F/g/partial data; zero overrides existed/removed/added. Genuine Table 1ν4 p 81.54
  retained as aggregate Abbe, not partial dispersion. E9/E11 source code 497815 separated from retained H-FK61 catalog 497816.
  Supplier/melt/chemistry/fabrication remain unidentified; inferred UD tags do not prove source APD.
- Shape: S2 clearcap 19.1→16.0 with resolved outershoulder 19.1 (S1 unchanged), matching native optical-cap/shoulder.
  D3 squareblank historical native-scaledreference~11.67 mm, fresh native~11.4–11.7±.16–.24 mm. Retained 11.7 trial
  clips 56 axial samples in 14 nearfocus states, S18 reach 12.133953626 at source nearrow. Adopted coextensive S16–18=12.2
  as modeled finite-beam floor, not measured source or production dimension (~4.5%above historicheight). Squareblank
  supports coextensive form; no opaque interface lands/resin wings/cuts/exemptions. SourceR/d,iris,cams,guards unchanged.
- Source nearβ−.17 modeled−.1707554 within±.005 and literal nearspacings/Fig 6B F1.46 support the finite-state beam
  check. Iris 12.877511407 remains inferred from canonical infinityF1.46 and heldthroughfocus, not a printed diameter.
  Farβ−.022 modeled−.0226777 outside±.0005; middle−.1004845 within±.005. No published objectdistance plane;
  Gaussian source-row distances 1183.730250/340.195014/239.315620 mm are inferred, not source dimensions.
- Two separate 67 focus launch scopes (65 grid union 4 sourceknots): collimated control census and actual Gaussian finite
  supplement, own iris every state, zero seed failures. Each passes 3283/3283 axial,201/201 chiefs over 9849 pupils,
  zero unaimed/trim. Gaussian source bundles 49/34/6,49/29/12,49/29/12,49/29/12; collimated 49/34/6,49/34/6,
  49/31/6,49/31/6. Old 11.7 collimated also passed all; it did not establish finite clearance. Intervals illustrative.
- All 15 actual SVG paths finite/closed/connected across 67 states; source/native comparison confirms front shoulder,
  bonds and recorded beam-driven D3 enlargement. Small other outline differences retained. Narrow surface/image-circle/
  aperture pass; generic fullframe field~89%, no cuts. Original source field is narrower than generic fullframe.
- Unresolved source.errata: p 15 field 37.14 vs Fig 6ω37.6; dchief 16.725068/16.949838 mm (77.25/78.29% genericradius 21.65).
  Runtime 37.6 distortion−10.94% versus native Fig. 6A≈−13.2±.4%. Table 1BF/f.47 versus 15.18/24.72=.61408; farβ print-bin
  mismatch retained. No fitted prescription replacement. Sourcemedia fidelity, sampled clearance and production correlation
  separate; no IS decenter. Catalog design computed 24.713123→printed 24.72. Physical/reduced source tracks distinct.

### Runtime field-coordinate qualification (2026-10-30)

The collimated census uses 0/.6/1 fractions of the modeled maximum object angle. The finite-object supplement uses
0/.6/1 fractions of a **paraxial object-field reference**, yObject=(21.65 mm×fraction)/A, where A is that state's
first-order transverse matrix term. Those explicit finite-object points establish the launch plane, but distortion
means their chief rays need not land at the sensor corner. They are paraxial object-field probes, not inverse-solved
finite sensor-edge rays. The following actual terminal image heights are measured at the authored physical image plane.
The infinity row uses the separate modeled-angle launch; nonzero rows use Gaussian finite-object geometry.

| Focus control | Probe .6 actual image height | Probe 1.0 actual image height |
| ------------- | ---------------------------: | ----------------------------: |
| 0.000000000   |                 11.162751 mm |                  19.260150 mm |
| 0.202978069   |                 12.251684 mm |                  18.738948 mm |
| 0.706289043   |                 12.259663 mm |                  18.755643 mm |
| 1.000000000   |                 12.265355 mm |                  18.766267 mm |

These results do not claim true finite-corner reach. Separate infinity source-field, inverse-image-height/vector
checks remain as previously recorded. Source object-plane uncertainty, field limitations and off-axis vignetting
remain explicit; no cap, cam or iris is fitted to make paraxial field fractions land at a desired image height.
