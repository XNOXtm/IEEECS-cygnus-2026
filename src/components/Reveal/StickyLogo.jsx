export function StickyLogo({ logoRef }) {
  return (
    <img
      ref={logoRef}
      src="/images/cygnus-logo.png"
      alt="Cygnus"
      className="sticky-logo"
    />
  );
}
