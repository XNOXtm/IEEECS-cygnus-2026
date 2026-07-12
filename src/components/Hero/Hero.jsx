import "../../styles/hero.css";
import { ParallaxScene } from "./ParallaxScene";
import { StickyLogo } from "./StickyLogo";

export function Hero() {
  return (
    <section className="hero">
      <ParallaxScene />
      <StickyLogo />
    </section>
  );
}