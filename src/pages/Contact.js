import axios from "axios";
import React, { Component, useState } from "react";
import { FaLessThanEqual } from "react-icons/fa";
import "./Contact.css"
import Example from "./modal"

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            mailSent: "",
            error: null,
            show: true,
            submitted: false

        };
        this.child = React.createRef();
    }

    nameChange(event) {
        this.setState({ name: event.target.value, submitted: false })
    }

    subjectChange(event) {
        this.setState({ subject: event.target.value, submitted: false })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value, submitted: false })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value, submitted: false })
    }

    setSubmitted() {
        this.setState({ submitted: true });
    }

    resetForm() {
        this.setState({
            name: '',
            subject: '',
            email: '',
            message: '',
            mailSent: "",
            error: null,
            show: true,
            submitted: false
        })
    }


    preCheck({ name, subject, email, message }) {
        if (name.length && subject.length && email.length && message.length > 0 && email.includes("@")) {
            return true
        } else {
            alert("Please check all highlighted fields!")
            return false
        }

    }

    sendEmail() {
        this.setSubmitted();
        const post = this.preCheck(this.state);
        if (post) {
            axios
                .post('http://localhost:8080/send', { ...this.state })
                .then(response => {
                    setResponseData(response.data)
                    console.log(response)

                }).catch((error) => {
                    console.log(error);

                })

            this.child.current.getAlert();
            this.resetForm();
        }
    }

    render() {

        return (

            <div className="form-container">
                <Example ref={this.child} />
                <h1>Contact Me</h1>

                <div className="form-wrapper">
                    <form className="form" >
                        <label>Name</label>
                        <input type="text" id="name" name="name" placeholder="Your name..."
                            value={this.state.name}
                            onChange={this.nameChange.bind(this)}
                            style={{
                                borderColor: this.state.submitted
                                    ? this.state.name
                                        ? "#ced4da"
                                        : "red"
                                    : "#ced4da",
                            }} />


                        <label>Email</label>
                        <input type="email" id="email" name="email" placeholder="Your email... "
                            value={this.state.email}
                            onChange={this.onEmailChange.bind(this)}
                            style={{
                                borderColor: this.state.submitted
                                    ? this.state.email.includes("@")
                                        ? "#ced4da"
                                        : "red"
                                    : "#ced4da",
                            }} />

                        <label>Subject</label>
                        <input type="text" id="subject" name="subject" placeholder="Your subject..."
                            value={this.state.subject}
                            onChange={this.subjectChange.bind(this)}
                            style={{
                                borderColor: this.state.submitted
                                    ? this.state.subject
                                        ? "#ced4da"
                                        : "red"
                                    : "#ced4da",
                            }} />


                        <label>Text</label>
                        <textarea id="subject" name="subject"
                            onChange={this.onMessageChange.bind(this)}
                            value={this.state.message}
                            style={{
                                borderColor: this.state.submitted
                                    ? this.state.message
                                        ? "#ced4da"
                                        : "red"
                                    : "#ced4da",
                            }}></textarea>
                        <button type="button" className="Submit-button"
                            onClick={this.sendEmail.bind(this)}>Submit</button>

                    </form>
                </div>

            </div >

        )
    }
}


export default Contact;



