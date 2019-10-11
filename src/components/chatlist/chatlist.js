import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import ChatBlock from './chatblock';
import Row from "react-bootstrap/Row";
import './styles.css'
const firebase=require('firebase');
class ChatlistComponent extends Component {
  state = {};
  render() {
    return (
      <Row className="pad justify-content-center"><div>
        <Row className="pad justify-content-center"><Button className="pad newchat" onClick={this.newChat}>New Chat</Button></Row>
        <Row className="pad justify-content-center">{this.props.chats ? (
          <div>
            {this.props.chats.map((chat, index) => {
              return (
                <ChatBlock id={index} userEmail={
                    chat.users.filter(
                      user => user !== this.props.userEmail
                    )[0] 
                  }
                  onClick={()=>{
                      this.props.selectChatFunction(index)
                     // console.log(index,'clicked');
                  }}
                  highlighted={index===this.props.selectedChatIndex}
                  >
                   {
                       chat.messages[chat.messages.length-1].message.substring(0,20)+'...'
                   } 
                  </ChatBlock>
              );
            })}
            
          </div>
        ) : null}</Row>
         <Row className="pad justify-content-center"><Button className="signout" onClick={this.signOut}>Sign Out</Button></Row>
      </div></Row>
    );
  }
  newChat = () => {
    //console.log("New chat button clicked");
    this.props.newChatButtonFunction();
  };
  signOut = () => {
    firebase.auth().signOut();
  };


}

export default ChatlistComponent;
