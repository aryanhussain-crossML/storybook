import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Explore from "./components/explore/explore";
import Hero from "./components/hero/hero";
import AboutUs from "./components/aboutUs/aboutUs";
import Contactus from "./components/contanctUs/contactus";
import Services from "./components/services/services";
import BookBike from "./components/bookBike/bookBike";
import PopularPackages from "./components/popularPackages/popularPackages";
import Testimonial from "./components/testimonial/testimonial";
import Footer from "./components/footer/footer";

function App() {
  return (
    <main>
      <Hero />
      <Explore />
      <AboutUs />
      <Contactus />
      <Services />
      <BookBike />
      <PopularPackages />
      <Testimonial />
      <Footer />
    </main>
  );
}

export default App;
