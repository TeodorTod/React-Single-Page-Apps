import earth from "../images/earth.png"
import "./Header.css";

export default function Header() {
    return (
        <div className="header-div">
           <img src={earth} alt="earth-img" /> 
        </div>
    );
}