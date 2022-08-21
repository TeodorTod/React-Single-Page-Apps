import "./Main.css"

const Main = (props) => {
    return (
        <div className="main-div">
            <img className="img-main" src={props.imageUrl} />
            <div>
                <p className="country">{props.location}</p>
                <a className="direction" href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
            </div>
            <h1 className="name">{props.title}</h1>
            <p className="date">{props.startDate} - {props.endDate}</p>
            <article className="article">
                {props.description}
            </article>
        </div>
        
    );
}

export default Main;