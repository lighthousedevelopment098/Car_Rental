import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CarBookingForm from './Components/carBooking';
import CarDetailsForm from './Components/Car';
import FuelingAndMaintenanceForm from './Components/carFuel';
import CardDetails from './Components/Card';
import CarMaintenanceForm from './Components/carMaintainance';

function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to the Car Rental Service</h1>
      <Link to="/rent-car" className="text-blue-500 underline mt-4 block">
        Go to Rent a Car Form
      </Link>
    </div>
  );
}

function App() {
  return (
    
    <Router>
      <div className="container mx-auto">
        <nav className="flex justify-between py-4 px-6 bg-gray-800 text-white">
          <Link to="/" className="text-xl font-semibold">Home</Link>
          <Link to="/rent-car" className="text-xl font-semibold">Rent a Car</Link>
          <Link to="/car-detail" className="text-xl font-semibold">Car details</Link>
          <Link to="/car-fuel" className="text-xl font-semibold">Car fuel</Link>
          <Link to="/card-detail" className="text-xl font-semibold">Card details</Link>
          <Link to="/card-maintinance" className="text-xl font-semibold">Car Maintenance</Link>

        </nav>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rent-car" element={<CarBookingForm />} />
          <Route path="/car-detail" element={<CarDetailsForm />} />
          <Route path="/car-fuel" element={<FuelingAndMaintenanceForm />}
           />
           <Route path="/card-detail" element={< CardDetails/>}/>
           <Route path="/card-maintinance" element={< CarMaintenanceForm/>}/>

        </Routes>
    
      </div>
    </Router>
  );
}

export default App;
