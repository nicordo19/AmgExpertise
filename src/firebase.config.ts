import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBixecWtMMeGAM1TLW4kAmsgXut7mB5FJM",
  authDomain: "amg-expertise.firebaseapp.com",
  projectId: "amg-expertise",
  storageBucket: "amg-expertise.firebasestorage.app",
  messagingSenderId: "601795248510",
  appId: "1:601795248510:web:a51a2fbd91b9140d06f32f",
  measurementId: "G-6JWFH4YMR7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
