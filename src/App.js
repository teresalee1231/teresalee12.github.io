import {useEffect} from "react"
import Header from "./components/Header";
import About from "./components/About";
import Cardholder from "./components/Cardholder";
import Start from "./components/Start";
import './App.css';

function App() {
  return (
    <div className="App">
      <Start />
      <Header />
      <About />
      <Cardholder />
    </div>

  );
}

export default App;
