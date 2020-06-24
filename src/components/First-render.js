import React from "react";
import Picpic from "../../src/cv-picture.jpg"
import "../components/First-render.css"

export default function MyImage() {
    return (
        <div className="first-render-wrap">
            <img className="CV-pic" src={Picpic} alt="CV-poza"></img>

        </div>
    )
}