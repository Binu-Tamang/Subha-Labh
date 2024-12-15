// eslint-disable-next-line no-unused-vars
import React from "react";
import { mainBanner, bannerBg } from "../../assets/index.js";

function HeroSection() {
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
          <button className="bg-[#462670] text-white font-bold py-3 mt-4 px-6 rounded-full mx-auto hover:bg-[#5b3a8f]">
          Enquire Now
        </button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
