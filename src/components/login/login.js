import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import './styles.css';
const firebase = require("firebase");

class loginComponent extends Component {
  state = {};
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      error: ""
    };
  }
  render() {
    return (
      <div className="panel">
        <Row className="justify-content-md-center"><h1>Log in</h1></Row>
        <Row className="justify-content-md-center"><Form 
          onSubmit={e => {
            this.submitSignup(e);
          }}
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={e => {
                this.userTyping("email", e);
              }}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={e => {
                this.userTyping("password", e);
              }}
            />
          </Form.Group>
          <div style={{ color: "red" }}>{this.state.error}</div>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <div>Don't have an account?</div>
          <Link to="/chatter/signup">Sign Up!</Link>
        </Form>
        </Row>
      </div>
    );
  }
  userTyping = (type, e) => {
    switch (type) {
      case "email":
        this.setState({ email: e.target.value });
        break;
      case "password":
        this.setState({ password: e.target.value });
        break;
      default:
        break;
    }
    // console.log(this.state);
  };
  submitSignup = e => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.history.push("/chatter/dashboard");
      })
      .catch(err => {
        // console.log(err);
        this.setState({ error: "Incorrect Login credentials" });
        // console.log("see error message changed", this.state.error);
      });
  };
}

export default loginComponent;
