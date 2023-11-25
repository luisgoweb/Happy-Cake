
import { Link } from "react-router-dom";
import { FaBirthdayCake, FaEnvelope } from 'react-icons/fa'; 
import './NavBar.css'; 

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="logo-container">
              <a className="navbar-brand" href="#">
                <span className="logo-text">Happy Cake</span>
                <FaBirthdayCake className="cake-icon" />
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <Link className="nav-link" to="/">
                Inicio <FaBirthdayCake className="icon-right" />
              </Link>
              <Link className="nav-link" to="/contacto">
                Contacto <FaEnvelope className="icon-right" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
