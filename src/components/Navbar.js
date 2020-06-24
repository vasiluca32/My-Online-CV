import React, { Component } from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";


class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            home: false,
            skills: false,
            work: false,
            education: false,
            more: false,
            hobbies: false,
            contact: false,
        };
    }
    componentDidMount() {
    }

    home = () => {
        this.resetState();
        this.setState({
            home: true,
        });
    }
    skills = () => {
        this.resetState();
        this.setState({
            skills: true,
        });
    }
    trainings = () => {
        this.resetState();
        this.setState({
            trainings: true
        });
    }
    work = () => {
        this.resetState();
        this.setState({
            work: true
        });
    }
    education = () => {
        this.resetState();
        this.setState({
            education: true
        });
    }
    more = () => {
        this.resetState();
        this.setState({
            more: true
        });
    }
    hobbies = () => {
        this.resetState();
        this.setState({
            hobbies: true
        });
    }
    contact = () => {
        this.resetState();
        this.setState({
            contact: true
        });
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
        });
    }

    render() {
        return (
            <div className="navigare">
                <Link onClick={this.home} to="/Home" className={this.state.home ? "active" : "inactive"}><p>Home</p></Link>
                <Link onClick={this.skills} to="/Skills & Objecives" className={this.state.skills ? "active" : "inactive"}><p>Skills & Objectives</p></Link>
                <Link onClick={this.trainings} to="/Trainings" className={this.state.trainings ? "active" : "inactive"}><p>Trainings</p></Link>
                <Link onClick={this.work} to="/Work history" className={this.state.work ? "active" : "inactive"}><p>Work history</p></Link>
                <Link onClick={this.education} to="/Education" className={this.state.education ? "active" : "inactive"}><p>Education</p></Link>
                <Link onClick={this.more} to="/More about" className={this.state.more ? "active" : "inactive"}><p>More about</p></Link>
                <Link onClick={this.hobbies} to="/Hobbies" className={this.state.hobbies ? "active" : "inactive"}><p>Hobbies</p></Link>
                <Link onClick={this.contact} to="/Contact" className={this.state.contact ? "active" : "inactive"}><p>Contact</p></Link>
            </div >
        )
    };
}

export default Navbar;