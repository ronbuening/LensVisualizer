/**
 * ImagePlaneOverlay — camera-fixed image/sensor plane and label.
 *
 * Perspective-control movement changes the lens assembly relative to the
 * camera. This component intentionally accepts no lens movement transform so
 * the sensor remains in its authored camera-space position.
 */
import { memo } from "react";
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
  const imageLabel = screenPoint(
    imagePlaneZ + imageTangent.z * L.lyImgLabel,
    imagePlaneY + imageTangent.y * L.lyImgLabel,
  );

  return (
    <>
      <line
        x1={imageLineStart[0]}
        y1={imageLineStart[1]}
        x2={imageLineEnd[0]}
        y2={imageLineEnd[1]}
        stroke={t.imgLine}
        strokeWidth={t.imgLineWidth}
        strokeDasharray="4,3"
      />
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
