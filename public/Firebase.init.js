// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhAlv9S8a7Bk8Wu1aNRvqC2vrx4zyQ7KU",
    authDomain: "warehouse-668ea.firebaseapp.com",
    projectId: "warehouse-668ea",
    storageBucket: "warehouse-668ea.appspot.com",
    messagingSenderId: "689567689218",
    appId: "1:689567689218:web:f80168047ad34c61d0551b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;