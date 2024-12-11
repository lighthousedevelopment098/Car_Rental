import React from "react";
import { useGetAllBookingsQuery } from "../../store/slices/bookingsApi";

function CarBookingList() {
  const { data: bookingData, error, isLoading } = useGetAllBookingsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading bookings</p>;

  return (
    <div className="p-6 bg-gray-100  w-96 overflow-x-scroll  md:w-full scroll-smooth">
      <h1 className="text-2xl font-bold text-gray-700 mb-6">Booking Data</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="border border-gray-300 px-4 py-2">Car ID</th>
            <th className="border border-gray-300 px-4 py-2">Username</th>
            <th className="border border-gray-300 px-4 py-2">Company Name</th>
            <th className="border border-gray-300 px-4 py-2">Start Date</th>
            <th className="border border-gray-300 px-4 py-2">End Date</th>
            <th className="border border-gray-300 px-4 py-2">Price Per Day</th>
            <th className="border border-gray-300 px-4 py-2">With Driver</th>
            <th className="border border-gray-300 px-4 py-2">Driver Details</th>
            <th className="border border-gray-300 px-4 py-2">Agreement Document</th>
            <th className="border border-gray-300 px-4 py-2">Car Picture</th>
          </tr>
        </thead>
        <tbody>
          {bookingData.map((booking, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-100`}
            >
              <td className="border border-gray-300 px-4 py-2">{booking.car_id}</td>
              <td className="border border-gray-300 px-4 py-2">{booking.username}</td>
              <td className="border border-gray-300 px-4 py-2">{booking.company_name}</td>
              <td className="border border-gray-300 px-4 py-2">{booking.start_date}</td>
              <td className="border border-gray-300 px-4 py-2">{booking.end_date}</td>
              <td className="border border-gray-300 px-4 py-2">${booking.price_per_day}</td>
              <td className="border border-gray-300 px-4 py-2">{booking.with_driver ? "Yes" : "No"}</td>
              <td className="border border-gray-300 px-4 py-2">
                {booking.with_driver && booking.driver_details ? (
                  <div>
                    <p>
                      <strong>Name:</strong> {booking.driver_details.name}
                    </p>
                    <p>
                      <strong>License:</strong> {booking.driver_details.license_number}
                    </p>
                    <p>
                      <strong>Contact:</strong> {booking.driver_details.contact}
                    </p>
                  </div>
                ) : (
                  "N/A"
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <a
                  href={booking.agreement_document}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View Agreement
                </a>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <a
                  href={booking.car_picture}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View Car Picture
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CarBookingList;
