import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./Components/auth/login";
import ProtectedRoute from "./Components/protectedRoutes";

import Dashboard from "./Components/Dashboard/dashBoard";
import CarBookingForm from "./Components/Carbooking/carBooking";
import CarDetailsForm from "./Components/Car/Car";

import FuelingAndMaintenanceForm from "./Components/CarFuel/carFuel";
import CarMaintenanceForm from "./Components/Carmaintenance/carMaintainance";
import CarBookingList from "./Components/Carbooking/carBookingList";
import CarDetailsTable from "./Components/Car/carList";
import CardPaymentList from "./Components/Card/cardList";
import FuelingList from "./Components/CarFuel/carFuelingList";
import CarMaintenenceList from "./Components/Carmaintenance/carMaintenanceList";
import CardDetails from "./Components/Card/Card";
import SignUpForm from "./Components/Signup/signUp";
import RootLayout from "./_root/RootLayout";

const router = createBrowserRouter([
	{
		path:"/login",
		element:<LoginPage/>
	},
		{
				path: "/SignUp",

				element: <SignUpForm />,
			},
	{
		path: "/",
		element: (
		  <ProtectedRoute>
			<RootLayout />
		  </ProtectedRoute>
		),
		children: [
			
			{
				path: "/",
				element: <Dashboard />,
			},

			
			{
				path: "/car-booking",

				element: <CarBookingForm />,
			},
			{
				path: "/car-bookingList",

				element: <CarBookingList />,
			},
			
			{
				path: "/car-Detail",

				element: <CarDetailsForm />,
			},
			{
				path: "/car-DetailList",

				element: <CarDetailsTable />,
			},
			{
				path: "/card-Details",

				element: <CardDetails />,
			},
			{
				path: "/card-List",

				element: <CardPaymentList />,
			},
			{
				path: "/car-fuel",

				element: <FuelingAndMaintenanceForm />,
			},
			{
				path: "/car-fuelingList",

				element: <FuelingList />,
			},
			{
				path: "/car-mainteinance",

				element: <CarMaintenanceForm />,
			},
			{
				path: "/maintenance-List",

				element: <CarMaintenenceList />,
			},
			
		
		],
	},
]);

export default router;
