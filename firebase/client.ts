import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCgDvpXHHqOn5Lg3Vxl7IdWORUmNfguD0o",
    authDomain: "prepwise-2a474.firebaseapp.com",
    projectId: "prepwise-2a474",
    storageBucket: "prepwise-2a474.firebasestorage.app",
    messagingSenderId: "121748449576",
    appId: "1:121748449576:web:550c4010ec7478377c081d",
    measurementId: "G-TR66MKQ5M8"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)