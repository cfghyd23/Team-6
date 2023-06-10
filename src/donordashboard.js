import React from 'react';
import { db } from '../firebase';

const patientAssigned = () => {
    // Access donor data from Firebase Realtime Database
    const donorRef = database.ref('Donors');
    const donorList = {};

    donorRef.once('value', snapshot => {
        snapshot.forEach(childSnapshot => {
            const donor = childSnapshot.val();
            const donorNumber = childSnapshot.key;
            donor.serialNumber = donorNumber;
            donorList[donorNumber] = donor;
        });

        // Accessing the donor list
        for (const donorNumber in donorList) {
            const donor = donorList[donorNumber];
            console.log(`Serial Number: ${donor.serialNumber}, Donor: ${donor.name}, Blood Group: ${donor.blood_group}`);
        }

        // Access patient data from Firebase Realtime Database
        const patientRef = database.ref('Patients');
        const patientList = {};

        patientRef.once('value', snapshot => {
            snapshot.forEach(childSnapshot => {
                const patient = childSnapshot.val();
                const patientId = childSnapshot.key;
                patientList[patientId] = patient.blood_group;
            });

            // Accessing the patient list
            for (const patientId in patientList) {
                const bloodGroup = patientList[patientId];
                console.log(`Patient ID: ${patientId}, Blood Group: ${bloodGroup}`);
            }

            // Grouping donors by blood group
            const groupedDonors = {};

            Object.values(donorList).forEach(donor => {
                const { blood_group } = donor;

                if (!groupedDonors[blood_group]) {
                    groupedDonors[blood_group] = [];
                }

                groupedDonors[blood_group].push(donor);
            });

            // Assigning donors to patients
            const assignedDonors = [];
            const finalList = {};

            Object.keys(patientList).forEach(patientId => {
                const bloodGroup = patientList[patientId];
                const donorsForPatient = groupedDonors[bloodGroup];

                if (donorsForPatient && donorsForPatient.length > 0) {
                    const assignedDonorsForPatient = donorsForPatient
                        .filter(donor => !assignedDonors.includes(donor))
                        .slice(0, 10);

                    if (assignedDonorsForPatient.length > 0) {
                        finalList[patientId] = assignedDonorsForPatient;
                        assignedDonors.push(...assignedDonorsForPatient);
                    } else {
                        finalList[patientId] = 'No donor available';
                    }
                } else {
                    finalList[patientId] = 'No donor available';
                }
            });

            function findAssignedPatient(donorId) {
                for (const patientId in finalList) {
                    const assignedDonors = finalList[patientId];
                    const matchedDonor = assignedDonors.find(donor => donor.serialNumber === donorId);

                    if (matchedDonor) {
                        return patientList[patientId];
                    }
                }

                return 'Patient not found';
            }

            // Requesting donor id directly
            const donorId = firebase.auth().currentUser?.uid;
            const assignedPatient = findAssignedPatient(donorId);
            console.log('Assigned Patient:', assignedPatient);
        });
    });
}