import React, { Component } from "react";
import "./Side-pannel.css"
import cvpic from "../../src/cv-pic.jpg"

class Pannel extends Component {
    constructor() {
        super();
        this.state = {
            display: false,
        };
    }
    burgerClick = () => {
        this.setState({ display: true })
    }
    minimzeClick = () => {
        this.setState({ display: false })
    }


    render() {
        return (
            <div className="container">
                <img onClick={this.burgerClick} className={this.state.display ? "burger-hide" : "burger"} alt="side-panel-menu" src="https://image.flaticon.com/icons/svg/3094/3094382.svg"></img>
                <div className="tip">
                    <p className="tip-text">Basic info</p>
                </div>
                <div className={this.state.display ? "container-show" : "container-hidden"}>

                    <svg onClick={this.minimzeClick} className="minimize" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M9.5 2.036a.5.5 0 0 1 .5.5v3.5h3.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5z" />
                        <path fillRule="evenodd" d="M14.354 1.646a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 1 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0zm-7.5 7.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0z" />
                        <path fillRule="evenodd" d="M2.036 9.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V10h-3.5a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    <div className="header-details">
                        <img className="cv-pic" alt="cv-pic" src={cvpic} ></img>
                        <div className="side-details">
                            <ul>
                                <li><span>Surname:</span> Vasile - Luca</li>
                                <li><span>Name:</span> Luca</li>
                                <li><span>Age:</span> 28 ani</li>
                                <li><span>City:</span> Cluj - Napoca</li>
                                <li><span>T:</span> 0748794107</li>

                            </ul>
                        </div>
                    </div>
                    <ul className="bottom-details">
                        <li><span>Current Employer:</span> Genpact</li>
                        <li><span>Current Role:</span> Senior Process Associate</li>
                        <li><span>Objective:</span> I am eager to start a career in web development field and to transform a hobby into a fulltime job.</li>
                    </ul>

                </div>
            </div>
        )
    }

}
export default Pannel;