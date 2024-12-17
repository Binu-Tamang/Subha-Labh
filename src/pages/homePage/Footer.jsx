// eslint-disable-next-line no-unused-vars
import React from "react";
import { facebookIcon, linkedinIcon, instagramIcon, twitterIcon, mapIcon, emailIcon, userIcon } from "../../assets/index.js";

const Footer = () => {
  return (
    <footer className=" w-full bg-gradient-to-r from-purple-400 via-purple-600 to-pink-500 py-10">
      <div className=" container mx-auto px-4">
        {/* Scroll up button - Uncomment if needed */}
        {/* <div id="errorContainer">
          <button
            id="scrollToTopButton"
            title="Scroll to Top"
            className="hidden"
          >
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div> */}

        <div className="py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Us Section */}
            <div>
              <h5 className="text-white text-lg font-semibold pb-3">About Us</h5>
              <p className="text-white">
                [Demo Company] is a trusted organization providing expert
                services for various professional needs.
              </p>
              <div className="flex gap-3 mt-3">
                <a href="#">
                  <img src={facebookIcon} alt="Facebook" className="w-6" />
                </a>
                <a href="#">
                  <img src={linkedinIcon} alt="LinkedIn" className="w-6" />
                </a>
                <a href="#">
                  <img src={instagramIcon} alt="Instagram" className="w-6" />
                </a>
                <a href="#">
                  <img src={twitterIcon} alt="Twitter" className="w-6" />
                </a>
              </div>
            </div>

            {/* Quick Links Section */}
            <div>
              <h5 className="text-white text-lg font-semibold pb-3">Quick Links</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    &rarr; Private Policy Links
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    &rarr; Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    &rarr; Our Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    &rarr; Our Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    &rarr; About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300"
                  >
                    &rarr; Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect With Us Section */}
            <div>
              <h5 className="text-white text-lg font-semibold pb-3">
                Connect With Us
              </h5>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <img src={mapIcon} alt="Map" className="w-5 mr-3" />
                  <a href="#" className="text-white hover:text-gray-300">
                    Nepal, Baneshor, Thapagau, Presidential Graduate School, Tin
talla, 301
                  </a>
                </li>
                <li className="flex items-center">
                  <img src={userIcon} alt="User" className="w-5 mr-3" />
                  <a href="tel:+977-9841234567" className="text-white hover:text-gray-300">
                    +977-9841234567
                  </a>
                </li>
                <li className="flex items-center">
                  <img src={emailIcon} alt="Email" className="w-5 mr-3" />
                  <a href="mailto:yetahamro@email.com" className="text-white hover:text-gray-300">
                    yetahamro@email.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center pt-4 border-t border-gray-300">
          <p className="text-white">
            ©Copyright 2024 - 2025. Celestial Astrology. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
