import './styles.css';

const ButtonIcon = () => {
  return (
    <>
      <div className="button-icon">
          <input className="input-text" type="text" placeholder="Digite aqui sua busca."></input>
          <div>
              <button className="btn-btn">Buscar</button>
          </div>
      </div>
    </>
  );
};

export default ButtonIcon;
