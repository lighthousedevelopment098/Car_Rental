// import React, { useState } from 'react';
// import { AiOutlineExclamationCircle } from 'react-icons/ai';

// function CarBookingForm() {
//   const [formData, setFormData] = useState({
//     car_id: '',
//     username: '',
//     company_name: '',
//     start_date: '',
//     end_date: '',
//     price_per_day: 0,
//     price_per_month: 0,
//     agreement: null,
//     car_pictures: null,
//     with_driver: false,
//     driver_details: {
//       id: '',
//       name: '',
//       license: '',
//       identity_card_number: ''
//     }
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === 'checkbox' ? checked : files ? files[0] : value
//     }));
//   };

//   const handleDriverChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       driver_details: { ...prevData.driver_details, [name]: value }
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     // Add submit logic here
//   };

//   return (
//     <>
//     <div className='flex justify-center'>
//     <form onSubmit={handleSubmit} className=" p-6 bg-gray-200 rounded-md shadow-lg w-[80%] mt-6   ">
//     <h1 className='font-bold text-gray-600 flex items-center gap-1'><span><AiOutlineExclamationCircle /></span>Car Booking</h1>
//     <div className='border-b border-black mt-1'></div>

//     <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'> 
//       <div className=' col-span-1'>
//         <label className="block text-gray-500 font-medium">Car ID</label>
//         <input
//           type="text"
//           name="car_id"
//           value={formData.car_id}
//           onChange={handleChange}
//           className="w-full mt-1 p-2 border border-gray-300 rounded-md outline-none"
//           required
//         />
//       </div>

//       <div className='col-span-1'>
//         <label className="block text-gray-500 font-medium">Username</label>
//         <input
//           type="text"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//           className="w-full mt-1 p-2 border border-gray-300 rounded-md outline-none"
//           required
//         />
//       </div>

//       <div className=' col-span-1  md:col-span-2 w-full md:w-[49%]'>
//         <label className="block text-gray-500 font-medium">Company Name</label>
//         <input
//           type="text"
//           name="company_name"
//           value={formData.company_name}
//           onChange={handleChange}
//           className="w-full mt-1 p-2 border border-gray-300 rounded-md outline-none"
//           required
//         />
//       </div>

//       <div>
//         <label className="block text-gray-500 font-medium">Start Date</label>
//         <input
//           type="date"
//           name="start_date"
//           value={formData.start_date}
//           onChange={handleChange}
//           className="w-full mt-1 p-2 border border-gray-300 rounded-md outline-none"
//           required
//         />
//       </div>

//       <div>
//         <label className="block text-gray-500 font-medium">End Date</label>
//         <input
//           type="date"
//           name="end_date"
//           value={formData.end_date}
//           onChange={handleChange}
//           className="w-full mt-1 p-2 border border-gray-300 rounded-md outline-none"
//           required
//         />
//       </div>
     
//       <div className='col-span-1'>
//         <label className="block text-gray-500 font-medium">Price per Day</label>
//         <input
//           type="number"
//           name="price_per_day"
//           value={formData.price_per_day}
//           onChange={handleChange}
//           className="w-full mt-1 p-2 border border-gray-300 rounded-md outline-none"
//         />
//       </div>

//       <div className='col-span-1'>
//         <label className="block text-gray-500 font-medium">Price per Month</label>
//         <input
//           type="number"
//           name="price_per_month"
//           value={formData.price_per_month}
//           onChange={handleChange}
//           className="w-full mt-1 p-2 border border-gray-300 rounded-md outline-none"
//         />
//       </div>
//       </div> 
//       <div className='grid grid-cols-1 justify-start'> 
//       <div>
//         <label className="block text-gray-500 font-medium">Agreement Document</label>
//         <input
//           type="file"
//           name="agreement"
//           onChange={handleChange}
//           className="w-full mt-1 p-2"
//           required
//         />
//       </div>

//       <div>
//         <label className="block text-gray-500 font-medium">Car Pictures</label>
//         <input
//           type="file"
//           name="car_pictures"
//           onChange={handleChange}
//           className="w-full mt-1 p-2"
//           required
//         />
//       </div>

//       <div className="flex items-center mt-4">
//         <input
//           type="checkbox"
//           name="with_driver"
//           checked={formData.with_driver}
//           onChange={handleChange}
//           className="mr-2"
//         />
//         <label className="text-gray-500 font-medium">With Driver</label>
//       </div>
//       </div>
//       {formData.with_driver && (
//         <div className="mt-4 space-y-4 ">
//           <h3 className="text-lg font-medium text-gray-500">Driver Details</h3>
//           <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
//           <div>
//             <label className="block text-gray-500 font-medium">Booking ID</label>
//             <input
//               type="text"
//               name="id"
//               value={formData.driver_details.id}
//               onChange={handleDriverChange}
//               className="w-full mt-1 p-2 border border-gray-300 rounded-md outline-none"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-500 font-medium">Driver Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.driver_details.name}
//               onChange={handleDriverChange}
//               className="w-full mt-1 p-2 border border-gray-300 rounded-md outline-none"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-500 font-medium">Driver License</label>
//             <input
//               type="text"
//               name="license"
//               value={formData.driver_details.license}
//               onChange={handleDriverChange}
//               className="w-full mt-1 p-2 border border-gray-300 rounded-md outline-none"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-500 font-medium">Identity Card Number</label>
//             <input
//               type="text"
//               name="identity_card_number"
//               value={formData.driver_details.identity_card_number}
//               onChange={handleDriverChange}
//               className="w-full mt-1 p-2 border border-gray-300 rounded-md outline-none"
//               required
//             />
//           </div>
//         </div>
//         </div>
        
