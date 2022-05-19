import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvbIT9HNiAYmq7idDY4_vR6OkpDjbJzCs",
    authDomain: "todoapp-7b49a.firebaseapp.com",
    projectId: "todoapp-7b49a",
    storageBucket: "todoapp-7b49a.appspot.com",
    messagingSenderId: "165807493765",
    appId: "1:165807493765:web:634aa44ad3af78e2ba8fec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;