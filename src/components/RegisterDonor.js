import React, { useState } from 'react';

const RegisterDonor = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Perform further actions with the form data
    // e.g., send it to a server or perform validation

    // Reset the form fields after submission
    setName('');
    setAge('');
    setWeight('');
    setGender('');
    setEmail('');
    setLocation('');
  };

  return (
    <div>
      <h2>Register Donor</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />

        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />

        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <br />

        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />

        <label>
          Location (geolocation):
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterDonor;
