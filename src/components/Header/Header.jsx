import "../../styles/header.css";
import { AudioToggle } from "./AudioToggle";
import { ScrollIndicator } from "./ScrollIndicator";

export function Header() {
  return (
    <header id="site-header">
      <ScrollIndicator />
      <AudioToggle />
    </header>
  );
}
