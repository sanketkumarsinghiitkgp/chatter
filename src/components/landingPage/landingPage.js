import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

class landingPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Welcome to Chatter</h1>
          <p>
            This is a demo chat application made by me.
            <br />
            This application uses firebase as the back-end, and React.js, HTML
            and CSS for the front-end.
          </p>
          <p>
            <Button variant="primary">Source Code</Button>
          </p>
          <p>
            You can create an account with your email address and password. <br/>You
            can also use the dummy accounts:-<br/> <b>Alice:</b> (email: alice@chatter.com,
            password: mynameisalice) <br/><b>Bob:</b> (email: bob@chatter.com, password:
            mynameisbob)
          </p>
          <Row>
            <Col><Button variant="primary" onClick={this.signup}>Sign Up </Button></Col>
            <Col><Button variant="primary" onClick={this.login}>Log In </Button></Col>
            <Col md={9}><div/></Col>
          </Row>
          <p>
              My webpage: <a href="http://sanketkumarsinghiitkgp.github.io">http://sanketkumarsinghiitkgp.github.io</a><br/>
              Check out my other works at <a href="https://github.com/sanketkumarsinghiitkgp">https://github.com/sanketkumarsinghiitkgp</a>.
          </p>
        </Jumbotron>
        
      </div>
    );
  }

  signup=()=>{
    this.props.history.push('/chatter/signup');
  }
  login=()=>{
    this.props.history.push('/chatter/login');
  }
}



export default landingPage;
