import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';

function BloodBank() {
  const [bloodBankData, setBloodBankData] = useState([]);

  useEffect(() => {
    const bloodBankRef = collection(db, 'BloodBanks');
    const unsubscribe = onSnapshot(bloodBankRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      setBloodBankData(data);
    });

    return () => unsubscribe(); // Unsubscribe from the snapshot listener when the component unmounts
  }, []);

  return (
    
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Location</th>
              <th>A+</th>
              <th>A-</th>
              <th>AB+</th>
              <th>AB-</th>
              <th>B+</th>
              <th>B-</th>
              <th>O+</th>
              <th>O-</th>
            </tr>
          </thead>
          <tbody>
  {bloodBankData.map((bloodBank, index) => (
    <tr key={index}>
      <td>{bloodBank['Name']}</td>
      <td>{bloodBank['address']}</td>
      <td>{bloodBank['Location'] && `${bloodBank['Location'][0]}° N, ${bloodBank['Location'][1]}° E`}</td>
      <td>{bloodBank['A+']}</td>
      <td>{bloodBank['A-']}</td>
      <td>{bloodBank['AB+']}</td>
      <td>{bloodBank['AB-']}</td>
      <td>{bloodBank['B+']}</td>
      <td>{bloodBank['B-']}</td>
      <td>{bloodBank['O+']}</td>
      <td>{bloodBank['O-']}</td>
    </tr>
  ))}
</tbody>
        </table>
      </div>
    );
            }
export default BloodBank;
