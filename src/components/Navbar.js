import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <div className="navbar">
            <Link to="/Home">Home</Link>
            <Link to="/Skills & Objecives">Skills & Objecives</Link>
            <Link to="/Trainings">Trainings</Link>
            <Link to="/Work history">Work history</Link>
            <Link to="/Education">Education</Link>
            <Link to="/More about">More about</Link>
            <Link to="/Hobbies">Hobbies</Link>
            <Link to="/Contact">Contact</Link>
        </div>
    );
}