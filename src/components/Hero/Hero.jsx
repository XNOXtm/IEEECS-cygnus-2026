import "../../styles/hero.css";
import { ParallaxScene } from "./ParallaxScene";
import { useParallax } from "../../hooks/useParallax";

export function Hero() {
  const parallax = useParallax();

  return (
    <section className="hero">
      <ParallaxScene {...parallax} />
    </section>
  );
}