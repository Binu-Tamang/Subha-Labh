import { useState } from "react";
import {
  facebookIcon,
  linkedinIcon,
  instagramIcon,
  twitterIcon,
  mapIcon,
  emailIcon,
  userIcon,
} from "../../assets/index.js";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className=" text-white">
      {/* Main Header */}
      <div className="container-fluid mx-auto">
        <div className="flex flex-wrap justify-between items-center p-4">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <ul className="flex gap-2 list-unstyled socialIcons">
              <li>
                <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
              </li>
              <li>
                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
              </li>
              <li>
                <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
              </li>
              <li>
                <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
              </li>
              <li>
                <img src={mapIcon} alt="Google Maps" className="w-6 h-6" />
              </li>
              <li className="flex items-center">
                <img src={emailIcon} alt="Email" className="w-6 h-6" />
                <a
                  href="mailto:ouremail@emailus.com"
                  className="ml-2 text-white hover:underline"
                >
                  ouremail@emailus.com
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="loginBox">
            <ul className="flex gap-4 items-center">
              <li className="flex items-center">
                <img src={userIcon} alt="User Icon" className="w-6 h-6" />
                {/* <a href="/LoginForm" className="ml-2 hover:underline">
                  Log In
                </a> */}
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <a href="/register" className="hover:underline">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Navbar */}
        <nav className="navbar navbar-dark flex items-center justify-start p-4">
          <button
            onClick={handleShow}
            className="text-white hover:text-gray-300 focus:outline-none mr-4 bg-transparent"
            aria-controls="offcanvasMenu"
            aria-expanded={show}
          >
            <span className="block w-6 h-6 text-white">
              <Menu />
            </span>
          </button>
          <ul className="flex gap-6 navbar-brand">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="/best-seller" className="hover:text-gray-300">
                Best Seller
              </a>
            </li>
            <li>
              <a href="/about-us" className="hover:text-gray-300">
                About Us
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Offcanvas Menu */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white color shadow-lg transform ${
          show ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-end p-3">
          <button onClick={handleClose} className="text-gray-500 offcanvas">
            X
          </button>
        </div>
        <ul className="p-4 space-y-4">
          <li>
            <a
              href="/"
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              <img src="{HomeIcon}" alt="" /> Home
            </a>
          </li>
          <li>
            <a
              href="/recommendation"
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              <img src="{HeartIcon}" alt="" /> Personalized Recommendation
            </a>
          </li>
          <li>
            <a
              href="/venue-booking"
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              <img src="{BookingSelected}" alt="" /> Venue Booking
            </a>
          </li>
          <li>
            <a
              href="/pandit-booking"
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              <img src="{PanditIcon}" alt="" /> Pandit Booking
            </a>
          </li>
          <li>
            <a
              href="/vastu-detection"
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              <i className="bi bi-person mr-2"></i> Vastu Detection
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
