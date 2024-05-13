import { Link } from 'react-router-dom';
import './login.scss';
import { useState } from 'react';
import axios from 'axios';


export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e : any) => {
    e.preventDefault()
    axios.post("http://localhost:8800/register", {name, email, password})
    .then(result => console.log(result))
    .catch(err=> console.log(err))
  }

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <h1>ByCicling</h1>
        </div>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Registro</h1>
          <input
            placeholder="Nombre usuario"
            name = "name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Correo electronico"
            name = "email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            name = "password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton">
            Registrarme
          </button>
          <span>
            <Link to="/login">
            <b>Ya tengo una cuenta</b>
            </Link>
          </span>
          <small>
            <a>Acerca de</a>.
          </small>
        </form>
      </div>
    </div>
  );
};