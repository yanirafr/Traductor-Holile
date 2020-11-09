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
    var savedWords = userText.split(" ");
    // console.log(savedWords);
    var changeWords = [];
    for (let word in savedWords) {
      // console.log(savedWords[word]);
      var wordLength = savedWords[word].length - 1;
      // console.log(wordLength);
      var lastLetter = savedWords[word].substr(wordLength);
      // console.log(lastLetter);
      var lastTwoLetters = savedWords[word].substr(wordLength - 1, wordLength);
      // console.log(lastTwoLetters)
      var lastThrLetters = savedWords[word].substr(wordLength - 2, wordLength);

      // COS / CAS
      if (lastThrLetters === "cos" || lastThrLetters === "cas") {
        changeWords.push(
          savedWords[word].substr(0, wordLength - 2).concat("ques ")
        );
        console.log("en el cos/cas", savedWords[word]);
      }
      // CO / CA
      else if (lastTwoLetters === "co" || lastTwoLetters === "ca") {
        changeWords.push(
          savedWords[word].substr(0, wordLength - 1).concat("que ")
        );
        console.log("en el co/ca", savedWords[word]);
      }
      // OS / AS
      else if (lastTwoLetters === "os" || lastTwoLetters === "as") {
        changeWords.push(
          savedWords[word].substr(0, wordLength - 1).concat("es ")
        );
        console.log("en el os/as", savedWords[word]);
      }
      // O / A
      else if (lastLetter === "o" || lastLetter === "a") {
        changeWords.push(savedWords[word].substr(0, wordLength).concat("e "));
        console.log("en el else o/a", savedWords[word]);
      }
      // Else
      else {
        changeWords.push(savedWords[word]);
        console.log("en el else", savedWords[word]);
      }
      console.log(changeWords[word]);
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
