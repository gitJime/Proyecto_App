import React from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

const GoogleRegisterButton = ({ onSuccess, onFailure }) => {
  const responseGoogle = async (response) => {
    try {
      const tokenId = response.tokenId;
      const res = await axios.post('http://localhost:8800/api/auth/googleregister', { tokenId });
      onSuccess(res.data); // Llama a la función onSuccess pasada como prop
    } catch (error) {
      onFailure(error); // Llama a la función onFailure pasada como prop
    }
  };

  return (
    <GoogleLogin
      clientId="TU_CLIENT_ID_DE_GOOGLE"
      buttonText="Registrarse con Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleRegisterButton;
