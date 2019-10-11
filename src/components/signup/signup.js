import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { Link } from "react-router-dom";
import './styles.css';
const firebase = require("firebase");

class signupComponent extends Component {
  state = {};
  constructor() {
    super();
    this.setState({
      email: null,
      password: null,
      passwordConfirmation: null,
      error: ""
    });
  }
  render() {
    return (
      <div className="panel">
          <Row className="justify-content-md-center"><h1>
              Sign up
          </h1></Row>
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
          <Form.Group controlId="passwordConfirmation">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-enter password"
              onChange={e => {
                this.userTyping("passwordConfirmation", e);
              }}
            />
          </Form.Group>
          <div style={{ color: "red" }}>{this.state.error}</div>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <div>Already have an account?</div>
          <Link to="/chatter/login">Log in!</Link>
        </Form></Row>
      </div>
    );
  }

  submitSignup = e => {
    e.preventDefault();
    // console.log(this.state);
    if (!(this.state.password === this.state.passwordConfirmation)) {
      this.setState({
        error: "'Confirm Password' and 'Password' do not match."
      });
    } else {
      this.setState({
        error: ""
      });
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(authRes => {
          const userObj = {
            email: authRes.user.email
          };
          firebase
            .firestore()
            .collection("users")
            .doc(this.state.email)
            .set(userObj)
            .then(() => {
              this.props.history.push("/chatter/dashboard"); //prop received from the router.
            })
            .catch(dbError => {
              // console.log(dbError);
              this.setState({ error: "User could not be added" });
            });
        })
        .catch(authError => {
          // console.log(authError);
          this.setState({ error: "User could not be added" });
        });
    }
  };
  userTyping = (type, e) => {
    switch (type) {
      case "email":
        this.setState({ email: e.target.value });
        break;
      case "password":
        this.setState({ password: e.target.value });
        break;
      case "passwordConfirmation":
        this.setState({ passwordConfirmation: e.target.value });
        break;

      default:
        break;
    }
  };
}

export default signupComponent;
