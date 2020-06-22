import React from "react";
import "./Footer.css";
import { FaBeer } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


export default function Footer() {
    return (
        <div className="footer">
            <FaBeer />
            <FaFacebookF />
            <p>Footer</p>
        </div>
    );
}