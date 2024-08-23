import About from "./components/About";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { useSmoothScroll } from "./Hook/useSmoothScroll";

function App() {
  useSmoothScroll();
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
      <About />
    </div>
  );
}

export default App;
