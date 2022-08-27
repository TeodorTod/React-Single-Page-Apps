import "./Main.css"
import { useState } from "react";

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = useState([])

    useState(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(result => {
                setAllMemeImages(result.data.memes)
            })
    }, [])

    const memeHandler = (e) => {
        e.preventDefault();
        const memesArray = allMemeImages;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    const topTextChangeHandler = (e) => {
        setMeme(oldState => ({
            ...oldState,
            topText: e.target.value
        }))
    };

    const bottomTextChangeHandler = (e) => {
        setMeme(oldState => ({
            ...oldState,
            bottomText: e.target.value
        }))
    }

    return (
        <main>
            <form>
                <input className="first-input" type="text" placeholder="One does not simply" onChange={topTextChangeHandler}/>
                <input className="second-input" type="text" placeholder="Walk into Mordor" onChange={bottomTextChangeHandler} />
                <button className="button" onClick={memeHandler}>Get a new meme image 🖼</button>
                <div className="container-img">
                    <img className="div-img" src={meme.randomImage} />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>


            </form>
        </main>
    );
}