// eslint-disable-next-line no-unused-vars
import React from "react";
import { HandImg, AboutImg } from "../../assets/index";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-4">
          <h1 className="fw-bold">About Us</h1>
        </div>

        <img src={HandImg} alt="Hand" className="hand-img" />

        {/* Content Section */}
        <div className="block">
          {/* Image Section */}
          <div className="text-center w-full flex justify-center">
            <img
              src={AboutImg}
              alt="Astrology Chart and Tools"
              className="img-fluid rounded"
            />
          </div>

          {/* Text Section */}
          <div className="mt-4 text-center">
            <p className="fs-5 text-muted">
              At Subha Labh, we are dedicated to providing expert services in
              astrology, vastu, and wellness. Our team of experienced
              professionals offers personalized consultations, aiming to guide
              you toward a harmonious and prosperous life. Whether you&apos;re
              seeking insights through astrology, enhancing your living space
              with vastu solutions, or exploring the power of gemstones, we are
              here to support you on your journey. Trust us to help you make
              informed decisions and achieve a balanced, fulfilling life.
            </p>
          </div>
        </div>
      </div>
  );
};

export default AboutUs;
