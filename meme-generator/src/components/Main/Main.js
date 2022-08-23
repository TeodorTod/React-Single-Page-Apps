import "./Main.css"
import memesData from "../../memesData";
import { useState } from "react";

export default function Main() {
    const [image, setImage] = useState('"http://i.imgflip.com/1bij.jpg"');

    const memeHandler = (e) => {
        e.preventDefault();
        const memesArr = memesData.data.memes;
        const randomImage = (memesArr[Math.floor(Math.random() * memesArr.length)].url);
        setImage(randomImage);
    }
    return (
        <main>
            <form>
                <input className="first-input" type="text" placeholder="VIRUS SCAN?" />
                <input className="second-input" type="text" placeholder="AINT NOBODY GOT TIME FOT THAT" />
                <button className="button" onClick={memeHandler}>Get a new meme image 🖼</button>
                <div className="container-img">
                    <img className="div-img" src={image} />
                </div>

            </form>
        </main>
    );
}