import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';
import './LoginDonor.css';

const LoginDonor = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div className='sign-in-with-google-container'>
        <button className='googleButton-container' onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginDonor;
