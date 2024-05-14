// GoogleLoginButton.js

import React from "react";
import firebase from "./firebase";

const GoogleLoginButton = ({ onSuccess }) => {
  const handleGoogleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      const user = result.user;
      onSuccess(user); // Llama a la función onSuccess con el usuario
    } catch (error) {
      console.error("Error al autenticar con Google:", error);
    }
  };

  return (
    <button onClick={handleGoogleSignIn}>
      Iniciar sesión con Google
    </button>
  );
};

export default GoogleLoginButton;
