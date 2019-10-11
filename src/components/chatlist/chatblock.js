import React, { Component } from 'react';
import Avatar from 'react-avatar';
import Media from "react-bootstrap/Media";
import './styles.css'
class ChatBlock extends Component {
    state = {  }

    render() {
        //console.log(this.props.highlighted);
        return (<Media onClick={this.props.onClick} className={this.props.highlighted?"grey":"white"}>
            <Avatar name={this.props.userEmail }    />
            <Media.Body >
            <h5>{this.props.userEmail}</h5>
            <p>{this.props.children}</p>
            </Media.Body>
            </Media>  );
    }
}
 
export default ChatBlock;