// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  Firestore,
  collection,
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBJlSB-jLpZN3G-5297sz6CQc1t-f3__tQ",
  authDomain: "autod3sk.firebaseapp.com",
  projectId: "autod3sk",
  storageBucket: "autod3sk.appspot.com",
  messagingSenderId: "734345474475",
  appId: "1:734345474475:web:0e883073e4f398a6d2a2ee",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Get a list of cities from your database
export async function getSettings(db: Firestore) {
  const settingsCol = collection(db, "settings");
  const docRef = doc(settingsCol, "SOME_TEST_ID");
  const docSnapshot = await getDoc(docRef);
  return docSnapshot.data();
}
