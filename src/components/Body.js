import React from "react";
import "./Body.css"
import { Route } from "react-router-dom";
import Home from "../pages/Home"
import Skills from "../pages/Skills&Obj"
import Trainings from "../pages/Trainings"
import Work from "../pages/Work"
import Education from "../pages/Education"
import MoreAbout from "../pages/MoreAbout"
import Hobbies from "../pages/Hobbies"
import Contact from "../pages/Contact"


export default function Body() {
    return (
        <div className="body">
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Skills & Objecives" component={Skills} />
            <Route exact path="/Trainings" component={Trainings} />
            <Route exact path="/Work history" component={Work} />
            <Route exact path="/Education" component={Education} />
            <Route exact path="/More about" component={MoreAbout} />
            <Route exact path="/Hobbies" component={Hobbies} />
            <Route exact path="/Contact" component={Contact} />



        </div>
    );
}