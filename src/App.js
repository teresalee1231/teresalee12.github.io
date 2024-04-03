import {useEffect} from "react"
import Header from "./components/Header";
import About from "./components/About";
import Cardholder from "./components/Cardholder";
import Start from "./components/Start";
import Drawings from "./components/Drawings";
import './App.css';

function App() {
  return (
    <div className="App">
      <Start />
      <Header />
      <About />
      <Cardholder />
      {/* <Drawings /> */}
    </div>

  );
}

export default App;
