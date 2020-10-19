import React from "react";
import "./Footer.css";
import { RiInstagramLine, RiSkypeLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

export default function Footer() {
    return (
        <div className="row">

            <div className="col-md-4">
                <div className="description">
                    <h3>Short description</h3>
                    <p>This page represents my CV, and has been developed during mu training at <a id="link-scoala" href="https://scoalainformala.ro/" target="_blank">"Informal School of IT"</a> being my individual project.</p>
                </div>
            </div>
            <div className="col-md-4">
                <h3>Contact</h3>
                <div className="contact">
                    <div className="icons">
                        <div>
                            <GoLocation className="icon" />
                            <p>Cluj-Napoca</p>
                        </div>
                        <div>
                            <AiOutlinePhone className="icon" />
                            <p>0748 794 107</p>
                        </div>
                        <div>
                            <AiOutlineMail className="icon" />
                            <p>vasilelucaluca@gmail.com</p>
                        </div>
                        <div>
                            <RiSkypeLine className="icon" />
                            <p>vasi3290</p>
                        </div>
                    </div>


                </div>
            </div>
            <div className="col-md-4">
                <h3>Follow me</h3>
                <div className="social">

                    <a href="https://www.linkedin.com/in/vasile-luca-luca/" target="_blank"><GrLinkedin className="icon" /></a>
                    {/* <a href="https://www.facebook.com/luca.vasileluca"> <FaFacebookF className="icon" /></a>
                    <a href="https://www.instagram.com/lucavasileluca/"><RiInstagramLine className="icon" /></a> */}

                </div>
            </div>
        </div>
    );
}