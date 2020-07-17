import React from "react";
import "./Pages.css"
import Fsega from "../Fsega.png"

export default function Education() {

    return (
        <div className="section-container">
            <div className="section-container-header">
                <h1>Education</h1>
                <br></br>
            </div>
            <div className="section-wrap">
                <div className="section">
                    <div className="company-logo">
                        <img src={Fsega} alt="company-logo"></img>
                    </div>
                    <div className="text">
                        <h3>Babes-Bolyai University</h3>
                        <br></br>
                        <div className="role-location">
                            <h5>Master degree Business Administration in Tourism</h5>
                            <p>2014 - 2016 | 2 years</p>
                            <p>Cluj, Romania</p>
                        </div>
                        <br></br>
                        <p>I liked very much what I've learned for Bachelor and I wanted to know even more, here is the reason why I followed the same field for Masters</p>
                    </div>
                </div>
                <div className="section">
                    <div className="company-logo">
                        <img src={Fsega} alt="company-logo"></img>
                    </div>
                    <div className="text">
                        <h3>Babes-Bolyai University</h3>
                        <br></br>
                        <div className="role-location">
                            <h5>Bachelor's degree Trade, Tourism and Services</h5>
                            <p>2011 - 2014 | 3 years</p>
                            <p>Cluj, Romania</p>
                        </div>
                        <br></br>
                        <p>After graduating High School in economics, I taught that it would be a logical decision to continue my studies in the same field and I followed the specialisation in Trade Tourism and Services.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}