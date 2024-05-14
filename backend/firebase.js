import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxXC-q4XcB2R9R4e4LeJ6ELKI6ce9MbZY",
  authDomain: "aute-e0a28.firebaseapp.com",
  projectId: "aute-e0a28",
  appId: "1:662111124014:web:ec2a60356b652b6f20bdbf"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
