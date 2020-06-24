import React from "react";
import "./Footer.css";
import { RiInstagramLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";


export default function Footer() {
    return (
        <div className="row">

            <div className="col-md-4">
                <h3>Short description</h3>
                <p>This is the final individual project taking part at Scoala Informala de IT. In the same time this is my CV</p>
            </div>
            <div className="col-md-4">
                <h3>Contact</h3>
            </div>
            <div className="col-md-4">
                <h3>Follow me</h3>
                <div className="social">
                    <FaFacebookF className="icon" />
                    <RiInstagramLine className="icon" />
                    <GrLinkedin className="icon" />
                </div>
            </div>
        </div>
    );
}