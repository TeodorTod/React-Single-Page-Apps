import KatieZ from "../../images/KatieZ.png"
import star from "../../images/star.png"
import "./Card.css";

const Card = () => {
    return (
        <section className="card-section">
            <img className="card-img" src={KatieZ} alt="KatieZ" />
            <div className="card-stats">
                <img className="card-star" src={star} alt="star" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </section>

    );
}

export default Card