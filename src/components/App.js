import React, { Component } from "react";
import "../stylesheet/bubble.scss";
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
        changeWords.push("holi");
      } else if (savedWords[word] === "Hola") {
        changeWords.push("Holi");
      }
      // COS / CAS
      else if (lastThrLetters === "cos" || lastThrLetters === "cas") {
        changeWords.push(
          savedWords[word].substr(0, wordLength - 2).concat("ques")
        );
      }
      // CO / CA
      else if (lastTwoLetters === "co" || lastTwoLetters === "ca") {
        changeWords.push(
          savedWords[word].substr(0, wordLength - 1).concat("que")
        );
      }
      // OS / AS
      else if (lastTwoLetters === "os" || lastTwoLetters === "as") {
        changeWords.push(
          savedWords[word].substr(0, wordLength - 1).concat("es")
        );
      }
      // O / A
      else if (lastLetter === "o" || lastLetter === "a") {
        changeWords.push(savedWords[word].substr(0, wordLength).concat("e"));
      }
      // Else
      else {
        changeWords.push(savedWords[word]);
      }
    }
    this.translation = changeWords.join(" ");
    this.tweet = encodeURIComponent(this.translation);
  }

  render() {
    return (
      <>
        <header className="header">
          <h1 className="title">Traductor Holilé</h1>
        </header>
        <main className="main">
          <div className="main__box">
            <div className="container">
              <div className="container__user-input talkbubble1">
                <UserInput sendText={this.TranslateText} />
              </div>
              <div className="container__translation talkbubble2">
                <p className="translation">{this.translation}</p>
              </div>
            </div>
            <div className="tweet-btn" title="Comparte en Twitter">
              <a
                className="tweet-btn__link"
                href={"https://twitter.com/intent/tweet?text=" + this.tweet}
                title="Comparte en Twitter"
                target="_blank"
              >
                <i class="fab fa-twitter"></i> Tweet!
              </a>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default App;
