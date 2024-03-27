// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Patients from './patients/Patients';
import PatientDetails from './patientDetails/PatientDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Patients />} />
        <Route path="/patient/:registrationId" element={<PatientDetails />} />
      </Routes>
    </Router>
  );
};

export default App;



