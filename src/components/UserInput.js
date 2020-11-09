import React, { Component } from "react";

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.userText = "";
    this.HandleInput = this.HandleInput.bind(this);
  }

  HandleInput(ev) {
    this.userText = ev.currentTarget.value;
    this.props.sendText(this.userText);
    this.forceUpdate();
  }

  render() {
    return (
      <textarea
        onChange={this.HandleInput}
        className="user-input"
        name="user-input"
        id="user-input"
        cols="30"
        rows="10"
      ></textarea>
    );
  }
}

export default UserInput;
