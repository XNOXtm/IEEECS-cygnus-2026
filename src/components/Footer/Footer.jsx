import "../../styles/footer.css";

import { GlimpseCarousel } from "./GlimpseCarousel";
import { ContactCard } from "./ContactCard";
import { FooterLinks } from "./FooterLinks";

export function Footer() {
  return (
    <footer id="credits-footer">
      <GlimpseCarousel />

      <ContactCard />

      <FooterLinks />
    </footer>
  );
}
