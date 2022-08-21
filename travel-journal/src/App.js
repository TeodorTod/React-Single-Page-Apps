import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import data from "./data.js";

function App() {
    let singleData = data;
    return (
        <div>
            <Header />
            <section className='trip'>
            {singleData.map(x => 
                <Main
                    key={x.title}
                    {...x}
                />
            )}
            </section>
        </div>
    );
}

export default App;
