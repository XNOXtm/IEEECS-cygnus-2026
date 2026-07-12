import { Header } from "./components/Header/Header";
import { Loader } from "./components/Loader/Loader";
import { useLoader } from "./hooks/useLoader";

function App() {
  const { progress, isFading, showLoader, isComplete } = useLoader();

  return (
    <>
      {showLoader && <Loader progress={progress} isFading={isFading} />}

      {isComplete && (
        <>
          <Header />
          <main>{/* Parallax, Hero, Footer — added in later steps */}</main>
        </>
      )}
    </>
  );
}

export default App;
