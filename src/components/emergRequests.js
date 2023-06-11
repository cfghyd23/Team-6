import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs,query, where, onSnapshot } from 'firebase/firestore';


function EmergRequests() {
    const [patientList, setPatientList] = useState([]);

    useEffect(() => {
        const fetchPatients = async () => {
          const q = query(collection(db, 'Patients'), where('emergency', '==', true));
          const querySnapshot = await getDocs(q);
          const patients = querySnapshot.docs.map((doc) => doc.data());
          setPatientList(patients);
        };
    
        fetchPatients();
      }, []);
    
  return (
    <div className="table-container">
      <h1>Emergency Requests</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Blood Group</th>
            <th>Location</th>
            <th>Component</th>
            <th>Quantity</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
        {patientList.map((patient, index) => (
            <tr key={index}>
              <td>{patient.patientName}</td>
              <td>{patient.gender}</td>

              <td>{`${patient.location.latitude}° N, ${patient.location.longitude}° E`}</td>

              <td>{patient.bloodGroup}</td>
              <td>{patient.component}</td>
              <td>{patient.quantityReqd}</td>
              <td>{patient.mobileNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmergRequests;
