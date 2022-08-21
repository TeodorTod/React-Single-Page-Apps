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
                    {...x}

                />
                )}
            </section>
        </div>
    );
}

export default App;
