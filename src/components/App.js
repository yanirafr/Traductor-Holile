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
    // console.log(userText);
    this.forceUpdate();
    var saveWords = userText.split(" ");
    // console.log(saveWords);
    var changeWords = [];
    for (let word in saveWords) {
      // console.log(saveWords[word]);
      var wordLength = saveWords[word].length - 1;
      // console.log(wordLength);
      var lastLetter = saveWords[word].substr(wordLength);
      console.log(lastLetter);
      changeWords.push(saveWords[word].substr(0, wordLength).concat("e "));
      // console.log(changeWords[word]);
    }
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
