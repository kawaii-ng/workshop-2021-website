// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7h2yrTu2RZGp-AKYwqgeYqSX4NZn61vQ",
  authDomain: "scratch-workshop-2021.firebaseapp.com",
  projectId: "scratch-workshop-2021",
  storageBucket: "scratch-workshop-2021.appspot.com",
  messagingSenderId: "1043209200727",
  appId: "1:1043209200727:web:dfdc158aebb3e3d6aeef12"
};

// Initialize Firebase
const mfirebase = initializeApp(firebaseConfig);
export const storage = getStorage(mfirebase)

export default mfirebase;