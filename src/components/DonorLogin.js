import './DonorLogin.css';
import './RegisterDonor'
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DonorLogin = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/RegisterDonor'); // Replace '/RegisterLogin' with the actual route for the RegisterLogin page
  };

  const handleLogin = () => {
    navigate('/LoginDonor'); // Replace '/LoginDonor' with the actual route for the LoginDonor page
  };

  return (
    <div>
      <div className="box">
        <h1>Donor Login</h1>
        <button onClick={handleRegister}>Register</button>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default DonorLogin;
