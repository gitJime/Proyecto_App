import { useContext, useState } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

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
            placeholder="Correo electronico"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Iniciar
          </button>
          <span>
            No tienes una cuenta? 
            <b>Registrate ahora.</b>
          </span>
          <small>
            
            <b>Aceca de</b>.
          </small>
        </form>
      </div>
    </div>
  );
}