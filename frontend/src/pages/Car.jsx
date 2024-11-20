// import React, { useState } from 'react';
// import { AiOutlineExclamationCircle } from 'react-icons/ai';

// function CarDetailsForm() {
//   // Simulating data tables for makes, models, and variants
//   const makes = ['Toyota', 'Ford', 'Honda'];
//   const models = {
//     Toyota: ['Camry', 'Corolla', 'Rav4'],
//     Ford: ['Fiesta', 'Focus', 'Explorer'],
//     Honda: ['Civic', 'Accord', 'CR-V'],
//   };
//   const variants = {
//     Camry: ['LE', 'SE', 'XLE'],
//     Corolla: ['L', 'LE', 'XSE'],
//     Fiesta: ['S', 'SE', 'Titanium'],
//     // Add variants for other models as needed
//   };

//   const [formData, setFormData] = useState({
//     make: '',
//     model: '',
//     variant: '',
//     registration_no: '',
//     insurance: null,
//     id_card: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: files ? files[0] : value,
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
      
//     <form onSubmit={handleSubmit} className=" mt-4 p-6 bg-gray-200 rounded-md shadow-lg w-[80%] ">
//     <h1 className='text-base text-gray-600 font-bold flex items-center gap-1'><span><AiOutlineExclamationCircle /></span>Car Details</h1>
//     <div className='border-b border-gray-500 mt-1'></div>
//       <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
//       <div>
//         <label className="block text-gray-500 font-medium">Make</label>
//         <select
//           name="make"
//           value={formData.make}
//           onChange={(e) => {
//             handleChange(e);
//             setFormData((prevData) => ({ ...prevData, model: '', variant: '' })); // Reset model and variant
//           }}
//           className="w-full mt-1 p-2 border border-gray-300 rounded-md outline-none"
//           required
//         >
//           <option value="">Select Make</option>
//           {makes.map((make) => (
//             <option key={make} value={make}>{make}</option>
//           ))}
//         </select>
//       </div>

//       {formData.make && (
//         <div>
//           <label className="block text-gray-500 font-medium">Model</label>
//           <select
//             name="model"
//             value={formData.model}
//             onChange={(e) => {
//               handleChange(e);
//               setFormData((prevData) => ({ ...prevData, variant: '' })); // Reset variant
//             }}
//             className="w-full mt-1 p-2 border border-gray-300 rounded-md outline-none"
//             required
//           >
//             <option value="">Select Model</option>
//             {models[formData.make]?.map((model) => (
//               <option key={model} value={model}>{model}</option>
//             ))}
//           </select>
//         </div>
//       )}

//       {formData.model && variants[formData.model] && (
//         <div>
//           <label className="block text-gray-500 font-medium">Variant</label>
//           <select
//             name="variant"
//             value={formData.variant}
//             onChange={handleChange}
//             className="w-full mt-1 p-2 border border-gray-300 rounded-md outline-none"
//             required
//           >
//             <option value="">Select Variant</option>
//             {variants[formData.model].map((variant) => (
//               <option key={variant} value={variant}>{variant}</option>
//             ))}
//           </select>
//         </div>
//       )}

//       <div>
//         <label className="block text-gray-500 font-medium">Registration Number</label>
//         <input
//           type="text"
//           name="registration_no"
//           value={formData.registration_no}
//           onChange={handleChange}
//           className="w-full mt-1 p-2 border border-gray-300 rounded-md outline-none"
//           required
//         />
//       </div>
//       </div>
//       <div>
//         <label className="block text-gray-500 font-medium">Insurance Document</label>
//         <input
//           type="file"
//           name="insurance"
//           onChange={handleChange}
//           className="w-full mt-1 p-2 outline-none"
//           required
//         />
//       </div>

//       <div>
//         <label className="block text-gray-500 font-medium">Owner's ID Card</label>
//         <input
//           type="file"
//           name="id_card"
//           onChange={handleChange}
//           className="w-full mt-1 p-2"
//           required
//         />
//       </div>

//       <button type="submit" className="w-full bg-[#192236] text-white py-2 rounded-md mt-4">Submit</button>
//     </form>
//     </div>
//     </>
//   );
// }

// export default CarDetailsForm;


import React from 'react'
import CarDetailsForm from '../Components/Car'

const Car = () => {
  return (
    <div>
      <CarDetailsForm/>
    </div>
  )
}

export default Car
