import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
