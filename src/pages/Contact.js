import axios from "axios";
import React, { Component, useState } from "react";
import "./Contact.css"

class Contact extends Component {
    constructor(props) {
        super();
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            mailSent: false,
            error: null
        };
    }

    nameChange(event) {
        this.setState({ name: event.target.value })
    }

    subjectChange(event) {
        this.setState({ subject: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    resetForm() {
        this.setState({
            name: '',
            subject: '',
            email: '',
            message: '',
            mailSent: false,
            error: null
        })
    }


    sendEmail() {

        axios
            .post('http://localhost:3000/send', { ...this.state })
            .then(response => {

                this.setState({
                    name: '',
                    subject: '',
                    email: '',
                    message: '',
                });
                console.log(response)
            })



        // alert(this.state.name)

    }

    render() {

        return (
            <div className="form-container">
                <h1>Contact Me</h1>

                <div className="form-wrapper">
                    <form className="form" onSubmit={this.sendEmail.bind(this)}>
                        <label>Name</label>
                        <input type="text" id="name" name="name" placeholder="Your name..."
                            value={this.state.name}
                            onChange={this.nameChange.bind(this)} />


                        <label>Email</label>
                        <input type="email" id="email" name="email" placeholder="Your email... "
                            value={this.state.email}
                            onChange={this.onEmailChange.bind(this)} />

                        <label>Subject</label>
                        <input type="text" id="subject" name="subject" placeholder="Your subject..."
                            value={this.state.subject}
                            onChange={this.subjectChange.bind(this)} />


                        <label>Text</label>
                        <textarea id="subject" name="subject"
                            onChange={this.onMessageChange.bind(this)}
                            value={this.state.message}></textarea>
                        <button >button</button>
                        {/* <div>
                            {this.state.mailSent &&
                                <div>Thank you for contcting us.</div>
                            }
                        </div> */}
                    </form>
                </div>
            </div>
        )
    }
}


export default Contact;



