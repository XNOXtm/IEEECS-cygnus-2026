import { useEffect, useState } from "react";

const CRITICAL_ASSETS = [
  "/images/strange-bg-sans-trees.png",
  "/images/trees-left.png",
  "/images/trees-right.png",
  "/images/strange-kids.png",
];

const MIN_DISPLAY_MS = 1200;
const FADE_DELAY_MS = 400;
const FADE_DURATION_MS = 800;

function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = () => resolve(src);
    img.src = src;
  });
}

export function useLoader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("loading");

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    document.body.classList.add("loading");

    let loadedCount = 0;
    const startTime = performance.now();

    const updateProgress = () => {
      loadedCount++;
      setProgress((loadedCount / CRITICAL_ASSETS.length) * 100);
    };

    Promise.all(
      CRITICAL_ASSETS.map((src) =>
        preloadImage(src).then(() => updateProgress()),
      ),
    ).then(() => {
      const elapsed = performance.now() - startTime;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);

      setTimeout(() => {
        setPhase("fading");
        document.body.classList.remove("loading");
        document.body.classList.add("loaded");

        setTimeout(() => setPhase("done"), FADE_DURATION_MS);
      }, FADE_DELAY_MS + remaining);
    });

    return () => {
      document.body.classList.remove("loading", "loaded");
    };
  }, []);

  return {
    progress,
    isLoading: phase === "loading",
    isFading: phase === "fading",
    isComplete: phase === "done",
    showLoader: phase !== "done",
  };
}
