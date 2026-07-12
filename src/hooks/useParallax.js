import { useEffect, useRef } from "react";

const config = {
  bgSpeed: -0.25,
  fgSpeed: -0.25,
  treeSpreadSpeed: 0.15,
  treeClearCenter: 0.3,
  scaleStart: 1.25,
  scaleEnd: 2.5,
  blurStart: 0,
  blurEnd: 5,
};

const SCENE_MAX_WIDTH = 1586;

export function useParallax() {
  const bgRef = useRef(null);
  const fgRef = useRef(null);
  const leftTreeRef = useRef(null);
  const rightTreeRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    let treeBaseOffset = 0;

    function updateTreeOffset() {
      const vw = Math.min(window.innerWidth, SCENE_MAX_WIDTH);

      treeBaseOffset = vw * (config.treeClearCenter / 2);
    }

    function updateScene() {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      const progress = Math.min(scrollY / vh, 1);

      const blur =
        config.blurStart + (config.blurEnd - config.blurStart) * progress;

      const bgOffset = scrollY * config.bgSpeed;

      const fgOffset = scrollY * config.fgSpeed;

      const scale =
        config.scaleStart + (config.scaleEnd - config.scaleStart) * progress;

      const spread = treeBaseOffset + scrollY * config.treeSpreadSpeed;

      if (bgRef.current) {
        bgRef.current.style.transform = `translateX(-50%) translateY(${bgOffset}px)`;

        bgRef.current.style.filter = `blur(${blur}px)`;
      }

      if (leftTreeRef.current) {
        leftTreeRef.current.style.transform = `translateX(calc(-100% - ${spread}px)) translateY(${bgOffset}px)`;

        leftTreeRef.current.style.filter = `blur(${blur}px)`;
      }

      if (rightTreeRef.current) {
        rightTreeRef.current.style.transform = `translateX(${spread}px) translateY(${bgOffset}px)`;

        rightTreeRef.current.style.filter = `blur(${blur}px)`;
      }

      if (fgRef.current) {
        fgRef.current.style.transform = `translateX(-50%) translateY(${fgOffset}px) scale(${scale})`;
      }

      if (contentRef.current) {
        if (progress < 1) {
          contentRef.current.style.marginTop = `${vh}px`;
        } else {
          const extra = scrollY - vh;
          contentRef.current.style.marginTop = `${vh - extra}px`;
        }
      }
    }

    updateTreeOffset();
    updateScene();

    window.addEventListener("resize", updateTreeOffset);
    window.addEventListener("scroll", updateScene);

    return () => {
      window.removeEventListener("resize", updateTreeOffset);
      window.removeEventListener("scroll", updateScene);
    };
  }, []);

  return {
    bgRef,
    fgRef,
    leftTreeRef,
    rightTreeRef,
    contentRef,
  };
}
