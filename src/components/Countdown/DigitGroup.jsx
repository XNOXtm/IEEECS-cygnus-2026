import { Digit } from "./Digit";

export function DigitGroup({ value }) {
  const tens = Math.floor(value / 10);
  const ones = value % 10;

  return (
    <div className="digit-group">
      <Digit value={tens} />
      <Digit value={ones} />
    </div>
  );
}
