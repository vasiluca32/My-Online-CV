import React from "react";
import "./Footer.css";
import { RiInstagramLine, RiSkypeLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedin, GrLocation } from "react-icons/gr";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

export default function Footer() {
    return (
        <div className="row">

            <div className="col-md-4">
                <div className="description">
                    <h3>Short description</h3>
                    <p>This is the final individual project taking part at Scoala Informala de IT. In the same time this is my CV</p>
                </div>
            </div>
            <div className="col-md-4">
                <h3>Contact</h3>
                <div className="contact">

                    <div>
                        <GoLocation className="icon" />
                        <p>Gheorghieni nr 32</p>
                    </div>
                    <div>
                        <AiOutlinePhone className="icon" />
                        <p>0748 794 107</p>
                    </div>
                    <div>
                        <AiOutlineMail className="icon" />
                        <p>lucavasileluca@gmail.com</p>
                    </div>
                    <div>
                        <RiSkypeLine className="icon" />
                        <p>vasiluca.32</p>
                    </div>



                </div>
            </div>
            <div className="col-md-4">
                <h3>Follow me</h3>
                <div className="social">
                    <a href="https://www.facebook.com/luca.vasileluca"> <FaFacebookF className="icon" /></a>
                    <a href="https://www.instagram.com/lucavasileluca/"><RiInstagramLine className="icon" /></a>
                    <a href="https://www.linkedin.com/in/vasile-luca-luca/"><GrLinkedin className="icon" /></a>
                </div>
            </div>
        </div>
    );
}