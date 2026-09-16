/**
 * PrerenderedHeadCleanup — drops the prerendered `<head>` tags once the client
 * has committed its own.
 *
 * Renders nothing. The app mounts with `createRoot` rather than hydrating, so
 * React 19 hoists a fresh title/meta/canonical set into `<head>` next to the
 * ones `scripts/prerender.mjs` baked into the static page. The SSR entry stamps
 * those static tags with `PRERENDERED_HEAD_ATTRIBUTE`; this layout effect runs
 * after the first commit's DOM mutations, so React's own tags already exist
 * when the stamped ones go and the document never lacks a title. Non-JS
 * clients keep the prerendered head untouched.
 */

import { useLayoutEffect } from "react";
import { removePrerenderedHeadTags } from "../utils/seo/prerenderedHead.js";

export default function PrerenderedHeadCleanup(): null {
  useLayoutEffect(() => {
    removePrerenderedHeadTags();
  }, []);
  return null;
}
