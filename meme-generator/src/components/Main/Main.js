import "./Main.css"
import memesData from "../../memesData";
import { useState } from "react";

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData)

    const memeHandler = (e) => {
        e.preventDefault();
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }
    return (
        <main>
            <form>
                <input className="first-input" type="text" placeholder="VIRUS SCAN?" />
                <input className="second-input" type="text" placeholder="AINT NOBODY GOT TIME FOT THAT" />
                <button className="button" onClick={memeHandler}>Get a new meme image 🖼</button>
                <div className="container-img">
                    <img className="div-img" src={meme.randomImage} />
                </div>

            </form>
        </main>
    );
}