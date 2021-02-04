import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import "./modal.css"

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,

        };
    }
    getAlert() {
        this.setState({ show: true })
    }

    render() {
        return (
            <div className="wrapper">
                <Modal
                    show={this.state.show}
                    animation={true}
                    size="md" className="x"
                >
                    <Modal.Header className="bg-danger text-white text-center py-1">
                        <Modal.Title className="text-center">
                            <h5>Warning</h5>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="py-0 border">
                        <p>Take note that this form is just a presentation and might not work. Altough, if running on localhost it is actually sending an email. Check it out <a href="https://youtu.be/B9hBNmbptFU" target="_blank">here</a></p>
                    </Modal.Body>
                    <Modal.Footer className="py-1 d-flex justify-content-center">
                        <div>
                            <Button
                                variant="outline-dark" onClick={() => this.setState({ show: false })} >OK</Button>
                        </div>

                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
export default Example;