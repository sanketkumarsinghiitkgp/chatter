import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import loginComponent from './components/login/login';
import signupComponent from './components/signup/signup';
import dashboardComponent from './components/dashboard/dashboard'
import landingPage from './components/landingPage/landingPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const firebase = require("firebase");
require("firebase/firestore");

// not a safe practice, only for demonstration purpose.
firebase.initializeApp({
  apiKey: "AIzaSyC7p4JkwdgXsegLf6E2kSxkneQdfd8QxTI",
  authDomain: "chatter-4228b.firebaseapp.com",
  databaseURL: "https://chatter-4228b.firebaseio.com",
  projectId: "chatter-4228b",
  storageBucket: "chatter-4228b.appspot.com",
  messagingSenderId: "135428777546",
  appId: "1:135428777546:web:cba2da25b8e262682ea8b3",
  measurementId: "G-VNJL240M7Q"
});

const routing=(
<Router>
    <div id='routing-container'>
    <Route path='/chatter/home' component={landingPage}></Route>
    <Route path='/chatter/login' component={loginComponent}></Route>
    <Route path='/chatter/signup' component={signupComponent}></Route>
    <Route path='/chatter/dashboard' component={dashboardComponent}></Route>
    </div>
</Router>
);

ReactDOM.render(<div>{routing}</div>, document.getElementById("root"));
serviceWorker.unregister();
