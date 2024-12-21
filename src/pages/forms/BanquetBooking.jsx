import { UserIcon } from "lucide-react";
import { MaximsImage } from "../../assets";
import { Link } from "react-router-dom";
import Footer from "../homePage/Footer";

const handleBackClick = () => {
  window.history.back();
};

const mapStyle = {
  width: "100%",
  height: "400px",
  border: "0",
  marginBottom: "10px",
};

function BanquetBooking() {
  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md fixed top-0 w-full z-10">
        <div className="w-full h-16 flex items-center justify-between px-4 py-2 border-b-2">
          {/* Back Button */}
          <button
            onClick={handleBackClick}
            aria-label="Go back"
            className="text-gray-600 hover:text-black transition focus:outline-none"
          >
            <span className="text-3xl bg-white px-5 py-2 rounded-3xl hover:shadow transition">
              &larr; <strong className="text-xl">Back</strong>
            </span>
          </button>

          {/* Heading */}
          <h1 className="text-4xl font-bold">Subha Labh</h1>

          {/* User Profile */}
          <Link to="/profile" aria-label="Go to user profile">
            <UserIcon className="w-[45px] h-[45px] bg-black text-white rounded-full p-2" />
          </Link>
        </div>
      </header>

      {/* Banner Section */}
      <div className="relative w-full h-64 md:h-96 lg:h-[400px]">
        <img
          src={MaximsImage}
          alt="Maxims Banquet & Events"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-6 lg:p-12 space-y-6">
        <div className="flex flex-col lg:flex-row p-6 lg:p-12 space-y-6 lg:space-y-0 lg:space-x-6">
          {/* Left Section */}
          <div>
            <h1 className="text-3xl font-bold">Maxims Banquet & Events</h1>
            <p className="text-gray-500 text-lg mt-1">
              Kupandole Heights, Lalitpur
            </p>
            <p className="text-gray-700 text-xl mt-2">
              Starting Price: Rs 2000
            </p>
            <hr className="my-4 border" />
            <h2 className="text-xl font-semibold">About This Banquet</h2>
            <p className="text-gray-600 mt-2">
              We are a new lavish banquet in the center of Lalitpur, offering
              quality service to make your important day memorable.
            </p>
            <h2 className="text-xl font-semibold mt-6">Where You&apos;ll Be</h2>
            <div className="w-full h-64 bg-gray-300 rounded-lg mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28248.902661527733!2d85.3213184!3d27.7446656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1734808816406!5m2!1sen!2snp"
                style={mapStyle}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white shadow-md rounded-lg p-6 lg:p-12 max-w-lg mx-auto border-y-2 flex items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Book Now</h2>
              <div className="flex space-x-4 mb-6">
                <button className="flex-1 p-3 border rounded-lg border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                  Day
                </button>
                <button className="flex-1 p-3 border rounded-lg border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                  Evening
                </button>
                <button className="flex-1 p-3 border rounded-lg border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                  Custom Time
                </button>
              </div>
              <form className="space-y-4">
                <div className="flex space-x-4 items-center justify-between">
                  <div className="flex flex-col">
                    <label htmlFor="start-date" className="mb-2">
                      Start Date :
                    </label>
                    <input
                      id="start-date"
                      type="date"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="end-date" className="mb-2">
                      End Date :
                    </label>
                    <input
                      id="end-date"
                      type="date"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                </div>

                <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
                  <option>Number of Guests</option>
                  <option>10-50</option>
                  <option>50-100</option>
                  <option>100-200</option>
                  <option>200+</option>
                </select>
                <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
                  <option>Select Event Type</option>
                  <option>Wedding</option>
                  <option>Party</option>
                  <option>Conference</option>
                  <option>Other</option>
                </select>
                <textarea
                  placeholder="Additional Request"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                ></textarea>
                <button
                  type="submit"
                  className="w-full p-3 text-white bg-gradient-to-r from-purpleCustom to-pinkCustom hover:opacity-90 transition duration-300"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer className="mainSection">
        <Footer />
      </footer>
    </div>
  );
}

export default BanquetBooking;
