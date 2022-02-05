import './styles.css';
import CarImg from 'assets/images/car.png';

const ProductCard = () => {
    return (
        <div  className="base-card">
            <div>
                <img  className="img-card" src={CarImg} alt="carro" />
            </div>
            <div>
                <h6 className="text-card-title">Audi Supra TT</h6>
                <p className="text-card">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
            </div>
            <div>
                <button className="btn-card">COMPRAR</button>
            </div>
        </div>
    );
}

export default ProductCard;