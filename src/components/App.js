import React, { Component } from "react";
import "../stylesheet/App.scss";
import UserInput from "./UserInput";

class App extends Component {
  constructor(props) {
    super(props);
    this.translation = "";
    this.TranslateText = this.TranslateText.bind(this);
  }

  TranslateText(userText) {
    this.translation = userText;
    // console.log(this.translation);
    console.log(userText);
    this.forceUpdate();
  }

  render() {
    return (
      <div className="container">
        <UserInput sendText={this.TranslateText} />
        <p className="translation">{this.translation}</p>
      </div>
    );
  }
}

export default App;
