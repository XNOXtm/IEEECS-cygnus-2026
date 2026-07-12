import "../../styles/loader.css";

export function Loader({ progress, isFading }) {
  return (
    <div id="loader" className={isFading ? "fade-out" : ""}>
      <img
        id="loader-logo"
        src="/images/IEEE-CS.webp"
        alt="IEEE Computer Society"
      />

      <p id="loader-presents">PRESENTS</p>

      <div id="loader-bar">
        <div
          id="loader-bar-progress"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
