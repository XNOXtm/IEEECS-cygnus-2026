import "../../styles/hero.css";
import { ParallaxScene } from "./ParallaxScene";
import { HeroLogo } from "./HeroLogo";

export function Hero() {
  return (
    <section className="hero">
      <ParallaxScene />
      <HeroLogo />
    </section>
  );
}