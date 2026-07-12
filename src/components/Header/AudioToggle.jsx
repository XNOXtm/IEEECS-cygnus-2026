import { useState } from "react";

export function AudioToggle({ isPlaying: controlledPlaying, onToggle }) {
  const [localPlaying, setLocalPlaying] = useState(false);

  const isControlled = controlledPlaying !== undefined;
  const isPlaying = isControlled ? controlledPlaying : localPlaying;

  const handleClick = () => {
    if (onToggle) {
      onToggle(!isPlaying);
    } else if (!isControlled) {
      setLocalPlaying((prev) => !prev);
    }
  };

  return (
    <button
      id="audio-toggle"
      type="button"
      className={isPlaying ? "playing" : ""}
      aria-label="Toggle audio"
      aria-pressed={isPlaying}
      onClick={handleClick}
    >
      <svg className="icon-muted" viewBox="0 0 640 640" fill="currentColor">
        <path d="M32 416L128 416L320 568L320 72L128 224L32 224L32 416zM577.9 256L544 222.1C537.7 228.4 516.4 249.7 480 286.1C443.6 249.7 422.3 228.4 416 222.1L382.1 256C388.4 262.3 409.7 283.6 446.1 320C409.7 356.4 388.4 377.7 382.1 384L416 417.9C422.3 411.6 443.6 390.3 480 353.9C516.4 390.3 537.7 411.6 544 417.9L577.9 384C571.6 377.7 550.3 356.4 513.9 320C550.3 283.6 571.6 262.3 577.9 256z" />
      </svg>
      <svg className="icon-unmuted" viewBox="0 0 640 640" fill="currentColor">
        <path d="M64 416L160 416L352 568L352 72L160 224L64 224L64 416zM414.3 282.7C425.1 291.6 432 305 432 320C432 335 425.1 348.4 414.3 357.3L404.9 364.9L433.7 403.3L444.6 394.5C466.1 376.9 480 350.1 480 320C480 289.9 466.1 263.1 444.6 245.5L433.7 236.7L404.9 275.1L414.3 282.7zM474.8 208.2C507.3 234.7 528 274.9 528 320C528 365.1 507.3 405.3 474.8 431.8L462.5 441.8L491.3 480.2L505 469C548.2 433.8 575.9 380.1 575.9 320C575.9 259.9 548.2 206.2 505 171L491.3 159.8L462.5 198.2L474.8 208.2z" />
      </svg>
    </button>
  );
}
