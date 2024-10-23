import "./styles/service_card.css";

const Card = ({ title, description, image }) => {
    
    return (
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src={image} alt="Imagen de servicio" />
                    <h3>{title}</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>{description}</p>
                    <a href="#">Contáctanos</a>
                </div>
            </div>
        </div>
    )
}

export default Card;