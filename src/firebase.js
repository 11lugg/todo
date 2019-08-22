import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Basic firebase configuration linking web application to database - see firebase documentation

const firebaseConfig = {
  apiKey: "AIzaSyD4AxAskL6yeEm-Km834v0F-_UMoITGBD8",
  authDomain: "todolist-50f78.firebaseapp.com",
  databaseURL: "https://todolist-50f78.firebaseio.com",
  projectId: "todolist-50f78",
  storageBucket: "todolist-50f78.appspot.com",
  messagingSenderId: "696544337471",
  appId: "1:696544337471:web:b60c3dc3aa1e6dde"
};

// Initialising firebase
firebase.initializeApp(firebaseConfig);

// Exporting connection to provider for google signin
export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  login_hint: "user@example.com"
});
// Exporting connection to database as a variable

export default firebase;
