import { useEffect, useState } from "react";

export function useAccessProgress() {
  const [progress, setProgress] = useState(0);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    function updateProgress() {
      const now = new Date();

      // Progress starts here
      const start = new Date("2026-07-01T00:00:00");

      // Registration opens here
      const unlock = new Date("2026-08-01T00:00:00");

      if (now >= unlock) {
        setProgress(100);
        setUnlocked(true);
        return;
      }

      if (now <= start) {
        setProgress(0);
        return;
      }

      const total = unlock - start;
      const elapsed = now - start;

      setProgress(Math.floor((elapsed / total) * 100));
    }

    updateProgress();

    const interval = setInterval(updateProgress, 60000);

    return () => clearInterval(interval);
  }, []);

  return {
    progress,
    unlocked,
  };
}
