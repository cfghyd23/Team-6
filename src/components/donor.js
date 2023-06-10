import React, { useState } from 'react';
import { db, auth } from '../firebase';
import { addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';

const Donor = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: 'male',
    location: '',
    email: '',
    hospital: '',
    bloodgroup: 'A+',
    phone: '',
    previousDonatedDate: '',
    joinBridgeProgram: false,
    emergency: false,
  });

  const donorsCollectionRef = collection(db, 'Donors');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const donorId = auth.currentUser?.uid;
      const donorEmail = auth.currentUser?.email;

      await addDoc(donorsCollectionRef, {
        donorName: formData.name,
        dateOfBirth: formData.dob,
        gender: formData.gender,
        location: formData.location,
        bloodGroup: formData.bloodgroup,
        phoneNo: formData.phone,
        bridgeProg: formData.joinBridgeProgram,
        emergency: formData.emergency,
        lastDonated: formData.previousDonatedDate,
       email: donorEmail,
        donorId: donorId,
      });

      setFormData({
        name: '',
        dob: '',
        gender: 'male',
        location: '',
        email: '',
        hospital: '',
        bloodgroup: 'A+',
        phone: '',
        previousDonatedDate: '',
        joinBridgeProgram: false,
        emergency: false,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container form-container" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>Donate Blood</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="donorName" className="form-label">
            Donor Name
          </label>
          <input
            type="text"
            className="form-control"
            id="donorName"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bloodGroup" className="form-label">
            Blood Group
          </label>
          <input
            type="text"
            className="form-control"
            id="bloodGroup"
            name="bloodgroup"
            value={formData.bloodgroup}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dateOfBirth" className="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            className="form-control"
            id="dateOfBirth"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <select
            className="form-select"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="bridgeProg"
            name="joinBridgeProgram"
            checked={formData.joinBridgeProgram}
            onChange={handleChange}
          />
          <label htmlFor="bridgeProg" className="form-check-label">
            Bridge Program
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNo" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="phoneNo"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emergency" className="form-label">
            Emergency Contact
          </label>
          <input
            type="text"
            className="form-control"
            id="emergency"
            name="emergency"
            value={formData.emergency}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastDonated" className="form-label">
            Last Donated
          </label>
          <input
            type="date"
            className="form-control"
            id="lastDonated"
            name="previousDonatedDate"
            value={formData.previousDonatedDate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Donor;
