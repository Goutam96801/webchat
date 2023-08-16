// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP6rY8sJZ0_fS3S1n0UGlnODPn9Z0Sm0E",
  authDomain: "webchat-f8f50.firebaseapp.com",
  projectId: "webchat-f8f50",
  storageBucket: "webchat-f8f50.appspot.com",
  messagingSenderId: "313655220984",
  appId: "1:313655220984:web:59542d03b8b999eaec390d",
  measurementId: "G-EBHLL7SC0K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

