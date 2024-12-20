import { useState } from "react";
import { Spacebg } from "../../assets";
import Footer from "../homePage/Footer";
import { UserIcon } from "lucide-react";
import { Link } from "react-router-dom";

function PersonalRecommendationForm() {
  const [formData, setFormData] = useState({
    name: "",
    horoscope: "",
    birthday: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

const handleBackClick = () => {
  window.history.back();
}

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Spacebg})` }}
    >
      {/* Header */}
      <header className="bg-white shadow-md fixed top-0">
        <div className="logoHead w-full h-16 flex items-center justify-between px-4 py-2 z-10 border-b-2">
          {/* Back Icon */}
          <button
            // to="/dashboard"
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

      {/* Content */}
      <div className="container mx-auto">
        <div className="relative flex flex-col sm:flex-row items-center justify-center min-h-screen px-4 sm:pl-10 py-16 mt-8">
          <div className="textWrapper flex flex-col items-center">
            <h1
              className="text-6xl font-bold text-center text-white mb-6"
              style={{
                textShadow: "2px 2px 6px rgba(0, 0, 0, 0.7)",
              }}
            >
              Personal Recommendation
            </h1>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                  aria-label="Enter your name"
                />

                {/* Horoscope */}
                <input
                  type="text"
                  name="horoscope"
                  placeholder="Enter Your Horoscope"
                  value={formData.horoscope}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                  aria-label="Enter your horoscope"
                />

                {/* Birthday */}
                <input
                  type="date"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                  aria-label="Enter your birthday"
                />

                {/* Button */}
                <button
                  type="submit"
                  className="w-full text-white py-2 px-4 rounded bg-gradient-to-r from-purpleCustom to-pinkCustom hover:opacity-90 transition duration-300"
                >
                  Recommend Me
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default PersonalRecommendationForm;
