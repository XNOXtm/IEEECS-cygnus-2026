import { useParallax } from "../../hooks/useParallax.js";

export function ParallaxScene() {
  const { bgRef, fgRef, leftTreeRef, rightTreeRef } = useParallax();

  return (
    <div className="parallax-container">
      <div className="parallax-bg" ref={bgRef}>
        <img src="/images/strange-bg-sans-trees.png" alt="Background" />
      </div>

      <div
        className="parallax-trees parallax-trees-left"
        ref={leftTreeRef}
      >
        <img src="/images/trees-left.png" alt="" aria-hidden="true" />
      </div>

      <div
        className="parallax-trees parallax-trees-right"
        ref={rightTreeRef}
      >
        <img src="/images/trees-right.png" alt="" aria-hidden="true" />
      </div>

      <div className="parallax-fg" ref={fgRef}>
        <img src="/images/strange-kids.png" alt="" aria-hidden="true" />
      </div>
    </div>
  );
}