import "./Header.css"
import logo from "../../images/Troll.png"

export default function Header() {
    return (
        <div className="main-div">
            <img className="logo" src={logo} alt="logo" />
            <p className="text-header">Meme Generator</p>
            <p className="project">React Project</p>
            <a className="other" href="https://github.com/TeodorTod" target="_blank">My Other Projects</a>
        </div>
    );
 }