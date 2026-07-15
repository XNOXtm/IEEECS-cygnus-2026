import "../../styles/reveal.css";
import { StickyLogo } from "./StickyLogo";
import { UpsideDownParticles } from "../Particles/Particles";
import { useReveal } from "../../hooks/useReveal";

export function Reveal() {
  const { wrapperRef, logoRef, overlayRef, showParticles } = useReveal();

  return (
    <section className="reveal">
      <UpsideDownParticles visible={showParticles} />

      <div className="sticky-logo-wrapper" ref={wrapperRef}>
        <StickyLogo logoRef={logoRef} />

        <div className="reveal-overlay" ref={overlayRef} />
      </div>
    </section>
  );
}
