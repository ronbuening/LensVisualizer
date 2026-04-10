/**
 * ViewerOverlays — footer and modal overlays for LensViewer.
 *
 * Co-locates the about/footer chrome and primer modals so LensViewer can treat
 * them as a single render concern instead of interleaving them with the main
 * page orchestration logic.
 */

import AboutFooter from "../../display/AboutFooter.js";
import DescriptionPanel from "../DescriptionPanel.js";
import OverlayModal from "../OverlayModal.js";
import PrimerToggleButton from "../PrimerToggleButton.js";
import type { Theme } from "../../../types/theme.js";

interface ViewerOverlaysProps {
  theme: Theme;
  isWide: boolean;
  showAbout: boolean;
  showAboutSite: boolean;
  showOpticsPrimer: boolean;
  showAberrationsPrimer: boolean;
  primerLevel: "simple" | "intermediate";
  aberrationsLevel: "simple" | "intermediate";
  onTogglePrimerLevel: () => void;
  onToggleAberrationsLevel: () => void;
  onOpenOpticsPrimer: () => void;
  onOpenAberrationsPrimer: () => void;
  onOpenAboutSite: () => void;
  onOpenAboutAuthor: () => void;
  onCloseAboutSite: () => void;
  onCloseAboutAuthor: () => void;
  onCloseOpticsPrimer: () => void;
  onCloseAberrationsPrimer: () => void;
  aboutSiteMarkdown: string;
  aboutAuthorMarkdown: string;
  opticsPrimerSimpleMarkdown: string;
  opticsPrimerIntermediateMarkdown: string;
  aberrationsPrimerSimpleMarkdown: string;
  aberrationsPrimerIntermediateMarkdown: string;
}

export default function ViewerOverlays({
  theme: t,
  isWide,
  showAbout,
  showAboutSite,
  showOpticsPrimer,
  showAberrationsPrimer,
  primerLevel,
  aberrationsLevel,
  onTogglePrimerLevel,
  onToggleAberrationsLevel,
  onOpenOpticsPrimer,
  onOpenAberrationsPrimer,
  onOpenAboutSite,
  onOpenAboutAuthor,
  onCloseAboutSite,
  onCloseAboutAuthor,
  onCloseOpticsPrimer,
  onCloseAberrationsPrimer,
  aboutSiteMarkdown,
  aboutAuthorMarkdown,
  opticsPrimerSimpleMarkdown,
  opticsPrimerIntermediateMarkdown,
  aberrationsPrimerSimpleMarkdown,
  aberrationsPrimerIntermediateMarkdown,
}: ViewerOverlaysProps) {
  return (
    <>
      <AboutFooter
        theme={t}
        isWide={isWide}
        onOpenOpticsPrimer={onOpenOpticsPrimer}
        onOpenAberrationsPrimer={onOpenAberrationsPrimer}
        onOpenAboutSite={onOpenAboutSite}
        onOpenAboutAuthor={onOpenAboutAuthor}
      />

      {showAboutSite && (
        <OverlayModal onClose={onCloseAboutSite} theme={t}>
          <DescriptionPanel markdown={aboutSiteMarkdown} theme={t} />
        </OverlayModal>
      )}

      {showAbout && (
        <OverlayModal onClose={onCloseAboutAuthor} theme={t}>
          <DescriptionPanel markdown={aboutAuthorMarkdown} theme={t} />
        </OverlayModal>
      )}

      {showOpticsPrimer && (
        <OverlayModal onClose={onCloseOpticsPrimer} theme={t} maxWidth={isWide ? 640 : 480} scrollKey={primerLevel}>
          <DescriptionPanel
            markdown={primerLevel === "simple" ? opticsPrimerSimpleMarkdown : opticsPrimerIntermediateMarkdown}
            theme={t}
          />
          <PrimerToggleButton level={primerLevel} onToggle={onTogglePrimerLevel} theme={t} />
        </OverlayModal>
      )}

      {showAberrationsPrimer && (
        <OverlayModal
          onClose={onCloseAberrationsPrimer}
          theme={t}
          maxWidth={isWide ? 640 : 480}
          scrollKey={aberrationsLevel}
        >
          <DescriptionPanel
            markdown={
              aberrationsLevel === "simple" ? aberrationsPrimerSimpleMarkdown : aberrationsPrimerIntermediateMarkdown
            }
            theme={t}
          />
          <PrimerToggleButton level={aberrationsLevel} onToggle={onToggleAberrationsLevel} theme={t} />
        </OverlayModal>
      )}
    </>
  );
}
