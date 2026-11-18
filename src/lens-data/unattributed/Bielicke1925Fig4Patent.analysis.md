# Bielicke 1925 Fig.4 reserve: qualified patent-only build

Primary: https://patentimages.storage.googleapis.com/52/bc/ee/35769b8dd11fe5/US1540752.pdf . Facsimile pages1–2 independently read at high resolution; printed table and drawing-table agree. No production identity established. Inventor William F. Bielicke, individual applicant, filed1924-03-08, granted1925-06-09.

## Literal prescription
At nominal100mm: signed radii [56,-1500,-55,80,-373,-48,194,-194]mm; glass axial thickness [9,2.5,7,5]mm; intervening air [17,12,1.5]mm. Four singlets/four groups. nD [1.60958,1.67330,1.60958,1.60958], nG′ [1.62273,1.70141,1.62273,1.62273]. No literal Abbe value. Retain D-only native optics; do not fabricate modern V or quietly interpret G′ as F or g. G′ values tested separately in independent paraxial computation, not wired into unsupported dispersion. Figure3 remains out of scope and unrepaired.

## Assumptions
Source labels focus100mm/diameter50mm, consistent contextually with nominal f/2, but does not identify that50mm as an exact iris bore or individual rim. Model adopts nominal f/2 with a paraxially computed physical iris. It places that iris halfway through the12mm gap II–III, z34.5mm, and assigns25mm clear semi-diameters to all eight glass surfaces. These are explicitly estimated. Literal source specifies only stop betweenII/III. No claim of exact axial stop, housing, flange or sensor format. Image-plane BFD calculated; infinity-only.

## Verified scope and caveats
D EFL100.40491043206832mm, BFD79.04572679936774mm; G′ EFL100.28565557184737mm, BFD78.99689176008799mm. LensIII/IV singlet G′ focal lengths87.7388667/156.5398763mm are near the source's rounded87/156. D values89.6412305/159.9063644 differ; preserve both rather than fit indices.

Native pinned-engine schema validation and scoped typecheck pass; zero render trimming; independent 1001-radius adjacent surface geometry test positive including iris clearance. Central90% axial passes every native sampled ray. 187/201 axial samples pass overall: outer7% radius is clipped, so NOT a fully transmitting nominal-f/2 pupil claim. Off-axis pass counts6/9 each at5,10,15 degrees are diagnostic only, not source coverage or image-quality promises. D-reference geometric MTF support is available; C/d/F intentionally unavailable. Independent exact Snell rays reproduce paraxial BFD near axis and show longitudinal spherical aberration: at22.5mm launch +0.431581mm,25mm +1.765463mm, without aperture clipping in that separate screen. No fitting or correction was performed.

Full-app regression, fresh-main compatibility, compiled-viewer/browser, exhaustive pupil/MTF/convergence and manufacturing QA remain integration work. The file is hidden by default and patent-only. It is not a production match or newly discovered family.

## Dedup
Checked full1,140 pinned catalog source bodies plus55 historical models: no Bielicke/US1540752/US697931 exact name/publication hit. Supplementary normalized numerical fingerprint check included. Parent must check authenticated-main delta and any new builds outside retained corpus before admission. Search did not establish a reliable production alias. Do not confuse this four-singlet patent with six-element Kino-Plasmat merely because both are fast historical lenses.

## Reproduce
Run `python analyze.py`, `python ray_screen.py`, `python generate.py`, `python geometry.py`. Use the retained pinned engine and dependencies, copy model to src/lens-data/bielicke/, and copy validate.mjs to engine root. Run `node --import ./scripts/ts-js-specifier-hook-register.mjs validate.mjs`; then scoped tsc `--noEmit --strict --skipLibCheck --target ES2022 --module nodenext --moduleResolution nodenext src/lens-data/bielicke/Bielicke1925Fig4Patent.data.ts`. No publishing, commits, PRs, Drive changes or deployment done here.

## Alternate cursor
Altman US1658365 (1928), https://patents.google.com/patent/US1658365 and PDF https://patentimages.storage.googleapis.com/9a/e9/21/27f630f237a336/US1658365.pdf : three-single-element folding-camera example, normalized total thickness .148, f/7.5–8. Search exact publication absent from corpus; existing Altman models are different patents. Web OCR only screened, not facsimile verified/build qualified. All six radii signs, source dispersive convention and stop estimate must be read from facsimile before proceeding. No completed-work credit.
