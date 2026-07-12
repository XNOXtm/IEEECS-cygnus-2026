import "../../styles/header.css";
import { AudioToggle } from "./AudioToggle";
import { ScrollIndicator } from "./ScrollIndicator";

export function Header({ isPlaying, onToggle }) {
  return (
    <header id="site-header">
      <ScrollIndicator />
      <AudioToggle
        isPlaying={isPlaying}
        onToggle={onToggle}
      />
    </header>
  );
}
