import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <div className="navbar">
            <Link className="navbar-brand" to="/Home">
                Home
            </Link>
            <a href="#contact">Skills & Objecives</a>
            <a href="#news">Trainings</a>
            <a href="#contact">Work history</a>
            <a href="#contact">Education</a>
            <a href="#contact">More about</a>
            <a href="#contact">Hobbies</a>
            <a href="#contact">Contact</a>
        </div>
    );
}