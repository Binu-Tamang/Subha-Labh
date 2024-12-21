import { Link } from "react-router-dom";
import { ShivaJi } from "../../assets/index.js";
import { UserIcon } from "lucide-react";
import Footer from "../homePage/Footer.jsx";

const handleBackClick = () => {
  window.history.back();
};

function BookingPandit() {
  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md fixed top-0">
        <div className="logoHead w-full h-16 flex items-center justify-between px-4 py-2 z-10 border-b-2">
          {/* Back Icon */}
          <button
            onClick={handleBackClick}
            aria-label="Go back to home"
            className="text-gray-600 hover:text-black transition border-0 focus:outline-none"
          >
            <span className="text-3xl bg-white px-5 py-2 rounded-3xl hover:shadow transition">
              &larr; <strong className="text-xl">Back</strong>
            </span>
          </button>

          {/* Heading */}
          <h1 className="text-4xl font-bold">Subha Labh</h1>

          {/* User Profile */}
          <div className="userProfileWrap">
            <Link to="/profile" aria-label="Go to user profile">
              <UserIcon className="w-[45px] h-[45px] bg-black text-white rounded-full p-2" />
            </Link>
          </div>
        </div>
      </header>
      {/* Banner Section */}
      <div className="relative w-full h-64 md:h-96 lg:h-[400px]">
        <img
          src={ShivaJi}
          alt="ShivaJi Pujari Ji"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row p-6 lg:p-12 space-y-6 lg:space-y-0 lg:space-x-6">
          {/* Left Section */}
          <div className="flex-1">
            <div className="panditUpContent border-b-2 pb-2">
              <h1 className="text-3xl font-bold mt-4">Babaji Pujari Ji</h1>
              <p className="text-gray-500 text-lg py-2">Jyotishacharya</p>
              <p className="text-gray-700 font-medium text-xl">
                Price on request
              </p>
            </div>
            <p className="text-gray-600 mt-4 text-justify leading-relaxed pr-4 text-xl">
              Jyotishacharya Pandit is a revered guide in the spiritual and
              astrological realm, offering insights into the mysteries of life
              through the wisdom of Vedic astrology. By analyzing celestial
              alignments and their impact on human destiny, a Jyotishacharya
              helps individuals navigate challenges and discover their true
              paths. Just as the sun illuminates the world, the guidance of a
              Jyotishacharya dispels the darkness of confusion, bringing clarity
              and peace. Their advice, rooted in ancient scriptures, often
              includes remedies such as mantras, rituals, and gemstones to
              harmonize one&apos;s life with cosmic energies. Seeking the
              blessings and wisdom of a Jyotishacharya at auspicious times can
              lead to prosperity, happiness, and spiritual growth.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex-1 bg-white shadow-md rounded-lg p-6 lg:p-12 max-w-lg mx-auto border-y-2">
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row md:space-x-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 mt-4 md:mt-0"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address (optional)"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                <label className="font-medium">Pooja with Samagri:</label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="samagri"
                      className="mr-2"
                      value="yes"
                      defaultChecked
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="samagri"
                      className="mr-2"
                      value="no"
                    />
                    No
                  </label>
                </div>
              </div>
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <textarea
                placeholder="Detail"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              ></textarea>
              <button
                type="submit"
                className="w-full p-3 bg-purple-600 text-white rounded-lg font-medium bg-gradient-to-r from-purpleCustom to-pinkCustom hover:opacity-90 transition duration-300"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="mainSection">
        <Footer />
      </footer>
    </div>
  );
}

export default BookingPandit;
