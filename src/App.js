import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { HashRouter as Router } from "react-router-dom";
import Pannel from "./components/Side-pannel"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Body />
        <Pannel />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
