import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PatientDetails.css';

const PatientDetails = ({ registrationId }) => {
  const { id } = useParams();
  const [patientDetails, setPatientDetails] = useState(null);

  useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        const response = await fetch(`http://41.188.172.204:30003/patients?Registration_ID=${registrationId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch patient details');
        }
        const patientData = await response.json();
        console.log('Patient details:', patientData); 
        setPatientDetails(patientData);
      } catch (error) {
        console.error('Error fetching patient details:', error);
      }
    };
  
    fetchPatientDetails();
  }, [registrationId]);
  

  if (!patientDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="patient-details-container">
      <h2 className="patient-details-heading">Patient Details</h2>
      <p className="patient-details-item">Country: {patientDetails.Country}</p>
      <p className="patient-details-item">Date of Birth: {patientDetails.Date_Of_Birth}</p>
      <p className="patient-details-item">Region: {patientDetails.Region}</p>
      <p className="patient-details-item">Ward: {patientDetails.ward}</p>
      <p className="patient-details-item">Emergence Contact Name: {patientDetails.Emergence_Contact_Name}</p>
      <p className="patient-details-item">Emergence Contact NumbeR: {patientDetails.Emergence_Contact_Number}</p>
      <p className="patient-details-item">Status: {patientDetails.Status}</p>
      <p className="patient-details-item">relationship: {patientDetails.relationship}</p>
      <p className="patient-details-item">patient merge {patientDetails.patient_merge}</p>
      <p className="patient-details-item">sms notification: {patientDetails.sms_notification}</p>
    </div>
  );
};

export default PatientDetails;
