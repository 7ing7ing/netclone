import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyAf3rXDuPaO6iWGjcBQT9R0xZv16biI8YQ",
  authDomain: "netclone-790b6.firebaseapp.com",
  projectId: "netclone-790b6",
  storageBucket: "netclone-790b6.appspot.com",
  messagingSenderId: "823241580703",
  appId: "1:823241580703:web:0b08cf2a9418a0082702aa",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
