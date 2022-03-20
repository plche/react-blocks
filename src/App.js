import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import SubContents from "./components/SubContents/SubContents";
import Advertisement from "./components/Advertisement/Advertisement";

function App() {
    return (
        <div className="App">
            <Header />
            <Navigation />
            <Main>
                <SubContents />
                <SubContents />
                <SubContents />
                <Advertisement />
            </Main>
        </div>
    );
}

export default App;
