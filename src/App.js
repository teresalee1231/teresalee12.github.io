import {useEffect} from "react"
import {useState} from 'react';
import Header from "./components/Header";
import Start from "./components/Start";
import MainPage from "./pages/MainPage";
import SecondPage from "./pages/SecondPage";
import './App.css';
import'./Page2.css';

function App() {

  const[isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped)
  };

  return (
    <div className="App">
      <Start />
      <Header />

      <div className=
          {`flip-card
            ${
              isFlipped ? "flipped" : ""
            }`}
      >

          <div className="card-content">
            <div className="card-front">
              <MainPage />

            </div>
            <div className="card-back">
              <SecondPage />
            </div>

        </div>
      </div>


      <div onClick={handleFlip}
      >
        <div className="testing">
          <p className="testing2">On the flip side</p>
        </div>
      </div>


    </div>

  );
}

export default App;
