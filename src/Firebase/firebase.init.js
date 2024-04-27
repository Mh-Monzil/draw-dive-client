// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL8A7PGsW1E555nNxjQAcND1UBFckfuY8",
  authDomain: "draw-dive.firebaseapp.com",
  projectId: "draw-dive",
  storageBucket: "draw-dive.appspot.com",
  messagingSenderId: "765187082026",
  appId: "1:765187082026:web:39b1e59fc0b1f01aab4053"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);