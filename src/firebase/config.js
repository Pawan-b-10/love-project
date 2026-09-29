import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDIpiIsR7fdxoYt_m-Sqj3vUhhQ5UcjZFM",
    authDomain: "personal-project-aef73.firebaseapp.com",
    projectId: "personal-project-aef73",
    storageBucket: "personal-project-aef73.firebasestorage.app",
    messagingSenderId: "134006274964",
    appId: "1:134006274964:web:df67b7fffbfb6d5d24ed81",
    measurementId: "G-TZWQ0XFRY7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);