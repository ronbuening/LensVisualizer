# Article Pre-Planning

Candidate articles from the search exports of 2026-11-17/18, with the queries each would answer. These are plans, not
drafts. Before drafting, read the existing article named under "Overlap" and confirm the new piece adds something;
several candidates may turn out to be a new section instead. Follow `agent_docs/adding_an_article.md` and
`agent_docs/article_formatting.md`. Delete a candidate when it is published, folded into an existing article, or
rejected.

Openings for existing articles are a separate, smaller job listed in `agent_docs/search-traffic-actions.md`.

## Shape that the queries reward

- The question appears in the title and is answered in the first paragraph, in plain words.
- One labelled diagram near the top. Many queries end in "diagram", "picture" or "image".
- A short companion beside a long technical article, as the spherical-aberration series already does with its
  essentials and technical pair.
- Every example links to a catalog lens so the reader can open the live cross-section.

## Candidates

### 1. What "telecentric" means

- **Priority:** high. Telecentricity is the most-shown article (251 Bing impressions, 2.4 % click rate).
- **Queries:** telecentricity (44), telecentric (17), telecentric meaning (7), what is telecentric lens (5),
  telecentricity laymans meaning (2 clicks at position 1), object vs image space telecentricity, double telecentric,
  telecentric vs nontelecentric lenses.
- **Overlap:** the existing telecentricity article in `src/content/pupils/`. It covers mechanism and cost.
- **Outline:** one-sentence definition; object-space, image-space and double telecentric with one diagram each; why
  magnification stops changing with focus; where photographers meet it (sensor-side ray angles); pointer to the long
  article.
- **Example lenses:** one near-telecentric mirrorless design and one short-flange wide angle with steep exit rays.

### 2. Entrance pupil, aperture stop and front element: which is which

- **Priority:** high. Three existing pupil articles share about 190 impressions and 3 clicks.
- **Queries:** is the entrance pupil the limiting aperture, entrance pupil vs stop, lens entrance aperture vs entrance
  pupil, entrance pupil larger or smaller than physical aperture stop, is a camera lens entrance pupil where the
  aperture is set (1 click), front element larger than entrance pupil.
- **Overlap:** the entrance-pupil and aperture-stop articles in `src/content/pupils/`.
- **Outline:** question-and-answer format, one question per heading; the stop is a part, the pupil is its image; why
  the pupil diameter sets the f-number; why the front element is larger than the pupil; when the stop and pupil
  coincide.

### 3. Finding the entrance pupil for panoramas

- **Priority:** medium.
- **Queries:** how to find the entrance pupil of a camera lens (1 click), nodal point vs entrance pupil, finding the
  entrance pupil of a lens using two poles, panorama nodal point entrance pupil setup, where is the entrance pupil of
  a lens, the "entrance pupil, not the nodal point, is the center of projection" paper title (3 appearances).
- **Overlap:** the projection-center article in `src/content/pupils/` holds the theory. This piece is the practical
  method.
- **Outline:** why "nodal point" is the wrong name; the two-pole parallax method; how the pupil moves with zoom and
  focus; fisheye lenses, where the pupil moves with field angle; reading the position off a catalog lens.

### 4. Why the corners of a photo are darker

- **Priority:** high for reach. Lay wording, almost no specialist competition.
- **Queries:** what is the effect when the corners of the screen go dark, light drop off in corners optics, the effect
  on a photo where the corners are slightly dark, whats it called when the corners ar dark, why do 2000s photos have
  dark in corners, peripheral illumination correction (Google, 5 impressions at position 60), natural light falloff,
  cosine-fourth derivation.
- **Overlap:** the corner-illumination article in `src/content/pupils/`, which is technical.
- **Outline:** the name (vignetting, light falloff); the three causes, mechanical, natural and pixel; what stopping
  down fixes and what it cannot; what in-camera peripheral illumination correction does; pointer to the technical
  article and the vignetting tab.

### 5. Chief ray angle, microlenses and corner colour shift

