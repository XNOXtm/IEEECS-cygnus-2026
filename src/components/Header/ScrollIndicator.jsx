import { useScrollIndicator } from "../../hooks/useScrollIndicator";

function Chevron() {
  return (
    <svg
      className="chevron"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function ScrollIndicator() {
  const isVisible = useScrollIndicator();

  return (
    <div
      id="scroll-indicator"
      className={isVisible ? "" : "hidden"}
      aria-label="Scroll down"
    >
      <div className="chevrons">
        <Chevron />
        <Chevron />
        <Chevron />
      </div>
      <span>Scroll</span>
    </div>
  );
}
