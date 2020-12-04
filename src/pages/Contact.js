import axios from "axios";
import React, { useState } from "react";
import "./Contact.css"

const ContactForm = () => {

    const [state, setState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const [result, setResult] = useState(null);

    const sendEmail = event => {
        event.preventDefault();
        axios
            .post("http://localhost:9000/testAPI", { ...state })
            .then(response => {
                setResult(response.data);
                setState({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            })
            .catch(() => {
                setResult({
                    success: false,
                    message: 'Something went wrong. Try again later'

                });

            });
    };


    const onInputChange = event => {
        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value
        });
    };


    return (

        <div className="form-container">
            <h1>Contact Me</h1>
            {result && (
                <p className={`${result.success ? 'success' : 'error'}`}>
                    {result.message}
                </p>
            )}
            <div className="form-wrapper">
                <form className="form" onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name..."
                        value={state.name}
                        onChange={onInputChange} />


                    <label>Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email... "
                        value={state.email}
                        onChange={onInputChange} />

                    <label>Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="Your subject..."
                        value={state.subject}
                        onChange={onInputChange} />


                    <label>Text</label>
                    <textarea id="message" name="message"
                        value={state.message}
                        onChange={onInputChange}></textarea>
                    <input type="submit" value="submit" ></input>
                </form>
            </div>
        </div>
    )

}


export default ContactForm;



