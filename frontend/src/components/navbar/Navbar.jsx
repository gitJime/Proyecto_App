import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src=""
            alt=""
          />
          <Link to="/" className="link">
            <span>Inicio</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Eventos</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Inscripciones</span>
          </Link>
          <span>Inscripciones</span>
          <span>Resultados</span>
        </div>
        <div className="right" >
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Iniciar Sesión</span>
              <span onClick={() => dispatch(logout())}>Registrate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;