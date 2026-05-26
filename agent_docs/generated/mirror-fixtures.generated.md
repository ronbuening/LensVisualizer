# Mirror Fixture Authoring Report (auto-generated)

Hidden/reference fixtures that exercise mirror, folded-path, annular, blocker, and image-plane metadata.

**Regenerate this file** by running `npm test -- mirrorFixtureAuthoringReport`.
Regenerate the mirror report set with `npm run generate:mirror-reports`.

## Summary

- **8** hidden/reference fixtures scanned
- **1** fixtures include second-surface mirror metadata
- **1** fixtures include tilted meridional plane metadata
- **5** fixtures include annular aperture or obstruction metadata
- **0** fixtures currently report validation errors

## Fixture Matrix

| Fixture | Path | Hit order | Image plane | Reflect | Block | Annular | Second surface | Validation |
|---|---|---|---|---|---|---|---|---|
| [REFERENCE Annular Obscured Mirror](../../src/lens-data/reference/ReferenceAnnularObscuredMirror.data.ts) | explicit | `STO` -> `OBS` -> `M1` | IMG: z=0, y=0, n=(1, 0) | `M1` | `OBS` | `M1` -> `M1B` | None | OK |
| [REFERENCE Annular Ring Blocker](../../src/lens-data/reference/ReferenceAnnularRingBlocker.data.ts) | auto | `RING` | IMG: z=120, y=0, n=(1, 0) | None | `RING` | `RING` -> `RINGB` | None | OK |
| [REFERENCE Cassegrain Back Focus](../../src/lens-data/reference/ReferenceCassegrainBackFocus.data.ts) | auto | `M1` -> `SEC` | IMG: z=135, y=0, n=(1, 0) | `SEC` -> `M1` | None | `M1` -> `M1B` | None | OK |
| [REFERENCE Gregorian Secondary](../../src/lens-data/reference/ReferenceGregorianSecondary.data.ts) | explicit | `M1` -> `SEC` | IMG: z=135, y=0, n=(1, 0) | `M1` -> `SEC` | None | `M1` -> `M1B` | None | OK |
| [REFERENCE Maksutov Cassegrain Meniscus](../../src/lens-data/reference/ReferenceMaksutovCassegrainMeniscus.data.ts) | explicit | `MEN1` -> `MEN2` -> `M1` -> `SEC` | IMG: z=135, y=0, n=(1, 0) | `SEC` -> `M1` | None | `M1` -> `M1B` | None | OK |
| [REFERENCE Mangin Second-Surface Mirror](../../src/lens-data/reference/ReferenceManginSecondSurfaceMirror.data.ts) | explicit | `STO` -> `MG1` -> `MG2` -> `MG1` | IMG: z=35, y=0, n=(1, 0) | `MG2` | None | None | `MG2` | OK |
| [REFERENCE Newtonian Side Focus](../../src/lens-data/reference/ReferenceNewtonianSideFocus.data.ts) | auto | `M1` -> `SEC` | IMG: z=35, y=25, n=(0, 1) | `SEC` -> `M1` | None | None | None | OK |
| [REFERENCE Spherical Primary Mirror](../../src/lens-data/reference/ReferenceSphericalPrimaryMirror.data.ts) | explicit | `STO` -> `M1` | IMG: z=0, y=0, n=(1, 0) | `M1` | None | None | None | OK |

## Fixture Details

### [REFERENCE Annular Obscured Mirror](../../src/lens-data/reference/ReferenceAnnularObscuredMirror.data.ts)

- Key: `reference-annular-obscured-mirror`
- Path mode: explicit
- Hit order: `STO` -> `OBS` -> `M1`
- Image plane: IMG: z=0, y=0, n=(1, 0)
- Reflective surfaces: `M1`
- Blocking surfaces: `OBS`
- Annular surfaces: `M1` -> `M1B`
- Second-surface coatings: None
- Tilted planes: None
- Validation: OK

### [REFERENCE Annular Ring Blocker](../../src/lens-data/reference/ReferenceAnnularRingBlocker.data.ts)

- Key: `reference-annular-ring-blocker`
- Path mode: auto
- Hit order: `RING`
- Image plane: IMG: z=120, y=0, n=(1, 0)
- Reflective surfaces: None
- Blocking surfaces: `RING`
- Annular surfaces: `RING` -> `RINGB`
- Second-surface coatings: None
- Tilted planes: None
- Validation: OK

### [REFERENCE Cassegrain Back Focus](../../src/lens-data/reference/ReferenceCassegrainBackFocus.data.ts)

- Key: `reference-cassegrain-back-focus`
- Path mode: auto
- Hit order: `M1` -> `SEC`
- Image plane: IMG: z=135, y=0, n=(1, 0)
- Reflective surfaces: `SEC` -> `M1`
- Blocking surfaces: None
- Annular surfaces: `M1` -> `M1B`
- Second-surface coatings: None
- Tilted planes: None
- Validation: OK

### [REFERENCE Gregorian Secondary](../../src/lens-data/reference/ReferenceGregorianSecondary.data.ts)

- Key: `reference-gregorian-secondary`
- Path mode: explicit
- Hit order: `M1` -> `SEC`
- Image plane: IMG: z=135, y=0, n=(1, 0)
- Reflective surfaces: `M1` -> `SEC`
- Blocking surfaces: None
- Annular surfaces: `M1` -> `M1B`
- Second-surface coatings: None
- Tilted planes: None
- Validation: OK

### [REFERENCE Maksutov Cassegrain Meniscus](../../src/lens-data/reference/ReferenceMaksutovCassegrainMeniscus.data.ts)

- Key: `reference-maksutov-cassegrain-meniscus`
- Path mode: explicit
- Hit order: `MEN1` -> `MEN2` -> `M1` -> `SEC`
- Image plane: IMG: z=135, y=0, n=(1, 0)
- Reflective surfaces: `SEC` -> `M1`
- Blocking surfaces: None
- Annular surfaces: `M1` -> `M1B`
- Second-surface coatings: None
- Tilted planes: None
- Validation: OK

### [REFERENCE Mangin Second-Surface Mirror](../../src/lens-data/reference/ReferenceManginSecondSurfaceMirror.data.ts)

- Key: `reference-mangin-second-surface-mirror`
- Path mode: explicit
- Hit order: `STO` -> `MG1` -> `MG2` -> `MG1`
- Image plane: IMG: z=35, y=0, n=(1, 0)
- Reflective surfaces: `MG2`
- Blocking surfaces: None
- Annular surfaces: None
- Second-surface coatings: `MG2`
- Tilted planes: None
- Validation: OK

### [REFERENCE Newtonian Side Focus](../../src/lens-data/reference/ReferenceNewtonianSideFocus.data.ts)

- Key: `reference-newtonian-side-focus`
- Path mode: auto
- Hit order: `M1` -> `SEC`
- Image plane: IMG: z=35, y=25, n=(0, 1)
- Reflective surfaces: `SEC` -> `M1`
- Blocking surfaces: None
- Annular surfaces: None
- Second-surface coatings: None
- Tilted planes: `SEC` -> `SECB`
- Validation: OK

### [REFERENCE Spherical Primary Mirror](../../src/lens-data/reference/ReferenceSphericalPrimaryMirror.data.ts)

- Key: `reference-spherical-primary-mirror`
- Path mode: explicit
- Hit order: `STO` -> `M1`
- Image plane: IMG: z=0, y=0, n=(1, 0)
- Reflective surfaces: `M1`
- Blocking surfaces: None
- Annular surfaces: None
- Second-surface coatings: None
- Tilted planes: None
- Validation: OK

