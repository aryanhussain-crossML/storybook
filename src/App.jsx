import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Explore from "./components/explore/explore";
import Hero from "./components/hero/hero";
import AboutUs from "./components/aboutUs/aboutUs";

function App() {
  return (
    <main>
      <Hero />
      <Explore />
      <AboutUs />
    </main>
  );
}

export default App;
