import star from "../../images/star.png"
import "./Card.css";

const Card = (props) => {
    let badgeText;
    if (props.x.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.x.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <section className="card-section">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-img" src={`../images/${props.x.coverImg}`} />
            <div className="card-stats">
                <img className="card-star" src={star} alt="star" />
                <span>{props.x.stats.rating}</span>
                <span className="gray">({props.x.stats.reviewCount}) • </span>
                <span className="gray">{props.x.location}</span>
            </div>
            <p>{props.x.title}</p>
            <p><span className="bold">From ${props.x.price}</span> / person</p>
        </section>

    );
}

export default Card