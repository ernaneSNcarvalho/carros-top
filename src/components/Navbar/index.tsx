import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="navbar container-fluid main">
        <Link to="/" className="navbar-logo">
          <h4>Carros Top</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscatalog-navbar"
          aria-controls="dscatalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="nav-links navbar-link collapse navbar-collapse" id="dscatalog-navbar">
          <ul className="main-menu navbar-nav offset-md-2">
            <li className="navbar-link-home">
              <Link className="active" to="/">
                HOME
              </Link>
            </li>
            <li className="navbar-link-catalogo">
              <Link className="navbar-link-catalogo" to="/products">
                Catálogo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
