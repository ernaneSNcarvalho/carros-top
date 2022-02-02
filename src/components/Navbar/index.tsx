import './styles.css';
import 'bootstrap/js/src/collapse.js';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="navbar container-fluid main">
        <a href="link" className="navbar-logo">
          <h4>Carros Top</h4>
        </a>
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
              <a className="active" href="link">
                HOME
              </a>
            </li>
            <li className="navbar-link-catalogo">
              <a className="navbar-link-catalogo" href="link">
                Catálogo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
