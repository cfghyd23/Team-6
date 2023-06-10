import React from "react";
import './bg.css';

function WantToDonateBlood() {
  
  return (
    
    <div className="container form-container mt-3" style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1 className=" text-center">Donate Blood</h1>
      <form>
        <div className="mb-3">
        <div className="mb-3">
        <div className="mb-3">
          <label htmlFor="donorName" className="form-label">Donor Name</label>
          <input type="text" className="form-control" id="donorName" />
        </div>
          <label htmlFor="donorId" className="form-label">Donor ID</label>
          <input type="text" className="form-control" id="donorId" />
        </div>
          <label htmlFor="bloodGroup" className="form-label">Blood Group</label>
          <input type="text" className="form-control" id="bloodGroup" />
        </div>
        <div className="mb-3">
          <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
          <input type="date" className="form-control" id="dateOfBirth" />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender</label>
          <select className="form-select" id="gender">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="bridgeProg" />
          <label htmlFor="bridgeProg" className="form-check-label">Bridge Program</label>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNo" className="form-label">Phone Number</label>
          <input type="text" className="form-control" id="phoneNo" />
        </div>
        <div className="mb-3">
          <label htmlFor="emergency" className="form-label">Emergency Contact</label>
          <input type="text" className="form-control" id="emergency" />
        </div>
       
        <div className="mb-3">
          <label htmlFor="lastDonated" className="form-label">Last Donated</label>
          <input type="date" className="form-control" id="lastDonated" />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location</label>
          <input type="text" className="form-control" id="location" />
        </div>
        
        <button type="submit" className="btn btn-success ">Submit</button>
      </form>
    </div>
   
  );
}

export default WantToDonateBlood;
