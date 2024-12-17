import React from "react";
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  ChatBubbleLeftEllipsisIcon,
  ChartPieIcon,
  EyeIcon,
  BuildingOfficeIcon,
  UserIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

function Dashboard() {
  return (
    <div className="flex h-screen bg-lavender">
      {/* Sidebar */}
      <aside className="w-60 bg-purple-700 text-white p-5 flex flex-col rounded-r-3xl pr-0 shadow-md ">
        <h1 className="text-2xl font-bold mb-8 text-white">Shuva Labh</h1>
        <nav className="space-y-4">
          {/* Dashboard */}
          <div className="flex items-center space-x-2 p-3 relative pl-4 rounded-l-full cursor-pointer hover:bg-lavender hover:text-black transition duration-300">
            <HomeIcon className="w-[30px] h-[30px]" />
            <span className="pl-1"> Dashboard</span>
          </div>

          {/* Application */}
          <div className="flex items-center space-x-2 p-3 relative pl-4 rounded-l-full cursor-pointer hover:bg-lavender hover:text-black transition duration-300">
            <ClipboardDocumentListIcon className="w-[30px] h-[30px]" />
            <span className="ml-auto bg-red-500 text-xs px-2 py-1 rounded-full absolute left-0 top-0">
              13
            </span>
            <span className="pl-1"> Application</span>
          </div>

          {/* Messages */}
          <div className="flex items-center space-x-2 p-3 relative pl-4 rounded-l-full cursor-pointer hover:bg-lavender hover:text-black transition duration-300">
            <ChatBubbleLeftEllipsisIcon className="w-[30px] h-[30px]" />
            <span className="ml-auto bg-red-500 text-xs px-2 py-1 rounded-full absolute left-0 top-0">
              1
            </span>
            <span className="pl-1"> Message</span>
          </div>

          {/* Statics */}
          <div className="flex items-center space-x-2 p-3 relative pl-4 rounded-l-full cursor-pointer hover:bg-lavender hover:text-black transition duration-300">
            <ChartPieIcon className="w-[30px] h-[30px]" />
            <span className="pl-1"> Statics</span>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-10 relative items-center flex bg-lavender">
        <div className="grid grid-cols-2 gap-6">
          {/* Profile Viewed */}
          <div className="bg-purple-100 p-6 rounded-3xl shadow-md hover:shadow-lg transition duration-300">
            <p className="text-black text-2xl">Profile Viewed</p>
            <p className="text-3xl font-bold mt-2">62</p>
            <div className="mt-4 text-purple-600 text-sm flex items-center space-x-2 cursor-pointer hover:underline">
              <EyeIcon className="w-5 h-5" />
              <span>View now</span>
            </div>
          </div>

          {/* Venue Booking */}
          <div className="bg-purple-100 p-6 rounded-3xl shadow-md hover:shadow-lg transition duration-300">
            <p className="text-black text-2xl">Venue Booking</p>
            <p className="text-3xl font-bold mt-2">189</p>
            <div className="mt-4 text-purple-600 text-sm flex items-center space-x-2 cursor-pointer hover:underline">
              <BuildingOfficeIcon className="w-5 h-5" />
              <span>View now</span>
            </div>
          </div>

          {/* Unread Messages */}
          <div className="bg-purple-100 p-6 rounded-3xl shadow-md hover:shadow-lg transition duration-300">
            <p className="text-black text-2xl">Unread Messages</p>
            <p className="text-3xl font-bold mt-2">79</p>
            <div className="mt-4 text-purple-600 text-sm flex items-center space-x-2 cursor-pointer hover:underline">
              <ChatBubbleLeftEllipsisIcon className="w-5 h-5" />
              <span>See in message</span>
            </div>
          </div>

          {/* Pandit Booking */}
          <div className="bg-purple-100 p-6 rounded-3xl shadow-md hover:shadow-lg transition duration-300">
            <p className="text-black text-2xl">Pandit Booking</p>
            <p className="text-3xl font-bold mt-2">257</p>
            <div className="mt-4 text-purple-600 text-sm flex items-center space-x-2 cursor-pointer hover:underline">
              <UserIcon className="w-5 h-5" />
              <span>View now</span>
            </div>
          </div>
        </div>

        {/* Notification and Profile */}
        <div className="absolute top-5 right-5 flex items-center space-x-6">
          <div className="relative cursor-pointer">
            <BellIcon className="w-[30px] h-[30px] text-gray-600" />
            <span className="absolute top-0 right-0 bg-red-500 text-xs text-white rounded-full px-2">
              5
            </span>
          </div>
          <div className="bg-black text-white rounded-full w-8 h-8 p-1 flex items-center justify-center cursor-pointer">
            <UserIcon className="w-[45px] h-[45px]" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
