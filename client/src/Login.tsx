import { useState } from "react";
import "./login.scss";
import { Link } from 'react-router-dom';

export default function Login() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <h1>ByCicling</h1>
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Iniciar Sesión</h1>
          <input
            type="email"
            name = "email"
            placeholder="Correo o numero telefonico"
            onChange={(e) => setName} 
          />
          <input
            type="password"
            placeholder="Contraseña"
          />
          <button className="loginButton">
            Iniciar
          </button>
          <span>
            No tienes una cuenta?
            <Link to="/register">
              <b>Registrate ahora.</b>
            </Link>
            
          </span>
          <small>
            <b>Aceca de</b>.
          </small>
        </form>
      </div>
    </div>
  );
}