import "react";
import AboutUs from "./pages/homePage/AboutUs";
import BestSellers from "./pages/homePage/BestSellers";
import ContactSection from "./pages/homePage/ContactSection";
import Footer from "./pages/homePage/Footer";
import Header from "./pages/homePage/Header";
import HeroSection from "./pages/homePage/HeroSection";
import Services from "./pages/homePage/Services";
import Testimonial from "./pages/homePage/Testimonial";

const App = () => {
  return (
    <main>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Header />
      </section>
      <section>
        <HeroSection />
      </section>
      <section className="mainSection w-full">
        <Services />
      </section>
      <section className="mainSection w-full">
        <BestSellers />
      </section>
      <section className="mainSection relative z-0 w-full">
        <AboutUs />
      </section>
      <section className="mainSection w-full">
        <Testimonial />
      </section>
      <section className="mainSection w-full">
        <ContactSection />
      </section>
      <section className="mainSection w-full">
        <Footer />
      </section>
    </main>
  );
};

export default App;
