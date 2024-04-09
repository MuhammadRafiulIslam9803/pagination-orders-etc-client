// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXCFYBuZbvWIyEtXWX7Pm1FfRWqGUok3Q",
  authDomain: "pagination-and-jwt-inproducts.firebaseapp.com",
  projectId: "pagination-and-jwt-inproducts",
  storageBucket: "pagination-and-jwt-inproducts.appspot.com",
  messagingSenderId: "919678554186",
  appId: "1:919678554186:web:5c4ed7941c2e290cec56b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;