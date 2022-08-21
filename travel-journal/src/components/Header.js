import earth from "../images/earth.png"
import "./Header.css";

export default function Header() {
    return (
        <div className="header-div">
           <img className="img-header" src={earth} alt="earth-img" />
           <h1 className="header-h1">My travel journal</h1> 
        </div>
    );
}