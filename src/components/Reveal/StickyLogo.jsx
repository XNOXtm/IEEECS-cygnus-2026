import { useReveal } from "../../hooks/useReveal";

export function StickyLogo() {
  const { wrapperRef, logoRef } = useReveal();
  return (
    <div className="sticky-logo-wrapper" ref={wrapperRef}>
      <img
        ref={logoRef}
        src="/images/cygnus-logo.png"
        alt="Cygnus"
        className="sticky-logo"
      />
    </div>
  );
}
