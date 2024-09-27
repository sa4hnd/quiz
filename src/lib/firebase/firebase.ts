import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDA3x_PxP24hWUIDZgJohTpXyxfxk4Mouo",
  authDomain: "quiz-a8740.firebaseapp.com",
  projectId: "quiz-a8740",
  storageBucket: "quiz-a8740.appspot.com",
  messagingSenderId: "739525484124",
  appId: "1:739525484124:web:df249a7b6a38a0ba685099",
  measurementId: "G-TDEXJ87YJY"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Initialize Analytics and export it
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

export { app, auth, db, storage, analytics };
