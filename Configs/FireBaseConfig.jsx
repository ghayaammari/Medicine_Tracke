// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7e3it7_IbnSinZwoZ2UE-OguhDPE1Dms",
  authDomain: "medecin-tracker.firebaseapp.com",
  projectId: "medecin-tracker",
  storageBucket: "medecin-tracker.firebasestorage.app",
  messagingSenderId: "1079619366150",
  appId: "1:1079619366150:web:1e2505586d32b9dc0b0287",
  measurementId: "G-GM5F2R2ZKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const  auth = getAuth(app)