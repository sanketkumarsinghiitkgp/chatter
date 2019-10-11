import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
class ChatTextBox extends Component {
    constructor(){
        super();
        this.state={
            message: ''
        }
    }
    render() { 
        return ( <InputGroup className="mb-3" onSubmit={this.sendHandler}>
        <FormControl
          onKeyUp={(e)=>this.userTyping(e)}
          placeholder="Enter Message"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          id='chat-text-box'
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={this.sendHandler} >Send</Button>
        </InputGroup.Append>
      </InputGroup>);
    }
    userTyping=(e)=>{
        if(e.keyCode===13){
            this.sendHandler()
        }
        else{
            this.setState({message: e.target.value}); 
        }
    }
    validateMsg=(msg)=>{
        return (msg.length>0 && (msg.trim()).length>0);
    }
    sendHandler=()=>{
        //console.log(this.state.message);
        //console.log(this.validateMsg(this.state.message))
        if(this.validateMsg(this.state.message)){
            this.props.submitMsg(this.state.message);
            document.getElementById('chat-text-box').value='';
            
        }
      
    }
}
 
export default ChatTextBox;