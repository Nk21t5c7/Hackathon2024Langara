// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC1WB3e5kPyxbh344A1XOwn7E40cZl_vnc",
//   authDomain: "langara-hackathon-2024.firebaseapp.com",
//   projectId: "langara-hackathon-2024",
//   storageBucket: "langara-hackathon-2024.appspot.com",
//   messagingSenderId: "259865624054",
//   appId: "1:259865624054:web:a52f5be6378424fe50dbd7",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // test
// import { getFirestore, collection, addDoc } from "firebase/firestore";
// const db = getFirestore(app);
// async function testFirestore() {
//   try {
//     const docRef = await addDoc(collection(db, "test_collection"), {
//       name: "Test Data",
//       createdAt: new Date(),
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }
// testFirestore();

// // get data from database

// Test Firestore Connection
async function testFirestore() {
  try {
    const docRef = await addDoc(collection(db, "test_collection"), {
      name: "Test Data",
      createdAt: new Date(),
    });
    document.getElementById("output").innerText =
      "Document written with ID: " + docRef.id;
  } catch (error) {
    document.getElementById("output").innerText =
      "Error adding document: " + error;
  }
}

testFirestore(); // Call the function to test Firestore

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to add a pet
function addPet() {
  db.collection("pets")
    .add({
      name: "Buddy", // Example field: pet's name
      //   species: "Dog",        // Example field: species
      age: 3, // Example field: age
      //   owner: "John Doe"      // Example field: owner's name
    })
    .then((docRef) => {
      console.log("Pet added with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding pet: ", error);
    });
}

// Call the function to add a pet
addPet();
