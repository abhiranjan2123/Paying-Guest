import NavBar from "./components/NavBar";
import BookVisitFixedIcon from "./components/BookVisitFixedIcon";
import WhatsAppIcon from "./components/WhatsAppIcon";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import GallerySection from "./components/GallerySection";
import RoomsSection from "./components/RoomsSection";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";
import AmentiesScroll from "./components/AmentiesScroll";
import SmallInfoSection from "./components/SmallInfoSection";



const App = () => {
  return (
    <>
      <NavBar />
      <HeroSection/>
      <AboutUs />
      <GallerySection />
      <AmentiesScroll />
      <RoomsSection />
      <SmallInfoSection/>
      <LocationSection/>
      <Footer />

      {/* Fix Icons */}
      <BookVisitFixedIcon />
      <WhatsAppIcon />
    </>
  );
};

export default App;
