
import React, { useState } from "react";
import "./Contact.css"

const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");



    const sendEmail = async (e) => {
        e.preventDefault();
        console.log({ name, email, subject, message })
        const response = await fetch("/access", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ name, email, subject, message })
        });
        console.log({ name, email, subject, message })
        const resData = await response.json();
        console.log("response")
        if (resData.status === "success") {
            alert("Message Sent.");
            this.resetForm()
        } else if (resData.status === "fail") {
            alert("Message failed to send.")
        }
    };


    // function onInputChange(event) {
    //     const { name, value } = event.target;

    //     setState({
    //         ...state,
    //         [name]: value
    //     });
    // }


    return (

        <div className="form-container">
            <h1>Contact Me</h1>
            {/* {result && (
                <p className={`${result.success ? 'success' : 'error'}`}>
                    {result.message}
                </p>
            )} */}
            <div className="form-wrapper">
                <form className="form" onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name..."
                        value={name}
                        onChange={e => setName(e.target.value)} />


                    <label>Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email... "
                        value={email}
                        onChange={e => setEmail(e.target.value)} />

                    <label>Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="Your subject..."
                        value={subject}
                        onChange={e => setSubject(e.target.value)} />


                    <label>Text</label>
                    <textarea id="message" name="message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}></textarea>
                    <input type="submit" value="submit" ></input>
                </form>
            </div>
        </div>
    )

}


export default ContactForm;



