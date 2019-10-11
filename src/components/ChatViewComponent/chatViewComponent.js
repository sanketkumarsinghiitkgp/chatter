import React, { Component } from "react";
import ChatTextBox from "../chatTextBox/chatTextBox";
import './styles.css'
const firebase=require('firebase');

class ChatViewComponent extends Component {
  componentDidUpdate = () => {
    const container = document.getElementById("chat-view-container");
    if (container) container.scrollTo(0, container.scrollHeight);
  };
  render() {
    const { chat, user } = this.props;
    //console.log(chat);
    return chat ? (
      /*Make this scrollable*/
      <div id="chat-view-container">
        <div className="urconv">
          <h3>
            Your conversation with{" "}
            {
              chat.users.filter(x => {
                return x !== user;
              })[0]
            }
          </h3>
        </div >
        {chat.messages.map((msg, index) => {
          /*Two cases for style assignment based on whether sent by user or by the other person */
          return <div key={index} className="message"><font color={msg.sender!==user?"red":"blue"}><b>{msg.sender}</b></font>
          <font color="white">{": "+msg.message}</font></div>;
        })}
        <ChatTextBox submitMsg={(msg)=>this.submitMsg(msg)}></ChatTextBox>
      </div>
    ) : (
      <div id="chat-view-container">Select a conversation</div>
    );
  }
  submitMsg = msg => {
    const { chat, user } = this.props;
    const frnd=  chat.users.filter(x => {
        return x !== user;
      })[0];
    const docId = this.getDocId(frnd);


    firebase
    .firestore()
    .collection('chats')
    .doc(docId)
    .update({
       messages: firebase.firestore.FieldValue.arrayUnion({
           sender: user,
           message: msg,
           timestamp: Date.now()
        }),
        
    })
  };
  getDocId = friend => {
    return [this.props.user, friend].sort().join(":");
  };
}

export default ChatViewComponent;
