import hero from "../../images/Group77.png"
import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero-section">
        <img className="img-hero" src={hero}/>
        <h1 className="h1-hero">Online Experiences</h1>
        <h3 className="h3-hero">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h3>
        </section>
    );
}

export default Hero;