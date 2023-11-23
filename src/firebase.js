// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLLfihG_OpbdteqgQ7Hfuf4Xtw-dqItd4",
  authDomain: "dharmastock-a04ea.firebaseapp.com",
  projectId: "dharmastock-a04ea",
  storageBucket: "dharmastock-a04ea.appspot.com",
  messagingSenderId: "202886282956",
  appId: "1:202886282956:web:6dc9092ee15e7797b74c69",
  measurementId: "G-0TW1554PEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);