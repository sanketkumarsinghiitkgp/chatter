import React, { Component } from "react";
import ChatlistComponent from "../chatlist/chatlist";
import ChatViewComponent from "../ChatViewComponent/chatViewComponent";
import NewChatComponent from "../newChat/newChat";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './styles.css'
const firebase = require("firebase");

class dashboardComponent extends Component {
  state = {};
  constructor() {
    super();
    this.setState({
      selectedChat: null,
      newChatFormVisible: false,
      email: null,
      chats: []
    });
  }
  render() {
    return (
      <div>
       <Row> <Col className="left-side" xs={12} md={5} >
        <Row className="justify-content-center"><div>
          <ChatlistComponent
            history={this.props.history}
            newChatButtonFunction={this.newChatButtonClicked}
            selectChatFunction={this.selectChat}
            chats={this.state.chats}
            userEmail={this.state.email}
            selectedChatIndex={this.state.selectedChat}
          ></ChatlistComponent>
        </div>
        </Row>
        </Col>
        <Col className="right-side" xs={12} md={7}>
        {this.state.newChatFormVisible ? (
          <NewChatComponent goToChatFunction={this.goToChat} createChatFunction={this.newChatSubmit}></NewChatComponent>
        ) : (
          <ChatViewComponent
            user={this.state.email}
            chat={
              this.state.selectedChat !== null && this.state.chats
                ? this.state.chats[this.state.selectedChat]
                : null
            }
          ></ChatViewComponent>
        )}
        </Col>
        </Row>
      </div>
    );
  }
  goToChat = async (docKey, msg) => {
    const usersInChat = docKey.split(":");
    const chat = this.state.chats.find(_chat =>
      usersInChat.every(_user => _chat.users.includes(_user))
    );
    this.setState({ newChatFormVisible: false });
    await this.selectChat(this.state.chats.indexOf(chat));
    this.submitMessage(msg);
  };
  buildDocId = (friend) => [this.state.email, friend].sort().join(':');

  submitMessage = msg => {
    const docKey = this.buildDocId(
      this.state.chats[this.state.selectedChat].users.filter(
        _usr => _usr !== this.state.email
      )[0]
    );
    firebase
      .firestore()
      .collection("chats")
      .doc(docKey)
      .update({
        messages: firebase.firestore.FieldValue.arrayUnion({
          sender: this.state.email,
          message: msg,
          timestamp: Date.now()
        }),
        receiverHasRead: false
      });
  };
  newChatSubmit = async (username,message) => {
    const docId = this.buildDocId(username);
    await 
      firebase
        .firestore()
        .collection('chats')
        .doc(docId)
        .set({
          messages: [{
            message: message,
            sender: this.state.email
          }],
          users: [this.state.email, username],
          receiverHasRead: false
        })
    this.setState({ newChatFormVisible: false });
    this.selectChat(this.state.chats.length - 1);
  }
  selectChat = chatIndex => {
    this.setState({ selectedChat: chatIndex, newChatFormVisible: false });

    //console.log("selected a chat", this.state.selectedChat);
  };
  newChatButtonClicked = () => {
    this.setState({ selectedChat: null, newChatFormVisible: true });
    //console.log("new chat button clicked");
  };
  
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase
          .firestore()
          .collection("chats")
          .where("users", "array-contains", user.email)
          .onSnapshot(res => {
            const chats = res.docs.map(doc => doc.data());
            this.setState(
              {
                email: user.email,
                chats: chats
              },
              () => {console.log('')}
            );
          });
      } else {
        this.props.history.push("/login");
      }
    });
  };
}

export default dashboardComponent;
