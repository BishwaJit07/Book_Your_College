// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfrnEjPt6rPtG56yBBlCNnkV-q2WDku5M",
  authDomain: "book-your-college.firebaseapp.com",
  projectId: "book-your-college",
  storageBucket: "book-your-college.appspot.com",
  messagingSenderId: "485548486121",
  appId: "1:485548486121:web:22e18d56b2e95bae966f78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;