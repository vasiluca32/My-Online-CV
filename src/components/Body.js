import React from "react";
import "./Body.css"
import { Route } from "react-router-dom";
import Home from "../pages/Home"


export default function Body() {
    return (
        <div className="body">
            <Route exact path="/Home" component={Home} />
        </div>
    );
}