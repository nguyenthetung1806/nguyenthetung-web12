import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Form, Input, Label, FormGroup, Button } from 'reactstrap';


class LoginModal extends Component {
    render() {
        return (
            <Modal isOpen={this.props.loginModalOpen} toggle={this.props.toggle} >
                <ModalHeader>
                    Login
                </ModalHeader>
                <ModalBody>
                    {this.renderBody()}
                </ModalBody>
            </Modal>
        );
    }
    state = {
        username: "",
        password: ""
    }
    login = () => {
        console.log(this.state);
    }

    renderBody() {
        return (
            <Form>
                <FormGroup>
                    <Label>username</Label>
                    <Input onChange={(event) => this.setState({ username: event.target.value })} />
                </FormGroup>
                <FormGroup>
                    <Label>password</Label>
                    <Input onChange={(event) => this.setState({ username: event.target.value })} />
                </FormGroup>
                <Button onClick={this.login} >Submit</Button>
            </Form>
        )
    }
}


export default LoginModal;