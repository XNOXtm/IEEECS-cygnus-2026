import "../../styles/reveal.css";
import { StickyLogo } from "./StickyLogo";
import { Countdown } from "../Countdown/Countdown";
import { useReveal } from "../../hooks/useReveal";

export function Reveal() {
  const reveal = useReveal();

  return (
    <section className="reveal">
      <div className="sticky-logo-wrapper" ref={reveal.wrapperRef}>
        <StickyLogo logoRef={reveal.logoRef} />

        <div className="reveal-overlay" ref={reveal.overlayRef} />

        <Countdown countdownRef={reveal.countdownRef} />
      </div>
    </section>
  );
}
