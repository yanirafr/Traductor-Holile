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
    this.forceUpdate();
    var savedWords = userText.split(" ");
    var changeWords = [];
    for (let word in savedWords) {
      // Variables
      var wordLength = savedWords[word].length - 1;
      var lastLetter = savedWords[word].substr(wordLength);
      var lastTwoLetters = savedWords[word].substr(wordLength - 1, wordLength);
      var lastThrLetters = savedWords[word].substr(wordLength - 2, wordLength);

      // HOLA
      if (savedWords[word] === "hola") {
        changeWords.push("holi ");
      }
      // COS / CAS
      else if (lastThrLetters === "cos" || lastThrLetters === "cas") {
        changeWords.push(
          savedWords[word].substr(0, wordLength - 2).concat("ques ")
        );
      }
      // CO / CA
      else if (lastTwoLetters === "co" || lastTwoLetters === "ca") {
        changeWords.push(
          savedWords[word].substr(0, wordLength - 1).concat("que ")
        );
      }
      // OS / AS
      else if (lastTwoLetters === "os" || lastTwoLetters === "as") {
        changeWords.push(
          savedWords[word].substr(0, wordLength - 1).concat("es ")
        );
      }
      // O / A
      else if (lastLetter === "o" || lastLetter === "a") {
        changeWords.push(savedWords[word].substr(0, wordLength).concat("e "));
      }
      // Else
      else {
        changeWords.push(savedWords[word]);
      }
    }
    this.translation = changeWords.toString().replace(",", " ");
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
