import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [patientName, setPatientName] = useState('');
  
  const sendEmail = (e) => {
    e.preventDefault();
  
    const templateParams = {
      from_name: donorName,
      from_email: donorEmail,
      patient_name: patientName
    };
  
    emailjs
      .send(
        'service_f53o2x8',
        'template_2v7hz6c',
        templateParams,
        'k66gRHKUt47jf7gQv'
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  
    setDonorName('');
    setDonorEmail('');
    setPatientName('');
  };

  return (
    <form onSubmit={sendEmail}>
      <label>Donor Name</label>
      <input
        type="text"
        name="donorName"
        value={donorName}
        onChange={(e) => setDonorName(e.target.value)}
      />

      <label>Donor Email</label>
      <input
        type="email"
        name="donorEmail"
        value={donorEmail}
        onChange={(e) => setDonorEmail(e.target.value)}
      />

      <label>Patient's Name</label>
      <input
        type="text"
        name="patientName"
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
      />

      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;
