import { useState } from "react";
import { BellBg } from "../../assets/index.js";

function BookaPandit() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    samagri: "Yes",
    date: "",
    address: "",
    detail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BellBg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Content */}
      <div className="container mx-auto">
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-start min-h-screen px-4 sm:pl-10">
          <div className="textWrapper">
            <h1 className="text-6xl font-bold text-center text-white mb-6">
              Book a Pandit
            </h1>

            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-1/2 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-1/2 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />

                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                >
                  <option value="">Select Event Type</option>
                  <option value="Housewarming">Housewarming</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Satyanarayan Pooja">Satyanarayan Pooja</option>
                </select>

                <div className="flex items-center space-x-4 justify-between">
                  <span className="text-gray-600">Pooja with Samagri:</span>
                  <label className="flex">
                    <input
                      type="radio"
                      name="samagri"
                      value="Yes"
                      checked={formData.samagri === "Yes"}
                      onChange={handleChange}
                      className="mr-1"
                    />
                    Yes
                  </label>
                  <label className="flex">
                    <input
                      type="radio"
                      name="samagri"
                      value="No"
                      checked={formData.samagri === "No"}
                      onChange={handleChange}
                      className="mr-1"
                    />
                    No
                  </label>
                </div>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />

                <textarea
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="2"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                ></textarea>

                <textarea
                  name="detail"
                  placeholder="Detail"
                  value={formData.detail}
                  onChange={handleChange}
                  rows="2"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookaPandit;
