// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

// Replace with your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgb74gI2gcBG4DjpUS_-FcWX48r7qynlg",
  authDomain: "ecommerce-c3384.firebaseapp.com",
  projectId: "ecommerce-c3384",
  storageBucket: "ecommerce-c3384.appspot.com", // Corrected URL
  messagingSenderId: "570435492482",
  appId: "1:570435492482:web:aee7a17a23d70cfcbb329b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { database, auth };
