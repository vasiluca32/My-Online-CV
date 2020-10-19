import React from "react";
import "./Pages.css";
import "./Hobbies.css";
import { MdPersonalVideo, MdPets } from "react-icons/md";
import { IoIosFootball } from "react-icons/io";
import { GiHammerNails } from "react-icons/gi";

export default function Hobbies() {

    return (
        <div className="containerr">

            <div className="section-container-header">
                <h1>My hobbies</h1>
                <br></br>
            </div>

            <div className="hobbies">

                <div className="hobby-wrapper">
                    <div className="hobby">
                        <MdPersonalVideo className="icon-hobby" />
                        <h4>Programming</h4>
                        <p>Some time ago I discovered that I am passionate about computing and creating things from scratch.</p>
                    </div>
                    <div className="hobby">
                        <IoIosFootball className="icon-hobby" />
                        <h4>Football</h4>
                        <p>Besides this, I like being active and I am really passionate about playing football with my friends.</p>
                    </div>


                </div>
                <div className="hobby-wrapper">
                    <div className="hobby">
                        <GiHammerNails className="icon-hobby" />
                        <h4>Wood-work</h4>
                        <p>Living in the countryside I enjoy woodworking easy crafts...</p>
                    </div>

                    <div className="hobby">
                        <MdPets className="icon-hobby" />
                        <h4>Pet lover</h4>
                        <p>...and long walks through the forest with my rescued dogs.</p>
                    </div>

                </div>

            </div>

        </div>
    )
}