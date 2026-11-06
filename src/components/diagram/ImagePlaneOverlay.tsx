/**
 * ImagePlaneOverlay — camera-fixed image/sensor plane and label.
 *
 * Perspective-control movement changes the lens assembly relative to the
 * camera. This component intentionally accepts no lens movement transform so
 * the sensor remains in its authored camera-space position. A curved image
 * surface is drawn as its section: a cylinder to the frame's edge along the
 * viewed section, any other surface over its authored half-height.
 */
import { memo } from "react";
import { imageSurfacePathD, imageSurfacePoint } from "../../optics/diagramGeometry.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";

interface ImagePlaneOverlayProps {
  lens: RuntimeLens;
  theme: Theme;
  sx: (z: number) => number;
  sy: (y: number) => number;
  IMG_MM: number;
}

const ImagePlaneOverlay = memo(function ImagePlaneOverlay({
  lens: L,
  theme: t,
  sx,
  sy,
  IMG_MM,
}: ImagePlaneOverlayProps) {
  const imageNormal = L.imagePlane.normal;
  const isAxialImagePlane = Math.abs(imageNormal.y) < 1e-9 && Math.abs(imageNormal.z) > 1 - 1e-9;
  // Ordinary lenses pin the rendered sensor to IMG_MM; folded/side-focus planes keep their authored geometry.
  const imagePlaneZ = isAxialImagePlane ? IMG_MM : L.imagePlane.z;
  const imagePlaneY = L.imagePlane.y;
  const imageTangent = { z: imageNormal.y, y: -imageNormal.z };
  const screenPoint = (z: number, y: number): [number, number] => [sx(z), sy(y)];
  const imageLineStart = screenPoint(
    imagePlaneZ - imageTangent.z * L.lyImgLine,
    imagePlaneY - imageTangent.y * L.lyImgLine,
  );
  const imageLineEnd = screenPoint(
    imagePlaneZ + imageTangent.z * L.lyImgLine,
    imagePlaneY + imageTangent.y * L.lyImgLine,
  );
  const surface = L.imageSurface;
  const placement = { z: imagePlaneZ, y: imagePlaneY, normal: imageNormal };
  /* A cylinder is drawn to the frame's edge along the viewed section; other surfaces over their authored half-height. */
  const drawnHalfHeight = surface ? (surface.fieldExtentMm ?? surface.semiDiameter) : 0;
  /* The label keeps its gap beyond the drawn end; on a curved surface that end has moved along the normal. */
  const surfaceEnd = surface && imageSurfacePoint(surface, placement, -Math.sign(L.lyImgLabel) * drawnHalfHeight);
  const labelGap = Math.abs(L.lyImgLabel) - Math.abs(L.lyImgLine);
  const imageLabel =
    surface && surfaceEnd
      ? screenPoint(
          surfaceEnd[0] + imageTangent.z * Math.sign(L.lyImgLabel) * labelGap,
          surfaceEnd[1] + imageTangent.y * Math.sign(L.lyImgLabel) * labelGap,
        )
      : screenPoint(imagePlaneZ + imageTangent.z * L.lyImgLabel, imagePlaneY + imageTangent.y * L.lyImgLabel);

  return (
    <>
      {surface ? (
        <path
          d={imageSurfacePathD(surface, placement, drawnHalfHeight, sx, sy)}
          fill="none"
          stroke={t.imgLine}
          strokeWidth={t.imgLineWidth}
          strokeDasharray="4,3"
        />
      ) : (
        <line
          x1={imageLineStart[0]}
          y1={imageLineStart[1]}
          x2={imageLineEnd[0]}
          y2={imageLineEnd[1]}
          stroke={t.imgLine}
          strokeWidth={t.imgLineWidth}
          strokeDasharray="4,3"
        />
      )}
      <text
        x={imageLabel[0]}
        y={imageLabel[1]}
        textAnchor="middle"
        fill={t.imgLabel}
        fontSize={9.5}
        fontFamily="inherit"
        style={{ letterSpacing: "0.12em" }}
      >
        {L.imagePlane.label}
      </text>
    </>
  );
});

export default ImagePlaneOverlay;
