import logo from "../../images/airbnb-logo.png"
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="nav-logo">
            <img src={logo} />
        </nav>
    );
}

export default Navbar;