import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { db } from '../firebase';
import { collection, doc, getDoc } from 'firebase/firestore';

const ContactUs = () => {
  const form = useRef();
  const [donorName, setDonorName] = useState('');
  const [patientName, setPatientName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const donorId = form.current.donor_id.value;
        const patientId = form.current.patient_id.value;

        const donorDocRef = doc(db, 'donors', donorId);
        const patientDocRef = doc(db, 'patients', patientId);

        const donorDoc = await getDoc(donorDocRef);
        const patientDoc = await getDoc(patientDocRef);

        if (donorDoc.exists()) {
          const donorData = donorDoc.data();
          setDonorName(donorData.name);
          setDonorEmail(donorData.email);
        }

        if (patientDoc.exists()) {
          const patientData = patientDoc.data();
          setPatientName(patientData.name);
        }
      } catch (error) {
        console.error('Error fetching data from Firestore:', error);
      }
    };

    fetchData();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_f53o2x8', 'template_2v7hz6c', form.current, 'k66gRHKUt47jf7gQv')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Donor Id</label>
      <input type="text" name="donor_id" />
      <label>Patient Id</label>
      <input type="text" name="patient_id" />
      <p>Donor Name: {donorName}</p>
      <p>Donor Email: {donorEmail}</p>
      <p>Patient Name: {patientName}</p>
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;
