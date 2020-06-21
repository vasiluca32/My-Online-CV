import React, { Component } from "react";
import "./Side-pannel.css"

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
                <img onClick={this.burgerClick} className={this.state.display ? "burger-hide" : "burger"} alt="ceva" src="https://lh3.googleusercontent.com/proxy/OVO5Ux5kxbxwdox-sDoR9v2cSYLpzjhfhe_tJtHZfZWQW4-fj9nveXKCGt1uAbAyHwzxsfjCWFqqGfqglzQ2tYOL5xztie4Sfw35CTBgOUaH8vezubFy4IIMMvdWkh4sHbol92c28PEbZA"></img>
                <div className={this.state.display ? "container-show" : "container-hidden"}>
                    {/* <img onClick={this.minimzeClick} alt="minimize" className="minimize" src="data:image/jpeg;base64,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" ></img> */}
                    <svg onClick={this.minimzeClick} className="minimize" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M9.5 2.036a.5.5 0 0 1 .5.5v3.5h3.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5z" />
                        <path fillRule="evenodd" d="M14.354 1.646a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 1 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0zm-7.5 7.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0z" />
                        <path fillRule="evenodd" d="M2.036 9.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V10h-3.5a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    <div className="header-details">
                        <img className="cv-pic" alt="poza-cv" src="https://media-exp1.licdn.com/dms/image/C5603AQFGDFMxgfzBQA/profile-displayphoto-shrink_200_200/0?e=1598486400&v=beta&t=sytgf3rVDq30oOtt7zWox5cJFt6jpWNN52YaylixOHk"></img>
                        <div className="side-details">
                            <ul>
                                <li><span>Nume:</span> Luca</li>
                                <li><span>Prenume:</span> Vasile - Luca</li>
                                <li><span>Varsta:</span> 28 ani</li>
                                <li><span>Oras:</span> Cluj - Napoca</li>
                                <li><span>Tel:</span> 0748794107</li>

                            </ul>
                        </div>
                    </div>
                    <p>detalii despre mine</p>
                </div>
            </div>
        )
    }

}
export default Pannel;