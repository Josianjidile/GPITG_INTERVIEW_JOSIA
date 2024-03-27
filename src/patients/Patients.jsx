import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Patients.css';

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('http://41.188.172.204:30003/patients');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();
        const patientData = responseData.data;
        setPatients(patientData);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  console.log('Patients:', patients);

  return (
    <div>
      <h1>List of Patients</h1>
      <table>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Patient Number</th>
            <th>Guarantor Name</th>
            <th>Date of Birth</th>
            <th>Region</th>
            <th>Ward</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.id}>
              <td><Link to={`/patient/${patient.Registration_ID}`}>{patient.Patient_Name}</Link></td>
              <td>{patient.Emergence_Contact_Number}</td>
              <td>{patient.Sponsor_ID}</td>
              <td>{patient.Date_Of_Birth}</td>
              <td>{patient.Region}</td>
              <td>{patient.Ward}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Patients;
