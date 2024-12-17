import { useState } from "react";
import {
  Bars3Icon,
  UserIcon,
  HomeIcon,
  BookmarkIcon,
  ChartBarIcon,
  FolderIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

const Booknow = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true); // Sidebar toggle state
  const [activePage, setActivePage] = useState("Dashboard"); // Active sidebar item

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const renderContent = () => {
    switch (activePage) {
      case "Dashboard":
        return <div className="p-4">Welcome to the Dashboard!</div>;
      case "Users":
        return <div className="p-4">Here you can manage your users.</div>;
      case "Messages":
        return <div className="p-4">View and send messages here.</div>;
      case "Bookmarks":
        return <div className="p-4">Your saved bookmarks appear here.</div>;
      case "Files":
        return <div className="p-4">Access and manage your files.</div>;
      case "Stats":
        return <div className="p-4">View your statistics and reports.</div>;
      default:
        return <div className="p-4">Select an option from the sidebar.</div>;
    }
  };

  return (
    <div className="relative transition-all duration-300">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md h-16 flex items-center px-4 z-10">
        <div
          onClick={toggleSidebar}
          className="cursor-pointer text-2xl text-gray-600"
        >
          <Bars3Icon className="h-8 w-8" />
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-gray-800 text-white transition-all duration-300 ${
          isSidebarOpen ? "w-60" : "w-20"
        }`}
      >
        <nav className="flex flex-col h-full">
          <a
            href="#"
            onClick={() => setActivePage("Dashboard")}
            className={`flex items-center px-4 py-4 hover:bg-gray-700 transition-all ${
              activePage === "Dashboard" ? "bg-gray-700" : ""
            }`}
          >
            <HomeIcon className="h-6 w-6" />
            {isSidebarOpen && <span className="ml-2">Dashboard</span>}
          </a>
          <a
            href="#"
            onClick={() => setActivePage("Users")}
            className={`flex items-center px-4 py-2 hover:bg-gray-700 transition-all ${
              activePage === "Users" ? "bg-gray-700" : ""
            }`}
          >
            <UserIcon className="h-6 w-6" />
            {isSidebarOpen && <span className="ml-2">Users</span>}
          </a>
          <a
            href="#"
            onClick={() => setActivePage("Messages")}
            className={`flex items-center px-4 py-2 hover:bg-gray-700 transition-all ${
              activePage === "Messages" ? "bg-gray-700" : ""
            }`}
          >
            <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
            {isSidebarOpen && <span className="ml-2">Messages</span>}
          </a>
          <a
            href="#"
            onClick={() => setActivePage("Bookmarks")}
            className={`flex items-center px-4 py-2 hover:bg-gray-700 transition-all ${
              activePage === "Bookmarks" ? "bg-gray-700" : ""
            }`}
          >
            <BookmarkIcon className="h-6 w-6" />
            {isSidebarOpen && <span className="ml-2">Bookmarks</span>}
          </a>
          <a
            href="#"
            onClick={() => setActivePage("Files")}
            className={`flex items-center px-4 py-2 hover:bg-gray-700 transition-all ${
              activePage === "Files" ? "bg-gray-700" : ""
            }`}
          >
            <FolderIcon className="h-6 w-6" />
            {isSidebarOpen && <span className="ml-2">Files</span>}
          </a>
          <a
            href="#"
            onClick={() => setActivePage("Stats")}
            className={`flex items-center px-4 py-2 hover:bg-gray-700 transition-all ${
              activePage === "Stats" ? "bg-gray-700" : ""
            }`}
          >
            <ChartBarIcon className="h-6 w-6" />
            {isSidebarOpen && <span className="ml-2">Stats</span>}
          </a>
          <a
            href="#"
            className="mt-auto flex items-center px-4 py-2 hover:bg-gray-700 transition-all"
          >
            <ArrowRightOnRectangleIcon className="h-6 w-6" />
            {isSidebarOpen && <span className="ml-2">Sign Out</span>}
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-20"
        } p-4 pt-20`}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default Booknow;
