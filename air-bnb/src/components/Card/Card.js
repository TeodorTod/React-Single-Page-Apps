import star from "../../images/star.png"
import "./Card.css";

const Card = (props) => {
    return (
        <section className="card-section">
            <img className="card-img" src={`../images/${props.coverImg}`} />
            <div className="card-stats">
                <img className="card-star" src={star} alt="star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </section>

    );
}

export default Card