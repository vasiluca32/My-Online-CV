import React, { Component } from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: false,
            skills: false,
            work: false,
            education: false,
            more: false,
            hobbies: false,
            contact: false,
            video: false,
            dropdown: false,
        };
    }
    componentDidMount() {
    }

    home = () => {
        this.resetState();
        this.setState({
            home: true,
            dropdown: false,
        });
    }
    skills = () => {
        this.resetState();
        this.setState({
            skills: true,
            dropdown: false,
        });
    }
    trainings = () => {
        this.resetState();
        this.setState({
            trainings: true,
            dropdown: false,
        });
    }
    work = () => {
        this.resetState();
        this.setState({
            work: true,
            dropdown: false,
        });
    }
    education = () => {
        this.resetState();
        this.setState({
            education: true,
            dropdown: false,
        });
    }
    more = () => {
        this.resetState();
        this.setState({
            more: true,
            dropdown: false,
        });
    }
    hobbies = () => {
        this.resetState();
        this.setState({
            hobbies: true,
            dropdown: false,
        });
    }
    contact = () => {
        this.resetState();
        this.setState({
            contact: true,
            dropdown: false,
        });
    }

    video = () => {
        this.resetState();
        this.setState({
            video: true,
            dropdown: false,
        });
    }

    burger = () => {
        const currentState = this.state.dropdown;
        this.setState({ dropdown: !currentState })

    }

    resetState() {
        this.setState({
            home: false,
            skills: false,
            trainings: false,
            work: false,
            education: false,
            more: false,
            hobbies: false,
            contact: false,
            video: false,
        });
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <div className="navigare">
                <Link onClick={this.home} to="/Home" className={this.state.home ? "active" : "inactive"}><p>Home</p></Link>
                <div className="original-links">
                    <Link onClick={this.skills} to="/Skills & Objecives" className={this.state.skills ? "active" : "inactive"}><p>Skills & Objectives</p></Link>
                    <Link onClick={this.trainings} to="/Trainings" className={this.state.trainings ? "active" : "inactive"}><p>Trainings</p></Link>
                    <Link onClick={this.work} to="/Work history" className={this.state.work ? "active" : "inactive"}><p>Work history</p></Link>
                    <Link onClick={this.education} to="/Education" className={this.state.education ? "active" : "inactive"}><p>Education</p></Link>
                    <Link onClick={this.more} to="/More about" className={this.state.more ? "active" : "inactive"}><p>More about</p></Link>
                    <Link onClick={this.hobbies} to="/Hobbies" className={this.state.hobbies ? "active" : "inactive"}><p>Hobbies</p></Link>
                    <Link onClick={this.contact} to="/Contact" className={this.state.contact ? "active" : "inactive"}><p>Contact</p></Link>
                    <Link onClick={this.video} to="/Thank you" className={this.state.video ? "active" : "inactive"}><p>Thank you</p></Link>
                </div>
                <div className="burger-hidden" >

                    <img onClick={this.burger} src="https://image.flaticon.com/icons/svg/56/56763.svg" alt="burger-button"></img>

                    <div className={this.state.dropdown ? "dropdown-content-active" : "dropdown-content-inactive"}>
                        <Link onClick={this.skills} to="/Skills & Objecives" className={this.state.skills ? "active" : "inactive"}><p>Skills & Objectives</p></Link>
                        <Link onClick={this.trainings} to="/Trainings" className={this.state.trainings ? "active" : "inactive"}><p>Trainings</p></Link>
                        <Link onClick={this.work} to="/Work history" className={this.state.work ? "active" : "inactive"}><p>Work history</p></Link>
                        <Link onClick={this.education} to="/Education" className={this.state.education ? "active" : "inactive"}><p>Education</p></Link>
                        <Link onClick={this.more} to="/More about" className={this.state.more ? "active" : "inactive"}><p>More about</p></Link>
                        <Link onClick={this.hobbies} to="/Hobbies" className={this.state.hobbies ? "active" : "inactive"}><p>Hobbies</p></Link>
                        <Link onClick={this.contact} to="/Contact" className={this.state.contact ? "active" : "inactive"}><p>Contact</p></Link>
                        <Link onClick={this.video} to="/Thank you" className={this.state.video ? "active" : "inactive"}><p>Thank you</p></Link>
                    </div>
                </div>
            </div >
        )
    };
}

export default Navbar;