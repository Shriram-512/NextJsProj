// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDyawv2AeuWmutuIcIgiqLAc901yq8irZk",
    authDomain: "my-app-4b49a.firebaseapp.com",
    projectId: "my-app-4b49a",
    storageBucket: "my-app-4b49a.appspot.com",
    messagingSenderId: "360510322041",
    appId: "1:360510322041:web:989eb6f453ca4f7bad2ba8",
    measurementId: "G-YDFR94TMLT"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

export {
    app, auth
}


