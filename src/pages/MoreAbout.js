import React from "react";
import "./Pages.css";
import "./About.css";

export default function MoreAbout() {

    return (
        <div className="about-container">
            <div className="section-container-header">
                <h1>More about me</h1>
                <br></br>
            </div>

            <div className="about-wrapper">
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEFhXqYPsj_sg/profile-displayphoto-shrink_200_200/0?e=1598486400&v=beta&t=S8ojLGSmb-fcEIK8kzlEw0tdHtKISTglzcfZILmcPA4" alt="cv-pic"></img>
                <div className="text-details">
                    <ul>
                        <li><span>Nume:</span> Luca</li>
                        <li><span>Prenume:</span> Vasile - Luca</li>
                        <li><span>Varsta:</span> 28 ani</li>
                        <li><span>Oras:</span> Cluj - Napoca</li>
                        <li><span>Tel:</span> 0748794107</li>

                    </ul>
                </div>

            </div>

            <div className="short-description">
                <p>     I am a positive and calm person with sense of humor guided by the philosophy of treating others as I would like to
                be treated. After graduating high school, I have done my best to gain experience and improve my skills hence I
                have work most of the time in parallel to my university and master studies. Being a sociable and ambitious person
                helped me a lot during my jobs in United States where I had the great opportunity to be part of “Work and Travel”
                Program over 3 summers. I can speak in 3 different languages: Romanian - Native, English - Advanced and Hungarian - Beginner. I always try to see a problem from more point of views, but moreover I am a hard
                working person willing to always learn new things.</p>
            </div>











        </div>
    )
}