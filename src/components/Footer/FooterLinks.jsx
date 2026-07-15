import { useState } from "react";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function FooterLinks() {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <section className="footer-bottom">
      <div className="footer-divider" />

      <p className="copyright">© 2026 IEEE CS GHRCE. All rights reserved.</p>

      <button className="terms" onClick={() => setShowTerms(true)}>
        Terms & Conditions
      </button>

      <div className="social-links">
        <a href="#">
          <FontAwesomeIcon icon={faLinkedin} />
          <span>LinkedIn</span>
        </a>

        <a href="mailto:">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Email</span>
        </a>

        <a href="#">
          <FontAwesomeIcon icon={faGlobe} />
          <span>Website</span>
        </a>

        <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
          <span>Instagram</span>
        </a>
      </div>

      <p className="credits">
        Made by{" "}
        <a
          href="https://github.com/YOUR_GITHUB_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tushar Mishra
        </a>{" "}
        • Design by{" "}
        <a
          href="https://youtube.com/shorts/R1744z-Xzrk?si=l9KSlzQzfsjre1Sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Krishna Batra
        </a>
      </p>

      {showTerms && (
        <div className="terms-overlay" onClick={() => setShowTerms(false)}>
          <div className="terms-modal" onClick={(e) => e.stopPropagation()}>
            <h3>AUTHORIZED ACCESS NOTICE</h3>

            <p>
              This website is developed for the IEEE Computer Society Student
              Branch Chapter, GHRCE, for the CYGNUS 2026 event.
            </p>

            <p>
              All logos, trademarks and media belong to their respective owners.
            </p>

            <p>
              The Stranger Things–inspired visual theme is a fan-made creative
              concept used solely for this student event and is not affiliated
              with Netflix or the Stranger Things franchise.
            </p>

            <button onClick={() => setShowTerms(false)}>CLOSE TERMINAL</button>
          </div>
        </div>
      )}
    </section>
  );
}
