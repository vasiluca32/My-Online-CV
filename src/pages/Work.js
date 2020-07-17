import React from "react";
import "./Pages.css";
import Rao from "../Vila-Rao.png"
import Mcd from "../Mcd.png"
import Bombardier from "../Bombardier.png"

export default function Work() {

    return (
        <div className="section-container">
            <div className="section-container-header">
                <h1>Work history</h1>

            </div>

            <div className="section-wrap">
                <div className="section">
                    <div className="company-logo">
                        <img src="https://media-exp1.licdn.com/dms/image/C560BAQE1SSNniDh_RQ/company-logo_200_200/0?e=2159024400&v=beta&t=54V8LU9f6RZWjDyKFLJZY3G692PNz6yVGKYTve5Ja48" alt="company-logo"></img>
                    </div>
                    <div className="text">
                        <h3>Genpact</h3>
                        <br></br>
                        <div className="role-location">
                            <h5>Senior process associate</h5>
                            <p>Oct 2019 - present | 9 months</p>
                            <p>Cluj, Romania</p>
                        </div>
                        <br></br>
                        <p>I felt the need of a change, and it came from Genpact where I got the role of a senior analyst.</p>
                    </div>
                </div>
                <div className="section">
                    <div className="company-logo">
                        <img src={Bombardier} alt="company-logo"></img>
                    </div>
                    <div className="text">
                        <h3>Bombardier</h3>
                        <p>2 years and 9 months</p>
                        <br></br>
                        <div className="role-location">
                            <h5>Accounts Payable Analyst</h5>
                            <p>June 2018 - Oct 2019 | 1 year and 5 months</p>
                            <p>Cluj, Romania</p>
                        </div>
                        <br></br>
                        <p>It was the logical move for me after 13 months in the Scanning team. I'm working in a team of 23 people where the main task is to process invoices in SAP by checking that all invoicing requirements are met by our vendors.</p>
                        <br></br>
                        <br></br>
                        <div className="role-location">
                            <h5>Scanning Analyst</h5>
                            <p>Feb 2017 - May 2018 | 1 year and 4 months</p>
                            <p>Cluj, Romania</p>
                        </div>
                        <br></br>
                        <p>It was my first job after my last USA experience. I worked in a team of 7 people as a scanning analyst where the main task was to transform the invoices from paper into digital image so the Accounts Payable team will process them further.</p>
                    </div>
                </div>
                <div className="section">
                    <div className="company-logo">
                        <img alt="company-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_wbG1eypv5WoAlGooCYvYTt-n0YY5V_A9A-d72QSh6jGmXERd&usqp=CAU"></img>
                    </div>
                    <div className="text">
                        <h3>French Lick Resort</h3>
                        <br></br>
                        <div className="role-location">
                            <h5>International student of Work and Travel program</h5>
                            <p>Jul 2016 - Sept 2016 | 3 months</p>
                            <p>French Lick IN, USA</p>
                        </div>
                        <br></br>
                        <p>As it was my third experience in the United States and the second one at French Lick Resort it was not anything new for me in America, I returned there to meet my old friends and because it was the last chance to go to USA through this program. Mostly I worked as a restaurant server throughout the whole summer.</p>
                    </div>
                </div>
                <div className="section">
                    <div className="company-logo">
                        <img alt="company-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRyk1dQ4Bu0XIKKpDzDOF9TLNamp6DM94fzPNtUB1wUQ_L8m5c&usqp=CAU"></img>
                    </div>
                    <div className="text">
                        <h3>Hotel Opal</h3>
                        <br></br>
                        <div className="role-location">
                            <h5>Hotel Receptionist</h5>
                            <p>Dec 2015 - Jun 2016 | 7 months</p>
                            <p>Cluj, Romania</p>
                        </div>
                        <br></br>
                        <p>I worked as a night shift receptionist for a 4 star hotel. My main tasks were to welcome the guests, process the bookings, billing and cashing the guest services. I enjoyed verry much my time here because I had a verry good relationship with my co-workers and management.</p>
                    </div>
                </div>
                <div className="section">
                    <div className="company-logo">
                        <img alt="company-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_wbG1eypv5WoAlGooCYvYTt-n0YY5V_A9A-d72QSh6jGmXERd&usqp=CAU"></img>
                    </div>
                    <div className="text">
                        <h3>French Lick Resort</h3>
                        <br></br>
                        <div className="role-location">
                            <h5>International student of Work and Travel program</h5>
                            <p>June 2015 - Sept 2015 | 4 months</p>
                            <p>French Lick IN, USA</p>
                        </div>
                        <br></br>
                        <p>It was for the first time I came at French Lick, where I started as a steward, and by the end of the summer i used to be a server in the restaurant. In the same time I could pick up some shifts as housekeeping attendant, server assistant, food runner or banquet server.
As it was for the second time in USA I was used with the American culture and mentality, but i was really impressed about how such a big resort is managed. It was a pleasure to work in such a big team.</p>
                    </div>
                </div>
                <div className="section">
                    <div className="company-logo">
                        <img alt="company-logo" src={Rao}></img>
                    </div>
                    <div className="text">
                        <h3>Vila Rao</h3>
                        <br></br>
                        <div className="role-location">
                            <h5>Hotel Receptionist</h5>
                            <p>Feb 2015 - May 2015 | 4 months</p>
                            <p>Cluj, Romania</p>
                        </div>
                        <br></br>
                        <p>It was my first experience in the hotel industry so every day of work was like a lesson for me because it was a lot of informations and a lot of thing that I knew theoretically but I have never done them practically until then.</p>
                    </div>
                </div>
                <div className="section">
                    <div className="company-logo">
                        <img alt="company-logo" src={Mcd}></img>
                    </div>
                    <div className="text">
                        <h3>McDonald's</h3>
                        <br></br>
                        <div className="role-location">
                            <h5>International student of Work and Travel program</h5>
                            <p>June 2013 - Sept 2013 | 4 months</p>
                            <p>Courthouse NJ, USA</p>
                        </div>
                        <br></br>
                        <p>It was my first trip across the ocean which was a truelly exciting one. For me this summer was a sort of exam because I was alone with my girlfriend and we had to think about the food, rent, shopping. As we were paid with the minimum wage whe had to count every penny.
As a crew member at McDonald's i used to work in the kitchen with people from each corner of the world wich was an experience to remember.</p>
                    </div>
                </div>
            </div>

        </div>

    )
}