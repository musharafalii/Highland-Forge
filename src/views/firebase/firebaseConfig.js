import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/database"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCddC858vJTt1j_QLFkOWVvuCwGDYTMgMQ",
    authDomain: "highland-forge.firebaseapp.com",
    projectId: "highland-forge",
    storageBucket: "highland-forge.appspot.com",
    messagingSenderId: "160248797225",
    appId: "1:160248797225:web:b7ae5a243617edbf982438",
    measurementId: "G-GKXE8D972W"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default firebase

