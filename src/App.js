import {useEffect} from "react"
import {useState} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
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
    <Router>
      <div className="App">
        <Start />
        <Header />
        <Routes>
          <Route exact path="/" element={<MainPage />}>
            {/* <MainPage /> */}
          </Route>

          <Route path="/hobbies" element={<SecondPage />}>
            {/* <SecondPage /> */}
          </Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
