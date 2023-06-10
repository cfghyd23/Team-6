const firebase = require('firebase/app');
require('firebase/database');

// Initialize Firebase
const firebaseConfig = {
    // Your Firebase configuration
};

firebase.initializeApp(firebaseConfig);

// Retrieve donor data
const donorRef = firebase.database().ref('donors');
donorRef.once('value', snapshot => {
    const donorData = snapshot.val();

    const donorList = {};

    Object.entries(donorData).forEach(([donorNumber, donor]) => {
        donor.serialNumber = donorNumber;
        donorList[donorNumber] = donor;
    });

    // Accessing the donor list
    for (const donorNumber in donorList) {
        const donor = donorList[donorNumber];
        console.log(`Serial Number: ${donor.serialNumber}, Donor: ${donor.name}, Blood Group: ${donor.blood_group}`);
    }

    // Retrieve patient data
    const patientRef = firebase.database().ref('patients');
    patientRef.once('value', snapshot => {
        const patientData = snapshot.val();

        const patientList = {};

        Object.entries(patientData).forEach(([patientId, { blood_group }]) => {
            patientList[patientId] = blood_group;
        });

        // Accessing the patient list
        for (const patientId in patientList) {
            const bloodGroup = patientList[patientId];
            console.log(`Patient ID: ${patientId}, Blood Group: ${bloodGroup}`);
        }

        const finalList = {};

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

        console.log('Final List:', finalList);
    });
});
