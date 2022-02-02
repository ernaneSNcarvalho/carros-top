import Navbar from 'components/Navbar';
import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-image-container">
            <MainImage />
          </div>
          <div className="home-content-container">
            <h1>O carro perfeito para você.</h1>
            <p>
              Conheça os nossos carros e dê mais um passo na realização do seus
              sonhos.
            </p>
          </div>
        </div>
        <div className="card-nav">
        <button className="btn-main">Ver catálogo</button>
        <p>Começe agora a navegar.</p>
        </div>
      </div>
    </>
  );
};

export default Home;
