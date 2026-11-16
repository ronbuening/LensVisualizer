## Patent Reference and Design Identification

**Patent:** CN 216526483 U  
**Filed:** November 17, 2021  
**Published:** May 13, 2022  
**Inventor:** Yunhong Li (李云洪)  
**Assignee:** Chengdu Weizheng Digital Technology Co., Ltd.  
**Title:** APS-C format lens, camera module and shooting device  
**Example details:** Table 1, PDF page6, §§0049–0053.

**Derived-plane handoff candidate; primary contradiction preserved.** This literal representative embodiment is associated with the 7Artisans APS-C50mm f/0.95 by Photons to Photos. Focal length, nominal aperture and seven-element/five-group structure agree with the maker. That is not proof of identical production glass, spacing or factory identity. The maker specifies two ED elements while the table has one FCD515. The patent prose §0046 requires N5>1.66, conflicting with its named H-ZF1, whose official index is1.647690. The table is retained, not repaired.

All radii, internal axial distances, clear diameters, conic constants and stop position are preserved. Zero AIR rows at cemented interfaces are collapsed without changing physical positions. The final image interval is independently solved here, not copied from P2P: 14.759082880782301 mm replaces printed 13.89 mm only in the derived model. The original source model and documents remain in the evidence archive.

## Optical Architecture

Seven spherical elements form five air-separated groups. L3/L4 and L5/L6 are cemented pairs. The iris lies7.85mm after L4's rear vertex and6.11mm before L5. All clear apertures are half the source diameters; no figure-derived adjustment was made.

The source stop diameter22.74mm is encoded by a model f-number0.9846087232798052, because ordinary-prime schema derives stop radius rather than accepting an authored one. Native runtime reproduces exactly11.37mm radius. The source and retail f/0.95 claim remains marketing metadata; the iris was not enlarged to force it.

## Element-by-Element Analysis

### L1: positive meniscus

nd=1.83481, νd=42.725177; H-ZLAF55D; standalone thick-element focal length in air=71.843426mm. Air-separated spherical element. Individual aberration contributions are not measured here.

### L2: positive meniscus

nd=1.804, νd=46.574487; H-ZLAF50E; standalone thick-element focal length in air=110.538581mm. Air-separated spherical element. Individual aberration contributions are not measured here.

### L3: positive meniscus

nd=1.59282, νd=68.62; FCD515; standalone thick-element focal length in air=53.858528mm. Part of cemented pair D1; its real neighbor replaces air at one interface. Individual aberration contributions are not measured here.

### L4: negative meniscus

nd=1.84666, νd=23.784497; H-ZF52; standalone thick-element focal length in air=-19.388119mm. Part of cemented pair D1; its real neighbor replaces air at one interface. Individual aberration contributions are not measured here.

### L5: biconcave negative

nd=1.64769, νd=33.840317; H-ZF1; standalone thick-element focal length in air=-20.551906mm. Part of cemented pair D2; its real neighbor replaces air at one interface. Individual aberration contributions are not measured here.

### L6: biconvex positive

nd=1.83481, νd=42.725177; H-ZLAF55D; standalone thick-element focal length in air=21.477897mm. Part of cemented pair D2; its real neighbor replaces air at one interface. Individual aberration contributions are not measured here.

### L7: positive meniscus

nd=1.83481, νd=42.725177; H-ZLAF55D; standalone thick-element focal length in air=44.915489mm. Air-separated spherical element. Individual aberration contributions are not measured here.

## Glass Identification

Glass names are literal Table1 labels, while numerical indices and dispersions are catalog-derived. Fresh official CDGM AGF supplies H-ZLAF55D, H-ZLAF50E, H-ZF52 and H-ZF1. FCD515 nd1.59282 is inherited from main's HOYA-derived row and manufacturer cross-reference evidence; νd68.62 incorporates the official HOYA June14 2019 correction from68.63. No current HOYA downloadable workbook was accessed. The existing main FCD515 curve is inherited, not newly fitted or independently verified across wavelength. No claim of factory glass identity or APO behavior is made.

## Derived Infinity Image Plane

Ron explicitly authorized this modeled image-plane adjustment on November 15, 2026. The final gap is **14.759082880782301 mm**, compared with printed **13.89 mm**. This is a +0.869082880782301 mm shift, yielding image z = 73.0290828807823 mm from the first vertex. It is an independently computed d-line paraxial infinity plane, not a correction to the patent or proof of factory sensor placement.

A second, uniformly entrance-pupil-area-weighted geometric RMS spot solve converged over 128/512/2048 rings to z = 72.9176631 mm. Its RMS spot radius is 44.0 micrometers, versus 65.0 micrometers at paraxial focus and 328.6 micrometers at the printed plane. RMS spot minimum is not the same as useful contrast maximum: computed on-axis diffraction MTF at 10/20/40 lp/mm is approximately 0.349/0.068/0.018 at that RMS plane, versus **0.709/0.626/0.552** at selected paraxial plane, and 0.029/0.015/0.006 at printed plane. Thus the paraxial convention is selected for this infinity model; it also removes the native paraxial focus warning. This is not an assertion of globally best focus at every field, frequency or aperture.

Spherical aberration remains. Neither the residual spot size nor field dependence is repaired by changing source optics. No close-focus reconstruction is provided.

## Aspherical Surfaces

None. Every Table1 conic constant is zero; no aspheric coefficients or surrogate surfaces are introduced.

## Validation and Limits

Fresh native ingest and geometry validation pass without override. The preserved stop radius is 11.37 mm. Native effective aperture is f/0.98496 versus authored f/0.98461, a 0.036% difference; retail/source f/0.95 remains marketing metadata rather than forced pupil geometry. Fresh field census reaches APS-C corner radius 14.175 mm with a converged chief ray and no corner rim clipping.

All 24 sampled plane/method/field cells converge at 0–40 lp/mm: three planes, geometric and scalar diffraction methods, four fixed physical image heights (0, 7.0875, 10.63125, 14.175 mm). This is d-line numerical convergence, not measured lens performance or polychromatic validation. Current-main compatibility, full corpus/app regression and compiled-viewer/browser QA remain deferred integration checks. Factory identity and precision of catalog-derived glasses remain qualifications.

## Sources
- Primary patent CN216526483U, Table 1, PDF page 6, §§0049–0053: https://patents.google.com/patent/CN216526483U/en
- Original patent, official CDGM material and product-page evidence remain in the inherited checkpoint/sources archive.
