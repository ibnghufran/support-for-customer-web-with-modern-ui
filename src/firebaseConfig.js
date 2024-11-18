// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIp6hwSeVK8ucEbdZB9wVxF7-9HjwIA54",
  authDomain: "react-firebase-db-be0a1.firebaseapp.com",
  databaseURL: "https://react-firebase-db-be0a1-default-rtdb.firebaseio.com",
  projectId: "react-firebase-db-be0a1",
  storageBucket: "react-firebase-db-be0a1.firebasestorage.app",
  messagingSenderId: "995627206087",
  appId: "1:995627206087:web:3472741d8190f4749545e2",
  measurementId: "G-ST3JPF9QTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);