//       )}

      
//       <button type="submit" className="w-full bg-[#192236] text-white py-2 rounded-md mt-4">Submit</button>
//     </form>
//     </div>
//     </>
//   );
// }

// export default CarBookingForm;





// // import { useState } from "react";
// // import CarInfoSection from "./AddCarFormSection/CarInfoSection";
// // import AdditionalInfoSection from "./AddCarFormSection/AdditionalInfoSection";
// // import { toast } from "react-toastify";
// // import {
// //   useCreateCarMutation,
// //   useCreateCarMediaMutation,
// //   useCreateCarSpecificationsMutation,
// //   useCreateCarStatusMutation,
// // } from "../../redux/slices/carsApiSlice";
// // import CarStatus from "./AddCarFormSection/CarStatus";
// // import MediaUploader from "../Carallocation/MediaUploader";

// // const CarBookingForm = () => {
// //   const [createCar] = useCreateCarMutation();
// //   const [createCarMedia] = useCreateCarMediaMutation();
// //   const [createCarSpecifications] = useCreateCarSpecificationsMutation();
// //   const [createCarStatus] = useCreateCarStatusMutation();

// //   const [selectedDate, setSelectedDate] = useState("");
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     carTypeId: "",
// //     brandId: "",
// //     ownerId: "",
// //     model: "",
// //     registrationNumber: "",
// //     registrationCity: "",
// //     description: "",
// //     carDocuments: "",
// //     assembly: "",
// //     pricePerDay: "",
// //     transmission: "",
// //     fuelType: "",
// //     seatingCapacity: "",
// //     minMileage: "",
// //     maxMileage: "",
// //     engineCapacity: "",
// //     engineCondition: "",
// //     odometerReading: "",
// //     color: "",
// //     location: "",
// //     availabilityStatus: "",
// //     insuranceDetail: "",
// //     fuelPolicy: "",
// //     lastServicedDate: "",
// //   });

// //   const [imageUrls, setImageUrls] = useState([]); // Store uploaded image URLs
// //   const [videoUrls, setVideoUrls] = useState([]);

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const {
// //         name,
// //         carTypeId,
// //         brandId,
// //         ownerId,
// //         model,
// //         registrationNumber,
// //         registrationCity,
// //         description,
// //         carDocuments,
// //         assembly,
// //         pricePerDay,
// //         transmission,
// //         fuelType,
// //         seatingCapacity,
// //         minMileage,
// //         maxMileage,
// //         engineCapacity,
// //         engineCondition,
// //         odometerReading,
// //         color,

// //         location,
// //         insuranceDetail,
// //         fuelPolicy,
// //         lastServicedDate,
// //       } = formData;

// //       let response = await createCar({
// //         name,
// //         carTypeId,
// //         brandId,
// //         ownerId,
// //         model,
// //         registrationNumber,
// //         registrationCity,
// //         description,
// //         carDocuments,
// //         assembly,
// //       });

// //       console.log(response);
// //       if (response) {
// //         await createCarMedia({
// //           carId: response.data.doc[0].id,
// //           imageUrls,
// //           videoUrls,
// //         });

// //         await createCarSpecifications({
// //           carId: response.data.doc[0].id,
// //           pricePerDay,
// //           transmission,
// //           fuelType,
// //           seatingCapacity,
// //           minMileage,
// //           maxMileage,
// //           engineCapacity,
// //           engineCondition,
// //           odometerReading,
// //           color,
// //         });

// //         await createCarStatus({
// //           carId: response.data.doc[0].id,
// //           location,
// //           insuranceDetail,
// //           fuelPolicy,
// //           lastServicedDate,
// //         });
// //       }
// //       toast.success("Car added successfully!");
// //     } catch (error) {
// //       console.log(error);
// //       toast.error(error?.data?.message);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <CarInfoSection formData={formData} handleChange={handleChange} />
// //       <MediaUploader
// //         imageUrls={imageUrls}
// //         setImageUrls={setImageUrls}
// //         videoUrls={videoUrls}
// //         setVideoUrls={setVideoUrls}
// //       />
// //       <AdditionalInfoSection
// //         formData={formData}
// //         handleChange={handleChange}
// //         handleDateChange={(e) => setSelectedDate(e.target.value)}
// //         selectedDate={selectedDate}
// //       />
// //       <CarStatus
// //         formData={formData}
// //         handleChange={handleChange}
// //         handleDateChange={(e) => setSelectedDate(e.target.value)}
// //         selectedDate={selectedDate}
// //       />

// //       <button
// //         type="submit"
// //         className="btn bg-gray-950 text-white mt-3 text-center w-full"
// //       >
// //         Add Car
// //       </button>
// //     </form>
// //   );
// // };

// // export default CarBookingForm;


import React from 'react'
import CarBookingForm from '../Components/carBooking'

const CarBooking = () => {
  return (
    <div>
      <CarBookingForm/>
    </div>
  )
}

export default CarBooking
