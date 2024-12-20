import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import {
  HomeSvg,
  HeartSvg,
  BookingSvg,
  PanditSvg,
  VastuSvg,
} from "../../assets/index.js";
import { Search, UserIcon } from "lucide-react";
import PersonalRecommendation from "./PresonalRecommendation.jsx";
import { useNavigate } from "react-router-dom";
import VenueBooking from "./VenueBooking.jsx";
import PaditBookingPage from "./PanditBookingPage.jsx";

const FeaturesPage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("Personalized Recommendation");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleSearch = () => {
    console.log("Searching for:");
    console.log("Location:", location);
    console.log("Name:", name);
  };

  const handleHomeClick = () => {
    navigate("/", { replace: true });
  }

  const handleBackClick = () => {
    window.history.back();
  }

  const renderContent = () => {
    switch (activePage) {
      // case "Home":
      //   return <div className="p-4">Welcome to the Home!</div>;
      case "Personalized Recommendation":
        return (
          <div className="p-4 h-[100vh] flex items-center justify-center">
            <PersonalRecommendation />
          </div>
        );
      case "Venue Booking":
        return <div className="p-4 flex items-center justify-center absolute top-32">
          <VenueBooking />  
        </div>;
      case "Pandit Booking":
        return (
          <div className="p-4 flex items-center justify-center absolute top-32">
            <PaditBookingPage />
          </div>
        );
      case "Vastu":
        return <div className="text-black p-4 flex items-center justify-center absolute top-32"><h1>Access and manage your Vastu.</h1></div>;
      default:
        return <div className="p-4 flex items-center justify-center absolute top-32">Select an option from the sidebar.</div>;
    }
  };

  return (
    <div className="relative transition-all duration-300">
      {/* Header */}
      <header className="bg-white shadow-md fixed">
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

          <div className="headingName">
            <h1 className="text-4xl font-bold">Subha Labh</h1>
          </div>

          <div className="userProfileWrap flex">
            <button className="border-2 border-black rounded-full px-3 py-1 mx-2">
              Book a Pandit
            </button>
            <UserIcon className="h-8 w-8 bg-black text-white p-1 rounded-full" />
          </div>
        </div>
        <div className="searchBar w-full h-16 flex items-center justify-between px-4 py-2 z-10">
          <div
            onClick={toggleSidebar}
            className="cursor-pointer text-2xl text-gray-600"
          >
            <Bars3Icon className="h-8 w-8" />
          </div>

          {/* Search Section */}
          <div className="flex items-center justify-between bg-gray-300 my-2 rounded-full px-4 py-1 mx-auto">
            {/* Search by Location */}
            <input
              type="text"
              placeholder="Search by Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-transparent placeholder-gray-500 outline-none border-none"
            />

            {/* Divider */}
            <div className="border-l border-gray-400 h-6 mx-4"></div>

            {/* Search by Name */}
            <input
              type="text"
              placeholder="Search by Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent placeholder-gray-500 outline-none border-none"
            />

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="flex items-center gap-2 bg-[#462670] text-white px-4 py-1 rounded-full hover:bg-[#3b1f5d] transition duration-300"
            >
              <Search size={18} /> SEARCH
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-32 left-0 h-screen bg-gray-800 text-white transition-all duration-300 ${isSidebarOpen ? "w-60" : "w-20"}`}
      >
        <nav className="flex flex-col h-full">
          <a
            href="#"
            // onClick={(hand) => setActivePage("Home")}
            onClick={handleHomeClick}
            className={`flex items-center px-4 py-2 hover:bg-gray-700 transition-all gap-6 text-white hover:text-blue-500 ${activePage === "Home" ? "bg-gray-700" : ""}`}
          >
            <img className="w-[40px] h-[40px]" src={HomeSvg} alt="Home" />
            {isSidebarOpen && <span className="ml-2">Home</span>}
          </a>
          <a
            href="#"
            onClick={() => setActivePage("Personalized Recommendation")}
            className={`flex items-center px-4 py-2 hover:bg-gray-700 transition-all gap-6 text-white hover:text-blue-500 ${activePage === "Personalized Recommendation" ? "bg-gray-700" : ""}`}
          >
            <img
              className="w-[40px] h-[40px]"
              src={HeartSvg}
              alt="Personalized Recommendation"
            />
            {isSidebarOpen && (
              <span className="ml-2">Personalized Recommendation</span>
            )}
          </a>
          <a
            href="#"
            onClick={() => setActivePage("Venue Booking")}
            className={`flex items-center px-4 py-2 hover:bg-gray-700 transition-all gap-6 text-white hover:text-blue-500 ${activePage === "Venue Booking" ? "bg-gray-700" : ""}`}
          >
            <img
              className="w-[40px] h-[40px]"
              src={BookingSvg}
              alt="Venue Booking"
            />
            {isSidebarOpen && <span className="ml-2">Venue Booking</span>}
          </a>
          <a
            href="#"
            onClick={() => setActivePage("Pandit Booking")}
            className={`flex items-center px-4 py-2 hover:bg-gray-700 transition-all gap-6 text-white hover:text-blue-500 ${activePage === "Pandit Booking" ? "bg-gray-700" : ""}`}
          >
            <img
              className="w-[40px] h-[40px]"
              src={PanditSvg}
              alt="Pandit Booking"
            />
            {isSidebarOpen && <span className="ml-2">Pandit Booking</span>}
          </a>
          <a
            href="#"
            onClick={() => setActivePage("Vastu")}
            className={`flex items-center px-4 py-2 hover:bg-gray-700 transition-all gap-6 text-white hover:text-blue-500 ${activePage === "Vastu" ? "bg-gray-700" : ""}`}
          >
            <img className="w-[40px] h-[40px]" src={VastuSvg} alt="Vastu" />
            {isSidebarOpen && <span className="ml-2">Vastu</span>}
          </a>
        </nav>
      </div>

      <div className={`transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-20"} p-4 pt-20`}>
        {renderContent()}
      </div>
    </div>
  );
};

export default FeaturesPage;
