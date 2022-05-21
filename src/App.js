import React from 'react'
import './App.css';
import Game from "./Components/Game";
import Home from "./Components/Home";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/game" element={<Game/>} />
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
