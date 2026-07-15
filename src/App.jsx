import { Header } from "./components/Header/Header";
import { Loader } from "./components/Loader/Loader";
import { Hero } from "./components/Hero/Hero";
import { Reveal } from "./components/Reveal/Reveal";
import { Footer } from "./components/Footer/Footer";
import { Countdown } from "./components/Countdown/Countdown";

import { useLoader } from "./hooks/useLoader";
import { useAudio } from "./hooks/useAudio";

function App() {
  const { progress, isFading, showLoader, isComplete } = useLoader();

  const { audioRef, isPlaying, toggleAudio } = useAudio();

  return (
    <>
      {showLoader && <Loader progress={progress} isFading={isFading} />}

      {isComplete && (
        <>
          <audio ref={audioRef} loop preload="auto">
            <source src="/audio/stranger_things.mp3" type="audio/mpeg" />
          </audio>

          <Header isPlaying={isPlaying} onToggle={toggleAudio} />

          <Hero />

          <Reveal />

          <Countdown />

          <Footer />
        </>
      )}
    </>
  );
}

export default App;
