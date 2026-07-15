import "../../styles/footer.css";

import { GlimpseCarousel } from "./GlimpseCarousel";
import { ContactCard } from "./ContactCard";
import { FooterLinks } from "./FooterLinks";

export function Footer() {
  return (
    <footer id="credits-footer">
      <section className="footer-section">
        <span className="terminal-line">
          &gt; retrieving archived transmissions...
        </span>

        <h2>PAST EVENT GLIMPSES</h2>

        <GlimpseCarousel />
      </section>

      <section className="footer-section">
        <h2>CONTACT US</h2>

        <div className="contact-grid">
          <ContactCard
            role="Chapter Chair"
            name="Prince Ryamwar"
            email="princeryamwar@gmail.com"
            phone="+91 9168675745"
          />

          <ContactCard
            role="Vice Chair"
            name="Vaibhavi Mangrulkar"
            email="vaibhavimangrulkar00@gmail.com"
            phone="+91 8767886827"
          />

          <ContactCard
            role="Secretary"
            name="Rutuja Langde"
            email="rulangde@gmail.com"
            phone="+91 9699101120"
          />
        </div>
      </section>

      <FooterLinks />
    </footer>
  );
}
