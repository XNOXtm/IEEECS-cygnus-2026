import "../../styles/countdown.css";

import { DigitGroup } from "./DigitGroup";
import { Separator } from "./Separator";
import { AccessPanel } from "../AccessPanel/AccessPanel";

import { useCountdown } from "../../hooks/useCountdown";

export function Countdown({ countdownRef }) {
  const target = new Date("2026-08-14T10:00:00");

  const { days, hours, minutes, seconds } = useCountdown(target);

  return (
    <div ref={countdownRef} className="countdown">
      <h2>TRANSMISSION INITIALIZING</h2>

      <div className="countdown-display">
        <div className="digit-wrapper">
          <DigitGroup value={days} />
          <span className="time-label">Days</span>
        </div>

        <Separator />

        <div className="digit-wrapper">
          <DigitGroup value={hours} />
          <span className="time-label">Hours</span>
        </div>

        <Separator />

        <div className="digit-wrapper">
          <DigitGroup value={minutes} />
          <span className="time-label">Min</span>
        </div>

        <Separator />

        <div className="digit-wrapper">
          <DigitGroup value={seconds} />
          <span className="time-label">Sec</span>
        </div>
      </div>

      <AccessPanel />
    </div>
  );
}
