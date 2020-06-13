import React from "react";
import "./Work.css";

export default function Work() {

    return (
        <div className="work-container">
            <h1>Work history</h1>
            <div className="work-exp">
                <div className="company-logo">
                    <img src="https://media-exp1.licdn.com/dms/image/C560BAQE1SSNniDh_RQ/company-logo_200_200/0?e=2159024400&v=beta&t=54V8LU9f6RZWjDyKFLJZY3G692PNz6yVGKYTve5Ja48"></img>
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
            <div className="work-exp">
                <div className="company-logo">
                    <img src="data:image/png;base64,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"></img>
                </div>
                <div className="text">
                    <h3>Bombardier</h3>
                    <br></br>
                    <div className="role-location">
                        <h5>Accounts Payable Analyst</h5>
                        <p>June 2018 - Oct 2019 | 1 year and 5 months</p>
                        <p>Cluj, Romania</p>
                    </div>
                    <br></br>
                    <p>It was the logical move for me after 13 months in the Scanning team. I'm working in a team of 23 people where the main task is to process invoices in SAP by checking that all invoicing requirements are met by our vendors.</p>
                </div>
            </div>
            <div className="work-exp">
                <div className="company-logo">
                    <img src=""></img>
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
            <div className="work-exp">
                <div className="company-logo">
                    <img src=""></img>
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
            <div className="work-exp">
                <div className="company-logo">
                    <img src=""></img>
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
            <div className="work-exp">
                <div className="company-logo">
                    <img src=""></img>
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
            <div className="work-exp">
                <div className="company-logo">
                    <img src=""></img>
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
    )
}