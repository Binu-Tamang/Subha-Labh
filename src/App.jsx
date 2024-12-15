import "react";
import AboutUs from "./pages/homePage/AboutUs";
import BestSellers from "./pages/homePage/BestSellers";
import ContactSection from "./pages/homePage/ContactSection";
import Footer from "./pages/homePage/Footer";
import Header from "./pages/homePage/Header";
import HeroSection from "./pages/homePage/HeroSection";
import Services from "./pages/homePage/Services";

const App = () => {
  return (
    <main>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Header />
      </section>
      <section>
        <HeroSection />
      </section>
      <section className="mainSection">
        <Services />
      </section>
      <section className="mainSection">
        <BestSellers />
      </section>
      <section className="mainSection relative z-0">
        <AboutUs />
      </section>
      <section className="mainSection">
        <ContactSection />
      </section>
      <section className="mainSection">
        <Footer />
      </section>
    </main>
  );
};

export default App;
