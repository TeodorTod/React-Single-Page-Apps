import Card from "./components/Card/Card";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import data from "./data";

function App() {
    let singleData = data;
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
            {singleData.map(x => <Card
                key={x.id}
                title={x.title}
                price={x.price}
                coverImg={x.coverImg}
                location={x.location}
                rating={x.stats.rating}
                reviewCount={x.stats.reviewCount}

            />)}
            </section>
        </div>
    );
}

export default App;
