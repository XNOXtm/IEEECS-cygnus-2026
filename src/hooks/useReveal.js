import { useEffect, useRef, useState } from "react";

export function useReveal() {
  const wrapperRef = useRef(null);
  const logoRef = useRef(null);
  const countdownRef = useRef(null);
  const overlayRef = useRef(null);
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    function updateReveal() {
      if (!wrapperRef.current || !logoRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const entered = vh - rect.top;

      if (entered < vh * 0.7) {
        logoRef.current.style.opacity = 0;
        logoRef.current.style.transform = "translateY(-50%) scale(1)";
        return;
      }

      if (entered < vh * 1.1) {
        setShowParticles(false);
      } else {
        setShowParticles(true);
      }

      // ------------------------
      // PHASE 2
      // Logo appears and stays still
      // ------------------------
      const fadeProgress = Math.min(1, (entered - vh * 0.7) / (vh * 0.3));

      const y = 20 * (1 - fadeProgress);

      logoRef.current.style.opacity = fadeProgress;

      logoRef.current.style.transform = `translateY(calc(-50% + ${y}px)) scale(1)`;

      if (entered < vh * 1.6) {
        if (countdownRef.current) countdownRef.current.style.opacity = 0;

        if (overlayRef.current) overlayRef.current.style.opacity = 0;

        return;
      }

      // ------------------------
      // PHASE 3
      // Logo zooms
      // ------------------------
      const zoomProgress = Math.min(1, (entered - vh * 1.6) / (vh * 1.4));

      const scale = 1 + zoomProgress * 8;

      logoRef.current.style.opacity = 1 - zoomProgress;
      if (overlayRef.current) {
        overlayRef.current.style.opacity = zoomProgress * 0.75;
      }

      if (countdownRef.current) {
        let fade = 0;

        if (zoomProgress > 0.2) {
          fade = (zoomProgress - 0.2) / 0.5;
        }

        countdownRef.current.style.opacity = Math.min(1, fade);
      }

      logoRef.current.style.transform = `translateY(-50%) scale(${scale})`;
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
    countdownRef,
    overlayRef,
    showParticles,
  };
}
