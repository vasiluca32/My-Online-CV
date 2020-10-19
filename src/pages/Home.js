import React from "react";
import "./Home.css";
import Wallpaper from "../wallpaper-office.png"

export default function Home() {

    return (
        <div className="home-container">
            <div className="home-wrapper">
                <img className="wallpaper" src={Wallpaper} alt="wallpaper"></img>
                <div className="home-text">
                    <h1>WORK HARD IN SILENCE,<br></br>LET YOUR SUCCESS BE YOUR SOUND</h1>
                </div>
            </div>
        </div>
    )
}