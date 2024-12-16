// eslint-disable-next-line no-unused-vars
import React from "react";
import { mainBanner, bannerBg } from "../../assets/index.js";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function HeroSection() {
  // const navigate = useNavigate();
  // const handleEnquireNow = () => {
    // navigate("/enquire-now", { replace: true });
    // window.location.href("/enquire-now");
  // }
  return (
    <>
      <div className="banner-slider">
        <div className="slide">
          <img src={bannerBg} alt="Gradient Background" />
        </div>
        <div className="slide overlay">
          <img src={mainBanner} alt="Astrology Background" />
        </div>

        <div className="bannerContent text-center py-10 relative mt-10">
          <h1 className="font-bold text-white text-4xl md:text-9xl leading-tight mb-4 italianno-regular">
            Charting your Astrological
          </h1>
          <h2 className="text-white text-2xl md:text-6xl mb-4 kanit-semibold">
            Prediction Accurately
          </h2>
          <Link to="/enquire-now" className="text-white font-bold py-2 px-6 rounded-full bg-gradient-to-r from-purpleCustom to-pinkCustom hover:opacity-90 transition duration-300">
          Enquire Now
          </Link>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
