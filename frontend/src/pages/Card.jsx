// // import React, { useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { updateCardDetails } from '../Slices/cardSlice';
// // import { useSubmitCardDetailsMutation } from '../Services/apiSlice';
// // import { AiOutlineExclamationCircle } from 'react-icons/ai';

// // const CardDetails = () => {
// //   const dispatch = useDispatch();
// //   const cardDetails = useSelector((state) => state.card);
// //   const [submitCardDetails, { isLoading, isSuccess, isError }] = useSubmitCardDetailsMutation();
// //   const [validationError, setValidationError] = useState('');

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     dispatch(updateCardDetails({ name, value }));
// //     if (validationError) setValidationError(''); // Clear validation error on input change
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (Object.values(cardDetails).some((value) => !value.trim())) {
// //       setValidationError('All fields are required');
// //       return;
// //     }

// //     try {
// //       await submitCardDetails(cardDetails).unwrap();
// //       console.log('Card Details submitted successfully');
// //     } catch (error) {
// //       console.error('Error submitting card details:', error);
// //     }
// //   };

// //   return (
// //     <div className="mx-auto p-6 bg-gray-200 shadow-md rounded-lg w-[80%] mt-6">
// //       <h2 className="text-base font-bold mb-1 text-gray-600 flex items-center gap-1"><span><AiOutlineExclamationCircle /></span>Card Details</h2>
// //       <div className="border-b border-gray-500"></div>
// //       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
// //         {Object.keys(cardDetails).map((field) => (
// //           <div key={field}>
// //             <label className="block text-gray-500 font-medium capitalize">
// //               {field.replace('_', ' ')}
// //             </label>
// //             {field === 'due_date' ? (
// //               <input
// //                 type="date"
// //                 name={field}
// //                 value={cardDetails[field]}
// //                 onChange={handleInputChange}
// //                 className="w-full p-2 border rounded-md outline-none"
// //               />
// //             ) : field === 'status' ? (
// //               <select
// //                 name={field}
// //                 value={cardDetails[field]}
// //                 onChange={handleInputChange}
// //                 className="w-full p-2 border rounded-md outline-none"
// //               >
// //                 <option value="">Select status</option>
// //                 <option value="Active">Active</option>
// //                 <option value="Inactive">Inactive</option>
// //               </select>
// //             ) : (
// //               <input
// //                 type="text"
// //                 name={field}
// //                 value={cardDetails[field]}
// //                 onChange={handleInputChange}
// //                 className="w-full p-2 border rounded-md outline-none"
// //               />
// //             )}
// //           </div>
// //         ))}
// //         <button
// //           type="submit"
// //           className="w-full bg-[#192236] text-white py-2 rounded-md font-semibold"
// //           disabled={isLoading || isSuccess}
// //         >
// //           {isLoading ? 'Saving...' : 'Save Details'}
// //         </button>
// //         {validationError && <p className="text-red-600 mt-2">{validationError}</p>}
// //         {isSuccess && <p className="text-green-600 mt-2">Details saved successfully!</p>}
// //         {isError && <p className="text-red-600 mt-2">Error saving details. Please try again.</p>}
// //       </form>
// //     </div>
// //   );
// // };

// // export default CardDetails;




// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateCardDetails } from '../Slices/cardSlice';
// import { useSubmitCardDetailsMutation } from '../Services/apiSlice';
// import { sendCardEmail } from '../Services/emailServices';
// import { AiOutlineExclamationCircle } from 'react-icons/ai';

// const CardDetails = () => {
//   const dispatch = useDispatch();
//   const cardDetails = useSelector((state) => state.card);
//   const [submitCardDetails, { isLoading, isSuccess, isError }] = useSubmitCardDetailsMutation();
//   const [validationError, setValidationError] = useState('');
//   const [emailStatus, setEmailStatus] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     dispatch(updateCardDetails({ name, value }));
//     if (validationError) setValidationError(''); // Clear validation error on input change
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (Object.values(cardDetails).some((value) => !value.trim())) {
//       setValidationError('All fields are required');
//       return;
//     }

//     try {
//       await submitCardDetails(cardDetails).unwrap();
//       console.log('Card Details submitted successfully');
//     } catch (error) {
//       console.error('Error submitting card details:', error);
//     }
//   };

//   const handleSendEmail = async () => {
//     const { email, due_date, holder_name, bank_name } = cardDetails;

//     if (!email) {
//       setEmailStatus('Recipient email is required.');
//       return;
//     }

//     const subject = `Payment Reminder for ${bank_name} Card`;
//     const message = `Dear ${holder_name},\n\nYour payment for the ${bank_name} card is due on ${due_date}. Please ensure timely payment to avoid penalties.\n\nThank you!`;

//     try {
//       await sendCardEmail({ email, subject, message });
//       setEmailStatus('Email sent successfully!');
//     } catch (error) {
//       setEmailStatus('Failed to send email. Please try again.');
//     }
//   };

//   return (
//     <div className="mx-auto p-6 bg-gray-200 shadow-md rounded-lg w-[80%] mt-6">
//       <h2 className="text-base font-bold mb-1 text-gray-600 flex items-center gap-1">
//         <span><AiOutlineExclamationCircle /></span>Card Details
//       </h2>
//       <div className="border-b border-gray-500"></div>
//       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
//         {Object.keys(cardDetails).map((field) => (
//           <div key={field}>
//             <label className="block text-gray-500 font-medium capitalize">
//               {field.replace('_', ' ')}
//             </label>
//             {field === 'due_date' ? (
//               <input
//                 type="date"
//                 name={field}
//                 value={cardDetails[field]}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded-md outline-none"
//               />
//             ) : field === 'status' ? (
//               <select
//                 name={field}
//                 value={cardDetails[field]}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded-md outline-none"
//               >
//                 <option value="">Select status</option>
//                 <option value="Active">Active</option>
//                 <option value="Inactive">Inactive</option>
//               </select>
//             ) : (
//               <input
//                 type="text"
//                 name={field}
//                 value={cardDetails[field]}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded-md outline-none"
//               />
//             )}
//           </div>
//         ))}
//         <div className='col-span-1 md:col-span-2'>
//         <button
//           type="submit"
//           className="w-full bg-[#192236] text-white py-2 rounded-md font-semibold"
//           disabled={isLoading || isSuccess}
//         >
//           {isLoading ? 'Saving...' : 'Save Details'}
//         </button>
//         </div>
//       </form>
//       {/* <div className="mt-4">
//         <button
//           onClick={handleSendEmail}
//           className="bg-blue-500 text-white py-2 px-4 rounded-md"
//         >
//           Send Reminder Email
//         </button>
//         {emailStatus && <p className="mt-2 text-gray-700">{emailStatus}</p>}
//       </div> */}
//       {validationError && <p className="text-red-600 mt-2">{validationError}</p>}
//       {isSuccess && <p className="text-green-600 mt-2">Details saved successfully!</p>}
//       {isError && <p className="text-red-600 mt-2">Error saving details. Please try again.</p>}
//     </div>
//   );
// };

// export default CardDetails;


import React from 'react'
import CardDetails from '../Components/Card'

const Card = () => {
  return (
    <div>
      <CardDetails/>
    </div>
  )
}

export default Card
