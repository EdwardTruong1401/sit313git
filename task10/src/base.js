import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyC-poBe9o8_K47okjAiMcZQqdPmDnUe0Lo",
    authDomain: "webdevdemo-2f14c.firebaseapp.com",
    databaseURL: "https://webdevdemo-2f14c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "webdevdemo-2f14c",
    storageBucket: "webdevdemo-2f14c.appspot.com",
    messagingSenderId: "14455999353",
    appId: "1:14455999353:web:c44f5a377ad35d7e837da8",
    measurementId: "G-M2PPFX82L5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);
export default app;
