import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import firebase from 'firebase/app';
import 'firebase/firestore';


export const ContactUs = () => {
    const form = useRef();
    const [donorName, setDonorName] = useState('');
    const [patientName, setPatientName] = useState('');
    const [donorEmail, setDonorEmail] = useState('');

    useEffect(()=> {
        const fetchData = async() => {
            try{
                const donorId = form.current.donor_id.value;
                const patientId = form.current.patient_id.value;
                const db = firebase.firestore();

                const donorDoc = await db.collection('donors').doc(donorId).get();
                const donorData = donorDoc.data();
                setDonorName(donorData.name);
                setDonorEmail(donorData.email);

                const patientDoc = await db.collection('patients').doc(patientId).get();
                const patientData = patientDoc.data();
                setPatientName(patientData.name);
              } catch (error) {
                console.error('Error fetching data from Firestore:', error);
              }

            };
            fetchData();
        },[]);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_f53o2x8', 'template_2v7hz6c', form.current, 'k66gRHKUt47jf7gQv')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
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
  )
}

export default ContactUs
