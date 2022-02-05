import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import './styles.css';
import Button from 'components/Button';
import ButtonIcon from 'components/ButtonIcon';

const Home = () => {
  return (
    <div className="home-container">
      
      <div className="base-card home-card">
        <div className="home-image-container">
          <MainImage />
        </div>
        <div className="home-content-container">
          <h1 className="text-title">O carro perfeito para você.</h1>
          <div className="text-text">
            <p>
              Conheça os nossos carros e dê mais um passo na realização do seus
              sonhos.
            </p>
          </div>
        </div>
      </div>
      <div className="card-nav">
        <div className="card-btn">
          <Button />
        </div>
        <p className="btn-text">Começe agora a navegar.</p>
      </div>
    </div>
  );
};

export default Home;
