import React, { Component } from "react";
import axios from "axios";
import "./index.php"
import "./Contact.css"


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            message: '',
            mailSent: false,
            error: null
        }

    }


    onfnameChange(event) {
        this.setState({ fname: event.target.value })
    }

    onlnameChange(event) {
        this.setState({ lname: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }




    handleSubmit(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url: "index.php",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    resetForm() {
        this.setState({
            fname: '',
            lname: '',
            email: '',
            message: '',
            mailSent: false,
            error: null
        })
    }



    render() {
        console.log(this.state)
        return (
            <div className="form-container">
                <h1>Contact Me</h1>
                <div className="form-wrapper">
                    <form className="form" action="#" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <label>First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."
                            value={this.state.fname}
                            onChange={this.onfnameChange.bind(this)} />
                        <label>Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."
                            value={this.state.lname}
                            onChange={this.onlnameChange.bind(this)} />


                        <label>Email</label>
                        <input type="email" id="email" name="email" placeholder="Your email"
                            value={this.state.email}
                            onChange={this.onEmailChange.bind(this)} />


                        <label>Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.."
                            onChange={this.onMessageChange.bind(this)}
                            value={this.state.message}></textarea>
                        <button type="submit" value="Submit" >Submit</button>
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