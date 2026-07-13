const digitPatterns = {
  0: [1, 1, 1, 1, 1, 1, 0],
  1: [0, 1, 1, 0, 0, 0, 0],
  2: [1, 1, 0, 1, 1, 0, 1],
  3: [1, 1, 1, 1, 0, 0, 1],
  4: [0, 1, 1, 0, 0, 1, 1],
  5: [1, 0, 1, 1, 0, 1, 1],
  6: [1, 0, 1, 1, 1, 1, 1],
  7: [1, 1, 1, 0, 0, 0, 0],
  8: [1, 1, 1, 1, 1, 1, 1],
  9: [1, 1, 1, 1, 0, 1, 1],
};

const segments = ["a", "b", "c", "d", "e", "f", "g"];

export function Digit({ value = 0 }) {
  const pattern = digitPatterns[value] ?? digitPatterns[0];

  return (
    <div className="digit">
      {segments.map((segment, index) => (
        <div
          key={segment}
          className={`segment-wrap ${segment} ${
            ["a", "d", "g"].includes(segment) ? "h" : "v"
          } ${pattern[index] ? "on" : ""}`}
        >
          <div className="segment-glow" />
          <div className="segment" />
        </div>
      ))}
    </div>
  );
}
