## Patent Reference and Design Identification

**Patent:** US 3,827,781  
**Application Number:** 332,194  
**Priority:** 1 March 1972, Japan 47-20608  
**Filed:** 13 February 1973  
**Issued:** 6 August 1974  
**Inventor:** Yoshitsugi Ikeda  
**Assignee:** Olympus Optical Company Limited, Tokyo  
**Title:** *Super Telephoto Lens System Having a Small Telephoto Ratio*  
**Embodiment analyzed:** The single numerical Example (Fig. 1), repeated in claim 2

The patent describes a super-telephoto with a telephoto ratio below 0.75, a relative aperture of 1:6 and a picture angle of about 4°. Its one Example is normalized to $f=100$ and states F 1:6 and a telephoto ratio of 0.70. The patent does not name a product. Several points tie it to the Olympus ZUIKO 600mm f/6.5 shown in the Olympus *Manual for Zuiko Interchangeable Lenses Group* (code IEMZLG-0173):

1. The assignee is Olympus. The manual credits the "original ZUIKO optical design" with an "unprecedented" telephoto ratio of 0.7, which is the Example's stated value.
2. Both have six elements in four groups in the same order: a biconvex singlet, a biconcave singlet, a cemented positive meniscus, a long air space holding the iris, and a small cemented rear doublet.
3. Both give an angle of view of 4°. The patent's field plots are labelled 2°, the half-field.
4. Scaled ×6, the Example matches the manual's dimensioned section. L1 is 15.0 mm thick (about 14.7 mm in the drawing). The L1–L2 air space is 33.5 mm (about 31.6 mm drawn). From L1 to the rear doublet is 276.6 mm (about 273 mm drawn). The front-vertex-to-image track is 420.4 mm; minus the 46 mm OM flange distance this is 374 mm, against the 377 mm stated barrel length.
5. The manual's 11 m closest focus and 36 × 54 cm smallest field both agree with unit focusing of this prescription. At 11 m the paraxial magnification is 0.065, which frames 367 × 551 mm on 24 × 36 mm film.
6. The 1972 Japanese priority fits a lens that appears in the early OM-system literature.

The one specification that differs is the aperture. The patent's F6 implies a 100 mm entrance pupil. The production lens is rated f/6.5, a 92.3 mm pupil. In the manual section L1 has a clear diameter of about 93 mm inside a 103.6 mm front bore, and the lens takes 100 mm filters. That is the f/6.5 axial beam with almost no margin, too small to pass f/6. The data file therefore opens the stop to f/6.5 and records the patent's F6 as the design f-number. The identification is a strong match but not documentary proof that the Example was put into production unchanged.

Every radius and axial distance is scaled ×6. The computed focal length is 600.003 mm, and the computed telephoto ratio is $420.384/600.003=0.7006$.

## Optical Architecture

The lens is a two-component telephoto. Component I is positive and is followed by a long air space (patent $d_7$, 201.86 mm scaled) that holds the iris. Component II is a compact cemented negative doublet.

| Assembly | Focal length (scaled) | Function |
|---|---:|---|
| Component I (L1–L4) | +358.1 mm | Positive front objective |
| L2 + L3/L4 ($f_{2,3,4}$) | −1010.3 mm (patent: −168.39 × 6) | Negative sub-group bounded by condition 1 |
| Component II (L5/L6) | −216.1 mm | Rear telephoto multiplier, about 1.68× |
| Complete lens | +600.003 mm | Production-scale system |

The patent explains why this power split is difficult. A small telephoto ratio needs a strong positive front and a strong negative rear. Conventional telephotos therefore stayed near ratios of 0.85–0.9, because the unbalanced power distribution made aberrations hard to correct. Ikeda's answer is to keep the front biconvex lens L1 moderate. L2 and the cemented L3/L4 then form a weakly negative sub-group, $f_{2,3,4}$, whose power condition 1 bounds. Glass choices in the front doublet and the rear doublet handle coma, Petzval sum and colour.

Fig. 1 draws the diaphragm D inside $d_7$, a little behind its midpoint. No coordinate is printed, so the data file places the stop at the midpoint of $d_7$: 100.93 mm behind L4 and 100.93 mm ahead of L5. At f/6.5 the stop radius is 23.79 mm.

