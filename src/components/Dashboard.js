import React, { useState } from 'react';
import './Dashboard.css'; // Import the CSS file for styling

function Dashboard() {
  const [patientName, setPatientName] = useState('');
  const [anonymousMails, setAnonymousMails] = useState('');

  const fetchPatientData = () => {
    // Assume you have a function to retrieve the patient name from the backend
    // Replace the function call with your own implementation
    const retrievedPatientName = getPatientName();

    // Update the patient name state
    setPatientName(retrievedPatientName);

    // Assume you have a function to retrieve the anonymous mails from the backend
    // Replace the function call with your own implementation
    const retrievedAnonymousMails = getAnonymousMails();

    // Update the anonymous mails state
    setAnonymousMails(retrievedAnonymousMails);
  };

  // Example function to retrieve the patient name
  const getPatientName = () => {
    // Replace this with your implementation to fetch the patient name from the backend
    return "John Doe";
  };

  // Example function to retrieve the anonymous mails
  const getAnonymousMails = () => {
    // Replace this with your implementation to fetch the anonymous mails from the backend
    return "No anonymous mails available";
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <button className="fetch-btn" onClick={fetchPatientData}>Know your Patient</button>
      <div className="data-container">
        <label>Patient Name:</label>
        <span className="data">{patientName}</span>
      </div>
      <div className="data-container">
        <label>Anonymous Mails:</label>
        <span className="data">{anonymousMails}</span>
      </div>
    </div>
  );
}

export default Dashboard;
