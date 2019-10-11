import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import './styles.css';
const firebase = require("firebase");

class NewChatComponent extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      message: null,

    };
  }
  render() {
    return (
      <div className="panelnc">
      <Row className="justify-content-center"><Form className="formnc" onSubmit={e => this.submitChat(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email of recipient"
            onChange={e => this.userTyping("username", e)}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            onChange={e => this.userTyping("message", e)}
          />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
      </Row>
      </div>
    );
  }
  userTyping = (type, e) => {
    switch (type) {
      case "username":
        this.setState({ username: e.target.value });
        break;
      case "message":
        this.setState({ message: e.target.value });
        break;
      default:
        break;
    }
  };
  buildDocId = () => {
    return [firebase.auth().currentUser.email, this.state.username]
      .sort()
      .join(":");
  };
  createChat = () => {
    this.props.createChatFunction(this.state.username, this.state.message);
  };
  goToChat = () => {
    this.props.goToChatFunction(this.buildDocId(), this.state.message);
  };

  submitChat = async e => {
    e.preventDefault();
    const userExists = await this.userExists();
    if (userExists) {
      const chatExists = await this.chatExists();
      if (chatExists) {
        this.goToChat();
      } else {
        this.createChat();
      }
    }
  };
  chatExists = async () => {
    const docId = this.buildDocId();
    const chat = await firebase
      .firestore()
      .collection("chats")
      .doc(docId)
      .get();
    //console.log(chat.exists);
    return chat.exists;
  };
  userExists = async () => {
    const userSnapshot = await firebase
      .firestore()
      .collection("users")
      .get();
    const exists = userSnapshot.docs
      .map(doc => doc.data().email)
      .includes(this.state.username);
    return exists;
  };
}

export default NewChatComponent;
