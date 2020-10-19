import React from "react";
import "./Pages.css";
import "./About.css";
import cvpic from "../cv-pic.jpg"

export default function MoreAbout() {

    return (
        <div className="about-container">
            <div className="section-container-header">
                <h1>More about me</h1>
                <br></br>
            </div>

            <div className="about-wrapper">
                <img src={cvpic} alt="cv-pic"></img>
                <div className="text-details">
                    <ul>
                        <li><span>Surname:</span> Vasile - Luca</li>
                        <li><span>Name:</span> Luca</li>
                        <li><span>Age:</span> 28 ani</li>
                        <li><span>City:</span> Cluj - Napoca</li>
                        <li><span>Tel:</span> 0748794107</li>
                        <li><span>E-mail:</span> vasilelucaluca@gmail.com</li>
                    </ul>
                </div>

            </div>

            <div className="short-description">
                <p>     I am a positive and calm person with sense of humor guided by the philosophy of treating others as I would like to
                be treated. After graduating high school, I have done my best to gain experience and improve my skills hence I
                have work most of the time in parallel to my university and master studies. Being a sociable and ambitious person
                helped me a lot during my jobs in United States where I had the great opportunity to be part of “Work and Travel”
                Program over 3 summers. I can speak 3 different languages: Romanian - Native, English - Advanced and Hungarian - Beginner. I always try to see a problem from more point of views, moreover I am a hard
                working person willing to always learn new things.</p>
            </div>


        </div>
    )
}