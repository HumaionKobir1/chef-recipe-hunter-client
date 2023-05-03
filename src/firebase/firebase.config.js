// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqnGM1yAup6Jxt7YoTUf931bOBL3BB5LY",
  authDomain: "chef-recipe-hunter-2dfd9.firebaseapp.com",
  projectId: "chef-recipe-hunter-2dfd9",
  storageBucket: "chef-recipe-hunter-2dfd9.appspot.com",
  messagingSenderId: "1095988799438",
  appId: "1:1095988799438:web:1c656393a6198216822d9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;