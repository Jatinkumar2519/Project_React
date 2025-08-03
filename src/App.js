import React, { useState } from 'react';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextFile from './Components/TextFile';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const [mood, setMood] = useState("light");

  const toggle = () => {
    if (mood === "light") {
      setMood("dark");
      document.body.style.backgroundColor = 'rgba(49, 47, 54, 1)';
    } else {
      setMood("light");
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
      <Router>
        <Navbar name="Jatin" mood={mood} toggle={toggle} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextFile heading="Heyy enter here some text" mood={mood} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
