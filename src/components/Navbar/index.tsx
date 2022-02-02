import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-primary main-nav">
      <div className="navbar container-fluid main">
        <a href="link"  className="navbar-logo">
          <h4>Carros Top</h4>
        </a>
        <div className="nav-links navbar-link collapse navbar-collapse">
          <ul className="main-menu navbar-nav offset-md-2">
            <li className="navbar-link-home">
              <a  className="active" href="link">HOME</a>
            </li>
            <li className="navbar-link-catalogo">
              <a className="navbar-link-catalogo" href="link">Catálogo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
