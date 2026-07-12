import { Header } from "./components/Header/Header";
import { Loader } from "./components/Loader/Loader";
import { Hero } from "./components/Hero/Hero";
import { useLoader } from "./hooks/useLoader";

function App() {
  const { progress, isFading, showLoader, isComplete } = useLoader();

  return (
    <>
      {showLoader && <Loader progress={progress} isFading={isFading} />}

      {isComplete && (
        <>
          <Header />
          <main>
            <Hero />
            <div style={{ height: "300vh" }}></div>
          </main>
        </>
      )}
    </>
  );
}

export default App;
