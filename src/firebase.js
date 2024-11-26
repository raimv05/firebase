import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyCjsWRvUQmt6r66vWZdq7zSTdA29bj2mAY",

    authDomain: "rd-sem-6fc25.firebaseapp.com",
  
    projectId: "rd-sem-6fc25",
  
    storageBucket: "rd-sem-6fc25.firebasestorage.app",
  
    messagingSenderId: "223793804496",
  
    appId: "1:223793804496:web:b177f7b226949d02a55ad5",
  
    measurementId: "G-B8JDDRGQRL"
  

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore
const auth = getAuth(app); // Initialize Authentication
const analytics = getAnalytics(app); // Initialize Analytics (optional)

// Export correctly initialized variables
export { db, auth, analytics };
