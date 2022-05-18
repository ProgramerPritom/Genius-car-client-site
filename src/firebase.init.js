// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyCLGAIbYh8Ilb268GgL0BSLEHww2G1yXO4",
  authDomain:"genius-car-project-2ca87.firebaseapp.com",
  projectId:"genius-car-project-2ca87", 
  storageBucket:"genius-car-project-2ca87.appspot.com",
  messagingSenderId:"96476852454",
  appId:"1:96476852454:web:b73e6c8284dbf51f17cb27",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;