No back focal distance is printed. The computed paraxial value is 134.22 mm (22.370 in the patent's units).

## Element-by-Element Analysis

### L1 — Biconvex Positive

$n_d=1.48749$, $\nu_d=70.1$. Glass: S-FSL5 (OHARA) catalog equivalent, 487/702 fluor crown. $f=+280.42$ mm.

L1 is the front collector and the largest element, about 94 mm in clear diameter. Its strongly curved front surface carries most of its power. The low-dispersion crown keeps the primary axial colour from this strongly positive element small. That colour is corrected downstream by the L3/L4 and L5/L6 doublets.

### L2 — Biconcave Negative

$n_d=1.80452$, $\nu_d=39.6$. Glass: NBFD3 (HOYA) catalog equivalent, 805/396 lanthanum dense flint. $f=-407.02$ mm.

L2 sits $d_2=5.587$ (33.52 mm scaled) behind L1. Condition 2 bounds that air space at 0.04f–0.08f. The patent says a smaller space increases astigmatism, while a larger one worsens coma for oblique rays below the axis. The high index lets the front surface $r_3$ provide the negative power that condition 3 requires without excessive curvature.

### L3 — Biconvex Positive

$n_d=1.48749$, $\nu_d=70.1$. Glass: S-FSL5 (OHARA) catalog equivalent. $f=+203.03$ mm.

L3 is the crown half of the positive compound meniscus, sitting 1.2 mm behind L2. The patent notes a side effect of condition 4: it forces $n_3$ low, so the front radius of the meniscus ($r_5$) becomes comparatively short. The patent accepts this for the coma correction the condition provides.

### L4 — Biconcave Negative

$n_d=1.61340$, $\nu_d=43.8$. Glass: BPM4 (OHARA) catalog equivalent, 613/438. $f=-281.43$ mm.

L4 is cemented to L3. The index step $n_4-n_3=0.126$ and the Abbe split $\nu_3-\nu_4=26.3$ satisfy condition 4. The patent ties the index step to coma correction and to keeping the Petzval sum from becoming more negative, and the Abbe split to chromatic correction.

### L5 — Biconcave Negative

$n_d=1.71300$, $\nu_d=54.0$. Glass: J-LAK8 (HIKARI) catalog equivalent, 713/540 lanthanum crown. $f=-79.96$ mm.

L5 provides most of the rear doublet's negative power and so most of the telephoto magnification. Its concave front surface $r_8$ faces the stop. Condition 5 makes $n_5$ higher than $n_6$, which the patent requires to correct the Petzval sum.

### L6 — Biconvex Positive

$n_d=1.69895$, $\nu_d=30.1$. Glass: S-TIM35 (OHARA) catalog equivalent, 699/301 dense flint. $f=+133.08$ mm.

L6 is the positive partner of L5. The cemented surface $r_9$ is kept weak by condition 5. Because the two indices nearly match, the junction has little monochromatic power but a large dispersion difference ($\nu_5-\nu_6=23.9$). The patent uses it to correct lateral colour and the colour variation of coma.

## Glass Identification and Chromatic Strategy

The patent prints only $n_d$ and $\nu_d$; it names no glass maker. The labels in the data file are present-day catalog equivalents chosen by six-digit code: S-FSL5 for 487/701, NBFD3 for 805/396, BPM4 for 613/438, J-LAK8 for 713/540 and S-TIM35 for 699/301. The printed indices and Abbe numbers are kept unchanged. The Olympus manual mentions "newly-introduced optical glass" but does not say which element uses it.

The chromatic scheme is classical. The two crown positives L1 and L3 ($\nu_d=70.1$) carry the front power. The front doublet's crown–flint split corrects axial colour. The rear doublet's weak, high-dispersion-difference junction corrects lateral colour, which matters in a telephoto with a strong rear multiplier. No element has anomalous partial dispersion; the residual secondary spectrum at 600 mm is that of an ordinary achromat.

## Focus Mechanism

Olympus lists rack-and-pinion focusing to 11 m. The patent covers only the infinity state. The data file models unit focus: the whole optical assembly moves forward and only the back focus changes. Reaching 11 m object-to-image needs 39.26 mm of extension, with the back focus going from 134.22 to 173.48 mm. Nine keyframes sampled evenly in inverse object distance keep the linear interpolation between them within 0.04 mm of the exact paraxial back focus. The extension is a calculated value, not a published cam table.

## Conditional Expressions

The patent states five conditions. The Example's values are calculated from the printed prescription in its $f=100$ units:

| # | Condition | Example value | Satisfied |
|---|---|---:|---|
| 1 | $f<-f_{2,3,4}$ | $100<168.38$ (printed $f_{2,3,4}=-168.39$) | Yes |
| 2 | $0.04f<d_2<0.08f$ | $d_2=5.587=0.0559f$ | Yes |
| 3 | $0.7<-\frac{n_2-1}{r_3}f<1.2$ | 1.047 | Yes |
| 4 | $0.1<n_4-n_3$ and $25<\nu_3-\nu_4$ | 0.126 and 26.3 | Yes |
| 5 | $n_6<n_5$ and $0.015<-\frac{n_6-n_5}{r_9}f<0.05$ | $1.69895<1.71300$; 0.033 | Yes |

The calculated $f_{2,3,4}$ differs from the printed value only in the last place.

## Aperture, Stop and Clear Apertures

The aperture runs from f/6.5 to f/32, as in the Olympus specification. The patent's design value of F6 is kept in the catalog metadata. Opening the model to F6 would need a front clear diameter of at least 100 mm, which the production barrel does not provide.

The patent lists no clear apertures. The semi-diameters follow the Olympus manual's section, scaled from its 110 mm barrel dimension:

- L1 is about 47 mm in radius, just above the 46.15 mm f/6.5 axial beam.
- L2 and the L3/L4 doublet are about 42 mm.
- The rear doublet is about 17 mm.

All rims pass the f/6.5 axial beam and the full-field chief ray. The off-axis bundles are vignetted toward the corner, as the compact barrel implies. That vignetting is drawn and retained.

## Sources

- US 3,827,781, *Super Telephoto Lens System Having a Small Telephoto Ratio*, Yoshitsugi Ikeda, Olympus Optical Co., issued 6 August 1974: Example, claim 2, Fig. 1.
- Olympus OM System, *Manual for Zuiko Interchangeable Lenses Group* (IEMZLG-0173), ZUIKO 600mm F6.5 page: section drawing, 6 elements / 4 groups, 4° angle of view, telephoto ratio 0.7, f/6.5–32, 11 m closest focus, 377 mm length, 110 mm maximum diameter.
- [Savazzi, Olympus Zuiko 600mm f/6.5](https://savazzi.net/photography/oly600.html): construction and version history, including the later multi-coated Zuiko MC version.
