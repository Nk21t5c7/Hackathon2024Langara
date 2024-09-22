
  // Import the functions you need from the SDKs you need
// import { get } from "http";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.x.x/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1WB3e5kPyxbh344A1XOwn7E40cZl_vnc",
    authDomain: "langara-hackathon-2024.firebaseapp.com",
    projectId: "langara-hackathon-2024",
    storageBucket: "langara-hackathon-2024.appspot.com",
    messagingSenderId: "259865624054",
    appId: "1:259865624054:web:a52f5be6378424fe50dbd7",
};
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
  // Function to fetch pets data
export async function getPets() {
    const petsCollection = collection(db, "pets");
    const petsSnapshot = await getDocs(petsCollection);
    const petsList = petsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
}));
    console.log(petsList);
    return petsList;
}
  // Call the function
