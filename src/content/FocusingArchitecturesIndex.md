---
slug: focusing-architectures
title: Focusing Architectures in Photographic Lenses
summary: A series of primers on how camera lenses focus — unit focusing, floating elements, front-of-stop, rear-of-stop, dual-side, monolithic, and rear-group retrofocus — with worked examples from the OpticalBench catalog.
tag: guide
series: focusing-architectures
seriesOrder: 0
toc: true
---

# Focusing Architectures in Photographic Lenses

When a lens refocuses, it changes the object conjugate that the system was optimized for. Unless every air space, every ray height, and every stop–element geometry is perfectly preserved, aberrations shift. C.G. Wynne proved in 1952 that simultaneous correction of all five Seidel aberrations at two different conjugates is impossible unless the pupil aberrations also vanish — a condition rarely achievable in practice [^1].

Every focusing strategy is therefore a compromise. The designer chooses which aberrations to hold stable across the focus range, and which to allow to drift. The decision of *which group moves* is not a mechanical convenience — it is one of the most consequential optical design choices in the lens.

This series walks through the seven recurrent patterns, one primer per architecture, each grounded in a real production lens available in the OpticalBench catalog.

---

## The Primers

### Extending-barrel architectures

- **[Unit Focusing](/articles/focusing-unit)** — the entire lens moves as a rigid body. Optically simple, mechanically limiting.
- **[Unit Focusing with Floating Elements](/articles/focusing-unit-floating)** — the barrel extends, but internal spacings change too. Case study: the [Voigtländer APO-Lanthar 50mm f/2.0](/lens/apo-lanthar-50f2).

### Internal-focusing architectures

- **[Front-of-Stop Focusing](/articles/focusing-front-of-stop)** — a group ahead of the stop moves. Case study: the [Nikon AF-S Nikkor 105mm f/1.4E ED](/lens/nikkor-105-f14e-ed).
- **[Rear-of-Stop Focusing](/articles/focusing-rear-of-stop)** — a compact group behind the stop moves. Case study: the [Canon RF 135mm f/1.8 L IS USM](/lens/canon-rf-135f18).
- **[Dual-Side Focusing](/articles/focusing-dual-side)** — two groups, one on each side of the stop, move independently. The modern CRC architecture. Case study: the [Nikon AF-S Micro-Nikkor 105mm f/2.8G VR](/lens/nikon-afs-105f28-vr-micro).
- **[Monolithic Group Focusing](/articles/focusing-monolithic)** — a single central group containing the stop translates as a unit. Case study: the [Nikon AF-S Nikkor 85mm f/1.4G](/lens/nikkor-85f14g).
- **[Rear-Group Retrofocus Focusing](/articles/focusing-rear-group-retrofocus)** — in a retrofocus wide-angle, the rear positive group moves while the heavy front negative group stays put. Case study: the [Nikon AF-S Nikkor 28mm f/1.4E ED](/lens/nikon-afs-28f14e).

---

## The Full Monograph

For the unified mathematical treatment — Seidel surface contributions, Wynne conjugate-shift equations, pupil aberrations and the Wynne–Kidger methodology, extrinsic aberrations, higher-order terms at wide apertures, focus-breathing mechanics, telecentricity for digital sensors, and computational correction — see the full monograph:

**[Internal Focusing Architectures: Aberration Theory and Design Tradeoffs](/articles/internal-focusing-monograph)**

The monograph is the authoritative version; the primers are standalone distillations focused on one architecture at a time, suitable for quick reference.

---

## How to Read This Series

Each primer is self-contained. If you are new to the material, the primers can be read in any order, but the extending-barrel entries (unit focusing and floating elements) establish the optical baseline that the internal-focusing architectures are designed to improve upon, so starting there gives the rest more context.

Each primer ends with the lens example used to illustrate its architecture. Open the cross-section, adjust the focus slider, and watch which elements move — the architecture's signature is immediately visible.

## References

[^1]: C. G. Wynne, "Primary aberrations and conjugate change," *Proc. Phys. Soc. B*, vol. 65, pp. 429–437, 1952.
