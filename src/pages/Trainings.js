import React from "react";
import "./Pages.css";
import Scoalalogo from "../../src/Scoala-logo.jpg"

export default function Trainings() {

    return (
        <div className="section-container">
            <div className="section-container-header">
                <h1>Trainings</h1>
            </div>
            <div className="section-wrap">
                <div className="section">
                    <div className="company-logo">
                        <img src={Scoalalogo} alt="company-logo"></img>
                    </div>
                    <div className="text">
                        <h3>The Informal School of IT</h3>
                        <br></br>
                        <div className="role-location">
                            <h5>Web Development module</h5>
                            <p>Oct 2019 - May 2020 | 8 months</p>
                            <p>Cluj, Romania</p>
                        </div>
                        <br></br>
                        <ul>
                            <li>HTTP/S, TCP/IP, DNS protocols, Client-Server architectures, Browsers (DOM, page building, rendering and layout), Cookies.</li>
                            <li>HTML Standards, elements, Attributes, Tables, Form elements, SVG, Media, API’s – geolocation, local storage, app cache.</li>
                            <li>CSS Syntax, Box Model, Flexbox, Pseudo class and elements, Responsive (media queries), Bootstrap</li>
                            <li>JavaScript Syntax, Expressions and Operators, Variables and Types, Flow Control, Events, DOM, BOM, JSON, Client Storage, Coding Standards, Functions, Objects, ES6, AJAX</li>
                            <li>ReactJS Architecture, virtual DOM, Environment Setup, JSX, Props, State, Lifecycle, DOM and Component events.</li>
                            <li>GIT learned the principles and basic commands</li>
                        </ul>
                    </div>
                </div>
                <div className="section">
                    <div className="company-logo">
                        <img src={Scoalalogo} alt="company-logo"></img>
                    </div>
                    <div className="text">
                        <h3>The Informal School of IT</h3>
                        <br></br>
                        <div className="role-location">
                            <h5>Intro in IT</h5>
                            <p>May 2019 - July 2019 | 2 months</p>
                            <p>Cluj, Romania</p>
                        </div>
                        <br></br>
                        <ul>
                            <li>HTML, CSS and JavaScript basics</li>
                            <li>Types of testing, scenarios, test execution</li>
                            <li>SQL syntax</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}