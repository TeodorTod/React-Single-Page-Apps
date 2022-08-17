import Card from "./components/Card/Card";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import katieZ from "./images/KatieZ.png";

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card
                img={katieZ}
                rating={5.0}
                reviewCount={6}
                country="USA"
                title={"Life Lessons with Katie Zaferes"}
                price={136}
            />
        </div>
    );
}

export default App;
