import React, { useState } from 'react'
import firebase from "firebase/app";
import { db, auth } from '../firebase';
import { addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";

const Patients = () => {
    const [formData, setFormData] = useState({
      name: '',
      dob: '',
      gender: 'male',
      location: '',
      email: '',
      hospital: '',
      bloodgroup: 'A+',
      requiredDate: '',
      component: '',
      quantity: '',
      phone: '',
      previousRequestDate: '',
      joinBridgeProgram: false,
      emergency: false,
    });
  
    const patientsCollectionRef = collection(db, 'Patients');
  
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
        const patientId = auth.currentUser?.uid;
        const patientEmail = auth.currentUser?.email;
  
        await addDoc(patientsCollectionRef, {
          patientName: formData.name,
          gender: formData.gender,
          location: formData.location,
          dateOfBirth: formData.dob,
          bloodGroup: formData.bloodgroup,
          needWhen: formData.requiredDate,
          componentReqd: formData.component,
          quantityReqd: formData.quantity,
          mobileNo: formData.phone,
          bridgeProg: formData.joinBridgeProgram,
          emergency: formData.emergency,
          previousDate: formData.previousRequestDate,
          email: patientEmail,
          patient_Id: patientId,
        });
  
        setFormData({
          name: '',
          dob: '',
          gender: 'male',
          location: '',
          hospital: '',
          bloodgroup: 'A+',
          requiredDate: '',
          component: '',
          quantity: '',
          phone: '',
          previousRequestDate: '',
          joinBridgeProgram: false,
          emergency: false,
        });
      } catch (err) {
        console.log(err);
      }
    };
  

    



  return (
    <div>
    <div className="Heading">
    <h2>Medical Supply Request Form</h2>
  </div>
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        value={formData.name}
        onChange={handleChange}
      />
    </div>
    <div>
      <label htmlFor="dob">Date of Birth:</label>
      <input
        type="date"
        id="dob"
        name="dob"
        required
        value={formData.dob}
        onChange={handleChange}
      />
    </div>
    <div className="Gender">
      <label htmlFor="gender">Gender:</label>
      <div>
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          required
          checked={formData.gender === 'male'}
          onChange={handleChange}
        />
        <label htmlFor="male">Male</label>
      </div>
      <div>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          required
          checked={formData.gender === 'female'}
          onChange={handleChange}
        />
        <label htmlFor="female">Female</label>
      </div>
    </div>
    <div>
      <label htmlFor="location">Location (Geo Location):</label>
      <input
        type="text"
        id="location"
        name="location"
        required
        value={formData.location}
        onChange={handleChange}
      />
    </div>
    <div>
      <label htmlFor="hospital">Hospital Name:</label>
      <input
        type="text"
        id="hospital"
        name="hospital"
        required
        value={formData.hospital}
        onChange={handleChange}
      />
    </div>
    <div>
      <label htmlFor="bloodgroup">Blood Group:</label>
      <select
        id="bloodgroup"
        name="bloodgroup"
        required
        value={formData.bloodgroup}
        onChange={handleChange}
      >
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
      </select>
    </div>
    <div>
      <label htmlFor="required-date">Required Date:</label>
      <input
        type="date"
        id="required-date"
        name="requiredDate"
        required
        value={formData.requiredDate}
        onChange={handleChange}
      />
    </div>
    <div>
      <label htmlFor="component">Component Required:</label>
      <select
        id="component"
        name="component"
        required
        value={formData.component}
        onChange={handleChange}
      >
        <option value="">select</option>
        <option value="Whole Blood">Whole Blood</option>
        <option value="Packed Red Blood Cells">Packed Red Blood Cells</option>
        <option value="Fresh Frozen Plasma">Fresh Frozen Plasma</option>
        <option value="Single Donor Platelet">Single Donor Platelet</option>
        <option value="Platelet Poor Plasma">Platelet Poor Plasma</option>
        <option value="Platelet Rich Plasma">Platelet Rich Plasma</option>
        <option value="Cyroprecipate">Cyroprecipate</option>
        <option value="Single Donor Plasma">Single Donor Plasma</option>
        <option value="Plasma">Plasma</option>
        <option value="Cyro Poor Plasma">Cyro Poor Plasma</option>
        <option value="Random Donor Platelets">Random Donor Platelets</option>
        <option value="Platelets Additive Solution">Platelets Additive Solution</option>
        <option value="Sagm Packed RBC">Sagm Packed RBC</option>
        <option value="Irradiated RBC">Irradiated RBC</option>
        <option value="Leukoreduced RBC">Leukoreduced RBC</option>
      </select>
    </div>
    <div>
      <label htmlFor="quantity">Quantity Required in ml:</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        required
        value={formData.quantity}
        onChange={handleChange}
      />
    </div>
    <div>
      <label htmlFor="phone">Phone Number:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        required
        value={formData.phone}
        onChange={handleChange}
      />
    </div>
    <div>
      <label htmlFor="previous-request-date">Date of Previous Blood Request:</label>
      <input
        type="date"
        id="previous-request-date"
        name="previousRequestDate"
        value={formData.previousRequestDate}
        onChange={handleChange}
      />
    </div>
    <div className="Bridge">
      <input
        type="checkbox"
        id="join-bridge-program"
        name="joinBridgeProgram"
        checked={formData.joinBridgeProgram}
        onChange={handleChange}
      />
      <label htmlFor="join-bridge-program">Do you want to join the Bridge Program?</label>
    </div>
    <div className="Emergency">
      <input
        type="checkbox"
        id="emergency"
        name="emergency"
        checked={formData.emergency}
        onChange={handleChange}
      />
      <label htmlFor="emergency">Is it Emergency?</label>
    </div>
    <div>
      <input type="submit" value="Submit" />
    </div>
    </form>
    </div>
   
  )
}

export default Patients
