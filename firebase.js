// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHl6PQKYCyJdE25IzvRdhhvz4dA2gh8Z4",
    authDomain: "twatter-clone-17d09.firebaseapp.com",
    projectId: "twatter-clone-17d09",
    storageBucket: "twatter-clone-17d09.appspot.com",
    messagingSenderId: "683079269442",
    appId: "1:683079269442:web:7c8699e98d52495abd81db"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };