import "../../styles/accessPanel.css";

export function AccessPanel() {
  const unlockDate = new Date("2026-08-01T00:00:00");
  const unlocked = new Date() >= unlockDate;

  return (
    <div className="access-panel">
      <h3>ACCESS PROTOCOL</h3>

      <div className="progress">
        <div className="progress-bar">
          <div className={`progress-fill ${unlocked ? "complete" : ""}`} />
        </div>
      </div>

      <p className="status">
        {unlocked ? "DECRYPTION COMPLETE" : "DECRYPTION IN PROGRESS"}
      </p>

      <div className="unlock">
        <span>NEXT ACCESS WINDOW</span>

        <strong>{unlocked ? "ACCESS GRANTED" : "01 AUGUST 2026"}</strong>
      </div>

      <button disabled={!unlocked}>
        {unlocked ? "REGISTER NOW" : "ACCESS LOCKED"}
      </button>

      <div className="corner bottom-left" />
      <div className="corner bottom-right" />
    </div>
  );
}
