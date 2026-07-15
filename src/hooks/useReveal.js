import { useEffect, useRef, useState } from "react";

export function useReveal() {
  const wrapperRef = useRef(null);
  const logoRef = useRef(null);
  const overlayRef = useRef(null);

  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    function updateReveal() {
      if (!wrapperRef.current || !logoRef.current || !overlayRef.current) {
        return;
      }

      const rect = wrapperRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const entered = vh - rect.top;

      // ------------------------
      // BEFORE REVEAL
      // ------------------------

      if (entered < vh * 0.65) {
        logoRef.current.style.opacity = 0;
        logoRef.current.style.transform = "translateY(-50%) scale(1)";

        overlayRef.current.style.opacity = 0;

        setShowParticles(false);
        return;
      }

      // particles appear slightly before zoom
      setShowParticles(entered >= vh * 1.0);

      // ------------------------
      // LOGO FADE IN
      // ------------------------

      const fadeProgress = Math.min(1, (entered - vh * 0.65) / (vh * 0.25));

      const y = 20 * (1 - fadeProgress);

      logoRef.current.style.opacity = fadeProgress;
      logoRef.current.style.transform = `translateY(calc(-50% + ${y}px)) scale(1)`;

      // wait before zoom
      if (entered < vh * 1.15) {
        overlayRef.current.style.opacity = 0;
        return;
      }

      // ------------------------
      // LOGO ZOOM
      // ------------------------

      const zoomProgress = Math.min(1, (entered - vh * 1.15) / (vh * 0.95));

      const scale = 1 + zoomProgress * 8;

      logoRef.current.style.opacity = 1 - zoomProgress;
      logoRef.current.style.transform = `translateY(-50%) scale(${scale})`;

      overlayRef.current.style.opacity = zoomProgress * 0.75;

      // Reveal finished
      if (rect.bottom <= 0) {
        overlayRef.current.style.opacity = 0;
      }
    }

    updateReveal();

    window.addEventListener("scroll", updateReveal);

    return () => {
      window.removeEventListener("scroll", updateReveal);
    };
  }, []);

  return {
    wrapperRef,
    logoRef,
    overlayRef,
    showParticles,
  };
}
