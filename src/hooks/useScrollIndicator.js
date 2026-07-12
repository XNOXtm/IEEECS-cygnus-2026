import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 50;

export function useScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        setIsVisible(window.scrollY <= SCROLL_THRESHOLD);
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return isVisible;
}
