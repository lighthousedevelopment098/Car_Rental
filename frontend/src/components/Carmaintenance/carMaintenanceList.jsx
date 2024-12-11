import React from "react";
import { useGetAllMaintenanceRecordsQuery } from "../../store/slices/maintenancesApiSlice";

function CarMaintenenceList() {
    // Fetching data using the API query hook
    const { data: serviceData, isLoading, isError, error } = useGetAllMaintenanceRecordsQuery();

    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (isError) {
      return <div>Error: {error.message}</div>;
    }
  
  return (
    <div className="p-6 bg-gray-100 w-96 overflow-x-scroll md:w-full scroll-smooth">
      <h1 className="text-2xl font-bold text-gray-700 mb-6">Car Service Data</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="border border-gray-300 px-4 py-2">Car ID</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Chassis No</th>
            <th className="border border-gray-300 px-4 py-2">Engine</th>
            <th className="border border-gray-300 px-4 py-2">Reg No</th>
            <th className="border border-gray-300 px-4 py-2">Cell</th>
            <th className="border border-gray-300 px-4 py-2">Type</th>
            <th className="border border-gray-300 px-4 py-2">Labour</th>
            <th className="border border-gray-300 px-4 py-2">Total Labour Cost</th>
            <th className="border border-gray-300 px-4 py-2">Total Parts Cost</th>
            <th className="border border-gray-300 px-4 py-2">Grand Total</th>
          </tr>
        </thead>
        <tbody>
          {serviceData.map((data, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100`}
            >
              <td className="border border-gray-300 px-4 py-2">{data.car_id}</td>
              <td className="border border-gray-300 px-4 py-2">{data.date}</td>
              <td className="border border-gray-300 px-4 py-2">{data.chassis_no}</td>
              <td className="border border-gray-300 px-4 py-2">{data.engine}</td>
              <td className="border border-gray-300 px-4 py-2">{data.reg_no}</td>
              <td className="border border-gray-300 px-4 py-2">{data.cell}</td>
              <td className="border border-gray-300 px-4 py-2">{data.type}</td>
              <td className="border border-gray-300 px-4 py-2">{data.labour}</td>
              <td className="border border-gray-300 px-4 py-2">${data.total_labour_cost}</td>
              <td className="border border-gray-300 px-4 py-2">${data.total_parts_cost}</td>
              <td className="border border-gray-300 px-4 py-2">${data.grand_total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CarMaintenenceList;