- **Priority:** medium. Long, specific queries from technical readers.
- **Queries:** chief ray angle vs pixel size microlens, sensor pixel size oblique rays microlenses corner color shift,
  camera lens exit pupil chief ray angle image sensor filter converging beam, large mount diameter mirrorless digital
  sensor corner illumination telecentricity, exit pupil on a smartphone camera.
- **Overlap:** the exit-pupil and mirrorless-design articles in `src/content/pupils/`. This may be a section in one of
  them instead of a new article; decide after reading both.
- **Outline:** what chief ray angle is; why pixels care; sensor-stack glass and converging beams; why adapted
  rangefinder wide angles smear; how mount diameter and flange distance set the limit.

### 6. Why a fast lens glows wide open, and focus shift

- **Priority:** medium.
- **Queries:** cinema lens bloom wide open f2.8 disappears f4 spherical aberration, lens glow spherical aberration
  bright highlights, spherical aberration mitigation stop down refocus aperture, how do cameras solve spherical
  aberration, diffraction blur versus spherical aberration edge glow.
- **Overlap:** the spherical-aberration essentials article. Check whether glow and focus shift are already treated.
- **Outline:** the glow as a sharp core plus a halo; why one stop removes most of it; focus shift on stopping down;
  how designers correct it; soft-focus lenses that keep it on purpose, with the catalog's soft-focus lenses as
  examples.

### 7. Floating elements, close-range correction and focus breathing

- **Priority:** medium.
- **Queries:** floating stop lens design (1 click), do floating elements prevent focus breathjng, nikon lenses with
  crc close range correction, floating element design lens, optical design independently moving lens groups aberration
  correction close focusing, internal focusing mechanism camera lens, rear focusing lens.
- **Overlap:** the unit-floating and internal-focusing articles in `src/content/focusing-architecture/`.
- **Outline:** what a floating group corrects; why it does not remove breathing; a table of catalog lenses with
  floating or close-range correction, built from catalog data; how to see the groups move with the focus slider.

### 8. Back focal distance, flange distance and total track length

- **Priority:** medium. The dimensions primer has 74 impressions and 1 click.
- **Queries:** total track length and flange focal distance, where is back focal length referenced from, efl vs ttl of
  a lens, front focal length and back focal length, bfd back focal distance, what is the object focal distance compared
  to the ffd, effective focal length (efl) back focal length (bfl).
- **Overlap:** the lens-dimensions primer in `src/content/`.
- **Outline:** one diagram with every distance labelled; one paragraph per term; which ones a mount fixes; common
  confusions (focal length is not the barrel length; back focal distance is not flange distance).

### 9. Achromat, apochromat, superachromat

- **Priority:** medium. About 190 impressions across both engines and no clicks on the long article.
- **Queries:** achromat vs apochromat (5), apochromatic meaning, apochromat lens, apochromat and superachromat
  definition, the invention time of the apochromat.
- **Overlap:** the achromat-to-apochromat article in `src/content/`.
- **Outline:** a three-row comparison table (wavelengths brought to a common focus, residual colour, typical glass);
  one focus-shift plot for each; what "APO" on a lens barrel does and does not promise; catalog examples including
  the Sonnar Superachromat.

### 10. Design-family histories

- **Priority:** low, ongoing. The Heliar history article draws 21 impressions from seven query spellings.
- **Candidates by query evidence:** Biogon (five queries), Symmar and the plasmat (nine), retrofocus from Angénieux to
  Distagon ("retrofocus lens design history angénieux retrofocus inverted telephoto distagon"), Tessar, Biometar.
- **Outline pattern:** follow the Heliar article. Each one should link every catalog lens in the family.

## Not planned

- More maker-story index pages. The Nikon index draws 41 impressions and no clicks; see the open question in
  `agent_docs/search-traffic-research.md`.
- Lens reviews, sample photos and price guides. Queries ending in "review", "flickr" and "sample" appear often, and
  the site has no such content.
