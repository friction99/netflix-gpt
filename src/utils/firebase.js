// Import the functions you need from the SDKs you need
import { getAuth} from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW9r39fMb_ZfuzCGnSf8gkEtwkbu-a_Sw",
  authDomain: "netflix-gpt-d84aa.firebaseapp.com",
  projectId: "netflix-gpt-d84aa",
  storageBucket: "netflix-gpt-d84aa.appspot.com",
  messagingSenderId: "990080710363",
  appId: "1:990080710363:web:4c4be5ee92470cb4ab7efe",
  measurementId: "G-96LD1PGPWX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();