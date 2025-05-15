// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2VF4gWA-DbVUnK5hcstlZQRmyqcOVxPs",
  authDomain: "bakatku.firebaseapp.com",
  projectId: "bakatku",
  storageBucket: "bakatku.appspot.com", // perbaikan: domain storageBucket harus pakai `.appspot.com`
  messagingSenderId: "362559405930",
  appId: "1:362559405930:web:cdd9d0fd1227e490e9ef13",
  measurementId: "G-69JWVW75HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth & Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export for use in frontend
export { auth, provider };
