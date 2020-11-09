import React, { Component } from "react";

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.userText = "";
    this.HandleInput = this.HandleInput.bind(this);
  }

  HandleInput(ev) {
    this.userText = ev.currentTarget.value;
    // console.log(this.userText);
    this.props.sendText(this.userText);
    this.forceUpdate();
  }

  render() {
    return (
      <input
        onChange={this.HandleInput}
        type="text"
        className="user-input"
        name="user-input"
        id="user-input"
      />
    );
  }
}

export default UserInput;
