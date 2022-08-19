import star from "../../images/star.png"
import "./Card.css";

const Card = (props) => {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    console.log(props);
    return (
        <section className="card-section">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-img" src={`../images/${props.coverImg}`} />
            <div className="card-stats">
                <img className="card-star" src={star} alt="star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </section>

    );
}

export default Card