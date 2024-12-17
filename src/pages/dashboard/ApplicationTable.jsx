import { useState } from "react";

const bookings = [
  {
    type: "Pandit Booking",
    name: "Deeplove kc",
    details: "Need pandit booking for January",
    startDate: "January 20",
    endDate: "January 21",
    createdAt: "3:57 PM",
  },
  {
    type: "Venue Booking",
    name: "lovedeep ck",
    details: "Need a venue for puja",
    startDate: "January 12",
    endDate: "January 12",
    createdAt: "Dec 7",
  },
  {
    type: "Pandit Booking",
    name: "lovedeep ck",
    details: "Bihe garna lai pandit chaiyo",
    startDate: "January 2",
    endDate: "January 5",
    createdAt: "Dec 7",
  },
  {
    type: "Pandit Booking",
    name: "lovedeep ck",
    details: "Nuharan gara lai pandit",
    startDate: "January 20",
    endDate: "January 20",
    createdAt: "Dec 7",
  },
];

const BookingTable = () => {
  const [bookingsList, setBookingsList] = useState(bookings); 
  const [selectedRows, setSelectedRows] = useState([]); 

  const handleCheckboxChange = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleDeleteRow = (index) => {
    setBookingsList((prevBookings) => prevBookings.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full p-4 bg-white rounded-3xl">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-4"> Application Bookings</h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg border-l-0 border-r-0">
          <thead className="bg-lavender">
            <tr>
              <th className="py-2 px-4 text-left font-medium text-gray-600">Select</th>
              <th className="py-2 px-4 text-left font-medium text-gray-600">Type</th>
              <th className="py-2 px-4 text-left font-medium text-gray-600">Name</th>
              <th className="py-2 px-4 text-left font-medium text-gray-600">Details</th>
              <th className="py-2 px-4 text-left font-medium text-gray-600">Date Range</th>
              <th className="py-2 px-4 text-left font-medium text-gray-600">Created At</th>
              <th className="py-2 px-4 text-left font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookingsList.map((booking, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-100 ${selectedRows.includes(index) ? "bg-gray-50" : ""}`}
              >
                <td className="py-2 px-4 border-b border-gray-300">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(index)}
                    onChange={() => handleCheckboxChange(index)}
                    className="h-4 w-4"
                  />
                </td>
                <td className="py-2 px-4 border-b border-gray-300">{booking.type}</td>
                <td className="py-2 px-4 border-b border-gray-300">{booking.name}</td>
                <td className="py-2 px-4 border-b border-gray-300">{booking.details}</td>
                <td className="py-2 px-4 border-b border-gray-300">
                  {booking.startDate} - {booking.endDate}
                </td>
                <td className="py-2 px-4 border-b border-gray-300">{booking.createdAt}</td>
                <td className="py-2 px-4 border-b border-gray-300">
                  <button
                    onClick={() => handleDeleteRow(index)} // Delete button for each row
                    className="bg-red-500 text-white py-1 px-3 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingTable;
